import { useEffect, useState } from "react"
import { trpc } from "../../../utils/trpc"
import style from "./edit.module.css"
import Image from "next/image"
import type { Print } from "../../../types/Print"

const Edit = () => {
  const [image, setImage] = useState<Print>({
    id: "",
    name: "",
    url: "",
    description: "",
    dimension: "",
    price: 0,
    isAvailable: false
  })

  const { data } = trpc.print.getOne.useQuery({ id: image.id })
  const update = trpc.print.update.useMutation()

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
    if (target.id === "price") parseInt(target.value)
    setImage({ ...image, [target.id]: target.value })
  }

  const handleUpdate = () => {
    update.mutate(image)

    window.location.reload()
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
            Description:{" "}
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
        <div style={{ display: "flex", gap: "1.2 rem" }}>
          <label className={style.label} htmlFor="available">
            Available:
          </label>
          <input
            type="checkbox"
            id="available"
            defaultChecked={image.isAvailable}
            checked={image.isAvailable}
            onClick={() =>
              setImage({ ...image, isAvailable: !image.isAvailable })
            }
          />
        </div>
        <div className={style.buttons}>
          <button onClick={() => handleUpdate()} className={style.button}>
            Save
          </button>
          <button className={style.button}>Delete</button>
        </div>
      </div>
    </div>
  )
}

export default Edit
