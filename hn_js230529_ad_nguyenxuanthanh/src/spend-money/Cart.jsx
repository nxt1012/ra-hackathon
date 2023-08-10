import React, { useEffect, useState } from "react";

export default function Cart({
  products,
  updateCartQuantity,
  total,
  clearAll,
}) {
  //   const [newProducts, setNewProducts] = useState(products || []);
  //   const handleSetNewQuantity = (id, newQuantity) => {
  //     updateCartQuantity(
  //       products.map((product, index) =>
  //         product.id === id ? { ...product, quantity: newQuantity } : product
  //       )
  //     );
  //   };
  //   useEffect(() => {}, [products]);
  const handleClearCart = () => {
    clearAll();
  };
  return (
    <div>
      <p className="text-2xl font-bold text-center text-rose-600 mb-10">
        My Shopping Cart
      </p>
      <div className="ml-32 flex justify-between">
        <p className="text-lg font-bold text-right text-rose-600 mb-6 mr-32">
          <span>Total spent:</span> ${total}
        </p>
        <button
          type="button"
          onClick={handleClearCart}
          className="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700"
        >
          Clear all
        </button>
      </div>
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400 mx-32">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
          <tr>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Product name
            </th>
            <th scope="col" class="px-6 py-3">
              Product image
            </th>
            <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
              Quantity
            </th>
            <th scope="col" class="px-6 py-3">
              Price
            </th>
          </tr>
        </thead>
        <tbody>
          {products
            .filter((e, i) => e.quantity > 0)
            .map((item, index) => (
              <tr
                key={index}
                class="border-b border-gray-200 dark:border-gray-700"
              >
                <th
                  scope="row"
                  class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800"
                >
                  {item.title}
                </th>
                <td class="px-6 py-4">
                  <img
                    className="rounded-t-sm w-16 h-16"
                    src={item.image}
                    alt=""
                  />
                </td>
                <td class="py-4 bg-gray-50 dark:bg-gray-800 text-center">
                  <div class="inline-flex rounded-md shadow-sm" role="group">
                    <button
                      type="button"
                      //   onClick={() => handleSetNewQuantity(item.id, "DECREASE")}
                      class="px-4 py-2 text-sm font-medium text-rose-600 bg-transparent border border-rose-600 rounded-l-lg hover:bg-rose-600 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-300 focus:bg-rose-600 focus:text-white"
                    >
                      -
                    </button>
                    <input
                      type="number"
                      name="quantity"
                      value={item.quantity}
                      //   onChange={(e) =>
                      //     handleSetNewQuantity(item.id, e.target.value)
                      //   }
                      class="px-4 py-2 text-sm font-medium text-gray-600 bg-transparent border-t border-b border-rose-600"
                    />
                    <button
                      type="button"
                      class="px-4 py-2 text-sm font-medium text-white bg-rose-600 border border-rose-600 rounded-r-md hover:bg-rose-700 hover:text-white focus:z-10 focus:ring-2 focus:ring-rose-600 focus:bg-rose-600 focus:text-white"
                    >
                      +
                    </button>
                  </div>
                </td>
                <td class="px-6 py-4">${item.price}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
