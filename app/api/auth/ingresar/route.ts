import { NextRequest, NextResponse } from "next/server";
import { validate } from "rut.js";

export async function POST(request: NextRequest) {
    const { rut } = await request.json()
    const rutIsValid : boolean = validate(rut)
    if (rutIsValid){
        // rut valido
        return NextResponse.json(
            {
                message: rut
            },
            {
                status: 200
            }
        )
    } else {
        return NextResponse.json(
            {
                message: "Rut inválido. Por favor intente nuevamente."
            },
            {
                status: 500
            }
        )
    }
}