
export interface Project {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  liveUrl?: string;
  screenshots: string[];
}

export interface Service {
  title: string;
  description: string;
  icon: string;
}
