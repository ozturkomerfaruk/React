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

///-----------------------------------------------------------
/// Get all path ids & then generate those pages
/// Called once during page generation
///
export const getStaticPaths = async () => {
  const res = await fetch('https://jsonplaceholder.typicode.com/users');
  const data = await res.json();

  // map data to an array of path objects with params (id)
  const paths = data.map(ninja => {
    return {
      params: { id: ninja.id.toString() }
    }
  })

  return {
    paths,
    fallback: false
  }
}

export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch('https://jsonplaceholder.typicode.com/users/' + id);
  const data = await res.json();

  return {
    props: { user: data }
  }
}

export default Details;