import StudentResponseRep from "../repositories/studentResponse.rep";
import { increaseUserNodeCount } from "./usernode.serv";

const StudentResponse = new StudentResponseRep();
export const createStudentQuestionResponse = async (
  student_id: number,
  question_id: number,
  node_id: number,
  alternative_id: number,
  is_correct: number,
) => {
  try {
    await StudentResponse.create({
      student_id,
      question_id,
      alternative_id,
    });
    // se aumenta el contador del nodo que se esta respondiendo
    await increaseUserNodeCount(student_id, node_id);
    // Tenemos que enviar el isCorrect, question_id y student_id a mallén
  } catch (error) {
    throw error;
  }
};
