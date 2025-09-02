type Size = "" | "S" | "M" | "L" | "XL";

class Product {
  constructor(
    public name: string = "",
    public price: number = 0,
    public size: Size = ""
  ) {}

  errorMessage() {
    if (this.name.length === 0) throw Error("El nombre es obligatorio");
    if (this.price <= 0) throw Error("El precio no puede ser 0");
    if (this.size.length === 0) throw Error("El tamaño es obligatorio");
  }

  toString() {
    this.errorMessage();
    return `Product: ${this.name} ${this.price} ${this.size}`;
  }
}

(() => {
  const bluePants = new Product("Blue large pants", 10, "L");
  console.log(bluePants.toString());
})();
