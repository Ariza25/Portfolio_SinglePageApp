import { Title, TechsCard, TechsContainer } from "./TechsStyled";
import { useSpring, animated } from "@react-spring/web";
import { useState, useEffect } from "react";

const Techs = () => {
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
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isScrolled) {
        next({
          transform: "translateY(0)",
          opacity: 1,
          config: { duration: 500 },
        });
      }
    },
  });

  const slideUp3 = useSpring({
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
      if (window.scrollY > 900) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container text-center mb-5 pt-5 pb-5" id="techs">
      <Title className="border-bottom pt-3 pb-3 text-center">
        MINHAS HABILIDADES
      </Title>

      <animated.div style={slideUp}>
        <TechsContainer className="container row">
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>Front-end</p>
              <i className="devicon-html5-plain colored "></i>
              <i className="devicon-css3-plain colored "></i>
              <i className="devicon-javascript-plain colored "></i>
              <i className="devicon-typescript-plain colored "></i>
            </TechsCard>
          </div>
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>Front-end Framework</p>
              <i className="devicon-react-plain colored"></i>
              <i className="devicon-bootstrap-plain colored"></i>
            </TechsCard>
          </div>
        </TechsContainer>
      </animated.div>

      <animated.div style={slideUp2}>
        <TechsContainer className="container-fluid row">
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>Back-end</p>
              <i className="devicon-python-plain colored"></i>
              <i className="devicon-c-plain colored"></i>
              <i className="devicon-nodejs-plain colored"></i>
            </TechsCard>
          </div>
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>Back-end Framework</p>
              <i className="devicon-express-original"></i>
            </TechsCard>
          </div>
        </TechsContainer>
      </animated.div>

      <animated.div style={slideUp3}>
        <TechsContainer className="container-fluid row">
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>DataBase</p>
              <i className="devicon-mysql-plain colored"></i>
              <i className="devicon-mongodb-plain colored"></i>
              <i className="devicon-firebase-plain colored"></i>
            </TechsCard>
          </div>
          <div className="mt-4 col-md-6">
            <TechsCard>
              <p>Tools</p>
              <i className="devicon-vscode-plain colored"></i>
              <i className="devicon-git-plain colored"></i>
              <i className="devicon-github-plain"></i>
            </TechsCard>
          </div>
        </TechsContainer>
      </animated.div>
    </div>
  );
};

export default Techs;
