import * as React from "react";
import { BlankLayout } from "../../components";
import { PlaylistContainer } from "../playlist";

/**
 * Component to configure home page.
 * @param props
 * @returns {any}
 * @constructor
 */
export const HomePage: React.StatelessComponent<{}> = (props) => {
  return (
    <BlankLayout>
      <PlaylistContainer />
    </BlankLayout>
  );
};
