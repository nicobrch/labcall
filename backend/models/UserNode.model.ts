import { DataTypes, Model, Sequelize } from "sequelize";
import { IUserNode } from "../interfaces/UserNode";

export interface UserNodeModel extends Model<IUserNode, IUserNode> {}

export default function defineUserNodeModel(sequelize: Sequelize) {
  const UserNode = sequelize.define<UserNodeModel, IUserNode>(
    "user_node",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      user_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      node_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: true,
        defaultValue: true,
      },
      count: {
        type: DataTypes.INTEGER,
        allowNull: true,
        defaultValue: 3,
      },
      createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW,
      },
      updatedAt: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );

  return UserNode;
}
