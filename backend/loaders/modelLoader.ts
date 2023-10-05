import { Sequelize } from "sequelize";
import defineUserModel from "../models/user.model";
import defineQuestionModel from "../models/Question.model";
import defineAlternativeModel from "../models/Alternative.model";

export default function loadModels(sequelize: Sequelize) {
  const User = defineUserModel(sequelize);
  const Question = defineQuestionModel(sequelize);
  const Alternative = defineAlternativeModel(sequelize);

  /**
   * Relación entre question y alternative
   */
  Question.hasMany(Alternative, {
    foreignKey: "questionId",
    as: "alternatives",
  });
  Alternative.belongsTo(Question, {
    foreignKey: "questionId",
  });

  return { User, Question, Alternative };
}
