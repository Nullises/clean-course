import { Tesla, Audi, Toyota, Honda } from "./03-liskov-b";
import { Automobile } from "./03-liskov-c";
(() => {
  const printCarSeats = (cars: Automobile[]) => {
    cars.forEach((car: Automobile): void => {
      console.log(car.getBrand(), car.getNumberOfSeats());
    });
  };

  const cars = [
    new Tesla("Tesla", 7),
    new Audi("Audi", 2),
    new Toyota("Toyota", 5),
    new Honda("Honda", 5),
  ];

  printCarSeats(cars);
})();
