import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        REACT STOCK
        <div className="links">
          <Link to={"/"}>Inicio</Link>
          <Link to={"/items"}>Items</Link>
        </div>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
