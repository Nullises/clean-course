(() => {
  // Aplicando el principio de responsabilidad única
  // Prioriza la composición frente a la herencia

  type Gender = "M" | "F";

  interface PersonProps {
    firstName: string;
    lastName: string;
    gender: Gender;
    birthdate: Date;
  }

  class Person {
    public firstName: string;
    public lastName: string;
    public gender: Gender;
    public birthdate: Date;

    constructor({ firstName, lastName, gender, birthdate }: PersonProps) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.gender = gender;
      this.birthdate = birthdate;
    }
  }

  interface UserProps {
    email: string;
    role: string;
  }
  class User {
    public email: string;
    public role: string;
    private readonly lastAccess: Date;

    constructor({ email, role }: UserProps) {
      this.lastAccess = new Date();
      this.email = email;
      this.role = role;
    }

    checkCredentials() {
      return true;
    }
  }

  interface SettingsProps {
    lastFolderOpen: string;
    workingDirectory: string;
  }

  class Settings {
    public workingDirectory: string;
    public lastFolderOpen: string;

    constructor({ workingDirectory, lastFolderOpen }: SettingsProps) {
      this.workingDirectory = workingDirectory;
      this.lastFolderOpen = lastFolderOpen;
    }
  }

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
      firstName: "Ulises",
      lastName: "Vargas",
      gender: "M",
      birthdate: new Date("1988-12-08"),
    },
    {
      email: "texanico@gmail.com",
      role: "admin",
    },
    {
      workingDirectory: "/usr/home",
      lastFolderOpen: "/home",
    }
  );

  console.log({
    userSettings,
    credentials: userSettings.user.checkCredentials(),
  });
})();
