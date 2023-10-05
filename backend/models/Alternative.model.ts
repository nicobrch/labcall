import { DataTypes, Model, Sequelize } from "sequelize";
import { IAlternative } from "../interfaces/alternative";

export interface AlternativeModel extends Model<IAlternative, IAlternative> {}

export default function defineAlternativeModel(sequelize: Sequelize) {
  const Alternative = sequelize.define<AlternativeModel, IAlternative>(
    "alternative",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      questionId: {
        type: DataTypes.INTEGER,
        references: {
          model: "question",
          key: "id",
        },
        allowNull: false,
      },
      answerText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      isCorrect: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      },
      feedback: {
        type: DataTypes.TEXT,
        allowNull: true,
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

  return Alternative;
}
