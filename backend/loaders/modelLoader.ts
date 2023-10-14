import { Sequelize } from "sequelize";
import defineUserModel from "../models/user.model";
import defineQuestionModel from "../models/Question.model";
import defineAlternativeModel from "../models/Alternative.model";
import defineNodeModel from "../models/Node.model";
import defineUserNodeModel from "../models/UserNode.model";
import defineStudentResponseModel from "../models/StudentResponse.model";
import defineCourseModel from "../models/course.model";
import defineAbilityModel from "../models/Ability.model";
import defineAxisModel from "../models/Axis.model";

export default function loadModels(sequelize: Sequelize) {
  const User = defineUserModel(sequelize);
  const Question = defineQuestionModel(sequelize);
  const Alternative = defineAlternativeModel(sequelize);
  const Node = defineNodeModel(sequelize);
  const UserNode = defineUserNodeModel(sequelize);
  const StudentResponse = defineStudentResponseModel(sequelize);
  const Course = defineCourseModel(sequelize);

  const Ability = defineAbilityModel(sequelize);
  const Axis = defineAxisModel(sequelize);
  /**
   * Relación entre Ability y Node
   */
  Node.belongsTo(Ability, {
    foreignKey: "ability_id",
    as: "ability_data",
  });
  Ability.hasMany(Node, {
    foreignKey: "ability_id",
    as: "nodes_data",
  });

  /**
   * Relación entre Axis y Node
   */
  Node.belongsTo(Axis, {
    foreignKey: "axis_id",
    as: "axis_data",
  });
  Axis.hasMany(Node, {
    foreignKey: "axis_id",
    as: "nodes_data",
  });

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
  /**
   * Relación entre studentResponse y student
   */
  StudentResponse.belongsTo(User, {
    foreignKey: "user_id",
    as: "user",
  });
  User.hasMany(StudentResponse, {
    foreignKey: "user_id",
    as: "responses",
  });
  /**
   * Relación entre StudentResponse y Question
   */
  StudentResponse.belongsTo(Question, {
    foreignKey: "question_id",
    as: "question",
  });
  Question.hasMany(StudentResponse, {
    foreignKey: "question_id",
    as: "responses",
  });
  /**
   * Relación entre StudentResponse y Alternative
   */
  StudentResponse.belongsTo(Alternative, {
    foreignKey: "alternative_id",
    as: "alternativa",
  });
  Alternative.hasMany(StudentResponse, {
    foreignKey: "alternative_id",
    as: "responses",
  });
  /**
   * Relación entre Usuario y Curso
   */
  User.belongsTo(Course, {
    foreignKey: "course_id",
    as: "curso",
  });
  Course.hasMany(User, {
    foreignKey: "course_id",
    as: "usuarios",
  });

  return {
    User,
    Question,
    Alternative,
    Node,
    UserNode,
    StudentResponse,
    Course,
    Axis,
    Ability,
  };
}
