import Print from '../components/Print/Print'
import galleryStyle from '../styles/gallery.module.css'

function Gallery() {
  const urls = []

  for (let i = 1; i <= 8 ; i++) {
    urls.push(`https://zuj1e2l076.execute-api.sa-east-1.amazonaws.com/v1/s3?key=urugaru/gallery/${i}.jpg`)    
  }

  return (
    <div className={galleryStyle.gallery}>
      {urls.map((url, index) => {
        return <Print alt="random" url={url} key={index} />
      })}
    </div>
  )
}

export default Gallery