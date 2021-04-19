import { GetServerSideProps, InferGetServerSidePropsType } from 'next';
import { FormEvent, useState } from 'react';
import { api } from '../services/api';
import { Container, Header, InputGroup, Form } from '../styles/UpdateItem';
import { FormatPrice, FormatPercent, FormatPriceFormBack } from '../lib/utils';
import { useRouter } from 'next/router';
import Cookie from 'js-cookie';

const UpdateItem: React.FC = ({
  item,
}: InferGetServerSidePropsType<typeof getServerSideProps>) => {
  const [name, setName] = useState(item.name);
  const [category, setCategory] = useState(item.category);
  const [cost, setCost] = useState(() => FormatPriceFormBack(item.cost));
  const [increaseOverCost, setIncreaseOverCost] = useState('');
  const [price, setPrice] = useState(() => FormatPriceFormBack(item.price));
  const [anotherPrice, setAnotherPrice] = useState(() =>
    FormatPriceFormBack(item.anotherPrice)
  );

  const { push } = useRouter();

  const token = Cookie.get('@token');

  async function handleUpdateItem(e: FormEvent) {
    e.preventDefault();

    const data = {
      name,
      category,
      cost,
      increaseOverCost,
      price,
      anotherPrice,
    };

    console.log(data);

    api
      .put(`item/${item._id}`, data, { headers: { authorization: token } })
      .then(() => {
        push('/launchpage');
      })
      .catch((error) => {
        console.log('Error');
        console.log(error);
      });
  }

  return (
    <Container>
      <div>
        <Header>
          <h1>Editar produto</h1>
          <button form="updateItem">Salvar</button>
        </Header>
        <Form onSubmit={handleUpdateItem} id="updateItem" autoComplete="off">
          <InputGroup>
            <label>Nome :</label>
            <input
              type="text"
              placeholder="Ex.: Joelho Solda 25mm"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
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
              required
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

export const getServerSideProps: GetServerSideProps = async ({ params }) => {
  const { data } = await api.get(`item/${params.itemId}`);

  return {
    props: {
      item: data,
    },
  };
};

export default UpdateItem;
