import { useState, useEffect } from "react";
import Link from 'next/link'
import styles from '../styles/UserDetails.module.css'

const UserDetails = ({id}) => {
  const [user, setUser] = useState(null)

    const fetchUser = async (id)=>{
       const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
        const data = await res.json()
        setUser(data)
    }

    useEffect(()=>{
        fetchUser(id)
    }, [])

    return !user? null: (
      <div>
        <h1>{ user.name }</h1>
        <p>{ user.email }</p>
        <p>{ user.website }</p>
        <p>{ user.address.city }</p> 
        <Link href="/users/">
            <div className={styles.btn}>Back to Users</div>
        </Link>               
      </div>
    ) 
  }
  
  export default UserDetails;