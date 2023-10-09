export interface IUser {
  id?: number;
  rut?: string;
  firstname?: string; // Primer nombre
  lastname1?: string; // Primer apellido
  lastname2?: string; // Segundo apellido
  email?: string;
  password?: string;
  type?: string;
  active?: boolean;
  course_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUser extends IUser {}
export interface IUpdateUser extends IUser {}

export interface ISignInUser {
  rut: string;
  password: string;
}
export interface IAddNodesToUser {
  rut: string;
  nodes: Node[];
}
export interface Node {
  axis: string;
  ability: string;
}
