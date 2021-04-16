// 1. Creats a new function, that when called, has its this keyword
// set to the provided context.

// var pokemon = {
//     firstName : 'Pika',
//     lastname : 'Chu',
//     getPokeName: function(){
//         var fullName = this.firstName+ ' '+ this.lastname
//         return fullName;
//     }
// };

// var pokemonName = function(snack, hobby){
//     console.log(this.getPokeName() + ' I choose you')
//     console.log(this.getPokeName()+ ' loves '+ snack + ' and '+ hobby)
// }

// var bindPokemon = pokemonName.bind(pokemon)

// bindPokemon('sushi', 'javascript')

// 2.call : call a function with a given this and arguments provided individually

var pokemon = {
    firstName : 'Pika',
    lastname : 'Chu',
    getPokeName: function(){
        var fullName = this.firstName+ ' '+ this.lastname
        return fullName;
    }
};

var pokemonName = function(snack, hobby){
    console.log(this.getPokeName()+ ' loves '+ snack + ' and '+ hobby)
}

pokemonName.call(pokemon, 'sushi', 'javascript')

pokemonName.apply(pokemon, ['sushi', 'javascript'])