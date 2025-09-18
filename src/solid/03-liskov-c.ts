// BUEN EJEMPLO
// PERMITE SUBSTITUIRLO EN LUGAR DE CADA CLASE INDIVIDUAL PARA CADA AUTOMOVIL

export class Automobile {
  constructor(
    private readonly brand: string,
    private readonly numberOfSeats: number
  ) {
    this.brand = brand;
    this.numberOfSeats = numberOfSeats;
  }

  getNumberOfSeats() {
    return this.numberOfSeats;
  }

  getBrand() {
    return this.brand;
  }
}
