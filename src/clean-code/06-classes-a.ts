(() => {
  type Gender = "M" | "F";

  class Person {
    public name: string;
    public gender: Gender;
    public birthdate: Date;

    constructor(name: string, gender: Gender, birthdate: Date) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // Forma corta

  class Person2 {
    constructor(
      public name: string,
      public gender: Gender,
      public birthdate: Date
    ) {}
  }

  // Mala prácticas de programación
  // 1. No usar el principio de responsabilidad única
  // Esta clase tiene 2 responsabilidades
  // 1. Persona
  // 2. Usuario

  class User extends Person2 {
    constructor(
      public email: string,
      public role: string,
      private lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(name, gender, birthdate);
    }

    checkCredentials() {
      return true;
    }
  }

  // Malas prácticas de programación
  // 1. No usar el principio de responsabilidad única
  // Esta clase tiene 3 responsabilidades
  // 1. Persona
  // 2. Usuario
  // 3. Configuración de usuario

  class UserSettings extends User {
    constructor(
      public workingDirectory: string,
      public lastOpenFolder: string,
      email: string,
      role: string,
      lastAccess: Date,
      name: string,
      gender: Gender,
      birthdate: Date
    ) {
      super(email, role, lastAccess, name, gender, birthdate);
    }
  }

  const userSettings = new UserSettings(
    "/urs/home",
    "/development",
    "texanico@gmail.com",
    "Admin",
    new Date(),
    "Texanico",
    "M",
    new Date("1985-10-21")
  );
  console.log({
    userSettings,
    checkCredentials: userSettings.checkCredentials(),
  });

  //   const user = new User(
  //     "texanico@gmail.com",
  //     "Admin",
  //     new Date(),
  //     "Texanico",
  //     "M",
  //     new Date("1985-10-21")
  //   );
  //   console.log({ user });

  //   const newPerson = new Person("Andrés", "M", new Date("1985-10-21"));
  //   console.log({ newPerson });
  //   const newPerson2 = new Person2("Mateo", "M", new Date("1985-07-15"));
  //   console.log({ newPerson2 });
})();
