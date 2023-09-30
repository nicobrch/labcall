import { validate } from "rut.js";
import { ValidationFailedError } from "../error/customErrors";
import { User } from "../loaders/sequelize";
import { ISignInUser, IUser } from "../interfaces/user";

/**
 * Inicia la sesión de un usuario validando su RUT y contraseña.
 *
 * @param signInData - Las credenciales de inicio de sesión del usuario.
 * @param {string} signInData.rut - El RUT (Rol Único Tributario, identificación chilena) del usuario.
 * @param {string} signInData.password - La contraseña del usuario.
 *
 * @returns {Promise<IUser>} Devuelve una promesa que se resuelve con los datos del usuario si el inicio de sesión es exitoso.
 *
 * @throws {ValidationFailedError} Lanza un error si el formato del RUT es inválido, el usuario no se encuentra o la contraseña es incorrecta.
 */

export const signInUser = async (signInData: ISignInUser) => {
  try {
    const { rut, password } = signInData;

    if (!validate(rut)) {
      throw new ValidationFailedError("El formato del rut es inválido");
    }
    const userResponse = await User.findByPk(rut);
    if (!userResponse) {
      throw new ValidationFailedError(
        "El rut ingresado no se encuentra registrado"
      );
    }
    // const isValidPassword = await compare(password, userResponse.getDataValue('password'));

    const isValidPassword = userResponse.getDataValue("password") === password;

    if (!isValidPassword) {
      throw new ValidationFailedError("La contraseña ingresada es incorrecta");
    }
    const user = userResponse.toJSON();
    delete user.password;
    return {
      ...userResponse,
    };
  } catch (error) {
    throw error;
  }
};
