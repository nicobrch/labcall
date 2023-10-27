import { Alternative, Question } from "../sequelize";

const initialData = [
	{
		questionText:
			'\nPara un concierto se dispone de 3 tipos de entradas: "Cancha general" a 4.500, "Cancha Vip" a 5.500 y "Platea" a 3.500. \u00bfQu\u00e9 expresi\u00f3n algebraica permite determinar los ingresos totales por la venta de las entradas?\n',
		imageURL: "null",
		figureCaption: "null",
		node_id: 5,
		dificulty: "Alta",
		alternatives: [
			{
				answerText: "$4.500 \\cdot g+5.500 \\cdot v+3.500 \\cdot p=total$",
				isCorrect: true,
				feedback: "Esta alternativa es la correcta, ya que indica el precio de cada entrada y diferencia con letras distintas cada ubicaci\u00f3n en el concierto."
			},
			{
				answerText: "$4.500 \\cdot c+5.500 \\cdot c+3.500 \\cdot p=total$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no diferencia entre la ubicaci\u00f3n de cancha genera y vip, es decir, usa la misma letra para ambas."
			},
			{
				answerText: "$g+v+p=total$%",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no indica el precio de cada ubicaci\u00f3n, por lo que esta ecuaci\u00f3n solo entregar\u00eda la cantidad de tickets vendidos."
			},
			{
				answerText: "$c+c+p=total$",
				isCorrect: false,
				feedback:
					"Esta alternativa no es correcta, ya que no diferencia entre la ubicaci\u00f3n de cancha genera y vip, es decir, usa la misma letra para ambas y adem\u00e1s no indica el precio de cada sector."
			}
		]
	},
	{
		questionText:
			'\nA continuaci\u00f3n, se muestra el desarrollo de un problema realizado por Mart\u00edn, el cual contiene un error. A partir de esto, \u00bfCu\u00e1l de las siguientes alternativas es correcta?\\\\\n    "La siguiente situaci\u00f3n corresponde a una relaci\u00f3n inversa: En la construcci\u00f3n de un edificio si se trabaja con 200 obreros, la obra tiene fecha para 12 meses, \u00bfcu\u00e1ntos\nmeses demorar\u00e1 la obra si solo se dispone de 50 obreros?"\\\\\n\nPaso 1: plantear la ecuaci\u00f3n $\\frac{200}{12}=\\frac{50}{x}$\\\\\nPaso 2: calcular la inc\u00f3gnita $x=\\frac{50 \\cdot 12}{200}$\\\\\nPaso 3: concluir $x=3$\n',
		imageURL: "null",
		figureCaption: "null",
		node_id: 8,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "El error est\u00e1 en el paso 2, ya que calcula la relaci\u00f3n como si fuera directa, pero en realidad es inversa",
				isCorrect: true,
				feedback:
					"Esta alternativa es correcta, ya que en las relaciones inversas, primero se calcula la constante de proporci\u00f3n, es decir, $\\frac{200}{12}$ y ese resultado se multiplica por el nuevo valor, esto es, $60 \\cdot 15$, lo cual entrega como resultado 48."
			},
			{
				answerText: "El error est\u00e1 en el paso 1, ya que la ecuaci\u00f3n est\u00e1 mal planteada",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que los datos est\u00e1n en las proporciones indicadas por el enunciado."
			},
			{
				answerText: "El error est\u00e1 en el paso 3, ya que 3 no es el resultado del paso anterior",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que si bien 3 no es el resultado correcto del problema, s\u00ed corresponde al resultado del paso 2"
			},
			{
				answerText: "No hay ning\u00fan error en el procedimiento",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que en en el paso 2 hay un error y adem\u00e1s el enunciado dice que s\u00ed existe un error."
			}
		]
	},
	{
		questionText:
			'\nNico y Dani est\u00e1n discutiendo sobre la siguiente afirmaci\u00f3n "mientras m\u00e1s alta es una persona, m\u00e1s masa tiene". Nico cree que la afirmaci\u00f3n es verdadera, mientras que Dani cree que es incorrecta. A partir de esto, \u00bfCu\u00e1l de las siguientes alternativas es correcta?\n',
		imageURL: "null",
		figureCaption: "null",
		node_id: 8,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "Dani est\u00e1 en lo correcto, porque la masa no depende de la estatura, es decir, puede haber una persona de menor estatura con la misma masa o incluso mayor.",
				isCorrect: true,
				feedback: "Esta afirmaci\u00f3n es correcta, ya que no existe una proporci\u00f3n entre la estatura y la masa."
			},
			{
				answerText: "Nico est\u00e1 en lo correcto, ya que la masa de una persona es directamente proporcional a su estatura",
				isCorrect: false,
				feedback: "Esta afirmaci\u00f3n no es correcta, ya que puede haber una persona m\u00e1s baja o m\u00e1s alta con la misma masa, por lo que no es proporcional"
			},
			{
				answerText: "Dani est\u00e1 en lo correcto, porque la relaci\u00f3n entre la masa y la estatura es inversamente proporcional",
				isCorrect: false,
				feedback: "Esta es incorrecta, ya que si fuera una relaci\u00f3n inversa, significar\u00eda que mientras m\u00e1s baja es la persona mayor masa tiene, lo cual no es verdad."
			},
			{
				answerText: "Nico est\u00e1 en lo correcto, ya que no puede haber una persona de una estatura diferente y con la misma masa",
				isCorrect: false,
				feedback: "Esta afirmaci\u00f3n no es correcta, ya que no hay una relaci\u00f3n entre peso y estatura."
			}
		]
	},
	{
		questionText:
			'\nEn el 7\u00b0A est\u00e1n estudiando los monumentos de Chile y su profesora les muestra una imagen de la "Mano del Desierto", la cual mide 11 metros y las personas miden 1,6 metros. En base a la imagen, \u00bfqu\u00e9 expresi\u00f3n permite calcular la altura de la mano medida en personas?\n\t\t\t\t\t\t\n\n\n\n',
		imageURL: "C:\\Users\\paula\\Desktop\\im\u00e1genes_labcat\\mano.svg",
		figureCaption: "Figura 1",
		node_id: 6,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "$\\frac{persona}{1,6}=\\frac{x}{11}$",
				isCorrect: true,
				feedback: "Esta alternativa es correcta, ya que mantiene las relaciones entre los datos respectivos a las personas y a la mano."
			},
			{
				answerText: "$\\frac{x}{persona}=\\frac{1,6}{11}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano."
			},
			{
				answerText: "$\\frac{persona}{11}=\\frac{x}{1,6}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano."
			},
			{
				answerText: "$\\frac{11}{persona}=\\frac{x}{1,6}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no mantiene las relaciones entre los datos respectivos a las personas y a la mano."
			}
		]
	},
	{
		questionText:
			"\nA continuaci\u00f3n, se presenta una imagen donde se indican 3 ecuaciones. A partir de esto, escoge la alternativa que exprese en lenguaje algebraico lo descrito en la imagen. Para esto, utiliza las uvas como u, sand\u00edas como s y pl\u00e1tanos como p.",
		imageURL: "C:\\Users\\paula\\Desktop\\im\u00e1genes_labcat\\frutas.svg",
		figureCaption: "Figura 1",
		node_id: 6,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "$u+s+u+u=950$\\\\$s+s+u=650$\\\\$u+p+s+u=800$",
				isCorrect: true,
				feedback: "Esta respuesta es correcta, ya que representa a las 3 ecuaciones con sus inc\u00f3gnitas respectivas."
			},
			{
				answerText: "$u+s=950$\\\\$s+u=650$\\\\$u+p+s=800$\\\\",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que no considera la cantidad correcta de veces que aparecen las inc\u00f3gnitas."
			},
			{
				answerText: "$u \\cdot s \\cdot u \\cdot u=950$\\\\$s \\cdot s \\cdot u=650$\\\\$u \\cdot p \\cdot s \\cdot u=800$\\\\",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que plantea las inc\u00f3gnitas correctamente, pero la operaci\u00f3n debe ser suma en vez de multiplicaci\u00f3n."
			},
			{
				answerText: "$6u+4s+p=2.400$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que corresponde a sumar las 3 ecuaciones, por lo que no describe la situaci\u00f3n de la imagen."
			}
		]
	},
	{
		questionText: "\n\u00bfCu\u00e1l de las siguientes afirmaciones es verdadera acerca del radio, el di\u00e1metro y la circunferencia de un c\u00edrculo?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 9,
		dificulty: "baja",
		alternatives: [
			{
				answerText: "El di\u00e1metro es el doble del radio.",
				isCorrect: true,
				feedback: "El estudiante reconoce la relaci\u00f3n dentro de los elementos mencionados en el enunciado."
			},
			{
				answerText: "El radio es siempre el doble del di\u00e1metro.",
				isCorrect: false,
				feedback: "El estudiante reconoce una relaci\u00f3n, pero asocia los terminos de manera incorrecta."
			},
			{
				answerText: "La circunferencia es siempre menor que el radio.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la diferencia de longitud entre los elementos mencionados."
			},
			{
				answerText: "La circunferencia es igual al cuadrado del radio multiplicado por pi $(\\pi \u03c0)$.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la formula del perimetro de la circunferencia."
			}
		]
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
				feedback: "El estudiante reconoce la fig\u00fara del tri\u00e1ngulo y logra aplicar correctamente la formula para obtener la hipotenusa."
			},
			{
				answerText: "6 unidades",
				isCorrect: false,
				feedback: "El estudiante no logra obtener el resultado correcto al reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa."
			},
			{
				answerText: "7 unidades",
				isCorrect: false,
				feedback: "El estudiante no logra obtener el resultado correcto al reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa."
			},
			{
				answerText: "No sabe",
				isCorrect: false,
				feedback: "El estudiante no sabe reconocer la forma del tri\u00e1ngulo y calcular la hipotenusa."
			}
		]
	},
	{
		questionText: "\nSi el punto A tiene las coordenadas $(2,5)$ y el punto B tiene las coordenadas $(-3,1)$, \u00bfCu\u00e1l es el vector que va de A a B? \n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 9,
		dificulty: "media",
		alternatives: [
			{
				answerText: "$(-4,-5)$",
				isCorrect: true,
				feedback: "El estudiante sabe como obtener el vector de movimiento asociado al enunciado."
			},
			{
				answerText: "$(-5,-4)$",
				isCorrect: false,
				feedback: "El estudiente sabe como obtener el vector de movimiento pero confunde los eje $X$ e $Y$"
			},
			{
				answerText: "$(5,4)$",
				isCorrect: false,
				feedback: "El estudiante sabe como obtener el vector de movimiento, pero no reconoce la direccion del movimiento."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como abordar el ejercicio."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tResuelve el siguiente problema considerando $\\pi = 3$. En la figura se tienen 4 circunferencias tangentes, todas del mismo tama\u00f1o y su radio mide 3 cm. \u00bfCu\u00e1l es el \u00e1rea de la\n\t\t\t\t\t\tparte ennegrecida? Considera que el lado del cuadrado mide 12 cm.\n\t\t\t\t\t\t\n\nFigura 1\n\n\n",
		imageURL: ".\\img_labcat\\circunferencias.svg",
		figureCaption: "Figura 1",
		node_id: 9,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "$36 cm^2$",
				isCorrect: true,
				feedback:
					"Al utilizar la f\u00f3rmula del \u00e1rea de la circunferencia $\\pi r^2$ y reemplazando los datos del enunciado, se obtiene 27 $cm^2$, luego este resultado se multiplica por 4,\n\t\t\t\t\t\t\t\tya que son 4 circunferencias, resultando 108 $cm^2$. Finalmente, se debe restar al \u00e1rea del cuadrado, es decir, 144 $cm^2$, teniendo como resultado final 36 $cm^2$"
			},
			{
				answerText: "$72 cm^2$",
				isCorrect: false,
				feedback: "Esta alternativa corresponde a calcular el per\u00edmetro de las circunferencias, lo cual es incorrecto, ya que el problema pregunta por el \u00e1rea."
			},
			{
				answerText: "$-24 cm^2$",
				isCorrect: false,
				feedback: "Esta alternativa es incorrecta, ya que resulta de calcular los per\u00edmetros de las circunferencias y del cuadrado para luego restarlas."
			},
			{
				answerText: "$108 cm^2$",
				isCorrect: false,
				feedback: "Esta alternativa es incorrecta, ya que corresponde al \u00e1rea de las circunferencias y el problema pide el \u00e1rea de la zona ennegrecida."
			}
		]
	},
	{
		questionText: "\n\n\t\t\t\t\t\tObtenga el area sombreada de la circunferencia inscrita en el cuadrado cuyo lado mide 4 cm ($\\pi = 3$).\n\t\t\t\t\t\t\n\nFigura 1\n\n\n",
		imageURL: "./36_2.svg",
		figureCaption: "Figura 1",
		node_id: 9,
		dificulty: "alta",
		alternatives: [
			{
				answerText: "$4 \\ cm^2$",
				isCorrect: true,
				feedback: "El estudiante reconoce la formula del \u00e1rea y la aplica con los datos entregados."
			},
			{
				answerText: "$6 \\ cm^2$",
				isCorrect: false,
				feedback: "El estudiante no logra reconocer la formula del \u00e1rea y aplica la del permimetro con los datos entregados."
			},
			{
				answerText: "Falta Informac\u00f3n.",
				isCorrect: false,
				feedback: "El estudiante no reconoce los datos entregados para responder la pregunta."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como calcular el \u00e1rea del circulo descrito."
			}
		]
	},
	{
		questionText: "\n\u00bfCu\u00e1l de las siguientes opciones describe mejor el procedimiento para calcular el \u00e1rea de un tri\u00e1ngulo?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 12,
		dificulty: "baja",
		alternatives: [
			{
				answerText: "Se mide la base y la altura del tri\u00e1ngulo, se multiplican y se divide entre dos.",
				isCorrect: true,
				feedback: "El estudiante logra reconocer y explicar el procedimiento del c\u00e1lculo del \u00e1rea del triangulo."
			},
			{
				answerText: "Se mide la base y la altura del tri\u00e1ngulo, se dividen y se multiplican por dos",
				isCorrect: false,
				feedback: "El estudiante reconoce los elementos para calcular el area pero no sabe explicar el procedimiento."
			},
			{
				answerText: "Se mide la base y la altura del tri\u00e1ngulo, se suman y se divide entre dos.",
				isCorrect: false,
				feedback: "El estudiante reconoce los elementos para calcular el area pero no sabe explicar el procedimiento."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como describir el procedimiento para el c\u00e1lculo del \u00e1rea de un triangulo."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tCamilo pidi\u00f3 a Sof\u00eda realizar los siguientes pasos.\n\t\t\t\t\t\t\nTraza una circunferencia y dos di\u00e1metros perpendiculares entre s\u00ed.\nTraza la bisectriz de cada uno de los \u00e1ngulos que forman los di\u00e1metros perpendiculares.\nMarca los puntos de intersecci\u00f3n de la bisectriz con la circunferencia.\nUne los puntos marcados.\n\n\t\t\t\t\t\t\u00bfQu\u00e9 figura obtuvo Sof\u00eda?\n\t\t\t\t\t\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 12,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "Cuadrado",
				isCorrect: true,
				feedback: "Feedback cuando seleccionan esta respuesta"
			},
			{
				answerText: "Rombo",
				isCorrect: false,
				feedback: "Feedback cuando seleccionan esta respuesta"
			},
			{
				answerText: "Rect\u00e1ngulo",
				isCorrect: false,
				feedback: "Feedback cuando seleccionan esta respuesta"
			},
			{
				answerText: "Tri\u00e1ngulo",
				isCorrect: false,
				feedback: "Feedback cuando seleccionan esta respuesta"
			}
		]
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
				feedback: "El estudiante reconoce la explicaci\u00f3n de las propiedades que deben tener los angulos en dos rectas perpendiculares."
			},
			{
				answerText:
					"\u201cPrimero, dibuja una l\u00ednea que cruce la l\u00ednea dada en cualquier punto. Luego, aseg\u00farate de que los \u00e1ngulos formados por las dos l\u00edneas sean iguales.\u201d",
				isCorrect: false,
				feedback: "El estudiante reconoce parcialmente la propiedad que deben tener los angulos entre dos rectas perpendiculares. Los angulos iguales deben ser de 90 grados."
			},
			{
				answerText:
					"\u201cPrimero, dibuja una l\u00ednea que cruce la l\u00ednea dada en cualquier punto. Luego, aseg\u00farate de que los \u00e1ngulos formados por las dos l\u00edneas sumen 180 grados.\u201d",
				isCorrect: false,
				feedback: "El estudiante reconoce parcialmente la propiedad que deben tener los angulos entre dos rectas perpendiculares. La suma de los dos angulos rectos es de 180 grados."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no reconoce el procedimiento para demostrar que dos rectas son perpendiculares."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tCamila vive en el punto verde de la ciudad y su amiga Fernanda en el punto azul. A partir de esto, \u00bfcu\u00e1l de las siguientes opciones es correcta respecto a la imagen?\n\t\t\t\t\t\t\n\nFigura 1\n\n\n",
		imageURL: ".\\img_labcat\\ciudad.svg",
		figureCaption: "Figura 1",
		node_id: 12,
		dificulty: "Bajo",
		alternatives: [
			{
				answerText: "Camila y Fernada viven a la misma altura",
				isCorrect: true,
				feedback: "El valor de la coordenada x es -1 para ambas, por lo tanto, sus casas se encuentran a la misma altura"
			},
			{
				answerText: "Camila vive a la misma altura del estadio (punto rojo)",
				isCorrect: false,
				feedback: "Camila vive m\u00e1s abajo, la casa de Fernanda se encuentra a la misma altura, ya que el valor de sus coordenadas y es la misma"
			},
			{
				answerText: "Fernanda vive m\u00e1s cerca del puerto (punto morado) que Camila",
				isCorrect: false,
				feedback: "Camila vive m\u00e1s cerca del puerto, ya que hay que moverse menos espacios para llegar"
			},
			{
				answerText: "Camila necesita mover en 4 posiciones hacia arriba para llegar a la casa de Fernanda",
				isCorrect: false,
				feedback: "Camila necesita moverse solo 3 posiciones para llegar del -1 al 2."
			}
		]
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
				answerText: "Per\u00edmetro: 8 $\\pi$ metros, \u00c1rea: 16 $\\pi$ metros cuadrados",
				isCorrect: true,
				feedback: "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn."
			},
			{
				answerText: "Per\u00edmetro: 16 $\\pi$ metros, \u00c1rea: 8 $\\pi$ metros cuadrados",
				isCorrect: false,
				feedback: "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn. Pero confunde los terminos."
			},
			{
				answerText: "Per\u00edmetro: 4 $\\pi$ metros, \u00c1rea: 4 $\\pi$ metros cuadrados",
				isCorrect: false,
				feedback: "El estudiante reconoce las formulas de per\u00edmetro y  \u00e1rea de la circunferencia del jard\u00edn. Pero confunde el concepto de radio con perimetro."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como llegar a la respuesta."
			}
		]
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
				feedback: "El estudiante logra modelar el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos."
			},
			{
				answerText: "$\\overrightarrow{\\nu}:(A-C,B-D)$",
				isCorrect: false,
				feedback:
					"El estudiante no logra modelar correctamente el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos al no tener en concideraci\u00f3n la posici\u00f3n de estos."
			},
			{
				answerText: "$\\overrightarrow{\\nu}:(C-B,D-A)$",
				isCorrect: false,
				feedback:
					"El estudiante no logra modelar correctamente el c\u00e1lculo para obtener las coordenadas del vector de movimiento entre 2 puntos al no saber relaci\u00f3nar las coordenas $X$ e $Y$ entre los puntos."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como abordar la pregunta."
			}
		]
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
				feedback: "El estudiante logra modelar el movimiento representado por el vector de desplazamiento al punto mencionado."
			},
			{
				answerText: "$(4,4)$",
				isCorrect: false,
				feedback: "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en el eje $X$."
			},
			{
				answerText: "$(2,0)$",
				isCorrect: false,
				feedback: "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en el eje $Y$."
			},
			{
				answerText: "$(4,0)$",
				isCorrect: false,
				feedback: "El estudiante logra modelar parcialmente el movimiento representado por el vector de desplazamiento, al confundir la direcci\u00f3n del desplazamiento en ambos ejes."
			}
		]
	},
	{
		questionText: '\n"Corresponde a la linea imaginaria que divide al planeta en dos partes iguales".\n',
		imageURL: "null",
		figureCaption: "null",
		node_id: 11,
		dificulty: "baja",
		alternatives: [
			{
				answerText: "Linea del Ecuador.",
				isCorrect: true,
				feedback: "El estudiante identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador."
			},
			{
				answerText: "Paralelo.",
				isCorrect: false,
				feedback: "El estudiante no identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador."
			},
			{
				answerText: "Meridiano.",
				isCorrect: false,
				feedback: "El estudiante no identifica correctamente que la definici\u00f3n descrita corresponde a la l\u00ednea del Ecuador."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no conoce la definici\u00f3n descrita."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tNico desea cambiar la pantalla de su l\u00e1mpara y cuando va a comprarla se da cuenta que estas se miden seg\u00fan los per\u00edmetros de las bases. Por lo que, volvi\u00f3 a su casa a medir su\n\t\t\t\t\t\tl\u00e1mpara y anot\u00f3 las siguientes medidas de la imagen.\n\t\t\t\t\t\t\n\nFigura 1\n\n\n",
		imageURL: ".\\img_labcat\\l\u00e1mpara.svg",
		figureCaption: "Figura 1",
		node_id: 11,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "El per\u00edmetro de la base superior es 150 cm y el de la base inferior es 300 cm.",
				isCorrect: true,
				feedback: "Al utilizar la f\u00f3rmula de per\u00edmetro $\\pir^2$, se tiene para la base superior $3\\cdot25^2=150$ y para la base inferior $3\\cdot50^2=300$"
			},
			{
				answerText: "El per\u00edmetro de la base superior es 75 cm y el de la inferior 150 cm.",
				isCorrect: false,
				feedback: "Esta respuesta es err\u00f3nea, ya que corresponde a calcular el per\u00edmetro, pero sin multiplicar por 2."
			},
			{
				answerText: "El per\u00edmetro de la base superior es 1.875 cm y el de la inferior 7.500 cm.",
				isCorrect: false,
				feedback: "Esta respuesta no es correcta, ya que corresponde a utilizar el \u00e1rea en vez del per\u00edmetro."
			},
			{
				answerText: "El per\u00edmetro de la base superior es 150 $cm^2$ y el de la base inferior es 300 $cm^2$.",
				isCorrect: false,
				feedback: "Esta respuesta no es correcta, porque si bien los n\u00fameros son correctos, las unidades de medida corresponden a dos dimensiones, pero el per\u00edmetro es en una."
			}
		]
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
				feedback: "El estudiante reconoce el cambio en las coordenadas en los ejes $X$ e $Y$."
			},
			{
				answerText: "Llegar\u00edas a la posici\u00f3n (4,3).",
				isCorrect: false,
				feedback: "El estudiante reconoce el cambio en las coordenadas, pero confunde los ejes $X$ e $Y$."
			},
			{
				answerText: "Llegar\u00edas a la posici\u00f3n (7,7).",
				isCorrect: false,
				feedback: "El estudiante no reconoce el cambio en las coordenadas y lo confunde con el movimiento vectorial en el plano."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como abordar esta respuesta."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tA continuaci\u00f3n se presenta un gr\u00e1fico el cual corresponde a la cantidad de estudiantes de ciertos curso. Identifica si la(s) siguiente(s) opci\u00f3n(es) es(son) correcta(s).\\\\\n    I) El total de cursos es 10\\\\\n    II) La frecuencia absoluta corresponde al n\u00famero de alumnos\\\\\n    III) Los datos son de tipo cuantitativo\\\\\n\t\t\t\t\t\t\n\nFigura 1\n\n\n",
		imageURL: "C:\\Users\\paula\\Desktop\\im\u00e1genes_labcat\\grafico_cursos.svg",
		figureCaption: "Figura 1",
		node_id: 17,
		dificulty: "Bajo",
		alternatives: [
			{
				answerText: "I y III",
				isCorrect: true,
				feedback:
					"Las afirmaciones I y III son correctas, ya que al sumar las cantidades que alcanza cada barra, se obtiene 10. Por otro lado, los datos de tipo cuantitativo son los que corresponden a variables num\u00e9ricas y por ende se pueden ordenar de cierta manera"
			},
			{
				answerText: "Solo I",
				isCorrect: false,
				feedback:
					"Esta alternativa no es correcta, ya que la afirmaci\u00f3n III tambi\u00e9n es correcta. Recuerda que los datos de tipo cuantitativo son los que corresponden a variables num\u00e9ricas y por ende se pueden ordenar de cierta manera"
			},
			{
				answerText: "I y II",
				isCorrect: false,
				feedback: "La afirmaci\u00f3n I es correcta, pero la II no lo es, ya que la frecuencia absoluta corresponde a la cantidad de cursos que tiene ese n\u00famero de alumnos"
			},
			{
				answerText: "II y III",
				isCorrect: false,
				feedback:
					"La afirmaci\u00f3n III es correcta, pero la afirmaci\u00f3n II no lo es, ya que la frecuencia absoluta corresponde a la cantidad de cursos que tiene ese n\u00famero de alumno"
			}
		]
	},
	{
		questionText:
			"\n\u201cSe realiz\u00f3 un experimento en el que se lanz\u00f3 un dado equilibrado 600 veces. Los resultados se registraron en una tabla de frecuencias.\u00bfc\u00f3mo analizar\u00edas la probabilidad de que el n\u00famero 3 aparezca en el pr\u00f3ximo lanzamiento asociado a los resultados obtenidos anteriormente?. \n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 17,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "Analizar\u00eda la probabilidad como la frecuencia relativa de obtener \u20183\u2019.",
				isCorrect: true,
				feedback: "El estudiante reconoce la probabilidad en funci\u00f3n de las frecuencias."
			},
			{
				answerText: "Analizar\u00eda la probabilidad como 1/6, ya que un dado tiene 6 caras y se pregunta por un resultado.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la probabilidad en el contexto en funci\u00f3n de las frecuencias."
			},
			{
				answerText: "Analizar\u00eda la probabilidad como 1/5, ya que solo estamos interesados en si obtenemos \u20183\u2019 o no.",
				isCorrect: false,
				feedback:
					"El estudiante no reconoce la probabilidad en el contexto en funci\u00f3n de las frecuencias. Adem\u00e1s, en t\u00e9rminos te\u00f3ricos no sabe plantear las probabilidades."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como responder la pregunta."
			}
		]
	},
	{
		questionText: "\n\u00bfEn cu\u00e1l de las siguientes situaciones es mejor utilizar un gr\u00e1fico circular?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 20,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "Cuando se quiere representar el porcentaje de votos en una elecci\u00f3n.",
				isCorrect: true,
				feedback: "Este gr\u00e1fico es el que mejor representa a la muestra, ya que utiliza porcentajes, los cuales se usan de mejor manera en este tipo de gr\u00e1fico."
			},
			{
				answerText: "Cuando se quiere representar el n\u00famero de participantes de un evento",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1."
			},
			{
				answerText: "Cuando se quiere representar la cantidad de notas azules de un curso",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1."
			},
			{
				answerText: "Cuando se quiere representar la cantidad de hijos de 50 familias",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta, ya que para utilizar gr\u00e1ficos circulares se debe representar el c\u00edrculo completo, es decir, un 100\\% o el 1."
			}
		]
	},
	{
		questionText:
			"\nUsted se encuentra junto a su amigo y tiene una bolsa con 4 dulces rojos, 3 dulces azules y 2 dulces verdes. \u00bfC\u00f3mo le explicar\u00eda a su amigo que es lo m\u00e1s probable que ocurra cuando saque el siguiente dulce?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 20,
		dificulty: "Baja",
		alternatives: [
			{
				answerText: "Dado que mayormente hay dulces rojos, es m\u00e1s probable que salga este.",
				isCorrect: true,
				feedback: "El estudiante reconoce que la categor\u00eda con mayor frecuencia absoluta es la que tiene mayor probabilidad de salir."
			},
			{
				answerText: "No existe forma de saber cu\u00e1l dulce es m\u00e1s probable que salga.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la relaci\u00f3n entre las frecuencias y las probabilidades."
			},
			{
				answerText: "Como son 3 dulces, todos son igual de probables que salgan.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la relaci\u00f3n entre las frecuencias y las probabilidades. Confunde con la cantidad de categor\u00edas."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como abordar la pregunta."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tLa siguiente tabla de frecuencias registra las frecuencias absolutas, $n_1$, $n_2$ y $n_3$, asociadas a cada una de las categor\u00edas de la variable cuantitativa en estudio,\n\t\t\t\t\t\t$C_1$, $C_2$ y $C_3$, respectivamente. $\\\\$ $\\begin{array}{|c|c|} \\hline\\textbf{Variable} & \\textbf{f} \\\\ \\hline C_1 & n_1 \\\\ \\hline C_2 & n_2 \\\\ \\hline C_3 & n_3 \\\\ \\hline\n\t\t\t\t\t\t\\end{array} $  $\\\\$ A partir de la tabla de frecuencias, \u00bfCu\u00e1l de las siguientes expresiones permite determinar la frecuencia relativa, expresada como fracci\u00f3n, para la categor\u00eda C2?\n\t\t\t\t\t\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 18,
		dificulty: "Alta",
		alternatives: [
			{
				answerText: "$\\dfrac{n_2}{n_1 +n_2 + n_3}$",
				isCorrect: true,
				feedback: "El estudiante reconoce como calcular la frecuencia relativa como fracci\u00f3n con los datos entregados."
			},
			{
				answerText: "\\dfrac{n_2}{3}",
				isCorrect: false,
				feedback: "El estudiante no sabe como calcular la frecuencia relativa confundiendo los t\u00e9rminos asociados a esta."
			},
			{
				answerText: "$\\dfrac{C_2}{3}$",
				isCorrect: false,
				feedback: "El estudiante no sabe como calcular la frecuencia relativa confundiendo los t\u00e9rminos asociados a esta."
			},
			{
				answerText: "No sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como responder la pregunta."
			}
		]
	},
	{
		questionText:
			"\n\n\t\t\t\t\t\tUnos de sus compa\u00f1eros de curso le propone realizar un estudio de con respecto a las notas generales de sus compa\u00f1eros. Saben que tard\u00edo realizar una encuesta a todos los\n\t\t\t\t\t\tparticipantes del curso, por lo que deciden expresar de manera general la tabla de frecuencias que obtendr\u00e1n al realizar el estudio y quedar\u00eda de la siguiente forma: $\\\\$ \n\t\t\t\t\t\t$\\begin{array}{|c|c|} \\hline \\textbf{Nota} & \\textbf{frecuencia absoluta} \\\\ \\hline [1 - 2 [& f_1 \\\\ \\hline [2 - 3[ & f_2 \\\\ \\hline [3 - 4[ & f_3 \\\\ \\hline [4 - 5[ & f_4 \\\\\n\t\t\t\t\t\t\\hline [5 - 6] & f_5 \\\\ \\hline \\end{array}$ $\\\\$ Si el plan de ustedes es hacer distintos an\u00e1lisis con la informaci\u00f3n, \u00bfCu\u00e1l/es de la/s siguiente/es afirmaciones es correcta?\n\t\t\t\t\t\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 18,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "La frecuencia relativa acumulada hasta el intervalo de nota  [ 3 - 4 [ se puede obtener como: $$\\dfrac{f_1+f_2+f_3}{f_1+f_2+f_3+f_4+f_5+f_6}$$",
				isCorrect: false,
				feedback: "El estudiante reconoce, en el contexto entregado, la forma de obtener la frecuencia relativa acumulada en funci\u00f3n de las frecuencias absolutas de todos los intervalos."
			},
			{
				answerText: "La frecuencia de los estudiantes que tiene m\u00e1s de un 5 de nota es: $$ f_5+f_6$$",
				isCorrect: false,
				feedback: "El estudiante reconoce cu\u00e1les son las frecuencias absolutas a acumular en funci\u00f3n de lo que se le solicita, reconociendo los intervalos asociados."
			},
			{
				answerText: "La frecuencia relativa del intervalo [ 1 - 2 [ es:\n\t\t\t\t\t\t\t$$\\dfrac{f_1}{f_6}$$",
				isCorrect: false,
				feedback: "El estudiante no reconoce como obtener la frecuencia relativa en un intervalo en especifico con las frecuencias absolutas."
			},
			{
				answerText: "Todas las anteriores.",
				isCorrect: false,
				feedback: "El estudiante no reconoce la existencia de una respuesta incorrecta."
			}
		]
	},
	{
		questionText:
			"\nNico lanz\u00f3 un dado dos veces y en ambos lanzamientos obtuvo el n\u00famero 3, por lo que piensa que al lanzarlo una tercera vez obtendr\u00e1 de nuevo un 3. A partir de esto, \u00bfcu\u00e1l de las siguientes conclusiones es correcta?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 18,
		dificulty: "Alta",
		alternatives: [
			{
				answerText: "Al realizar el tercer lanzamiento puede que salga cualquier numero desde el 1 al 6, ya que todos los n\u00fameros tienen la misma probabilidad de salir.",
				isCorrect: true,
				feedback:
					"El dado tiene 6 posibilidades, donde todas tienen la misma probabilidad de salir, es decir, $\\frac{1}{6}$, por lo que en este nuevo lanzamiento puede salir cualquier numero, ya que el dado no esta cargado."
			},
			{
				answerText: "En el tercer lanzamiento saldr\u00e1 cualquier numero, menos el  3 porque ya ha salido muchas veces antes.",
				isCorrect: false,
				feedback:
					"El dado tiene 6 posibles resultados, donde cada lanzamiento es independiente uno de otro, por lo que el hecho de que el 3 ya haya salido, no significa que no pueda salir m\u00e1s."
			},
			{
				answerText: "En el tercer lanzamiento volver\u00e1 a salir el 3, porque al haber salido dos veces antes significa que siempre saldr\u00e1.",
				isCorrect: false,
				feedback:
					"Esta alternativa no es correcta, ya que es posible que un numero salga repetidas veces, sin embargo, en el enunciado no se indica que el dado este cargado, por lo que no se puede asumir que siempre saldr\u00e1 este resultado."
			},
			{
				answerText: "Se puede concluir que cada n\u00famero saldr\u00e1 siempre 2 veces porque todos tienen la misma probabilidad en el dado.",
				isCorrect: false,
				feedback:
					"Esta respuesta no es correcta, ya que si bien todos los n\u00fameros tienen la misma probabilidad de salir, no es posible concluir que siempre saldr\u00e1 dos veces cada n\u00famero."
			}
		]
	},
	{
		questionText:
			"\nEn una encuesta realizada a 100 estudiantes sobre su color favorito de 6 opciones disponibles, se encontr\u00f3 que el color azul fue elegido 25 veces. Si se realiza la misma encuesta a otro grupo de 100 estudiantes, \u00bfCu\u00e1l de las siguientes afirmaciones es m\u00e1s probable que sea cierta?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 19,
		dificulty: "Baja",
		alternatives: [
			{
				answerText: "No se puede predecir cu\u00e1ntas veces ser\u00e1 elegido el color azul.",
				isCorrect: true,
				feedback: "El estudiante reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta."
			},
			{
				answerText: "El color azul ser\u00e1 elegido exactamente 25 veces.",
				isCorrect: false,
				feedback: "El estudiante no reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta."
			},
			{
				answerText: "El color azul ser\u00e1 elegido menos de 25 veces.",
				isCorrect: false,
				feedback: "El estudiante no reconoce que, al hablar de respuesta, no hay forma de saber como ser\u00e1 la distribuci\u00f3n en una nueva encuesta."
			},
			{
				answerText: "No Sabe.",
				isCorrect: false,
				feedback: "El estudiante no sabe como responder la pregunta."
			}
		]
	},
	{
		questionText:
			"\nEn un curso se quiere realizar un experimento, para lo cual se gira un trompo que tiene la forma de un hex\u00e1gono regular y la profesora les pregunta \u00bfCu\u00e1l es la probabilidad de que salga el color rojo?\n",
		imageURL: "null",
		figureCaption: "null",
		node_id: 19,
		dificulty: "Media",
		alternatives: [
			{
				answerText: "$\\frac{1}{6}$",
				isCorrect: true,
				feedback: "Esta alternativa es correcta, ya que un hex\u00e1gono tiene 6 lados y como es regular cada color tiene la misma probabilidad de salir."
			},
			{
				answerText: "$\\frac{1}{7}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir."
			},
			{
				answerText: "$\\frac{2}{7}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir."
			},
			{
				answerText: "$\\frac{2}{6}$",
				isCorrect: false,
				feedback: "Esta alternativa no es correcta porque un hex\u00e1gono regular tiene 6 lados, es decir, 6 colores y como es regular cada color tiene la misma probabilidad de salir."
			}
		]
	}
];

// Esta función añade las preguntas y alternativas a la base de datos
export async function seedQuestions() {
	for (let questionData of initialData) {
		let question = await Question.create({
			questionText: questionData.questionText,
			imageURL: questionData.imageURL,
			figureCaption: questionData.figureCaption,
			node_id: questionData.node_id,
			dificulty: questionData.dificulty
		});

		//@ts-ignore
		for (let alternativeData of questionData.alternatives) {
			await Alternative.create({
				...alternativeData,
				//@ts-ignore
				questionId: question.getDataValue("id")
			});
		}
	}
}

// Llama a la función seedDatabase después de sincronizar
