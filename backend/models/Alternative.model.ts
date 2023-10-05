import { DataTypes, Model, Sequelize } from "sequelize";

export interface IAlternative {
  id?: number;
  questionId: number;
  answerText: string;
  isCorrect: boolean;
  feedback: string;
  createdAt?: Date;
  updatedAt?: Date;
}

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
          model: "question", // nombre de la tabla, no del modelo
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
