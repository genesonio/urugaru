import Print from "../components/Print/Print"
import galleryStyle from "../styles/gallery.module.css"
import { trpc } from "../utils/trpc"

function Gallery() {
  const { data } = trpc.print.list.useQuery()
  return (
    <>
      {!data && (
        <h1
          style={{
            alignSelf: "center",
            justifySelf: "center",
            paddingTop: "10rem"
          }}
        >
          Loading...
        </h1>
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
