import { PokemonGrid } from "@/pokemons/components";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: "Favoritos",
  description: "Fugiat proident occaecat qui est sunt dolore dolor est incididunt excepteur labore reprehenderit ullamco.",
};



export default async function FavoritesPage(){


  return (
    <div className="flex flex-col p-2">
      <span className="text-3xl my-2 ml-6 ">Pokemons Favoritos <small className="text-blue-500">Global State </small></span>

      <PokemonGrid pokemons={[]}/>

    </div>
  );
}







