
import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';
import LoginForm from '@/components/auth/LoginForm';
import SignupForm from '@/components/auth/SignupForm';
import SocialLogin from '@/components/auth/SocialLogin';

const AuthPage = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const navigate = useNavigate();

  const handleAuthSuccess = () => {
    // Redirect to home page after successful authentication
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex flex-col">
      {/* Header */}
      <div className="p-6">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center">
              <span className="text-primary-foreground text-heading text-lg font-bold">H</span>
            </div>
            <span className="text-display text-2xl text-foreground">Havit</span>
          </Link>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors">
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex items-center justify-center p-6">
        <div className="w-full max-w-md space-y-6">
          {/* Welcome Message */}
          <div className="text-center space-y-2">
            <h1 className="text-display text-3xl font-bold text-foreground">
              {isSignUp ? 'Join Havit' : 'Welcome back'}
            </h1>
            <p className="text-body text-muted-foreground">
              {isSignUp 
                ? 'Start sharing, caring, and reducing waste with your community'
                : 'Sign in to continue sharing and caring'
              }
            </p>
          </div>

          {/* Auth Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-center">
                {isSignUp ? 'Create your account' : 'Sign in to your account'}
              </CardTitle>
            </CardHeader>
            <CardContent>
              {/* Social Login */}
              <div className="space-y-4">
                <SocialLogin onSuccess={handleAuthSuccess} />
                
                <div className="relative">
                  <div className="absolute inset-0 flex items-center">
                    <Separator />
                  </div>
                  <div className="relative flex justify-center text-xs uppercase">
                    <span className="bg-card px-2 text-muted-foreground">Or continue with email</span>
                  </div>
                </div>

                {/* Email Forms */}
                {isSignUp ? (
                  <SignupForm onSuccess={handleAuthSuccess} />
                ) : (
                  <LoginForm onSuccess={handleAuthSuccess} />
                )}
              </div>

              {/* Toggle Auth Mode */}
              <div className="mt-6 text-center">
                <span className="text-sm text-muted-foreground">
                  {isSignUp ? 'Already have an account?' : "Don't have an account?"}
                </span>
                <Button
                  variant="link"
                  className="px-1 text-sm"
                  onClick={() => setIsSignUp(!isSignUp)}
                >
                  {isSignUp ? 'Sign in' : 'Sign up'}
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;
