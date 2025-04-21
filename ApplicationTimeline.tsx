import React from 'react';
import { JobApplication, JobListing } from '../../types';
import { Calendar, CheckCircle, MessageCircle, ThumbsUp, X, Clock } from 'lucide-react';

interface ApplicationTimelineProps {
  applications: {
    application: JobApplication;
    job: JobListing;
  }[];
}

const ApplicationTimeline: React.FC<ApplicationTimelineProps> = ({ applications }) => {
  // Sort applications by date (most recent first)
  const sortedApplications = [...applications].sort((a, b) => 
    new Date(b.application.appliedDate).getTime() - new Date(a.application.appliedDate).getTime()
  );
  
  const getStatusIcon = (status: JobApplication['status']) => {
    switch (status) {
      case 'applied':
        return <CheckCircle className="h-5 w-5 text-blue-500" />;
      case 'interview':
        return <MessageCircle className="h-5 w-5 text-purple-500" />;
      case 'offer':
        return <ThumbsUp className="h-5 w-5 text-green-500" />;
      case 'rejected':
        return <X className="h-5 w-5 text-red-500" />;
      case 'saved':
        return <Clock className="h-5 w-5 text-yellow-500" />;
    }
  };
  
  const getStatusClass = (status: JobApplication['status']) => {
    switch (status) {
      case 'applied':
        return 'bg-blue-500';
      case 'interview':
        return 'bg-purple-500';
      case 'offer':
        return 'bg-green-500';
      case 'rejected':
        return 'bg-red-500';
      case 'saved':
        return 'bg-yellow-500';
    }
  };
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Application Timeline</h2>
      </div>
      
      <div className="p-6">
        {sortedApplications.length === 0 ? (
          <div className="text-center py-8">
            <p className="text-gray-500">No applications yet. Start applying to jobs!</p>
          </div>
        ) : (
          <div className="flow-root">
            <ul className="-mb-8">
              {sortedApplications.map((item, index) => (
                <li key={item.application.id}>
                  <div className="relative pb-8">
                    {index !== sortedApplications.length - 1 ? (
                      <span
                        className="absolute top-5 left-5 -ml-px h-full w-0.5 bg-gray-200"
                        aria-hidden="true"
                      ></span>
                    ) : null}
                    <div className="relative flex items-start space-x-3">
                      <div
                        className={`relative flex h-10 w-10 items-center justify-center rounded-full ${getStatusClass(
                          item.application.status
                        )} bg-opacity-10`}
                      >
                        {getStatusIcon(item.application.status)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <div>
                          <div className="text-sm">
                            <a
                              href="#"
                              className="font-medium text-gray-900"
                            >
                              {item.job.title}
                            </a>
                          </div>
                          <p className="mt-0.5 text-sm text-gray-500">
                            {item.job.company}
                          </p>
                          <p className="mt-0.5 text-xs text-gray-400 flex items-center">
                            <Calendar size={12} className="mr-1" />
                            {formatDate(item.application.appliedDate)}
                          </p>
                        </div>
                        <div className="mt-2 text-sm text-gray-700">
                          <p>
                            Status:{' '}
                            <span className="font-medium capitalize">
                              {item.application.status}
                            </span>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default ApplicationTimeline;