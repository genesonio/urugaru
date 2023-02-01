import Link from "next/link"
import type { Key } from "react"
import Print from "../../components/Print/Print"
import shopStyle from "../../styles/shop.module.css"
import { trpc } from "../../utils/trpc"

const Shop = () => {
  const { data } = trpc.print.list.useQuery()

  return (
    <>
      <div className={shopStyle.shop}>
        {data?.map(
          (
            { id, url, name, price, isAvailable },
            index: Key | null | undefined
          ) => {
            if (!isAvailable || !price) return
            return (
              <Link
                className={shopStyle.link}
                key={index}
                onClick={() => localStorage.setItem("productId", id)}
                href="/shop/[imageId]"
                as={`/shop/${id}`}
              >
                <Print
                  price={price}
                  alt={name}
                  name={name}
                  url={url}
                  key={index}
                />
              </Link>
            )
          }
        )}
      </div>
    </>
  )
}

export default Shop
