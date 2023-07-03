//Part II: JavaScript Reps

//Easy Going
for(let i = 1; i <= 20; i++){
    console.log(i);
}

//Get Even

for(let i = 0; i <= 200; i++){
    if(i % 2===0){
        console.log(i);
    }
}

//Fizz Buzz

for(let i = 1; i <=100; i++){
    if((i % 3 ===0 && i % 5 ===0)){
        console.log('FizzBuzz');
    }else if(i % 3 ===0){
        console.log('Fizz');
    }else if((i % 5 === 0)){
        console.log('Buzz');
    }else{
        console.log(i);
    }
}

//Wild Wild Life

const wolfy = ["Wolfy", "wolf", 16, "Yukon Territory"]
const sharky = ["Sharky", "shark", 20, "Left Coast"]
const plantee = ["Plantee", "plant",  5000 , "Mordor"]
const porgee = ["Porgee", "Porg", 186, "Ahch-To"]
const dart = ["D'Art" , "Demogorgan Dog", 2, "Upside Down"]

plantee[2]++;
wolfy[3] = "Gotham City";
dart.push("Hawkins");
wolfy[0] = "Gameboy";

//Yell at the Ninja Turtles

let ninjaTurtles = ['Donatello','Leonardo','Raphael','Michaelangelo'];

for(let element of ninjaTurtles){
    console.log(element.toUpperCase());
}

//Methods, Revisited

const favMovies = ['Jaws', 'The Fellowship of the Ring', 'Howl\'s Moving Castle', 'Django Unchained', 'Cloud Atlas', 'The Usual Suspects', 'Toy Story', 'Conan the Barbarian', 'Titanic', 'Harry Potter', 'Fried Green Tomatoes', 'Volver', 'Oculus', 'Seven', 'Black Panther', 'Harry Potter', 'Imitation of Life', 'Snatch', 'Fast and Furious'];

console.log(favMovies.indexOf('Titanic'));

favMovies.sort();
favMovies.pop();
favMovies.push("Guardians of the Galaxy");
favMovies.reverse();
favMovies.shift();
favMovies.unshift('Ttransformers');
console.log(favMovies.indexOf("Django Unchained"));
favMovies.splice(15,1,"Avatar");
let sliced = favMovies.slice(favMovies.length / 2, favMovies.length);
console.log(sliced);
console.log(favMovies);
console.log(favMovies.indexOf("Fast and Furious"));
console.log(favMovies.indexOf("Django Unchained"));

//Where is Waldo

const whereIsWaldo = [["Timmy", "Frank"], "Eggbert",
                    ["Lucinda", "Jacc", "Neff", "Snoop"],
                    ["Petunia", ["Baked Goods", "Waldo"]]];

whereIsWaldo.splice(1,1);
whereIsWaldo[1][2] = "No one";
console.log(whereIsWaldo[2][1][1]);

//Excited Kitten

const randomWords = (words) => {
    let randomNumber = Math.floor(Math.random()*words.length);
    return words[randomNumber];

}

let words = ["...human...why you taking pictures of me?...", "...the catnip made me do it...", "...why does the red dot always get away..."];

for(let i = 1; i <= 20; i++){
    if(i % 2 === 0){
        console.log(randomWords(words));
    }else{
        console.log(i);
    }
}

//Find the Median

const nums = [14,11,16,15,13,16,15,17,19,11,12,14,19,11,15,17,11,18,12,17,12,71,18,15,12];
nums.sort();
console.log(nums[Math.floor((nums.length)/ 2)]);

//Return of the Closets

const kristynsCloset = [
    "left shoe",
    "cowboy boots",
    "right sock",
    "Per Scholas hoodie",
    "green pants",
    "yellow knit hat",
    "marshmallow peeps"
  ];
  
  // Thom's closet is more complicated. Check out this nested data structure!!
  const thomsCloset = [
    [
      // These are Thom's shirts
      "grey button-up",
      "dark grey button-up",
      "light blue button-up",
      "blue button-up",
    ],[
      // These are Thom's pants
      "grey jeans",
      "jeans",
      "PJs"
    ],[
      // Thom's accessories
      "wool mittens",
      "wool scarf",
      "raybans"
    ]
  ];

  //Alien Attire

  let kristynsShoe = kristynsCloset[0];
  thomsCloset[2].push(kristynsShoe);

  //Dress Us Up

  console.log(`Kristyn's outfit for today  will be ${kristynsCloset[1]} and ${kristynsCloset[3]}!`);
  console.log(`Kristyn's outfit for today  will be ${kristynsCloset[4]} and ${kristynsCloset[5]}!`);
  console.log(`Kristyn's outfit for today  will be ${kristynsCloset[1]} and ${kristynsCloset[4]}!`);

  for(let i = 0 ;i < thomsCloset.length; i++){
    console.log(`Thoms outfit for today is ${thomsCloset[0][i]}, ${thomsCloset[1][i]} and ${thomsCloset[2][i]}`);
  }
