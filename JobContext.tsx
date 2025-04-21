import React, { createContext, useContext, useState } from 'react';
import { JobListing, JobApplication } from '../types';
import { mockJobs } from '../data/mockJobs';
import { useAuth } from './AuthContext';

interface JobContextType {
  jobs: JobListing[];
  applications: JobApplication[];
  loading: boolean;
  searchJobs: (query: string) => void;
  applyToJob: (jobId: string, resumeId: string) => void;
  updateApplicationStatus: (id: string, status: JobApplication['status']) => void;
  saveJob: (jobId: string, resumeId: string) => void;
  getApplicationByJobId: (jobId: string) => JobApplication | undefined;
}

const JobContext = createContext<JobContextType>({
  jobs: [],
  applications: [],
  loading: false,
  searchJobs: () => {},
  applyToJob: () => {},
  updateApplicationStatus: () => {},
  saveJob: () => {},
  getApplicationByJobId: () => undefined,
});

export const useJobs = () => useContext(JobContext);

export const JobProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [jobs, setJobs] = useState<JobListing[]>(mockJobs);
  const [applications, setApplications] = useState<JobApplication[]>([]);
  const [loading, setLoading] = useState(false);

  // Load applications from localStorage when component mounts
  React.useEffect(() => {
    if (user) {
      const savedApplications = localStorage.getItem(`applications_${user.id}`);
      if (savedApplications) {
        setApplications(JSON.parse(savedApplications));
      }
    }
  }, [user]);

  // Save applications to localStorage when updated
  React.useEffect(() => {
    if (user && applications.length > 0) {
      localStorage.setItem(`applications_${user.id}`, JSON.stringify(applications));
    }
  }, [applications, user]);

  const searchJobs = (query: string) => {
    setLoading(true);
    
    // Simple search implementation for MVP
    if (!query.trim()) {
      setJobs(mockJobs);
      setLoading(false);
      return;
    }
    
    const lowerQuery = query.toLowerCase();
    const filteredJobs = mockJobs.filter(job => 
      job.title.toLowerCase().includes(lowerQuery) ||
      job.company.toLowerCase().includes(lowerQuery) ||
      job.description.toLowerCase().includes(lowerQuery) ||
      job.requirements.some(req => req.toLowerCase().includes(lowerQuery))
    );
    
    setJobs(filteredJobs);
    setLoading(false);
  };

  const applyToJob = (jobId: string, resumeId: string) => {
    if (!user) return;
    
    const newApplication: JobApplication = {
      id: Date.now().toString(),
      jobId,
      resumeId,
      status: 'applied',
      appliedDate: new Date().toISOString(),
    };
    
    setApplications(prev => [...prev, newApplication]);
  };

  const updateApplicationStatus = (id: string, status: JobApplication['status']) => {
    setApplications(prev => 
      prev.map(app => 
        app.id === id 
          ? { ...app, status } 
          : app
      )
    );
  };

  const saveJob = (jobId: string, resumeId: string) => {
    if (!user) return;
    
    const newApplication: JobApplication = {
      id: Date.now().toString(),
      jobId,
      resumeId,
      status: 'saved',
      appliedDate: new Date().toISOString(),
    };
    
    setApplications(prev => [...prev, newApplication]);
  };

  const getApplicationByJobId = (jobId: string) => {
    return applications.find(app => app.jobId === jobId);
  };

  return (
    <JobContext.Provider
      value={{
        jobs,
        applications,
        loading,
        searchJobs,
        applyToJob,
        updateApplicationStatus,
        saveJob,
        getApplicationByJobId,
      }}
    >
      {children}
    </JobContext.Provider>
  );
};