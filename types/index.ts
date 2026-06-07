export interface NavLink {
  label: string;
  href: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  current: boolean;
  description: string;
  bullets: string[];
  tags: string[];
}

export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  highlight?: string;
  githubUrl?: string;
  liveUrl?: string;
  featured?: boolean;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Publication {
  title: string;
  conference: string;
  year: number;
  award?: string;
  abstract: string;
  url?: string;
}

export interface TeachingModule {
  name: string;
  level: string;
}

export interface Photo {
  id: string;
  src: string;
  alt: string;
  width: number;
  height: number;
  category?: string;
}
