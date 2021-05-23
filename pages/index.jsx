// import { loadProducts } from "../store/products";
// import { wrapper } from "../store";
import Link from "next/link";
import tw from "twin.macro";
import styled from "@emotion/styled";
import { css } from "@emotion/css";

const StyledDemo = styled.div`
  ${tw`flex flex-col items-center justify-center h-screen`}
`;

const Title = css`
  ${tw`text-5xl font-light uppercase`}
`;

export default function Home() {
  return (
    <StyledDemo>
      <h2 className={Title}>nextjs</h2>
      <Link href="/page2">
        <a>Page 2</a>
      </Link>
    </StyledDemo>
  );
}

// export const getServerSideProps = wrapper.getServerSideProps(
//   (store) => async () => {
//     await store.dispatch(loadProducts());
//   }
// );
