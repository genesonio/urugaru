import { getSession, signIn } from "next-auth/react"
import type { GetServerSideProps } from "next/types"
import { getServerAuthSession } from "../../server/common/get-server-auth-session"

getServerAuthSession

const Login = () => {
  return <input type="button" onClick={() => signIn("google")} value="Google" />
}

export const getServerSideProps: GetServerSideProps = async context => {
  const session = await getSession(context)
  console.log(session)

  return {
    props: {
      name: "Ge"
    }
  }
}

export default Login
