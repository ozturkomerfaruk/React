import '../styles/Users.css'
import {useState, useEffect} from 'react'
import { Link } from 'react-router-dom';

const UserList = () => {
    const [users, setUsers] = useState([])

    const fetchData = async () =>{
      const res = await fetch('https://jsonplaceholder.typicode.com/users')
      const data = await res.json()
      setUsers(data)
    } // end-fetchData

    useEffect(()=>{
      fetchData()
    }, [])

    return (
      <div>
        <h1>All Users</h1>
        {users.map(user => (
          <Link to={'/users/' + user.id} key={user.id}>
            <div className="single">
              <h3>{ user.name }</h3>
            </div>
          </Link>
        ))}
      </div>
    )
}

export default UserList;