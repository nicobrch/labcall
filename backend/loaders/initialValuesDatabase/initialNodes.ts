import { Node } from "../sequelize";

const initialData = [
  {
    id: 1,
    axis: "Números y operaciones",
    axis_id: 1,
    ability_id: 1,
    ability: "Resolver problemas",
    description:
      "Alumnos resuelven problemas relacionados con cálculos mentales y escritos, operaciones aritméticas y representaciones numéricas, empleando diversas estrategias.",
    active: true,
  },
  {
    id: 2,
    axis_id: 1,
    ability_id: 2,
    axis: "Números y operaciones",
    ability: "Modelar",
    description:
      "Estudiantes crean modelos matemáticos simplificados para representar conceptos y procedimientos en aritmética.",
    active: true,
  },
  {
    id: 3,
    axis_id: 1,
    ability_id: 3,
    axis: "Números y operaciones",
    ability: "Representar",
    description:
      "Utilizan representaciones visuales y simbólicas para expresar conceptos numéricos y operaciones.",
    active: true,
  },
  {
    id: 4,
    axis: "Números y operaciones",
    axis_id: 1,
    ability_id: 4,
    ability: "Argumentar y comunicar",
    description:
      "Los alumnos argumentan la validez de diferentes métodos aritméticos y comunican sus resultados de manera eficaz.",
    active: true,
  },
  {
    id: 5,
    axis_id: 2,
    ability_id: 1,
    axis: "Patrones y Álgebra",
    ability: "Resolver problemas",
    description:
      "Resuelven problemas que implican secuencias y relaciones, identificando patrones y aplicando estrategias algebraicas.",
    active: true,
  },
  {
    id: 6,
    axis_id: 2,
    ability_id: 2,
    axis: "Patrones y Álgebra",
    ability: "Modelar",
    description:
      "Modelan relaciones y funciones utilizando expresiones algebraicas.",
    active: true,
  },
  {
    id: 7,
    axis_id: 2,
    ability_id: 3,
    axis: "Patrones y Álgebra",
    ability: "Representar",
    description:
      "Representan algebraicamente patrones y relaciones mediante símbolos y gráficos.",
    active: true,
  },
  {
    id: 8,
    axis_id: 2,
    ability_id: 4,
    axis: "Patrones y Álgebra",
    ability: "Argumentar y comunicar",
    description:
      "Argumentan sobre la validez de sus modelos algebraicos y comunican sus descubrimientos.",
    active: true,
  },
  {
    id: 9,
    axis_id: 3,
    ability_id: 1,
    axis: "Geometría",
    ability: "Resolver problemas",
    description:
      "Alumnos abordan problemas relacionados con propiedades y relaciones geométricas, aplicando estrategias espaciales.",
    active: true,
  },
  {
    id: 10,
    axis_id: 3,
    ability_id: 2,
    axis: "Geometría",
    ability: "Modelar",
    description:
      "Modelan propiedades y relaciones espaciales, traduciendo la realidad a conceptos geométricos.",
    active: true,
  },
  {
    id: 11,
    axis_id: 3,
    ability_id: 3,
    axis: "Geometría",
    ability: "Representar",
    description:
      "Utilizan dibujos, esquemas y símbolos para representar conceptos geométricos.",
    active: true,
  },
  {
    id: 12,
    axis_id: 3,
    ability_id: 4,
    axis: "Geometría",
    ability: "Argumentar y comunicar",
    description:
      "Argumentan sobre la validez de sus soluciones geométricas y comunican sus ideas eficazmente.",
    active: true,
  },
  {
    id: 13,
    axis_id: 4,
    ability_id: 1,
    axis: "Medición",
    ability: "Resolver problemas",
    description:
      "Resuelven problemas que implican dimensiones y unidades de medida, aplicando estrategias de comparación y cuantificación.",
    active: true,
  },
  {
    id: 14,
    axis_id: 4,
    ability_id: 2,
    axis: "Medición",
    ability: "Modelar",
    description:
      "Desarrollan modelos para entender las unidades de medida y sus aplicaciones en la vida real.",
    active: true,
  },
  {
    id: 15,
    axis_id: 4,
    ability_id: 3,
    axis: "Medición",
    ability: "Representar",
    description:
      "Representan medidas y dimensiones mediante gráficos, tablas y símbolos matemáticos.",
    active: true,
  },
  {
    id: 16,
    axis_id: 4,
    ability_id: 4,
    axis: "Medición",
    ability: "Argumentar y comunicar",
    description:
      "Argumentan la selección de unidades de medida y métodos de comparación, y comunican sus hallazgos.",
    active: true,
  },
  {
    id: 17,
    axis_id: 5,
    ability_id: 1,
    axis: "Datos y probabilidades",
    ability: "Resolver problemas",
    description:
      "Alumnos resuelven problemas relacionados con la recolección y análisis de datos, y conceptos básicos de probabilidad.",
    active: true,
  },
  {
    id: 18,
    axis_id: 5,
    ability_id: 2,
    axis: "Datos y probabilidades",
    ability: "Modelar",
    description:
      "Modelan situaciones de probabilidad y estadísticas usando diversas representaciones matemáticas.",
    active: true,
  },
  {
    id: 19,
    axis_id: 5,
    ability_id: 3,
    axis: "Datos y probabilidades",
    ability: "Representar",
    description:
      "Utilizan gráficos, tablas y medidas estadísticas para representar datos y probabilidades.",
    active: true,
  },
  {
    id: 20,
    axis_id: 5,
    ability_id: 4,
    axis: "Datos y probabilidades",
    ability: "Argumentar y comunicar",
    description:
      "Argumentan sobre sus métodos de análisis de datos y de cálculo de probabilidades, y comunican sus resultados.",
    active: true,
  },
];

export async function seedNodes() {
  for (let nodeData of initialData) {
    await Node.create({
      id: nodeData.id,
      axis: nodeData.axis,
      ability: nodeData.ability,
      description: nodeData.description,
      ability_id: nodeData.ability_id,
      axis_id: nodeData.axis_id,
    });
  }
}
