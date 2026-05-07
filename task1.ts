// Problem 1: Create a TypeScript function filterEvenNumbers that accepts an array of numbers and returns a new array containing only the even numbers.

const filterEvenNumbers = (val1 : number[]) : number[] => {
    const  arr : number[] = [];
    val1.forEach((val) => {
        if(val % 2 === 0)
        {
            arr.push(val);
        }
    })
    return arr;
};

// console.log(filterEvenNumbers([1, 2, 3, 4, 5, 6]));




// Problem 2: Write a function reverseString that takes a string as input and returns the reversed version of that string.


const reverseString = (str : string) : string => {
    let newString = "";
    for(let i = str.length-1 ; i >= 0; i--)
    {
        newString += str[i];
    }
    return newString;
}
// // console.log(reverseString("typescript"));



// // Problem 3:  Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

type StringOrNumber = string | number;

const checkType = (value : StringOrNumber) : string => {
    if(typeof value === "string") return "String";
    else return "Number";
}


// Problem 4: Define a union type StringOrNumber and create a function checkType that uses type guards to return "String" if the input is a string or "Number" if the input is a number.

const user = { id: 1, name: "John Doe", age: 21 };

const getProperty = <T> (obj : T, key: keyof T) => {
    return obj[key];
}

// console.log(getProperty(user, "name"));


// Problem 5: Define an interface Book with properties title, author, and publishedYear. Create a function toggleReadStatus that accepts a Book object and returns a new object with an added isRead property (boolean), defaulting to true.


const myBook = {
            title: "TypeScript Guide", 
            author: "Jane Doe", 
            publishedYear: 2024 
        };

interface Book {
            title: string, 
            author: string, 
            publishedYear: number 
}
const toggleReadStatus =(obj : Book) => {
    return {
        ...obj,
        isRead : true
    };
};

// console.log(toggleReadStatus(myBook));



// Problem 6: Create a class Person with a name and age. Then, create a subclass Student that adds a grade property. Include a method getDetails in the Student class that returns a string with the student's name, age, and grade.

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

// const student = new Student("Alice", 20, "A");
// tsc task1.ts
// node task1.js
// console.log(student.getDetails());


// Problem 7:  Create a function getIntersection that takes two arrays of numbers and returns a new array containing only the elements that are present in both arrays.

const getIntersection = (arr1 : number[], arr2 : number[]) : number[] => {
    const newArr :number[] = [];

    arr1.forEach((value) => {
        if(arr2.includes(value) && !newArr.includes(value))
        {
            newArr.push(value);
        }
    })
    
    return newArr;
}

// console.log(getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));

