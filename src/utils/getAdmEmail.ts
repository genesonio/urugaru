import { trpc } from "./trpc";

const getAdmins = () => {
  const adminEmail: string[] = []
  const { data } = trpc.user.listAdmin.useQuery()
  if (!data) return
  data.map(user => adminEmail.push(user.email))
  return adminEmail
}
export default getAdmins