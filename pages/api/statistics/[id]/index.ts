import { NextApiRequest, NextApiResponse } from "next";

export type Pregunta = {
  id: number; // numero incremental
  text: string; // pregunta
  type: string; // eje de la pregunta
  success: number; // numero aleatorio entre 1 y 10
  failure: number; // numero aleatorio entre 1 y 10
  totalresponses: number; // suma de success y failure
};

export type CursoPregunta = {
  id: string;
  pregunta: Pregunta[];
};

const Preguntas: Pregunta[] = [
  {
    id: 1,
    type: "Geometria - Representar",
    text: "Nico y Dani están discutiendo sobre la siguiente afirmación 'mientras más alta es una persona, más masa tiene'. Nico cree que la afirmación es verdadera, mientras que Dani cree que es incorrecta. A partir de esto, ¿cuál de las siguientes alternativas es correcta?",
    success: 7,
    failure: 3,
    totalresponses: 10,
  },
  {
    id: 2,
    type: "Geometria - Resolver problemas",
    text: "A continuación, se muestra el desarrollo de un problema realizado por Martín, el cual contiene un error. A partir de esto, ¿cuál de las siguientes alternativas es correcta?\\\\ 'La siguiente situación corresponde a una relación inversa: En la construcción de un edificio si se trabaja con 200 obreros, la obra tiene fecha para 12 meses, ¿cuántos meses demorará la obra si solo se dispone de 50 obreros?'\\\\ Paso 1: plantear la ecuación $\\\\frac{200}{12}=\\\\frac{50}{x}$\\\\ Paso 2: calcular la incógnita $x=\\\\frac{50 \\\\cdot 12}{200}$\\\\ Paso 3: concluir $x=3$",
    success: 5,
    failure: 5,
    totalresponses: 10,
  },
  {
    id: 3,
    type: "Geometria - Argumentar y comunicar",
    text: "Para un concierto se dispone de 3 tipos de entradas: 'Cancha general' a 4.500, 'Cancha Vip' a 5.500 y 'Platea' a 3.500. ¿Qué expresión algebraica permite determinar los ingresos totales por la venta de las entradas?",
    success: 8,
    failure: 2,
    totalresponses: 10,
  },
  {
    id: 4,
    type: "Geometria - Modelar",
    text: "pregunta",
    success: 1,
    failure: 9,
    totalresponses: 10,
  },
  {
    id: 5,
    type: "Numeros - Representar",
    text: "pregunta",
    success: 8,
    failure: 2,
    totalresponses: 10,
  },
  {
    id: 6,
    type: "Numeros - Resolver problemas",
    text: "pregunta",
    success: 4,
    failure: 6,
    totalresponses: 10,
  },
  {
    id: 7,
    type: "Numeros - Argumentar y comunicar",
    text: "pregunta",
    success: 2,
    failure: 8,
    totalresponses: 10,
  },
  {
    id: 8,
    type: "Numeros - Modelar",
    text: "pregunta",
    success: 3,
    failure: 7,
    totalresponses: 10,
  },
  {
    id: 9,
    type: "Algebra - Representar",
    text: "pregunta",
    success: 8,
    failure: 2,
    totalresponses: 10,
  },
  {
    id: 10,
    type: "Algebra - Resolver problemas",
    text: "pregunta",
    success: 1,
    failure: 9,
    totalresponses: 10,
  },
  {
    id: 11,
    type: "Algebra - Argumentar y comunicar",
    text: "pregunta",
    success: 6,
    failure: 4,
    totalresponses: 10,
  },
  {
    id: 12,
    type: "Algebra - Modelar",
    text: "pregunta",
    success: 3,
    failure: 7,
    totalresponses: 10,
  },
  {
    id: 13,
    type: "Probabilidades - Representar",
    text: "pregunta",
    success: 8,
    failure: 2,
    totalresponses: 10,
  },
  {
    id: 14,
    type: "Probabilidades - Resolver problemas",
    text: "pregunta",
    success: 4,
    failure: 6,
    totalresponses: 10,
  },
  {
    id: 15,
    type: "Probabilidades - Argumentar y comunicar",
    text: "pregunta",
    success: 2,
    failure: 8,
    totalresponses: 10,
  },
  {
    id: 16,
    type: "Probabilidades - Modelar",
    text: "pregunta",
    success: 3,
    failure: 7,
    totalresponses: 10,
  },
  {
    id: 17,
    type: "Medicion - Representar",
    text: "pregunta",
    success: 3,
    failure: 7,
    totalresponses: 10,
  },
  {
    id: 18,
    type: "Medicion - Resolver problemas",
    text: "pregunta",
    success: 8,
    failure: 2,
    totalresponses: 10,
  },
  {
    id: 19,
    type: "Medicion - Argumentar y comunicar",
    text: "pregunta",
    success: 1,
    failure: 9,
    totalresponses: 10,
  },
  {
    id: 20,
    type: "Medicion - Modelar",
    text: "pregunta",
    success: 6,
    failure: 4,
    totalresponses: 10,
  },
];

const cursoPreguntas: CursoPregunta[] = [
  {
    id: "A-1",
    pregunta: Preguntas,
  },
  {
    id: "A-2",
    pregunta: Preguntas,
  },
  {
    id: "B-1",
    pregunta: Preguntas,
  },
  {
    id: "B-2",
    pregunta: Preguntas,
  },
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    res.status(200).json(Preguntas);
  }
}
