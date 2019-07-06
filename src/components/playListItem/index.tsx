import * as React from "react";
import { IPlaylistItem } from "../../typings";
import { ItemWrapper, ItemThumbnail, ItemContent, ItemAuthor, ItemTitle } from "./style";

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
    <ItemWrapper>
      <ItemThumbnail>
        <img src={playlist.thumbnailUrl}/>
      </ItemThumbnail>
    
      <ItemContent>
        <ItemTitle>
          {playlist.title}
        </ItemTitle>
        <ItemAuthor>{playlist.artist}</ItemAuthor>
      </ItemContent>
    </ItemWrapper>
  );
};
