import React from 'react';
import { Link } from 'react-router-dom';
import LoginForm from '../components/auth/LoginForm';
import { FileText } from 'lucide-react';

const LoginPage: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-100 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-md mb-6">
        <Link to="/" className="flex items-center justify-center">
          <FileText className="h-12 w-12 text-teal-600" />
        </Link>
        <h2 className="mt-3 text-center text-3xl font-extrabold text-gray-900">ResumeAI</h2>
      </div>

      <LoginForm />
    </div>
  );
};

export default LoginPage;