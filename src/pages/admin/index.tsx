import { useSession } from "next-auth/react"
import AdminMenu from "../../components/AdminMenu"
import useAdminAuth from "../../utils/useAdminAuth"

const Admin = () => {
  const { data: session } = useSession()
  const auth: boolean | undefined = useAdminAuth(session?.user?.email)
  return <>{auth && <AdminMenu />}</>
}

export default Admin
