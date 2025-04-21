import React, { createContext, useContext, useState, useEffect } from 'react';
import { ResumeData } from '../types';
import { useAuth } from './AuthContext';

interface ResumeContextType {
  resumes: ResumeData[];
  currentResume: ResumeData | null;
  loading: boolean;
  createResume: (data: Partial<ResumeData>) => void;
  updateResume: (id: string, data: Partial<ResumeData>) => void;
  deleteResume: (id: string) => void;
  setCurrentResume: (resume: ResumeData | null) => void;
}

const ResumeContext = createContext<ResumeContextType>({
  resumes: [],
  currentResume: null,
  loading: false,
  createResume: () => {},
  updateResume: () => {},
  deleteResume: () => {},
  setCurrentResume: () => {},
});

export const useResume = () => useContext(ResumeContext);

export const ResumeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const { user } = useAuth();
  const [resumes, setResumes] = useState<ResumeData[]>([]);
  const [currentResume, setCurrentResume] = useState<ResumeData | null>(null);
  const [loading, setLoading] = useState(false);

  // Load resumes from localStorage when user changes
  useEffect(() => {
    if (user) {
      const savedResumes = localStorage.getItem(`resumes_${user.id}`);
      if (savedResumes) {
        setResumes(JSON.parse(savedResumes));
      }
    } else {
      setResumes([]);
      setCurrentResume(null);
    }
  }, [user]);

  // Save resumes to localStorage when updated
  useEffect(() => {
    if (user && resumes.length > 0) {
      localStorage.setItem(`resumes_${user.id}`, JSON.stringify(resumes));
    }
  }, [resumes, user]);

  const createResume = (data: Partial<ResumeData>) => {
    if (!user) return;
    
    setLoading(true);
    const newResume: ResumeData = {
      id: Date.now().toString(),
      userId: user.id,
      personalInfo: {
        fullName: data.personalInfo?.fullName || '',
        email: data.personalInfo?.email || user.email,
        phone: data.personalInfo?.phone || '',
        location: data.personalInfo?.location || '',
        portfolioUrl: data.personalInfo?.portfolioUrl || '',
        linkedinUrl: data.personalInfo?.linkedinUrl || '',
        githubUrl: data.personalInfo?.githubUrl || '',
        summary: data.personalInfo?.summary || '',
      },
      education: data.education || [],
      experience: data.experience || [],
      skills: data.skills || [],
      projects: data.projects || [],
      certifications: data.certifications || [],
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    setResumes(prev => [...prev, newResume]);
    setCurrentResume(newResume);
    setLoading(false);
  };

  const updateResume = (id: string, data: Partial<ResumeData>) => {
    setLoading(true);
    setResumes(prev => prev.map(resume => 
      resume.id === id 
        ? { 
            ...resume, 
            ...data, 
            updatedAt: new Date().toISOString() 
          } 
        : resume
    ));
    
    if (currentResume?.id === id) {
      setCurrentResume(prev => prev ? { ...prev, ...data, updatedAt: new Date().toISOString() } : null);
    }
    setLoading(false);
  };

  const deleteResume = (id: string) => {
    setResumes(prev => prev.filter(resume => resume.id !== id));
    if (currentResume?.id === id) {
      setCurrentResume(null);
    }
  };

  return (
    <ResumeContext.Provider
      value={{
        resumes,
        currentResume,
        loading,
        createResume,
        updateResume,
        deleteResume,
        setCurrentResume,
      }}
    >
      {children}
    </ResumeContext.Provider>
  );
};