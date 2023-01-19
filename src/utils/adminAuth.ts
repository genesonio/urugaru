import getAdmins from "./getAdmEmail"

const adminAuth = (email: string | null | undefined) => {
  const admins = getAdmins()
  if (!email) return false
  return admins?.includes(email)
}

export default adminAuth