import * as React from "react";
import { HeaderContent, HeaderWrapper } from "./style";

const HEADER_CONTENT = "BBC RADIO";

/**
 * Component for header.
 * @returns {any}
 * @constructor
 */
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <HeaderWrapper>
      <HeaderContent>
        {HEADER_CONTENT}
      </HeaderContent>
    </HeaderWrapper >
  );
};
