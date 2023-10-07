import { IAlternative } from "./alternative";

export interface IStudentResponse {
  id?: number;
  student_id?: number;
  question_id?: number;
  alternative_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateStudentResponse extends IStudentResponse {}
export interface IUpdateStudentResponse extends IStudentResponse {}
