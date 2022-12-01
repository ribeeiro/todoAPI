import * as yup from 'yup';

export const signInSchema = yup.object().shape({
  email: yup
    .string()
    .email('Insira um email válido')
    .required('O campo "email" é obrigatório!'),
  password: yup
    .string()
    .min(5, 'A senha deve conter pelo menos 5 caracteres')
    .max(20, 'O tamanho máximo da senha é 20 caracteres')
    .required('O campo "senha" é obrigatório!')
});
