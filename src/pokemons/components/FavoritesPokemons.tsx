'use client';

import { useAppSelector } from "@/store";
import { PokemonGrid } from "./PokemonGrid";
import { IoHeartOutline } from "react-icons/io5";

export const FavoritesPokemons = () => {
    const favoritesPokemons = useAppSelector(state => Object.values(state.pokemons.favorites) );
    //const [pokemons] = useState(favoritesPokemons); //mantener card en favoritos aunque unlike hasta que se cierre el componente

  return (
    <div>
        { (favoritesPokemons.length)
          ? <PokemonGrid pokemons={  favoritesPokemons } />
          : <NoFavorites />}
    </div>)
}


export const NoFavorites = () => {
  return (
    <div className="flex flex-col h-[50] items-center justify-center">
      <IoHeartOutline size={100} className="text-red-600"/>
      <span>No hay favoritos</span>
    </div>
  )
}
