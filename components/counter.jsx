import {useState} from react;

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <>
    <div>
      Counter: {counter}
    </div>
    <div onClick={()=>setCounter(old=>old+1)}>+</div>
    <div onClick={()=>setCounter(old=>old-1)}>-</div>
    </>
  )
}
