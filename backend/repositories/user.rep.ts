import {
  CreateOptions,
  DestroyOptions,
  FindOptions,
  WhereOptions,
} from "sequelize";
import sequelize, { User as Entity } from "../loaders/sequelize";
import { InternalServerError, NotFoundError } from "../error/customErrors";
import {
  ICreateUser as ICreate,
  IUpdateUser as IUpdate,
  IUser as I,
} from "../interfaces/user";

/**
 * Repositorio para interactuar con la entrutad.
 */
export default class UserRep {
  /**
   * Constructor de la clase.
   * No requiere parámetros, ya que no realiza ninguna operación específica en el constructor.
   */
  constructor() {
    // Constructor vacío o con lógica de inicialización (si es necesario).
  }

  public Model = Entity;
  /**
   * Obtiene todos los elementos del repositorio disponibles en la base de datos.
   * @param {FindOptions} options - Opciones adicionales para la búsqueda.
   * @returns {Promise<I[]>} Promise que se resuelve con un arreglo de elementos.
   */
  public async getAll(options?: FindOptions): Promise<I[]> {
    const elements = await Entity.findAll(options);
    return elements.map((element) => element.toJSON());
  }

  /**
   * Busca un elemento por su rut en la base de datos.
   * @param {number} rut - rut del elemento a buscar.
   * @param {FindOptions} options - Opciones adicionales para la búsqueda.
   * @returns {Promise<I>} Promise que se resuelve con el elemento encontrado.
   * @throws {NotFoundError} Si el elemento no existe en la base de datos.
   */
  public async findByPk(id: I["id"], options?: FindOptions): Promise<I> {
    const element = await Entity.findByPk(id, options);
    if (!element) {
      throw new NotFoundError("Elemento no encontrado en la base de datos.");
    }
    return element?.toJSON();
  }

  async findOne(
    where: WhereOptions<I>,
    options?: FindOptions
  ): Promise<I | undefined> {
    const element = await Entity.findOne({
      where,
      ...options,
    });

    return element?.toJSON();
  }

  /**
   * Crea un nuevo elemento en la base de datos.
   * @param {ICreate} values - Valores del elemento a crear.
   * @param {CreateOptions} options - Opciones adicionales para la creación.
   * @throws {InternalServerError} Si ocurre un error al crear el elemento.
   */
  public async create(values: ICreate, options?: CreateOptions): Promise<void> {
    const created = await Entity.create(values, options);
  }

  /**
   * Elimina un elemento por su rut de la base de datos.
   * @param {number} rut - rut del elemento a eliminar.
   * @param {DestroyOptions} options - Opciones adicionales para la eliminación.
   * @throws {InternalServerError} Si ocurre un error al eliminar el elemento.
   */
  public async deleteByPk(
    rut: I["rut"],
    options?: DestroyOptions
  ): Promise<void> {
    const transaction = await sequelize.transaction();
    const numberOfDestroy = await Entity.destroy({
      where: { rut },
      transaction,
      ...options,
    });
    if (numberOfDestroy > 1) {
      await transaction.rollback();
      throw new InternalServerError(
        "Error en el servidor al eliminar. No se ha eliminado el elemento."
      );
    }
    await transaction.commit();
  }

  /**
   * Actualiza un elemento por su rut en la base de datos.
   * @param {IUpdate} data - Datos del elemento a actualizar.
   * @param {number} rut - rut del elemento a actualizar.
   * @throws {InternalServerError} Si ocurre un error al actualizar el elemento.
   */
  public async updateByPk(data: IUpdate, rut: I["rut"]): Promise<void> {
    const transaction = await sequelize.transaction();
    const updated = await Entity.update(data, {
      where: { rut },
      transaction,
    });
    if (updated[0] > 1 || updated[0] === 0) {
      await transaction.rollback();
      throw new InternalServerError(
        "Error al actualizar. No se ha actualizado el elemento."
      );
    }
    await transaction.commit();
  }
}
