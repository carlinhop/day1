//Section 1

//what types are these? Write your answer in a comment beside it.

1; //number
"cat"; //string
true; //boolean
[]; // array? object
{};// object
1.1;//number
undefined; //undefined

//Section 2

// what is the truthy/falsiness values of the following
// write your answer in a comment beside it
// you can use an if to test this...
1; //true
"cat"; //true
true;//true
NaN;//false
[]; //false
{}; //false
undefined; //false
""; //false

0;//false


//Section 3

//Using examples that are different from above...

//3.1 Assign a variable that is a number
var a = 1;
//3.2 Assign a variable that is a string
var b = "hello";
//3.3 Assign a variable that is a boolean
var c = true;
//3.4 Assign a variable that is an object
var d = {"team" : "Leones"}
//Section 4
//4.1 Write a statement that writes "hello" to the console if it's true and "bye" if it is false
var result = d ? "hello" : "bye";
console.log(result);  
//Section 5
var animals = ["raccoon","hedgehog","mouse","gerbil"];

//5.1. Assign the first element to a variable
var e = animals[0];
//5.2. Assign the last element to a variable
var f = animals[animals.length -1];
//5.3. Assign the length of an array to a variable
var len = animals.length;
//5.4. Add an item to the end of the array
animals.push("cat");
//5.5. Add an item to the start of the array
animals.shift("bat");
//5.6. Assign the index of hedgehog to a variable
var i = animals.indexOf("hedgehog");
//Section 6

//6.1 Create an array of 5 vegetables
var vegetables = ["carrot", "lettuce", "kale", "spinach", "cavolo nero"];
//6.2 Loop over the array and write to the console using a "while"
var index = vegetables.length
while(index){
  console.log(vegetables[index - 1]);
  index --;
}
//6.3 Loop again using a "for" with a counter
for (var i = 0; i < vegetables.length; i++){
  console.log(vegetables[i]);

}

//6.4 Loop again using a "for in"
for (veg of vegetables){
  console.log(veg);
  
}
//Section 7
var accounts = [
  { name: 'jay',
    amount: 125.50,
    type: 'personal'
  },
  { name: 'val',
    amount: 55125.10,
    type: 'business'
  },
  { name: 'marc',
    amount: 400.00,
    type: 'personal'
  },
  { name: 'keith',
    amount: 220.25,
    type: 'business'
  },
  { name: 'rick',
    amount: 1.00,
    type: 'personal'
  },
];
//7.1 Calculate the total cash in accounts
var total = 0;
for (people of accounts){
  total += people.amount;
}

//7.2 Find the amount of money in the account with the largest balance
var rich = 0;
for (people of accounts){
  if(people.amount > rich){
    rich = people.amount;
  }
}

//7.3 Find the name of the account with the smallest balance
var poor = rich;
for (people of accounts){
  if(people.amount < poor){
    poor = people.amount;
  }
}
//7.4 Calculate the average bank account value

var avg = 0;
for (people of accounts){
  avg += people.amount;
}

console.log(avg/accounts.length);

//7.5 Find the value of marcs bank account
var marcAmount = 0;
for (people of accounts){
  if(people.name === "marc"){
    marcAmount = people.amount;
  }
}
//7.6 Find the holder of the largest bank account
var nameRich = "";
for (people of accounts){
  if(people.amount === rich){
    nameRich = people.name;
  }
}
//7.7 Calculate the total cash in business accounts
var busAmount = 0;
for (people of accounts){
  if(people.type === "business"){
    busAmount += people.amount;
  }
}
//7.8 Find the largest personal account owner
var perAmount = 0;
for (people of accounts){
  if(people.type === "personal"){
    if (perAmount < people.amount){
      perAmount = people.amount;
    }
  }
}

var personalRich = "";
for (people of accounts){
  if(people.amount === perAmount){
    personalRich = people.name;
  }
}

//Section 8
//Assign a variable myPerson to a hash, giving them a name, height, favourite food and an eat method

var myPerson = {};
myPerson.name = "Maggie";
myPerson.height = 200;
myPerson.favouriteFood = "sushi";
myPerson.eat = function(food){
 if(food==="sushi") {
  console.log("Great!!");
  }
  else{
  console.log("Wacala!");
  }
};