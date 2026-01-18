'use client';

import { createContext, useContext, useEffect, useState } from 'react';
import { apiClient } from '../api/apiClient';

const AuthContext = createContext({});

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

  const checkAuthStatus = () => {
    try {
      const userData = localStorage.getItem('userData');

      if (userData) {
        setUser(JSON.parse(userData));
        setIsAuthenticated(true);
      }
    } catch (error) {
      clearAuthData();
    } finally {
      setIsLoading(false);
    }
  };

  // Handle session expiry on API calls
  const handleApiError = (error) => {
    if (error.message?.includes('401') || error.message?.includes('Unauthorized')) {
      clearAuthData();
    }
  };

  const login = async (credentials) => {
    try {
      setIsLoading(true);
      const response = await apiClient.login(credentials);

      const userData = response.user || response.member || { username: credentials.username };
      localStorage.setItem('userData', JSON.stringify(userData));

      setUser(userData);
      setIsAuthenticated(true);

      return { success: true, data: response };
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
    localStorage.removeItem('userData');
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
