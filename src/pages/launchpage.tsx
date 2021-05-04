import Item from '../components/Item';
import Link from 'next/link';
import { FormEvent, useCallback, useState } from 'react';
import Cookies from 'js-cookie';
import { api } from '../services/api';

import { Container, List, Form, A } from '../styles/Launchpage';

const Launchpage: React.FC = () => {
  const token = Cookies.get('@token');

  const [name, setName] = useState('');
  const [items, setItems] = useState([]);

  let time: any = null;

  async function handleSearchItem() {
    const { data } = await api.get('/item', {
      params: { name },
      headers: {
        Authorization: token,
      },
    });

    setItems(data.items);
  }

  function verifyIfUserStillTyping(e: FormEvent) {
    e.preventDefault();

    clearTimeout(time);

    time = setTimeout(() => {
      handleSearchItem
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
