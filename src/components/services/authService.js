import axios from 'axios';
import jwtDecode from 'jwt-decode';

export const signIn = async (credentials) => {
    try {
      const response = await axios.post('/api/auth/signin', credentials);
      const token = response.data.token;
      setAuthToken(token); // Set the token in the request headers
      const user = jwtDecode(token); // Decode the token to get user information
      return user;
    } catch (error) {
      throw error.response.data;
    }
};

export const signUp = async (userData) => {
    try {
      const response = await axios.post('/api/auth/signup', userData);
      const token = response.data.token;
      setAuthToken(token); // Set the token in the request headers
      const user = jwtDecode(token); // Decode the token to get user information
      return user;
    } catch (error) {
      throw error.response.data;
    }
};

export const setAuthToken = (token) => {
    if (token) {
      // Set the token in the request headers
      axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      // Store the token in local storage
      localStorage.setItem('token', token);
    } else {
      // Remove the token from the request headers
      delete axios.defaults.headers.common['Authorization'];
      // Remove the token from local storage
      localStorage.removeItem('token');
    }
  };
  
  export const getAuthToken = () => {
    return localStorage.getItem('token');
};
  
    