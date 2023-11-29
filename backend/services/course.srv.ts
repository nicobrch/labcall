import { BadRequestError } from "../error/customErrors";
import CourseRep from "../repositories/course.rep";
import UserRep from "../repositories/user.rep";

const Course = new CourseRep();
const User = new UserRep();
export const getAllCourse = async () => {
  try {
    const courses = await Course.getAll({
      include: {
        model: User.Model,
        as: "usuarios",
        required: false,
      },
    });
    return courses;
  } catch (error) {
    throw error;
  }
};

export const getAllCourseStudents = async () => {
  const courses = await Course.getAll({
    include: {
      model: User.Model,
      as: "usuarios",
      required: false,
      where: {
        type: "student",
      },
    },
  });
  return courses;
};

/**
 * Crea un nuevo curso en la base de datos.
 * @param {string} name - El nombre del curso.
 * @param {string} description - La descripcion del curso.
 * @param {string} startDate - La fecha de inicio del curso.
 * @param {string} endDate - La fecha de finalizacion del curso.
 * @throws {Error} En caso de existir errores al crear el curso.
 */
export const createCourse = async (
  name: string,
  description: string,
  startDate: Date,
  endDate: Date
) => {
  try {
    const course = await Course.findOne({
      name,
    });
    if (course) {
      throw new BadRequestError("El nombre del curso ingresado ya existe.");
    }
    await Course.create({
      name,
      description,
      startDate,
      endDate,
    });
    // Tenemos que enviar el name y description a db (no se si a Mallen tambien)
  } catch (error) {
    throw error;
  }
};

export const getStudents = async (course_id: number) => {
  try {
    const courses = await Course.getAll({
      include: {
        model: User.Model,
        as: "usuarios",
        required: false,
      },
    });
    const course = courses.find((course) => course.id === course_id)?.usuarios;
    return course;
  } catch (error) {
    throw error;
  }
};
