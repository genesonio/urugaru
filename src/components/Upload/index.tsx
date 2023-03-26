import Image from "next/image"
import type { ChangeEvent } from "react"
import { useState } from "react"

import { generateUploadUrl } from "../../libs/s3Client.mjs"
import { trpc } from "../../utils/trpc"

import upload from "./upload.module.css"

function Upload() {
  const [price, setPrice] = useState<number>(0) // price
  const [preview, setPreview] = useState<string>("") // previewUrl to preview
  const [photo, setPhoto] = useState<File | string | Iterable<Uint8Array>>("")
  const [photoObj, setPhotoObj] = useState({
    name: "",
    description: "",
    dimension: "",
    toShop: false,
    toGallery: false
  })
  const mutation = trpc.print.upload.useMutation()

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target
    setPhotoObj(prev => {
      return { ...prev, [name]: value }
    })
  }

  const handleInputNum = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value)
    const isPositiveNum = !isNaN(newValue) && newValue > 0
    if (isPositiveNum) {
      setPrice(newValue)
    }
  }

  const handlePhoto = (e: ChangeEvent<HTMLInputElement>) => {
    if (
      !e.target.files ||
      typeof e.target.files == "undefined" ||
      !e.target.files[0]
    )
      return
    setPhoto(e.target.files[0])
    setPreview(URL.createObjectURL(e.target.files[0]))
  }

  const handleUpload = async () => {
    const url = await generateUploadUrl()

    await fetch(url, {
      method: "PUT",
      headers: new Headers({
        "Content-Type": "multipart/form*data"
      }),

      body: photo as BodyInit | null | undefined
    })

    const imgUrl = url.split("?")[0] as string

    mutation.mutate({
      ...photoObj,
      price,
      url: imgUrl
    })

    window.location.reload()
  }

  return (
    <div className={upload.layout}>
      <form className={upload.form}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "1rem"
          }}
        >
          <div
            style={{
              display: "flex",
              width: "8rem",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <label htmlFor="shop">To Shop</label>
            <input
              type="checkbox"
              name="shop"
              id="shop"
              onChange={() =>
                setPhotoObj({ ...photoObj, toShop: !photoObj.toShop })
              }
            />
          </div>
          <div
            style={{
              display: "flex",
              width: "8rem",
              justifyContent: "space-between",
              alignItems: "center"
            }}
          >
            <label htmlFor="gallery">To Gallery</label>
            <input
              type="checkbox"
              name="gallery"
              id="gallery"
              onChange={() =>
                setPhotoObj({ ...photoObj, toGallery: !photoObj.toGallery })
              }
            />
          </div>
        </div>
        <label className={upload.photoLb} htmlFor="photo">
          Photo: <span>click here</span>
        </label>
        <input
          className={upload.photo}
          onChange={e => handlePhoto(e)}
          type="file"
          name="photo"
          id="photo"
        />
        {preview !== "" ? (
          <Image
            className={upload.preview}
            width={186.3}
            height={263.58}
            src={preview}
            alt={photoObj.name}
          />
        ) : null}
        <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
          <label className={upload.nameLb} htmlFor="name">
            Name:{" "}
          </label>
          <input
            onChange={e => handleChange(e)}
            className={upload.photoName}
            type="text"
            name="name"
            id="name"
          />
        </div>
        <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
          <label
            className={upload.nameLb}
            style={{ alignSelf: "start" }}
            htmlFor="description"
          >
            Description:{" "}
          </label>
          <input
            onChange={e => handleChange(e)}
            className={upload.photoName}
            style={{ height: "8rem" }}
            type="text"
            name="description"
            id="description"
          />
        </div>
        <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
          <label className={upload.nameLb} htmlFor="dimension">
            Dimension:
          </label>
          <input
            onChange={e => handleChange(e)}
            className={upload.photoName}
            type="text"
            name="dimension"
            id="dimension"
          />
        </div>

        {photoObj.toShop === true ? (
          <div style={{ display: "flex", gap: ".4rem", alignItems: "center" }}>
            <label htmlFor="price">Price: </label>
            <input
              className={upload.price}
              onChange={event => handleInputNum(event)}
              type="text"
              value={price}
              name="price"
              id="price"
            />
          </div>
        ) : null}
        <input
          type="button"
          value="Upload"
          onClick={() => handleUpload()}
          className={upload.button}
        />
      </form>
    </div>
  )
}

export default Upload
