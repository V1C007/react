import React from 'react';

const Modal = ({ isOpen, onClose, cartItems, removeFromCart }) => {
  const handleRemoveFromCart = (title) => {
    removeFromCart(title);
  };

  const handleOverlayClick = () => {
    onClose();
  };

  const total = cartItems.reduce((acc, item) => acc + item.price, 0);

  return (
    <div
      className={`fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 ${
        isOpen ? 'visible' : 'hidden'
      }`}
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white p-6 rounded-md"
        onClick={(e) => e.stopPropagation()}
      >
        <h2 className="text-2xl font-bold mb-4">Carrito de compras</h2>
        <ul>
          {cartItems.map((item, index) => (
            <li key={index} className="mb-2 flex justify-between items-center">
              <span>{item.title} - ${item.price}</span>
              <button
                className="ml-2 p-1 bg-red-500 text-white rounded hover:bg-red-700"
                onClick={() => handleRemoveFromCart(item.title)}
              >
                Eliminar
              </button>
            </li>
          ))}
        </ul>
        <div className="mt-4">
          <strong>Total: ${total.toFixed(2)}</strong>
        </div>
        <button
          className="mt-4 p-2 bg-blue-500 text-white rounded hover:bg-blue-700"
          onClick={onClose}
        >
          Cerrar
        </button>
      </div>
    </div>
  );
};

export default Modal;
