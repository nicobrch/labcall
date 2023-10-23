import sequelize from "sequelize";
import AlternativeRepository from "../repositories/alternative.rep";
import QuestionRepository from "../repositories/question.rep";
import StudentResponseRep from "../repositories/studentResponse.rep";

const Question = new QuestionRepository();
const Alternative = new AlternativeRepository();
const StudentResponse = new StudentResponseRep();

export const getResponseStatistics = async () => {
  try {
    const responseStatistic = await Question.getAll({
      attributes: [
        "id",
        "questionText",
        [
          sequelize.fn("SUM", sequelize.col("responses.alternativa.isCorrect")),
          "correctas",
        ],
        [
          sequelize.fn("COUNT", sequelize.col("responses.alternativa.id")),
          "total",
        ],
      ],
      include: [
        {
          model: StudentResponse.Model,
          as: "responses",
          attributes: [],
          include: [
            {
              model: Alternative.Model,
              as: "alternativa",
              attributes: [],
            },
          ],
        },
      ],
      group: ["question.id"],
      order: [[sequelize.literal('"correctas"'), "DESC"]],
    });
    return responseStatistic;
  } catch (error) {
    throw error;
  }
};
