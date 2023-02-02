import Print from "../components/Print/Print"
import galleryStyle from "../styles/gallery.module.css"
import { trpc } from "../utils/trpc"

function Gallery() {
  const { data } = trpc.print.list.useQuery()
  return (
    <>
      <div className={galleryStyle.gallery}>
        {data?.map(({ name, url, toGallery }, index) => {
          if (!toGallery) return
          return <Print name={name} alt={name} url={url} key={index} />
        })}
        {data === undefined || (data?.length === 0 && <p>Coming soon!</p>)}
      </div>
    </>
  )
}

export default Gallery
