import React from 'react';
import { ResumeData } from '../../types';
import { Calendar, MapPin, Mail, Phone, Globe, Linkedin, Github } from 'lucide-react';

interface ResumePreviewProps {
  resume: ResumeData;
  templateId: string;
}

const ResumePreview: React.FC<ResumePreviewProps> = ({ resume, templateId }) => {
  const renderTemplate = () => {
    switch (templateId) {
      case 'modern':
        return renderModernTemplate();
      case 'professional':
        return renderProfessionalTemplate();
      case 'creative':
        return renderCreativeTemplate();
      case 'minimal':
      default:
        return renderMinimalTemplate();
    }
  };

  // Modern template with split layout and bold colors
  const renderModernTemplate = () => {
    return (
      <div className="bg-white font-sans text-gray-800 border border-gray-200">
        <div className="bg-teal-700 text-white px-8 py-6">
          <h1 className="text-3xl font-bold tracking-tight">
            {resume.personalInfo.fullName}
          </h1>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            {resume.personalInfo.email && (
              <div className="flex items-center">
                <Mail size={14} className="mr-1" />
                {resume.personalInfo.email}
              </div>
            )}
            {resume.personalInfo.phone && (
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                {resume.personalInfo.phone}
              </div>
            )}
            {resume.personalInfo.location && (
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {resume.personalInfo.location}
              </div>
            )}
          </div>
          <div className="mt-2 flex flex-wrap gap-4 text-sm">
            {resume.personalInfo.linkedinUrl && (
              <div className="flex items-center">
                <Linkedin size={14} className="mr-1" />
                <a href={resume.personalInfo.linkedinUrl} className="hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {resume.personalInfo.githubUrl && (
              <div className="flex items-center">
                <Github size={14} className="mr-1" />
                <a href={resume.personalInfo.githubUrl} className="hover:underline">
                  GitHub
                </a>
              </div>
            )}
            {resume.personalInfo.portfolioUrl && (
              <div className="flex items-center">
                <Globe size={14} className="mr-1" />
                <a href={resume.personalInfo.portfolioUrl} className="hover:underline">
                  Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          {resume.personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Professional Summary
              </h2>
              <p className="text-gray-700 leading-relaxed">{resume.personalInfo.summary}</p>
            </div>
          )}
          
          {resume.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Experience
              </h2>
              <div className="space-y-4">
                {resume.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{exp.position}</h3>
                        <p className="text-gray-700">{exp.company}</p>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </div>
                    </div>
                    {exp.location && (
                      <p className="text-sm text-gray-600 flex items-center mt-1">
                        <MapPin size={14} className="mr-1" />
                        {exp.location}
                      </p>
                    )}
                    <p className="mt-2 text-gray-700">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-gray-700 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Education
              </h2>
              <div className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">{edu.degree}</h3>
                        <p className="text-gray-700">{edu.institution}</p>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {edu.startDate} - {edu.endDate}
                      </div>
                    </div>
                    <p className="mt-1 text-gray-700">{edu.fieldOfStudy}</p>
                    {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Skills
              </h2>
              <div className="flex flex-wrap gap-2 mt-2">
                {resume.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="bg-teal-100 text-teal-800 text-sm px-3 py-1 rounded-full"
                  >
                    {skill.name} • {skill.level}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {resume.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Projects
              </h2>
              <div className="space-y-4">
                {resume.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="text-lg font-semibold">
                          {project.name}
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-teal-600 hover:text-teal-800 ml-2 text-sm"
                            >
                              (View Project)
                            </a>
                          )}
                        </h3>
                      </div>
                      <div className="text-sm text-gray-600 flex items-center">
                        <Calendar size={14} className="mr-1" />
                        {project.startDate} - {project.endDate}
                      </div>
                    </div>
                    <p className="mt-1 text-gray-700">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-gray-100 text-gray-800 text-xs px-2 py-1 rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.certifications.length > 0 && (
            <div>
              <h2 className="text-xl font-bold text-teal-700 border-b-2 border-teal-700 pb-1 mb-2">
                Certifications
              </h2>
              <div className="space-y-3">
                {resume.certifications.map((cert) => (
                  <div key={cert.id}>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-gray-700">{cert.organization}</p>
                    <p className="text-sm text-gray-600 flex items-center mt-1">
                      <Calendar size={14} className="mr-1" />
                      Issued: {cert.issueDate}
                      {cert.expirationDate && ` • Expires: ${cert.expirationDate}`}
                    </p>
                    {cert.url && (
                      <a
                        href={cert.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-teal-600 hover:text-teal-800 text-sm"
                      >
                        View Credential
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Professional template with traditional layout
  const renderProfessionalTemplate = () => {
    return (
      <div className="bg-white font-serif text-gray-900 border border-gray-200">
        <div className="text-center p-8 border-b border-gray-200">
          <h1 className="text-3xl font-bold uppercase tracking-wider">
            {resume.personalInfo.fullName}
          </h1>
          <div className="mt-3 flex flex-wrap justify-center gap-x-6 text-sm">
            {resume.personalInfo.email && (
              <div className="flex items-center">
                <Mail size={14} className="mr-1" />
                {resume.personalInfo.email}
              </div>
            )}
            {resume.personalInfo.phone && (
              <div className="flex items-center">
                <Phone size={14} className="mr-1" />
                {resume.personalInfo.phone}
              </div>
            )}
            {resume.personalInfo.location && (
              <div className="flex items-center">
                <MapPin size={14} className="mr-1" />
                {resume.personalInfo.location}
              </div>
            )}
          </div>
          <div className="mt-2 flex flex-wrap justify-center gap-x-6 text-sm">
            {resume.personalInfo.linkedinUrl && (
              <div className="flex items-center">
                <Linkedin size={14} className="mr-1" />
                <a href={resume.personalInfo.linkedinUrl} className="hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {resume.personalInfo.githubUrl && (
              <div className="flex items-center">
                <Github size={14} className="mr-1" />
                <a href={resume.personalInfo.githubUrl} className="hover:underline">
                  GitHub
                </a>
              </div>
            )}
            {resume.personalInfo.portfolioUrl && (
              <div className="flex items-center">
                <Globe size={14} className="mr-1" />
                <a href={resume.personalInfo.portfolioUrl} className="hover:underline">
                  Portfolio
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="p-8">
          {resume.personalInfo.summary && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Summary
              </h2>
              <p className="text-gray-800 leading-relaxed">{resume.personalInfo.summary}</p>
            </div>
          )}
          
          {resume.experience.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Professional Experience
              </h2>
              <div className="space-y-5">
                {resume.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold">{exp.position}</h3>
                      <span className="text-sm">
                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                      </span>
                    </div>
                    <p className="font-semibold">
                      {exp.company}
                      {exp.location && ` • ${exp.location}`}
                    </p>
                    <p className="mt-2 text-gray-800">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="mt-2 list-disc list-inside text-gray-800 space-y-1">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i}>{achievement}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.education.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Education
              </h2>
              <div className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold">{edu.institution}</h3>
                      <span className="text-sm">
                        {edu.startDate} - {edu.endDate}
                      </span>
                    </div>
                    <p className="font-semibold">{edu.degree}</p>
                    <p>{edu.fieldOfStudy}</p>
                    {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.skills.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Skills
              </h2>
              <div className="grid grid-cols-2 gap-x-4 gap-y-2">
                {resume.skills.map((skill) => (
                  <div key={skill.id} className="flex items-center">
                    <span className="font-semibold">{skill.name}:</span>
                    <span className="ml-2">{skill.level}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.projects.length > 0 && (
            <div className="mb-6">
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Projects
              </h2>
              <div className="space-y-4">
                {resume.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex justify-between items-baseline mb-1">
                      <h3 className="text-lg font-bold">
                        {project.name}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-blue-600 hover:text-blue-800 ml-2 text-sm"
                          >
                            (View)
                          </a>
                        )}
                      </h3>
                      <span className="text-sm">
                        {project.startDate} - {project.endDate}
                      </span>
                    </div>
                    <p className="mt-1 text-gray-800">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <p className="mt-1 text-sm">
                        <span className="font-semibold">Technologies:</span>{' '}
                        {project.technologies.join(', ')}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.certifications.length > 0 && (
            <div>
              <h2 className="text-xl font-bold uppercase border-b border-gray-300 pb-1 mb-3">
                Certifications
              </h2>
              <div className="space-y-3">
                {resume.certifications.map((cert) => (
                  <div key={cert.id}>
                    <h3 className="font-bold">{cert.name}</h3>
                    <p>{cert.organization}</p>
                    <p className="text-sm">
                      Issued: {cert.issueDate}
                      {cert.expirationDate && ` • Expires: ${cert.expirationDate}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  // Creative template with colorful accents
  const renderCreativeTemplate = () => {
    return (
      <div className="bg-white font-sans text-gray-900 border border-gray-200">
        <div className="bg-purple-600 text-white p-8">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-extrabold tracking-tight">{resume.personalInfo.fullName}</h1>
            {resume.personalInfo.summary && (
              <p className="mt-4 text-lg text-purple-100 leading-relaxed">{resume.personalInfo.summary}</p>
            )}
          </div>
        </div>
        
        <div className="bg-purple-800 text-white px-8 py-3">
          <div className="max-w-4xl mx-auto flex flex-wrap justify-between">
            {resume.personalInfo.email && (
              <div className="flex items-center mr-4">
                <Mail size={16} className="mr-1" />
                {resume.personalInfo.email}
              </div>
            )}
            {resume.personalInfo.phone && (
              <div className="flex items-center mr-4">
                <Phone size={16} className="mr-1" />
                {resume.personalInfo.phone}
              </div>
            )}
            {resume.personalInfo.location && (
              <div className="flex items-center mr-4">
                <MapPin size={16} className="mr-1" />
                {resume.personalInfo.location}
              </div>
            )}
            {resume.personalInfo.linkedinUrl && (
              <div className="flex items-center mr-4">
                <Linkedin size={16} className="mr-1" />
                <a href={resume.personalInfo.linkedinUrl} className="hover:underline">
                  LinkedIn
                </a>
              </div>
            )}
            {resume.personalInfo.githubUrl && (
              <div className="flex items-center">
                <Github size={16} className="mr-1" />
                <a href={resume.personalInfo.githubUrl} className="hover:underline">
                  GitHub
                </a>
              </div>
            )}
          </div>
        </div>
        
        <div className="max-w-4xl mx-auto p-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="md:col-span-2">
              {resume.experience.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Experience
                  </h2>
                  <div className="space-y-6">
                    {resume.experience.map((exp) => (
                      <div key={exp.id} className="relative pl-8 border-l-2 border-purple-200">
                        <div className="absolute w-4 h-4 bg-purple-500 rounded-full left-[-9px] top-0"></div>
                        <h3 className="text-xl font-bold">
                          {exp.position} at {exp.company}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                          {exp.location && ` | ${exp.location}`}
                        </p>
                        <p className="mt-2 text-gray-800">{exp.description}</p>
                        {exp.achievements.length > 0 && (
                          <ul className="mt-2 space-y-1 text-gray-800">
                            {exp.achievements.map((achievement, i) => (
                              <li key={i} className="flex items-start">
                                <span className="text-purple-500 mr-2">›</span>
                                {achievement}
                              </li>
                            ))}
                          </ul>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {resume.projects.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Projects
                  </h2>
                  <div className="space-y-6">
                    {resume.projects.map((project) => (
                      <div key={project.id}>
                        <h3 className="text-xl font-bold flex items-center">
                          {project.name}
                          {project.url && (
                            <a
                              href={project.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="ml-2 text-purple-500 hover:text-purple-700 text-sm"
                            >
                              View Project ↗
                            </a>
                          )}
                        </h3>
                        <p className="text-sm text-gray-600 mt-1">
                          {project.startDate} - {project.endDate}
                        </p>
                        <p className="mt-2 text-gray-800">{project.description}</p>
                        {project.technologies.length > 0 && (
                          <div className="flex flex-wrap gap-2 mt-2">
                            {project.technologies.map((tech, i) => (
                              <span
                                key={i}
                                className="bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
            
            <div>
              {resume.education.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Education
                  </h2>
                  <div className="space-y-4">
                    {resume.education.map((edu) => (
                      <div key={edu.id}>
                        <h3 className="font-bold">{edu.institution}</h3>
                        <p className="text-gray-800">{edu.degree}</p>
                        <p className="text-gray-600">{edu.fieldOfStudy}</p>
                        <p className="text-sm text-gray-600">
                          {edu.startDate} - {edu.endDate}
                        </p>
                        {edu.gpa && <p className="text-sm">GPA: {edu.gpa}</p>}
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {resume.skills.length > 0 && (
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Skills
                  </h2>
                  <div className="space-y-3">
                    {resume.skills.map((skill) => (
                      <div key={skill.id}>
                        <div className="flex justify-between mb-1">
                          <span className="font-medium">{skill.name}</span>
                          <span className="text-sm text-gray-600">{skill.level}</span>
                        </div>
                        <div className="w-full bg-gray-200 rounded-full h-1.5">
                          <div
                            className="bg-purple-600 h-1.5 rounded-full"
                            style={{
                              width:
                                skill.level === 'Beginner'
                                  ? '25%'
                                  : skill.level === 'Intermediate'
                                  ? '50%'
                                  : skill.level === 'Advanced'
                                  ? '75%'
                                  : '100%',
                            }}
                          ></div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
              
              {resume.certifications.length > 0 && (
                <div>
                  <h2 className="text-2xl font-bold text-purple-600 mb-4">
                    Certifications
                  </h2>
                  <div className="space-y-3">
                    {resume.certifications.map((cert) => (
                      <div key={cert.id}>
                        <h3 className="font-bold">{cert.name}</h3>
                        <p className="text-gray-800">{cert.organization}</p>
                        <p className="text-sm text-gray-600">
                          Issued: {cert.issueDate}
                        </p>
                        {cert.url && (
                          <a
                            href={cert.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-purple-500 hover:text-purple-700 text-sm"
                          >
                            View Credential
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  };

  // Minimal template with clean layout
  const renderMinimalTemplate = () => {
    return (
      <div className="bg-white font-sans text-gray-900 border border-gray-200">
        <div className="max-w-4xl mx-auto p-8">
          <div className="border-b border-gray-200 pb-4">
            <h1 className="text-3xl font-bold text-gray-900">{resume.personalInfo.fullName}</h1>
            <div className="flex flex-wrap gap-x-6 gap-y-2 mt-2 text-sm text-gray-600">
              {resume.personalInfo.email && (
                <div className="flex items-center">
                  <Mail size={14} className="mr-1" />
                  {resume.personalInfo.email}
                </div>
              )}
              {resume.personalInfo.phone && (
                <div className="flex items-center">
                  <Phone size={14} className="mr-1" />
                  {resume.personalInfo.phone}
                </div>
              )}
              {resume.personalInfo.location && (
                <div className="flex items-center">
                  <MapPin size={14} className="mr-1" />
                  {resume.personalInfo.location}
                </div>
              )}
              {resume.personalInfo.linkedinUrl && (
                <div className="flex items-center">
                  <Linkedin size={14} className="mr-1" />
                  <a href={resume.personalInfo.linkedinUrl} className="hover:underline">
                    LinkedIn
                  </a>
                </div>
              )}
              {resume.personalInfo.githubUrl && (
                <div className="flex items-center">
                  <Github size={14} className="mr-1" />
                  <a href={resume.personalInfo.githubUrl} className="hover:underline">
                    GitHub
                  </a>
                </div>
              )}
              {resume.personalInfo.portfolioUrl && (
                <div className="flex items-center">
                  <Globe size={14} className="mr-1" />
                  <a href={resume.personalInfo.portfolioUrl} className="hover:underline">
                    Portfolio
                  </a>
                </div>
              )}
            </div>
          </div>
          
          {resume.personalInfo.summary && (
            <div className="mt-6">
              <p className="text-gray-800 leading-relaxed">{resume.personalInfo.summary}</p>
            </div>
          )}
          
          {resume.experience.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Experience</h2>
              <div className="space-y-6">
                {resume.experience.map((exp) => (
                  <div key={exp.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <div>
                        <h3 className="font-semibold text-lg">{exp.position}</h3>
                        <p className="text-gray-700">
                          {exp.company}
                          {exp.location && ` • ${exp.location}`}
                        </p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 sm:mt-0">
                        {exp.startDate} – {exp.current ? 'Present' : exp.endDate}
                      </p>
                    </div>
                    <p className="mt-2 text-gray-800">{exp.description}</p>
                    {exp.achievements.length > 0 && (
                      <ul className="mt-2 space-y-1 text-gray-800">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start">
                            <span className="mr-2">•</span>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.education.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Education</h2>
              <div className="space-y-4">
                {resume.education.map((edu) => (
                  <div key={edu.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <div>
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <p className="text-gray-700">{edu.institution}</p>
                        <p className="text-gray-600">{edu.fieldOfStudy}</p>
                      </div>
                      <p className="text-sm text-gray-600 mt-1 sm:mt-0">
                        {edu.startDate} – {edu.endDate}
                      </p>
                    </div>
                    {edu.gpa && <p className="text-sm text-gray-600 mt-1">GPA: {edu.gpa}</p>}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.skills.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Skills</h2>
              <div className="flex flex-wrap gap-2">
                {resume.skills.map((skill) => (
                  <span
                    key={skill.id}
                    className="px-3 py-1 bg-gray-100 text-gray-800 rounded-full text-sm"
                  >
                    {skill.name}
                  </span>
                ))}
              </div>
            </div>
          )}
          
          {resume.projects.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Projects</h2>
              <div className="space-y-6">
                {resume.projects.map((project) => (
                  <div key={project.id}>
                    <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline">
                      <h3 className="font-semibold">
                        {project.name}
                        {project.url && (
                          <a
                            href={project.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-gray-600 hover:text-gray-900 ml-2 text-sm"
                          >
                            ↗
                          </a>
                        )}
                      </h3>
                      <p className="text-sm text-gray-600 mt-1 sm:mt-0">
                        {project.startDate} – {project.endDate}
                      </p>
                    </div>
                    <p className="mt-1 text-gray-800">{project.description}</p>
                    {project.technologies.length > 0 && (
                      <div className="flex flex-wrap gap-1 mt-2">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-2 py-0.5 bg-gray-100 text-gray-700 rounded text-xs"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          )}
          
          {resume.certifications.length > 0 && (
            <div className="mt-8">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Certifications</h2>
              <div className="space-y-4">
                {resume.certifications.map((cert) => (
                  <div key={cert.id}>
                    <h3 className="font-semibold">{cert.name}</h3>
                    <p className="text-gray-700">{cert.organization}</p>
                    <p className="text-sm text-gray-600 mt-1">
                      Issued: {cert.issueDate}
                      {cert.expirationDate && ` • Expires: ${cert.expirationDate}`}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <div className="p-4 bg-gray-50 border-b border-gray-200">
        <h2 className="text-lg font-medium text-gray-900">Resume Preview</h2>
        <p className="text-sm text-gray-500">
          This is how your resume will appear to employers
        </p>
      </div>
      <div className="p-4 overflow-auto max-h-[800px] border border-gray-100 m-4">
        {renderTemplate()}
      </div>
      <div className="px-4 py-3 bg-gray-50 border-t border-gray-200 flex justify-end space-x-4">
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Download PDF
        </button>
        <button
          type="button"
          className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-teal-600 hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500"
        >
          Share Resume
        </button>
      </div>
    </div>
  );
};

export default ResumePreview;