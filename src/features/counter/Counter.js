import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./counterSlice";

const Counter = ()=>{
  const count = useSelector((state)=>state.counter.count);

  const dispatch = useDispatch();

  return <>
        <h1>Counter App</h1>
        <p>{count}</p>
        <button onClick={()=>dispatch(increment())} className='btn btn-success'>+</button>
        <button onClick={()=>dispatch(decrement())}className='btn btn-danger'>-</button>
  </>
}

export default Counter;
