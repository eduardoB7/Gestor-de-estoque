import { Link } from "react-router-dom";
import useStock from "../hook/useStock";

export default function RecentTab() {
  const { items } = useStock();

  const recentItems = items.slice(0, 2);

  return (
    <>
      <div className="recent">
        <table>
          <thead>
            <tr>
              <th>Itens Recentes</th>
              <th>Ações</th>
            </tr>
          </thead>
          <tbody>
            {recentItems.map((item) => (
              <tr key={item.id}>
                <td>{item.name}</td>
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
