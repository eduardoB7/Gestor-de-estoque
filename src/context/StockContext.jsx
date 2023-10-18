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

  // funçao para adicionar items
  const addItem = (item) => {
    setItems((current) => {
      const newItems = [item, ...current];
      localStorage.setItem("stored-items", JSON.stringify(newItems));
      return newItems;
    });
  };

  //   objeto que contera todos os ultilitarios do contexto
  const stock = {
    items,
    addItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
