
export interface Engineer {
  id: string;
  name: string;
  title: string;
  specialty: string;
  bio: string;
  image: string;
  blueprint: string;
  externalUrl: string; // New field for redirection
  stats: {
    label: string;
    value: number;
  }[];
  notableProjects: string[];
}

export interface ChatMessage {
  role: 'user' | 'assistant';
  content: string;
}
