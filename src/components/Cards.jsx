import PropTypes from "prop-types";
import {CardTitle, ProjectContainer, Button, Img, Desc,TextBody } from "./portfolio/PortfolioStyled";
import { useSpring, animated } from "@react-spring/web";
import {useEffect, useState} from 'react'

const Cards = ({ items }) => {
  const [isScrolled, setIsScrolled] = useState(false);

  const slideUp = useSpring({
    from: {
      transform: "fade",
      opacity: 0,
    },
    to: async (next) => {
      await new Promise((resolve) => setTimeout(resolve, 500));
      if (isScrolled) {
        next({
          opacity: 1,
          config: { duration: 1000 },
        });
      }
    },
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 2300) {
        setIsScrolled(true);
      }
    };
  
    window.addEventListener("scroll", handleScroll);
  
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <animated.div style={slideUp} className="d-flex">
    <div className="container-fluid">
      <div className="container-fluid row justify-content-center gap-3 ms-lg-4 ms-md-4 ms-sm-4">
        {items.map((item) => (
          <ProjectContainer
            key={item.id}
            className="col-xl-3 col-lg-5 col-md-5 col-sm-7 text-center px-0 mb-3"
          >
            <div className="card-body px-0 pt-0">
            <Img src={item.image} className="w-100" alt="imagens"/>
            <CardTitle className="card-title pt-4">
              <h5>{item.title}</h5>
            </CardTitle>
              <TextBody className="text-center px-4 py-2">
                <Desc>{item.desc}</Desc>
              </TextBody>
              <Button className="btn m-4"><a href={item.link} className="text-white text-decoration-none">Visite o site</a></Button>
            </div>
          </ProjectContainer>
        ))}
      </div>
    </div>
    </animated.div>
  );
};

Cards.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      desc: PropTypes.string.isRequired,
      image: PropTypes.string,
    })
  ).isRequired,
};

export default Cards;

