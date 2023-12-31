import { createContext, useState } from "react";

// criação do contexto para prover em todo o projeto
export const StockContext = createContext({});

// estado dos items guardado no localStorage
export default function StockContextProvider({ children }) {
  const [items, setItems] = useState(() => {
    const storedItems = localStorage.getItem("stored-items");
    if (!storedItems) return [];
    const items = JSON.parse(storedItems);
    items.forEach((item) => {
      item.createdAt = new Date(item.createdAt);
      item.updatedAt = new Date(item.updatedAt);
    });
    return items;
  });

  // funçao para adicionar items
  const addItem = (item) => {
    setItems((current) => {
      const newItems = [item, ...current];
      localStorage.setItem("stored-items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const deleteItem = (itemId) => {
    setItems((current) => {
      const newItems = current.filter((item) => item.id !== itemId);
      localStorage.setItem("stored-items", JSON.stringify(newItems));
      return newItems;
    });
  };

  const getItem = (itemId) => {
    return items.find((i) => i.id === itemId);
  };

  const updateItem = (itemId, newAttributes) => {
    setItems((current) => {
      const itemIndex = current.findIndex((i) => i.id === itemId);
      const updatedItems = [...current];
      Object.assign(updatedItems[itemIndex], newAttributes, {
        updatedAt: new Date(),
      });
      localStorage.setItem("stored-items", JSON.stringify(updatedItems));
      return updatedItems;
    });
  };

  //   objeto que contera todos os ultilitarios do contexto
  const stock = {
    items,
    addItem,
    deleteItem,
    getItem,
    updateItem,
  };

  return (
    <StockContext.Provider value={stock}>{children}</StockContext.Provider>
  );
}
