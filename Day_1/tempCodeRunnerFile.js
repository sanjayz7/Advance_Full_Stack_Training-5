function greet(name) {
  return `Hello, ${name}!`;
}
console.log(greet("Alice"));


let fruits =["Apple", "Banana", "Cherry"];
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
let car ={
  brand: "Toyota",
  model: "Corolla",
  year: 2020
}
console.log(car.brand);







let z="Banana";
 switch(z){
  case "Apple":
    console.log("Apple selected");
    break;
  case "Banana":
    console.log("Banana selected");
    break;
 }






 let person={
  name:"Sanjay"
  ,age:30
  };
 
  for( let key in person){
    console.log(key + ": " + person[key]);


  }
  let person2=["John", "Doe", 25];
  for( let index of person2){
    console.log(index + ": " + person2[index]);
  }

  let age=29;
   age >=18 ? console.log("Adult"): console.log("Minor");


   //Arrow Function
   const wgreet =(name)=>{
    return `Hi, ${name}!`;
   }
    console.log(wgreet("Bob"));


    const number=[1,2,3,4,5];
    const sq =number.map((num)=> num * num);
    console.log(sq);
    const moreNumbers =[6,7,8,9,10];
    const allNumbers =[...number, ...moreNumbers,1,2,3,4];
        console.log(allNumbers);





       // const allNumber =[0,...number,4,5,6];
       // console.log(allNumber);
        const person3={
          name:"Alice",
          age:28
        };
        const updatedPerson={
          ...person3,city:"New York"
        }
        console.log(updatedPerson);