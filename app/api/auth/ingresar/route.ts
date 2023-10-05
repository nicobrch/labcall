import { signInUser } from "@/backend/services/user.service";
import { ValidationFailedError } from "@/backend/error/customErrors";
import { NextRequest, NextResponse } from "next/server";
import { validate, clean } from "rut.js";

export async function POST(request: NextRequest) {
  // UTILIZA signInUser. El servicio ya valida por si mismo
  // Revisa su documentación para ver cómo trabaja los casos donde las credenciales son inválidas (por ejemplo)

  try {
    const {rut, password} = await request.json()
    const user = await signInUser({rut, password})
    return NextResponse.json(
      {
        message: "Inicio de sesión exitoso.",
        user,
      },
      {
        status: 200,
      }
    );
  } catch (error: ValidationFailedError | any) {
    if (error.name === "ValidationFailedError") {
      // No se pudo validar el usuario, entregar mensaje de error.
      return NextResponse.json(
        {
          message: error.message,
          // Error.message contiene ya el error para cada caso
        },
        {
          status: 500,
        }
      );
    } else {
      // Algún otro error que no es propio de ValidationFailedError
      return NextResponse.json(
        {
          message: "Ocurrió un error al procesar la solicitud.",
        },
        {
          status: 500,
        }
      );
    }
  }
}
