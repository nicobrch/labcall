export interface ICourse {
  id?: number;
  name: string;
  description?: string;
  startDate?: Date;
  endDate?: Date;
  userId?: number; // Este campo establece la relación con User.
}
export interface ICreateCourse extends ICourse {}
export interface IUpdateCourse extends ICourse {}
