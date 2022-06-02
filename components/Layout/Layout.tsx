import { FunctionComponent } from "react";
import styled from "styled-components";

export const Layout: FunctionComponent = ({ children }) => (
  <>
    <header>Header</header>
    <Main>{children}</Main>
    <footer>Footer</footer>
  </>
);

const Main = styled.main`
  flex: 1;
`;
