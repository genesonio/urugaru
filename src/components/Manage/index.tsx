import Image from "next/image"
import Link from "next/link"
import { trpc } from "../../utils/trpc"
import style from "./manager.module.css"

const Manager = () => {
  const { data } = trpc.print.list.useQuery()

  return (
    <>
      <div className={style.list}>
        {data?.map(({ id, name, url }, index) => {
          return (
            <Link
              href="/admin/edit/[imageId]"
              as={`/admin/edit/${id}`}
              className={style.image}
              key={index}
            >
              <div className={style.imageWrapper}>
                <Image
                  src={url}
                  alt="name"
                  fill
                  style={{ objectFit: "contain" }}
                />
              </div>
              <h1>{name}</h1>
            </Link>
          )
        })}
      </div>
    </>
  )
}

export default Manager
