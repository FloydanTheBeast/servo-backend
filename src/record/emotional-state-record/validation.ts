import Joi from 'joi';

export const EmotionalStateRecordSchema = Joi.object({
  description: Joi.string().max(200),
  date: Joi.date().required().less('now'),
});
