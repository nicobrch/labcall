import { CreateOptions, FindOptions, DestroyOptions } from "sequelize";
import sequelize, { Alternative as Entity } from "../loaders/sequelize";
import { NotFoundError, InternalServerError } from "../error/customErrors";
import {
  IAlternative as I,
  ICreateAlternative as ICreate,
  IUpdateAlternative as IUpdate,
} from "../interfaces/alternative";

export default class AlternativeRepository {
  async getAll(options?: FindOptions): Promise<I[]> {
    const alternatives = await Entity.findAll(options);
    return alternatives.map((alternative) => alternative.toJSON());
  }

  async findByPk(id: I["id"], options?: FindOptions): Promise<I> {
    const alternative = await Entity.findByPk(id, options);
    if (!alternative) {
      throw new NotFoundError("Alternativa no encontrada");
    }
    return alternative.toJSON();
  }

  async create(values: ICreate, options?: CreateOptions): Promise<void> {
    await Entity.create(values, options);
  }

  async deleteByPk(id: I["id"], options?: DestroyOptions): Promise<void> {
    const transaction = await sequelize.transaction();
    const numberOfDestroy = await Entity.destroy({
      where: { id },
      transaction,
      ...options,
    });
    if (numberOfDestroy !== 1) {
      await transaction.rollback();
      throw new InternalServerError("Error al eliminar la alternativa");
    }
    await transaction.commit();
  }

  async updateByPk(data: IUpdate, id: I["id"]): Promise<void> {
    const transaction = await sequelize.transaction();
    const updated = await Entity.update(data, {
      where: { id },
      transaction,
    });
    if (updated[0] !== 1) {
      await transaction.rollback();
      throw new InternalServerError("Error actualizando la alternativa");
    }
    await transaction.commit();
  }
}
