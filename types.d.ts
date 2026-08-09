export type ProjectTemplate = {
  title: string;
  languages: {
    language: string;
    className: string;
  }[];
  links: {
    gitHub: string;
    website?: string;
  }[];
  description: string;
};
