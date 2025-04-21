import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { useJobs } from '../contexts/JobContext';
import DashboardStats from '../components/dashboard/DashboardStats';
import ApplicationTimeline from '../components/dashboard/ApplicationTimeline';
import { DashboardStats as Stats } from '../types';
import { FileText, Briefcase, BarChart } from 'lucide-react';

const DashboardPage: React.FC = () => {
  const { user } = useAuth();
  const { applications, jobs } = useJobs();
  
  // Calculate dashboard statistics
  const calculateStats = (): Stats => {
    const totalApplications = applications.length;
    const activeApplications = applications.filter(app => 
      app.status === 'applied' || app.status === 'interview'
    ).length;
    const interviews = applications.filter(app => app.status === 'interview').length;
    const offers = applications.filter(app => app.status === 'offer').length;
    const rejections = applications.filter(app => app.status === 'rejected').length;
    
    // Calculate application success rate (offers / completed applications)
    const completedApplications = offers + rejections;
    const applicationSuccessRate = completedApplications > 0 
      ? Math.round((offers / completedApplications) * 100) 
      : 0;
    
    return {
      totalApplications,
      activeApplications,
      interviews,
      offers,
      rejections,
      applicationSuccessRate,
    };
  };
  
  // Get job details for applications
  const getApplicationsWithJobs = () => {
    return applications.map(application => {
      const job = jobs.find(job => job.id === application.jobId) || {
        id: '',
        title: 'Unknown Job',
        company: 'Unknown Company',
        location: '',
        description: '',
        requirements: [],
        postDate: '',
        source: '',
        sourceUrl: '',
      };
      return { application, job };
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Dashboard</h1>
          <p className="mt-1 text-sm text-gray-500">
            Welcome back, {user?.name}! Here's your job search overview.
          </p>
        </div>
        <div className="mt-4 md:mt-0 flex">
          <Link
            to="/resume-builder"
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 mr-4"
          >
            <FileText className="mr-2 -ml-1 h-5 w-5" />
            Create Resume
          </Link>
          <Link
            to="/job-search"
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <Briefcase className="mr-2 -ml-1 h-5 w-5" />
            Find Jobs
          </Link>
        </div>
      </div>

      {/* Stats */}
      <div className="mb-8">
        <DashboardStats stats={calculateStats()} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Application Timeline */}
        <div className="lg:col-span-2">
          <ApplicationTimeline applications={getApplicationsWithJobs()} />
        </div>

        {/* Application by Status */}
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200">
            <h2 className="text-lg font-medium text-gray-900">Applications by Status</h2>
          </div>
          <div className="p-6">
            <div className="flex items-center justify-center h-64">
              <div className="text-center">
                <BarChart className="w-16 h-16 text-gray-300 mx-auto" />
                <p className="mt-2 text-gray-500">Charts and analytics will appear here as you apply to jobs</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Recent Job Matches */}
      <div className="mt-8">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-200 flex justify-between items-center">
            <h2 className="text-lg font-medium text-gray-900">Recent Job Matches</h2>
            <Link to="/job-search" className="text-sm text-teal-600 hover:text-teal-800">
              View all
            </Link>
          </div>
          <div className="p-6">
            {jobs.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {jobs.slice(0, 3).map(job => (
                  <div key={job.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow duration-200">
                    <h3 className="font-medium text-gray-900 line-clamp-1">{job.title}</h3>
                    <p className="text-gray-600 text-sm">{job.company}</p>
                    <p className="text-gray-500 text-xs mt-1">{job.location}</p>
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-xs text-gray-500">Match: {job.matchScore || 'N/A'}%</span>
                      <Link to={`/job-search?id=${job.id}`} className="text-sm text-teal-600 hover:text-teal-800">
                        View
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-8">
                <p className="text-gray-500">No job matches yet. Start by creating a resume!</p>
                <Link
                  to="/resume-builder"
                  className="mt-4 inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
                >
                  Create Resume
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardPage;