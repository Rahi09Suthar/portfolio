export interface Project {
  id: string;
  title: string;
  description: string;
  tech: string[];
  image: string;
  liveUrl: string;
  githubUrl: string;
}

export interface Skill {
  name: string;
  level: number;
  category: 'Programming' | 'Frontend' | 'Backend' | 'Database' | 'Tools';
}

export interface Experience {
  id: string;
  title: string;
  organization: string;
  date: string;
  description: string;
}
