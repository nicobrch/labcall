import { Node } from "../sequelize";

const initialData = [
	{
		id: 1,
		axis: "Números",
		axis_id: 1,
		ability_id: 1,
		ability: "Resolver Problemas",
		description: "Alumnos resuelven problemas relacionados con cálculos mentales y escritos, operaciones aritméticas y representaciones numéricas, empleando diversas estrategias.",
		active: true
	},
	{
		id: 2,
		axis_id: 1,
		ability_id: 2,
		axis: "Números",
		ability: "Modelar",
		description: "Estudiantes crean modelos matemáticos simplificados para representar conceptos y procedimientos en aritmética.",
		active: true
	},
	{
		id: 3,
		axis_id: 1,
		ability_id: 3,
		axis: "Números",
		ability: "Representar",
		description: "Utilizan representaciones visuales y simbólicas para expresar conceptos numéricos y operaciones.",
		active: true
	},
	{
		id: 4,
		axis: "Números",
		axis_id: 1,
		ability_id: 4,
		ability: "Argumentar y Comunicar",
		description: "Los alumnos argumentan la validez de diferentes métodos aritméticos y comunican sus resultados de manera eficaz.",
		active: true
	},
	{
		id: 5,
		axis_id: 2,
		ability_id: 1,
		axis: "Álgebra y Funciones",
		ability: "Resolver Problemas",
		description: "Resuelven problemas que implican secuencias y relaciones, identificando patrones y aplicando estrategias algebraicas.",
		active: true
	},
	{
		id: 6,
		axis_id: 2,
		ability_id: 2,
		axis: "Álgebra y Funciones",
		ability: "Modelar",
		description: "Modelan relaciones y funciones utilizando expresiones algebraicas.",
		active: true
	},
	{
		id: 7,
		axis_id: 2,
		ability_id: 3,
		axis: "Álgebra y Funciones",
		ability: "Representar",
		description: "Representan algebraicamente patrones y relaciones mediante símbolos y gráficos.",
		active: true
	},
	{
		id: 8,
		axis_id: 2,
		ability_id: 4,
		axis: "Álgebra y Funciones",
		ability: "Argumentar y Comunicar",
		description: "Argumentan sobre la validez de sus modelos algebraicos y comunican sus descubrimientos.",
		active: true
	},
	{
		id: 9,
		axis_id: 3,
		ability_id: 1,
		axis: "Geometría",
		ability: "Resolver Problemas",
		description: "Alumnos abordan problemas relacionados con propiedades y relaciones geométricas, aplicando estrategias espaciales.",
		active: true
	},
	{
		id: 10,
		axis_id: 3,
		ability_id: 2,
		axis: "Geometría",
		ability: "Modelar",
		description: "Modelan propiedades y relaciones espaciales, traduciendo la realidad a conceptos geométricos.",
		active: true
	},
	{
		id: 11,
		axis_id: 3,
		ability_id: 3,
		axis: "Geometría",
		ability: "Representar",
		description: "Utilizan dibujos, esquemas y símbolos para representar conceptos geométricos.",
		active: true
	},
	{
		id: 12,
		axis_id: 3,
		ability_id: 4,
		axis: "Geometría",
		ability: "Argumentar y Comunicar",
		description: "Argumentan sobre la validez de sus soluciones geométricas y comunican sus ideas eficazmente.",
		active: true
	},
	{
		id: 13,
		axis_id: 5,
		ability_id: 1,
		axis: "Probabilidad y Estadística",
		ability: "Resolver Problemas",
		description: "Alumnos resuelven problemas relacionados con la recolección y análisis de datos, y conceptos básicos de probabilidad.",
		active: true
	},
	{
		id: 14,
		axis_id: 5,
		ability_id: 2,
		axis: "Probabilidad y Estadística",
		ability: "Modelar",
		description: "Modelan situaciones de probabilidad y estadística usando diversas representaciones matemáticas.",
		active: true
	},
	{
		id: 15,
		axis_id: 5,
		ability_id: 3,
		axis: "Probabilidad y Estadística",
		ability: "Representar",
		description: "Utilizan gráficos, tablas y medidas estadística para representar Probabilidad y Estadística.",
		active: true
	},
	{
		id: 16,
		axis_id: 5,
		ability_id: 4,
		axis: "Probabilidad y Estadística",
		ability: "Argumentar y Comunicar",
		description: "Argumentan sobre sus métodos de análisis de datos y de cálculo de probabilidades, y comunican sus resultados.",
		active: true
	}
];

export async function seedNodes() {
	for (let nodeData of initialData) {
		await Node.create({
			id: nodeData.id,
			axis: nodeData.axis,
			ability: nodeData.ability,
			description: nodeData.description,
			ability_id: nodeData.ability_id,
			axis_id: nodeData.axis_id
		});
	}
}
