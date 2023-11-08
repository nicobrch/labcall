import { seedAbilities } from "@/backend/loaders/initialValuesDatabase/initialAbilities";
import { seedAxis } from "@/backend/loaders/initialValuesDatabase/initialAxis";
import { seedCourses } from "@/backend/loaders/initialValuesDatabase/initialCourse";
import { seedNodes } from "@/backend/loaders/initialValuesDatabase/initialNodes";
import { seedQuestions } from "@/backend/loaders/initialValuesDatabase/initialQuestion";
import { seedUsers } from "@/backend/loaders/initialValuesDatabase/initialUser";
import sequelize, {
  Alternative,
  Question,
  User,
  Node,
  UserNode,
  StudentResponse,
  Course,
  Ability,
  Axis,
} from "@/backend/loaders/sequelize";
import { QUESTION_SERVICE_PATH } from "@/config";
import axios from "axios";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    await sequelize.authenticate();

    await sequelize.query("SET foreign_key_checks = 0");

    await User.sync({ force: true });

    // Primero sincroniza Alternative ya que depende de Question
    await Alternative.sync({ force: true });

    await StudentResponse.sync({ force: true });

    await Course.sync({ force: true }).then(async () => {
      await seedCourses();
    });

    await Question.sync({ force: true }).then(() => {});
    await Ability.sync({ force: true }).then(() => {});
    await Axis.sync({ force: true }).then(() => {});

    await Node.sync({ force: true }).then(async () => {
      await seedAbilities();
      await seedAxis();
      await seedNodes();
      await seedQuestions();
    });

    await UserNode.sync({ force: true }).then(async () => {
      await seedUsers();
    });

    await sequelize.query("SET foreign_key_checks = 1");

    const questions = await Question.findAll();
    const formated_questions = questions.map((question) => {
      const { dataValues } = question;
      const { dificulty, id, node_id } = dataValues;
      let dificulty_map;
      switch (dificulty) {
        case "alta":
          dificulty_map = {
            num: 3,
            rating: 2200,
          };
          break;
        case "media":
          dificulty_map = {
            num: 2,
            rating: 1800,
          };
          break;
        case "baja":
          dificulty_map = {
            num: 1,
            rating: 800,
          };
          break;

        default:
          console.log("Dificultad sin identificar");
          break;
      }
      return {
        id,
        Nodo: node_id,
        dificulty: dificulty_map?.num,
        RD: 350,
        rating: dificulty_map?.rating,
      };
    });
    console.log(formated_questions);

    await axios.post(
      `${QUESTION_SERVICE_PATH}/api/guardar_preguntas/`,
      formated_questions
    );

    res
      .status(200)
      .json({ message: "Base de datos y tablas creadas con éxito." });
  } catch (error: any) {
    res.status(500).json({
      message:
        "No se pudo conectar a la base de datos. Verifique si ha ejecutado el docker-compose que está en la raíz del proyecto.",
      error: error.message,
    });
  }
}
