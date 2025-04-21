import React from 'react';
import { Link } from 'react-router-dom';
import { FileText, Briefcase, LayoutDashboard, Check, Star, Sparkles } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-teal-700 to-teal-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-24">
          <div className="md:flex md:items-center md:justify-between">
            <div className="md:w-1/2 mb-12 md:mb-0">
              <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-tight">
                Automate Your Job Search With AI-Powered Resumes
              </h1>
              <p className="text-xl md:text-2xl text-teal-100 mb-8 leading-relaxed">
                Create ATS-optimized resumes and automate your job applications across multiple platforms.
              </p>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <Link
                  to="/register"
                  className="px-8 py-3 bg-white text-teal-800 rounded-md font-semibold shadow-lg hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3 border-2 border-white text-white rounded-md font-semibold hover:bg-white hover:bg-opacity-10 transition-colors duration-200 text-center"
                >
                  Sign In
                </Link>
              </div>
            </div>
            <div className="md:w-1/2 md:pl-12">
              <div className="relative mx-auto w-full max-w-md">
                <div className="shadow-2xl rounded-lg overflow-hidden border-4 border-white border-opacity-20">
                  <img
                    src="https://images.pexels.com/photos/3894378/pexels-photo-3894378.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="Resume Platform"
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-xl p-4 w-32 border border-gray-100">
                  <div className="flex items-center justify-center mb-2">
                    <Sparkles className="h-6 w-6 text-purple-600" />
                  </div>
                  <p className="text-center text-sm font-semibold text-gray-900">AI-Powered Optimization</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Powerful Features</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Everything you need to create professional resumes and streamline your job applications
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-teal-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Resume Builder</h3>
              <p className="text-gray-600 mb-4">
                Create professional, ATS-optimized resumes with our intuitive builder. Choose from multiple templates designed to showcase your skills.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Multiple professional templates</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">AI-powered content suggestions</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-teal-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">ATS optimization built-in</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-purple-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <Briefcase className="h-6 w-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Job Discovery</h3>
              <p className="text-gray-600 mb-4">
                Find the perfect job opportunities matched to your skills and experience. Our AI analyzes your resume to find the best matches.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Intelligent job matching</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Personalized job recommendations</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-purple-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Integration with major job platforms</span>
                </li>
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="bg-blue-100 rounded-lg w-12 h-12 flex items-center justify-center mb-4">
                <LayoutDashboard className="h-6 w-6 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">Application Tracker</h3>
              <p className="text-gray-600 mb-4">
                Keep track of all your applications in one place. Monitor status, set reminders, and never miss a follow-up opportunity.
              </p>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Centralized application tracking</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Status updates and analytics</span>
                </li>
                <li className="flex items-start">
                  <Check className="h-5 w-5 text-blue-500 mr-2 flex-shrink-0 mt-0.5" />
                  <span className="text-gray-600">Interview preparation tools</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-extrabold text-gray-900 mb-4">Success Stories</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              See how our platform has helped candidates land their dream jobs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Michael Johnson</h4>
                  <p className="text-gray-600">Software Engineer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "After using ResumeAI, I received call-backs from 80% of the positions I applied to. The AI optimization made a huge difference!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">Sarah Williams</h4>
                  <p className="text-gray-600">Marketing Manager</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "The automated job application feature saved me hours of time. I was able to apply to 3x more positions and landed my dream job!"
              </p>
            </div>

            <div className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <div className="flex-shrink-0">
                  <img
                    className="h-12 w-12 rounded-full"
                    src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                    alt="User"
                  />
                </div>
                <div className="ml-4">
                  <h4 className="text-lg font-bold text-gray-900">David Chen</h4>
                  <p className="text-gray-600">Product Designer</p>
                </div>
              </div>
              <div className="flex mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-600">
                "The application tracker helped me stay organized during my job search. I could see exactly where I stood with each company."
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-teal-700 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-extrabold mb-6">Ready to Supercharge Your Job Search?</h2>
          <p className="text-xl text-teal-100 mb-8 max-w-3xl mx-auto">
            Start building your AI-optimized resume today and apply to jobs with a single click.
          </p>
          <Link
            to="/register"
            className="inline-block px-8 py-3 bg-white text-teal-800 rounded-md font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get Started for Free
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HomePage;