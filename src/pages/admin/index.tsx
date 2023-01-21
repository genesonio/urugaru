import { useSession } from "next-auth/react"
import Upload from "../../components/Upload"
import adminAuth from "../../utils/adminAuth"

const Admin = () => {
  const { data: session } = useSession()
  const auth: boolean | undefined = adminAuth(session?.user?.email)
  return <>{auth && <Upload />}</>
}

export default Admin
