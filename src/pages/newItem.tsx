import { FormEvent, useEffect, useState } from 'react';
import { FormatPrice, FormatPercent } from '../lib/utils';
import { api } from '../services/api';
import Cookies from 'js-cookie';
import { useRouter } from 'next/router';

import { Container, Header, Form, InputGroup } from '../styles/NewItem';

const newItem: React.FC = () => {
  const [name, setName] = useState('');
  const [category, setCategory] = useState('');
  const [cost, setCost] = useState('');
  const [increaseOverCost, setIncreaseOverCost] = useState('');
  const [price, setPrice] = useState('');
  const [anotherPrice, setAnotherPrice] = useState('');

  const router = useRouter();

  const token = Cookies.get('@token');

  async function handleCreateItem(e: FormEvent) {
    e.preventDefault();

    const data = {
      name,
      cost,
      increaseOverCost,
      price,
      anotherPrice,
    };

    api
      .post('/item', data, {
        headers: {
          authorization: token,
        },
      })
      .then(() => {
        router.push('/launchpage');
      });
  }

  return (
    <Container>
      <div>
        <Header>
          <h1>Novo produto</h1>

          <button form="createItem">Salvar</button>
        </Header>

        <Form onSubmit={handleCreateItem} id="createItem" autoComplete="off">
          <InputGroup>
            <label>Nome :</label>
            <input
              type="text"
              placeholder="Ex.: Joelho Solda 25mm"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label>Categoria</label>
            <input
              type="text"
              placeholder="Ex.: Conexões"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
            />
          </InputGroup>

          <InputGroup>
            <label>Custo :</label>
            <input
              type="text"
              placeholder="Ex.: R$ 7,82"
              value={cost}
              onChange={(e) => setCost(() => FormatPrice(e.target.value))}
            />
          </InputGroup>

          <InputGroup>
            <label>Aumento sobre custo :</label>
            <input
              type="text"
              placeholder="Ex.: 12,45%"
              value={increaseOverCost}
              onChange={(e) =>
                setIncreaseOverCost(() => FormatPercent(e.target.value))
              }
            />
          </InputGroup>

          <InputGroup>
            <label>Preco 1 :</label>
            <input
              type="text"
              placeholder="Ex.: R$ 15,90"
              value={price}
              onChange={(e) => setPrice(() => FormatPrice(e.target.value))}
            />
          </InputGroup>

          <InputGroup>
            <label>Preço 2 :</label>
            <input
              type="text"
              placeholder="Ex.: R$ 145,00"
              value={anotherPrice}
              onChange={(e) =>
                setAnotherPrice(() => FormatPrice(e.target.value))
              }
            />
          </InputGroup>
        </Form>
      </div>
    </Container>
  );
};

export default newItem;
