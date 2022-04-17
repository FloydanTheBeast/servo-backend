import Joi from 'joi';

export const StepsActivitySchema = Joi.object({
  stepsCount: Joi.number().required().positive(),
  date: Joi.date().required().less('now'),
}).options({ allowUnknown: true });
