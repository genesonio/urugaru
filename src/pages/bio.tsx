import Card from "../components/Card"
import bioStyle from "../styles/bio.module.css"

const Bio = () =>{
  return (
    <div className={bioStyle.gridBio}>
      <Card className={bioStyle.leftCard} alt="" link="https://picsum.photos/400/900" />
      <h3 className={bioStyle.name}>Raiane, 22</h3>
      <p className={bioStyle.bio}>
        Laboris nisi velit qui adipisicing minim ullamco voluptate. Occaecat
        commodo et Lorem veniam ipsum aliqua exercitation consectetur esse ea
        sint. Reprehenderit incididunt id ut occaecat mollit et ad voluptate
        magna. <br />
        <br />
        Commodo et id laborum do nisi incididunt quis minim do deserunt pariatur
        cillum. Labore magna consectetur commodo ullamco duis proident aliqua
        dolore minim magna. In eu fugiat sunt nulla laborum Lorem consectetur
        officia minim duis et. <br />
        <br />
        Culpa eiusmod laborum sit occaecat laboris. Nisi reprehenderit voluptate
        occaecat fugiat ad reprehenderit cupidatat id pariatur ad. Cupidatat qui
        voluptate proident culpa irure proident elit sint minim id commodo ipsum
        excepteur. Voluptate labore proident enim Lorem aliquip. Consequat ut
        nostrud ea non commodo velit. Adipisicing duis excepteur et consectetur
        est laboris officia incididunt deserunt duis sunt tempor.
      </p>
    </div>
  )
}

export default Bio