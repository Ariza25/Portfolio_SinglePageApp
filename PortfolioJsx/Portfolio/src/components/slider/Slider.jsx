import slide1 from "../../images/slide1.webp";
import slide2 from "../../images/slide2.webp";
import slide4 from "../../images/slide4.webp";
import { Caption, Image } from "./SliderStyled";

const Slider = () => {
  return (
    <div id="home">
      <div
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active" data-bs-interval="3000">
            <Image src={slide1} className="img-fluid" alt="negócio online" />
            <Caption className="carousel-caption d-none d-sm-block">
              <h2>
                Deseja colocar seu <br />
                empreendimento online?
              </h2>
              <p>Então a melhor opção você encontra logo aqui</p>
            </Caption>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <Image src={slide2} className="img-fluid" alt="acessar pelo dispositivo" />
            <Caption className="carousel-caption d-none d-sm-block">
              <h2>
                Acesse seu site <br />
                de qualquer dispositivo
              </h2>
              <p>Uma forma assertiva para captar e atrair mais clientes</p>
            </Caption>
          </div>
          <div className="carousel-item" data-bs-interval="3000">
            <Image src={slide4} className="img-fluid" alt="orçamento online" />
            <Caption className="carousel-caption d-none d-sm-block">
              <h2>
                Faça seu orçamento <br /> 100% online
              </h2>
              <p>
                Nosso atendimento é pensando em seu <br /> total conforto
              </p>
            </Caption>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Slider;
