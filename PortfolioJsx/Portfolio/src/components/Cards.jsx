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
      <div className="row justify-content-center gap-3 ms-lg-4 ms-md-4 ms-sm-4">
        {items.map((value) => (
          <ProjectContainer
            key={value.id}
            className="col-xl-3 col-lg-5 col-md-5 col-sm-7 text-center px-0 mb-3"
          >
            <div className="card-body px-0 pt-0">
            <Img src={value.image} className="w-100" alt="imagens"/>
            <CardTitle className="card-title pt-4">
              <h5>{value.title}</h5>
            </CardTitle>
              <TextBody className="text-center px-4 py-2">
                <Desc>{value.desc}</Desc>
              </TextBody>
              <Button className="btn m-4">Visite o site</Button>
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
      image: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default Cards;

