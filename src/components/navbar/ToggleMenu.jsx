import { useState, useEffect } from "react";
import { Menu } from "./ToggleMenuStyled";
import { Link } from "react-scroll";

const ToggleMenu = () => {
  const [isButtonVisible, setIsButtonVisible] = useState(true);

  const checkScreenWidth = () => {
    const screenWidth = window.innerWidth;
    setIsButtonVisible(screenWidth > 576);
  };

  useEffect(() => {
    checkScreenWidth();
    window.addEventListener("resize", checkScreenWidth);

    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  return (
    <>
      {!isButtonVisible && (
        <Menu
          className="btn btn-primary position-absolute"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasRight"
          aria-controls="offcanvasRight"
        >
          <i className="bi bi-list"></i>
        </Menu>
      )}

      <div
        className="offcanvas offcanvas-end bg-dark text-white bg-opacity-75"
        id="offcanvasRight"
        aria-labelledby="offcanvasRightLabel"
      >
        <div className="offcanvas-header border-bottom pb-3">
          <h5 className="offcanvas-title" id="offcanvasRightLabel">
            Menu
          </h5>
          <i
            className="bi bi-x display-6"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></i>
        </div>
        <div className="offcanvas-body ps-5">
          <div className="d-flex flex-column">
            <Link 
              className="mb-2 link"
              to="home"
              spy={true}
              smooth={true}
              offset={0}
              delay={100}
              duration={1000}
            >
            <i className="bi bi-house-door-fill me-3"></i>
            Home
            </Link>
            <Link
              className=" mb-2  link"
              to="infos"
              spy={true}
              smooth={true}
              offset={-85}
              delay={100}
              duration={1000}
            >
              <i className="bi bi-info-circle-fill me-3"></i>
              Infos
            </Link>
            <Link
              className=" mb-2  link"
              to="portfolio"
              spy={true}
              smooth={true}
              offset={-85}
              delay={100}
              duration={1000}
            >
              <i className="bi bi-palette-fill me-3"></i>
              Portfolio
            </Link>
            <Link
              className="link"
              to="contato"
              spy={true}
              smooth={true}
              offset={-85}
              delay={100}
              duration={1000}
            >
              <i className="bi bi-telephone-fill me-3"></i>
              Contato
            </Link>
          </div>
        </div>
        <div className="offcanvas-footer border-top pb-3"></div>
      </div>
    </>
  );
};

export default ToggleMenu;
