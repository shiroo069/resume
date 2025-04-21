import React, { useState, useEffect } from 'react';
import { useJobs } from '../contexts/JobContext';
import JobSearch from '../components/job/JobSearch';
import JobCard from '../components/job/JobCard';
import { AlertCircle as CircleAlert } from 'lucide-react';

const JobSearchPage: React.FC = () => {
  const { jobs, loading } = useJobs();
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    setFilteredJobs(jobs);
  }, [jobs]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Job Search</h1>
        <p className="mt-1 text-sm text-gray-500">
          Find job opportunities matched to your skills and experience
        </p>
      </div>

      <div className="mb-8">
        <JobSearch />
      </div>

      <div className="my-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-semibold text-gray-900">
            {loading ? 'Searching...' : `${filteredJobs.length} Jobs Found`}
          </h2>
          <div className="flex items-center text-sm text-gray-500">
            <select
              className="ml-2 border-gray-300 rounded-md focus:outline-none focus:ring-teal-500 focus:border-teal-500"
              onChange={(e) => {
                const value = e.target.value;
                if (value === 'match') {
                  setFilteredJobs([...jobs].sort((a, b) => (b.matchScore || 0) - (a.matchScore || 0)));
                } else if (value === 'date') {
                  setFilteredJobs([...jobs].sort((a, b) => new Date(b.postDate).getTime() - new Date(a.postDate).getTime()));
                }
              }}
            >
              <option value="match">Sort by match</option>
              <option value="date">Sort by date</option>
            </select>
          </div>
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-teal-600"></div>
            <p className="mt-4 text-gray-600">Searching for the best opportunities...</p>
          </div>
        ) : filteredJobs.length > 0 ? (
          <div className="grid grid-cols-1 gap-6">
            {filteredJobs.map((job) => (
              <JobCard key={job.id} job={job} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white shadow-md rounded-lg">
            <CircleAlert className="mx-auto h-12 w-12 text-gray-400" />
            <h3 className="mt-2 text-lg font-medium text-gray-900">No jobs found</h3>
            <p className="mt-1 text-gray-500">Try adjusting your search criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JobSearchPage;