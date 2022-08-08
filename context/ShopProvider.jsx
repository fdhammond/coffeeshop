import { useState, useEffect, createContext } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { useRouter } from "next/router";

const ShopContext = createContext();

const ShopProvider = ({ children }) => {
  const [categories, setCategories] = useState([]);
  const [categorySelected, setCategorySelected] = useState({});
  const [product, setProduct] = useState({});
  const [modal, setModal] = useState(false);
  const [order, setOrder] = useState([]);
  const [name, setName] = useState("");
  const [total, setTotal] = useState(0);

  const router = useRouter();

  const obtainCategories = async () => {
    try {
      const { data } = await axios("/api/categories");
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    obtainCategories();
  }, []);

  useEffect(() => {
    setCategorySelected(categories[0]);
  }, [categories]);

  useEffect(() => {
    const newTotal = order.reduce(
      (total, product) => product.price * product.quantity + total,
      0
    );
    setTotal(newTotal);
  }, [order]);

  const handleClickCategory = (id) => {
    const category = categories.filter((cat) => cat.id === id);
    setCategorySelected(category[0]);
    router.push("/");
  };

  const handleSetProduct = (product) => {
    setProduct(product);
  };

  const handleChangeModal = () => {
    setModal(!modal);
  };

  const handleOrder = ({ categoryId, ...product }) => {
    if (order.some((productState) => productState.id === product.id)) {
      const orderUpdated = order.map((productState) =>
        productState.id === product.id ? product : productState
      );
      setOrder(orderUpdated);
      toast.success("Correctly Saved!");
    } else {
      setOrder([...order, product]);
      toast.success("Added to order!", {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }

    setModal(false);
  };

  const handleEditQuantityOrder = (id) => {
    const updateProduct = order.filter((product) => product.id === id);
    setProduct(updateProduct[0]);
    setModal(!modal);
  };

  const handleDeleteProduct = (id) => {
    console.log(id);
    const orderUpdated = order.filter((product) => product.id !== id);
    setOrder(orderUpdated);
  };

  const addOrder = async (e) => {
    e.preventDefault();
    try {
      await axios.post("/api/orders", {
        order,
        name,
        total,
        date: Date.now().toString(),
      });

      setCategorySelected(categories[0]);
      setOrder([]);
      setName("");
      setTotal(0);

      toast.success("Order has been sent");

      setTimeout(() => {
        router.push("/");
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ShopContext.Provider
      value={{
        categories,
        categorySelected,
        handleClickCategory,
        product,
        handleSetProduct,
        modal,
        handleChangeModal,
        handleOrder,
        order,
        handleEditQuantityOrder,
        handleDeleteProduct,
        name,
        setName,
        addOrder,
        total,
      }}>
      {children}
    </ShopContext.Provider>
  );
};

export { ShopProvider };

export default ShopContext;
