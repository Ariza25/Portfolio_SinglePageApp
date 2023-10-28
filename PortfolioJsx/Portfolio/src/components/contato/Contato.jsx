import { useState, useCallback, useEffect } from "react";
import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, addDoc } from "firebase/firestore";
import { Title, Icon, Text, Button, Container } from "./ContatoStyled";
import { useSpring, animated } from "@react-spring/web";

// Inicialize o Firebase com suas configurações
const firebaseConfig = initializeApp({
  apiKey: "AIzaSyATVQwcFBKoQFMxIhc72FA7wgOQIsuDyf8",
  authDomain: "portfolio-c615d.firebaseapp.com",
  databaseURL: "https://portfolio-c615d-default-rtdb.firebaseio.com",
  projectId: "portfolio-c615d",
  storageBucket: "portfolio-c615d.appspot.com",
  messagingSenderId: "374226457903",
  appId: "1:374226457903:web:9f7ee1c0c9fec05d7ebdda",
});

const db = getFirestore(firebaseConfig);
const dataCollectionRef = collection(db, "messageForm");

const Footer = () => {

  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = useCallback(
    async (e) => {
      e.preventDefault();

      const { name, email, subject, message } = formState;

      if (!name || !email || !subject || !message) {
        window.alert("Preencha todos os campos!");
        return;
      }
      try {
        // Adicione os dados do formulário à coleção "messageForm" no Firebase
        await addDoc(dataCollectionRef, formState);
        // Limpe o formulário após o envio bem-sucedido
        setFormState({
          name: "",
          email: "",
          subject: "",
          message: "",
        });

        window.alert(
          "Sua mensagem foi enviada com Sucesso"
        );
      } catch (error) {
        console.error("Erro ao enviar mensagem:", error);
        window.alert(
          "Ocorreu um erro ao enviar a mensagem. Tente novamente mais tarde."
        );
      }
    },
    [formState]
  );

  const [isScrolled, setIsScrolled] = useState(false);

  const slideUp = useSpring({
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
          config: { duration: 1000 },
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
          config: { duration: 1000 },
        });
      }
    },
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await getDocs(dataCollectionRef);
        console.log(data);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
      }
    };
    getData();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 4000) {
        setIsScrolled(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="container mt-5" id="contato">
      <div className="row">
        <div className="col-md-12 mt-3">
          <Title className="border-bottom pb-3 text-center mt-4">
            ENTRE EM CONTATO
          </Title>
        </div>
        <animated.div style={slideUp} className="d-flex flex-column">
          <Container className="col-md-4 col-sm-4 contact-box mt-4 text-center">
            <Icon className="bi bi-telephone"></Icon>
            <p>
              <Text className="contact-title">
                Ligue para:
                <br />
              </Text>
              (43)99806-8708
            </p>
          </Container>
          <Container className="col-md-4 col-sm-4 contact-box mt-4 text-center">
            <Icon className="bi bi-envelope"></Icon>
            <p>
              <Text className="contact-title">
                Envie e-mail para:
                <br />
              </Text>
              mjsa.sanches25@gmail.com
            </p>
          </Container>
          <Container className="col-md-4 col-sm-4 contact-box mt-4 text-center">
            <Icon className="bi bi-shop"></Icon>
            <p>
              <Text className="contact-title">
                Venha tomar um café:
                <br />
              </Text>{" "}
              Rua Rubi - 377
            </p>
          </Container>
        </animated.div>

        <animated.div style={slideUp2}>
          {/* form */}
          <div className="col-12 mt-4 text-center" id="msg-box">
            <Text>Ou nos deixe uma mensagem:</Text>
          </div>

          <form onSubmit={handleSubmit}>
            <div className="container col-12 col-md-8 col-lg-6 col-xl-6 text-center pt-3">
              <input
                type="name"
                className="form-control mb-2"
                placeholder="Nome Completo"
                name="name"
                id="name"
                required
                value={formState.name}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    name: e.currentTarget?.value || "",
                  })
                }
              />
              <input
                type="email"
                className="form-control mb-2"
                placeholder="E-mail"
                name="email"
                id="email"
                required
                value={formState.email}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    email: e.currentTarget?.value || "",
                  })
                }
              />
              <input
                type="text"
                className="form-control mb-2"
                placeholder="Assunto"
                name="subject"
                id="subject"
                required
                value={formState.subject}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    subject: e.currentTarget?.value || "",
                  })
                }
              />
              <textarea
                className="form-control"
                placeholder="Sua mensagem..."
                name="message"
                id="message"
                required
                value={formState.message}
                onChange={(e) =>
                  setFormState({
                    ...formState,
                    message: e.currentTarget?.value || "",
                  })
                }
              />
              <Button
                type="submit"
                className="btn btn-primary mt-3 px-5 mb-2"
                value="Enviar"
              >
                Enviar
              </Button>
            </div>
          </form>
        </animated.div>
      </div>
    </div>
);
}

export default Footer;
