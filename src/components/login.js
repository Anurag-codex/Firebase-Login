import React, { useState } from 'react';
import { signInWithPopup } from 'firebase/auth';
import { auth, provider } from './Firebaseconfig';
import { CheckCircle2, Loader2 } from 'lucide-react';

const LoginPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [error, setError] = useState('');

  const handleGoogleLogin = async () => {
    setError('');
    setIsLoading(true);

    try {
      const result = await signInWithPopup(auth, provider);
      // Handle successful login
      setIsSuccess(true);
      console.log('User logged in:', result.user);
    } catch (err) {
      setError('Login failed. Please try again.');
      console.error('Login error:', err.message);
    } finally {
      setIsLoading(false);
    }
  };

  if (isSuccess) {
    return (
        <div className="min-h-screen bg-gradient-to-br from-green-500 to-purple-600 flex items-center justify-center p-4 animate-gradient-x">
          <div className="backdrop-blur-xl bg-white/30 rounded-2xl shadow-2xl p-8 max-w-md w-full transform animate-fadeIn border border-white/20 hover:shadow-glow transition-all duration-500">
            <div className="flex flex-col items-center space-y-4">
              <div className="relative">
                <div className="absolute inset-0 bg-white/30 rounded-full blur-xl animate-pulse"></div>
                <CheckCircle2 className="w-16 h-16 text-white animate-success relative" />
              </div>
              
              <h2 className="text-3xl font-bold text-white animate-slideUp">
                Hey user!
              </h2>
              
              <p className="text-white/90 text-center animate-fadeIn delay-200">
                You're Welcome
              </p>
              
              <div className="w-full h-2 bg-white/20 rounded-full mt-4 overflow-hidden">
                <div className="w-full h-full bg-white/60 rounded-full animate-progressBar" />
              </div>
            </div>
          </div>
    
          <style jsx global>{`
            @keyframes fadeIn {
              from { opacity: 0; transform: scale(0.9); }
              to { opacity: 1; transform: scale(1); }
            }
    
            @keyframes slideUp {
              from { opacity: 0; transform: translateY(20px); }
              to { opacity: 1; transform: translateY(0); }
            }
    
            @keyframes success {
              0% { transform: scale(0.8); opacity: 0; }
              40% { transform: scale(1.2); opacity: 0.8; }
              60% { transform: scale(0.9); opacity: 0.9; }
              80% { transform: scale(1.1); opacity: 0.95; }
              100% { transform: scale(1); opacity: 1; }
            }
    
            @keyframes progressBar {
              0% { transform: translateX(-100%); }
              50% { transform: translateX(-10%); }
              100% { transform: translateX(0); }
            }
    
            @keyframes gradient-x {
              0% { background-position: 0% 50%; }
              50% { background-position: 100% 50%; }
              100% { background-position: 0% 50%; }
            }
    
            .animate-fadeIn {
              animation: fadeIn 0.3s ease-out forwards;
            }
    
            .animate-slideUp {
              animation: slideUp 0.6s ease-out forwards;
            }
    
            .animate-success {
              animation: success 0.9s ease-out forwards;
            }
    
            .animate-progressBar {
              animation: progressBar 4s ease-out forwards;
            }
    
            .animate-gradient-x {
              background-size: 200% 200%;
              animation: gradient-x 15s ease infinite;
            }
    
            .hover\:shadow-glow:hover {
              box-shadow: 0 0 30px rgba(255, 255, 255, 0.2);
            }
            
            .delay-200 {
              animation-delay: 200ms;
            }
          `}</style>
        </div>
      );
    }
  
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center p-4">
        <div className="backdrop-blur-xl bg-white/30 rounded-2xl shadow-2xl p-8 max-w-md w-full transform hover:scale-105 transition-transform duration-300 border border-white/20">
          <div className="flex flex-col items-center space-y-6">
            {/* Logo */}
            <div className="w-20 h-20 bg-white/80 backdrop-blur-xl rounded-full shadow-lg flex items-center justify-center p-4">
              <svg viewBox="0 0 24 24" className="w-full h-full">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
            </div>
  
            <div className="text-center space-y-2">
              <h1 className="text-3xl font-bold text-white">Welcome</h1>
              <p className="text-white/90">Sign in with Google to continue</p>
            </div>
  
            {error && (
              <div className="w-full p-4 bg-red-500/10 backdrop-blur-xl rounded-lg text-red-100 text-sm text-center border border-red-500/20">
                {error}
              </div>
            )}
  
            <button
              onClick={handleGoogleLogin}
              disabled={isLoading}
              className={`w-full px-6 py-3 bg-white/80 backdrop-blur-xl border border-white/20 hover:bg-white/90 rounded-lg shadow-lg transform transition-all duration-300 flex items-center justify-center space-x-3 ${
                isLoading ? 'opacity-70 cursor-not-allowed' : 'hover:-translate-y-1'
              }`}
            >
              {isLoading ? (
                <Loader2 className="w-6 h-6 animate-spin text-gray-600" />
              ) : (
                <>
                  <svg viewBox="0 0 24 24" className="w-6 h-6">
                    <path
                      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                      fill="#4285F4"
                    />
                    <path
                      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                      fill="#34A853"
                    />
                    <path
                      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                      fill="#FBBC05"
                    />
                    <path
                      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                      fill="#EA4335"
                    />
                  </svg>
                  <span className="text-gray-600 font-medium">Continue with Google</span>
                </>
              )}
            </button>
  
            <p className="text-sm text-white/80 text-center">
              By continuing, you agree to our{' '}
              <button className="text-white hover:text-white/90">Terms of Service</button> and{' '}
              <button className="text-white hover:text-white/90">Privacy Policy</button>.
            </p>
          </div>
        </div>
      </div>
    );
  };

export default LoginPage;

