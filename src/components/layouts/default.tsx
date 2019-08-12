import * as React from "react";
import { Header, Footer } from "../../components";

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
    <div className='layout--default'>
      {props.children}
    </div>
    <Footer />
    </>
  );
};
