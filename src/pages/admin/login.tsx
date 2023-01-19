import { signIn } from "next-auth/react"

const Login = () => {
  return (
    <input
      type="button"
      value="login"
      onClick={() => signIn("auth0", { callbackUrl: "/admin" })}
    />
  )
}

export default Login
