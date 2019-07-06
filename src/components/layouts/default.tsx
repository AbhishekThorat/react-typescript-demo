import * as React from "react";
import { Header, Footer } from "../../components";
import { ContentWrapper } from "./style";

/**
 * Layout Component with header and footer support.
 * @param props
 * @returns {any}
 * @constructor
 */
export const DefaultLayout: React.StatelessComponent<{}> = (props) => {
  return (
    <>
    <Header />
    <ContentWrapper>
      {props.children}
    </ContentWrapper>
    <Footer />
    </>
  );
};
