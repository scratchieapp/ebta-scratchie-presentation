import React, { useState, useEffect } from 'react';
import Login from './components/Login';
import Presentation from './components/Presentation';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if user is already authenticated
    const authStatus = sessionStorage.getItem('presentationAuth');
    if (authStatus === 'authenticated') {
      setIsAuthenticated(true);
    }
    setIsLoading(false);
  }, []);

  const handleAuthentication = (authStatus) => {
    setIsAuthenticated(authStatus);
  };

  const handleLogout = () => {
    sessionStorage.removeItem('presentationAuth');
    setIsAuthenticated(false);
  };

  // Show loading screen briefly
  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-blue-900 to-orange-600 flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-white/30 border-t-white rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-white text-lg">Loading presentation...</p>
        </div>
      </div>
    );
  }

  // Show login screen if not authenticated
  if (!isAuthenticated) {
    return <Login onAuthenticated={handleAuthentication} />;
  }

  // Show presentation if authenticated
  return (
    <div className="relative">
      <Presentation />
      {/* Optional: Add logout button - uncomment if needed */}
      {/* 
      <button
        onClick={handleLogout}
        className="fixed top-4 right-4 z-20 px-3 py-1 bg-red-500 hover:bg-red-600 text-white text-sm rounded-lg transition-colors"
      >
        Logout
      </button>
      */}
    </div>
  );
}

export default App;