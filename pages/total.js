import { useEffect, useCallback } from "react";
import Layout from "../layout/Layout";
import useShop from "../hooks/useShop";

export default function Total() {
  const { order } = useShop();

  const checkOrder = useCallback(() => {
    return order.length === 0;
  }, [order]);

  const addOrder = (e) => {
    e.preventDefault();
    console.log("Sending order...");
  };

  useEffect(() => {
    checkOrder();
  }, [order, checkOrder]);

  return (
    <Layout page="Total and Data">
      <h1 className="text-4xl font-black">Total</h1>
      <p className="text-2xl my-10">Confirm your order below</p>

      <form onSubmit={addOrder}>
        <div>
          <label
            htmlFor="name"
            className="block uppercase text-slate-800 font-bold text-xl">
            Name
          </label>
          <input
            id="name"
            type="text"
            className="bg-gray-200 w-full lg:w-1/3 mt-3 p-2 rounded-md"
          />
        </div>
        <div className="mt-10">
          <p className="text-2xl">
            Total: {""} <span className="font-bold"></span>
          </p>
        </div>

        <div className="mt-5">
          <input
            type="submit"
            className={`${
              checkOrder()
                ? "bg-indigo-100"
                : "bg-indigo-600 hover:bg-indigo-800"
            } w-full lg:w-auto px-5 py-2 rounded uppercase font-bold text-white text-center`}
            value="Confirm Order"
            disabled={checkOrder()}
          />
        </div>
      </form>
    </Layout>
  );
}
