import { getStudentQuestion } from "@/backend/services/question.srv";
import { createStudentQuestionResponse } from "@/backend/services/studentResponse.srv";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method === "POST") {
      const { body } = req;
      const {
        student_id,
        question_id,
        node_id,
        alternative_id,
        is_correct,
        save_response,
      } = body;
      console.log(body);

      if (save_response === 1) {
        await createStudentQuestionResponse(
          student_id,
          question_id,
          node_id,
          alternative_id,
          is_correct
        );
      }
      res.status(200).json({
        message:
          save_response === 1
            ? "Respuesta almacenada exitosamente"
            : "Pregunta obtenida exitosamente",
      });
      // const question = await getStudentQuestion(student_id);
      // res.status(200).json({
      //   message:
      //     save_response === 1
      //       ? "Respuesta almacenada exitosamente"
      //       : "Pregunta obtenida exitosamente",
      //   next_question: question,
      // });
    }
  } catch (error: any) {
    res.status(500).json({
      message: "Error al obtener los nodos con sus preguntas correspondientes.",
      error: error.message,
    });
  }
}
