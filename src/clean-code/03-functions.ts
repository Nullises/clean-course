(() => {
  // función para obtener información de una película por Id
  function getMovieById(id: string) {
    console.log({ id });
  }

  // función para obtener información de los actores de una película - Actors o Cast // id = movieId getMovieCast
  function getActorsByMovieId(id: string) {
    console.log({ id });
  }

  // funcion para obtener el bio del actor por el id
  function getActorById(id: string) {
    console.log({ id });
  }

  interface Movie {
    cast: string[];
    description: string;
    rating: number;
    title: string;
  }
  // Crear una película
  function createMovie({ title, description, rating, cast }: Movie) {
    console.log({ title, description, rating, cast });
  }

  function checkFullName(fullName: string): boolean {
    // tarea asincrona para verificar nombre
    // ..
    // ..
    try {
      if (fullName === "fernando") return false;

      console.log("Crear actor");
      return true;
    } catch (error) {}
    return false;
  }

  // Crea un nuevo actor
  function createActor(fullName: string, birthdate: Date): boolean {
    if (checkFullName(fullName)) {
      console.log("Crear actor");
      return true;
    }
    return false;
  }

  // Continuando con el ejercicio de funciones

  const getPayAmount = ({
    isDead,
    isSeparated,
    isRetired,
  }: {
    isDead?: boolean;
    isSeparated?: boolean;
    isRetired?: boolean;
  }): number => {
    if (isDead) return 1500;

    if (isSeparated) return 2500;

    return isRetired ? 3000 : 4000;
  };
})();
