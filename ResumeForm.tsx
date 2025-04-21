import React, { useState } from 'react';
import { useResume } from '../../contexts/ResumeContext';
import { Education, Experience, Skill, Project, Certification } from '../../types';
import { Plus, Trash2, Sparkles } from 'lucide-react';

// Helper function to generate unique IDs
const generateId = () => `id_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;

// Personal Information Form Component
const PersonalInfoForm: React.FC<{
  data: any;
  onChange: (data: any) => void;
}> = ({ data, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
            Full Name
          </label>
          <input
            type="text"
            id="fullName"
            value={data.fullName || ''}
            onChange={(e) => onChange({ ...data, fullName: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            value={data.email || ''}
            onChange={(e) => onChange({ ...data, email: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            value={data.phone || ''}
            onChange={(e) => onChange({ ...data, phone: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="location" className="block text-sm font-medium text-gray-700">
            Location
          </label>
          <input
            type="text"
            id="location"
            value={data.location || ''}
            onChange={(e) => onChange({ ...data, location: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            placeholder="City, State"
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div>
          <label htmlFor="linkedinUrl" className="block text-sm font-medium text-gray-700">
            LinkedIn URL
          </label>
          <input
            type="url"
            id="linkedinUrl"
            value={data.linkedinUrl || ''}
            onChange={(e) => onChange({ ...data, linkedinUrl: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="githubUrl" className="block text-sm font-medium text-gray-700">
            GitHub URL
          </label>
          <input
            type="url"
            id="githubUrl"
            value={data.githubUrl || ''}
            onChange={(e) => onChange({ ...data, githubUrl: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
        <div>
          <label htmlFor="portfolioUrl" className="block text-sm font-medium text-gray-700">
            Portfolio URL
          </label>
          <input
            type="url"
            id="portfolioUrl"
            value={data.portfolioUrl || ''}
            onChange={(e) => onChange({ ...data, portfolioUrl: e.target.value })}
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          />
        </div>
      </div>
      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="summary" className="block text-sm font-medium text-gray-700">
            Professional Summary
          </label>
          <button
            type="button"
            className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200"
            onClick={() => {
              // Simulate AI generation
              const aiSummary = "Accomplished professional with expertise in web development, specializing in React and TypeScript. Proven track record of delivering high-quality applications with a focus on user experience and performance. Adept at collaborating with cross-functional teams to drive project success.";
              onChange({ ...data, summary: aiSummary });
            }}
          >
            <Sparkles size={14} className="mr-1" />
            AI Generate
          </button>
        </div>
        <textarea
          id="summary"
          rows={4}
          value={data.summary || ''}
          onChange={(e) => onChange({ ...data, summary: e.target.value })}
          className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
          placeholder="Write a short, compelling summary about yourself"
        />
        <p className="mt-1 text-xs text-gray-500">
          Keep your summary concise and focus on your most relevant experience and skills.
        </p>
      </div>
    </div>
  );
};

// Education Form Component
const EducationForm: React.FC<{
  educations: Education[];
  onChange: (education: Education[]) => void;
}> = ({ educations, onChange }) => {
  const addEducation = () => {
    const newEducation: Education = {
      id: generateId(),
      institution: '',
      degree: '',
      fieldOfStudy: '',
      startDate: '',
      endDate: '',
    };
    onChange([...educations, newEducation]);
  };

  const updateEducation = (index: number, updatedEducation: Partial<Education>) => {
    const newEducations = [...educations];
    newEducations[index] = { ...newEducations[index], ...updatedEducation };
    onChange(newEducations);
  };

  const removeEducation = (index: number) => {
    const newEducations = [...educations];
    newEducations.splice(index, 1);
    onChange(newEducations);
  };

  return (
    <div className="space-y-6">
      {educations.map((education, index) => (
        <div key={education.id} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Education #{index + 1}</h3>
            <button
              type="button"
              onClick={() => removeEducation(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`institution-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Institution
              </label>
              <input
                type="text"
                id={`institution-${index}`}
                value={education.institution}
                onChange={(e) =>
                  updateEducation(index, { institution: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor={`degree-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Degree
              </label>
              <input
                type="text"
                id={`degree-${index}`}
                value={education.degree}
                onChange={(e) =>
                  updateEducation(index, { degree: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor={`fieldOfStudy-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Field of Study
            </label>
            <input
              type="text"
              id={`fieldOfStudy-${index}`}
              value={education.fieldOfStudy}
              onChange={(e) =>
                updateEducation(index, { fieldOfStudy: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor={`startDate-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id={`startDate-${index}`}
                value={education.startDate}
                onChange={(e) =>
                  updateEducation(index, { startDate: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor={`endDate-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id={`endDate-${index}`}
                value={education.endDate}
                onChange={(e) =>
                  updateEducation(index, { endDate: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor={`gpa-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              GPA (Optional)
            </label>
            <input
              type="text"
              id={`gpa-${index}`}
              value={education.gpa || ''}
              onChange={(e) =>
                updateEducation(index, { gpa: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            />
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addEducation}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <Plus size={18} className="mr-2" />
        Add Education
      </button>
    </div>
  );
};

// Experience Form Component
const ExperienceForm: React.FC<{
  experiences: Experience[];
  onChange: (experiences: Experience[]) => void;
}> = ({ experiences, onChange }) => {
  const addExperience = () => {
    const newExperience: Experience = {
      id: generateId(),
      company: '',
      position: '',
      location: '',
      startDate: '',
      endDate: '',
      current: false,
      description: '',
      achievements: [''],
    };
    onChange([...experiences, newExperience]);
  };

  const updateExperience = (index: number, updatedExperience: Partial<Experience>) => {
    const newExperiences = [...experiences];
    newExperiences[index] = { ...newExperiences[index], ...updatedExperience };
    onChange(newExperiences);
  };

  const removeExperience = (index: number) => {
    const newExperiences = [...experiences];
    newExperiences.splice(index, 1);
    onChange(newExperiences);
  };

  const addAchievement = (index: number) => {
    const newExperiences = [...experiences];
    newExperiences[index].achievements.push('');
    onChange(newExperiences);
  };

  const updateAchievement = (expIndex: number, achieveIndex: number, value: string) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].achievements[achieveIndex] = value;
    onChange(newExperiences);
  };

  const removeAchievement = (expIndex: number, achieveIndex: number) => {
    const newExperiences = [...experiences];
    newExperiences[expIndex].achievements.splice(achieveIndex, 1);
    onChange(newExperiences);
  };

  return (
    <div className="space-y-6">
      {experiences.map((experience, expIndex) => (
        <div key={experience.id} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Experience #{expIndex + 1}</h3>
            <button
              type="button"
              onClick={() => removeExperience(expIndex)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                htmlFor={`company-${expIndex}`}
                className="block text-sm font-medium text-gray-700"
              >
                Company
              </label>
              <input
                type="text"
                id={`company-${expIndex}`}
                value={experience.company}
                onChange={(e) =>
                  updateExperience(expIndex, { company: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor={`position-${expIndex}`}
                className="block text-sm font-medium text-gray-700"
              >
                Position
              </label>
              <input
                type="text"
                id={`position-${expIndex}`}
                value={experience.position}
                onChange={(e) =>
                  updateExperience(expIndex, { position: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          <div className="mt-4">
            <label
              htmlFor={`location-${expIndex}`}
              className="block text-sm font-medium text-gray-700"
            >
              Location
            </label>
            <input
              type="text"
              id={`location-${expIndex}`}
              value={experience.location || ''}
              onChange={(e) =>
                updateExperience(expIndex, { location: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="City, State or Remote"
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label
                htmlFor={`startDate-${expIndex}`}
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id={`startDate-${expIndex}`}
                value={experience.startDate}
                onChange={(e) =>
                  updateExperience(expIndex, { startDate: e.target.value })
                }
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <div className="flex items-center space-x-2 mt-6">
                <input
                  type="checkbox"
                  id={`current-${expIndex}`}
                  checked={experience.current}
                  onChange={(e) =>
                    updateExperience(expIndex, { current: e.target.checked })
                  }
                  className="h-4 w-4 text-teal-600 focus:ring-teal-500 border-gray-300 rounded"
                />
                <label
                  htmlFor={`current-${expIndex}`}
                  className="text-sm font-medium text-gray-700"
                >
                  I currently work here
                </label>
              </div>
            </div>
          </div>
          
          {!experience.current && (
            <div className="mt-4">
              <label
                htmlFor={`endDate-${expIndex}`}
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id={`endDate-${expIndex}`}
                value={experience.endDate}
                onChange={(e) =>
                  updateExperience(expIndex, { endDate: e.target.value })
                }
                disabled={experience.current}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          )}
          
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label
                htmlFor={`description-${expIndex}`}
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <button
                type="button"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200"
                onClick={() => {
                  // Simulate AI generation
                  const aiDescription = "Led the development of web applications using React and TypeScript, focusing on performance optimization and user experience. Collaborated with designers and back-end developers to implement responsive, accessible interfaces.";
                  updateExperience(expIndex, { description: aiDescription });
                }}
              >
                <Sparkles size={14} className="mr-1" />
                AI Generate
              </button>
            </div>
            <textarea
              id={`description-${expIndex}`}
              rows={3}
              value={experience.description}
              onChange={(e) =>
                updateExperience(expIndex, { description: e.target.value })
              }
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Briefly describe your role and responsibilities"
            />
          </div>
          
          <div className="mt-4">
            <div className="flex justify-between items-center">
              <label className="block text-sm font-medium text-gray-700">
                Achievements
              </label>
              <button
                type="button"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200"
                onClick={() => {
                  // Simulate AI generation for all achievements
                  const aiAchievements = [
                    "Reduced page load time by 40% through code optimization and implementing lazy loading techniques",
                    "Developed a component library that improved team productivity by 25%",
                    "Implemented automated testing that increased code coverage from 65% to 90%"
                  ];
                  updateExperience(expIndex, { achievements: aiAchievements });
                }}
              >
                <Sparkles size={14} className="mr-1" />
                AI Generate All
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-1 mb-2">
              Add bullet points highlighting your key achievements and contributions
            </p>
            
            {experience.achievements.map((achievement, achieveIndex) => (
              <div key={achieveIndex} className="flex items-start space-x-2 mt-2">
                <input
                  type="text"
                  value={achievement}
                  onChange={(e) =>
                    updateAchievement(expIndex, achieveIndex, e.target.value)
                  }
                  className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                  placeholder="Describe a key achievement"
                />
                <button
                  type="button"
                  onClick={() => removeAchievement(expIndex, achieveIndex)}
                  disabled={experience.achievements.length <= 1}
                  className={`mt-1 text-red-600 hover:text-red-800 ${
                    experience.achievements.length <= 1 ? 'opacity-50 cursor-not-allowed' : ''
                  }`}
                >
                  <Trash2 size={18} />
                </button>
              </div>
            ))}
            
            <button
              type="button"
              onClick={() => addAchievement(expIndex)}
              className="mt-2 inline-flex items-center px-3 py-1 border border-transparent text-sm font-medium rounded-md text-teal-700 bg-teal-100 hover:bg-teal-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
            >
              <Plus size={14} className="mr-1" />
              Add Achievement
            </button>
          </div>
        </div>
      ))}
      <button
        type="button"
        onClick={addExperience}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <Plus size={18} className="mr-2" />
        Add Experience
      </button>
    </div>
  );
};

// Skills Form Component
const SkillsForm: React.FC<{
  skills: Skill[];
  onChange: (skills: Skill[]) => void;
}> = ({ skills, onChange }) => {
  const addSkill = () => {
    const newSkill: Skill = {
      id: generateId(),
      name: '',
      level: 'Intermediate',
    };
    onChange([...skills, newSkill]);
  };

  const updateSkill = (index: number, updatedSkill: Partial<Skill>) => {
    const newSkills = [...skills];
    newSkills[index] = { ...newSkills[index], ...updatedSkill };
    onChange(newSkills);
  };

  const removeSkill = (index: number) => {
    const newSkills = [...skills];
    newSkills.splice(index, 1);
    onChange(newSkills);
  };

  const generateAISkills = () => {
    // Simulate AI generating skills based on the resume content
    const aiSkills: Skill[] = [
      { id: generateId(), name: 'React', level: 'Expert' },
      { id: generateId(), name: 'TypeScript', level: 'Advanced' },
      { id: generateId(), name: 'JavaScript', level: 'Expert' },
      { id: generateId(), name: 'HTML/CSS', level: 'Advanced' },
      { id: generateId(), name: 'Node.js', level: 'Intermediate' },
      { id: generateId(), name: 'GraphQL', level: 'Intermediate' },
      { id: generateId(), name: 'Redux', level: 'Advanced' },
      { id: generateId(), name: 'Jest', level: 'Intermediate' },
      { id: generateId(), name: 'Git', level: 'Advanced' },
      { id: generateId(), name: 'CI/CD', level: 'Intermediate' },
    ];
    onChange(aiSkills);
  };

  return (
    <div className="space-y-4">
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-medium">Skills</h3>
        <button
          type="button"
          onClick={generateAISkills}
          className="inline-flex items-center px-3 py-1 text-sm font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200"
        >
          <Sparkles size={16} className="mr-1" />
          AI Generate Skills
        </button>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {skills.map((skill, index) => (
          <div key={skill.id} className="flex items-center space-x-2">
            <div className="flex-grow">
              <input
                type="text"
                value={skill.name}
                onChange={(e) => updateSkill(index, { name: e.target.value })}
                className="block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
                placeholder="Skill name"
              />
            </div>
            <select
              value={skill.level}
              onChange={(e) => updateSkill(index, { level: e.target.value as Skill['level'] })}
              className="block w-32 border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
            >
              <option value="Beginner">Beginner</option>
              <option value="Intermediate">Intermediate</option>
              <option value="Advanced">Advanced</option>
              <option value="Expert">Expert</option>
            </select>
            <button
              type="button"
              onClick={() => removeSkill(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
        ))}
      </div>
      
      <button
        type="button"
        onClick={addSkill}
        className="mt-4 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <Plus size={18} className="mr-2" />
        Add Skill
      </button>
    </div>
  );
};

// Projects Form Component
const ProjectsForm: React.FC<{
  projects: Project[];
  onChange: (projects: Project[]) => void;
}> = ({ projects, onChange }) => {
  const addProject = () => {
    const newProject: Project = {
      id: generateId(),
      name: '',
      description: '',
      startDate: '',
      endDate: '',
      technologies: [],
    };
    onChange([...projects, newProject]);
  };

  const updateProject = (index: number, updatedProject: Partial<Project>) => {
    const newProjects = [...projects];
    newProjects[index] = { ...newProjects[index], ...updatedProject };
    onChange(newProjects);
  };

  const removeProject = (index: number) => {
    const newProjects = [...projects];
    newProjects.splice(index, 1);
    onChange(newProjects);
  };

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <div key={project.id} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Project #{index + 1}</h3>
            <button
              type="button"
              onClick={() => removeProject(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor={`project-name-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Project Name
              </label>
              <input
                type="text"
                id={`project-name-${index}`}
                value={project.name}
                onChange={(e) => updateProject(index, { name: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label 
                htmlFor={`project-url-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Project URL (Optional)
              </label>
              <input
                type="url"
                id={`project-url-${index}`}
                value={project.url || ''}
                onChange={(e) => updateProject(index, { url: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <div className="flex items-center justify-between">
              <label 
                htmlFor={`project-description-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <button
                type="button"
                className="inline-flex items-center px-2 py-1 text-xs font-medium text-purple-700 bg-purple-100 rounded hover:bg-purple-200"
                onClick={() => {
                  // Simulate AI generation
                  const aiDescription = "Developed a responsive web application with React and TypeScript that allows users to create and manage their tasks. Implemented features like drag-and-drop organization, filtering, and data visualization.";
                  updateProject(index, { description: aiDescription });
                }}
              >
                <Sparkles size={14} className="mr-1" />
                AI Generate
              </button>
            </div>
            <textarea
              id={`project-description-${index}`}
              rows={3}
              value={project.description}
              onChange={(e) => updateProject(index, { description: e.target.value })}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="Describe what the project does and your role in it"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label 
                htmlFor={`project-start-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Start Date
              </label>
              <input
                type="date"
                id={`project-start-${index}`}
                value={project.startDate}
                onChange={(e) => updateProject(index, { startDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label 
                htmlFor={`project-end-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                End Date
              </label>
              <input
                type="date"
                id={`project-end-${index}`}
                value={project.endDate}
                onChange={(e) => updateProject(index, { endDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="mt-4">
            <label 
              htmlFor={`project-tech-${index}`}
              className="block text-sm font-medium text-gray-700"
            >
              Technologies Used
            </label>
            <input
              type="text"
              id={`project-tech-${index}`}
              value={project.technologies.join(', ')}
              onChange={(e) => {
                const techArray = e.target.value.split(',').map(tech => tech.trim()).filter(Boolean);
                updateProject(index, { technologies: techArray });
              }}
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              placeholder="React, TypeScript, Node.js, etc. (comma separated)"
            />
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addProject}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <Plus size={18} className="mr-2" />
        Add Project
      </button>
    </div>
  );
};

// Certifications Form Component
const CertificationsForm: React.FC<{
  certifications: Certification[];
  onChange: (certifications: Certification[]) => void;
}> = ({ certifications, onChange }) => {
  const addCertification = () => {
    const newCertification: Certification = {
      id: generateId(),
      name: '',
      organization: '',
      issueDate: '',
    };
    onChange([...certifications, newCertification]);
  };

  const updateCertification = (index: number, updatedCertification: Partial<Certification>) => {
    const newCertifications = [...certifications];
    newCertifications[index] = { ...newCertifications[index], ...updatedCertification };
    onChange(newCertifications);
  };

  const removeCertification = (index: number) => {
    const newCertifications = [...certifications];
    newCertifications.splice(index, 1);
    onChange(newCertifications);
  };

  return (
    <div className="space-y-6">
      {certifications.map((certification, index) => (
        <div key={certification.id} className="bg-white p-4 rounded-md border border-gray-200 shadow-sm">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium">Certification #{index + 1}</h3>
            <button
              type="button"
              onClick={() => removeCertification(index)}
              className="text-red-600 hover:text-red-800"
            >
              <Trash2 size={18} />
            </button>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label 
                htmlFor={`cert-name-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Certification Name
              </label>
              <input
                type="text"
                id={`cert-name-${index}`}
                value={certification.name}
                onChange={(e) => updateCertification(index, { name: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label 
                htmlFor={`cert-org-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Issuing Organization
              </label>
              <input
                type="text"
                id={`cert-org-${index}`}
                value={certification.organization}
                onChange={(e) => updateCertification(index, { organization: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label 
                htmlFor={`cert-issue-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Issue Date
              </label>
              <input
                type="date"
                id={`cert-issue-${index}`}
                value={certification.issueDate}
                onChange={(e) => updateCertification(index, { issueDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label 
                htmlFor={`cert-expiry-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Expiration Date (Optional)
              </label>
              <input
                type="date"
                id={`cert-expiry-${index}`}
                value={certification.expirationDate || ''}
                onChange={(e) => updateCertification(index, { expirationDate: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label 
                htmlFor={`cert-id-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Credential ID (Optional)
              </label>
              <input
                type="text"
                id={`cert-id-${index}`}
                value={certification.credentialId || ''}
                onChange={(e) => updateCertification(index, { credentialId: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
            <div>
              <label 
                htmlFor={`cert-url-${index}`}
                className="block text-sm font-medium text-gray-700"
              >
                Credential URL (Optional)
              </label>
              <input
                type="url"
                id={`cert-url-${index}`}
                value={certification.url || ''}
                onChange={(e) => updateCertification(index, { url: e.target.value })}
                className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-teal-500 focus:border-teal-500 sm:text-sm"
              />
            </div>
          </div>
        </div>
      ))}
      
      <button
        type="button"
        onClick={addCertification}
        className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
      >
        <Plus size={18} className="mr-2" />
        Add Certification
      </button>
    </div>
  );
};

// Main Resume Form Component
const ResumeForm: React.FC = () => {
  // Get resume context
  const { currentResume, createResume, updateResume } = useResume();
  
  // Step management
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 6;
  
  // Form data
  const [formData, setFormData] = useState({
    personalInfo: {
      fullName: '',
      email: '',
      phone: '',
      location: '',
      portfolioUrl: '',
      linkedinUrl: '',
      githubUrl: '',
      summary: '',
    },
    education: [] as Education[],
    experience: [] as Experience[],
    skills: [] as Skill[],
    projects: [] as Project[],
    certifications: [] as Certification[],
  });
  
  // Initialize form data with current resume if available
  useEffect(() => {
    if (currentResume) {
      setFormData({
        personalInfo: currentResume.personalInfo,
        education: currentResume.education,
        experience: currentResume.experience,
        skills: currentResume.skills,
        projects: currentResume.projects,
        certifications: currentResume.certifications,
      });
    }
  }, [currentResume]);
  
  // Handle form submit
  const handleSubmit = () => {
    if (currentResume) {
      updateResume(currentResume.id, formData);
    } else {
      createResume(formData);
    }
  };
  
  // Navigate through steps
  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    } else {
      handleSubmit();
    }
  };
  
  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };
  
  // Update form data
  const updateFormData = <K extends keyof typeof formData>(
    field: K,
    value: typeof formData[K]
  ) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };
  
  // Render current step form
  const renderStepContent = () => {
    switch (currentStep) {
      case 1:
        return (
          <PersonalInfoForm
            data={formData.personalInfo}
            onChange={(data) => updateFormData('personalInfo', data)}
          />
        );
      case 2:
        return (
          <EducationForm
            educations={formData.education}
            onChange={(data) => updateFormData('education', data)}
          />
        );
      case 3:
        return (
          <ExperienceForm
            experiences={formData.experience}
            onChange={(data) => updateFormData('experience', data)}
          />
        );
      case 4:
        return (
          <SkillsForm
            skills={formData.skills}
            onChange={(data) => updateFormData('skills', data)}
          />
        );
      case 5:
        return (
          <ProjectsForm
            projects={formData.projects}
            onChange={(data) => updateFormData('projects', data)}
          />
        );
      case 6:
        return (
          <CertificationsForm
            certifications={formData.certifications}
            onChange={(data) => updateFormData('certifications', data)}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Progress Bar */}
      <div className="px-4 py-3 bg-gray-50 border-b border-gray-200">
        <div className="flex items-center justify-between mb-2">
          <h2 className="text-lg font-medium text-gray-900">
            {currentResume ? 'Edit Resume' : 'Create New Resume'}
          </h2>
          <span className="text-sm text-gray-500">
            Step {currentStep} of {totalSteps}
          </span>
        </div>
        <div className="w-full bg-gray-200 rounded-full h-2.5">
          <div
            className="bg-teal-600 h-2.5 rounded-full transition-all duration-300 ease-in-out"
            style={{ width: `${(currentStep / totalSteps) * 100}%` }}
          ></div>
        </div>
      </div>

      {/* Step Content */}
      <div className="p-6">
        <div className="mb-6">
          <h3 className="text-xl font-semibold text-gray-800 mb-1">
            {currentStep === 1 && 'Personal Information'}
            {currentStep === 2 && 'Education'}
            {currentStep === 3 && 'Work Experience'}
            {currentStep === 4 && 'Skills'}
            {currentStep === 5 && 'Projects'}
            {currentStep === 6 && 'Certifications'}
          </h3>
          <p className="text-gray-600">
            {currentStep === 1 && 'Provide your contact details and professional summary'}
            {currentStep === 2 && 'Add your educational background and qualifications'}
            {currentStep === 3 && 'Detail your work history and professional accomplishments'}
            {currentStep === 4 && 'List your technical and professional skills'}
            {currentStep === 5 && 'Showcase the projects you have worked on'}
            {currentStep === 6 && 'Add your certifications and licenses'}
          </p>
        </div>

        {renderStepContent()}

        {/* Navigation Buttons */}
        <div className="mt-8 flex justify-between">
          <button
            type="button"
            onClick={prevStep}
            disabled={currentStep === 1}
            className={`px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 ${
              currentStep === 1 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            Back
          </button>
          <button
            type="button"
            onClick={nextStep}
            className="px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
          >
            {currentStep === totalSteps ? 'Save Resume' : 'Next Step'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeForm;