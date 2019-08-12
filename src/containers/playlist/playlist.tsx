import * as React from "react";
import { ILoaderState, IDashboard, IPlaylistItem } from "../../typings";
// import { PlaylistWrapper, ErrorInfoPanel } from "./style";
import { Loader, PlaylistItem } from "../../components";
import { messages } from '../../util/';

interface IProps {
    dashboardData: IDashboard;
    loaderState: ILoaderState;
    fetchPlaylist(): void;
}

export class PlaylistPage extends React.Component<IProps,{}> {

  public componentDidMount() {
    const { fetchPlaylist } = this.props;
    fetchPlaylist();
  }
  
  /**
   * Function to render loader on main panel.
   * @returns {any}
   */
  renderLoader() {
    return (<Loader />)
  }
  
  /**
   * Function to render error notifications.
   * @returns {any}
   */
  renderErrorInfoPanel() {
    return(
      <div className='playlist__info-panel--error'>
        <strong>{messages.SOMETHING_WENT_WRONG}</strong>
      </div>
    )
  }
  
  /**
   * Function to render actual playlist.
   * @param playlistItems
   * @returns {any}
   */
  renderPlaylist(playlistItems: IPlaylistItem[]) {
    return (
      <div className='playlist__container'>
          {
            playlistItems.map((playlist, index) =>
              <PlaylistItem
                key={index}
                playlist={playlist}
              />
            )
          }
      </div>
    )
  }
  
  managePlaylist() {
    const { dashboardData : {errorWhileFetchingPlaylist, playlistItems} } = this.props;
    return errorWhileFetchingPlaylist && this.renderErrorInfoPanel() || this.renderPlaylist(playlistItems);
  }

  public render() {
    const { loaderState } = this.props;
    return loaderState && this.renderLoader() || this.managePlaylist()
  }
  
};
