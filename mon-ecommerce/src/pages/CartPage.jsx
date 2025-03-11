import { useStore } from "../store";

const CartPage = () => {
  const { cart, removeFromCart } = useStore();

  return (
    <div className="container">
      <h1>Votre Panier</h1>
      {cart.length === 0 ? (
        <p>Votre panier est vide.</p>
      ) : (
        <ul>
          {cart.map((item, index) => (
            <li key={index} className="product-card">
              <h3>{item.name}</h3>
              <p>Prix : {item.price}€</p>
              <p>Quantité : {item.quantity}</p>
              <button onClick={() => removeFromCart(item.id)}>Supprimer</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CartPage;
