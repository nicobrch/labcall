import axios from "axios";
import StudentResponseRep from "../repositories/studentResponse.rep";
import { increaseUserNodeCount } from "./usernode.serv";
import { QUESTION_SERVICE_PATH } from "@/config";
import { InternalServerError } from "../error/customErrors";

const StudentResponse = new StudentResponseRep();
export const createStudentQuestionResponse = async (
  student_id: number,
  question_id: number,
  node_id: number,
  alternative_id: number,
  is_correct: number
) => {
  try {
    await StudentResponse.create({
      student_id,
      question_id,
      alternative_id,
    });
    // se aumenta el contador del nodo que se esta respondiendo
    console.log(is_correct, student_id, node_id);

    await increaseUserNodeCount(student_id, node_id);
    // Tenemos que enviar el isCorrect, question_id y student_id a mallén
    const api_response = await axios
      .get(
        `${QUESTION_SERVICE_PATH}/api/registrar_respuesta/${question_id}/${node_id}/${student_id}/${alternative_id}/${
          is_correct ? 1 : 0
        }`
      )
      .catch((error) => {
        throw new InternalServerError("Error al llamar a la api: " + error);
        // console.log(error);
      });

    // console.log(api_response);
  } catch (error) {
    console.log(error);

    throw error;
  }
};
