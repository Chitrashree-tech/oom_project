import React, { useState } from 'react';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';

function App() {
  // Use state to simulate authentication and switch between screens
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const handleLoginSuccess = () => {
    setIsAuthenticated(true);
  };
  
  const handleLogout = () => {
    // Based on Activity Diagram: end session and clear token
    alert("Logged out successfully. Ending session.");
    setIsAuthenticated(false);
  };

  return (
    <div className="App">
      {isAuthenticated ? (
        // User is logged in, show the main file manager
        <DashboardPage onLogout={handleLogout} />
      ) : (
        // User is logged out, show the authentication screen
        <AuthPage onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;