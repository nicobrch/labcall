import {NextApiRequest, NextApiResponse} from "next";

export type CursoItem = {
    id: string, // numero incremental
    updated_at: string // una fecha, incluye mes, dia, año y hora en formato español latino
}

const Items : CursoItem[] = [
    {
        id: "A-1",
        updated_at: "03/10/2023 14:30:45"
    },
    {
        id: "A-2",
        updated_at: "12/08/2023 09:15:22"
    },
    {
        id: "B-1",
        updated_at: "07/05/2023 18:42:10"
    },
    {
        id: "B-2",
        updated_at: "20/11/2023 07:55:30"
    }
];


export default function handler(req: NextApiRequest,res: NextApiResponse) {
    if (req.method === "GET"){
        res.status(200).json(Items);
    }
}
