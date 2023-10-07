import { DataTypes, Model, Sequelize } from "sequelize";
import { IStudentResponse } from "../interfaces/studentResponse";

export interface StudentResponseModel
  extends Model<IStudentResponse, IStudentResponse> {}

export default function defineStudentResponseModel(sequelize: Sequelize) {
  const StudentResponse = sequelize.define<
    StudentResponseModel,
    IStudentResponse
  >(
    "student_response",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      student_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      question_id: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      alternative_id: {
        type: DataTypes.INTEGER,
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

  return StudentResponse;
}
