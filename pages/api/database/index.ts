import { seedNodes } from "@/backend/loaders/initialValuesDatabase/initialNodes";
import { seedQuestions } from "@/backend/loaders/initialValuesDatabase/initialQuestion";
import sequelize, {
  Alternative,
  Question,
  User,
  Node,
  UserNode,
} from "@/backend/loaders/sequelize";
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

    await Question.sync({ force: true }).then(() => {});

    await Node.sync({ force: true }).then(async () => {
      await seedNodes();
      await seedQuestions();
    });

    await UserNode.sync({ force: true });

    await sequelize.query("SET foreign_key_checks = 1");

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
