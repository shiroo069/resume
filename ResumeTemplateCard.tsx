import React from 'react';
import { ResumeTemplate } from '../../types';
import { Check } from 'lucide-react';

interface ResumeTemplateCardProps {
  template: ResumeTemplate;
  selected: boolean;
  onSelect: (templateId: string) => void;
}

const ResumeTemplateCard: React.FC<ResumeTemplateCardProps> = ({
  template,
  selected,
  onSelect,
}) => {
  return (
    <div
      className={`relative cursor-pointer transition-all duration-200 rounded-lg overflow-hidden border-2 ${
        selected
          ? 'border-teal-500 shadow-md transform scale-[1.02]'
          : 'border-gray-200 hover:border-gray-300'
      }`}
      onClick={() => onSelect(template.id)}
    >
      {selected && (
        <div className="absolute top-2 right-2 bg-teal-500 text-white rounded-full p-1 shadow-sm">
          <Check size={16} />
        </div>
      )}
      <div className="aspect-w-4 aspect-h-5 bg-gray-200 w-full h-48">
        <img
          src={template.previewImage}
          alt={template.name}
          className="w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="font-medium text-gray-900">{template.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{template.description}</p>
      </div>
    </div>
  );
};

export default ResumeTemplateCard;