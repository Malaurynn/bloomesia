import { useState, useEffect } from "react";
import "../style/Produits.css"

interface Produit {
  id: number;
  nom: string;
  description: string;
  prix: number;
  image_url: string;
  isFavorite: boolean;
}

const Produits = () => {
  const [produits, setProduits] = useState<Produit[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://api-strasbouq.vercel.app/items")
      .then((response) => response.json())
      .then((data) => {
        setProduits(data);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="container">
      {produits.map((produit) => (
        <div className="card-produits" key={produit.id}>
          <img src={produit.image_url} alt={produit.nom} />
          <h2>{produit.nom}</h2>
          <p>{produit.description}</p>
          <p>{produit.prix} €</p>
          <button
            onClick={() => {
              setProduits(
                produits.map((p) =>
                  p.id === produit.id ? { ...p, isFavorite: !p.isFavorite } : p
                )
              );
              return(
                alert(produit.isFavorite ? "Retiré du panier" : "Ajouté au panier")
              )
            }}
          >
            {produit.isFavorite ? "Retirer du panier" : "Ajouter au panier"}
          </button>
        </div>
      ))}
    </div>
  );
};

export default Produits;
