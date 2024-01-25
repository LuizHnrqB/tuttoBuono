import "./header.css";

export function Header() {
  const phoneNumber = "+5531983004028";
  const menssagem = encodeURIComponent(
    "Olá! Gostaria de realizar um pedido com vocês!"
  );

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${menssagem}`;

  return (
    <div className="jorgeCajuru">
      <div className="headerWrapper">
        <p>Sobre nós:</p>
        <img src="src\assets\tuttobuono.png" alt="Tutto Buono" />
        <button className="zipzap">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <img src="src\assets\contato.png" alt="WhatsApp"></img>
          </a>
        </button>
      </div>
    </div>
  );
}
