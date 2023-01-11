import {useState} from 'react'
export default function Counter(){
    const [count, setCount] = useState(0);

    const increment = ()=>setCount(count+1)
    const decrement = ()=>setCount(count-1)

    return (
        <div>
            <h3>A React component rendered with client:load (CSR)</h3>
            <h3>Count: {count}</h3>
            <button onClick={decrement}>Decrement</button>
            {'  '}
            <button onClick={increment}>Increment</button>
        </div>
    )
}