import { celebrate, Joi, Segments } from "celebrate";

export default {
  post: celebrate({
    [Segments.BODY]: Joi.object().keys({
      name: Joi.string().required(),
      email: Joi.string()
        .required()
        .email(),
      whatsapp: Joi.number().required(),
      city: Joi.string().required(),
      uf: Joi.string()
        .required()
        .length()
    })
  })
};
