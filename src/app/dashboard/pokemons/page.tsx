import { PokemonGrid } from "@/pokemons/components";
import { PokemonsResponse, SimplePokemon } from "@/pokemons/interfaces";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Pokemons",
  description: "Encuentra el pokemon que más te guste",
};



const getPokemons = async(limit=10, offset=0):Promise<SimplePokemon[]> =>{
  const data:PokemonsResponse = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`)
                .then( res => res.json());

  const pokemons = data.results.map( pokemon => ({
      id: pokemon.url.split('/').at(-2)!,
      name: pokemon.name
    })
  )
  //throw new Error('Esto es un error que no deberia suceder!')
  return pokemons;
}




export default async function PokemonsPage(){

  const pokemons = await getPokemons(151);

  return (
    <div className="flex flex-col p-2">
      <span className="text-3xl my-2 ml-6 text-blue-500">Listado de Pokemons <small>Estático </small></span>

      <PokemonGrid pokemons={pokemons}/>

    </div>
  );
}







