import sequelize from "sequelize";
import AlternativeRepository from "../repositories/alternative.rep";
import QuestionRepository from "../repositories/question.rep";
import StudentResponseRep from "../repositories/studentResponse.rep";
import UserRep from "../repositories/user.rep";
import CourseRep from "../repositories/course.rep";

const Question = new QuestionRepository();
const Alternative = new AlternativeRepository();
const StudentResponse = new StudentResponseRep();
const User = new UserRep();
const Course = new CourseRep();

export const getResponseStatistics = async (course_id?: string) => {
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
            {
              model: User.Model,
              as: "user",
              attributes: [],
              include: [
                {
                  model: Course.Model,
                  as: "curso",
                  attributes: [],
                  where: {
                    id: course_id,
                  },
                },
              ],
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
