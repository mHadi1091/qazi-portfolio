import { 
  Globe, Zap, Terminal, Container, Lock, Database, 
  Cloud, Server, Award, Settings, Shield,
  Code, FileCode, Network, Layers, Trophy, Star, Brain
} from 'lucide-react';

export const projects = [
  {
    title: 'AI-Powered Enterprise Monitoring Platform',
    description: 'Working with international client to contribute to their product handling 1M+ users & managing the whole LGTM stack with AI-driven insights',
    tech: ['LGTM Stack', 'Grafana', 'Loki', 'Tempo', 'Mimir', 'AI/ML'],
    icon: Brain,
    color: 'purple'
  },
  {
    title: 'Multi-Cloud Infrastructure',
    description: 'Designed and deployed infrastructure across AWS, Azure, GCP, and Alibaba Cloud with 99.9% uptime',
    tech: ['AWS', 'Azure', 'GCP', 'Terraform', 'Kubernetes'],
    icon: Globe,
    color: 'blue'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Implemented automated deployment pipelines using GitHub Actions, Azure DevOps, and GitLab CI',
    tech: ['GitHub Actions', 'Azure DevOps', 'GitLab', 'Jenkins'],
    icon: Terminal,
    color: 'purple'
  },
  {
    title: 'Container Orchestration',
    description: 'Orchestrated containerized applications with Docker and Kubernetes across multiple cloud providers',
    tech: ['Docker', 'Kubernetes', 'Helm', 'RUNPOD'],
    icon: Container,
    color: 'indigo'
  },
  {
    title: 'Infrastructure as Code',
    description: 'Automated infrastructure provisioning using Terraform and AWS CDK with version control',
    tech: ['Terraform', 'AWS CDK', 'Python', 'Shell'],
    icon: FileCode,
    color: 'green'
  },
  {
    title: 'Configuration Management',
    description: 'Automated server configuration and application deployment using Ansible playbooks',
    tech: ['Ansible', 'Python', 'YAML', 'Bash'],
    icon: Settings,
    color: 'violet'
  }
];

export const awards = [
  {
    title: 'Top Performer of the Quarter',
    company: 'IET, San Francisco',
    location: 'Lahore',
    icon: Trophy,
    color: 'gold'
  },
  {
    title: 'Best Performer of the Month',
    company: 'Genclouds',
    location: '',
    icon: Star,
    color: 'blue'
  },
  {
    title: 'Official Exam Excellence',
    company: '97% Results',
    location: '',
    icon: Award,
    color: 'green'
  }
];

export const certifications = [
  { 
    name: 'AWS Solutions Architect', 
    level: 'Professional', 
    year: '2024',
    icon: Award,
    color: 'orange'
  },
  { 
    name: 'AWS Solutions Architect', 
    level: 'Associate', 
    year: '2023',
    icon: Settings,
    color: 'blue'
  },
  { 
    name: 'Certified Kubernetes Administrator', 
    level: 'CKA', 
    year: '2023',
    icon: Container,
    color: 'purple'
  }
];

export const skills = [
  { name: 'AWS', icon: Cloud },
  { name: 'Azure', icon: Cloud },
  { name: 'GCP', icon: Cloud },
  { name: 'RUNPOD', icon: Server },
  { name: 'Alibaba', icon: Cloud },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Layers },
  { name: 'Terraform', icon: FileCode },
  { name: 'CDK', icon: Code },
  { name: 'Python', icon: Code },
  { name: 'Shell/Bash', icon: Terminal },
  { name: 'GitHub Actions', icon: Settings },
  { name: 'Azure DevOps', icon: Settings },
  { name: 'GitLab', icon: Settings },
  { name: 'Jenkins', icon: Terminal },
  { name: 'Ansible', icon: Settings },
  { name: 'LGTM Stack', icon: Network }
];