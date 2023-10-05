export interface IAlternative {
  id?: number;
  questionId: number;
  answerText: string;
  isCorrect: boolean;
  feedback: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface ICreateAlternative extends IAlternative {}
export interface IUpdateAlternative extends IAlternative {}
