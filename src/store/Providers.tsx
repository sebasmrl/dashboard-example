'use client';

import { useEffect } from "react";
import { Provider } from "react-redux";
import { store } from ".";

import { FavoritePokemons, setFavoritePokemons } from "./pokemons/pokemonsSlice";


interface Props{
    children: React.ReactNode;
}


export const Providers = ({children}:Props) => {

  useEffect(() => {
    const favPokeString = localStorage.getItem('favoritePokemons') ?? '{}';
    const pokemons:FavoritePokemons = JSON.parse(favPokeString);
    store.dispatch( setFavoritePokemons(pokemons))
  }, [])
  

  return (
    <Provider store={store}>
        {children}
    </Provider >
  )
}
