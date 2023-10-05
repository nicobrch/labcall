import { CreateOptions, FindOptions, DestroyOptions } from "sequelize";
import sequelize, {
  Question as Entity,
  Alternative,
} from "../loaders/sequelize";
import { NotFoundError, InternalServerError } from "../error/customErrors";
import {
  IQuestion as I,
  ICreateQuestion as ICreate,
  IUpdateQuestion as IUpdate,
} from "../interfaces/question";

export default class QuestionRepository {
  async getAll(options?: FindOptions): Promise<I[]> {
    const questions = await Entity.findAll(options);
    return questions.map((question) => question.toJSON());
  }

  async findByPk(id: I["id"], options?: FindOptions): Promise<I> {
    const question = await Entity.findByPk(id, {
      ...options,
      include: [{ model: Alternative, as: "alternatives" }], // Incluye las alternativas por defecto
    });
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
