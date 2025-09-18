import { Automobile } from "./03-liskov-c";

export class Tesla extends Automobile {
  constructor(brand: string, numberOfSeats: number) {
    super(brand, numberOfSeats);
  }
}

export class Audi extends Automobile {
  constructor(brand: string, numberOfSeats: number) {
    super(brand, numberOfSeats);
  }
}

export class Toyota extends Automobile {
  constructor(brand: string, numberOfSeats: number) {
    super(brand, numberOfSeats);
  }
}

export class Honda extends Automobile {
  constructor(brand: string, numberOfSeats: number) {
    super(brand, numberOfSeats);
  }
}
