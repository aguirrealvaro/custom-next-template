import { FunctionComponent, ReactNode } from "react";
import styled from "styled-components";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FunctionComponent<LayoutProps> = ({ children }) => {
  return (
    <>
      <header>Header</header>
      <Main>{children}</Main>
      <footer>Footer</footer>
    </>
  );
};

const Main = styled.main`
  flex: 1;
`;
