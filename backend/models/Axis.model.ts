import { DataTypes, Model, Sequelize } from "sequelize";
import { IAxis } from "../interfaces/axis";

export interface IAxisModel extends Model<IAxis, IAxis> {}

export default function defineAxisModel(sequelize: Sequelize) {
  const Axis = sequelize.define<IAxisModel, IAxis>(
    "axis",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      description: {
        type: DataTypes.TEXT,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Axis;
}
