import { Sequelize } from "sequelize";
import NodeRep from "../repositories/node.rep";
import QuestionRepository from "../repositories/question.rep";
import AlternativeRepository from "../repositories/alternative.rep";
import axios from "axios";

const Question = new QuestionRepository();
const Node = new NodeRep();
const Alternative = new AlternativeRepository();

export const getNodeQuestions = async (node_id: number) => {
  try {
    const node = Node.findByPk(node_id, {
      include: {
        model: Question.Model,
        as: "questions",
      },
    });
    return node;
  } catch (error) {
    throw error;
  }
};

export const getNodes = async () => {
  try {
    const nodes = Node.getAll({
      where: {
        active: true,
      },
      include: {
        model: Question.Model,
        as: "questions",
      },
    });
    return nodes;
  } catch (error: any) {
    throw error;
  }
};

export const getStudentQuestion = (user_id: number, node_id?: number) => {
  try {
    const response = axios.get("http://localhost:8000/api/enviar_pregunta");
    console.log(response);

    const question = Question.findOne(
      {},
      {
        order: Sequelize.literal("RAND()"),
        include: {
          model: Alternative.Model,
          as: "alternatives",
        },
      }
    );
    return question;
  } catch (error) {
    throw error;
  }
};
export const getQuestionsByNodeId = async (node_id: number) => {
  try {
    const questions = Question.getQuestionsByNodeId(node_id);
    return questions;
  } catch (error) {
    throw error;
  }
};
