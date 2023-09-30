// errors/customErrors.ts

// Enumeración de códigos de estado para los errores personalizados
export enum CustomErrorCode {
  BadRequest = 400,
  Unauthorized = 401,
  Forbidden = 403,
  NotFound = 404,
  ValidationFailed = 422,
  TooManyRequests = 429,
  InternalServerError = 500,
}

export enum CustoErrorStatus {
  warning = "warning",
  error = "error",
}

// Interfaz para los errores personalizados
interface CustomErrorProps {
  message: string;
  statusCode: CustomErrorCode;
  status?: CustoErrorStatus;
}

// Clase base para errores personalizados
export class CustomError extends Error {
  statusCode: number; // Definimos la propiedad 'statusCode' en la clase
  status?: CustomErrorProps["status"];

  constructor({ message, statusCode, status }: CustomErrorProps) {
    super(message);
    this.name = this.constructor.name;
    this.statusCode = statusCode;
    this.status = status;
  }
}

// Ejemplo de errores personalizados con casos de uso

// Error 400: Bad Request - Cuando los datos proporcionados por el cliente son inválidos o están mal formateados.
// Ejemplo: Faltan parámetros obligatorios en la solicitud.
export class BadRequestError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.BadRequest });
  }
}

// Error 401: Unauthorized - Cuando el cliente no está autorizado para acceder al recurso o realizar la acción solicitada.
// Ejemplo: El cliente no proporcionó credenciales válidas para autenticarse.
export class UnauthorizedError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.Unauthorized });
  }
}

// Error 403: Forbidden - Cuando el cliente está autenticado, pero no tiene permisos para acceder al recurso o realizar la acción solicitada.
// Ejemplo: El cliente no tiene permisos para realizar una acción específica.
export class ForbiddenError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.Forbidden });
  }
}

// Error 404: Not Found - Cuando el recurso solicitado no existe en el servidor.
// Ejemplo: La ruta o el recurso solicitado no existe en la API.
export class NotFoundError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.NotFound });
  }
}

// Error 422: Unprocessable Entity - Cuando la solicitud no se pudo procesar debido a errores de validación o condiciones previas no cumplidas.
// Ejemplo: Los datos proporcionados no pasan las validaciones requeridas.
export class ValidationFailedError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.ValidationFailed });
  }
}

// Error 429: Too Many Requests - Cuando el cliente ha realizado demasiadas solicitudes en un período de tiempo determinado.
// Ejemplo: El cliente ha superado el límite de tasa establecido para las solicitudes.
export class TooManyRequestsError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.TooManyRequests });
  }
}

// Error 500: Internal Server Error - Cuando ocurre un error interno en el servidor que impide manejar la solicitud.
// Ejemplo: Un error inesperado en el servidor que no está relacionado con los datos proporcionados por el cliente.
export class InternalServerError extends CustomError {
  constructor(message: string) {
    super({ message, statusCode: CustomErrorCode.InternalServerError });
  }
}
