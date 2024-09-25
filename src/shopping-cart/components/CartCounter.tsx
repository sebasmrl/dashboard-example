'use client';

import { useAppDispatch, useAppSelector } from "@/store";
import { addOne, initCounterState, resetCount, sustractOne } from "@/store/counter/counterSlice";
import { useEffect } from "react";

interface Props{
  value?:number;
}

interface CounterResponse{ method: string; count: number}

const getApiCounter = async():Promise<CounterResponse>=>{
  const data:CounterResponse = await fetch('/api/counter').then( res=>res.json());

  return data

}


export const CartCounter = ({value=0}:Props) => {
  
  //const [count, setCount] = useState<number>(value);
  const count = useAppSelector(state=> state.counter.count);
  const dispatch = useAppDispatch();

  /* useEffect(() => {
    dispatch( initCounterState(value))
  }, [dispatch, value]) */
  useEffect(()=>{
    getApiCounter()
      .then( res=> dispatch( initCounterState(res.count)))
  },[dispatch])


  return (
    <>
      <span className="text-9xl">{count}</span>
      <div className="flex">
        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={ ()=> dispatch(sustractOne() )}
        >
          -1
        </button>

        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={ ()=>dispatch(resetCount(value) )}
        >
          Reset
        </button>

        <button 
          className="flex items-center justify-center p-2 rounded-xl bg-gray-900 text-white hover:bg-gray-600 transition-all w-[100px] mr-2"
          onClick={ ()=> dispatch( addOne()  )}
        >
          +1
        </button>
      </div>
    </>
  )
}
