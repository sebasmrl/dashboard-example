import { Action, Dispatch, Middleware, MiddlewareAPI } from "@reduxjs/toolkit";
import { RootState } from "..";


  export const  localStorageMiddleware= (state: MiddlewareAPI)=>{
    return (next:Dispatch) => (action: Action) =>{
        //?Este middleware se ejecuta para todas las acciones
        next(action);
        
        if(action.type ==='pokemons/toggleFavorite') {
            const {pokemons } =  state.getState() as RootState;
            localStorage.setItem('favoritePokemons', JSON.stringify(pokemons))
            return;
        }
    }
} 


export const localStorageFavoritePokemonsMiddlewares: Middleware = (store) => {

  return (next) => (action) => {
    const result = next(action);
    const { type } = action as Action;
    
    if (type === "pokemons/toggleFavorite") {
      const { pokemons } = store.getState() as RootState;
      localStorage.setItem("favoritePokemons", JSON.stringify(pokemons.favorites));
      return;
    }
    return result;
  };

};