import * as yup from 'yup';

const schema = yup.object().shape({
  movie: yup
    .string()
    .max(35)
    .min(1)
    .matches(/[a-zа-я0-9/s]/i)
    .required(),
});

export default schema;
