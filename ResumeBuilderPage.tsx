import React, { useState } from 'react';
import { useResume } from '../contexts/ResumeContext';
import ResumeForm from '../components/resume/ResumeForm';
import TemplateSelector from '../components/resume/TemplateSelector';
import ResumePreview from '../components/resume/ResumePreview';
import { FileText, Eye } from 'lucide-react';

const ResumeBuilderPage: React.FC = () => {
  const { currentResume } = useResume();
  const [currentStep, setCurrentStep] = useState(currentResume ? 'form' : 'template');
  const [selectedTemplate, setSelectedTemplate] = useState('modern');
  const [showPreview, setShowPreview] = useState(false);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
    setCurrentStep('form');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      <div className="md:flex md:items-center md:justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Resume Builder</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create an AI-optimized resume that will help you stand out from the crowd
          </p>
        </div>
        {currentResume && currentStep === 'form' && (
          <button
            onClick={() => setShowPreview(!showPreview)}
            className="mt-4 md:mt-0 inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            <Eye className="mr-2 -ml-1 h-5 w-5" />
            {showPreview ? 'Hide Preview' : 'Show Preview'}
          </button>
        )}
      </div>

      {currentStep === 'template' && (
        <TemplateSelector 
          onComplete={handleTemplateSelect} 
          initialTemplate={selectedTemplate} 
        />
      )}

      {currentStep === 'form' && (
        <div className={`grid ${showPreview ? 'grid-cols-1 md:grid-cols-2 gap-8' : 'grid-cols-1'}`}>
          <div>
            <ResumeForm />
          </div>
          {showPreview && currentResume && (
            <div>
              <ResumePreview resume={currentResume} templateId={selectedTemplate} />
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default ResumeBuilderPage;