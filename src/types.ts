export interface Author {
  name: string;
  description: string;
  urls: {
    github: string;
    twitter: string;
  };
  twitter: {
    username: string;
  };
  images?: { width: number; url: string }[];
  intro?: string;
}

export interface Linktree {
  category: string;
  items: {
    label: string;
    href: string;
    text_color?: string;
    bg_color?: string;
  }[];
}

export interface Project {
  date: string;
  title: string;
  description: string;
  tags?: string[];
  github?: string;
  external?: string;
  archived?: true;
}

export interface Email {
  name: string;
  from: string;
  body: string;
  subject?: string;
}
