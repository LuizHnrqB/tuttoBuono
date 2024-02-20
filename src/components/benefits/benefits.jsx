import "./benefits.css";
import pt from "../../data/pt.json";
export function BenefitsList() {
  return (
    <div className="wrapperBenefits">
      <div className="flexControl">
        <h1 className="mainTitleBenefits">
          Beneficios do pão de fermentação natural:
        </h1>
        {pt.map((beneficio, index) => (
          <div className="contentBox">
            <div className="contentWrapper">
              <img src="assets\bread.png" />
              <h3 className="insideTitle">{beneficio.titulo}</h3>
              <p className="content">{beneficio.corpo}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
