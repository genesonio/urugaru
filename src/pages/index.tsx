import Print from "../components/Print/Print"
import galleryStyle from "../styles/gallery.module.css"
import { trpc } from "../utils/trpc"

function Gallery() {
  const { data } = trpc.print.list.useQuery()

  return (
    <div className={galleryStyle.gallery}>
      {data?.map(({ name, url, isAvailable }, index) => {
        if (isAvailable === true) return
        return <Print alt={name} url={url} key={index} />
      })}
    </div>
  )
}

export default Gallery
