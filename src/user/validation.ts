import Joi from 'joi';

export const UserSchema = Joi.object({
  email: Joi.string().email().message('Email is invalid').required(),
  password: Joi.string().min(6).max(15),
});
