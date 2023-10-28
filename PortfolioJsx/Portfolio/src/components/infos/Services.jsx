import { Title, Service, Icon,  Background} from "./ServicesStyled";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const Services = () => {
  const [isScrolled, setIsScrolled] = useState(false);

const slideUp = useSpring({
  from: {
    transform: "translateY(30%)",
    opacity: 0,
  },
  to: async (next) => {
    await new Promise((resolve) => setTimeout(resolve, 0));
    if (isScrolled) {
      next({
        transform: "translateY(0)",
        opacity: 1,
        config: { duration: 500 },
      });
    }
  },
});

const slideUp2 = useSpring({
  from: {
    transform: "translateY(30%)",
    opacity: 0,
  },
  to: async (next) => {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    if (isScrolled) {
      next({
        transform: "translateY(0)",
        opacity: 1,
        config: { duration: 500 },
      });
    }
  },
});

useEffect(() => {
  const handleScroll = () => {
    if (window.scrollY > 1800) {
      setIsScrolled(true);
    }
  };

  window.addEventListener("scroll", handleScroll);

  return () => {
    window.removeEventListener("scroll", handleScroll);
  };
}, []);

    return (
      <Background>
      <div className="container-fluid mb-5" id="services">
              <div className="col-12">
                  <Title className="border-bottom pt-5 pb-4 text-center" >SERVIÇOS DA EMPRESA</Title>
              </div>
              <div>
              <animated.div style={slideUp} className="d-flex">
              <Service className="col-sm-4 service-box text-center pt-4">
                  <Icon className="bi bi-phone-fill"></Icon>
                  <h4>Responsividade</h4>
                  <p>Utilize facilmente seu site em qualquer tipo de dispositivo e resolução</p>
              </Service>
              <Service className="col-sm-4 service-box text-center pt-4 border-start">
              <Icon className="bi bi-palette-fill"></Icon>
                  <h4>Identidade visual</h4>
                  <p>Receba uma proposta de logo e cores para personalizar seu empreendimento.</p>
              </Service>
              <Service className="col-sm-4 service-box text-center pt-4 border-start">
              <Icon className="bi bi-cart-fill"></Icon>
                  <h4>E-commerces</h4>
                  <p>Plataforma direcionada ao cliente para efetuar compras e pagamentos online.</p>
              </Service>
              </animated.div>

              <animated.div style={slideUp2} className="d-flex">
              <Service className="col-sm-4 service-box text-center border-top pt-5">
              <Icon className="bi bi-hdd-rack-fill"></Icon>
                  <h4>Hospedagem</h4>
                  <p>Domínimo (.com) e banco de dados de seu site incluso no orçamento.</p>
              </Service>
              <Service className="col-sm-4 service-box text-center border-start border-top pt-5">
              <Icon className="bi bi-pencil-fill"></Icon>
                  <h4>Design criativo</h4>
                  <p>Focado em UI e UX para melhor experiência do usuário/cliente.</p>
              </Service>
              <Service className="col-sm-4 service-box text-center border-start border-top pt-5">
              <Icon className="bi bi-google"></Icon>
                  <h4>SEO</h4>
                  <p>Foco em SEO para que seu site seja reconhecido mais facilmente pelos algoritmos do Google</p>
              </Service>
              </animated.div>
            </div>
          </div>
      </Background>
    )
  }
  
  export default Services
