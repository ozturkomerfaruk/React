import styles from '../styles/Users.module.css'
import {useState, useEffect} from 'react'
import { useRouter } from 'next/router';

const UserList = () => {
  const router = useRouter()
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
    <>
      {users.map(user => (
          <div key={user.id}
            onClick={()=>router.push('/users/' + user.id)}>
            <div className={styles.single}>
              <h3>{ user.name }</h3>
            </div>
          </div>
        ))}      
    </>
  )
}

export default UserList;