import { useState } from "react";
import useStock from "../hook/useStock";
import StockItem from "../module/StockItem";
const CATEGORIES = ["jogos", "assessórios", "filmes", "hardware"];

const defaultItem = {
  name: "",
  description: "",
  quant: 0,
  price: 0,
  category: "",
};

export default function ItemsForm({ itemToUpdate }) {
  const { items, addItem, updateItem } = useStock();

  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);

  const handleChange = (ev) => {
    setItem((current) => ({ ...current, [ev.target.name]: ev.target.value }));
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
    try {
      if (itemToUpdate) {
        updateItem(itemToUpdate.id, item);
        alert("Item atualizado com sucesso!");
      } else {
        const invalidItem = items.filter((it) => it.name === item.name);
        if (invalidItem.length === 0) {
          const validItem = new StockItem(
            item.name,
            item.description,
            item.quant,
            item.price,
            item.category
          );
          addItem(validItem);
          alert("Item adicionado com sucesso!");
          setItem(defaultItem);
        } else {
          alert("item ja existe no stock");
        }
      }
    } catch (error) {
      console.log(error.message);
      alert("Ocorreu um erro.");
    }
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <div className="row">
          <div>
            <label htmlFor="name">Nome</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={item.name}
              onChange={handleChange}
            />
          </div>

          <div>
            <label htmlFor="quant">Quantidade</label>
            <input
              type="number"
              name="quant"
              id="quant"
              min={0}
              required
              value={item.quant}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="price">Preço</label>
            <input
              type="number"
              min={0}
              step="0.01"
              name="price"
              id="price"
              required
              value={item.price}
              onChange={handleChange}
            />
          </div>
          <div>
            <label htmlFor="category">Categoria</label>
            <select
              name="category"
              id="category"
              required
              value={item.category}
              onChange={handleChange}
            >
              <option disabled value="">
                Selecione uma categoria...
              </option>
              {CATEGORIES.map((category) => (
                <option
                  key={category}
                  value={category}
                  defaultChecked={item.category === category}
                >
                  {category}
                </option>
              ))}
            </select>
          </div>
          <div className="form-control">
            <label htmlFor="description">Descrição</label>
            <textarea
              name="description"
              id="description"
              required
              rows={6}
              value={item.description}
              onChange={handleChange}
            ></textarea>
          </div>
        </div>
        <button className="button is-primary is-large">Salvar</button>
      </form>
    </>
  );
}
