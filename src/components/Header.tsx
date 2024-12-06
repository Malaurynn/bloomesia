import "../style/Header.css";
import logo from "../assets/logo.png";
import connexion from "../assets/connexion.png";
import panier from "../assets/panier.png";

const Header = () => {
  return (
    <div className="header">
      <a href="/panier" className="icon-left">
        <img className="pan" src={panier} alt="Logo Panier" />
      </a>
      <section className="logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </section>
      <a href="/connexion" className="icon-right">
        <img className="co" src={connexion} alt="Logo Connexion" />
      </a>
    </div>
  );
};

export default Header;
