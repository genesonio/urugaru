import Print from '../components/Print/Print'
import galleryStyle from '../styles/gallery.module.css'

function Gallery() {
  return (
    <div className={galleryStyle.gallery}>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
      <Print url="https://picsum.photos/900/1600" alt="Random"/>
    </div>
  )
}

export default Gallery