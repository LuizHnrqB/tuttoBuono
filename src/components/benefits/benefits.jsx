import "./benefits.css";
import pt from "../../data/pt.json";
export function BenefitsList() {
  return (
    <div className="wrapper">
      <div className="flexControl">
        <h2 className="mainTitle">Beneficios do pão de fermentação natural:</h2>
        {pt.map((beneficio, index) => (
          <div className="contentBox">
            <div className="contentWrapper">
              <img src="src\assets\bread.png" />
              <h3 className="insideTitle">{beneficio.titulo}</h3>
              <p className="content">{beneficio.corpo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
