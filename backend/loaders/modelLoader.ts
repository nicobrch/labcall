import { Sequelize } from "sequelize";
import defineUserModel from "../models/user.model";
import defineQuestionModel from "../models/Question.model";
import defineAlternativeModel from "../models/Alternative.model";
import defineNodeModel from "../models/Node.model";
import defineUserNodeModel from "../models/UserNode.model";

export default function loadModels(sequelize: Sequelize) {
  const User = defineUserModel(sequelize);
  const Question = defineQuestionModel(sequelize);
  const Alternative = defineAlternativeModel(sequelize);
  const Node = defineNodeModel(sequelize);
  const UserNode = defineUserNodeModel(sequelize);

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
  /**
   * Relación entre User y UserNode
   */
  User.hasMany(UserNode, {
    foreignKey: "user_id",
    as: "user_nodes",
  });
  UserNode.belongsTo(Node, {
    foreignKey: "user_id",
    as: "user",
  });
  /**
   * Relación entre Node y UserNode
   */
  Node.hasMany(UserNode, {
    foreignKey: "node_id",
    as: "user_nodes",
  });
  UserNode.belongsTo(Node, {
    foreignKey: "node_id",
    as: "node",
  });
  /**
   * Relación entre Question y Node
   */
  Node.hasMany(Question, {
    foreignKey: "node_id",
    as: "questions", // En plural porque un Node puede tener muchas Questions
  });
  Question.belongsTo(Node, {
    foreignKey: "node_id",
    as: "node", // En singular porque cada Question pertenece a un único Node
  });

  return { User, Question, Alternative, Node, UserNode };
}
