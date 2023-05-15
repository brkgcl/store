import Joi from 'joi';

export const registerValidation = Joi.object({
  name: Joi.string().alphanum().min(3).max(30).required(),
  surname: Joi.string().alphanum().min(3).max(30).required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().alphanum().min(6).max(20).required(),
  profil_image: Joi.string(),
});

export const loginValidation = Joi.object({
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
    .required(),
  password: Joi.string().alphanum().min(6).max(20).required(),
});
