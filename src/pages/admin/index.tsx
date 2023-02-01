import { useSession } from "next-auth/react"
import AdminMenu from "../../components/AdminMenu"
import adminAuth from "../../utils/adminAuth"

const Admin = () => {
  const { data: session } = useSession()
  const auth: boolean | undefined = adminAuth(session?.user?.email)
  return <>{auth && <AdminMenu />}</>
}

export default Admin
