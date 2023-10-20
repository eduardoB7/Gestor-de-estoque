import { Link } from "react-router-dom";
import useStock from "../hook/useStock";

export default function FinTab() {
  const { items } = useStock();

  const itemsLow = items.filter((item) => item.quant < 10);

  return (
    <>
      <div className="low">
        <table>
          <thead>
            <tr>
              <th>Itens acabando</th>
              <th>Qtd</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {itemsLow.map((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.quant}</td>
                <td>
                  <Link to={`/items/${item.id}`} className="button is-small">
                    Ver
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
