import { Sequelize } from "sequelize";
import NodeRep from "../repositories/node.rep";
import QuestionRepository from "../repositories/question.rep";
import AlternativeRepository from "../repositories/alternative.rep";
import UserNodeRep from "../repositories/usernode.rep";
import axios from "axios";

const Question = new QuestionRepository();
const Node = new NodeRep();
const Alternative = new AlternativeRepository();
const UserNode = new UserNodeRep();

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


export const getStudentQuestion = async (user_id: number) => {
  try {
    const nodes = await UserNode.getAll({
      where: {
        user_id: user_id,
        active: true,
      },
      include: {
        model: Node.Model,
        as: "node",
      },
    });
    const questionArray = await Promise.all(
      nodes.map(async (node) => {
        const idNode = node.node_id;
        const questions = await Node.findByPk(idNode, {
          include: {
            model: Question.Model,
            as: "questions",
          },
        });
        return (questions as any) || [];
      })
    );
    const allQuestions = questionArray.flat();
    const indiceAleatorio = Math.floor(Math.random() * allQuestions.length);
    const nodoRandom = allQuestions[indiceAleatorio];
    return nodoRandom || 0;
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

export const getAlternatives = async (question_id: number) => {
  try {
    const alternatives = Alternative.getAll({
      where: {
        questionId: question_id,
      },
    });
    return alternatives;
  } catch (error: any) {
    throw error;
  }
};