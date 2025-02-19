class Food {
  constructor(name, month, day, quantity, nutrients, date, setNutrient) {
    console.log(name, month, day, quantity);
    this.name = name;
    this.month = month;
    this.day = day;
    this.quantity = quantity;
    this.nutrients = nutrients;
    this.date = date;

    // Call populateNutrients immediately
    this.active = true;
    this.populateNutrients(setNutrient);

    console.log(nutrients, "food class");
  }

  populateNutrients(setNutrient) {
    setNutrient(this.nutrients); // Add the nutrients using the provided function
  }
}

export default Food;
