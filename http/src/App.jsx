import toast, { Toaster } from "react-hot-toast";

import { Get } from "./lib/http";
import { useEffect } from "react";

const App = () => {
  const fetchProduct = async () => {
    const { status, data, error } = await Get(
      "https://jsonplaceholder.typicode.com/users"
    );
    if (error) {
      return toast.error(error);
    }
    console.log(status, data, error);
  };
  return (
    <div>
      <button onClick={fetchProduct}>Testing</button>
      <Product />
      <Toaster />
    </div>
  );
};

export default App;

function Product() {
  useEffect(() => {
    const fetchData = async () => {
      const api = await fetch("https://jsonplaceholder.typicode.com/users");
      console.log(api)
      console.log(await api.json());
    };
    fetchData();
  }, []);
  return <div>Hare Krishna</div>;
}
