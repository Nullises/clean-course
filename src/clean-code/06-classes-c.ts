(() => {
  // Aplicando el principio de responsabilidad única
  // Cada clase tiene una única responsabilidad

  type Gender = "M" | "F";

  interface PersonProps {
    birthdate: Date;
    gender: Gender;
    name: string;
  }

  // Clase Persona
  // 1. Responsabilidad: Crear una persona

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

  interface UserProps {
    email: string;
    role: string;
  }

  // Clase Usuario
  // 1. Responsabilidad: Crear un usuario

  class User {
    public email: string;
    public role: string;
    public lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.email = email;
      this.role = role;
      this.lastAccess = new Date();
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    workingDirectory: string;
    lastOpenFolder: string;
  }

  // Clase Settings
  // 1. Responsabilidad: Configuraciones de usuario

  class Settings {
    public workingDirectory: string;
    public lastOpenFolder: string;
    constructor({ workingDirectory, lastOpenFolder }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastOpenFolder = lastOpenFolder;
    }
  }

  // Clase UserSettings
  // Composición de las otras 3 clases
  // 1. Responsabilidad: Composición de las otras clases
  class UserSettings {
    public person: Person;
    public user: User;
    public settings: Settings;

    constructor(
      personProps: PersonProps,
      userProps: UserProps,
      settingsProps: SettingsProps
    ) {
      this.person = new Person(personProps);
      this.user = new User(userProps);
      this.settings = new Settings(settingsProps);
    }
  }

  const userSettings = new UserSettings(
    {
      name: "Ulises Vargas",
      gender: "M",
      birthdate: new Date("1988-12-08"),
    },
    {
      email: "texanico@gmail.com",
      role: "admin",
    },
    {
      workingDirectory: "/usr/home",
      lastOpenFolder: "/home",
    }
  );

  console.log({
    userSettings,
    checkCredentials: userSettings.user.checkCredentials(),
  });
})();
