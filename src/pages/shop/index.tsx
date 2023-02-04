import Link from "next/link"
import type { Key } from "react"
import Print from "../../components/Print/Print"
import shopStyle from "./shop.module.css"
import { trpc } from "../../utils/trpc"

const Shop = () => {
  const { data } = trpc.print.list.useQuery()

  return (
    <>
      <div className={shopStyle.shop}>
        {data?.map(
          ({ id, url, name, price, toShop }, index: Key | null | undefined) => {
            if (!toShop) return
            return (
              <Link
                className={shopStyle.link}
                key={index}
                href="/shop/[imageId]"
                as={`/shop/${id}`}
              >
                <Print
                  price={price}
                  alt={name}
                  name={name}
                  url={url}
                  key={index}
                  showPrice={toShop}
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
