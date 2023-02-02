import { useEffect, useState } from "react"
import { trpc } from "../../../utils/trpc"
import style from "./edit.module.css"
import Image from "next/image"
import type { Print } from "../../../types/Print"
import { deletePhoto } from "../../../libs/s3Client.mjs"

const Edit = () => {
  const [image, setImage] = useState<Print>({
    id: "",
    name: "",
    url: "",
    description: "",
    dimension: "",
    price: 0,
    toShop: false,
    toGallery: true
  })

  const { data } = trpc.print.getOne.useQuery({ id: image.id })
  const update = trpc.print.update.useMutation()
  const del = trpc.print.delete.useMutation()

  useEffect(() => {
    if (data) setImage(data)
  }, [data])

  useEffect(
    () => setImage({ ...image, id: window.location.pathname.slice(12) }),
    []
  )

  const handleChange = (
    target:
      | (EventTarget & HTMLInputElement)
      | (EventTarget & HTMLTextAreaElement)
  ) => {
    const key = target.id
    const value = target.value
    if (key == "price") setImage({ ...image, [key]: Number(value) })
    else setImage({ ...image, [key]: value })
  }

  const handleUpdate = () => {
    update.mutate(image)

    window.location.reload()
  }

  const handleDelete = () => {
    deletePhoto(image.url)
    del.mutate({ id: image.id })
    window.location.pathname = "/admin"
  }

  if (!image) return null
  return (
    <div className={style.edit}>
      <div className={style.imageWrapper}>
        <Image className={style.image} fill src={image.url} alt={image.name} />
      </div>
      <div className={style.features}>
        <div className={style.feature}>
          <label className={style.label} htmlFor="name">
            Name:
          </label>
          <input
            className={style.input}
            onChange={({ target }) => handleChange(target)}
            placeholder="Name"
            id="name"
            type="text"
            value={image.name}
          />
        </div>
        <div className={style.feature}>
          <label className={style.label} htmlFor="description">
            Description:
          </label>
          <textarea
            className={style.textArea}
            spellCheck={false}
            placeholder="Description"
            value={image.description}
            onChange={({ target }) => handleChange(target)}
            id="description"
          />
        </div>
        <div className={style.feature}>
          <label className={style.label} htmlFor="dimension">
            Dimension:
          </label>
          <input
            className={style.input}
            type="text"
            id="dimension"
            placeholder="10cm x 20cm"
            value={image.dimension}
            onChange={({ target }) => handleChange(target)}
          />
        </div>
        <div className={style.feature}>
          <label className={style.label} htmlFor="price">
            Price:
          </label>
          <input
            className={style.input}
            type="text"
            id="price"
            placeholder="999"
            value={image.price}
            onChange={({ target }) => handleChange(target)}
          />
        </div>
        <div
          style={{
            display: "flex",
            gap: "1.2 rem",
            width: "19rem",
            justifyContent: "space-between"
          }}
        >
          <label className={style.label} htmlFor="shop">
            Shop:
          </label>
          <input
            type="checkbox"
            id="shop"
            defaultChecked={image.toShop}
            onClick={() => setImage({ ...image, toShop: !image.toShop })}
          />

          <label className={style.label} htmlFor="gallery">
            Gallery:
          </label>
          <input
            type="checkbox"
            id="gallery"
            defaultChecked={image.toGallery}
            onClick={() => setImage({ ...image, toGallery: !image.toGallery })}
          />
        </div>
        <div className={style.buttons}>
          <button onClick={() => handleUpdate()} className={style.button}>
            Save
          </button>
          <button onClick={() => handleDelete()} className={style.button}>
            Delete
          </button>
        </div>
      </div>
      <button
        className={style.button}
        style={{ height: "3rem" }}
        onClick={() => (window.location.pathname = "/admin")}
      >
        Back
      </button>
    </div>
  )
}

export default Edit
