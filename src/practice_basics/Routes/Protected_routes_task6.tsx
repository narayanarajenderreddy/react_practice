import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { useState } from 'react';

function Protected_Routes() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login setAuth={setIsAuthenticated} />} />
        
        {/* Protected Route */}
        <Route 
          path="/dashboard" 
          element={
            <ProtectedRoute isAuthenticated={isAuthenticated}>
              <Dashboard />
            </ProtectedRoute>
          } 
        />
      </Routes>
    </BrowserRouter>
  );
}

// Protected Route Component
function ProtectedRoute({ isAuthenticated, children }) {
  console.log("children:",children);
  console.log("isAuthenticated:",isAuthenticated);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;  // Redirect to login
  }
  return children;  // Show protected content
}

function Home() {
  return <h1>Home (Public)</h1>;
}

function Login({ setAuth }) {
  console.log("is_auth default value:",setAuth)
  const handleLogin = () => {
    setAuth(true);
    alert('Logged in!');
  };

  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}

function Dashboard() {
  return <h1>Dashboard (Protected)</h1>;
}

export default Protected_Routes;