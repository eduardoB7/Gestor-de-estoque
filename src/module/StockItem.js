const char = "abcdefghijklmnopqrstuvxyz0123456789-ABCDEGHIJKLMNOPQRSTUVXYZ";
let randomId = "";

function randomIdgen(length) {
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * char.length);
    randomId += char.charAt(randomIndex);
  }

  return randomId;
}

export default class StockItem {
  constructor(name, description, quant, price, category) {
    this.id = randomIdgen(8);
    this.name = name;
    this.description = description;
    this.quant = +quant;
    this.price = +price;
    this.category = category;
  }
}
