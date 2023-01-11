import styles from '../../styles/UserDetails.module.css'
import Link from 'next/link'

const Details = ({user}) => {
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

// This gets called on every request
export async function getServerSideProps(context) {
  const id = context.params.id

  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json()

  // Pass data to the page via props
  return { props: { user: data } }
} // end-getServerSideProps

export default Details;