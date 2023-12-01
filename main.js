class ProductManager {
  static ultId = 0;

  // creamos el constructor con array vacio
  constructor() {
    this.products = [];
  }

  addproduct(title, description, price, img, code, stock) {
    // validamos cada campo
    if (!title || !description || !price || !img || !code || !stock) {
      console.log("Todos los campos son obligatorios");
      return;
    }
    // validamos codigo unico
    if (this.products.some((item) => item.code === code)) {
      console.log("El codigo debe ser unico, lo estas repitiendo");
      return;
    }

    // aqui creamos el nuevo objeto con todos los datos que me piden

    const newProduct = {
      id: ++ProductManager.ultId,
      title,
      description,
      price,
      img,
      code,
      stock,
    };

    this.products.push(newProduct);
  }
  getproducts() {
    console.log(this.products);
  }

  getproductById(id) {
    const product = this.products.find((item) => item.id === id);
    if (!product) {
      console.log("producto fuera de stock");
    } else {
      console.log("producto en stock", product);
    }
    return product;
  }
}

// testing
const manager = new ProductManager();

manager.getproducts();

manager.addproduct(
  "producto prueba",
  "este es prueba",
  200,
  "sin imagen",
  "abc123",
  "25"
);

manager.addproduct(
  "milanesa de pollo",
  "precio por kg",
  2200,
  "sin imagen",
  "abc124",
  "50"
);
manager.addproduct(
  "pata y muslo",
  "precio por kg",
  1200,
  "sin imagen",
  "abc125",
  "50"
);

manager.getproducts();

manager.addproduct(
  "pata y muslo",
  "precio por kg",
  1200,
  "sin imagen",
  "abc125",
  "50"
);

manager.getproductById(10);