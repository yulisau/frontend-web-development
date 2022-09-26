/*object oriented programming, making objects: */

//these objects and console.logs are too repetitive
/*   
const jackRabbit = {
    name: 'Jack', 
    height: 'very tall'
};

const peterRabbit = {
    name: 'Peter', 
    height: 'kinda tall'
};

console.log(`hello, my name is ${jackRabbit.name}, and I am ${jackRabbit.height}`);
console.log(`hello, my name is ${peterRabbit.name}, and I am ${peterRabbit.height}`);
*/

//bit better, using functions
/*const jackRabbit = {
    name: 'Jack', 
    height: 'very tall'
};

const peterRabbit = {
    name: 'Peter', 
    height: 'kinda tall'
};

function sayHello(rabbit) {
console.log(`Hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
};

sayHello(jackRabbit);
sayHello(peterRabbit);
*/

//slightlyt better, cloning objects
/*const jackRabbit = {
    name: 'Jack', 
    height: 'very tall'
};

const peterRabbit = structuredClone(jackRabbit);
peterRabbit.name = 'Peter'; 
peterRabbit.height = 'kinda tall';  

function sayHello(rabbit) {
console.log(`Hello, my name is ${rabbit.name}, and I am ${rabbit.height}`);
};

sayHello(jackRabbit);
sayHello(peterRabbit); 
*/

//better, using object prototypes
/* const rabbitProto = {
  name: "",
  height: "",
  sayHello: function () {
    console.log(`Hello, my name is ${this.name}, and I am ${this.height}`); //this refers to THIS object,,, like itself
  },
};

const jackRabbit = Object.create(rabbitProto); //creates object based on object prototypes (not relevant anymore)
const peterRabbit = Object.create(rabbitProto);

jackRabbit.name = "Jack";
jackRabbit.height = "very tall";

peterRabbit.name = "Peter";
peterRabbit.height = "kinda tall";

jackRabbit.sayHello();
peterRabbit.sayHello();
*/

//almost to the best...we're getting there fam... use "constructor function"
/*function createRabbit(name, height) {
  const rabbitProto = {
    name: "",
    height: "",
    sayHello: function () {
      console.log(`Hello, my name is ${this.name}, and I am ${this.height}`); //this refers to THIS object,,, like itself
    },
  };

  const rabbit = Object.create(rabbitProto); //creates object based on object prototypes (not relevant anymore)

  rabbit.name = name;
  rabbit.height = height;
  
  return rabbit; 
};

const jackRabbit = createRabbit("Jack","very tall"); 
const peterRabbit = createRabbit("Peter","kinda tall"); 

jackRabbit.sayHello();
peterRabbit.sayHello();
*/


//the BEST and CURRENT METHOD, using classes
class Rabbit { //capitalize words in classes 
constructor (name,height) {
this.name = name; 
this.height = height; 
};
sayHello() { 
    console.log(`Hello, my name is ${this.name}, and I am ${this.height}`); //uses literal string ``
};

};
const jackRabbit = new Rabbit('Jack', 'very tall'); 
const peterRabbit = new Rabbit('Peter', 'kinda tall'); 

jackRabbit.sayHello();
peterRabbit.sayHello();


