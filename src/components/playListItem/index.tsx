import * as React from "react";
import { IPlaylistItem } from "../../typings";
// import { ItemWrapper, ItemThumbnail, ItemContent, ItemAuthor, ItemTitle } from "./style";

interface IProps {
  playlist: IPlaylistItem;
}

/**
 * Component for single play list card.
 * @param playlist
 * @returns {any}
 * @constructor
 */
export const PlaylistItem: React.StatelessComponent<IProps> = ({ playlist }) => {
  return (
    <div className='playlist__item'>
      <div className='playlist__item__thumbnail'>
        <img src={playlist.thumbnailUrl}/>
      </div>
    
      <div className='playlist__item__content'>
        <div className='playlist__item__title'>
          {playlist.title}
        </div>
        <div className='playlist__item__author'>
          {playlist.artist}
        </div>
      </div>
    </div>
  );
};
