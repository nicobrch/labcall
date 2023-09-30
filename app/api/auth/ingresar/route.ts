import { signInUser } from "@/backend/services/user.service";
import { NextRequest, NextResponse } from "next/server";
import { validate, clean } from "rut.js";

export async function POST(request: NextRequest) {
  const { rut } = await request.json();
  // UTILIZA signInUser. El servicio ya valida por si mismo
  // Revisa su documentación para ver cómo trabaja los casos donde las credenciales son inválidas (por ejemplo)

  const rutIsValid: boolean = validate(rut);
  if (!rutIsValid) {
    // Caso 1: Rut no cumple formato (está mal escrito o no existe)
    return NextResponse.json(
      {
        message: "Rut escrito incorrectamente. Por favor intente nuevamente.",
      },
      {
        status: 500,
      }
    );
  } else if (clean(rut) != "204042829") {
    // Caso 2: Credenciales inválidas (rut o contraseñas incorrectos en la bdd)
    return NextResponse.json(
      {
        message:
          "Credenciales inválidas. Por favor revise su usuario o contraseña e intente nuevamente.",
      },
      {
        status: 500,
      }
    );
  }
  return NextResponse.json(
    {
      message: rut,
    },
    {
      status: 200,
    }
  );
}
