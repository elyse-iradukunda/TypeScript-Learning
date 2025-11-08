class Person {
  readonly dateOfBirth: Date;
  constructor(dateOfBirth: Date) {
    this.dateOfBirth = dateOfBirth;
  }
}
let newPerson = new Person(new Date(1823, 12, 23));
console.log(newPerson.dateOfBirth);
