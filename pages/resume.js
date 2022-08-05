import Layout from "../layout/Layout";
import useShop from "../hooks/useShop";
import ResumeProduct from "../components/ResumeProduct";

export default function Resume() {
  const { order } = useShop();
  return (
    <Layout page="Resume">
      <h1 className="text-4xl font-black">Resume</h1>
      <p className="text-2xl my-10">Review your Order</p>

      {order.length === 0 ? (
        <p className="text-center text-2xl">There are no items in your order</p>
      ) : (
        order.map((product) => (
          <ResumeProduct key={product.id} product={product} />
        ))
      )}
    </Layout>
  );
}
