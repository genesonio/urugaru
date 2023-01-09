import login from "./login.module.css"

const Login = () => {
  return (
    <div className={login.flex}>
      <h1>Olá</h1>
      <form>
        <label htmlFor="username">Username:</label>
        <br />
        <input type="text" id="username" name="username" />
        <br />
        <label htmlFor="password">Password:</label>
        <br />
        <input type="password" id="password" name="password" />
        <br />
        <br />
        <input type="button" value="Login" />
      </form>
    </div>
  )
}

export default Login
