import { Course } from "../sequelize";

const initial = [
  {
    name: "A-1",
    description:
      "Curso introductorio centrado en las habilidades básicas de aritmética y geometría.",
    startDate: new Date("2023-01-10"),
    endDate: new Date("2023-06-20"),
  },
  {
    name: "A-2",
    description:
      "Un seguimiento del curso A-1 que introduce conceptos más avanzados como álgebra y cálculo básico.",
    startDate: new Date("2023-03-15"),
    endDate: new Date("2023-09-10"),
  },
  {
    name: "B-1",
    description:
      "Este curso se centra en las habilidades avanzadas en matemáticas aplicadas, incluyendo estadísticas y probabilidad.",
    startDate: new Date("2023-05-05"),
    endDate: new Date("2023-11-30"),
  },
  {
    name: "B-2",
    description:
      "Un curso de nivel avanzado que abarca temas como cálculo diferencial e integral, destinado a estudiantes con una sólida base matemática.",
    startDate: new Date("2023-02-20"),
    endDate: new Date("2023-08-05"),
  },
];

export async function seedCourses() {
  for (let data of initial) {
    await Course.create(data);
  }
}
