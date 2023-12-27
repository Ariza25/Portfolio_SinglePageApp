import Slider from '../components/slider/Slider'
import Techs from '../components/infos/Techs'
import Info from '../components/infos/Info'
import Contato from "../components/contato/Contato"
import Portfolio from "../components/portfolio/Portfolio"
import Services from '../components/infos/Services'

const Home = () => {

  return (
    <>
    <Slider/>
    <Info/>
    <Techs/>
    <Services/>
    <Portfolio/>
    <Contato/>
    </>
  )
}

export default Home