'use client';

import { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { apiClient } from '../api/apiClient';

const AuthContext = createContext({});

// Cache duration in milliseconds (30 minutes)
const AUTH_CACHE_DURATION = 30 * 60 * 1000;

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    checkAuthStatus();

    // Listen for session expiry
    const handleSessionExpired = () => clearAuthData();
    window.addEventListener('session-expired', handleSessionExpired);

    return () => window.removeEventListener('session-expired', handleSessionExpired);
  }, []);

  const checkAuthStatus = useCallback(async () => {
    // Skip on server-side
    if (typeof window === 'undefined') {
      setIsLoading(false);
      return;
    }

    const cachedUser = localStorage.getItem('user');
    const lastCheck = localStorage.getItem('lastAuthCheck');
    
    if (cachedUser && lastCheck && (Date.now() - parseInt(lastCheck)) < AUTH_CACHE_DURATION) {
      setUser(JSON.parse(cachedUser));
      setIsAuthenticated(true);
      setIsLoading(false);
      return;
    }
    
    try {
      const member = await apiClient.checkSession();
      localStorage.setItem('user', JSON.stringify(member));
      localStorage.setItem('lastAuthCheck', Date.now().toString());
      setUser(member);
      setIsAuthenticated(true);
    } catch (error) {
      clearAuthData();
    } finally {
      setIsLoading(false);
    }
  }, []);

  // Handle session expiry on API calls
  const handleApiError = (error) => {
    if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
      clearAuthData();
    }
  };

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      await apiClient.login(credentials);

      // Login only creates session, get member data from /me
      const member = await apiClient.checkSession();
      
      // Cache the user data
      localStorage.setItem('user', JSON.stringify(member));
      localStorage.setItem('lastAuthCheck', Date.now().toString());
      
      setUser(member);
      setIsAuthenticated(true);

      return { success: true, member };
    } catch (error) {
      return { success: false, error: error.message };
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async () => {
    try {
      await apiClient.logout();
    } catch (error) {
      // Even if logout API fails, clear local state
      handleApiError(error);
    } finally {
      clearAuthData();
    }
  };

  const clearAuthData = () => {
    localStorage.removeItem('user');
    localStorage.removeItem('lastAuthCheck');
    setUser(null);
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider value={{
      user,
      isAuthenticated,
      isLoading,
      login,
      logout,
      clearAuthData // Expose for API error handling
    }}>
      {children}
    </AuthContext.Provider>
  );
};
