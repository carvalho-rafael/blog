import { useRouter } from 'next/router'
import NavBar from '../../../components/navbar'

const Comment = () => {
  const router = useRouter()
  const { id, comment, likes } = router.query

  return (
    <>
      <NavBar />
      <h1>Post: {id}</h1>
      <h1>Comment: {comment} {likes}</h1>
    </>
  )
}

export default Comment