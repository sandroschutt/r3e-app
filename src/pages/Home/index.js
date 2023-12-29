import "./style.css";
import Container from "react-bootstrap/Container";
import PublicNav from "../../layout/PublicNav";
import Main from "./sections/Main";
import Steps from "./sections/Steps";
import Principles from "./sections/Principles";
import SimplifiedProcess from "./sections/SimplifiedProccess";
import NewOpportunities from "./sections/NewOpportunities";
import SuccessCases from "./sections/SuccessCases";
import ConnectPeople from "./sections/ConnectPeople";
import Team from "./sections/Team";
import Contact from "./sections/Contact";
import PublicFooter from "../../layout/PublicFooter";

function Home() {
  return (
    <Container id="home-container" fluid>
      <PublicNav/>
      <Main/>
      <Steps/>
      <Principles/>
      <SimplifiedProcess/>
      <NewOpportunities/>
      <SuccessCases/>
      <ConnectPeople/>
      <Team/>
      <Contact/>
      <PublicFooter/>
    </Container>
  );
}

export default Home;
