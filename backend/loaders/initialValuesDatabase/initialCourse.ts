import { Course } from "../sequelize";

const initial = [
  {
    name: "A-1",
    description: "blabla",
    startDate: new Date("2023-01-10"),
    endDate: new Date("2023-06-20"),
  },
  {
    name: "A-2",
    description: "Bla bla",
    startDate: new Date("2023-03-15"),
    endDate: new Date("2023-09-10"),
  },
  {
    name: "B-1",
    description: "bla bla",
    startDate: new Date("2023-05-05"),
    endDate: new Date("2023-11-30"),
  },
  {
    name: "B-2",
    description: "Bla bla",
    startDate: new Date("2023-02-20"),
    endDate: new Date("2023-08-05"),
  },
];

export async function seedCourses() {
  for (let data of initial) {
    await Course.create(data);
  }
}
