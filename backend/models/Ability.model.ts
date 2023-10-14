import { DataTypes, Model, Sequelize } from "sequelize";
import { IAbility } from "../interfaces/ability";

export interface IAbilityModel extends Model<IAbility, IAbility> {}

export default function defineAbilityModel(sequelize: Sequelize) {
  const Ability = sequelize.define<IAbilityModel, IAbility>(
    "ability",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING(180),
        allowNull: false,
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
  return Ability;
}
