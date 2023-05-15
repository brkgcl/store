import { Request, Response, NextFunction } from 'express';
import Joi, { ValidationResult } from 'joi';

// Kullanıcı doğrulama şeması
const authSchema = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

// Doğrulama seçenekleri
const validationOptions = {
  abortEarly: false, // Tüm hataları bir arada toplamak için
  stripUnknown: true, // Bilinmeyen alanları kaldırmak için
};

// Middleware işlevi
export const validationMiddleware = (
  schema: Joi.ObjectSchema
  // options: SchemaOptions = {}
) => {
  return (req: Request, res: Response, next: NextFunction) => {
    const { error }: ValidationResult<any> = schema.validate(req.body, {
      ...validationOptions,
      // ...options,
    });

    if (error) {
      const errorMessage = error.details.map((detail) =>
        detail.message
      );

      return res.status(400).json({ error: errorMessage });
    }

    next();
  };
};
