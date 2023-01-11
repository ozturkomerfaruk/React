import UserDetails from '../../comps/UserDetails'
import { useRouter } from "next/router"

const Details = () => {
  const router = useRouter()
  const { id } = router.query

  return <UserDetails id={id}/>
}

export default Details;