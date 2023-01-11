import { useState, useEffect } from "react";
import Link from 'next/link'
import styles from '../styles/UserDetails.module.css'

const UserDetails = ({id}) => {
  const [user, setUser] = useState(null)

    const fetchUser = async (id)=>{
      const res = await fetch('http://localhost:3000/api/users/' + id);
      if (res.status === 200){
        const data = await res.json()
        setUser(data)
      } else {
        const err = await res.text()
        console.log('Error in UserDetails: ', err)
      }
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