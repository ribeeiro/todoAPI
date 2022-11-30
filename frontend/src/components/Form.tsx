import Input from './Input';
import styled from 'styled-components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { Inputs, User } from '../@types/global-types';
import signUpSchema from '../schemas/signUpSchema';
import api from '../lib/axios';
import { AxiosResponse } from 'axios';

const StyledForm = styled.form`
  label {
    display: block;
    margin: 10px 0;
  }
  & button {
    background-color: #fbf2ff;
    color: initial;
    margin: 15px 0 0;
    width: 300px;
    height: 2rem;
    border: none;
    border-radius: 3px;
  }
`;

function Form({ className }: { className?: string }) {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm<Inputs>({
    resolver: yupResolver(signUpSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit'
  });

  const mutation = useMutation({
    mutationFn: async (user: User): Promise<AxiosResponse> => {
      return await api.createUser(user);
    }
  });

  const onSubmit: SubmitHandler<Inputs> = ({ email, name, password }: User) => {
    mutation.mutate({ email, name, password });
  };

  return (
    <StyledForm
      // eslint-disable-next-line
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      <label htmlFor="name">Nome:</label>
      <Input
        id="name"
        {...register('name')}
      />
      <label htmlFor="email">Email:</label>
      <Input
        id="email"
        {...register('email')}
      />
      <label htmlFor="password">Senha:</label>
      <Input
        type="password"
        id="password"
        {...register('password')}
      />
      <label htmlFor="confirmPassword">Confirme a senha:</label>
      <Input
        type="password"
        id="confirmPassword"
        {...register('confirmPassword')}
      />
      <button type="submit"> Criar Conta </button>
    </StyledForm>
  );
}

export default Form;
