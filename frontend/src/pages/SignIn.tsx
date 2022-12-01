import { AxiosResponse } from 'axios';
import { Field, User } from '../@types/global-types';
import Form from '../components/Form';
import { signInSchema } from '../validations';
import { auth } from '../lib/axios';
import AppContainer from '../components/AppContainer';

const formFields: Field[] = [
  {
    id: 'email',
    label: 'Email',
    type: 'text'
  },
  {
    id: 'password',
    label: 'Senha',
    type: 'password'
  }
];

const mutationFn = async ({
  email,
  password
}: User): Promise<AxiosResponse> => {
  // eslint-disable-next-line @typescript-eslint/return-await
  return await auth({ email, password });
};

function SignIn() {
  return (
    <AppContainer>
      <Form
        formFields={formFields}
        buttonLabel="Fazer Login"
        mutationFn={mutationFn}
        formSchema={signInSchema}
      />
    </AppContainer>
  );
}

export default SignIn;
