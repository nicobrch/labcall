import axisRep from "../repositories/axis.rep";

const Axis = new axisRep();

export const getAllAxis = async () => {
	try {
		const axis = Axis.getAll();
		return axis;
	} catch (error) {
		throw error;
	}
};
