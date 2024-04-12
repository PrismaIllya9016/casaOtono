import { Box } from "@mui/material";
import "./Instalaciones.css";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

function Instalaciones() {
  return (
    <Box id="instalaciones" className="Instalaciones">
      <Box
        sx={{
          width: "100%",
          justifyContent: "center",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <h1
          style={{ marginTop: "0px", paddingTop: "2%" }}
          className="TitulosCentrados"
          id="TituloInstalaciones"
        >
          Instalaciones
        </h1>

        <h2
          id="descripcionInsta"
          style={{
            width: "50%", // Controla el ancho del texto para justificación
            textAlign: "center", // Justifica el texto
            margin: "0 auto", // Centra el bloque de texto horizontalmente
            height: "auto",
            marginBottom: "1.6%",
          }}
          className="descCentrada"
        >
          Sumérgete en Casa Otoño y descubre cada espacio que ofrecemos para el
          bienestar de nuestros residentes, fusionando comodidad y una
          excepcional calidad de vida.
        </h2>
      </Box>
      <Box
        className="carruselCont"
        sx={{
          marginTop: "20px",
          width: "52%",
          margin: "auto",
        }}
      >
        <Carousel
          className="crsl"
          autoPlay
          infiniteLoop
          centerMode
          interval={2400}
        >
          <div>
            <img src="public/PNG Objetivo/alberca.jpg" />
            <p className="legend">Alberca</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/biblioteca.jpg" />
            <p className="legend">Biblioteca</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/capilla.jpg" />
            <p className="legend">Capilla</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/restaurante.jpg" />
            <p className="legend">Restaurante</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/gimnasio.jpg" />
            <p className="legend">Gimnasio</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/jardin.jpg" />
            <p className="legend">Jardin</p>
          </div>
          <div>
            <img src="public/PNG Objetivo/spa.jpg" />
            <p className="legend">Spa</p>
          </div>
        </Carousel>
      </Box>
    </Box>
  );
}

export default Instalaciones;
