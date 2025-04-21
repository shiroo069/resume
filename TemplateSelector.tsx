import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { resumeTemplates } from '../../data/resumeTemplates';
import ResumeTemplateCard from './ResumeTemplateCard';

interface TemplateSelectorProps {
  onComplete: (selectedTemplate: string) => void;
  initialTemplate?: string;
}

const TemplateSelector: React.FC<TemplateSelectorProps> = ({ onComplete, initialTemplate }) => {
  const [selectedTemplate, setSelectedTemplate] = useState(initialTemplate || resumeTemplates[0].id);

  const handleTemplateSelect = (templateId: string) => {
    setSelectedTemplate(templateId);
  };

  const handleContinue = () => {
    onComplete(selectedTemplate);
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h2 className="text-xl font-semibold text-gray-900">Choose a Template</h2>
        <p className="mt-1 text-sm text-gray-600">
          Select a professional template for your resume
        </p>
      </div>

      <div className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeTemplates.map((template) => (
            <ResumeTemplateCard
              key={template.id}
              template={template}
              selected={selectedTemplate === template.id}
              onSelect={handleTemplateSelect}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-end">
          <button
            type="button"
            onClick={handleContinue}
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            Continue with Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default TemplateSelector;