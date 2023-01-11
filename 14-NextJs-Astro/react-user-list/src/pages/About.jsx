import {useContext} from 'react'
import {CounterContext} from '../contexts/CounterContext'

const About = () => {
  const {count, decrement, increment} = useContext(CounterContext)    
  return (
    <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>
          <span className="about_blue">Counter value:</span> <b>{count}</b> {' '}
          <button onClick={decrement}>-</button>{' '}
          <button onClick={increment}>+</button>
        </p>

        <style>
          {`
            .about_blue {
              color: blue;
              font-weight: 800;
            }
          `}
      </style>
    </div>
  )
}
 
export default About;