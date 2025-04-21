import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './contexts/AuthContext';

// Layouts
import MainLayout from './components/layout/MainLayout';
import PublicLayout from './components/layout/PublicLayout';

// Public Pages
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';

// Protected Pages
import DashboardPage from './pages/DashboardPage';
import ResumeBuilderPage from './pages/ResumeBuilderPage';
import JobSearchPage from './pages/JobSearchPage';
import ApplicationsPage from './pages/ApplicationsPage';

const AppRoutes: React.FC = () => {
  const { user } = useAuth();
  
  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<PublicLayout />}>
        <Route index element={<HomePage />} />
        <Route path="login" element={user ? <Navigate to="/dashboard" /> : <LoginPage />} />
        <Route path="register" element={user ? <Navigate to="/dashboard" /> : <RegisterPage />} />
      </Route>
      
      {/* Protected Routes */}
      <Route path="/" element={<MainLayout />}>
        <Route path="dashboard" element={<DashboardPage />} />
        <Route path="resume-builder" element={<ResumeBuilderPage />} />
        <Route path="job-search" element={<JobSearchPage />} />
        <Route path="applications" element={<ApplicationsPage />} />
      </Route>
      
      {/* Catch-all route */}
      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  );
};

export default AppRoutes;