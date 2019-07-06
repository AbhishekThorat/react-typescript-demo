import * as React from "react";
import { FooterWrapper, FooterContent } from "./style";
import { messages } from '../../util/';

/**
 * Component for footer.
 * @returns {any}
 * @constructor
 */
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <FooterWrapper>
      <FooterContent>
        {messages.COPY_RIGHT}
      </FooterContent>
    </FooterWrapper >
  );
};
