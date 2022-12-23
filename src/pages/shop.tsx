import Print from "../components/Print/Print";
import shopStyle from "../styles/shop.module.css"

const Shop = () => {
  return (
    <div className={shopStyle.shop}>
      <Print alt='' url="https://picsum.photos/450/800" price="783" />
      <Print alt='' url="https://picsum.photos/450/800" price="200" />
      <Print alt='' url="https://picsum.photos/450/800" price="300" />
      <Print alt='' url="https://picsum.photos/450/800" price="400" />
      <Print alt='' url="https://picsum.photos/450/800" price="500" />
      <Print alt='' url="https://picsum.photos/450/800" price="600" />
      <Print alt='' url="https://picsum.photos/450/800" price="700" />
      <Print alt='' url="https://picsum.photos/450/800" price="800" />
      <Print alt='' url="https://picsum.photos/450/800" price="900" />
    </div>
  )
}

export default Shop