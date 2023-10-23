import { IAlternative } from "./alternative";

export interface IQuestion {
  id?: number;
  node_id: number;
  questionText: string;
  imageURL?: string;
  figureCaption?: string;
  difficulty?: "easy" | "medium" | "hard";
  createdAt?: Date;
  updatedAt?: Date;
  alternatives?: IAlternative[];
}

export interface ICreateQuestion extends IQuestion {}
export interface IUpdateQuestion extends IQuestion {}
