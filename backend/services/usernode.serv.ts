import UserNodeRep from "../repositories/usernode.rep";

const UserNode = new UserNodeRep();

export const deleteUserNodebyId = async (id: number) => {
	const userNode = await UserNode.deleteByPk(id);
	return userNode;
};
