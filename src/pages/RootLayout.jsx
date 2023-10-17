import { Link, Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <header>
        <Link to="/" className="logo">
          REACT STOCK
        </Link>
        <nav className="links-root">
          <Link to={"/"}>
            <h3>Inicio</h3>
          </Link>
          <Link to={"/items"}>
            <h3>Items</h3>
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
