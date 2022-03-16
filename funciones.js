// const fecthPokemon = () => {
//     const pokeName = document.getElementById("pokeName");
//     let pokeInput = pokeName.value.toLowerCase();
//     const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`;
//     fetch(url).then((res) => {
//         if (res.status !="200"){
//             console.log(res);
//             pokeImage("./images/error404.gif");
//         }
//         else{
//             return res.json();
//         }
//     }).then((data) =>{
//         console.log(data);
//         let pokeImg = data.sprites.front_default;
//         console.log(pokeImg);
//         pokeImage(pokeImg);
//         let nombreDisplay = data.name;
//         console.log(nombreDisplay);
//     })
// }

// const pokeImage = (url) => {
//     const pokeImg = document.getElementById("pokeImg");
//     pokeImg.src = url;
// }

// NUEVO METODO DE TRAER INFORMACIOND DE UNA API

const baseURL = `https://pokeapi.co/api/v2/pokemon/`
const pokemon = document.getElementById("pokemonName")
const buttonSearch = document.getElementById('searchPokemon')
// const buttonDelete = document.getElementById('deletePokemon')
const appNode = document.getSelection('app')




buttonSearch.addEventListener('click', instertPokemon)
buttonSearch.addEventListener('touchstart', instertPokemon)


function instertPokemon(){
    window.fetch(`${baseURL}${pokemon.value.toLowerCase()}`)
    .then ( response =>{
        if (response.status === 404 ){
           alert('This Pokemon is not available, please try it with another one!')
        }else{
            return response.json()
        }
    })
    .then(responseJSON =>{
       const allItems = []

       const result = []

       for(let pokemonInfo in responseJSON){
           result.push([pokemonInfo, responseJSON[pokemonInfo]])
       }
       console.table(result)
       //Crear imagen
        const pokeImg = document.getElementById("pokeImg");
        pokeImg.src = result[14][1].front_default
        const pokeId = document.getElementById("pokeId");
        pokeId.innerHTML = result[6][1]
        const pokeType = document.getElementById("pokeType");
        pokeType.innerHTML = result[16][1][0].type.name
        const pokeFraquezas = document.getElementById("pokeFraq1");
        pokeFraquezas.innerHTML = result[0][1][0].ability.name
        const pokeFraquezas2 = document.getElementById("pokeFraq2");
        pokeFraquezas2.innerHTML = result[0][1][1].ability.name
        const pokePeso = document.getElementById("pokePeso");
        pokePeso.innerHTML = result[17][1]
        const pokeAltura = document.getElementById("pokeAltura");
        pokeAltura.innerHTML = result[4][1]

        // Estadisticas 

        const pokePs = document.getElementById("pokePs");
        pokePs.innerHTML = result[15][1][0].base_stat
        const pokeAtk = document.getElementById("pokeAtk");
        pokeAtk.innerHTML = result[15][1][1].base_stat
        const pokeDef = document.getElementById("pokeDef");
        pokeDef.innerHTML = result[15][1][2].base_stat
        const pokeSpAtk = document.getElementById("pokeSpAtk");
        pokeSpAtk.innerHTML = result[15][1][3].base_stat
        const pokeSpDef = document.getElementById("pokeSpDef");
        pokeSpDef.innerHTML = result[15][1][4].base_stat
        const pokeSpeed = document.getElementById("pokeSpeed");
        pokeSpeed.innerHTML = result[15][1][5].base_stat

// Forms

        const pokeForms = document.getElementById("pokeForms");
        pokeForms.innerHTML = result[11][1]
        

        //Nombre
        const pokeNombre1 = document.getElementById("pokeNombre1");
        pokeNombre1.innerHTML = result[10][1]

        //Movimientos
        const pokeMove1 = document.getElementById("pokeMove1");
        pokeMove1.innerHTML = result[9][1][0].move.name
        const pokeMove2 = document.getElementById("pokeMove2");
        pokeMove2.innerHTML = result[9][1][1].move.name
        const pokeMove3 = document.getElementById("pokeMove3");
        pokeMove3.innerHTML = result[9][1][39].move.name
        const pokeMove4 = document.getElementById("pokeMove4");
        pokeMove4.innerHTML = result[9][1][3].move.name
        const pokeMove5 = document.getElementById("pokeMove5");
        pokeMove5.innerHTML = result[9][1][4].move.name
        const pokeMove6 = document.getElementById("pokeMove6");
        pokeMove6.innerHTML = result[9][1][5].move.name
        const pokeMove7 = document.getElementById("pokeMove7");
        pokeMove7.innerHTML = result[9][1][6].move.name
        const pokeMove8 = document.getElementById("pokeMove8");
        pokeMove8.innerHTML = result[9][1][7].move.name
        const pokeMove9 = document.getElementById("pokeMove9");
        pokeMove9.innerHTML = result[9][1][8].move.name
        const pokeMove10 = document.getElementById("pokeMove10");
        pokeMove10.innerHTML = result[9][1][9].move.name






    })
}
