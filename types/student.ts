export type Student = {
	id: number;
	name: string;
	axis: Axis[];
};

export type Axis = {
	id: string;
	label: string;
	abilities: Ability[];
};

export type Ability = {
	id: string;
	label: string;
};
