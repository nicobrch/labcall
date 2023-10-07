import { IAlternative } from "./alternative";

export interface INode {
  id?: number;
  axis?: string;
  ability?: string;
  description?: string;
  active?: Boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateNode extends INode {}
export interface IUpdateNode extends INode {}
