import { validate } from "rut.js";
import { ValidationFailedError } from "../error/customErrors";
import { IBulkNodesToUser, ISignInUser, IUser } from "../interfaces/user";
import UserRep from "../repositories/user.rep";
import NodeRep from "../repositories/node.rep";
import UserNodeRep from "../repositories/usernode.rep";

const User = new UserRep();
const nodeRep = new NodeRep();
const userNode = new UserNodeRep();

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
    const userResponse = await User.findOne({
      rut,
    });
    if (!userResponse) {
      throw new ValidationFailedError(
        "El rut ingresado no se encuentra registrado"
      );
    }
    // const isValidPassword = await compare(password, userResponse.getDataValue('password'));

    const isValidPassword = userResponse.password === password;

    if (!isValidPassword) {
      throw new ValidationFailedError("La contraseña ingresada es incorrecta");
    }
    const user = userResponse;
    delete user.password;
    return {
      ...userResponse,
    };
  } catch (error) {
    throw error;
  }
};

export const addNodesToUser = async (input: IBulkNodesToUser) => {
  try {
    console.log(input);

    const { users, nodes } = input;
    users.forEach(async (id) => {
      const user = await User.findOne({
        id,
      });
      if (!user) {
        throw new ValidationFailedError(
          "El usuario no se encuentra registrado"
        );
      }
      const idUser = user.id;
      nodes.map(async (node) => {
        const nodeResponse = await nodeRep.getNodeByAxisAbility(
          node.axis,
          node.ability
        );

        const idNode = nodeResponse.id;
        await userNode.create({
          node_id: idNode,
          user_id: Number(idUser) || 0,
        });
      });
    });
  } catch (error) {
    throw error;
  }
};


export const addStudent = async (
  rut: string,
  firstname: string,
  lastname1: string,
  lastname2: string,
  email: string,
  password: string,
  type: string,
  active: boolean,
  course_id: number, 
) => {
  try {
    await User.create({
      rut,
      firstname,
      lastname1,
      lastname2,
      email,
      password,
      type,
      active,
      course_id,
    });
  } catch (error) {
    throw error;
  }
}