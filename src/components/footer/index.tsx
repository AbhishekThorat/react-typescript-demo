import * as React from "react";
import { messages } from '../../util/';

/**
 * Component for footer.
 * @returns {any}
 * @constructor
 */
export const Footer: React.StatelessComponent<{}> = () => {
  return (
    <div className='footer-wrapper'>
      <div className='footer-wrapper__content'>
        {messages.COPY_RIGHT}
      </div>
    </div>
  );
};
