import StudentResponseRep from "../repositories/studentResponse.rep";

const StudentResponse = new StudentResponseRep();
export const createStudentQuestionResponse = async (
  student_id: number,
  question_id: number,
  alternative_id: number,
  is_correct: number,
) => {
  try {
    await StudentResponse.create({
      student_id,
      question_id,
      alternative_id,
    });
    // Tenemos que enviar el isCorrect, question_id y student_id a mallén
  } catch (error) {
    throw error;
  }
};
