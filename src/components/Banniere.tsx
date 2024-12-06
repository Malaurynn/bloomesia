import banniere from "../assets/banniere.jpg";
import "../style/Banniere.css";

const Banniere = () => {
    return (
        <div className="banniere">
            <a href="/shop">
            <img className="imagebouquet" src={banniere} alt="banniere" />
            <button className="banniere-button">Découvrir</button>
            </a>
        </div>
    );
};

export default Banniere;
