import * as React from "react";
import { FooterWrapper, FooterContent } from "./style";
const COPY_RIGHT = "COPYRIGHT © 2017 BBC | ALL RIGHTS RESERVED.";

/**
 * Component for footer.
 * @returns {any}
 * @constructor
 */
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {COPY_RIGHT}
      </FooterContent>
    </FooterWrapper >
  );
};
