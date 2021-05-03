import { Container, InputGroup, ActionGroup } from './style';
import Link from 'next/link';

export interface IItem {
  _id: string;
  name: string;
  category: string;
  quantity: number;
  cost: number;
  price: number;
  anotherPrice: number;
}

interface IItemProps {
  item: IItem;
  handleDelete(itemId: string): void;
}

const Item: React.FC<IItemProps> = ({ item, handleDelete }) => {
  return (
    <Container>
      <strong>Nome</strong>
      <p>{item.name}</p>

      <strong>Categoria</strong>
      <p>{item.category}</p>

      <InputGroup>
        <strong>Custo :</strong>
        <p>
          {Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(item.cost)}
        </p>
      </InputGroup>

      <InputGroup>
        <strong>Preço :</strong>
        <p>
          {Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(item.price)}
        </p>
      </InputGroup>

      <InputGroup>
        <strong>Preço 2 :</strong>
        <p>
          {Intl.NumberFormat('pt-BR', {
            currency: 'BRL',
            style: 'currency',
          }).format(item.anotherPrice)}
        </p>
      </InputGroup>

      <ActionGroup>
        <button onClick={() => handleDelete(item._id)}>Deletar</button>

        <Link href={`/${item._id}`}>
          <a>Editar</a>
        </Link>
      </ActionGroup>
    </Container>
  );
};

export default Item;
