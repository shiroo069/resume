import { JobListing } from '../types';

// Mock job listings data
export const mockJobs: JobListing[] = [
  {
    id: '1',
    title: 'Senior Frontend Developer',
    company: 'TechVision Inc.',
    location: 'San Francisco, CA (Remote)',
    description: 'We are seeking an experienced Frontend Developer to join our growing team. You will be responsible for building user interfaces for our web applications using React and TypeScript.',
    requirements: [
      'At least 5 years of experience with React',
      'Strong understanding of TypeScript',
      'Experience with state management solutions (Redux, MobX, etc.)',
      'Knowledge of responsive design principles',
      'Bachelor\'s degree in Computer Science or related field'
    ],
    salary: '$120,000 - $150,000',
    postDate: '2025-03-15',
    applicationDeadline: '2025-04-15',
    source: 'LinkedIn',
    sourceUrl: 'https://linkedin.com',
    matchScore: 92
  },
  {
    id: '2',
    title: 'Full Stack Developer',
    company: 'Innovate Solutions',
    location: 'New York, NY (Hybrid)',
    description: 'Join our innovative team to build high-performance web applications. You will be working on both frontend and backend development using modern technologies.',
    requirements: [
      'Experience with React, Node.js, and Express',
      'Knowledge of database systems (MongoDB, PostgreSQL)',
      'Understanding of RESTful APIs',
      'Familiarity with cloud platforms (AWS, GCP, or Azure)',
      'Strong problem-solving skills'
    ],
    salary: '$110,000 - $135,000',
    postDate: '2025-03-18',
    applicationDeadline: '2025-04-18',
    source: 'Indeed',
    sourceUrl: 'https://indeed.com',
    matchScore: 85
  },
  {
    id: '3',
    title: 'UX/UI Designer',
    company: 'Creative Digital Agency',
    location: 'Remote',
    description: 'We are looking for a talented UX/UI Designer to create engaging and effective user experiences for our clients. You will collaborate with cross-functional teams to deliver high-quality design solutions.',
    requirements: [
      'Proven experience in UX/UI design',
      'Proficiency with design tools (Figma, Sketch, Adobe XD)',
      'Knowledge of user-centered design principles',
      'Portfolio demonstrating your design process',
      'Experience with design systems'
    ],
    salary: '$90,000 - $120,000',
    postDate: '2025-03-20',
    applicationDeadline: '2025-04-20',
    source: 'Dribbble',
    sourceUrl: 'https://dribbble.com',
    matchScore: 78
  },
  {
    id: '4',
    title: 'Machine Learning Engineer',
    company: 'Data Dynamics',
    location: 'Austin, TX (On-site)',
    description: 'Join our AI team to develop and implement machine learning models for real-world applications. You will work on cutting-edge projects in various domains.',
    requirements: [
      'Strong background in machine learning and deep learning',
      'Experience with Python and ML frameworks (TensorFlow, PyTorch)',
      'Knowledge of data preprocessing and feature engineering',
      'Understanding of deployment and scaling of ML models',
      'MS or PhD in Computer Science, Machine Learning, or related field'
    ],
    salary: '$130,000 - $160,000',
    postDate: '2025-03-22',
    applicationDeadline: '2025-04-22',
    source: 'AngelList',
    sourceUrl: 'https://angel.co',
    matchScore: 65
  },
  {
    id: '5',
    title: 'DevOps Engineer',
    company: 'Cloud Systems Inc.',
    location: 'Seattle, WA (Hybrid)',
    description: 'We are seeking a skilled DevOps Engineer to help us build and maintain our cloud infrastructure and CI/CD pipelines. You will play a key role in improving our deployment processes.',
    requirements: [
      'Experience with cloud platforms (AWS, Azure, GCP)',
      'Knowledge of containerization (Docker, Kubernetes)',
      'Familiarity with CI/CD tools (Jenkins, GitHub Actions)',
      'Understanding of infrastructure as code (Terraform, CloudFormation)',
      'Scripting skills (Bash, Python)'
    ],
    salary: '$125,000 - $155,000',
    postDate: '2025-03-25',
    applicationDeadline: '2025-04-25',
    source: 'StackOverflow',
    sourceUrl: 'https://stackoverflow.com/jobs',
    matchScore: 73
  }
];