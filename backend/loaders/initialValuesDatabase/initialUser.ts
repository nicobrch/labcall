import { User } from "../sequelize";

const initial = [
  {
    rut: "111111111",
    firstname: "John",
    lastname1: "Doe",
    lastname2: "Smith",
    email: "john.doe@example.com",
    password: "1234",
    type: "teacher",
    active: true,
    course_id: 1,
  },
  {
    rut: "222222222",
    firstname: "Jane",
    lastname1: "Doe",
    lastname2: "Williams",
    email: "jane.doe@example.com",
    password: "1234",
    type: "student",
    active: true,
    course_id: 1,
  },
  {
    rut: "333333333",
    firstname: "Carlos",
    lastname1: "Gonzalez",
    lastname2: "Ramirez",
    email: "carlos.gonzalez@example.com",
    password: "1234",
    type: "student",
    active: false,
    course_id: 2,
  },
  {
    rut: "444444444",
    firstname: "Maria",
    lastname1: "Martinez",
    lastname2: "Lopez",
    email: "maria.martinez@example.com",
    password: "1234",
    type: "teacher",
    active: true,
    course_id: 2,
  },
];

export async function seedUsers() {
  for (let data of initial) {
    await User.create(data);
  }
}
