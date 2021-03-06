import Item from '../components/Item';
import Link from 'next/link';
import { useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '../services/api';

import { Container, List, Form, A } from '../styles/Launchpage';
// Usar para fazer a paginação
// yarn add react-js-pagination
// https://www.npmjs.com/package/react-js-pagination

let time = null;

const Launchpage: React.FC = () => {
  const token = Cookies.get('@token');

  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  async function handleSearchItem(name: string) {
    const { data } = await api.get('/item', {
      params: { name },
      headers: {
        Authorization: token,
      },
    });

    setItems(data);
  }

  function verifyIfUserStillTyping() {
    clearTimeout(time);

    time = setTimeout(() => {
      handleSearchItem(name)
    }, 1000);
  }

  const handleDeleteItem = useCallback((itemId) => {
    api.delete(`item/${itemId}`, { headers: { authorization: token } });
    setItems((state) => state.filter((item) => item._id !== itemId));
  }, []);

  return (
    <Container>
      <header>
        <Link href="/newItem">
          <A>Novo</A>
        </Link>

        <Form onKeyUp={verifyIfUserStillTyping}>
          <input
            type="text"
            placeholder="Produto ou Categoria"
            autoFocus
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </Form>
      </header>

      <List>
        {items.map((data) => (
          <Item key={data._id} item={data} handleDelete={handleDeleteItem} />
        ))}
      </List>
    </Container>
  );
};

export default Launchpage;
