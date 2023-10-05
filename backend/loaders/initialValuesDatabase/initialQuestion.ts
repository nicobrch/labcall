import { Alternative, Question } from "../sequelize";

const initialData = [
  {
    questionText:
      "Resuelve el siguiente problema considerando $\\pi = 3$. En la figura se tienen 4 circunferencias tangentes, todas del mismo tamaño y su radio mide 3 cm. ¿Cuál es el área de la parte ennegrecida? Considera que el lado del cuadrado mide 12 cm.",
    imageURL: ".\\img_labcat\\circunferencias.svg",
    figureCaption: "Figura 1",
    alternatives: [
      {
        answerText: "$36 cm^2$",
        isCorrect: true,
        feedback:
          "Al utilizar la fórmula del área de la circunferencia $\\pi r^2$ y reemplazando los datos del enunciado, se obtiene 27 $cm^2$, luego este resultado se multiplica por 4, ya que son 4 circunferencias, resultando 108 $cm^2$. Finalmente, se debe restar al área del cuadrado, es decir, 144 $cm^2$, teniendo como resultado final 36 $cm^2$",
      },
      {
        answerText: "$72 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa corresponde a calcular el perímetro de las circunferencias, lo cual es incorrecto, ya que el problema pregunta por el área.",
      },
      {
        answerText: "$-24 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa es incorrecta, ya que resulta de calcular los perímetros de las circunferencias y del cuadrado para luego restarlas.",
      },
      {
        answerText: "$108 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa es incorrecta, ya que corresponde al área de las circunferencias y el problema pide el área de la zona ennegrecida.",
      },
    ],
  },
];

// Esta función añade las preguntas y alternativas a la base de datos
export async function seedQuestions() {
  for (let questionData of initialData) {
    let question = await Question.create({
      questionText: questionData.questionText,
      imageURL: questionData.imageURL,
      figureCaption: questionData.figureCaption,
    });

    //@ts-ignore
    for (let alternativeData of questionData.alternatives) {
      await Alternative.create({
        ...alternativeData,
        //@ts-ignore
        questionId: question.getDataValue("id"),
      });
    }
  }
}

// Llama a la función seedDatabase después de sincronizar
