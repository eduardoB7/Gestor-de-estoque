import { useState } from "react";

export default function ItemsForm({ itemToUpdate }) {
  const CATEGORIES = ["jogos", "assessórios", "filmes", "hardware"];
  const defaultItem = {
    name: "",
    description: "",
    quantity: 0,
    price: 0,
    category: "",
  };
  const [item, setItem] = useState(itemToUpdate ? itemToUpdate : defaultItem);

  return (
    <>
      <form>
        <div className="row">
          <div>
            <label htmlFor="name">Nome</label>
            <input type="text" name="name" id="name" required value={item.id} />
          </div>
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
          />
        </div>
        <div>
          <label htmlFor="price">Preço</label>
          <input
            type="text"
            name="price"
            id="price"
            required
            value={item.price}
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
      </form>
    </>
  );
}
