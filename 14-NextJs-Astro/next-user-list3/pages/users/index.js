import styles from '../../styles/Users.module.css'
import { useRouter } from 'next/router'

const Users = ({users}) => {
  const router = useRouter()

  return (
    <>
      <h1>All Users</h1>
      {users.map(user => (
          <div key={user.id} 
               onClick={()=>router.push('/users/' + user.id)}>
            <div className={styles.single}>
              <h3>{ user.name }</h3>
            </div>
          </div>
        ))}      
    </>
  );
}

// This gets called on every request
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch('https://jsonplaceholder.typicode.com/users')
  const users = await res.json()

  // Pass data to the page via props
  return { props: { users } }
} // end-getServerSideProps

export default Users;