import Logo from '../../assets/images/logo.png'
import {Image, Nav} from './NavbarStyled'
import {Link} from 'react-scroll'
import ToggleMenu from './ToggleMenu'
import { useState, useEffect } from 'react'



const Navbar = () => {
  const [navLinksVisible, setNavLinksVisible] = useState(true);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    setNavLinksVisible(screenWidth > 576 );
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <Nav className="container-fluid fixed-top d-flex justify-content-center">
      <a href="/"><Image src={Logo}/></a>

      {navLinksVisible &&(
      <>
      <ul className="pt-4 mt-2">
      <Link className="ms-3 link" to="home" spy={true} smooth={true} offset={0} delay={100} duration={1000}>Home</Link>
      <Link className="ms-3 link" to="infos" spy={true} smooth={true} offset={-85} delay={100} duration={1000}>Infos</Link>
      <Link className="ms-3 link" to="portfolio" spy={true} smooth={true} offset={-85} delay={100} duration={1000}>Portfolio</Link>
      <Link className="ms-3 link" to="contato" spy={true} smooth={true} offset={-85} delay={100} duration={1000}>Contato</Link>
      </ul>
      </>
      )}
      <ToggleMenu/>
  </Nav>
  )
}

export default Navbar