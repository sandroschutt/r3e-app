import { useEffect, useState } from "react";
import "./styles.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";

function PublicNav() {
  const [variant, setVariant] = useState("dark");
  const [logoColor, setLogoColor] = useState("white");

  useEffect(() => {
    if (window.location.pathname !== "/") {
      setVariant("success");
      setLogoColor("#198754");
    }
  }, [variant, logoColor])

  return (
    <>
      {["sm"].map((expand) => (
        <Navbar
          id="public-navigation"
          key={expand}
          expand={expand}
          className="mb-0"
          variant={variant}
        >
          <Container fluid>
            <Navbar.Brand href="/" style={{ color: logoColor, fontSize: "24px" }}>
              R3E
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls={`offcanvasNavbar-expand-${expand}`}
              className="border-0"
            />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="end"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title
                  id={`offcanvasNavbarLabel-expand-${expand}`}
                  style={{ color: logoColor }}
                >
                  R3E
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-end flex-grow-1">
                  <Nav.Link href="/about">Sobre</Nav.Link>
                  <Nav.Link href="/pickup-locations">Pontos de coleta</Nav.Link>
                  <Nav.Link href="/partners">Parceiros</Nav.Link>
                  <Nav.Link href="/auth/login">Login</Nav.Link>
                </Nav>
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default PublicNav;
