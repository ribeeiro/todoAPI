import { HTMLInputTypeAttribute } from 'react';

/* eslint-disable @typescript-eslint/consistent-type-definitions */

export type User = {
  name: string;
  email: string;
  password: string;
};

export type Field = {
  id: 'name' | 'email' | 'password' | 'confirmPassword';
  label: string;
  type: HTMLInputTypeAttribute;
};

type FormProps = {
  className?: string;
  formFields: Field[];
  buttonLabel: string;
  mutationFn: (data: any) => Promise<AxiosResponse>;
  formSchema: yup.ObjectSchema;
};
/* eslint-enable @typescript-eslint/consistent-type-definitions */
