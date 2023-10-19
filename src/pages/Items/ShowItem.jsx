import { Link, useParams } from "react-router-dom";
import useStock from "../../hook/useStock";
import DeleteBtn from "../../components/DeleteBtn";

export default function ShowItem() {
  const { getItem } = useStock();
  const { id } = useParams();

  const item = getItem(id);

  if (!item) {
    return (
      <div className="item">
        <p>O item não existe</p>
      </div>
    );
  }

  return (
    <>
      <div className="item">
        <h2>{item.name}</h2>
        <Link to={`/items/${item.id}/update`} className="button is-small">
          Atualizar
        </Link>
        <DeleteBtn itemId={item.id} itemName={item.name} />
        <div className="row">
          <span>Categoria {item.category}</span>
          <span>Quantidade em estoque {item.quant}</span>
          <span>Preço R${item.price}</span>
        </div>
        <p>{item.description}</p>
        <p>
          Cadastrado em: {item.createdAt.toLocaleDateString("pt-BR")} às{" "}
          {item.createdAt.toLocaleTimeString()}
        </p>
        <p>
          Atualizado em: {item.updatedAt.toLocaleDateString("pt-BR")} às{" "}
          {item.updatedAt.toLocaleTimeString()}
        </p>
      </div>
    </>
  );
}
