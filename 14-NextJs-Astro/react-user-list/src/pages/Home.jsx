import { Link } from 'react-router-dom';
import '../styles/Home.css'

const Home = ()=>{
    return (
        <>
          <h1 className="title">Homepage</h1>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <p className="text">Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus animi impedit suscipit architecto, odio inventore nostrum non neque dicta. Quam magni accusantium culpa distinctio tempore iure accusamus, dolorem nobis odit.</p>
          <Link to="/users/">
            <div className="btn">See Users</div>
          </Link>
      </>        
    )
}

export default Home;