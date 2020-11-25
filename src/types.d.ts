export interface GistFiles {
  [key: string]: {
    filename: string;
    language: string;
  };
}

export interface Gist {
  id: string;
  description: string;
  files: { GistFiles };
}

export interface GistFork {
  id: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}
