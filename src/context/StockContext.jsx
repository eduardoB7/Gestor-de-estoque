import { createContext, useState } from "react";

const StockContext = createContext({});

const [item, setItem] = useState([]);

const stock = {};

export default function StockContextProvider({ children }) {
  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
