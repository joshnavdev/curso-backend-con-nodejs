class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  saludar() {
    console.log(`Hola, soy ${this.name} y tengo ${this.age} años.`);
  }
}

const person1 = new Person('Joshua', 25);
person1.saludar();

class Student extends Person {
  constructor(name, age, grade) {
    super(name, age);
    this.grade = grade;
  }

  estudiar() {
    console.log(`${this.name} está estudiando en el grado ${this.grade}.`);
  }
}

const student1 = new Student('Nicolas', 20, 5);
student1.saludar();
student1.estudiar();
