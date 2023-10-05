import { DataTypes, Model, Sequelize } from "sequelize";
import { IAlternative } from "./Alternative.model";

export interface IQuestion {
  id?: number;
  questionText: string;
  imageURL?: string;
  figureCaption?: string;
  createdAt?: Date;
  updatedAt?: Date;
  alternatives?: IAlternative[];
}

export interface QuestionModel extends Model<IQuestion, IQuestion> {}

export default function defineQuestionModel(sequelize: Sequelize) {
  const Question = sequelize.define<QuestionModel, IQuestion>(
    "question",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      questionText: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      imageURL: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      figureCaption: {
        type: DataTypes.STRING(255),
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

  return Question;
}
