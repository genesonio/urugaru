import { motion } from "framer-motion"
import Card from "../components/Card"
import bioStyle from "../styles/bio.module.css"

const Bio = () => {
  const born = new Date(2000, 3, 26)
  const today = new Date()
  const age = Math.floor(
    Math.ceil(Math.abs(born.getTime() - today.getTime()) / (1000 * 3600 * 24)) /
      365.25
  )
  return (
    <>
      <motion.div
        initial={{ opacity: 0, scale: 1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          default: {
            duration: 1,
            delay: 0.5,
            ease: "easeInOut"
          }
        }}
        className={bioStyle.gridBio}
      >
        <Card className={bioStyle.leftCard} alt=" " link="" />
        <h3 className={bioStyle.name}>Garu, {age}</h3>
        <p className={bioStyle.bio}>
          Garu, also known as Guru, is a talented Brazilian illustrator. From a
          young age, she has always demonstrated a passion for drawing,
          dedicating hours of her life to this activity.
          <br />
          <br />A lover of classic horror films and an admirer of nature, her
          work as an illustrator is marked by fantasy, interests in folklore,
          the macabre beauty, and more recently the representation of animals.{" "}
          <br />
          <br />
          Using ink and paper, she seeks to blend graffiti to create blends with
          high levels of details, giving life to her creations in a unique and
          singular way.
        </p>
      </motion.div>
    </>
  )
}

export default Bio
