const ProductCard = ({ product, addToCart }) => {
    return (
      <div className="border p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold">{product.title}</h2>
        <p>{product.description}</p>
        <p className="font-bold">{product.price}€</p>
        <button
          className="bg-blue-500 text-white px-4 py-2 mt-2 rounded"
          onClick={() => addToCart(product)}
        >
          Ajouter au panier
        </button>
      </div>
    );
  };
  
  export default ProductCard;
  