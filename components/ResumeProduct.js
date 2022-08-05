import Image from "next/image";
import { formatMoney } from "../helpers/";
import useShop from "../hooks/useShop";

const ResumeProduct = ({ product }) => {
  const { handleEditQuantityOrder, handleDeleteProduct } = useShop();
  return (
    <div className="shadow p-5 mb-3 flex gap-10 items-center">
      <div className="md:w-1/6">
        <Image
          width={300}
          height={400}
          alt={`Product image ${product.name}`}
          src={`/assets/img/${product.image}.jpg`}
        />
      </div>
      <div className="md:w-4/6">
        <p className="text-3xl font-bold">{product.name}</p>
        <p className="text-xl font-bold mt-2">Quantity: {product.quantity}</p>
        <p className="text-xl font-bold text-amber-500 mt-2">
          Price: {formatMoney(product.price)}
        </p>
        <p className="text-sm text-gray-700 mt-2">
          Subtotal: {formatMoney(product.price * product.quantity)}
        </p>
      </div>
      <div>
        <button
          type="button"
          className="bg-sky-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold
          uppercase shadow-md w-full"
          onClick={() => handleEditQuantityOrder(product.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            viewBox="0 0 20 20"
            fill="currentColor">
            <path d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z" />
          </svg>
          Edit
        </button>
        <button
          type="button"
          className="bg-red-700 flex gap-2 px-5 py-2 text-white rounded-md font-bold
          uppercase shadow-md w-full mt-3"
          onClick={() => handleDeleteProduct(product.id)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}>
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
            />
          </svg>
          Delete
        </button>
      </div>
    </div>
  );
};

export default ResumeProduct;
