import "./style.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquareFacebook, faSquareInstagram, faSquareXTwitter, faSquareYoutube } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope, faMap, faPhone } from "@fortawesome/free-solid-svg-icons";

export default function Contact() {
  return (
    <section id="contact">
      <div className="content">
        <h6>Contato</h6>
        <h4>Precisa de mais informações?</h4>

        <p>
          <span>
            <FontAwesomeIcon icon={faSquareFacebook} />
          </span>
          <span>
            <FontAwesomeIcon icon={faSquareInstagram} />
          </span>
          <span>
            <FontAwesomeIcon icon={faSquareXTwitter} />
          </span>
          <span>
            <FontAwesomeIcon icon={faSquareYoutube} />
          </span>
        </p>

        <p className="description">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </p>

        <div className="contact-info">
          <p>
            <span>
              <FontAwesomeIcon icon={faPhone} />
            </span>
            662-527-2681
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faEnvelope} />
            </span>
            contato@r3e.com.br
          </p>
          <p>
            <span>
              <FontAwesomeIcon icon={faMap} />
            </span>
            Rua Exemplo nº 999, Bairro Exemplo, Itapetininga-SP. CEP: 18300-000
          </p>
        </div>
      </div>
    </section>
  );
}
