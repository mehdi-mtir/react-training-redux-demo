import { useSelector, useDispatch } from "react-redux";
import { increment, decrement, incrementByValue, resetCount } from "./counterSlice";
import { useState } from "react";

const Counter = ()=>{
  const count = useSelector((state)=>state.counter.count);
  const [incrementValue, setIncrementValue] = useState(0);

  const onIncrementValueChange = ({target})=>{
    setIncrementValue(Number(target.value) || 0);
  }

  const resetAll = ()=>{
    setIncrementValue(0);
    dispatch(resetCount());
  }

  const dispatch = useDispatch();

  return <>
        <h1>Counter App</h1>
        <p>{count}</p>
        <div>
          <input
            type="number"
            name="icrementValue"
            value={incrementValue}
            onChange = {onIncrementValueChange}/>
        </div>

        <button onClick={()=>dispatch(increment())} className='btn btn-success'>+</button>
        <button onClick={()=>dispatch(decrement())} className='btn btn-danger'>-</button>
        <button onClick={()=>dispatch(incrementByValue(incrementValue))} className="btn btn-primary"> +incrementValue </button>
        <button onClick={resetAll} className="btn btn-warning">Reset</button>
  </>
}

export default Counter;
