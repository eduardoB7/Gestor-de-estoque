import { createContext, useState } from "react";

// criação do contexto para prover em todo o projeto
export const StockContext = createContext({});

// estado dos items guardado no localStorage
export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("stored-items");
    if (!storedItems) return [];
    return JSON.parse(storedItems);
  });

  //   objeto que contera todos os items
  const stock = {};

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
