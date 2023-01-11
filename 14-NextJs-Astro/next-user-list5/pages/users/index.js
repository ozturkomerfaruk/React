import styles from '../../styles/Users.module.css'
import Link from 'next/link'

const Users = ({ users }) => {
  return (
    <div>
      <h1>All Users</h1>
      {users.map(user => (
        <Link href={'/users/' + user.id} key={user.id}>
          <div className={styles.single}>
            <h3>{ user.name }</h3>
          </div>
        </Link>
      ))}
    </div>
  );
}

// Called once during initial creation of the page
export const getStaticProps = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  return {
    props: { users: data }
  }
}
 
export default Users;