class Individual {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  describe(): string {
    return `Name: ${this.name}, Age: ${this.age}`;
  }
}

class Engineer extends Individual {
  field: string;
  yearsOfExperience: number;

  constructor(name: string, age: number, field: string, yearsOfExperience: number) {
    super(name, age);
    this.field = field;
    this.yearsOfExperience = yearsOfExperience;
  }

  describe(): string {
    return `${super.describe()}, Field: ${this.field}, Years of Experience: ${this.yearsOfExperience}`;
  }
}
