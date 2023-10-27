import { DataTypes, Model, Sequelize } from "sequelize";
import { IQuestion } from "../interfaces/question";

export interface QuestionModel extends Model<IQuestion, IQuestion> {}

export default function defineQuestionModel(sequelize: Sequelize) {
	const Question = sequelize.define<QuestionModel, IQuestion>(
		"question",
		{
			id: {
				type: DataTypes.INTEGER,
				primaryKey: true,
				autoIncrement: true
			},
			questionText: {
				type: DataTypes.TEXT,
				allowNull: false
			},
			imageURL: {
				type: DataTypes.STRING,
				allowNull: true
			},
			figureCaption: {
				type: DataTypes.STRING(255),
				allowNull: true
			},
			node_id: {
				type: DataTypes.INTEGER,
				allowNull: true
			},
			dificulty: {
				type: DataTypes.STRING(20),
				allowNull: true
			},
			createdAt: {
				type: DataTypes.DATE,
				allowNull: false,
				defaultValue: DataTypes.NOW
			},
			updatedAt: {
				type: DataTypes.DATE,
				allowNull: true
			}
		},
		{
			freezeTableName: true
		}
	);

	return Question;
}
