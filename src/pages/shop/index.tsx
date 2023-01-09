import Link from "next/link"
import Print from "../../components/Print/Print"
import shopStyle from "../../styles/shop.module.css"
import { trpc } from "../../utils/trpc"

const Shop = () => {
  const { data } = trpc.print.list.useQuery()

  return (
    <>
      <div className={shopStyle.shop}>
        {data?.map(({ id, url, name, price, isAvailable }, index) => {
          if (!isAvailable) return
          if (!price) return
          return (
            <Link
              className={shopStyle.link}
              key={index}
              onClick={() => localStorage.setItem("productId", id)}
              href="/shop/[productName]"
              as={`/shop/${name}`}
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
        })}
      </div>
    </>
  )
}

export default Shop
