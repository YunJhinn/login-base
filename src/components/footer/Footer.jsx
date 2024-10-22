import React from "react";
import { Link } from "react-router-dom";
import { LiaPhoneSolid } from "react-icons/lia";
import { FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { CiInstagram } from "react-icons/ci";
import { MdLocationPin } from "react-icons/md";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="container-footer">
      <div className="contatos">
        <h2>Contate-nos</h2>

        <p>
          <LiaPhoneSolid aria-label="Telefone" className="icon-footer-phone" />
          Telefone:{"  4002-8922"}
        </p>
        <p>
          <FaWhatsapp aria-label="WhatsApp" className="icon-footer-wpp" />
          Whatsapp:{"  62 9 xxxx-xxxx"}
        </p>
        <p>
          <SiGmail aria-label="E-mail" className="icon-footer-email" />
          E-mail:{"  MWadm@gmail.com"}
        </p>
      </div>
      <div className="servicos">
        <h2>Serviços</h2>

        <p>Construção de redes elétricas</p>
        <p>Inspeções de redes elétricas</p>
        <p>Manutenção de redes elétricas</p>
      </div>
      <div className="mais">
        <p>
          <Link to="https://www.facebook.com/people/MW-Projetos-e-Constru%C3%A7%C3%B5es/100089982840345/">
            <FaFacebook className="icon-footer-facebook" />
          </Link>
        </p>
        <p>
          <Link to="https://br.linkedin.com/company/mw-projetos-e-constru%C3%A7%C3%B5es?trk=similar-pages">
            <FaLinkedin className="icon-footer-linkedin" />
          </Link>
        </p>
        <p>
          <Link to="https://www.instagram.com/mw_projetos_e_construcoes/">
            <CiInstagram className="icon-footer-insta" />
          </Link>
        </p>
        <p>
          <Link to="https://www.google.com/maps/place/MW+Projetos+e+Constru%C3%A7%C3%B5es/@-16.6346272,-49.230797,17z/data=!3m1!4b1!4m6!3m5!1s0x935ef25be7e71def:0xee77f13044f284c2!8m2!3d-16.6346324!4d-49.2282221!16s%2Fg%2F1vp74w02?entry=ttu&g_ep=EgoyMDI0MTAxNi4wIKXMDSoASAFQAw%3D%3D">
            <MdLocationPin className="icon-footer-maps" />
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Footer;
