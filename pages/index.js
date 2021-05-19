// import { loadProducts } from "../store/products";
// import { wrapper } from "../store";
import tw from "twin.macro";
import styled from "@emotion/styled";

const StyledDemo = styled.div`
  ${tw`flex items-center justify-center h-screen bg-green-100`}
`;

const Title = styled.h1`
  ${tw`text-5xl font-light uppercase`}
`;

export default function Home() {
  // const products = useSelector((state) => state.products.index);

  return (
    <StyledDemo>
      <Title>nextjs</Title>
    </StyledDemo>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(loadProducts());
//   }
// );
