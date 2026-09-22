// src/data/portfolio.ts

export const portfolioData = {
  // Start year for experience calculation (2023 as mentioned)
  startYear: 2023,
  
  // Personal Info
  name: 'Arnau Albert Sánchez',
  title: 'Systems Architect & Full-Stack Engineer',
  
  // Affiliations
  affiliations: [
    'Barcelona Supercomputing Center (BSC)',
    'IRB Barcelona',
  ],
  
  // Core Stack
  coreStack: ['Golang', 'Python', 'Cloud/DevOps'],
  
  // Technical Matrix
  technicalMatrix: {
    runtime: ['Go', 'Python', 'PHP', 'JavaScript', 'TypeScript'],
    frameworks: ['React', 'Astro', 'Node.js', 'FastAPI', 'Gin', 'Laravel'],
    infrastructure: ['KVM', 'Docker', 'AWS', 'Kubernetes', 'Terraform', 'CI/CD'],
  },
  
  // Work Experience
  workExperience: [
    {
      institution: 'Barcelona Supercomputing Center (BSC)',
      role: 'Full Stack & DevOps Engineer',
      period: 'Jun 2024 - Present',
      description: 'Developing high-performance computing solutions and distributed systems.',
    },
    {
      institution: 'Institut Recerca Biomedica Barcelona (IRB)',
      role: 'Full Stack Developer',
      period: 'Jun 2023 - Jun 2024',
      description: 'Building data pipelines and analysis tools for biomedical research.',
    },
    {
      institution: 'Barcelona Supercomputing Center (BSC)',
      role: 'Internship',
      period: 'Jan 2023 - Jun 2023',
      description: 'Initial experience in HPC environment.',
    },
  ],
  
  // Education
  education: [
    {
      degree: 'ASIX - Advanced Systems Administration',
      institution: 'Technical College',
      period: 'Sep 2023 - Jun 2024',
    },
    {
      degree: 'DAW Bioinformatics',
      institution: 'Technical College',
      period: 'Sep 2021 - Jun 2023',
    },
    {
      degree: 'SMX - Computer Systems Networks',
      institution: 'Technical College',
      period: 'Sep 2019 - Jun 2021',
    },
  ],
  
  // Projects
  projects: [
    {
      name: 'Doctor AI',
      description: 'Bioinformatics platform with Golang tools for genetic file analysis and deep learning for lung cancer detection.',
      tech: ['Python', 'TensorFlow', 'FastAPI', 'Docker', 'Go'],
      architecture: 'Microservices architecture with AI inference engine and human oversight module.',
      repoUrl: 'https://github.com/arnaualbert/doctor_ai',
      badges: ['AI/ML', 'Healthcare', 'Production'],
    },
    {
      name: 'Samplexer',
      description: 'Internal application deployed at BSC, IRB & AWS for generating bioinformatics commands, tracking jobs, and automatic database management.',
      tech: ['Go', 'Kubernetes', 'PostgreSQL', 'Redis', 'AWS'],
      architecture: 'Event-driven architecture with distributed workers and real-time monitoring.',
      repoUrl: '',
      badges: ['Backend', 'Pipeline', 'Scalable'],
    },
    {
      name: 'Portfolio',
      description: 'Executive portfolio built with Astro, TypeScript, and Tailwind CSS, deployed on GitHub Pages. Rewritten using Qwen and designed by Stitch.',
      tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
      architecture: 'Static site generation with i18n support (EN/ES/CA).',
      repoUrl: 'https://github.com/arnaualbert/arnaualbert.github.io',
      badges: ['Portfolio', 'i18n', 'Static'],
    },
    {
      name: 'TicTac Scheduler',
      description: 'CLI task manager in Golang with SQLite3 for job tracking without external dependencies.',
      tech: ['Go', 'SQLite3', 'CLI'],
      architecture: 'Single binary CLI application with embedded database.',
      repoUrl: 'https://github.com/arnaualbert/tictac_scheduler',
      badges: ['CLI', 'Tools', 'Go'],
    },
    {
      name: 'Cracks',
      description: 'VPC management software that creates and manages KVM virtual machines, Docker containers, and cloud storage solutions.',
      tech: ['Python', 'Go', 'KVM', 'Docker', 'AWS'],
      architecture: 'Hybrid cloud management with automated provisioning and orchestration.',
      repoUrl: 'https://github.com/arnaualbert/cracks',
      badges: ['Infrastructure', 'Cloud', 'Automation'],
    },
    {
      name: 'Tasty Venus',
      description: 'Simple website built to practice Astro, TypeScript, and Tailwind CSS with GitHub Pages deployment.',
      tech: ['Astro', 'TypeScript', 'Tailwind CSS'],
      architecture: 'Static site with responsive design.',
      repoUrl: 'https://github.com/arnaualbert/tasty-venus',
      demo: 'https://arnaualbert.github.io/tasty-venus/',
      badges: ['Practice', 'Static'],
    },
  ],
  
  // Contact / Dispatch Terminal
  contact: {
    github: 'https://github.com/arnaualbert',
    linkedin: 'https://www.linkedin.com/in/arnau-albert-s%C3%A1nchez-81211826b/',
    twitter: 'https://x.com/arnaualbert2003',
    email: 'arnaualbert2003@gmail.com',
  },
};
