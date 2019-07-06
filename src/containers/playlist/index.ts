import * as React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from 'redux'
import { IState } from "../../redux/reducers";
import { fetchPlaylist } from "../../redux/actions/playlist";
import { PlaylistPage } from "./playlist";

const mapStateToProps = (state: IState) => {
    return ({
        dashboardData: state.dashboard,
        loaderState: state.loader,
    })
};

const mapDispatchToProps = (dispatch) => bindActionCreators({ fetchPlaylist }, dispatch);

/**
 * Connect the redux store with PlaylistPage component.
 */
export const PlaylistContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(PlaylistPage);
