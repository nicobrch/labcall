export interface IUserNode {
  id?: number;
  user_id?: number;
  node_id?: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateUserNode extends IUserNode {}
export interface IUpdateUserNode extends IUserNode {}
