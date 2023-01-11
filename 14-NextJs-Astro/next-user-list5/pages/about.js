import Head from 'next/head'
import {useContext} from 'react'
import {CounterContext} from '../contexts/CounterContext'
import styles from '../styles/About.module.css'

const About = () => {
  const {count, decrement, increment} = useContext(CounterContext)

  return (
    <>
      <Head>
        <title>User List | About</title>
        <meta name="keywords" content="users"/>
      </Head>
      <div>
        <h1>About</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa porro reiciendis ea quibusdam nemo nobis hic iure quos odio corporis, laudantium animi laborum voluptatem quia, veniam fuga aperiam officia sequi!</p>
        <p>
          <span className={styles.blue}>Counter value:</span> <b>{count}</b> {' '}
          <button onClick={decrement}>-</button>{' '}
          <button onClick={increment}>+</button>
        </p>        
      </div>
    </>
  );
}
 
export default About;