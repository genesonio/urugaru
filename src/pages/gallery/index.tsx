import Image from "next/image"

import Print from "../../components/Print"
import Carousel from "../../components/Carousel"

import { trpc } from "../../utils/trpc"

import galleryStyle from "./gallery.module.css"
import { useState } from "react"

function Gallery() {
  const [isModal, setIsModal] = useState<boolean>(false)
  const [index, setIndex] = useState<number>(0)
  const { data } = trpc.print.list.useQuery()

  const handleModal = (index?: number) => {
    setIsModal(!isModal)
    if (typeof index == "undefined") setIndex(0)
    if (index) setIndex(index)
    console.log(isModal)
  }
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
            <button
              onClick={() => handleModal(index)}
              className={galleryStyle.modal}
              key={index}
            >
              <Print name={name} showPrice={!toGallery} alt={name} url={url} />
            </button>
          )
        })}
        <Carousel
          handleModal={handleModal}
          images={data}
          key={index}
          modal={isModal}
        />
        {data === undefined || (data?.length === 0 && <p>Coming soon!</p>)}
      </div>
    </>
  )
}

export default Gallery
