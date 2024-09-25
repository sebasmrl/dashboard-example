import { configureStore } from '@reduxjs/toolkit';

import  counterSlice  from './counter/counterSlice';
import { useDispatch, useSelector } from 'react-redux';





export const store = configureStore({
  reducer: {
    counter: counterSlice
  },
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>  //Tipado del store

// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch //Tipado de las acciones que se pueden disparar



// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()
export const useAppSelector = useSelector.withTypes<RootState>()