import { useRouter } from 'next/router'

export default function CommentPage() {
  const router = useRouter()
  const id = router.query.id as string

  return (
    <>
      <h1>Comment: {id}</h1>
    </>
  )
}