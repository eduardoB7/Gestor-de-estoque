import { Link, Outlet } from "react-router-dom";

export default function ItemsLayout() {
  return (
    <>
      <main>
        <h2>Stock Items</h2>
        <div className="tabs">
          <Link to={"/items"} className="tab">
            Todos os itens
          </Link>
          <Link to={"/items/new"} className="tab">
            Novo item
          </Link>
        </div>
        <Outlet />
      </main>
    </>
  );
}
