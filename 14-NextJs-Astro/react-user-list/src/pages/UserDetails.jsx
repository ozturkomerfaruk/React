import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom"

const UserDetails = () => {
  const { id } = useParams()
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
        <Link to="/users/">
            <div className="btn user-details-btn-left">Back to Users</div>
        </Link>

        <style>
          {
            `
            .user-details-btn-left {
              margin: 20px 0px;
            }
            `
          }
        </style>

      </div>
    ) 
  }
  
  export default UserDetails;