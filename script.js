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

