import {useState} from react;

function Counter() {
  const [counter, setCounter] = useState(0);
  return (
    <div>
      Counter: {counter}
    </div>
  )
}
