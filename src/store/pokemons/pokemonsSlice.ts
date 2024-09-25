import { SimplePokemon } from '@/pokemons/interfaces';
import { createSlice, PayloadAction } from '@reduxjs/toolkit'

// { '1': { id:1, name:'bulbasaur} }
export interface FavoritePokemons{
  [key:string]: SimplePokemon
}

interface PokemonsState{
    favorites: FavoritePokemons
}




const initialState:PokemonsState = { 
  favorites: {}
   //  favorites:{ '1': { id:'1', name:'bulbasaur' }, } 
    
}

const pokemonsSlice = createSlice({
  name: 'pokemons',
  initialState,
  reducers: {
    setFavoritePokemons:  (state, action:PayloadAction<FavoritePokemons>)=>{
      state.favorites = action.payload;
    },

    toggleFavorite: (state, action:PayloadAction<SimplePokemon>)=>{
        const pokemon = action.payload;
        const { id } = pokemon;
        if(state.favorites[id] !== undefined){  
            delete state.favorites[id]; 
            //return;
        }else{
          state.favorites[id]=pokemon;
        }
        //!No hacer esto en Reducers
        //localStorage.setItem('favoritePokemons', JSON.stringify(state));

    }

  },

});

export const { toggleFavorite, setFavoritePokemons } = pokemonsSlice.actions

export default pokemonsSlice.reducer