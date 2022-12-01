import Input from './Input';
import styled from 'styled-components';
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useMutation } from '@tanstack/react-query';
import { FormProps } from '../@types/global-types';
import { Fragment } from 'react';

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

// eslint-disable-next-line prettier/prettier
function Form({ className, formFields, buttonLabel, mutationFn, formSchema }: FormProps) {
  const {
    register,
    handleSubmit
    // formState: { errors }
  } = useForm({
    resolver: yupResolver(formSchema),
    mode: 'onChange',
    reValidateMode: 'onSubmit'
  });

  const mutation = useMutation({
    mutationFn
  });

  const onSubmit: SubmitHandler<FieldValues> = (info: FieldValues) => {
    mutation.mutate({ ...info });
  };

  return (
    <StyledForm
      // eslint-disable-next-line
      onSubmit={handleSubmit(onSubmit)}
      className={className}
    >
      {formFields.map((field) => (
        <Fragment key={field.id}>
          <label htmlFor={field.id}>{field.label}:</label>
          <Input
            id={field.id}
            type={field.type}
            {...register(field.id)}
          />
        </Fragment>
      ))}
      <button type="submit"> {buttonLabel} </button>
    </StyledForm>
  );
}

export default Form;
