import UserNodeRep from "../repositories/usernode.rep";

const UserNode = new UserNodeRep();

export const deleteUserNodebyId = async (id: number) => {
  const userNode = await UserNode.deleteByPk(id);
  return userNode;
};

// funcion para aumentar el contador del nodo del usuario
export const increaseUserNodeCount = async (
  user_id: number,
  node_id: number
) => {
  try {
    console.log(node_id, user_id);

    const userNode = await UserNode.getAll({
      where: {
        user_id: user_id,
        node_id: node_id,
        active: true,
      },
    });
    console.log(userNode);

    let count = userNode[0]?.count || 0;
    let active = userNode[0]?.active || false;
    if (count >= 1) {
      count = count - 1;
    }
    // si la cuenta actual esta en 0, se desactiva el nodo
    if (count <= 0) {
      active = false;
    }
    const updatedCount = {
      count: count,
      active: active,
    };
    const updatedUserNode = await UserNode.updateByPk(
      updatedCount,
      userNode[0].id
    );
    return updatedUserNode;
  } catch (error: any) {
    throw error;
  }
};

// funcion para verificar si el contador es mayor o igual a 3
export const verifyUserNodeCount = async (user_id: number, node_id: number) => {
  try {
    const userNode = await UserNode.getAll({
      where: {
        user_id: user_id,
        node_id: node_id,
      },
    });
    const count = userNode[0].count || 0;
    if (count >= 3) {
      return true;
    } else {
      return false;
    }
  } catch (error: any) {
    throw error;
  }
};
