import React from 'react';
import { Link } from 'react-router-dom';
import { Github, Twitter, Mail, Globe } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">ResumeAI</h3>
            <p className="text-gray-300 text-sm">
              Leveraging AI to help you build ATS-optimized resumes and automate your job search.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-white">
                <Github size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Mail size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-white">
                <Globe size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Features</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/resume-builder" className="hover:text-white">Resume Builder</Link></li>
              <li><Link to="/templates" className="hover:text-white">Resume Templates</Link></li>
              <li><Link to="/job-search" className="hover:text-white">Job Search</Link></li>
              <li><Link to="/dashboard" className="hover:text-white">Application Tracking</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><a href="#" className="hover:text-white">Resume Tips</a></li>
              <li><a href="#" className="hover:text-white">Cover Letter Guide</a></li>
              <li><a href="#" className="hover:text-white">Career Advice</a></li>
              <li><a href="#" className="hover:text-white">Interview Preparation</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-300 text-sm">
              <li><Link to="/about" className="hover:text-white">About Us</Link></li>
              <li><Link to="/privacy" className="hover:text-white">Privacy Policy</Link></li>
              <li><Link to="/terms" className="hover:text-white">Terms of Service</Link></li>
              <li><Link to="/contact" className="hover:text-white">Contact Us</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-gray-700 text-center text-gray-400 text-sm">
          <p>&copy; {new Date().getFullYear()} ResumeAI. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;