import * as React from "react";
import { connect } from "react-redux";
import { State } from "../../redux/reducers";
import { fetchPlaylistAction } from "../../redux/actions/playlist";
import { PlaylistPage } from "./playlist";

const mapStateToProps = (state: State) => {
    return ({
        dashboardData: state.dashboard,
        loaderState: state.loader,
    })
};

const mapDispatchToProps = (dispatch) => ({
    fetchPlaylist: () => dispatch(fetchPlaylistAction()),
});

/**
 * Connect the redux store with PlaylistPage component.
 */
export const PlaylistContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaylistPage);
