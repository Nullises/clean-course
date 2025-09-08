(() => {
  //* Aplicar el principio de responsabilidad única
  //* Priorizar la composición frente a la herencia

  type HtmlType = "input" | "select" | "textarea" | "radio";

  class HtmlElement {
    constructor(public id: string, public type: HtmlType) {}
  }

  class InputAttributes {
    constructor(public value: string, public placeholder: string) {}
  }

  class InputEvents {
    constructor() {}

    public setFocus() {}
    public getValue() {}
    public isActive() {}
    public removeValue() {}
  }

  // Composición
  // La clase InputElement está compuesta por otras clases más pequeñas
  // Que se encargan de una única responsabilidad

  class InputElement {
    public html: HtmlElement;
    public attributes: InputAttributes;
    public events: InputEvents;

    constructor(value: string, placeholder: string, id: string) {
      this.html = new HtmlElement(id, "input");
      this.attributes = new InputAttributes(value, placeholder);
      this.events = new InputEvents();
    }
  }

  const inputElement = new InputElement(
    "Ulises", // value
    "Escriba su nombre", // placeholder
    "firstName" // id
  );

  console.log({ inputElement });
})();
