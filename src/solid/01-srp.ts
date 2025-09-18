(() => {
  interface Product {
    id: number;
    name: string;
  }

  class ProductService {
    // Axios, fetch, etc.
    // private HTTPAdapter;

    getProduct(id: number) {
      // Realiza un proceso para obtener el producto y retornarlo
      console.log("Producto: ", { id, name: "OLED Tv" });
    }

    saveProduct(product: Product) {
      // Realiza una petición para salvar en base de datos
      console.log("Guardando en base de datos", product);
    }
  }

  type emailTemplate = "to-clients" | "to-admins";

  class ProductBloc {
    private readonly productService: ProductService;
    private readonly mailer: Mailer;

    constructor(productService: ProductService, mailer: Mailer) {
      this.productService = productService;
      this.mailer = mailer;
    }

    loadProduct(id: number) {
      this.productService.getProduct(id);
    }

    addProduct(product: Product) {
      this.productService.saveProduct(product);
    }

    notifyClients(emailList: string[], template: emailTemplate) {
      this.mailer.sendEmail(emailList, template);
    }
  }

  class Mailer {
    private readonly masterEmail: string = "email@gmail.com";

    sendEmail(emailList: string[], template: emailTemplate) {
      console.log("Enviando correo a: " + template);
    }
  }

  class CartBloc {
    private items: Object[] = [];

    onAddToCart(productId: number) {
      // Agregar al carrito de compras
      console.log("Agregando al carrito ", productId);
    }
  }

  const productService = new ProductService();
  const emailService = new Mailer();
  const productBloc = new ProductBloc(productService, emailService);
  const cartBloc = new CartBloc();

  productBloc.loadProduct(10);
  productBloc.addProduct({ id: 10, name: "OLED TV" });
  productBloc.notifyClients(
    ["ulises123@gmail.com", "ulises1234@gmail.com"],
    "to-admins"
  );
  cartBloc.onAddToCart(10);
})();
