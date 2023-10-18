import { Ability, Node } from "../sequelize";

const initialData = [
  {
    id: 1,
    name: "Resolver problemas",
    description: undefined,
  },
  {
    id: 2,
    name: "Modelar",
    description: undefined,
  },
  {
    id: 3,
    name: "Representar",
    description: undefined,
  },
  {
    id: 4,
    name: "Argumentar y comunicar",
    description: undefined,
  },
];

export async function seedAbilities() {
  for (let nodeData of initialData) {
    await Ability.create({
      id: nodeData.id,
      name: nodeData.name,
      description: nodeData.description,
    });
  }
}
