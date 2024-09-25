import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector } from 'react-redux';

import  counterSlice  from './counter/counterSlice';
import pokemonsSlice from './pokemons/pokemonsSlice';
import { localStorageFavoritePokemonsMiddlewares } from './middlewares/localstorage-favorite-pokemons-middleware';





export const store = configureStore({
  reducer: {
    counter: counterSlice,
    pokemons: pokemonsSlice
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(localStorageFavoritePokemonsMiddlewares),
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>  //Tipado del store

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch //Tipado de las acciones que se pueden disparar



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()