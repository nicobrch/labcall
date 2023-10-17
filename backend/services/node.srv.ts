import NodeRep from "../repositories/node.rep";
import UserRep from "../repositories/user.rep";

interface IReqNode {
  axis: string;
  ability: string;
}

const Node = new NodeRep();
const User = new UserRep();

// export const saveNodeToStudent = async (nodos: IReqNode, user: number[]) => {
//     try {
//         const
//     } catch (error) {
//         throw error
//     }

// }
