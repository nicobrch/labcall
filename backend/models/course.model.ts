import { DataTypes, Model, Sequelize } from "sequelize";
import { ICourse } from "../interfaces/course";

export interface CourseModel extends Model<ICourse, ICourse> {}

export default function defineCourseModel(sequelize: Sequelize) {
  const Course = sequelize.define<CourseModel, ICourse>(
    "course",
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
      startDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
      endDate: {
        type: DataTypes.DATE,
        allowNull: true,
      },
    },
    {
      freezeTableName: true,
    }
  );
  return Course;
}
