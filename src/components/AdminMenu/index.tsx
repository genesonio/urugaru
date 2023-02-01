import { useState } from "react"
import Manager from "../Manage"
import Upload from "../Upload"
import style from "./adminMenu.module.css"

const AdminMenu = () => {
  const [screen, setScreen] = useState<string>("upload")

  return (
    <>
      <nav className={style.nav}>
        <h1 onClick={() => setScreen("upload")} className={style.option}>
          Upload
        </h1>
        <h1 onClick={() => setScreen("manage")} className={style.option}>
          Manage
        </h1>
      </nav>

      {screen === "upload" && <Upload />}
      {screen === "manage" && <Manager />}
    </>
  )
}

export default AdminMenu
