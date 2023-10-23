export interface IProject extends IProjectDraft {
  _id: string;
}

export interface IProjectDraft {
  title: string;
  description: string;
  technologies: ITech[];
  photos: string[];
}

export interface ITech {
  _id: string;
  name: string;
}
