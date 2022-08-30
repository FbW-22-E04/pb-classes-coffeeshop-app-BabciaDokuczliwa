class CoffeeShop {
  constructor(name, menu, orders) {
    this.name = name;
    this.menu = menu;
    this.orders = orders;
  }
  addItem(item) {
    this.menu.push(item);
  }

  addOrder(product) {
    const idx = this.menu.findIndex((item) => item.item === product);
    if (idx === -1) {
      console.log("This item is currently unavailable!");
    } else {
      this.orders.push(product);
      console.log("Order added!");
    }
  }

  fulfillOrder() {
    console.log(this.orders);
    if (this.orders.length !== 0) {
      console.log(`The ${this.orders.shift()} is ready!`);
    } else {
      console.log("All orders have been fulfilled");
    }
  }

  listOrders() {
    if (this.orders.length !== 0) {
      console.log(this.orders);
    } else {
      console.log([]);
    }
  }
  dueAmount() {
    let total = 0;
    this.orders.forEach((item) => {
      for (const val of this.menu) {
        if (val.item === item) {
          total += val.price;
        }
      }
    });
    console.log(`Total price is ${total}`);
  }

  cheapestItem() {
    const result = this.menu.reduce((acc, item) => {
      acc.push(item.price);
      return acc;
    }, []);
    // console.log(result);
    const cheapPrice = Math.min(...result);
    console.log(cheapPrice);
    const cheapItem = this.menu.find((item) => {
      // console.log(item);
      if (item.price === cheapPrice) {
        console.log(item.item);
        // return item.name;
      }
      // console.log(cheapItem);
    });
  }
  drinksOnly() {
    const drinks = this.menu
      .filter((item) => {
        if (item.type === "drink") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(drinks);
  }
  foodOnly() {
    const foods = this.menu
      .filter((item) => {
        if (item.type === "food") {
          return item;
        }
      })
      .map((item) => item.item);
    console.log(foods);
  }
}

const shop = new CoffeeShop(
  `Izabela\`s shop`,
  [
    { item: "Coffee", type: "drink", price: 3 },
    { item: "Tea", type: "drink", price: 1.5 },
    { item: "Pommes", type: "food", price: 3.6 },
    { item: "Cake", type: "food", price: 4.2 },
    { item: "Scrumble", type: "food", price: 7 },
    { item: "Water", type: "drink", price: 2 },
  ],
  []
);

shop.addOrder("Coffee");
shop.addOrder("Tea");
shop.addOrder("Water");
shop.addOrder("Pommes");
shop.addOrder("Cake");
shop.addOrder("Scrumble");

shop.listOrders();
shop.dueAmount();
shop.cheapestItem();
shop.drinksOnly();
shop.foodOnly();
