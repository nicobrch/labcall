import { Axis } from "../sequelize";

const initialData = [
	{
		id: 1,
		name: "Números",
		description: undefined
	},
	{
		id: 2,
		name: "Álgebra y Funciones",
		description: undefined
	},
	{
		id: 3,
		name: "Geometría",
		description: undefined
	},
	{
		id: 4,
		name: "Probabilidad y Estadística",
		description: undefined
	}
];

export async function seedAxis() {
	for (let nodeData of initialData) {
		await Axis.create({
			id: nodeData.id,
			name: nodeData.name,
			description: nodeData.description
		});
	}
}
