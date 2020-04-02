import { celebrate, Joi, Segments } from "celebrate";

export default {
  post: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.string()
        .required()
        .min(9)
        .max(12),
      city: Joi.string().required(),
      uf: Joi.string().required()
    })
  })
};
