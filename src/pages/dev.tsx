import { useSession } from "next-auth/react"
import adminAuth from "../utils/adminAuth"

const Dev = () => {
  const { data: session } = useSession()
  const auth = adminAuth(session?.user?.email)
  return (
    <>
      <h1>Development Only</h1>
    </>
  )
}

export default Dev
