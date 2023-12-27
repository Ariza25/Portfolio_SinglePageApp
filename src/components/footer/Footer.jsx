import Logo from "../../assets/images/logo.png"
import {Icon, FooterEnd, Text, Image} from "./FooterStyled"

const Footer = () => {
  return (
    <div className="container-fluid px-0">
  <FooterEnd className="d-flex justify-content-center align-items-center py-3 my-4">
    <div className="col-4 col-sm-5 d-flex align-items-center">
      <Image src={Logo} width={50}/>
      <Text className="ps-3">&copy; 2023, Desenvolvido por <a href="https://matheusariza.com/" className="text-decoration-none text-light" target="_blank" rel="noopener noreferrer">Matheus Ariza</a></Text>
    </div>

    <ul className="nav col-4 justify-content-end list-unstyled">
    <a href="https://www.linkedin.com/in/matheusariza25" target="_blank" rel="noopener noreferrer"><Icon className="bi bi-linkedin"></Icon></a>
    <a href="https://github.com/Ariza25" target="_blank" rel="noopener noreferrer"> <Icon className="bi bi-github ms-3"></Icon></a>
    <a href="https://www.facebook.com/matheusariza25?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer"> <Icon className="bi bi-facebook ms-3"></Icon></a>
    </ul>
  </FooterEnd>
</div>
  )
}

export default Footer