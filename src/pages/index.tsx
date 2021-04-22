import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Container, Form } from '../styles/Home';
import { set } from 'js-cookie';
import { useRouter } from 'next/router';

const Home: React.FC = () => {
  const router = useRouter();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [loginState, setLoginState] = useState('');

  async function handleLogin(e: FormEvent) {
    e.preventDefault();

    const data = {
      email,
      password,
    };

    api
      .post('/user/login', data, {
        onUploadProgress: () => {
          setLoginState('Carregando ...');
        },
      })
      .then((response) => {
        const { token } = response.data;
        set('@token', token);

        setLoginState('Sucesso');

        router.push('/launchpage');
      })
      .catch((error) => {
        setLoginState(error.message);
      });
  }

  return (
    <Container>
      <div>
        <h1>Mackarel</h1>

        <p>{loginState}</p>

        <Form autoComplete="off" onSubmit={handleLogin}>
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <button type="submit">Entrar</button>
        </Form>
      </div>
    </Container>
  );
};

export default Home;
