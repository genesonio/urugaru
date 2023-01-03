import Image from "next/image"
import type { ChangeEvent } from "react"
import { useState } from "react"
import upload from "./upload.module.css"

const Upload = () => {
  const [page, setPage] = useState<"gallery" | "shop">("gallery") //bucket/folder
  const [value, setValue] = useState<number>() // price
  const [photo, setPhoto] = useState<string>() // photoUrl to preview
  const [fileName, setFileName] = useState<string>() // fileName to url generator
  const [name, setName] = useState<string>() // Draw name

  const handlePage = (e: ChangeEvent<HTMLSelectElement>) => {
    const selectedPage = e.target.value as "gallery" | "shop"
    setPage(selectedPage)
  }

  const handleValue = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    const isNum = !isNaN(newValue)
    if (isNum) {
      setValue(newValue)
    }
  }

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.files ||
      typeof e.target.files == "undefined" ||
      !e.target.files[0]
    )
      return
    setFileName(e.target.files[0].name)
    setPhoto(URL.createObjectURL(e.target.files[0]))
  }

  /*    const handleUpload = () {

   }
 */
  return (
    <div className={upload.layout}>
      <h1>Upload</h1>

      <form className={upload.form}>
        <div style={{ display: "flex", alignItems: "center" }}>
          <label htmlFor="page">Upload to </label>
          <select
            onChange={event => handlePage(event)}
            className={upload.select}
            name="page"
            id="page"
          >
            <option className={upload.option} value="gallery">
              Gallery
            </option>
            <option className={upload.option} value="shop">
              Shop
            </option>
          </select>
        </div>
        <label className={upload.photoLb} htmlFor="photo">
          Photo: {fileName}
        </label>
        <input
          className={upload.photo}
          onChange={event => handlePhoto(event)}
          type="file"
          name="photo"
          id="photo"
        />
        {photo !== undefined ? (
          <Image
            className={upload.preview}
            width={186.3}
            height={263.58}
            src={photo}
            alt=""
          />
        ) : null}
        <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
          <label className={upload.nameLb} htmlFor="photoName">
            Name:{" "}
          </label>
          <input
            onChange={e => setName(e.target.value)}
            className={upload.photoName}
            type="text"
            name="photoName"
            id="photoName"
          />
        </div>
        {page === "shop" ? (
          <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
            <label htmlFor="price">Price: </label>
            <input
              className={upload.price}
              onChange={event => handleValue(event)}
              type="text"
              value={value}
              name="price"
              id="price"
            />
            {value}
          </div>
        ) : null}
        <input type="button" value="Upload" className={upload.button} />
      </form>
    </div>
  )
}

export default Upload
