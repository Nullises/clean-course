// Principio de Segregación de Interfaz (ISP)
interface Bird {
  eat: () => void;
}

interface WalkingBird extends Bird {
  walk: () => void;
}

interface FlyingBird extends Bird {
  fly: () => void;
}

interface SwimmingBird extends Bird {
  swim: () => void;
}

interface RunningBird extends Bird {
  run: () => void;
}

class Duck implements WalkingBird, FlyingBird, SwimmingBird {
  public walk() {}
  public fly() {}
  public swim() {}
  public eat() {}
}

class Ostrich implements RunningBird, WalkingBird {
  public walk() {}
  public run() {}
  public eat() {}
}

class Tucan implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Hummingbird implements FlyingBird {
  public fly() {}
  public eat() {}
}

class Penguin implements SwimmingBird, WalkingBird {
  public swim() {}
  public walk() {}
  public eat() {}
}
