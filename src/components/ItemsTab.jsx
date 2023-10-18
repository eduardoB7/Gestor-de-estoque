import { Link } from "react-router-dom";
import useStock from "../hook/useStock";
import DeleteBtn from "./DeleteBtn";

export default function ItemsTab() {
  const { items } = useStock();

  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nome</th>
            <th>Em Estoque</th>
            <th>Categoria</th>
            <th>Ações</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.quant} unid</td>
              <td>{item.category}</td>
              <td>
                <Link
                  to={`/items/${item.id}`}
                  className="button is-primary is-small"
                >
                  Ver
                </Link>
                <Link
                  to={`/items/${item.id}/update`}
                  className="button is-small"
                >
                  Atualizar
                </Link>
                <DeleteBtn itemId={item.id} itemName={item.name} />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}
