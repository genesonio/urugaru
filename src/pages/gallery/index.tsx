import Print from "../../components/Print"
import galleryStyle from "./gallery.module.css"
import { trpc } from "../../utils/trpc"
import Image from "next/image"

function Gallery() {
  const { data } = trpc.print.list.useQuery()
  return (
    <>
      {!data && (
        <Image
          priority
          style={{ alignSelf: "center", marginTop: "10rem" }}
          height={300}
          width={300}
          alt="Loading"
          src="/Loading.svg"
        />
      )}
      <div className={galleryStyle.gallery}>
        {data?.map(({ name, url, toGallery }, index) => {
          if (!toGallery) return
          return (
            <Print
              name={name}
              showPrice={!toGallery}
              alt={name}
              url={url}
              key={index}
            />
          )
        })}
        {data === undefined || (data?.length === 0 && <p>Coming soon!</p>)}
      </div>
    </>
  )
}

export default Gallery
