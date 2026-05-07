// // 1
// type CartItem = {
//     name : string;
//     price : number;
//     quantity? : number;
// };

// const calculateTotal = (item : CartItem):number => {
//     const {price, quantity = 1} = item;
//     return price * quantity;
// };


// // 2

// type Person = {name:string; age:number};
// type JobDetails = {role :string, salary : number};

// type Employee = Person & JobDetails;


// const getProfile = (employee1 : Employee) => {
//         return `Name :${employee1.name} , Role :${employee1.role}`;
// };

// const emp: Employee = {
//     name: "Shaharier",
//     age: 25,
//     role: "Developer",
//     salary: 50000
// };

// console.log(getProfile(emp));

// // 3

// type UserResponse = {
//     info?: {
//         address?: {
//             zipCode?: string;
//         }
//     }
// };

// const getZipCode = (item : UserResponse) : string=> {
//     return item.info?.address?.zipCode ?? "00000";
// };

// console.log(getZipCode({}));
// // "00000"

// console.log(getZipCode({ info: {} }));
// // "00000"

// console.log(getZipCode({ info: { address: { zipCode: "1207" } } }));


// // 4

// let secretValue: unknown = "typescript is awesome";
// let upperVal = (secretValue as string).toUpperCase();

// if (typeof secretValue === "string") {
//     let upperVal = secretValue.toUpperCase();
//     console.log(upperVal)
// }


// 5

// const logLength = <T extends {length : number}>  (input :T) :number => {
//     return input.length;
// }

// console.log(logLength("hello"));     // 5
// console.log(logLength([1,2,3]));     // 3



// 6

// const product = { id: 101, name: "Keyboard", price: 50 };

// const getProduct = <T, K extends keyof T>(obj : T,key : K)=>{
//     return obj[key];
// }


// const x=getProduct(product, "name");  // ✅ OK
// const y=getProduct(product, "price"); // ✅ OK

// const z = getProduct(product, "stock");  // ❌ Error

//////////////////////// 7

// const Colors = {
// Primary: "RED",
// Secondary: "BLUE"
// } as const;

// type ValidColor = typeof Colors[keyof typeof Colors]

// const setColor = (info : ValidColor)=>{
//     return info
// }


// console.log(setColor("RED"));   // ✅ OK
// console.log(setColor("BLUE"));  // ✅ OK
// console.log(setColor("GREEN")); // ❌ Error



//////////////////////////// 8


// interface MyDocument {
//   title: string;
//   content: string;
//   author: string;
// }

// // Draft type
// type Draft<T> = {
//   readonly [P in keyof T]?: T[P];
// };

// // function to print draft
// const printDraft = (doc: Draft<MyDocument>): void => {
//   console.log("Title:", doc.title);
//   console.log("Content:", doc.content);
//   console.log("Author:", doc.author);
// };

// // 🎯 Input (user data)
// const myDraft: Draft<MyDocument> = {
//   title: "My First Draft"
// };

// // 🔥 Output
// printDraft(myDraft);


/////////////////////////////////// 9

type DataType<T> = T extends any[] ?"Large" : "samll";

type type1 = DataType<string[]>;
type type2 = DataType<number>;


// ////////////////////////10

interface UserAccount {
    id: number;
    username: string;
    password: string;
}

type PublicUser = Omit<UserAccount, "password">



