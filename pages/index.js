// import { loadProducts } from "../store/products";
// import { wrapper } from "../store";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const StyledDemo = styled.div`
  ${tw`flex items-center justify-center h-screen`}
`;

const Title = css`
  ${tw`text-5xl font-light uppercase`}
`;

export default function Home() {
  return (
    <StyledDemo>
      <h2 className={Title}>nextjs</h2>
    </StyledDemo>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(loadProducts());
//   }
// );
