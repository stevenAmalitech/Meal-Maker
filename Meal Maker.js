const menu = {
  _courses: {
    appetizers: [],
    mains: [],
    desserts: [],
  },

  get courses() {
    return {
      appetizers: this._courses.appetizers,
      mains: this._courses.mains,
      desserts: this._courses.desserts,
    };
  },

  get appetizers() {
    return this._courses.appetizers;
  },

  set appetizers(string) {
    this._courses.appetizers.push(string);
  },

  get mains() {
    return this._courses.mains;
  },

  set mains(string) {
    this._courses.mains.push(string);
  },

  get desserts() {
    return this._courses.desserts;
  },

  set desserts(string) {
    this._courses.desserts.push(string);
  },

  addDishToCourse(courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    // this._courses[courseName].push(dish)
    this[courseName] = dish;
  },

  getRandomDishFromCourse(courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },

  generateRandomMeal() {
    const appetizer = this.getRandomDishFromCourse("appetizers");
    const main = this.getRandomDishFromCourse("mains");
    const dessert = this.getRandomDishFromCourse("desserts");
    const totalPrice = appetizer.price + main.price + dessert.price;

    return `Your meal is ${appetizer.name}, ${main.name}, with ${dessert.name}. The price is $${totalPrice}.`;
  },
};

menu.addDishToCourse("appetizers", "Caesar Salad", 4.25);
menu.addDishToCourse("appetizers", "Joachim Salad", 4.25);
menu.addDishToCourse("appetizers", "Peters Salad", 4.25);
menu.addDishToCourse("mains", "Rice", 4.25);
menu.addDishToCourse("mains", "Soup", 4.25);
menu.addDishToCourse("mains", "French Fries", 4.25);
menu.addDishToCourse("desserts", "Cake", 4.25);
menu.addDishToCourse("desserts", "Rockbuns", 4.25);
menu.addDishToCourse("desserts", "Coke", 4.25);

const meal = menu.generateRandomMeal();

console.log(meal);

console.log(menu.courses);
