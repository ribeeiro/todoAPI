import AppContainer from '../components/AppContainer';
import Form from '../components/Form';
import { Field, User } from '../@types/global-types';
import { AxiosResponse } from 'axios';
import { createUser } from '../lib/axios';
import { signUpSchema } from '../validations';

function SignUp() {
  const formFields: Field[] = [
    { id: 'name', label: 'Nome', type: 'text' },
    { id: 'email', label: 'Email', type: 'text' },
    { id: 'password', label: 'Senha', type: 'password' },
    { id: 'confirmPassword', label: 'Confirme sua senha', type: 'password' }
  ];
  const mutationFn = async (user: User): Promise<AxiosResponse> => {
    // eslint-disable-next-line @typescript-eslint/return-await
    return await createUser(user);
  };
  return (
    <AppContainer>
      <Form
        formFields={formFields}
        buttonLabel="Criar conta"
        mutationFn={mutationFn}
        formSchema={signUpSchema}
      />
    </AppContainer>
  );
}

export default SignUp;
