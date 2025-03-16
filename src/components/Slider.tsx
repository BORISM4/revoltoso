import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

interface SliderProps {
  slides: { imageUrl: string; text: React.ReactNode }[];
}

const Slider: React.FC<SliderProps> = ({ slides }) => {
  return (
    <Carousel showThumbs={false}>
      {/* Quitar las miniaturas aquí */}
      {slides.map((slide, index) => (
        <div key={index} style={{ position: "relative" }}>
          <img src={slide.imageUrl} alt={`Slide ${index + 1}`} />
          {/* Overlay oscuro y transparente */}
          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              backgroundColor: "rgba(0, 0, 0, 0.5)", // Oscuro con 50% de transparencia
            }}
          ></div>
          <div
            style={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              textAlign: "center",
              color: "white",
              textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)",
              zIndex: 1, // Asegurar que el texto esté encima del overlay
            }}
          >
            {slide.text}
          </div>
        </div>
      ))}
    </Carousel>
  );
};

export default Slider;
