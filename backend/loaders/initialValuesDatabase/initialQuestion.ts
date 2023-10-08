import { Alternative, Question } from "../sequelize";

const initialData = [
  {
    questionText:
      "Resuelve el siguiente problema considerando $\\pi = 3$. En la figura se tienen 4 circunferencias tangentes, todas del mismo tamaño y su radio mide 3 cm. ¿Cuál es el área de la parte ennegrecida? Considera que el lado del cuadrado mide 12 cm.",
    imageURL: ".\\img_labcat\\circunferencias.svg",
    node_id: 9,
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
  {
    questionText:
      "Se tiene un alambre de 18 cm de longitud el cual se dobla de manera que se forma un circulo. Se requiere ampliar el circulo de alambre de modo que su diámetro sea 2 veces más grande que el inicial, ¿Cuál seria el área final del circulo de alambre? Considere $\\pi$=3",
    imageURL: undefined,
    node_id: 9,
    figureCaption: undefined,
    alternatives: [
      {
        answerText: "$108cm^2$",
        isCorrect: true,
        feedback:
          "Como el perímetro del alambre es 18cm, se obtiene 6cm diámetro mediante la fórmula del perímetro del círculo, por consiguiente, multiplicando por 2 se encuentra el valor pedido del diámetro. Luego se calcula 108$cm^2$ de área elevando el diámetro al cuadrado, divido en 4, y finalmente se multiplica por $\\pi$.",
      },
      {
        answerText: "$27cm^2$",
        isCorrect: false,
        feedback:
          "Resulta de la confusión de aplicar el radio en la formula de Area del circulo con el diametro como variable, obteniendo 27$cm^2$",
      },
      {
        answerText: "$216cm^2$",
        isCorrect: false,
        feedback:
          "Al aplicar la función del Área con respecto al diámetro, este puede fraccionarse en 2 al no ser elevado al cuadrado , en efecto, se obtiene un área de 216$cm^2$",
      },
      {
        answerText: "$432cm^2$",
        isCorrect: false,
        feedback:
          "Resulta de la confusión de entender el diámetro como radio en el proceso de calcular el Área final del circulo, obteniendo 432$cm^2$",
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
      node_id: questionData.node_id,
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
