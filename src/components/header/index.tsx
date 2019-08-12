import * as React from "react";
import { messages } from '../../util/';

/**
 * Component for header.
 * @returns {any}
 * @constructor
 */
export const Header: React.StatelessComponent<{}> = () => {
  return (
    <div className='header-wrapper'>
      <div className='header-wrapper__content'>
        {messages.HEADER_CONTENT}
      </div>
    </div>
  );
};
