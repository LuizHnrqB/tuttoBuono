import { ContainerLista } from "./components/containerLista/containerLista";
import { HeadLiner } from "./components/headLiner/headLiner";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css";
import { Header } from "./components/header/header";
import background from "/background.jpg";
import { BenefitsList } from "./components/benefits/benefits";

function App() {
  const containerStyles = {
    backgroundImage: `url(${background})`,
    backgroundRepeat: "repeat-y",
    backgroundAttachment: "fixed",
    backgroundPosition: "center",
    color: "rgb(255, 255, 255)",
    fontFamily: "RocaTwoHeavy",
    overflowX: "hidden",
  };
  return (
    <div className="containerLista" style={containerStyles}>
      <header className="header">
        <Header />
      </header>
      <HeadLiner />
      <ContainerLista />
      <BenefitsList />
    </div>
  );
}

export default App;
