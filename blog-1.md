Any allow a variable hold value of any datatype. if we not sure about data type of the variable, we can use any. when we dealing with dynamic value from API that we can not now the data type of a variable in this senario we can use any datatype.

        let data: any = "Hello";

        data = 123;
        data = true;

        console.log(data.toUpperCase()); // No TypeScript error, but unsafe

In typescript, it check variable datatype but when we use any datatype of a variable it stop checking type.For this reason,  Any labeled "type safety hole".

In typescript "unknown" datatype force to checking before performing operation on the value. It store all type of data but should check datatype before operation.

        let data: unknown = "Hello";

        // data.toUpperCase();  give error

        if (typeof data === "string") {
            console.log(data.toUpperCase()); // Safe
}

type narrowing bacially ensure type before used of unknown value. It also ensure data variable is hold any data or not before operation.

        if (typeof data === "string") {
            console.log(data.toUpperCase())
        }