import * as React from "react";
import { LoaderState, HomePage, PlaylistItem as PlaylistItemTyping } from "../../typings";
import { PlaylistWrapper, ErrorInfoPanel } from "./style";
import { Loader, PlaylistItem } from "../../components";

interface Props {
    homePageData: HomePage;
    loaderState: LoaderState;
    fetchPlaylist(): void;
}

const SOMETHING_WENT_WRONG = "Something went wrong. Please check your network!";

export class PlaylistPage extends React.Component<Props,{}> {

  public componentDidMount() {
    const { fetchPlaylist } = this.props;
    fetchPlaylist();
    setInterval(fetchPlaylist, 60000);
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
      <ErrorInfoPanel>
        <strong>{SOMETHING_WENT_WRONG}</strong>
      </ErrorInfoPanel>
    )
  }
  
  /**
   * Function to render actual playlist.
   * @param playlistItems
   * @returns {any}
   */
  renderPlaylist(playlistItems: PlaylistItemTyping[]) {
    return (
      <PlaylistWrapper>
          {
            playlistItems.map((playlist, index) =>
              <PlaylistItem
                key={index}
                playlist={playlist}
              />
            )
          }
      </PlaylistWrapper>
    )
  }
  
  managePlaylist() {
    const { homePageData : {errorWhileFetchingPlaylist, playlistItems} } = this.props;
    return errorWhileFetchingPlaylist && this.renderErrorInfoPanel() || this.renderPlaylist(playlistItems);
  }

  public render() {
    const { loaderState } = this.props;
    return loaderState && this.renderLoader() || this.managePlaylist()
  }
  
};