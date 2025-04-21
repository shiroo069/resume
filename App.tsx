import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { AuthProvider } from './contexts/AuthContext';
import { ResumeProvider } from './contexts/ResumeContext';
import { JobProvider } from './contexts/JobContext';
import AppRoutes from './routes';

function App() {
  return (
    <Router>
      <AuthProvider>
        <ResumeProvider>
          <JobProvider>
            <AppRoutes />
          </JobProvider>
        </ResumeProvider>
      </AuthProvider>
    </Router>
  );
}

export default App;