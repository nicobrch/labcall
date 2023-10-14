import AbilityRep from "../repositories/ability.rep";
import AlternativeRepository from "../repositories/alternative.rep";
import AxisRep from "../repositories/axis.rep";
import NodeRep from "../repositories/node.rep";
import QuestionRepository from "../repositories/question.rep";
import UserRep from "../repositories/user.rep";

interface IReqNode {
  axis: string;
  ability: string;
}

const Node = new NodeRep();
const Axis = new AxisRep();
const Ability = new AbilityRep();
const Question = new QuestionRepository();
const Alternative = new AlternativeRepository();
const User = new UserRep();

export const getAllNodes = async () => {
  return await Node.getAll({
    include: [
      {
        model: Axis.Model,
        as: "axis_data",
      },
      {
        model: Ability.Model,
        as: "ability_data",
      },
      {
        model: Question.Model,
        as: "questions",
        include: [
          {
            model: Alternative.Model,
            as: "alternatives",
          },
        ],
      },
    ],
  });
};
export const getAbilityAxisNode = async () => {
  return await Node.getAll({
    include: [
      {
        model: Axis.Model,
        as: "axis_data",
      },
      {
        model: Ability.Model,
        as: "ability_data",
      },
      {
        model: Question.Model,
        as: "questions",
        include: [
          {
            model: Alternative.Model,
            as: "alternatives",
          },
        ],
      },
    ],
  });
};

// export const saveNodeToStudent = async (nodos: IReqNode, user: number[]) => {
//     try {
//         const
//     } catch (error) {
//         throw error
//     }

// }
