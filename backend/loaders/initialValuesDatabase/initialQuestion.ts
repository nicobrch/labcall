import { BASE_PATH } from "@/config";
import { Alternative, Question } from "../sequelize";

const initialData = [
  {
    questionText:
      "\nUn ascensor se encontraba en el piso 0 de un edificio y se desplaz\u00f3 de la siguiente manera: primero subi\u00f3 3 pisos, luego baj\u00f3 7 pisos y finalmente subi\u00f3 4 pisos. \u00bfEn qu\u00e9 pisos se detuvo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 1,
    dificulty: "media",
    alternatives: [
      {
        answerText: "piso 3, piso -4 y piso 0.",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que subir se asocia con el signo positivo y bajar con el signo negativo, por lo que el ascensor realiza estos movimiento $0+3=3$, $3-7=-4$ y $-4+4=0$.",
      },
      {
        answerText: "piso 3, piso -4 y piso 4.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que el \u00faltimo al que llega es el 0, debido a que $-4+4=0$",
      },
      {
        answerText: "piso 4, piso 7 y piso 11.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que el primer piso al que llega es $0+3=3$, luego $3-7=-4$ y finalmente $-4+4=0$",
      },
      {
        answerText: "piso 4, piso -7 y piso 11.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que el primer piso al que llega es $0+3=3$, luego $3-7=-4$ y finalmente $-4+4=0$",
      },
    ],
  },
  {
    questionText:
      '\nA continuaci\u00f3n, se presenta una situaci\u00f3n: "Si debo $\\$100.000$ y pago $\\$80.000$, \u00bfcu\u00e1nto dinero quedo debiendo?" A partir de esto, \u00bfcu\u00e1l de las alternativas explica mejor el procedimiento a realizar para encontrar la respuesta?\n',
    imageURL: "null",
    figureCaption: "null",
    node_id: 4,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Se debe hacer $80.000-100.000$, ya que se est\u00e1 abonando a la deuda, la cual se relaciona con el signo negativo.",
        isCorrect: true,
        feedback:
          "Esta respuesta es correcta, ya que la deuda (negativo) es de $100.000$ y al pagar parte de la deuda esta debe disminuir, por lo que necesariamente $80.000$ tiene signo positivo.",
      },
      {
        answerText:
          "Se debe sumar $100.000$ con $80.000$, ya que la palabra deber se relaciona con sumar los montos.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, ya que la deuda (negativo) es de $100.000$ y al pagar parte de la deuda esta debe disminuir, por lo que necesariamente $80.000$ tiene signo positivo.",
      },
      {
        answerText:
          "Se debe hacer $100.000-80.000$, ya que si yo debo algo, al pagarlo se me descuenta dinero.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, ya que la deuda (negativo) es de $100.000$ y al pagar parte de la deuda esta debe disminuir, por lo que necesariamente $80.000$ tiene signo positivo.",
      },
      {
        answerText:
          "Se debe hacer $-100.000-80.000$, ya que la situaci\u00f3n habla de deudas, las cuales se asocian con el signo negativo.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, ya que la deuda (negativo) es de $100.000$ y al pagar parte de la deuda esta debe disminuir, por lo que necesariamente $80.000$ tiene signo positivo.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tA continuaci\u00f3n, se presenta el desarrollo de un estudiante al pedirle que resuelva la operaci\u00f3n $-2-(-4)$, pero ha cometido un error, \u00bfcu\u00e1l de las siguientes alternativas lo explica?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/p5.svg`,
    figureCaption: "Figura 1",
    node_id: 4,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "El error est\u00e1 en que debi\u00f3 haber sumado 4, ya que $- \\cdot -=+$, por lo que deber\u00eda haberse movido a la derecha",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que la multiplicaci\u00f3n de signos iguales siempre da como resultado un signo positivo.",
      },
      {
        answerText:
          "El error est\u00e1 en que el resultado no es -6, sino que es 6.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que el resultado correcto es 2, contando 4 espacios hacia la derecha.",
      },
      {
        answerText:
          "El error est\u00e1 en que no debe contar 4 posiciones desde el -2, sino que desde el 0.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que la operaci\u00f3n pide operar respecto al -2, por lo que ese es el n\u00famero desde el cual se cuenta.",
      },
      {
        answerText:
          "El error est\u00e1 en que el resultado no es -6, sino que -5, ya que se debe contar desde el 2.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que se deben 4 movimientos, no 4 n\u00fameros.",
      },
    ],
  },
  {
    questionText: "\n\u00bfCual de las siguientes afirmaciones es falsa?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 4,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "El producto entre 0.7 y un n\u00famero es el 75\\% del n\u00famero.",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$\\frac{1}{2}$ de un valor es el 50\\% de este.",
        isCorrect: false,
        feedback:
          "La afirmaci\u00f3n es correcta, ya que al dividir 1 entre 2, se obtiene 0.5, que es lo mismo que $\\frac{50}{100}$ en fracci\u00f3n, y en este caso, representa el 50\\%.",
      },
      {
        answerText:
          "El 20\\% de un n\u00famero es el producto entre 0.2 y un n\u00famero.",
        isCorrect: false,
        feedback:
          "La afirmaci\u00f3n es verdadera, ya que 0.2 es $\\frac{20}{100}$ en fracci\u00f3n, y al multiplicar 20 y dividir por 100, se obtiene el 20\\% de un n\u00famero.",
      },
      {
        answerText:
          "$\\frac{2}{4}$ de un n\u00famero cualquiera es el 50\\% de este.",
        isCorrect: false,
        feedback:
          "La afirmaci\u00f3n es correcta, ya que al simplificar $\\frac{2}{4}$ se obtiene $\\frac{1}{2}$, que es   lo mismo que 50\\%.",
      },
    ],
  },
  {
    questionText: "\nPara calcular el 40% de un n\u00famero se debe:\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 4,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "Multiplicar el n\u00famero por 40 y dividirlo por 100.",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Multiplicar el numero por 100 y dividirlo por 40.",
        isCorrect: false,
        feedback:
          "El planteamiento de la transformaci\u00f3n del porcentaje a fracci\u00f3n es al rev\u00e9s.",
      },
      {
        answerText: "Dividir el n\u00famero por 40 y dividirlo por 100.",
        isCorrect: false,
        feedback:
          "El planteamiento de la transformaci\u00f3n del porcentaje a fracci\u00f3n es correcto, pero la operaci\u00f3n es incorrecta.",
      },
      {
        answerText:
          "Multiplicar el n\u00famero por 100 y multiplicarlo por 40.",
        isCorrect: false,
        feedback: "El planteamiento y la operaci\u00f3n son incorrectos.",
      },
    ],
  },
  {
    questionText:
      "\nUsted se encuentra junto a su hermano debatiendo con respecto a como se aplican los descuentos que se pueden observar en una tienda. \u00bfCu\u00e1l o cuales de las siguientes afirmaciones es correcta?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 4,
    dificulty: "alta",
    alternatives: [
      {
        answerText:
          "Para saber el porcentaje de descuento de un producto se puede restar el valor original y el valor con descuento, dividirlo por el valor original y multiplicarlo por 100.",
        isCorrect: false,
        feedback:
          "El estudiante reconoce como obtener el porcentaje que se disminuye el valor original.",
      },
      {
        answerText:
          "Es posible saber el valor original de un producto si se toma el valor con descuento y se divide por el procentaje de descuento como proporci\u00f3n.",
        isCorrect: false,
        feedback:
          "El estudiante reconoce como aplicar el porcentaje correctamente.",
      },
      {
        answerText:
          "Se puede saber el valor final de un producto si se multiplica el valor original por el porcentaje de descuento y se divide por el mismo valor.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce como aplicar directamente el porcentaje de un n\u00famero.",
      },
      {
        answerText: "Todas las anteriores.",
        isCorrect: false,
        feedback: "El estudiante no reconoce la afirmaci\u00f3n incorrecta.",
      },
    ],
  },
  {
    questionText:
      "\n¿C\u00faal de las siguientes expreciones nos dan como resultado el valor final de agregar el k% a un n\u00famero X cualquiera?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 2,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "$$ \\left(1+\\left(\\dfrac{k}{100}\\right) \\right)\\cdot X $$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce el modelamiento del c\u00e1lculo de porcentaje mencionado.",
      },
      {
        answerText: "$$X\\cdot \\left(\\dfrac{k}{100}\\right) + X $$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce el modelamiento del c\u00e1lculo de porcentaje mencionado.",
      },
      {
        answerText: "$$ X\\cdot \\left(\\dfrac{k}{100}\\right) $$",
        isCorrect: false,
        feedback:
          "El estudiante sabe como aplicar el c\u00e1lculo de porcentaje para un n\u00famero cualquiera pero no reconoce lo que se pide en el enunciado.",
      },
      {
        answerText: "Todas las snteriores.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce que una de las respuestas es incorrecta.",
      },
    ],
  },
  {
    questionText:
      "\nUn term\u00f3metro marca una temperatura inicial de -8\u00b0C y al finalizar el d\u00eda registra -2\u00b0C, \u00bfCu\u00e1l es la variaci\u00f3n de la temperatura?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 2,
    dificulty: "media",
    alternatives: [
      {
        answerText: "6\u00b0C",
        isCorrect: true,
        feedback:
          "La variaci\u00f3n de la temperatura corresponde a 6\u00b0C, ya que al ubicar -8 y -2 en la recta num\u00e9rica estos se encuentran a 6 unidades de distancia. Visto de otra forma, al restar la temperatura m\u00e1xima con la m\u00ednima, es decir, ${-2--8}$",
      },
      {
        answerText: "10\u00b0C",
        isCorrect: false,
        feedback:
          "Esta alternativa corresponde a sumar ambas temperaturas, pero la pregunta pide la variaci\u00f3n de esta, por lo que la operaci\u00f3n a realizar es la sustracci\u00f3n. Adem\u00e1s, realiza err\u00f3neamente la adici\u00f3n seg\u00fan la ley de los signos",
      },
      {
        answerText: "-10\u00b0C",
        isCorrect: false,
        feedback:
          "Esta alternativa corresponde a sumar ambas temperaturas, pero la pregunta pide la variaci\u00f3n de esta, por lo que la operaci\u00f3n a realizar es la sustracci\u00f3n",
      },
      {
        answerText: "-6\u00b0C",
        isCorrect: false,
        feedback:
          "Esta alternativa corresponde a realizar la sustracci\u00f3n entre ambas temperaturas, es decir, -2--8, pero utilizando err\u00f3neamente la ley de los signos, ya que $-\\cdot-=+$, por lo que la operaci\u00f3n final resulta -2+8.",
      },
    ],
  },
  {
    questionText:
      "\nSi en Isla de Pascua son las 11:00 hrs, \u00bfQu\u00e9 hora es en Italia? Si el Huso horario de cada pais es: Isla de Pascua: -7 e Italia: +1\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 2,
    dificulty: "media",
    alternatives: [
      {
        answerText: "19:00 hrs",
        isCorrect: true,
        feedback:
          "La respuesta correcta es 19:00, ya que al restar el huso horario del pa\u00eds final con el inicial, es decir, $1--7$, se obtiene $1+7=8$. De esta forma, se suma $11+8=19$ y el resultado corresponde a la hora del pa\u00eds final.",
      },
      {
        answerText: "4:00",
        isCorrect: false,
        feedback:
          "Esta respuesta corresponde a realizar la operaci\u00f3n $11-7$, lo cual es incorrecto, ya que el signo negativo del 7 indica su posici\u00f3n en el mapa de husos horario, es decir, que respecto al meridiano cero este se ubica a la izquierda. Por lo que, para calcular la hora final es necesario sumar el 7 junto con el 1.",
      },
      {
        answerText: "5:00",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a hacer $11-7=5$ lo cual no es correcto, ya que se est\u00e1 viendo los husos horarios como n\u00fameros y no como referencias en el mapa",
      },
      {
        answerText: "17:00",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a realizar $7-1=6$ y $11+6=17$, lo cual no es correcto porque est\u00e1 viendo los husos horarios como n\u00fameros y no como una referencia en el mapa",
      },
    ],
  },
  {
    questionText:
      "\n\u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es verdadera?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 3,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "$$\\dfrac{1}{5} \\ de \\ un\\ valor\\ corresponde\\ al\\ 20\\%\\ de\\ \u00e9ste.$$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la relaci\u00f3n entre una fracci\u00f3n y el procenaje.",
      },
      {
        answerText:
          "$$El\\ 0,3\\ de\\ un\\ n\u00famero\\ corresponde\\ al\\ 30\\%\\ de\\ \u00e9ste.$$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la relaci\u00f3n entre porcentaje y proporci\u00f3n.",
      },
      {
        answerText:
          "$$\\dfrac{3}{4}\\ de\\ un\\ n\u00famero\\ corresponde\\ a\\ 75\\%\\ del\\ mismo\\ n\u00famero$$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la relaci\u00f3n entre una fracci\u00f3n y el procenaje.",
      },
      {
        answerText:
          "$$El\\ 20\\%\\ de\\ un\\ n\u00famero,\\ es\\ el\\ n\u00famero\\ multiplicado\\ por\\ 20.$$",
        isCorrect: false,
        feedback: "El estudiante no reconoce como trabajar con porcentajes.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\t\u00bfCu\u00e1l de las siguientes alternativas representa en porcentaje a la cantidad de cuadrados pintados de la imagen?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/porcentajes.svg`,
    figureCaption: "Figura 1",
    node_id: 3,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$25\\%$",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que al tener 100 cuadrados, los pintados son 25 de 100, es decir, 25\\%",
      },
      {
        answerText: "$\\frac{1}{4}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que si bien representa la cantidad de cuadrados pintados, no est\u00e1 en formato de porcentaje.",
      },
      {
        answerText:
          "$0,25$<\\div>\n\t\t\t\t\t\t\tEsta alternativa no es correcta, ya que si bien representa la cantidad de cuadrados pintados, no est\u00e1 en formato de porcentaje.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que si bien representa la cantidad de cuadrados pintados, no est\u00e1 en formato de porcentaje.",
      },
      {
        answerText: "$75$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que representa la cantidad de cuadrados que no est\u00e1n pintados.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tEn la imagen se muestran distintas barras que indican la carga de un tel\u00e9fono, \u00bfQu\u00e9 porcentaje representa a la cuarta barra?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/barras.svg`,
    figureCaption: "Figura 1",
    node_id: 3,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$37,5\\%$",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que resulta de calcular $\\frac{100}{x}=\\frac{8}{3}$",
      },
      {
        answerText: "$3\\%$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a solo contar la cantidad de trozos pintados",
      },
      {
        answerText: "$30\\%$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que considera que la bater\u00eda est\u00e1 dividida en 100 partes, pero en realidad est\u00e1 dividida en 8",
      },
      {
        answerText: "$0,375\\%$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a realizar correctamente la divisi\u00f3n de 3 con 8, pero falta multiplicar por 100 para obtener el porcentaje.",
      },
    ],
  },
  {
    questionText:
      '\nPara un concierto se dispone de 3 tipos de entradas: "Cancha general" a 4.500, "Cancha Vip" a 5.500 y "Platea" a 3.500. \u00bfQu\u00e9 expresi\u00f3n algebraica permite determinar los ingresos totales por la venta de las entradas?\n',
    imageURL: "null",
    figureCaption: "null",
    node_id: 5,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "$4.500 \\cdot g+5.500 \\cdot v+3.500 \\cdot p=total$",
        isCorrect: true,
        feedback:
          "Esta alternativa es la correcta, ya que indica el precio de cada entrada y diferencia con letras distintas cada ubicaci\u00f3n en el concierto.",
      },
      {
        answerText: "$4.500 \\cdot c+5.500 \\cdot c+3.500 \\cdot p=total$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no diferencia entre la ubicaci\u00f3n de cancha genera y vip, es decir, usa la misma letra para ambas.",
      },
      {
        answerText: "$g+v+p=total$%",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no indica el precio de cada ubicaci\u00f3n, por lo que esta ecuaci\u00f3n solo entregar\u00eda la cantidad de tickets vendidos.",
      },
      {
        answerText: "$c+c+p=total$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no diferencia entre la ubicaci\u00f3n de cancha genera y vip, es decir, usa la misma letra para ambas y adem\u00e1s no indica el precio de cada sector.",
      },
    ],
  },
  {
    questionText:
      "\nJuan tiene $3a+9$ juguetes y reparte la tercera parte a sus 2 amigos por igual. \u00bfCuantos juguetes reparte a cada amigo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 5,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "$\\frac{a+3}{2}$",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$\\frac{3a+9}{2}$",
        isCorrect: false,
        feedback:
          "Resulta de la omitir la particion inicial en tres, es decir, considera solo repartir el total en sus dos amigos.",
      },
      {
        answerText: "$2a+6$",
        isCorrect: false,
        feedback:
          "Resulta de triplicar la cantidad en vez de sacar la tercera parte de los juguetes.",
      },
      {
        answerText: "$\\frac{a+3}{3}$",
        isCorrect: false,
        feedback:
          "Considera dividir la cantidad repartida nuevamente en tres a sus dos amigos.",
      },
    ],
  },
  {
    questionText:
      '\n\n\t\t\t\t\t\tA continuaci\u00f3n, se muestra el desarrollo de un problema realizado por Mart\u00edn, el cual contiene un error. A partir de esto, \u00bfcu\u00e1l de las siguientes alternativas es correcta?\\\\\n\t\t\t\t\t\t"La siguiente situaci\u00f3n corresponde a una relaci\u00f3n inversa: En la construcci\u00f3n de un edificio si se trabaja con 200 obreros, la obra tiene fecha para 12 meses, \u00bfcu\u00e1ntos meses\n\t\t\t\t\t\tdemorar\u00e1 la obra si solo se dispone de 50 obreros?"\\\\ \n\t\t\t\t\t\tPaso 1: plantear la ecuaci\u00f3n $\\frac{200}{12}=\\frac{50}{x}$\\\\ \n\t\t\t\t\t\tPaso 2: calcular la inc\u00f3gnita $x=\\frac{50 \\cdot 12}{200}$\\\\\n\t\t\t\t\t\tPaso 3: concluir $x=3$\n\t\t\t\t\t\n',
    imageURL: "null",
    figureCaption: "null",
    node_id: 8,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "El error est\u00e1 en el paso 2, ya que calcula la relaci\u00f3n como si fuera directa, pero en realidad es inversa",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que en las relaciones inversas, primero se calcula la constante de proporci\u00f3n, es decir, $\\frac{200}{12}$ y ese resultado se multiplica\n\t\t\t\t\t\t\t\tpor el nuevo valor, esto es, $60 \\cdot 15$, lo cual entrega como resultado 48.",
      },
      {
        answerText:
          "El error est\u00e1 en el paso 1, ya que la ecuaci\u00f3n est\u00e1 mal planteada",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que los datos est\u00e1n en las proporciones indicadas por el enunciado.",
      },
      {
        answerText:
          "El error est\u00e1 en el paso 3, ya que 3 no es el resultado del paso anterior",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que si bien 3 no es el resultado correcto del problema, s\u00ed corresponde al resultado del paso 2",
      },
      {
        answerText: "No hay ning\u00fan error en el procedimiento",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que en en el paso 2 hay un error y adem\u00e1s el enunciado dice que s\u00ed existe un error.",
      },
    ],
  },
  {
    questionText:
      "\n Ana est\u00e1 comprando frutas para su canasta. Por cada naranja que compra, Ana adquiere el doble de manzanas y por cada manzana que compra, Ana adquiere el doble de pl\u00e1tanos. Si Ana compra N naranjas, M manzanas y P pl\u00e1tanos, \u00bfC\u00f3mo se relacionan estas cantidades en funcion de las naranjas?.\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 8,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "N = 2M + 4P",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "N = 4M + 2P",
        isCorrect: false,
        feedback: "La relaci\u00f3n se construye al rev\u00e9s.",
      },
      {
        answerText: "N = 2M + 2P",
        isCorrect: false,
        feedback:
          "La relaci\u00f3n se construye mal, se comprende mal la equivalencia entre los plantanos y naranjas.",
      },
      {
        answerText: "N = 2M - 2P",
        isCorrect: false,
        feedback:
          "La relaci\u00f3n se resta y se construye mal, se refuerza el distractor anterior.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tEn la g\u00f3ndola de un supermercado se encuentran ubicadas manzanas, naranjas y peras. Si la cantidad de manzanas y la cantidad de peras est\u00e1n en la raz\u00f3n 2 es a 3 mientras que la\n\t\t\t\t\t\tcantidad de peras y la cantidad de naranjas est\u00e1n en la raz\u00f3n 4 es a 5. \u00bfCu\u00e1l de las siguientes afirmaciones es verdadera?\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 8,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "Si hay \\(24\\) manzanas, entonces hay \\(45\\) naranjas.",
        isCorrect: true,
        feedback:
          "Si hay \\(24\\) manzanas y la raz\u00f3n entre la cantidad de manzanas y la cantidad de peras es de \\(2:3\\), entonces hay 36 peras, ya que \\(24:36=2:3\\). Como hay \\(36\\) peras\n\t\t\t\t\t\t\t\ty la raz\u00f3n entre la cantidad de peras y la cantidad de naranjas es de \\(4:5\\), entonces hay \\(45\\) naranjas, ya que \\(36:45=4:5\\).",
      },
      {
        answerText: "Si hay \\(18\\) manzanas, entonces hay \\(12\\) peras.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Si hay \\(20\\) manzanas, entonces hay \\(50\\) naranjas.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText:
          "Si hay \\(10\\) manzanas, entonces hay m\u00e1s peras que naranjas.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      '\nNico y Dani est\u00e1n discutiendo sobre la siguiente afirmaci\u00f3n "mientras m\u00e1s alta es una persona, m\u00e1s masa tiene". Nico cree que la afirmaci\u00f3n es verdadera, mientras que Dani cree que es incorrecta. A partir de esto, \u00bfcu\u00e1l de las siguientes alternativas es correcta?\n',
    imageURL: "null",
    figureCaption: "null",
    node_id: 8,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Dani est\u00e1 en lo correcto, porque la masa no depende de la estatura, es decir, puede haber una persona de menor estatura con la misma masa o incluso mayor.",
        isCorrect: true,
        feedback:
          "Esta afirmaci\u00f3n es correcta, ya que no existe una proporci\u00f3n entre la estatura y la masa.",
      },
      {
        answerText:
          "Nico est\u00e1 en lo correcto, ya que la masa de una persona es directamente proporcional a su estatura",
        isCorrect: false,
        feedback:
          "Esta afirmaci\u00f3n no es correcta, ya que puede haber una persona m\u00e1s baja o m\u00e1s alta con la misma masa, por lo que no es proporcional",
      },
      {
        answerText:
          "Dani est\u00e1 en lo correcto, porque la relaci\u00f3n entre la masa y la estatura es inversamente proporcional",
        isCorrect: false,
        feedback:
          "Esta es incorrecta, ya que si fuera una relaci\u00f3n inversa, significar\u00eda que mientras m\u00e1s baja es la persona mayor masa tiene, lo cual no es verdad.",
      },
      {
        answerText:
          "Nico est\u00e1 en lo correcto, ya que no puede haber una persona de una estatura diferente y con la misma masa",
        isCorrect: false,
        feedback:
          "Esta afirmaci\u00f3n no es correcta, ya que no hay una relaci\u00f3n entre peso y estatura.",
      },
    ],
  },
  {
    questionText:
      "\nUsted tiene una serie de datos que muestran una relaci\u00f3n proporcional inversa. Realice un an\u00e1lisis asociado a los datos que puedan existir en la tabla y mencione cual/es de la/s siguiente/s afirmaciones es falta en relaci\u00f3n a c\u00f3mo se relacionan las dos cantidades.\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 8,
    dificulty: "alta",
    alternatives: [
      {
        answerText:
          "Cuando una variable aumenta, la otra disminuye en una proporci\u00f3n constante.",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la definici\u00f3n de proporcionalidad inversa.",
      },
      {
        answerText:
          "Cuando una variable aumenta, la otra aumenta en una proporci\u00f3n constante.",
        isCorrect: false,
        feedback:
          "El estudiante no recoce la definici\u00f3n de proporcionalidad inversa.",
      },
      {
        answerText: "No hay relaci\u00f3n entre las dos variables.",
        isCorrect: false,
        feedback: "El estudiante no reconoce la relaci\u00f3n mencionada.",
      },
      {
        answerText: "Las proporciones inversas no se pueden analizar.",
        isCorrect: false,
        feedback: "El estudiante no sabe como responder a la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\nConsidera la siguiente situaci\u00f3n:\n\u201cEn la casa de Andrea, hay un estante que solamente tiene libros de Matem\u00e1ticas. La relaci\u00f3n entre los libros de Matem\u00e1ticas que tienen m\u00e1s de 100 hojas y los libros de Matem\u00e1ticas que tienen menos de 100 hojas es de 3:5\u201d\n\u00bfA qu\u00e9 concepto matem\u00e1tico corresponde la expresi\u00f3n 3:5?\n\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 6,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "Una raz\u00f3n",
        isCorrect: true,
        feedback:
          "La expresi\u00f3n corresponde a una raz\u00f3n, ya que es una relaci\u00f3n entre dos cantidades mediante una divisi\u00f3n.",
      },
      {
        answerText: "Un porcentaje",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Una proporci\u00f3n",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Un producto",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      '\nEn el 7\u00b0A est\u00e1n estudiando los monumentos de Chile y su profesora les muestra una imagen de la "Mano del Desierto", la cual mide 11m y las personas miden 1,6m. En base a la imagen, \u00bfqu\u00e9 expresi\u00f3n permite calcular la altura de la mano medida en personas?\n\t\t\t\t\t\t\n\n\n\n\n',
    imageURL: `${BASE_PATH}/images/paula/mano.svg`,
    figureCaption: "Figura 1",
    node_id: 6,
    dificulty: "media",
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
      "\n\u00bfCu\u00e1l o cu\u00e1les de las siguientes afirmaciones es verdadera?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 6,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Una relaci\u00f3n directa se puede expresar como $\\dfrac{Y}{X} = a$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la forma algebraica de una relaci\u00f3n directa.",
      },
      {
        answerText:
          "Una relaci\u00f3n inversa se puede representar como $Y \\cdot X = a$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce la forma algebraica de una relaci\u00f3n inversa.",
      },
      {
        answerText:
          "Una relaci\u00f3n directa se puede expresar como $X+Y = a$",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la forma algebraica de una relaci\u00f3n directa.",
      },
      {
        answerText:
          "Una relaci\u00f3n inversa se puede expresar como $\\dfrac{Y}{X} = -a$",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la forma algebraica de una relaci\u00f3n directa.",
      },
    ],
  },
  {
    questionText:
      "\nA continuaci\u00f3n, se presenta una imagen donde se indican 3 ecuaciones. A partir de esto, escoge la alternativa que exprese en lenguaje algebraico lo descrito en la imagen. Para esto, utiliza las uvas como u, sand\u00edas como s y pl\u00e1tanos como p.\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/frutas.svg`,
    figureCaption: "Figura 1",
    node_id: 6,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$u+s+u+u=950$\\\\$s+s+u=650$\\\\$u+p+s+u=800$",
        isCorrect: true,
        feedback:
          "Esta respuesta es correcta, ya que representa a las 3 ecuaciones con sus inc\u00f3gnitas respectivas.",
      },
      {
        answerText: "$u+s=950$\\\\$s+u=650$\\\\$u+p+s=800$\\\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que no considera la cantidad correcta de veces que aparecen las inc\u00f3gnitas.",
      },
      {
        answerText:
          "$u \\cdot s \\cdot u \\cdot u=950$\\\\$s \\cdot s \\cdot u=650$\\\\$u \\cdot p \\cdot s \\cdot u=800$\\\\",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que plantea las inc\u00f3gnitas correctamente, pero la operaci\u00f3n debe ser suma en vez de multiplicaci\u00f3n.",
      },
      {
        answerText: "$6u+4s+p=2.400$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que corresponde a sumar las 3 ecuaciones, por lo que no describe la situaci\u00f3n de la imagen.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tMariana represent\u00f3 la raz\u00f3n entre las personas que asistieron con su mascota a una caminata y el total de asistentes, como se muestra a continuaci\u00f3n. Al respecto, \u00bfcu\u00e1l es la raz\u00f3n entre la cantidad de personas que asistieron con sus mascotas respecto al total de asistentes?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/camilo/30_3_Imagen.svg`,
    figureCaption: "Figura 1",
    node_id: 7,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "\\(5:12\\)",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(7:12\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(5:7\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(7:5\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\n\u00bfCu\u00e1l de las siguientes afirmaciones es verdadera acerca del radio, el di\u00e1metro y la circunferencia de un c\u00edrculo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 9,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "El di\u00e1metro es el doble del radio.",
        isCorrect: true,
        feedback:
          "El estudiante reconoce la relaci\u00f3n dentro de los elementos mencionados en el enunciado.",
      },
      {
        answerText: "El radio es siempre el doble del di\u00e1metro.",
        isCorrect: false,
        feedback:
          "El estudiante reconoce una relaci\u00f3n, pero asocia los terminos de manera incorrecta.",
      },
      {
        answerText: "La circunferencia es siempre menor que el radio.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la diferencia de longitud entre los elementos mencionados.",
      },
      {
        answerText:
          "La circunferencia es igual al cuadrado del radio multiplicado por pi $(\\pi \u03c0)$.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la formula del perimetro de la circunferencia.",
      },
    ],
  },
  {
    questionText:
      "\nConsidere un tri\u00e1ngulo rect\u00e1ngulo con lados de longitud 3 unidades y 4 unidades. \u00bfCu\u00e1l de las siguientes opciones es la mejor estimaci\u00f3n para la longitud de la hipotenusa del tri\u00e1ngulo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 9,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "5 unidades",
        isCorrect: true,
        feedback:
          "El estudiante reconoce la fig\u00fara del tri\u00e1ngulo y logra aplicar correctamente la formula para obtener la hipotenusa.",
      },
      {
        answerText: "6 unidades",
        isCorrect: false,
        feedback:
          "El estudiante no logra obtener el resultado correcto al reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa.",
      },
      {
        answerText: "7 unidades",
        isCorrect: false,
        feedback:
          "El estudiante no logra obtener el resultado correcto al reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa.",
      },
      {
        answerText: "No sabe",
        isCorrect: false,
        feedback:
          "El estudiante no sabe reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa.",
      },
    ],
  },
  {
    questionText:
      "\nSi el punto A tiene las coordenadas $(2,5)$ y el punto B tiene las coordenadas $(-3,1)$, \u00bfCu\u00e1l es el vector que va de A a B? \n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 9,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$(-4,-5)$",
        isCorrect: true,
        feedback:
          "El estudiante sabe como obtener el vector de movimiento asociado al enunciado.",
      },
      {
        answerText: "$(-5,-4)$",
        isCorrect: false,
        feedback:
          "El estudiente sabe como obtener el vector de movimiento pero confunde los eje $X$ e $Y$",
      },
      {
        answerText: "$(5,4)$",
        isCorrect: false,
        feedback:
          "El estudiante sabe como obtener el vector de movimiento, pero no reconoce la direccion del movimiento.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como abordar el ejercicio.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tResuelve el siguiente problema considerando $\\pi = 3$. En la figura se tienen 4 circunferencias tangentes, todas del mismo tama\u00f1o y su radio mide 3 cm. \u00bfCu\u00e1l es el \u00e1rea de la\n\t\t\t\t\t\tparte ennegrecida? Considera que el lado del cuadrado mide 12 cm.\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/circunferencias.svg`,
    figureCaption: "Figura 1",
    node_id: 9,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$36 cm^2$",
        isCorrect: true,
        feedback:
          "Al utilizar la f\u00f3rmula del \u00e1rea de la circunferencia $\\pi r^2$ y reemplazando los datos del enunciado, se obtiene 27 $cm^2$, luego este resultado se multiplica por 4,\n\t\t\t\t\t\t\t\tya que son 4 circunferencias, resultando 108 $cm^2$. Finalmente, se debe restar al \u00e1rea del cuadrado, es decir, 144 $cm^2$, teniendo como resultado final 36 $cm^2$",
      },
      {
        answerText: "$72 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa corresponde a calcular el per\u00edmetro de las circunferencias, lo cual es incorrecto, ya que el problema pregunta por el \u00e1rea.",
      },
      {
        answerText: "$-24 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa es incorrecta, ya que resulta de calcular los per\u00edmetros de las circunferencias y del cuadrado para luego restarlas.",
      },
      {
        answerText: "$108 cm^2$",
        isCorrect: false,
        feedback:
          "Esta alternativa es incorrecta, ya que corresponde al \u00e1rea de las circunferencias y el problema pide el \u00e1rea de la zona ennegrecida.",
      },
    ],
  },
  // {
  //   questionText:
  //     "\n\n\t\t\t\t\t\tObtenga el area sombreada de la circunferencia inscrita en el cuadrado cuyo lado mide 4 cm ($\\pi = 3$).\n\t\t\t\t\t\t\n\n\n\n\n",
  //   imageURL: "./36_2.svg",
  //   figureCaption: "Figura 1",
  //   node_id: 9,
  //   dificulty: "alta",
  //   alternatives: [
  //     {
  //       answerText: "$4 \\ cm^2$",
  //       isCorrect: true,
  //       feedback:
  //         "El estudiante reconoce la formula del \u00e1rea y la aplica con los datos entregados.",
  //     },
  //     {
  //       answerText: "$6 \\ cm^2$",
  //       isCorrect: false,
  //       feedback:
  //         "El estudiante no logra reconocer la formula del \u00e1rea y aplica la del permimetro con los datos entregados.",
  //     },
  //     {
  //       answerText: "Falta Informac\u00f3n.",
  //       isCorrect: false,
  //       feedback:
  //         "El estudiante no reconoce los datos entregados para responder la pregunta.",
  //     },
  //     {
  //       answerText: "No sabe.",
  //       isCorrect: false,
  //       feedback:
  //         "El estudiante no sabe como calcular el \u00e1rea del circulo descrito.",
  //     },
  //   ],
  // },
  {
    questionText:
      "\n\u00bfCu\u00e1l de las siguientes opciones describe mejor el procedimiento para calcular el \u00e1rea de un tri\u00e1ngulo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 12,
    dificulty: "baja",
    alternatives: [
      {
        answerText:
          "Se mide la base y la altura del tri\u00e1ngulo, se multiplican y se divide entre dos.",
        isCorrect: true,
        feedback:
          "El estudiante logra reconocer y explicar el procedimiento del c\u00e1lculo del \u00e1rea del triangulo.",
      },
      {
        answerText:
          "Se mide la base y la altura del tri\u00e1ngulo, se dividen y se multiplican por dos",
        isCorrect: false,
        feedback:
          "El estudiante reconoce los elementos para calcular el area pero no sabe explicar el procedimiento.",
      },
      {
        answerText:
          "Se mide la base y la altura del tri\u00e1ngulo, se suman y se divide entre dos.",
        isCorrect: false,
        feedback:
          "El estudiante reconoce los elementos para calcular el area pero no sabe explicar el procedimiento.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback:
          "El estudiante no sabe como describir el procedimiento para el c\u00e1lculo del \u00e1rea de un triangulo.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tCamilo pidi\u00f3 a Sof\u00eda realizar los siguientes pasos.\n\t\t\t\t\t\t\nTraza una circunferencia y dos di\u00e1metros perpendiculares entre s\u00ed.\nTraza la bisectriz de cada uno de los \u00e1ngulos que forman los di\u00e1metros perpendiculares.\nMarca los puntos de intersecci\u00f3n de la bisectriz con la circunferencia.\nUne los puntos marcados.\n\n\t\t\t\t\t\t\u00bfQu\u00e9 figura obtuvo Sof\u00eda?\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 12,
    dificulty: "media",
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
        answerText: "Rect\u00e1ngulo",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Tri\u00e1ngulo",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nDos amigos quedaron de reunirse para ir de compras, ambos trazaron un plano cartesiano y acordaron quedar en un punto equitativo, es decir, en el punto M de la imagen, \u00bfQue deber\u00edan hacer los amigos para ubicar tal punto?\n",
    imageURL: `${BASE_PATH}/images/eduardo/38_3img_preg.svg`,
    figureCaption: "Figura 1",
    node_id: 12,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "$$(\\frac{x_1 + x_2}{2}, \\frac{y_1 + y_2}{2})$$",
        isCorrect: true,
        feedback:
          "Para una ubicaci\u00f3n equitativa, se debe pensar en la formula del punto medio que sirve para cualquier eje coordenado en el plano cartesiano, en este caso, el punto M consiste en la suma de los ejes respectivos y divida por 2",
      },
      {
        answerText: "$$(\\frac{x_1 + y_1}{2}, \\frac{x_2 + y_2}{2})$$",
        isCorrect: false,
        feedback:
          "Resulta de la confusion que puede generar el concepto de eje y numeracion, en este caso, se utilizan los dos primeros ejes del punto A para el eje de coordenadas x, y lo mismo aplica para el otro caso.",
      },
      {
        answerText: "$$(\\frac{y_1 + y_2}{2}, \\frac{x_1 + x_2}{2})$$",
        isCorrect: false,
        feedback:
          "Se aplica bien el concepto de punto medio, sin embargo, los ejes estan mal posicionados con respecto a la imagen.",
      },
      {
        answerText: "$$(\\frac{x_2 + y_2}{2}, \\frac{x_1 + y_1}{2})$$",
        isCorrect: false,
        feedback:
          "Se reutiliza la idea del primer distractor, sin embargo, tambien se denota la confusi\u00f3n de ubicar mal la numeraci\u00f3n.",
      },
    ],
  },
  {
    questionText:
      "\nUsted le est\u00e1s explicando a un compa\u00f1ero de clase c\u00f3mo construir una l\u00ednea perpendicular a una l\u00ednea dada en un plano cartesiano. \u00bfCu\u00e1l de las siguientes opciones ser\u00eda la mejor manera de comunicar este proceso?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 12,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "\u201cPrimero, dibuja una l\u00ednea que cruce la l\u00ednea dada en cualquier punto. Luego, aseg\u00farate de que al menos uno de los \u00e1ngulos formados por las dos l\u00edneas sea un \u00e1ngulo recto.\u201d",
        isCorrect: true,
        feedback:
          "El estudiante reconoce la explicaci\u00f3n de las propiedades que deben tener los angulos en dos rectas perpendiculares.",
      },
      {
        answerText:
          "\u201cPrimero, dibuja una l\u00ednea que cruce la l\u00ednea dada en cualquier punto. Luego, aseg\u00farate de que los \u00e1ngulos formados por las dos l\u00edneas sean iguales.\u201d",
        isCorrect: false,
        feedback:
          "El estudiante reconoce parcialmente la propiedad que deben tener los angulos entre dos rectas perpendiculares. Los angulos iguales deben ser de 90 grados.",
      },
      {
        answerText:
          "\u201cPrimero, dibuja una l\u00ednea que cruce la l\u00ednea dada en cualquier punto. Luego, aseg\u00farate de que los \u00e1ngulos formados por las dos l\u00edneas sumen 180 grados.\u201d",
        isCorrect: false,
        feedback:
          "El estudiante reconoce parcialmente la propiedad que deben tener los angulos entre dos rectas perpendiculares. La suma de los dos angulos rectos es de 180 grados.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce el procedimiento para demostrar que dos rectas son perpendiculares.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tCamila vive en el punto verde de la ciudad y su amiga Fernanda en el punto azul. A partir de esto, \u00bfcu\u00e1l de las siguientes opciones es correcta respecto a la imagen?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/ciudad.svg`,
    figureCaption: "Figura 1",
    node_id: 12,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "Camila y Fernada viven a la misma altura",
        isCorrect: true,
        feedback:
          "El valor de la coordenada x es -1 para ambas, por lo tanto, sus casas se encuentran a la misma altura",
      },
      {
        answerText: "Camila vive a la misma altura del estadio (punto rojo)",
        isCorrect: false,
        feedback:
          "Camila vive m\u00e1s abajo, la casa de Fernanda se encuentra a la misma altura, ya que el valor de sus coordenadas y es la misma",
      },
      {
        answerText:
          "Fernanda vive m\u00e1s cerca del puerto (punto morado) que Camila",
        isCorrect: false,
        feedback:
          "Camila vive m\u00e1s cerca del puerto, ya que hay que moverse menos espacios para llegar",
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
      "\nImagine que su familia esta planeando construir un jard\u00edn circular en se patio trasero. El radio del jard\u00edn ser\u00e1 de 4 metros. \u00bfPodr\u00edas estimar cu\u00e1ntos metros de cerca necesitar\u00edas para rodear el jard\u00edn (per\u00edmetro del c\u00edrculo) y cu\u00e1ntos metros cuadrados de tierra necesitar\u00edas para cubrir todo el jard\u00edn (\u00e1rea del c\u00edrculo)?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 10,
    dificulty: "baja",
    alternatives: [
      {
        answerText:
          "Per\u00edmetro: 8 $\\pi$ metros, \u00c1rea: 16 $\\pi$ metros cuadrados",
        isCorrect: true,
        feedback:
          "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn.",
      },
      {
        answerText:
          "Per\u00edmetro: 16 $\\pi$ metros, \u00c1rea: 8 $\\pi$ metros cuadrados",
        isCorrect: false,
        feedback:
          "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn. Pero confunde los terminos.",
      },
      {
        answerText:
          "Per\u00edmetro: 4 $\\pi$ metros, \u00c1rea: 4 $\\pi$ metros cuadrados",
        isCorrect: false,
        feedback:
          "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn. Pero confunde el concepto de radio con perimetro.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como llegar a la respuesta.",
      },
    ],
  },
  {
    questionText:
      "\nAmanda tiene una piscina circular en su jard\u00edn de $d$ metros de di\u00e1metro. Para que no se llene de hojas durante el oto\u00f1o, desea taparla con una tela de pl\u00e1stico. Si quiere que la tela cubra de forma perfecta la superficie, \u00bfcu\u00e1l de las siguientes expresiones le permite a Amanda calcular la cantidad, en metro cuadrados, de tela que necesita?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 10,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "$\\pi\\left(\\frac{d}{2}\\right)^2$",
        isCorrect: true,
        feedback:
          "Para calcular la cantidad de tela necesaria para cubrir una superficie circular, se debe calcular el \u00e1rea de dicha superficie. Dado que el di\u00e1metro de la piscina es de $d$ metros, su radio $r$ es de $\\frac{d}{2}$ metros. As\u00ed, el \u00e1rea que se necesita cubrir es de $\\pi r^2 = \\pi \\left(\\frac{d}{2}\\right)^2$",
      },
      {
        answerText: "$\\pi d^2$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$2\\pi d$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$2\\pi\\cdot\\frac{d}{2}$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nSea los puntos $P_1: (A,B)$ y $P_2(C,D)$, ubicados en el plano cartesiano. S\u00ed $A > C$ y $D > B$. \u00bfCu\u00e1l de las siguientes alternativas representa el vector de movimiento desde el\n\t\t\t\t\tpunto 1 al punto 2?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 10,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "$\\overrightarrow{\\nu}:(C-A,D-B)$",
        isCorrect: true,
        feedback:
          "El estudiante logra modelar el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos.",
      },
      {
        answerText: "$\\overrightarrow{\\nu}:(A-C,B-D)$",
        isCorrect: false,
        feedback:
          "El estudiante no logra modelar correctamente el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos al no tener en concideraci\u00f3n la posici\u00f3n de estos.",
      },
      {
        answerText: "$\\overrightarrow{\\nu}:(C-B,D-A)$",
        isCorrect: false,
        feedback:
          "El estudiante no logra modelar correctamente el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos al no saber relaci\u00f3nar las coordenas $X$ e $Y$ entre los puntos.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como abordar la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\nEn el plano cartesiano, se coloca un punto en la posici\u00f3n $(3,2)$. Si se aplica un vector de desplazamiento de $(-1,2)$, \u00bfcu\u00e1l ser\u00e1 la nueva posici\u00f3n del punto?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 10,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$(2,4)$",
        isCorrect: true,
        feedback:
          "El estudiante logra modelar el movimiento representado por el vector de desplazamiento al punto mencionado.",
      },
      {
        answerText: "$(4,4)$",
        isCorrect: false,
        feedback:
          "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en el eje $X$.",
      },
      {
        answerText: "$(2,0)$",
        isCorrect: false,
        feedback:
          "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en el eje $Y$.",
      },
      {
        answerText: "$(4,0)$",
        isCorrect: false,
        feedback:
          "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en ambos ejes.",
      },
    ],
  },
  {
    questionText:
      '\n"Corresponde a la linea imaginaria que divide al planeta en dos partes iguales".\n',
    imageURL: "null",
    figureCaption: "null",
    node_id: 11,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "Linea del Ecuador.",
        isCorrect: true,
        feedback:
          "El estudiante identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador.",
      },
      {
        answerText: "Paralelo.",
        isCorrect: false,
        feedback:
          "El estudiante no identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador.",
      },
      {
        answerText: "Meridiano.",
        isCorrect: false,
        feedback:
          "El estudiante no identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no conoce la definici\u00f3n descrita.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tNico desea cambiar la pantalla de su l\u00e1mpara y cuando va a comprarla se da cuenta que estas se miden seg\u00fan los per\u00edmetros de las bases. Por lo que, volvi\u00f3 a su casa a medir su\n\t\t\t\t\t\tl\u00e1mpara y anot\u00f3 las siguientes medidas de la imagen.\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/l\u00e1mpara.svg`,
    figureCaption: "Figura 1",
    node_id: 11,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "El per\u00edmetro de la base superior es 150 cm y el de la base inferior es 300 cm.",
        isCorrect: true,
        feedback:
          "Al utilizar la f\u00f3rmula de per\u00edmetro $\\pir^2$, se tiene para la base superior $3\\cdot25^2=150$ y para la base inferior $3\\cdot50^2=300$",
      },
      {
        answerText:
          "El per\u00edmetro de la base superior es 75 cm y el de la inferior 150 cm.",
        isCorrect: false,
        feedback:
          "Esta respuesta es err\u00f3nea, ya que corresponde a calcular el per\u00edmetro, pero sin multiplicar por 2.",
      },
      {
        answerText:
          "El per\u00edmetro de la base superior es 1.875 cm y el de la inferior 7.500 cm.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, ya que corresponde a utilizar el \u00e1rea en vez del per\u00edmetro.",
      },
      {
        answerText:
          "El per\u00edmetro de la base superior es 150 $cm^2$ y el de la base inferior es 300 $cm^2$.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, porque si bien los n\u00fameros son correctos, las unidades de medida corresponden a dos dimensiones, pero el per\u00edmetro es en una.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\t\u00bfCu\u00e1les de los siguientes pares de puntos est\u00e1n ubicados a $5$ unidades de distancia uno del otro y est\u00e1n contenidos en una recta paralela al eje $Y$\n\t\t\t\t\t\t\n\n\n\n",
    imageURL: `${BASE_PATH}/images/camilo/48_1_puntos.svg`,
    figureCaption: "Figura 1",
    node_id: 11,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "$A(2, -3)$ y $B(2, 2)$",
        isCorrect: true,
        feedback:
          "Al ubicar los puntos en un plano cartesiano, se obtiene lo siguiente:",
      },
      {
        answerText: "$C(2, 5)$ y $D(7, 5)$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$E(0, 5)$ y $F(0, -5)$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$G(0, 0)$ y $H(5, 5)$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nUsted est\u00e1s jugando un videojuego que utiliza un sistema de coordenadas para ubicar objetos en el mapa. Si tu personaje comienza en la posici\u00f3n (0,0), \u00bfa qu\u00e9 posici\u00f3n llegar\u00edas si te mueves 3 unidades hacia la derecha y 4 unidades hacia arriba?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 11,
    dificulty: "media",
    alternatives: [
      {
        answerText: "Llegar\u00edas a la posici\u00f3n (3,4).",
        isCorrect: true,
        feedback:
          "El estudiante reconoce el cambio en las coordenadas en los ejes $X$ e $Y$.",
      },
      {
        answerText: "Llegar\u00edas a la posici\u00f3n (4,3).",
        isCorrect: false,
        feedback:
          "El estudiante reconoce el cambio en las coordenadas, pero confunde los ejes $X$ e $Y$.",
      },
      {
        answerText: "Llegar\u00edas a la posici\u00f3n (7,7).",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce el cambio en las coordenadas y lo confunde con el movimiento vectorial en el plano.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como abordar esta respuesta.",
      },
    ],
  },
  {
    questionText:
      "\nA un grupo de estudiantes de s\u00e9ptimo b\u00e1sico de un colegio de la zona austral se les pregunt\u00f3 por la cantidad de horas que utilizaron su celular durante la \u00faltima semana, obteniendo las siguientes respuestas: 10, 11, 10, 15, 12, 18, 10, 14, 16, 11 y 15. \u00bfCu\u00e1l es la frecuencia absoluta de la cantidad de horas que m\u00e1s se repite?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "\\(3\\)",
        isCorrect: true,
        feedback:
          "La respuesta a la cantidad de horas que m\u00e1s se repite es \\(10\\) y esta se repite \\(3\\) veces, por lo que su frecuencia absoluta es \\(3\\)",
      },
      {
        answerText: "\\(10\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(11\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(18\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tA continuaci\u00f3n se presenta un gr\u00e1fico el cual corresponde a la cantidad de estudiantes de ciertos curso. Identifica si la(s) siguiente(s) opci\u00f3n(es) es(son) correcta(s).\\\\\n    I) El total de cursos es 10\\\\\n    II) La frecuencia absoluta corresponde al n\u00famero de alumnos\\\\\n    III) Los datos son de tipo cuantitativo\\\\\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/paula/grafico_cursos.svg`,
    figureCaption: "Figura 1",
    node_id: 13,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "I y III",
        isCorrect: true,
        feedback:
          "Las afirmaciones I y III son correctas, ya que al sumar las cantidades que alcanza cada barra, se obtiene 10. Por otro lado, los datos de tipo cuantitativo son los que corresponden a variables num\u00e9ricas y por ende se pueden ordenar de cierta manera",
      },
      {
        answerText: "Solo I",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que la afirmaci\u00f3n III tambi\u00e9n es correcta. Recuerda que los datos de tipo cuantitativo son los que corresponden a variables num\u00e9ricas y por ende se pueden ordenar de cierta manera",
      },
      {
        answerText: "I y II",
        isCorrect: false,
        feedback:
          "La afirmaci\u00f3n I es correcta, pero la II no lo es, ya que la frecuencia absoluta corresponde a la cantidad de cursos que tiene ese n\u00famero de alumnos",
      },
      {
        answerText: "II y III",
        isCorrect: false,
        feedback:
          "La afirmaci\u00f3n III es correcta, pero la afirmaci\u00f3n II no lo es, ya que la frecuencia absoluta corresponde a la cantidad de cursos que tiene ese n\u00famero de alumno",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tLa siguiente tabla muestra las edades de los participantes en el nuevo reality Gran sobrino. $\\\\$$ \\begin{array}{|c|c|c|} \\hline\\textbf{Edad} & \\textbf{F. absoluta} &\n\t\t\t\t\t\t\\textbf{F. acumulada} \\\\ \\hline 18 & 4 & 4 \\\\ \\hline 19 & a & 14 \\\\ \\hline 20 & b & 9 \\\\ \\hline \\end{array} $ $\\\\$\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "a = 10 ; b = 5",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "a = 5 ; b = 10",
        isCorrect: false,
        feedback:
          "Resulta de la confusi\u00f3n de aplicar los valores invertidos.",
      },
      {
        answerText: "a = 14 ; b = 19",
        isCorrect: false,
        feedback:
          "Resulta de seguir la logica en la edad de 18 a\u00f1os, ya que su frecuencia absoluta y acumulada coincide.",
      },
      {
        answerText: "a = 4 ; b = 14",
        isCorrect: false,
        feedback:
          "Resulta de no realizar la resta y poner la frecuencia acumulada anterior.",
      },
    ],
  },
  {
    questionText:
      "\nUn dado se lanz\u00f3 una cierta cantidad de veces y la probabilidad estimada de que saliera un $1$ en la cara superior fue del $20\\%$. \u00bfCu\u00e1ntas veces se lanz\u00f3 el dado si se obtuvo $7$ veces el n\u00famero $1$ en estos lanzamientos?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "$35$",
        isCorrect: true,
        feedback:
          "Dada la probabilidad de obtener un 1 en la cara superior del dado, se tiene la siguiente proporci\u00f3n:\\(\\dfrac{7}{n} = \\dfrac{20}{100}\\). De donde se obtiene que \\(n = 35\\).",
      },
      {
        answerText: "\\(27\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(140\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(28\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nEn la tabla se muestra la informaci\u00f3n ordenada de la cantidad de juguetes que tienen los ni\u00f1os en un pasaje de Maip\u00fa.\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "Los ni\u00f1os que tengan entre un y diez juguetes.",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "Los ni\u00f1os que tengan entre un y cinco juguetes.",
        isCorrect: false,
        feedback:
          "Solo se considera el primer intervalo, lo que corresponde al 20\\%.",
      },
      {
        answerText: "Los ni\u00f1os que tengan entre seis y diez juguetes.",
        isCorrect: false,
        feedback: "Resulta de solo considerar una parte del grupo solicitado.",
      },
      {
        answerText: "Los ni\u00f1os que tengan entre un y quince juguetes.",
        isCorrect: false,
        feedback: "Resulta de considerar mas del 60\\% de la muestra.",
      },
    ],
  },
  {
    questionText:
      "\n\u201cSe realiz\u00f3 un experimento en el que se lanz\u00f3 un dado equilibrado 600 veces. Los resultados se registraron en una tabla de frecuencias.\u00bfc\u00f3mo analizar\u00edas la probabilidad de que el n\u00famero 3 aparezca en el pr\u00f3ximo lanzamiento asociado a los resultados obtenidos anteriormente?. \n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Analizar\u00eda la probabilidad como la frecuencia relativa de obtener \u20183\u2019.",
        isCorrect: true,
        feedback:
          "El estudiante reconoce la probabilidad en funci\u00f3n de las frecuencias.",
      },
      {
        answerText:
          "Analizar\u00eda la probabilidad como 1/6, ya que un dado tiene 6 caras y se pregunta por un resultado.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la probabilidad en el contexto en funci\u00f3n de las frecuencias.",
      },
      {
        answerText:
          "Analizar\u00eda la probabilidad como 1/5, ya que solo estamos interesados en si obtenemos \u20183\u2019 o no.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la probabilidad en el contexto en funci\u00f3n de las frecuencias. Adem\u00e1s, en t\u00e9rminos te\u00f3ricos no sabe plantear las probabilidades.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como responder la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tUn naipe ingles est\u00e1 compuesto por $52$ cartas repartidas en partes iguales en $4$ pintas: Coraz\u00f3n, Diamante, Pica y Tr\u00e9bol. Cada pinta diferente cuenta con $9$ cartas\n\t\t\t\t\t\tnumeradas del $1$ al $9$ y $4$ cartas con figuras: Jota, Reina, Rey y As. Si se escoge una carta al azar \u00bfcu\u00e1l es la probabilidad de obtener una carta que tengas el n\u00famero $5$?\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 13,
    dificulty: "media",
    alternatives: [
      {
        answerText: "\\(\\dfrac{4}{52}\\)",
        isCorrect: true,
        feedback:
          "Hay 4 cartas con el n\u00famero 5 en el mazo, una por cada pinta y 52 cartas en total. As\u00ed, la probabilidad de obtener una carta con el n\u00famero 5 es de \\(\\dfrac{4}{52}\\)",
      },
      {
        answerText: "\\(\\dfrac{1}{52}\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(\\dfrac{4}{13}\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(\\dfrac{1}{13}\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\n\u00bfEn cu\u00e1l de las siguientes situaciones es mejor utilizar un gr\u00e1fico circular?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 16,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Cuando se quiere representar el porcentaje de votos en una elecci\u00f3n.",
        isCorrect: true,
        feedback:
          "Este gr\u00e1fico es el que mejor representa a la muestra, ya que utiliza porcentajes, los cuales se usan de mejor manera en este tipo de gr\u00e1fico.",
      },
      {
        answerText:
          "Cuando se quiere representar el n\u00famero de participantes de un evento",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1.",
      },
      {
        answerText:
          "Cuando se quiere representar la cantidad de notas azules de un curso",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1.",
      },
      {
        answerText:
          "Cuando se quiere representar la cantidad de hijos de 50 familias",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1.",
      },
    ],
  },
  {
    questionText:
      "\nEn una maquina de dulces hay tres chicles sabor sand\u00eda, dos sabor frutilla y tres sabor menta. Se saca al azar un chicle, anotan el sabor y se devuelve a la maquina. \u00bfQu\u00e9 afirmaci\u00f3n es correcta?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 16,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "el $75\\%$ de los chicles son de sabor sand\u00eda y menta",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "En 8 intentos anotar\u00e1n todos los sabores",
        isCorrect: false,
        feedback:
          "La afirmacion puede resultar confusa, porque al haber reposicion, existe la probabilidad de sacar sabores que no est\u00e9n anotados en m\u00e1s de 8 intentos",
      },
      {
        answerText: "el 30\\% de los chicles son sabor sand\u00eda",
        isCorrect: false,
        feedback:
          "Puede existir la confusion al calcular la frecuencia relativa del sabor sandia, ya que al haber tres chicles, se puede pensar que son el 30\\%.",
      },
      {
        answerText: "m\u00e1s del 25\\% de los chicles son sabor frutilla",
        isCorrect: false,
        feedback:
          "Resulta de una mala interpretacion de la frecuencia relativa del sabor de chicle, en este caso, no se cumple la condicion propuesta pero puede resultar confuso por el hecho de incluir la proporcion del sabor.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tEl siguiente gr\u00e1fico circular muestra los resultados de una encuesta aplicada a 300 estudiantes sobre la implementaci\u00f3n de salas tem\u00e1ticas en su colegio. \u00bfCu\u00e1l de las siguientes afirmaciones es verdadera?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/camilo/54_3_Gr\u00e1fico circular.svg`,

    figureCaption: "Figura 1",
    node_id: 16,
    dificulty: "baja",
    alternatives: [
      {
        answerText:
          'La frecuencia relativa de los que contestan "Muy de acuerdo" es \\(\\dfrac{3}{10}\\).',
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(2\\) estudiantes no contestaron la encuesta.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText:
          "Hay \\(8\\) estudiantes m\u00e1s que contestaron \u201cNi de acuerdo ni en desacuerdo\u201d que los que contestaron \u201cMuy de acuerdo\u201d.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText:
          "M\u00e1s de la mitad de los estudiantes respondi\u00f3 la opci\u00f3n \u201cNi de acuerdo ni en desacuerdo\u201d.",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nUsted se encuentra junto a su amigo y tiene una bolsa con 4 dulces rojos, 3 dulces azules y 2 dulces verdes. \u00bfC\u00f3mo le explicar\u00eda a su amigo que es lo m\u00e1s probable que ocurra cuando saque el siguiente dulce?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 16,
    dificulty: "baja",
    alternatives: [
      {
        answerText:
          "Dado que mayormente hay dulces rojos, es m\u00e1s probable que salga este.",
        isCorrect: true,
        feedback:
          "El estudiante reconoce que la categor\u00eda con mayor frecuencia absoluta es la que tiene mayor probabilidad de salir.",
      },
      {
        answerText:
          "No existe forma de saber cu\u00e1l dulce es m\u00e1s probable que salga.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la relaci\u00f3n entre las frecuencias y las probabilidades.",
      },
      {
        answerText:
          "Como son 3 dulces, todos son igual de probables que salgan.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la relaci\u00f3n entre las frecuencias y las probabilidades. Confunde con la cantidad de categor\u00edas.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como abordar la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\nEl siguiente gr\u00e1fico muestra el promedio de votos en un curso entre los a\u00f1os 2020 y 2023.\n",
    imageURL: `${BASE_PATH}/images/eduardo/55_2imgpreg.svg`,
    figureCaption: "Figura 1",
    node_id: 16,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "Entre 2018 y 2022 no existe variaci\u00f3n con los resultados de las votaciones.",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText:
          "Entre 2017 y 2020 existe variaci\u00f3n con los resultados de las votaciones promedio.",
        isCorrect: false,
        feedback:
          "Es otro caso parecido al de la respuesta, pero este caso es correcto porque existe variaci\u00f3n en el intervalo en los a\u00f1os 2018 y 2019.",
      },
      {
        answerText:
          "En 2015 y 2019 fueros los a\u00f1os donde se vot\u00f3 menos en promedio.",
        isCorrect: false,
        feedback:
          "Correcto, ya que 2015 y 2019 registran los peores casos de votaciones en promedio",
      },
      {
        answerText:
          "en 2016 y 2017 hubo mas votos en promedio que en 2020 y 2022",
        isCorrect: false,
        feedback:
          "La afirmacion es correcta, ya que la suma de los votos en promedio de los a\u00f1os 2016 y 2017 es 55 y la suma en los a\u00f1os 2020 y 2022 es 50.",
      },
    ],
  },
  {
    questionText:
      "\nEn la siguiente tabla se muestran las edades de futbolistas de la selecci\u00f3n chilena\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 14,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "$\\frac{1}{6}$",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$\\frac{1}{9}$",
        isCorrect: false,
        feedback: "Corresponde a seleccionar la frecuencia de 31 a\u00f1os",
      },
      {
        answerText: "$\\frac{2}{9}$",
        isCorrect: false,
        feedback: "Corresponde a seleccionar la frecuencia de 33 a\u00f1os",
      },
      {
        answerText: "$\\frac{1}{2}$",
        isCorrect: false,
        feedback: "Corresponde a seleccionar la frecuencia de 30 a\u00f1os",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tLa siguiente tabla de frecuencias registra las frecuencias absolutas, $n_1$, $n_2$ y $n_3$, asociadas a cada una de las categor\u00edas de la variable cuantitativa en estudio,\n\t\t\t\t\t\t$C_1$, $C_2$ y $C_3$, respectivamente. $\\\\$$ \\begin{array}{|c|c|} \\hline\\textbf{Variable} & \\textbf{f} \\\\ \\hline C_1 & n_1 \\\\ \\hline C_2 & n_2 \\\\ \\hline C_3 & n_3 \\\\ \\hline\n\t\t\t\t\t\t\\end{array} $ $\\\\$ A partir de la tabla de frecuencias, \u00bfcu\u00e1l de las siguientes expresiones permite determinar la frecuencia relativa, expresada como fracci\u00f3n, para la\n\t\t\t\t\t\tcategor\u00eda C2?\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 14,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "$\\dfrac{n_2}{n_1 +n_2 + n_3}$",
        isCorrect: true,
        feedback:
          "El estudiante reconoce como calcular la frecuencia relativa como fracci\u00f3n con los datos entregados.",
      },
      {
        answerText: "\\dfrac{n_2}{3}",
        isCorrect: false,
        feedback:
          "El estudiante no sabe como calcular la frecuencia relativa confundiendo los t\u00e9rminos asociados a esta.",
      },
      {
        answerText: "$\\dfrac{C_2}{3}$",
        isCorrect: false,
        feedback:
          "El estudiante no sabe como calcular la frecuencia relativa confundiendo los t\u00e9rminos asociados a esta.",
      },
      {
        answerText: "No sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como responder la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\nRoberto tiene diez mil pesos y los apuesta en una ruleta de dos caras como se muestra en la figura.\n",
    imageURL: `${BASE_PATH}/images/eduardo/58_4imgpreg.svg`,
    figureCaption: "Figura 1",
    node_id: 14,
    dificulty: "alta",
    alternatives: [
      {
        answerText: "En cuatro intentos Roberto puede quedar sin dinero.",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "En dos intentos Roberto puede quedar dinero.",
        isCorrect: false,
        feedback:
          "Resulta de considerar que en cada intento pierda o gane su apuesta inicial y no la mitad.",
      },
      {
        answerText: "En seis intentos Roberto puede quedar sin dinero.",
        isCorrect: false,
        feedback:
          "Resulta de considerar dos intentos anteriores, sin embargo, solo se piden los adicionales",
      },
      {
        answerText: "Roberto nunca queda sin dinero",
        isCorrect: false,
        feedback: "Resulta de no considerar la probabilidad de perder dinero.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tUnos de sus compa\u00f1eros de curso le propone realizar un estudio de con respecto a las notas generales de sus compa\u00f1eros. Saben que tard\u00edo realizar una encuesta a todos los\n\t\t\t\t\t\tparticipantes del curso, por lo que deciden expresar de manera general la tabla de frecuencias que obtendr\u00e1n al realizar el estudio y quedar\u00eda de la siguiente forma:\n\t\t\t\t\t\t$\\begin{array}{|c|c|} \\hline \\textbf{Nota} & \\textbf{frecuencia absoluta} \\\\ \\hline [1 - 2 [& f_1 \\\\ \\hline [2 - 3[ & f_2 \\\\ \\hline [3 - 4[ & f_3 \\\\ \\hline [4 - 5[ & f_4 \\\\\n\t\t\t\t\t\t\\hline [5 - 6] & f_5 \\\\ \\hline \\end{array}$ $\\\\$ Si el plan de ustedes es hacer distintos an\u00e1lisis con la informaci\u00f3n, \u00bfCu\u00e1l/es de la/s siguiente/es afirmaciones es correcta?\n\t\t\t\t\t\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 14,
    dificulty: "media",
    alternatives: [
      {
        answerText:
          "La frecuencia relativa acumulada hasta el intervalo de nota [ 3 - 4 [ se puede obtener como: $$\\dfrac{f_1+f_2+f_3}{f_1+f_2+f_3+f_4+f_5+f_6}$$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce, en el contexto entregado, la forma de obtener la frecuencia relativa acumulada en funci\u00f3n de las frecuencias absolutas de todos los intervalos.",
      },
      {
        answerText:
          "La frecuencia de los estudiantes que tiene m\u00e1s de un 5 de nota es: $$ f_5+f_6$$",
        isCorrect: false,
        feedback:
          "El estudiante reconoce cu\u00e1les son las frecuencias absolutas a acumular en funci\u00f3n de lo que se le solicita, reconociendo los intervalos asociados.",
      },
      {
        answerText:
          "La frecuencia relativa del intervalo [ 1 - 2 [ es: $$\\dfrac{f_1}{f_6}$$",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce como obtener la frecuencia relativa en un intervalo en especifico con las frecuencias absolutas.",
      },
      {
        answerText: "Todas las anteriores.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce la existencia de una respuesta incorrecta.",
      },
    ],
  },
  {
    questionText:
      "\nTrinidad tiene sobre su banco $3$ l\u00e1pices de diferentes colores ordenados de izquierda a derecha. Mientras ella iba al ba\u00f1o su compa\u00f1ero Rodrigo se llev\u00f3 los l\u00e1pices de Trinidad para pintar su tarea y luego los devolvi\u00f3 al banco de Trinidad. \u00bfCu\u00e1l es la probabilidad de que Rodrigo dejara los l\u00e1pices en el mismo orden que los ten\u00eda Trinidad?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 14,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$\\dfrac{1}{6}$",
        isCorrect: true,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$\\dfrac{1}{3}$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$\\dfrac{1}{1}$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "$1$",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nNico lanz\u00f3 un dado dos veces y en ambos lanzamientos obtuvo el n\u00famero 3, por lo que piensa que al lanzarlo una tercera vez obtendr\u00e1 de nuevo un 3. A partir de esto, \u00bfcu\u00e1l de las siguientes conclusiones es correcta?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 14,
    dificulty: "alta",
    alternatives: [
      {
        answerText:
          "Al realizar el tercer lanzamiento puede que salga cualquier numero desde el 1 al 6, ya que todos los n\u00fameros tienen la misma probabilidad de salir.",
        isCorrect: true,
        feedback:
          "El dado tiene 6 posibilidades, donde todas tienen la misma probabilidad de salir, es decir, $\\frac{1}{6}$, por lo que en este nuevo lanzamiento puede salir cualquier numero, ya que el dado no esta cargado.",
      },
      {
        answerText:
          "En el tercer lanzamiento saldr\u00e1 cualquier numero, menos el  3 porque ya ha salido muchas veces antes.",
        isCorrect: false,
        feedback:
          "El dado tiene 6 posibles resultados, donde cada lanzamiento es independiente uno de otro, por lo que el hecho de que el 3 ya haya salido, no significa que no pueda salir m\u00e1s.",
      },
      {
        answerText:
          "En el tercer lanzamiento volver\u00e1 a salir el 3, porque al haber salido dos veces antes significa que siempre saldr\u00e1.",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta, ya que es posible que un numero salga repetidas veces, sin embargo, en el enunciado no se indica que el dado este cargado, por lo que no se puede asumir que siempre saldr\u00e1 este resultado.",
      },
      {
        answerText:
          "Se puede concluir que cada n\u00famero saldr\u00e1 siempre 2 veces porque todos tienen la misma probabilidad en el dado.",
        isCorrect: false,
        feedback:
          "Esta respuesta no es correcta, ya que si bien todos los n\u00fameros tienen la misma probabilidad de salir, no es posible concluir que siempre saldr\u00e1 dos veces cada n\u00famero.",
      },
    ],
  },
  {
    questionText:
      "\nEn una encuesta realizada a 100 estudiantes sobre su color favorito de 6 opciones disponibles, se encontr\u00f3 que el color azul fue elegido 25 veces. Si se realiza la misma encuesta a otro grupo de 100 estudiantes, \u00bfCu\u00e1l de las siguientes afirmaciones es m\u00e1s probable que sea cierta?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 15,
    dificulty: "baja",
    alternatives: [
      {
        answerText:
          "No se puede predecir cu\u00e1ntas veces ser\u00e1 elegido el color azul.",
        isCorrect: true,
        feedback:
          "El estudiante reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta.",
      },
      {
        answerText: "El color azul ser\u00e1 elegido exactamente 25 veces.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta.",
      },
      {
        answerText: "El color azul ser\u00e1 elegido menos de 25 veces.",
        isCorrect: false,
        feedback:
          "El estudiante no reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta.",
      },
      {
        answerText: "No Sabe.",
        isCorrect: false,
        feedback: "El estudiante no sabe como responder la pregunta.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tLa siguiente tabla muestra el n\u00famero de asignaturas inscritas por los estudiantes de una universidad durante su \u00faltimo a\u00f1o de estudio. \u00bfCu\u00e1ntas asignaturas inscribe la mayor\u00eda de los estudiantes?\n\t\t\t\t\t\t\n\n\n\n\n",
    imageURL: `${BASE_PATH}/images/camilo/61_3_Tabla.svg`,
    figureCaption: "Figura 1",
    node_id: 15,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "\\(5\\)",
        isCorrect: true,
        feedback:
          "\\(560\\) corresponde a la mayor\u00eda de los estudiantes y estos inscriben \\(5\\) asignaturas durante su \u00faltimo a\u00f1o de estudio.",
      },
      {
        answerText: "\\(4\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(6\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(7\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\nEn un curso se quiere realizar un experimento, para lo cual se gira un trompo que tiene la forma de un hex\u00e1gono regular y la profesora les pregunta \u00bfCu\u00e1l es la probabilidad de que salga el color rojo?\n",
    imageURL: "null",
    figureCaption: "null",
    node_id: 15,
    dificulty: "media",
    alternatives: [
      {
        answerText: "$\\frac{1}{6}$",
        isCorrect: true,
        feedback:
          "Esta alternativa es correcta, ya que un hex\u00e1gono tiene 6 lados y como es regular cada color tiene la misma probabilidad de salir.",
      },
      {
        answerText: "$\\frac{1}{7}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir.",
      },
      {
        answerText: "$\\frac{2}{7}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir.",
      },
      {
        answerText: "$\\frac{2}{6}$",
        isCorrect: false,
        feedback:
          "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir.",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tUn grupo de seguidores de una famosa saga de drama particip\u00f3 en una encuesta en la que se les pregunt\u00f3 qu\u00e9 contenido les gustaba ver m\u00e1s con respecto a su saga favorita. Los datos obtenidos est\u00e1n presentados en la siguiente tabla:\n\t\t\t\t\t\t\n\nFigura 1\n\n\nSi la se quiere representar la informaci\u00f3n a trav\u00e9s de un gr\u00e1fico circular, \u00bfqu\u00e9 porcentaje del gr\u00e1fico debiese corresponder al sector destinado a aquellas personas que prefirieron el  Teatro?\n",
    imageURL: `${BASE_PATH}/images/camilo/63_2_Tabla.svg`,
    figureCaption: "Figura 1",
    node_id: 15,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "\\(14\\%\\)",
        isCorrect: true,
        feedback:
          "El total de encuestados es de \\(25+18+7=50\\), por lo que el porcentaje del gr\u00e1fico circular que le corresponde a las \\(7\\) personas que prefieren la opci\u00f3n Teatro es del \\(14\\%\\).",
      },
      {
        answerText: "\\(7\\%\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(25\\%\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
      {
        answerText: "\\(36\\%\\)",
        isCorrect: false,
        feedback: "Feedback cuando seleccionan esta respuesta",
      },
    ],
  },
  {
    questionText:
      "\n\n\t\t\t\t\t\tEn una comuna de Santiago del mes de Enero de 2023 se registra el consumo por tipos de completos, y se construye el siguiente gr\u00e1fica.\n\t\t\t\t\t\t\n\n\n\n\t\t\t\t\t\t $\\\\$ Se desea traspasar la informaci\u00f3n del gr\u00e1fico a la siguiente tabla. Seg\u00fan la grafica \u00bfQu\u00e9 valores deberian ir en la tabla? $\\\\$$ \\begin{array}{|c|c|} \\hline Tipo de completos &\n\t\t\t\t\t\tF. absoluta \\\\ \\hline Din\u00e1mico & A \\\\ \\hline As & B \\\\ \\hline Italiano & C \\\\ \\hline Chacarero & D \\\\ \\hline Especial mayo & E \\\\ \\hline \\end{array} $ $\\\\$\n\t\t\t\t\t\n",
    imageURL: `${BASE_PATH}/images/eduardo/64_1imgpreg.svg`,
    figureCaption: "Figura 1",
    node_id: 15,
    dificulty: "baja",
    alternatives: [
      {
        answerText: "A = 3, B = 7, C = 10, D = 4, E = 6",
        isCorrect: true,
        feedback: "Feedback general",
      },
      {
        answerText: "A = 3/30, B = 7/30, C = 10/30, D = 4/30, E = 6/30",
        isCorrect: false,
        feedback:
          "Resulta de confunsi\u00f3n de considerar la frecuencia relativa.",
      },
      {
        answerText: "A = 3, B = 10, C = 20, D = 24, E = 30",
        isCorrect: false,
        feedback:
          "Resulta de confunsi\u00f3n de considerar la frecuencia acumulada.",
      },
      {
        answerText: "A = 3/30, B = 10/30, C = 20/30, D = 24/30, E = 30/30",
        isCorrect: false,
        feedback:
          "Resulta de confunsi\u00f3n de considerar la frecuencia relativa acumulada.",
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
      dificulty: questionData.dificulty,
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
