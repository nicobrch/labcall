import { Sequelize } from "sequelize";
import NodeRep from "../repositories/node.rep";
import QuestionRepository from "../repositories/question.rep";
import AlternativeRepository from "../repositories/alternative.rep";
import UserNodeRep from "../repositories/usernode.rep";
import axios from "axios";
import { QUESTION_SERVICE_PATH } from "@/config";

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
    const user_node = await UserNode.getAll({
      where: {
        user_id: user_id,
        active: true,
      },
      include: {
        model: Node.Model,
        as: "node",
      },
    });
    if (!user_node || !user_node[0]) {
      return 0;
    }
    console.log("NODOS:", user_node);

    const question_response = await axios
      .get(
        `${QUESTION_SERVICE_PATH}/api/enviar_pregunta/${user_id}/${user_node[0].node_id}`
      )
      .catch((error) => {
        console.log(error);
      });

    if (
      !question_response ||
      (question_response as any)?.data?.status === "error"
    ) {
      const questionArray = await Promise.all(
        user_node.map(async (node) => {
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
    }

    console.log(
      question_response.data.nodo,
      question_response.data.pregunta_id
    );

    const question = await Node.getAll({
      where: {
        id: question_response.data.nodo,
      },
      include: {
        model: Question.Model,
        as: "questions",
        required: true,
        where: {
          id: question_response.data.pregunta_id,
        },
      },
    });
    console.log(question[0]);
    console.log(question.flat()[0]);

    return question.flat()[0] || 0;
  } catch (error) {
    console.log(error);

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
