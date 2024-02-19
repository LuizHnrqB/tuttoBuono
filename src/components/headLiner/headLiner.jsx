import "../headLiner/headLiner.css";
const isDesktop = window.innerWidth >= 768;

export function HeadLiner() {
  return (
    <div className="allWrapper">
      <h1 className="mainTitle">Pães artesanais de fermentação natural</h1>
      <h2 className="subTitle">O prazer do sabor, o cuidado com a saúde</h2>
      <div>
        {isDesktop && (
          <img
            className="paoSemFundo"
            src="assets\paoSemFundo.png"
            alt="Pão Sem Fundo"
          />
        )}
      </div>
    </div>
  );
}
