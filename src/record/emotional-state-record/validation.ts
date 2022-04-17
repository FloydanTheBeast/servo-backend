import Joi from 'joi';

export const EmotionalStateRecordSchema = Joi.object({
  state: Joi.allow(),
  description: Joi.string().max(200),
  date: Joi.date().required().less('now'),
}).options({ allowUnknown: true });
