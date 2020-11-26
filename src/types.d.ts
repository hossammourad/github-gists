export interface GistFiles {
  [key: string]: {
    filename: string;
    language: string;
  };
}

export interface Gist {
  id: string;
  description: string;
  html_url: string;
  files: { GistFiles };
}

export interface GistFork {
  id: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
