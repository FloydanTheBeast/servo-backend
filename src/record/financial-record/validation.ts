import Joi from 'joi';

export const FinancialRecordSchema = Joi.object({
  title: Joi.string().required().max(25),
  description: Joi.string().max(100),
  amount: Joi.number().required().positive(),
  date: Joi.date().less('now'),
});
