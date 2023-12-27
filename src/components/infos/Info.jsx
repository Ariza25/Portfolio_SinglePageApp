import aboutImage from "../../assets/images/about.jpg"
import { Title, SubTitle, Image, Container, List, Paragraph, InfoContainer } from "./InfoStyled";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const About = () => {
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
        }); // Duração de 500ms
      }
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mb-3" id="infos">
      <div className="row">
        <div className="col-12">
          <Title className="border-bottom pt-5 pb-3 text-center">
            SOBRE MIM
          </Title>
        </div>
          <Container>
            <div className="col-sm-12 col-md-12 d-flex justify-content-center col-lg-6 col-xxl-5">
              <Image
                className="img-fluid mt-5 ms-4"
                src={aboutImage}
                alt="perfil"
              />
            </div>
            <animated.div style={slideUp}>
            <InfoContainer className="col-sm-12 col-md-12 col-lg-6 col-xl-7 pt-5">
              <SubTitle> Olá, tudo bem?</SubTitle>
              <p>
                Eu me chamo Matheus Ariza. Sou desenvolvedor web e estudante de
                Análise de Sistemas, além de possuir graduação e pós graduação
                no ensino de Língua Portuguesa e Língua Inglesa.
              </p>
              <p>
                Desde sempre estive imerso profissionalmente no mundo digital,
                e, desde 2022, tenho me dedicado para contribuir no
                desenvolvimento online de diversos empreendimento e negócios.
              </p>
              <p>
                Ademais, atuo desde 2020 nos diversos âmbitos da tecnologia
                digital, acrescentando ao meu perfil conhecimentos importantes
                para desenvolver os melhores serviços de desenvolvimento
              </p>
              <Paragraph>Entre meus principais objetivos estão:</Paragraph>
              <List id="about-list">
                <li>
                  <i className="fas fa-check me-2"></i>Criar um ambiente virtual
                  para aumentar e engajar clientes;
                </li>
                <li>
                  <i className="fas fa-check me-2"></i>Desenvolver Layout
                  responsivo para todos os dispositivos;
                </li>
                <li>
                  <i className="fas fa-check me-2"></i>Integrar empreendimentos
                  aos sistemas do mercado atual;
                </li>
                <li>
                  <i className="fas fa-check me-2"></i>Desenvolver tecnologias
                  com metodologias ágeis
                </li>
              </List>
            </InfoContainer>
            </animated.div>
          </Container>
      </div>
    </div>
  );
};

export default About;
