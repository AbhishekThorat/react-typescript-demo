import * as React from "react";
import {LoaderWrapper} from "./style";

/**
 * Component for loader.
 * @returns {any}
 * @constructor
 */
export const Loader: React.StatelessComponent<{}> = () => {
  return (
    <LoaderWrapper>
      <div />
      <div />
      <div />
      <div />
      <div />
    </LoaderWrapper >
  );
};
