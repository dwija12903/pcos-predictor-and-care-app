import React, { useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavBar from './components/NavBar';
import { AuthContext, AuthProvider } from './components/LogIn/AuthContext';

// load components
import Home from './components/Home';
import About from './components/About';
import Prediction from './components/Prediction';
import MyStory from './components/MyStory';
import ChatBot from './components/ChatBot';
import Login from './components/LogIn/Login';
import SignUp from './components/LogIn/SignUp';
import AboutMe from './components/AboutMe';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated } = useContext(AuthContext);
  return isAuthenticated ? children : <Navigate to="/login" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<SignUp />} />

          <Route path="/" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/about" element={<ProtectedRoute><About /></ProtectedRoute>} />
          <Route path="/prediction" element={<ProtectedRoute><Prediction /></ProtectedRoute>} />
          <Route path="/my-story" element={<ProtectedRoute><MyStory /></ProtectedRoute>} />
          <Route path="/chatbot" element={<ProtectedRoute><ChatBot /></ProtectedRoute>} />
          <Route path="/aboutme" element={<ProtectedRoute><AboutMe /></ProtectedRoute>} />

          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;
