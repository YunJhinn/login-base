import React, { useState, useEffect } from "react";
import "./carroussel.css";
import img1 from "../../assets/carroussel1.jfif";
import img2 from "../../assets/carroussel2.jpg";
import img3 from "../../assets/carroussel3.avif";

const Carroussel = () => {
  const [slideIndex, setSlideIndex] = useState(1);

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");

    if (n > slides.length) {
      setSlideIndex(1);
    } else if (n < 1) {
      setSlideIndex(slides.length);
    } else {
      setSlideIndex(n);
    }

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
  };

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  useEffect(() => {
    showSlides(slideIndex);

    const interval = setInterval(() => {
      setSlideIndex((prevIndex) => (prevIndex % 3) + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, [slideIndex]);

  return (
    <div>
      <div className="slideshow-container">
        <div className="mySlides fade" style={{ display: "block" }}>
          <div className="numbertext">1 / 3</div>
          <img src={img1} style={{ width: "100%" }} alt="Slide 1" />
          <div className="text">Análise</div>
        </div>

        <div className="mySlides fade" style={{ display: "none" }}>
          <div className="numbertext">2 / 3</div>
          <img src={img2} style={{ width: "100%" }} alt="Slide 2" />
          <div className="text">Competência</div>
        </div>

        <div className="mySlides fade" style={{ display: "none" }}>
          <div className="numbertext">3 / 3</div>
          <img src={img3} style={{ width: "100%" }} alt="Slide 3" />
          <div className="text">Qualidade</div>
        </div>

        <a className="prev" onClick={() => plusSlides(-1)}>
          &#10094;
        </a>
        <a className="next" onClick={() => plusSlides(1)}>
          &#10095;
        </a>
      </div>

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => currentSlide(1)}></span>
        <span className="dot" onClick={() => currentSlide(2)}></span>
        <span className="dot" onClick={() => currentSlide(3)}></span>
      </div>
    </div>
  );
};

export default Carroussel;
