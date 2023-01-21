let myTuple: [boolean,string,number];

let age : number = 35;
if(age > 40 ) age +=10;

let sales = 123_456_789;
console.log(sales);

// Enum
const enum Size {small=1,medium,large};
let mySize:Size = Size.large;
console.log(mySize);

// Function
// Enable these settins in tsconfig.json : noUnusedParameters , noImplicitReturns ,noUnusedLocals
function calculateTax(income : number) : number{
if(income <60_000 ) return income*1.2
return income*1.3
}

// Objects
let employee : {readonly id:number,name:string}= {id:1,name:"Stephanie"};
// Better approach TYPE ALIAS
type Employee = {
  readonly id:number,
  name:string,
  retire : (date: Date) => void
}

let employee1: Employee = {id:2, name:"Teddy", retire: (date: Date)=>{
  console.log(date);
}}

//employee1.id= 6; // error. id is readonlly property
console.log(employee1);

// UNION TYPES |
function kgToLbs(weight :number | string) : number{ //weight could be a number or a string
  // Narrowing
  if(typeof weight === 'number')
  return weight*2.2;
  else
  return parseInt(weight)*2.2;
}

// INTERSECTION &
type Draggable = {
  drag : ()=> void
}

type Resizable = {
  resize:()=> void
}

type UIWidget = Draggable & Resizable;

let textBox: UIWidget = {
  drag: () =>{ },
  resize: () =>{}
}

// Literal Types
type Quantity =  50 | 100;
let quantity : Quantity = 100;

type Distance = 'Km' | 'Miles';
let distance : Distance = 'Km'

// Nullable Types

// Optional property access (Optional Chaining ?. In this case for a property) 

// Optional element access operator ?. customer?.[0] (In this case for an array)

// Optional call (?. in this case for a function)
