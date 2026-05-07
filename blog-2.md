four pillars of OOP like :Inheritance, Polymorphism, Abstraction, and Encapsulation.


Encapsulation :  Encapsulation is the process of OOP, where bind data, method etc in a class. Data is only accessable inside of the class. It increase the reusability of the class.useing method or creating object of the class data can access.

    class BankAccount {
        private balance: number = 0;

        deposit(amount: number) {
            this.balance += amount;
        }
    }






Inheritance : Inheritance is a process where parant properties inherit child. 

class Person{
    constructor(public name: string, public age : number){}
}

class Student extends Person{
    constructor( name:string,  age : number, public grade : string){
        super(name, age);
    }
    getDetails(): string{
        return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
    }
}

here Student class inherit the properties of Person class and can use name, age, grade properties as its own properties.





Polymorphism : polymorphism is the process that one entity like variable, method  work as multiple form.when one class inherit another class If different class use same name of entities it act different form based on class.

        class Animal {
            sound() {
                console.log("random sound");
            }
        }

        class Dog extends Animal {
            sound() {
                console.log("ghau ghau");
            }
        }






Abstraction : abstraction is the process of OOP, that hide complex implementation to user. It give clean code and same interface use multiple class. when a class extend an abstract class, those class must implement abstruct class abstract entities.

    abstract class Shape {
        abstract area(): number;
    }