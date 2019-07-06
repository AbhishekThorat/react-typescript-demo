import * as React from "react";
import { HeaderContent, HeaderWrapper } from "./style";
import { messages } from '../../util/';

/**
 * Component for header.
 * @returns {any}
 * @constructor
 */
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        {messages.HEADER_CONTENT}
      </HeaderContent>
    </HeaderWrapper >
  );
};
