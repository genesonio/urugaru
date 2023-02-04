import Link from "next/link"
import { Key } from "react"
import Print from "../../components/Print"
import shopStyle from "./shop.module.css"
import { trpc } from "../../utils/trpc"
import Image from "next/image"

const Shop = () => {
  const { data } = trpc.print.list.useQuery()
  const hasPrints = data?.some(({ toShop }) => toShop)

  return (
    <>
      {!hasPrints && (
        <div style={{ width: "90vw", textAlign: "center" }}>
          <h1>Thank you for visiting our shop!</h1>
          <h2>
            We&apos;re still setting things up and not currently able to sell
            any prints at the moment, but please check back soon for updates!
          </h2>
        </div>
      )}
      {!data && (
        <Image
          style={{ alignSelf: "center", marginTop: "10rem" }}
          height={300}
          width={300}
          alt="Loading"
          src="/Loading.svg"
        />
      )}
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
