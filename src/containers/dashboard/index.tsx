import * as React from "react";
import { DefaultLayout } from "../../components";
import { PlaylistContainer } from "../playlist";

/**
 * Component to configure dashboard.
 * @param props
 * @returns {any}
 * @constructor
 */
export const Dashboard: React.StatelessComponent<{}> = (props) => {
  return (
    <DefaultLayout>
      <PlaylistContainer />
    </DefaultLayout>
  );
};
