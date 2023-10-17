import AbilityRep from "../repositories/ability.rep";

const Ability = new AbilityRep();

export const getAllAbilities = async () => {
	try {
		const abilities = Ability.getAll();
		return abilities;
	} catch (error) {
		throw error;
	}
};
