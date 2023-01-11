import {useState, createContext} from 'react';

export const CounterContext = createContext();

function CounterContextProvider(props) {
    const [count, setCount] = useState(0)
    const decrement = ()=>setCount(count=>count-1)
    const increment = ()=>setCount(count=>count+1)

     return (
        <CounterContext.Provider value={{count, decrement, increment}}>
            {props.children}
        </CounterContext.Provider>
     );
} // end-CounterContextProvider

export default CounterContextProvider;
