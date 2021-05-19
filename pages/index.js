import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/products";

import tw from "twin.macro";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadProducts());
  }, []);

  const products = useSelector((state) => state.products.index);

  return (
    <div>
      <h1 tw="font-bold">products</h1>
      <h2 tw="font-bold">products</h2>

      <pre>{JSON.stringify(products, undefined, 4)}</pre>
    </div>
  );
}
