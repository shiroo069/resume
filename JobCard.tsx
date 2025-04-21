import React from 'react';
import { JobListing } from '../../types';
import { useJobs } from '../../contexts/JobContext';
import { useResume } from '../../contexts/ResumeContext';
import { Briefcase, Calendar, MapPin, DollarSign, Star, StarOff, Send } from 'lucide-react';

interface JobCardProps {
  job: JobListing;
}

const JobCard: React.FC<JobCardProps> = ({ job }) => {
  const { applyToJob, saveJob, getApplicationByJobId } = useJobs();
  const { currentResume } = useResume();
  
  const application = getApplicationByJobId(job.id);
  const hasApplied = application && application.status === 'applied';
  const isSaved = application && application.status === 'saved';

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  };

  const handleApply = () => {
    if (!currentResume) {
      alert('Please create a resume first');
      return;
    }
    
    applyToJob(job.id, currentResume.id);
  };

  const handleSave = () => {
    if (!currentResume) {
      alert('Please create a resume first');
      return;
    }
    
    saveJob(job.id, currentResume.id);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-xl font-bold text-gray-900">{job.title}</h3>
            <p className="text-gray-700">{job.company}</p>
          </div>
          {job.matchScore !== undefined && (
            <div className="flex flex-col items-center">
              <div 
                className={`inline-flex items-center justify-center h-12 w-12 rounded-full ${
                  job.matchScore > 80 
                    ? 'bg-green-100 text-green-800' 
                    : job.matchScore > 60 
                    ? 'bg-yellow-100 text-yellow-800' 
                    : 'bg-gray-100 text-gray-800'
                }`}
              >
                <span className="text-sm font-medium">{job.matchScore}%</span>
              </div>
              <span className="text-xs text-gray-500 mt-1">Match</span>
            </div>
          )}
        </div>
        
        <div className="mt-3 flex flex-wrap gap-y-2">
          <div className="flex items-center text-gray-600 text-sm mr-4">
            <MapPin size={16} className="mr-1 flex-shrink-0" />
            <span>{job.location}</span>
          </div>
          {job.salary && (
            <div className="flex items-center text-gray-600 text-sm mr-4">
              <DollarSign size={16} className="mr-1 flex-shrink-0" />
              <span>{job.salary}</span>
            </div>
          )}
          <div className="flex items-center text-gray-600 text-sm">
            <Calendar size={16} className="mr-1 flex-shrink-0" />
            <span>Posted {formatDate(job.postDate)}</span>
          </div>
        </div>
        
        <div className="mt-4">
          <p className="text-gray-700 line-clamp-3">{job.description}</p>
        </div>
        
        {job.requirements.length > 0 && (
          <div className="mt-4">
            <h4 className="text-sm font-medium text-gray-900 mb-2">Requirements:</h4>
            <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
              {job.requirements.slice(0, 3).map((req, idx) => (
                <li key={idx} className="line-clamp-1">{req}</li>
              ))}
              {job.requirements.length > 3 && (
                <li className="text-blue-600 hover:text-blue-800 cursor-pointer">
                  +{job.requirements.length - 3} more
                </li>
              )}
            </ul>
          </div>
        )}
        
        <div className="mt-5 flex justify-between items-center">
          <div className="text-sm text-gray-600">
            Source: {job.source}
          </div>
          <div className="flex space-x-2">
            <button
              onClick={handleSave}
              disabled={hasApplied || isSaved}
              className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium ${
                isSaved
                  ? 'bg-yellow-50 text-yellow-700 border-yellow-200 cursor-default'
                  : 'border-gray-300 text-gray-700 bg-white hover:bg-gray-50'
              }`}
            >
              {isSaved ? (
                <>
                  <StarOff size={16} className="mr-1 flex-shrink-0" />
                  Saved
                </>
              ) : (
                <>
                  <Star size={16} className="mr-1 flex-shrink-0" />
                  Save
                </>
              )}
            </button>
            <button
              onClick={handleApply}
              disabled={hasApplied}
              className={`inline-flex items-center px-3 py-1.5 border rounded-md text-sm font-medium ${
                hasApplied
                  ? 'bg-green-50 text-green-700 border-green-200 cursor-default'
                  : 'bg-teal-600 border-transparent text-white hover:bg-teal-700'
              }`}
            >
              {hasApplied ? (
                <>
                  <Briefcase size={16} className="mr-1 flex-shrink-0" />
                  Applied
                </>
              ) : (
                <>
                  <Send size={16} className="mr-1 flex-shrink-0" />
                  Apply Now
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JobCard;