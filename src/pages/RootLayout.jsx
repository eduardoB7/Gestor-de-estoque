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
            <p>Inicio</p>
          </Link>
          <Link to={"/items"}>
            <p>Items</p>
          </Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </>
  );
}
