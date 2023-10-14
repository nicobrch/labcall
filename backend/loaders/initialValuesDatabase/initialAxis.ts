import { Axis } from "../sequelize";

const initialData = [
  {
    id: 1,
    name: "Números y operaciones",
    description: undefined,
  },
  {
    id: 2,
    name: "Patrones y Álgebra",
    description: undefined,
  },
  {
    id: 3,
    name: "Geometría",
    description: undefined,
  },
  {
    id: 4,
    name: "Medición",
    description: undefined,
  },
  {
    id: 5,
    name: "Datos y probabilidades",
    description: undefined,
  },
];

export async function seedAxis() {
  for (let nodeData of initialData) {
    await Axis.create({
      id: nodeData.id,
      name: nodeData.name,
      description: nodeData.description,
    });
  }
}
