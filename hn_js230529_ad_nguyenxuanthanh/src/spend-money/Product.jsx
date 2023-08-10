import React, { useState } from "react";

export default function Product({ product, updateShoppingQuantity }) {
  const [quantity, setQuantity] = useState(product.quantity || 0);
  const handleIncreasedQuantity = () => {
    setQuantity(quantity + 1);
    updateShoppingQuantity(product, quantity + 1);
  };
  const handleDecreasedQuantity = () => {
    if (quantity > 0) {
      setQuantity(quantity - 1);
      updateShoppingQuantity(product, quantity - 1);
    }
  };
  return (
    <div>
      <div className="max-w-sm bg-white border border-gray-200 rounded-lg shadow ">
        <img className="rounded-t-lg h-72" src={product.image} alt="" />
        <div className="p-5">
          <div className="flex justify-between text-lg font-bold mb-4">
            <p className="product-name truncate">{product.title}</p>
            <p className="product-price truncate">${product.price}</p>
          </div>

          <div class="flex rounded-md shadow-sm" role="group">
            <button
              type="button"
              onClick={handleDecreasedQuantity}
              class="w-2/5 px-4 py-2 text-sm font-medium text-rose-600 bg-transparent border border-rose-600 rounded-l-lg hover:bg-rose-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-300 focus:bg-rose-600 focus:text-white"
            >
              -
            </button>
            <input
              type="number"
              name="quantity"
              value={quantity}
              onChange={(e) => setQuantity(e.target.value)}
              class="px-4 py-2 text-sm font-medium text-gray-600 bg-transparent border-t border-b border-rose-600"
            />
            <button
              type="button"
              onClick={handleIncreasedQuantity}
              class="w-2/5 px-4 py-2 text-sm font-medium text-white bg-rose-600 border border-rose-600 rounded-r-md hover:bg-rose-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-600 focus:bg-rose-600 focus:text-white"
            >
              +
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
