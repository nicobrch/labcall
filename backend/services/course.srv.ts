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
