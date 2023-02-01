import Image from "next/image"
import { trpc } from "../../utils/trpc"
import style from "./manager.module.css"

const Manager = () => {
  const { data } = trpc.print.list.useQuery()

  return (
    <>
      {data?.map(
        ({ name, url, isAvailable, description, dimension, price }, index) => {
          if (price === null) return
          return (
            <div className={style.list} key={index}>
              <div className={style.imageWrapper}>
                <Image
                  src={url}
                  alt="name"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <div className={style.printChar}>
                <div className={style.name}>
                  <label className={style.label} htmlFor={name}>
                    Name:{" "}
                  </label>
                  <input
                    className={style.input}
                    type="text"
                    id={name}
                    value={name}
                  />
                </div>
                <div className={style.description}>
                  <label className={style.label} htmlFor={"desc" + index}>
                    Description:{" "}
                  </label>
                  <textarea
                    spellCheck={false}
                    className={style.textarea}
                    value={description}
                    id={"desc" + index}
                  />
                </div>
                <div className={style.dimension}>
                  <label className={style.label} htmlFor={"dim" + index}>
                    Dimension:
                  </label>
                  <input
                    id={"dim" + index}
                    className={style.input}
                    value={dimension}
                    type="text"
                  />
                </div>
                <div className={style.store}>
                  <div className={style.price}>
                    <label htmlFor={"price" + index}>Price:</label>
                    <input
                      id={"price" + index}
                      className={style.inputPrice}
                      type="text"
                      value={price}
                    />
                  </div>
                  <div className={style.isAvailable}>
                    <label
                      className={style.label}
                      htmlFor={"available" + index}
                    >
                      Available:
                    </label>
                    <input
                      className={style.available}
                      type="checkbox"
                      id={"available" + index}
                      checked={isAvailable}
                    />
                  </div>
                </div>
              </div>
              <div className={style.buttons}>
                <button className={style.button}>Save</button>
                <button className={style.button}>Delete</button>
              </div>
            </div>
          )
        }
      )}
    </>
  )
}

export default Manager
