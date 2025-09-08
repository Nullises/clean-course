(() => {
  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  // Forma corta

  class Person {
    public birthdate: Date;
    public gender: Gender;
    public name: string;

    constructor({ name, gender, birthdate }: PersonProps) {
      this.name = name;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  // Mala prácticas de programación
  // 1. No usar el principio de responsabilidad única
  // Esta clase tiene 2 responsabilidades
  // 1. Persona
  // 2. Usuario

  interface UserProps extends PersonProps {
    email: string;
    lastAccess: Date;
    role: string;
  }

  class User extends Person {
    public email: string;
    public lastAccess: Date;
    public role: string;

    constructor({
      birthdate,
      email,
      gender,
      lastAccess,
      name,
      role,
    }: UserProps) {
      super({ name, gender, birthdate });
      this.email = email;
      this.role = role;
      this.lastAccess = lastAccess;
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

  interface UserSettingsProps extends UserProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  class UserSettings extends User {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({
      workingDirectory,
      lastOpenFolder,
      email,
      role,
      lastAccess,
      name,
      gender,
      birthdate,
    }: UserSettingsProps) {
      super({ email, role, lastAccess, name, gender, birthdate });
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  const userSettings = new UserSettings({
    workingDirectory: "/usr/home",
    lastOpenFolder: "/development",
    email: "texanico@gmail.com",
    role: "Admin",
    lastAccess: new Date(),
    name: "Texanico",
    gender: "M",
    birthdate: new Date("1985-10-21"),
  });
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
