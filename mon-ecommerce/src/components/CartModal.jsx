import { Dialog } from "@headlessui/react";
import { useStore } from "../store";

const CartModal = ({ isOpen, onClose }) => {
  const { cart, removeFromCart } = useStore();

  return (
    <Dialog open={isOpen} onClose={onClose} className="fixed inset-0 flex items-center justify-center">
      <Dialog.Panel className="bg-white p-6 rounded-lg shadow-lg">
        <Dialog.Title>Panier</Dialog.Title>
        <ul>
          {cart.map((item) => (
            <li key={item.id} className="flex justify-between p-2 border-b">
              {item.title} (x{item.quantity}) - {item.price * item.quantity}€
              <button onClick={() => removeFromCart(item.id)} className="text-red-500">X</button>
            </li>
          ))}
        </ul>
        <p className="font-bold mt-4">Total : {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€</p>
        <button onClick={onClose} className="mt-4 bg-gray-500 text-white px-4 py-2 rounded">Fermer</button>
      </Dialog.Panel>
    </Dialog>
  );
};

export default CartModal;
