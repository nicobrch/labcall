import { DataTypes, Model, Sequelize } from "sequelize";
import { INode } from "../interfaces/node";

export interface NodeModel extends Model<INode, INode> {}

export default function defineNodeModel(sequelize: Sequelize) {
  const Node = sequelize.define<NodeModel, INode>(
    "node",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      axis_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      axis: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      ability: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      ability_id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      description: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        defaultValue: true,
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

  return Node;
}
