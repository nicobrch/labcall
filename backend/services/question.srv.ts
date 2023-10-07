import NodeRep from "../repositories/node.rep";
import QuestionRepository from "../repositories/question.rep";

const Question = new QuestionRepository();
const Node = new NodeRep();

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
