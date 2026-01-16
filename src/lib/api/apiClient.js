const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ||
  (process.env.NODE_ENV === 'production'
    ? 'https://capibara-production.up.railway.app'
    : 'http://localhost:8080');

class ApiClient {
  constructor() {
    this.baseURL = API_BASE_URL;
  }

  async login(credentials) {
    try {
      const response = await fetch(`${this.baseURL}/api/v1/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          member: {
            id: credentials.username,
            password: credentials.password
          }
        }),
        credentials: 'include',
      });

      if (!response.ok) {
        if (response.status === 404) {
          throw new Error('Invalid username');
        }
        if (response.status === 400) {
          throw new Error('Invalid credentials');
        }
        throw new Error('Login failed');
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'TypeError' || error.message === 'Failed to fetch') {
        throw new Error('Connection error. Please try again.');
      }
      throw error;
    }
  }

  async logout() {
    try {
      const response = await fetch(`${this.baseURL}/api/v1/logout`, {
        method: 'POST',
        credentials: 'include',
      });

      if (!response.ok) {
        throw new Error('Logout failed');
      }

      return await response.json();
    } catch (error) {
      if (error.name === 'TypeError' || error.message === 'Failed to fetch') {
        throw new Error('Connection error. Please try again.');
      }
      throw error;
    }
  }
}

export const apiClient = new ApiClient();
