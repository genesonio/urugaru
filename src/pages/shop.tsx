import Print from "../components/Print/Print";
import shopStyle from "../styles/shop.module.css"

const Shop = () => {
  const urls = []

  for (let i = 1; i <= 8 ; i++) {
    urls.push(`https://zuj1e2l076.execute-api.sa-east-1.amazonaws.com/v1/s3?key=urugaru/gallery/${i}.jpg`)    
  }

  return (
    <div className={shopStyle.shop}>
      {urls.map((url, index) => {
        return <Print alt="random" url={url} key={index} />
      })}
    </div>
  )
}

export default Shop