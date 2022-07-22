class Animal {
    constructor(name, type, color){
        this.name = name;
        this.type = type;
        this.color = color;
    }
}

class Mamal extends Animal {
    constructor(name, type, color){
        super(name, type, color)
    }
      sound(){
            console.log(`My name is ${this.name}, I'm a ${this.type} of the color ${this.color} `);
        }

    }

const cow = new Mamal('Betty', 'Cow', 'Brown');


const dragons = ['Tim', 'Johnathan', 'Sandy', 'Sarah'];
dragons.includes('John');

dragons.filter(name=> name.includes("John"));

const power100 = (num) => num**100;

const startLine = '     ||<- Start line';
let turtle = '🐢';
let rabbit = '🐇';

turtle.padStart(10);

let obj = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }
Object.entries(obj).map(value => value.join(" ")).join(' ')

const array = [[1],[2],[3],[[[4]]],[[[5]]]]
array.flat(40)
const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
console.log(greeting.flatMap(x => x.join(' ')).join(' '))
const userEmail3 = '     cannotfillemailformcorrectly@gmail.com   '
const users = { user1: 18273, user2: 92833, user3: 90315 }
updatedUsersArray = usersArray.map((user) => [user[0], user[1] * 2])


let will_pokemon = {
    pikachu: {
        species: 'Mouse Pokemon',
        height: 0.4,
        weight: 6,
        power: 'lightning',
        friend: { 
            charizard: {
                species: 'Dragon Pokemon',
                height: 1.7,
                weight: 90.5,
                power: 'fire'
            }
        }
    }
}

let andrei_pokemon = {
    raichu: {
        species: 'Mouse Pokemon',
        height: 0.8,
        weight: 30,
        power: ''
    }
}
/* 
if (andrei_pokemon && andrei_pokemon.raichu && will_pokemon 
    && will_pokemon.pikachu && will_pokemon.pikachu.friend 
    && will_pokemon.pikachu.friend.charizard) {
        console.log('fight!')
    } else {
        console.log('walk away...')
    }
 */

if (andrei_pokemon?.raichu && will_pokemon?.pikachu?.friend?.charizard){
    console.log('fight');
} else{
    console.log('walk away');
}

const object = {
    name:
}