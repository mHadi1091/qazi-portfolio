import { 
  Globe, Zap, Terminal, Container, Lock, Database, 
  Cloud, Server, Award, Settings, Shield,
  Code, FileCode, Network, Layers
} from 'lucide-react';

export const projects = [
  {
    title: 'Multi-Region Cloud Infrastructure',
    description: 'Designed and deployed highly available architecture across 3 AWS regions serving 10M+ users with 99.99% uptime',
    tech: ['EC2', 'Route 53', 'CloudFront', 'RDS', 'S3'],
    icon: Globe,
    color: 'blue'
  },
  {
    title: 'Serverless Microservices Platform',
    description: 'Built fully serverless architecture reducing operational costs by 60% while improving scalability',
    tech: ['Lambda', 'API Gateway', 'DynamoDB', 'EventBridge'],
    icon: Zap,
    color: 'yellow'
  },
  {
    title: 'CI/CD Pipeline Automation',
    description: 'Implemented automated deployment pipelines achieving 95% success rate and 10x faster deployments',
    tech: ['CodePipeline', 'CodeBuild', 'CloudFormation', 'Terraform'],
    icon: Terminal,
    color: 'purple'
  },
  {
    title: 'Kubernetes on AWS EKS',
    description: 'Orchestrated containerized applications with auto-scaling, monitoring, and zero-downtime deployments',
    tech: ['EKS', 'Docker', 'Helm', 'Prometheus', 'Grafana'],
    icon: Container,
    color: 'indigo'
  },
  {
    title: 'Cloud Security & Compliance',
    description: 'Established security framework achieving SOC 2 compliance with automated security scanning',
    tech: ['IAM', 'GuardDuty', 'Security Hub', 'KMS', 'CloudTrail'],
    icon: Lock,
    color: 'green'
  },
  {
    title: 'Big Data Analytics Platform',
    description: 'Architected scalable data lake processing 1TB+ daily with real-time analytics capabilities',
    tech: ['S3', 'Glue', 'Athena', 'Redshift', 'EMR'],
    icon: Database,
    color: 'violet'
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
    name: 'AWS DevOps Engineer', 
    level: 'Professional', 
    year: '2024',
    icon: Settings,
    color: 'blue'
  },
  { 
    name: 'AWS Security', 
    level: 'Specialty', 
    year: '2023',
    icon: Shield,
    color: 'purple'
  },
  { 
    name: 'AWS SysOps Administrator', 
    level: 'Associate', 
    year: '2023',
    icon: Server,
    color: 'green'
  }
];

export const skills = [
  { name: 'AWS', icon: Cloud },
  { name: 'EC2', icon: Server },
  { name: 'Lambda', icon: Zap },
  { name: 'S3', icon: Database },
  { name: 'Docker', icon: Container },
  { name: 'Kubernetes', icon: Layers },
  { name: 'Terraform', icon: FileCode },
  { name: 'Python', icon: Code },
  { name: 'CI/CD', icon: Terminal },
  { name: 'Monitoring', icon: Network },
  { name: 'Security', icon: Shield },
  { name: 'DevOps', icon: Settings }
];