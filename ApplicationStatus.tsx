import React from 'react';
import { JobApplication, JobListing } from '../../types';
import { useJobs } from '../../contexts/JobContext';
import { 
  Calendar, 
  ClipboardList, 
  MessageCircle, 
  ThumbsUp, 
  X,
  CheckCircle,
  AlertCircle,
  Clock
} from 'lucide-react';

interface ApplicationStatusProps {
  application: JobApplication;
  job: JobListing;
}

const ApplicationStatus: React.FC<ApplicationStatusProps> = ({ application, job }) => {
  const { updateApplicationStatus } = useJobs();
  
  const getStatusIcon = () => {
    switch (application.status) {
      case 'applied':
        return <CheckCircle className="h-6 w-6 text-blue-500" />;
      case 'interview':
        return <MessageCircle className="h-6 w-6 text-purple-500" />;
      case 'offer':
        return <ThumbsUp className="h-6 w-6 text-green-500" />;
      case 'rejected':
        return <X className="h-6 w-6 text-red-500" />;
      case 'saved':
        return <Clock className="h-6 w-6 text-yellow-500" />;
    }
  };
  
  const getStatusClass = () => {
    switch (application.status) {
      case 'applied':
        return 'bg-blue-100 text-blue-800';
      case 'interview':
        return 'bg-purple-100 text-purple-800';
      case 'offer':
        return 'bg-green-100 text-green-800';
      case 'rejected':
        return 'bg-red-100 text-red-800';
      case 'saved':
        return 'bg-yellow-100 text-yellow-800';
    }
  };
  
  const getStatusText = () => {
    switch (application.status) {
      case 'applied':
        return 'Applied';
      case 'interview':
        return 'Interview';
      case 'offer':
        return 'Offer';
      case 'rejected':
        return 'Rejected';
      case 'saved':
        return 'Saved';
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
  
  const handleStatusChange = (newStatus: JobApplication['status']) => {
    updateApplicationStatus(application.id, newStatus);
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <p className="text-gray-700">{job.company}</p>
          </div>
          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusClass()}`}>
            {getStatusIcon()}
            <span className="ml-1">{getStatusText()}</span>
          </span>
        </div>
        
        <div className="mt-3 flex flex-wrap gap-y-2">
          <div className="flex items-center text-gray-600 text-sm mr-4">
            <Calendar size={16} className="mr-1 flex-shrink-0" />
            <span>Applied: {formatDate(application.appliedDate)}</span>
          </div>
          <div className="flex items-center text-gray-600 text-sm">
            <ClipboardList size={16} className="mr-1 flex-shrink-0" />
            <span>Source: {job.source}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 line-clamp-2">{job.description}</p>
        </div>
        
        {application.notes && (
          <div className="mt-4 p-3 bg-gray-50 rounded-md">
            <h4 className="text-sm font-medium text-gray-900 mb-1">Notes:</h4>
            <p className="text-sm text-gray-700">{application.notes}</p>
          </div>
        )}
        
        <div className="mt-5 flex flex-wrap gap-2">
          <button
            onClick={() => handleStatusChange('saved')}
            className={`inline-flex items-center px-2.5 py-1.5 border rounded text-xs font-medium ${
              application.status === 'saved'
                ? 'bg-yellow-100 text-yellow-800 border-yellow-200'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Saved
          </button>
          <button
            onClick={() => handleStatusChange('applied')}
            className={`inline-flex items-center px-2.5 py-1.5 border rounded text-xs font-medium ${
              application.status === 'applied'
                ? 'bg-blue-100 text-blue-800 border-blue-200'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Applied
          </button>
          <button
            onClick={() => handleStatusChange('interview')}
            className={`inline-flex items-center px-2.5 py-1.5 border rounded text-xs font-medium ${
              application.status === 'interview'
                ? 'bg-purple-100 text-purple-800 border-purple-200'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Interview
          </button>
          <button
            onClick={() => handleStatusChange('offer')}
            className={`inline-flex items-center px-2.5 py-1.5 border rounded text-xs font-medium ${
              application.status === 'offer'
                ? 'bg-green-100 text-green-800 border-green-200'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Offer
          </button>
          <button
            onClick={() => handleStatusChange('rejected')}
            className={`inline-flex items-center px-2.5 py-1.5 border rounded text-xs font-medium ${
              application.status === 'rejected'
                ? 'bg-red-100 text-red-800 border-red-200'
                : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
            }`}
          >
            Rejected
          </button>
        </div>
      </div>
    </div>
  );
};

export default ApplicationStatus;