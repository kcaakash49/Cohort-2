
class Animal {
  constructor(name, legCount) {
    this.name = name
    this.legCount = legCount
  }
  describe() {
    return `${this.name} has ${this.legCount} legs`
  }
  static myType(){  //static is not associated with object but with class
    console.log("Animal")
  }
}

let cat = new Animal("Lion",4); //creates object cat with name and legcount key

console.log(cat.describe())

Animal.myType()
 