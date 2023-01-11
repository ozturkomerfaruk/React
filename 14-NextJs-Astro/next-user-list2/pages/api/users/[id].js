import { users } from '../../../data/users.js'

export default function handler({query: {id}}, res) {
  const filtered = users.filter(user => user.id == id)
  if (filtered.length > 0) {
    res.status(200).json(filtered[0])
  } else {
    res
      .status(404)
      .json({ message: `User with the id of ${id} is not found` })
  }
}
