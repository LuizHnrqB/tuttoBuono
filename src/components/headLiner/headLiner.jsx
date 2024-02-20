import "../headLiner/headLiner.css";
const isDesktop = window.innerWidth >= 768;

export function HeadLiner() {
  const phoneNumber = "+5531983004028";
  const mensagem = encodeURIComponent(
    "Olá! Gostaria de realizar um pedido com vocês!"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${mensagem}`;

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
      <button className="zipzap">
        <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
          <img className="zipzapIMG" src="assets\contato.png" alt="WhatsApp" />
        </a>
      </button>
    </div>
  );
}
