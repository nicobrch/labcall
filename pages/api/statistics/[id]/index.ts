import {NextApiRequest, NextApiResponse} from "next";

export type Pregunta = {
    id: number, // numero incremental
    text: string, // texto lorem ipsum hasta 10 palabras
    type: string // eje de la pregunta
    success: number, // numero aleatorio entre 1 y 10
    failure: number, // numero aleatorio entre 1 y 10
    totalresponses: number // suma de success y failure
}

export type CursoPregunta = {
    id: string,
    pregunta: Pregunta[],
}

const Preguntas : Pregunta[] = [
    {
        id: 1,
        text: "¿Te gusta la pizza?",
        type: "Geometria",
        success: 7,
        failure: 3,
        totalresponses: 10
    },
    {
        id: 2,
        text: "¿Has viajado al extranjero?",
        type: "Geometria",
        success: 5,
        failure: 5,
        totalresponses: 10
    },
    {
        id: 3,
        text: "¿Prefieres el café o el té?",
        type: "Numeros",
        success: 8,
        failure: 2,
        totalresponses: 10
    },
    {
        id: 4,
        text: "¿Practicas algún deporte?",
        type: "Numeros",
        success: 4,
        failure: 6,
        totalresponses: 10
    }
];

const cursoPreguntas : CursoPregunta[] = [
    {
        id: "A-1",
        pregunta: Preguntas
    },
    {
        id: "A-2",
        pregunta: Preguntas
    },
    {
        id: "B-1",
        pregunta: Preguntas
    },
    {
        id: "B-2",
        pregunta: Preguntas
    }
];

export default function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method === "GET"){
        res.status(200).json(Preguntas);
    }
}
