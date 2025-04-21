import React, { useState, useEffect } from 'react';
import { useJobs } from '../contexts/JobContext';
import ApplicationStatus from '../components/job/ApplicationStatus';
import { Briefcase } from 'lucide-react';

const ApplicationsPage: React.FC = () => {
  const { applications, jobs } = useJobs();
  const [filter, setFilter] = useState('all');
  
  const getFilteredApplications = () => {
    if (filter === 'all') {
      return applications;
    }
    return applications.filter(app => app.status === filter);
  };
  
  const getJobDetails = (jobId: string) => {
    return jobs.find(job => job.id === jobId) || {
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
  };
  
  const filteredApplications = getFilteredApplications();
  
  // Count applications by status
  const counts = {
    all: applications.length,
    saved: applications.filter(app => app.status === 'saved').length,
    applied: applications.filter(app => app.status === 'applied').length,
    interview: applications.filter(app => app.status === 'interview').length,
    offer: applications.filter(app => app.status === 'offer').length,
    rejected: applications.filter(app => app.status === 'rejected').length,
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">My Applications</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track and manage your job applications
        </p>
      </div>

      <div className="mb-8 bg-white shadow rounded-lg overflow-hidden">
        <div className="px-6 py-4 border-b border-gray-200">
          <h2 className="text-lg font-medium text-gray-900">Application Status</h2>
        </div>
        
        <div className="border-b border-gray-200">
          <nav className="flex -mb-px">
            <button
              onClick={() => setFilter('all')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'all'
                  ? 'border-teal-500 text-teal-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              All ({counts.all})
            </button>
            <button
              onClick={() => setFilter('saved')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'saved'
                  ? 'border-yellow-500 text-yellow-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Saved ({counts.saved})
            </button>
            <button
              onClick={() => setFilter('applied')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'applied'
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Applied ({counts.applied})
            </button>
            <button
              onClick={() => setFilter('interview')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'interview'
                  ? 'border-purple-500 text-purple-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Interview ({counts.interview})
            </button>
            <button
              onClick={() => setFilter('offer')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'offer'
                  ? 'border-green-500 text-green-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Offer ({counts.offer})
            </button>
            <button
              onClick={() => setFilter('rejected')}
              className={`whitespace-nowrap py-4 px-6 border-b-2 font-medium text-sm ${
                filter === 'rejected'
                  ? 'border-red-500 text-red-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
              }`}
            >
              Rejected ({counts.rejected})
            </button>
          </nav>
        </div>
        
        <div className="p-6">
          {filteredApplications.length > 0 ? (
            <div className="grid grid-cols-1 gap-6">
              {filteredApplications.map(application => (
                <ApplicationStatus
                  key={application.id}
                  application={application}
                  job={getJobDetails(application.jobId)}
                />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Briefcase className="mx-auto h-12 w-12 text-gray-400" />
              <h3 className="mt-2 text-lg font-medium text-gray-900">No applications found</h3>
              <p className="mt-1 text-gray-500">
                {filter === 'all'
                  ? 'Start applying to jobs to see your applications here'
                  : `You don't have any ${filter} applications yet`}
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ApplicationsPage;