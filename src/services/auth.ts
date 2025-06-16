
import { LoginFormData, SignupFormData } from '@/lib/auth-schemas';

export const authService = {
  async login(data: LoginFormData) {
    // Simulate API call
    console.log('Logging in with:', data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock success response
    return {
      success: true,
      user: {
        id: '1',
        name: 'John Doe',
        email: data.email,
      },
      token: 'mock-jwt-token'
    };
  },

  async signup(data: SignupFormData) {
    // Simulate API call
    console.log('Signing up with:', data);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // Mock success response
    return {
      success: true,
      user: {
        id: '2',
        name: data.name,
        email: data.email,
      },
      token: 'mock-jwt-token'
    };
  },

  async loginWithGoogle() {
    console.log('Google login initiated');
    // In a real app, this would redirect to Google OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      user: {
        id: 'google-1',
        name: 'Google User',
        email: 'user@gmail.com',
      },
      token: 'mock-google-token'
    };
  },

  async loginWithFacebook() {
    console.log('Facebook login initiated');
    // In a real app, this would redirect to Facebook OAuth
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      user: {
        id: 'fb-1',
        name: 'Facebook User',
        email: 'user@facebook.com',
      },
      token: 'mock-facebook-token'
    };
  }
};
