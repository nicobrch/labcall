import {
  CreateOptions,
  FindOptions,
  DestroyOptions,
  WhereOptions,
} from "sequelize";
import sequelize, { Ability as Entity } from "../loaders/sequelize";
import { NotFoundError, InternalServerError } from "../error/customErrors";
import {
  IAbility as I,
  ICreateAbility as ICreate,
  IUpdateAbility as IUpdate,
} from "../interfaces/ability";

export default class AbilityRep {
  public Model = Entity;
  async getAll(options?: FindOptions): Promise<I[]> {
    const questions = await Entity.findAll(options);
    return questions.map((question) => question.toJSON());
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

  async findByPk(id: I["id"], options?: FindOptions): Promise<I> {
    const question = await Entity.findByPk(id, options);
    if (!question) {
      throw new NotFoundError("Elemento no encontrado");
    }
    return question.toJSON();
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
      throw new InternalServerError("Error eliminando la pregunta");
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
      throw new InternalServerError("Error actualizando la pregunta");
    }
    await transaction.commit();
  }
}
