import Image from "next/image"
import Modal from "react-modal"
import { Swiper, SwiperSlide } from "swiper/react"

import type { Print } from "../../types/Print"

import style from "./carousel.module.css"
import "swiper/swiper-bundle.css"
import "swiper/swiper.css"

Modal.setAppElement("#__next")

const Carousel = ({
  index: index,
  images,
  modal,
  handleModal
}: {
  index: number
  images: Print[] | undefined
  modal: boolean
  handleModal: (index?: number) => void
}) => {
  console.log(index)
  if (!images) return <></>
  return (
    <Modal
      className={style.modal}
      overlayClassName={style.overlay}
      isOpen={modal}
    >
      <button onClick={() => handleModal()} className={style.iconWrapper}>
        <Image
          fill
          src="/close.svg"
          className={style.icon}
          alt="Close button"
        />
      </button>
      <Swiper className={style.swiper} initialSlide={index} spaceBetween={30}>
        {images.map((image, index) => {
          return (
            <SwiperSlide key={index}>
              <Image
                fill
                className={style.image}
                src={image.url}
                alt={`Image of art ${image.name}`}
              />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </Modal>
  )
}

export default Carousel
