import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loadProducts } from "../store/products";
import { initializeStore, wrapper } from "../store";
import tw from "twin.macro";

export default function Home() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(loadProducts());
  // }, []);

  const products = useSelector((state) => state.products.index);

  return (
    <div>
      <h1 tw="font-bold">products</h1>
      <h2 tw="font-bold">products</h2>

      <pre>{JSON.stringify(products, undefined, 4)}</pre>
    </div>
  );
}

// The date returned here will be different for every request that hits the page,
// that is because the page becomes a serverless function instead of being statically
// exported when you use `getServerSideProps` or `getInitialProps`
export const getServerSideProps = wrapper.getServerSideProps(
  (store) => async () => {
    await store.dispatch(loadProducts());
  }
);
