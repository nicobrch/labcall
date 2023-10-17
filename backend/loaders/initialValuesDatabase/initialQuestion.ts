import { Alternative, Question } from "../sequelize";

const initialData = [
  {
    questionText:
      "Camila vive en el punto verde de la ciudad y su amiga Fernanda en el punto azul. A partir de esto, ¿cuál de las siguientes opciones es correcta respecto a la imagen?",
    imageURL: ".img_labcatciudad.svg",
    node_id: 10,
    figureCaption: "Figura 1",
    alternatives: [
      {
        answerText: "Camila y Fernanda viven a la misma altura",
        isCorrect: true,
        feedback:
          "El valor de la coordenada x es -1 para ambas, por lo tanto, sus casas se encuentran a la misma altura",
      },
      {
        answerText: "Camila vive a la misma altura del estadio (punto rojo)",
        isCorrect: false,
        feedback:
          "Camila vive más abajo, la casa de Fernanda se encuentra a la misma altura, ya que el valor de sus coordenadas y es la misma",
      },
      {
        answerText:
          "Fernanda vive más cerca del puerto (punto morado) que Camila",
        isCorrect: false,
        feedback:
          "Camila vive más cerca del puerto, ya que hay que moverse menos espacios para llegar",
      },
      {
        answerText:
          "Camila necesita mover en 4 posiciones hacia arriba para llegar a la casa de Fernanda",
        isCorrect: false,
        feedback:
          "Camila necesita moverse solo 3 posiciones para llegar del -1 al 2.",
      },
    ],
  },
  {
    questionText:
      "Camilo pidió a Sofía realizar los siguientes pasos.\n<ul>\n<li>Traza una circunferencia y dos diámetros perpendiculares entre sí.</li>\n<li>Traza la bisectriz de cada uno de los ángulos que forman los diámetros perpendiculares.</li>\n<li>Marca los puntos de intersección de la bisectriz con la circunferencia.</li>\n<li>Une los puntos marcados.</li>\n</ul>\n¿Qué figura obtuvo Sofía?",
    imageURL: "img/ecuacion1.svg",
    node_id: 9,
    figureCaption: "Imagen 1",
    alternatives: [
      {
        answerText: "Cuadrado",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Rombo",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Rectángulo",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Triángulo",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
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
          "Al utilizar la fórmula del área de la circunferencia $\\pi r^2$ y reemplazando los datos del enunciado, se obtiene 27 $cm^2$, luego este resultado se multiplica por 4, ya que son 4 circunferencias, resultando 108 $cm^2$. Finalmente, se debe restar al área del cuadrado, es decir, 144 $cm^2$, teniendo como resultado final 36 $cm^2$.",
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
      "A continuación, se presenta una imagen donde se indican 3 ecuaciones. A partir de esto, escoge la alternativa que exprese en lenguaje algebraico lo descrito en la imagen. Para esto, utiliza las uvas como u, sandías como s y plátanos como p.",
    node_id: 14,
    figureCaption: "Figura 1",
    imageURL: "C:\\Users\\paula\\Desktop\\imágenes_labcat\\frutas.svg",
    alternatives: [
      {
        answerText: "$u+s+u+u=950$\\$s+s+u=650$\\$u+p+s+u=800$",
        isCorrect: true,
        feedback:
          "Esta respuesta es correcta, ya que representa a las 3 ecuaciones con sus incógnitas respectivas.",
      },
      {
        answerText: "$u+s=950$\\$s+u=650$\\$u+p+s=800$\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no considera la cantidad correcta de veces que aparecen las incógnitas.",
      },
      {
        answerText:
          "$u \\cdot s \\cdot u \\cdot u=950$\\$s \\cdot s \\cdot u=650$\\$u \\cdot p \\cdot s \\cdot u=800$\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que plantea las incógnitas correctamente, pero la operación debe ser suma en vez de multiplicación.",
      },
      {
        answerText: "$6u+4s+p=2.400$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a sumar las 3 ecuaciones, por lo que no describe la situación de la imagen.",
      },
    ],
  },
  {
    questionText:
      "A continuación, se presenta una imagen donde se indican 3 ecuaciones. A partir de esto, escoge la alternativa que exprese en lenguaje algebraico lo descrito en la imagen. Para esto, utiliza las uvas como u, sandías como s y plátanos como p.",
    node_id: 14,
    figureCaption: "Figura 1",
    imageURL: "C:\\Users\\paula\\Desktop\\imágenes_labcat\\frutas.svg",
    alternatives: [
      {
        answerText: "$u+s+u+u=950$\\$s+s+u=650$\\$u+p+s+u=800$",
        isCorrect: true,
        feedback:
          "Esta respuesta es correcta, ya que representa a las 3 ecuaciones con sus incógnitas respectivas.",
      },
      {
        answerText: "$u+s=950$\\$s+u=650$\\$u+p+s=800$\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no considera la cantidad correcta de veces que aparecen las incógnitas.",
      },
      {
        answerText:
          "$u \\cdot s \\cdot u \\cdot u=950$\\$s \\cdot s \\cdot u=650$\\$u \\cdot p \\cdot s \\cdot u=800$\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que plantea las incógnitas correctamente, pero la operación debe ser suma en vez de multiplicación.",
      },
      {
        answerText: "$6u+4s+p=2.400$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a sumar las 3 ecuaciones, por lo que no describe la situación de la imagen.",
      },
    ],
  },
  {
    questionText:
      "En el 7°A están estudiando los monumentos de Chile y su profesora les muestra una imagen de la 'Mano del Desierto', la cual mide 11m y las personas miden 1,6m. En base a la imagen, ¿qué expresión permite calcular la altura de la mano medida en personas?",
    node_id: 13,
    figureCaption: "Figura 1",
    imageURL: "C:\\Users\\paula\\Desktop\\imágenes_labcat\\mano.svg",
    alternatives: [
      {
        answerText: "$\\frac{persona}{1,6}=\\frac{x}{11}$",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que mantiene las relaciones entre los datos respectivos a las personas y a la mano.",
      },
      {
        answerText: "$\\frac{x}{persona}=\\frac{1,6}{11}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano.",
      },
      {
        answerText: "$\\frac{persona}{11}=\\frac{x}{1,6}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano.",
      },
      {
        answerText: "$\\frac{11}{persona}=\\frac{x}{1,6}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano.",
      },
    ],
  },
  {
    questionText:
      "Nico y Dani están discutiendo sobre la siguiente afirmación 'mientras más alta es una persona, más masa tiene'. Nico cree que la afirmación es verdadera, mientras que Dani cree que es incorrecta. A partir de esto, ¿cuál de las siguientes alternativas es correcta?",
    node_id: 12,
    figureCaption: "",
    imageURL: "",
    alternatives: [
      {
        answerText:
          "Dani está en lo correcto, porque la masa no depende de la estatura, es decir, puede haber una persona de menor estatura con la misma masa o incluso mayor.",
        isCorrect: true,
        feedback:
          "Esta afirmación es correcta, ya que no existe una proporción entre la estatura y la masa.",
      },
      {
        answerText:
          "Nico está en lo correcto, ya que la masa de una persona es directamente proporcional a su estatura",
        isCorrect: false,
        feedback:
          "Esta afirmación no es correcta, ya que puede haber una persona más baja o más alta con la misma masa, por lo que no es proporcional.",
      },
      {
        answerText:
          "Dani está en lo correcto, porque la relación entre la masa y la estatura es inversamente proporcional",
        isCorrect: false,
        feedback:
          "Esta es incorrecta, ya que si fuera una relación inversa, significaría que mientras más baja es la persona mayor masa tiene, lo cual no es verdad.",
      },
      {
        answerText:
          "Nico está en lo correcto, ya que no puede haber una persona de una estatura diferente y con la misma masa",
        isCorrect: false,
        feedback:
          "Esta afirmación no es correcta, ya que no hay una relación entre peso y estatura.",
      },
    ],
  },
  {
    questionText:
      "A continuación, se muestra el desarrollo de un problema realizado por Martín, el cual contiene un error. A partir de esto, ¿cuál de las siguientes alternativas es correcta?\\ 'La siguiente situación corresponde a una relación inversa: En la construcción de un edificio si se trabaja con 200 obreros, la obra tiene fecha para 12 meses, ¿cuántos meses demorará la obra si solo se dispone de 50 obreros?'\\ Paso 1: plantear la ecuación $\\frac{200}{12}=\\frac{50}{x}$\\ Paso 2: calcular la incógnita $x=\\frac{50 \\cdot 12}{200}$\\ Paso 3: concluir $x=3$",
    node_id: 11,
    figureCaption: "",
    imageURL: "",
    alternatives: [
      {
        answerText:
          "El error está en el paso 2, ya que calcula la relación como si fuera directa, pero en realidad es inversa",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que en las relaciones inversas, primero se calcula la constante de proporción, es decir, $\\frac{200}{12}$ y ese resultado se multiplica por el nuevo valor, esto es, $60 \\cdot 15$, lo cual entrega como resultado 48.",
      },
      {
        answerText:
          "El error está en el paso 1, ya que la ecuación está mal planteada",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que los datos están en las proporciones indicadas por el enunciado.",
      },
      {
        answerText:
          "El error está en el paso 3, ya que 3 no es el resultado del paso anterior",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que si bien 3 no es el resultado correcto del problema, sí corresponde al resultado del paso 2.",
      },
      {
        answerText: "No hay ningún error en el procedimiento",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que en el paso 2 hay un error y además el enunciado dice que sí existe un error.",
      },
    ],
  },
  {
    questionText:
      "Para un concierto se dispone de 3 tipos de entradas: 'Cancha general' a 4.500, 'Cancha Vip' a 5.500 y 'Platea' a 3.500. ¿Qué expresión algebraica permite determinar los ingresos totales por la venta de las entradas?",
    node_id: 10,
    figureCaption: "",
    imageURL: "",
    alternatives: [
      {
        answerText: "$4.500 \\cdot g+5.500 \\cdot v+3.500 \\cdot p=total$",
        isCorrect: true,
        feedback:
          "Esta alternativa es la correcta, ya que indica el precio de cada entrada y diferencia con letras distintas cada ubicación en el concierto.",
      },
      {
        answerText: "$4.500 \\cdot c+5.500 \\cdot c+3.500 \\cdot p=total$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no diferencia entre la ubicación de cancha general y vip, es decir, usa la misma letra para ambas.",
      },
      {
        answerText: "$g+v+p=total$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no indica el precio de cada ubicación, por lo que esta ecuación solo entregaría la cantidad de tickets vendidos.",
      },
      {
        answerText: "$c+c+p=total$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no diferencia entre la ubicación de cancha general y vip, es decir, usa la misma letra para ambas y además no indica el precio de cada sector.",
      },
    ],
  },

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
