let OcksannaJohn = {
  firstName: "Ocksanna",
   lastName: "John",
   age: "16",
   height: "5'5",
   color: "pink",
   zodiac: "fish",
   drinkTea: "true",
   flowerName: "Lavender",
   majorArcana: "Empress",
   hairColor: "Brown",

}


let JaneDoe = {
  firstName: "Jane",
   lastName: "Doe",
   age: "16",
   height: "5'3",
   color: "periwinkle",
   zodiac: "maiden",
   drinkTea: "false",
   flowerName: "Catmint",
   majorArcana: "Heirophant",
   hairColor: "Blonde",

}
//printing out a entire object
console.log(OcksannaJohn);
console.log(JaneDoe);
//first name only
console.log(OcksannaJohn.firstName);
console.log(JaneDoe.firstname);

console.log("Ocksanna's First name is:" + OcksannaJohn.firstName);
console.log("Jane's First name is:" + JaneDoe.firstName);

let memory "OcksannaJohn.firstName" = Ocksanna
let memory "JaneDoe.firstName" = Jane

OcksannaJohn.firstName = JaneDoe.firstName
JaneDoe.firstName = OcksannaJohn.firstName
