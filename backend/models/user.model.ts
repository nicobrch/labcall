import { DataTypes, Model, Sequelize } from "sequelize";

export interface UserAttributes {
  rut?: string;
  firstname?: string; // Primer nombre
  lastname1?: string; // Primer apellido
  lastname2?: string; // Segundo apellido
  email?: string;
  password?: string;
  type?: string;
  active?: boolean;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface UserModel extends Model<UserAttributes, UserAttributes> {}

export default function defineUserModel(sequelize: Sequelize) {
  const User = sequelize.define<UserModel, UserAttributes>(
    "user",
    {
      rut: {
        type: DataTypes.STRING(13),
        primaryKey: true,
        autoIncrement: false,
      },
      firstname: {
        // Primer nombre
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      lastname1: {
        // Primer apellido
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      lastname2: {
        // Segundo apellido
        type: DataTypes.STRING(180),
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING(90),
        allowNull: true,
      },
      password: {
        type: DataTypes.STRING(120),
        allowNull: false,
      },
      type: {
        type: DataTypes.STRING(80),
        allowNull: true,
      },
      active: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
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
  return User;
}
