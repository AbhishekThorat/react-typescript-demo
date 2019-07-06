import * as React from "react";
import { PlaylistItem as PlaylistItemTyping } from "../../typings/dashboard";
import { ItemWrapper, ItemThumnail, ItemContent, ItemAuthor, ItemTitle } from "./style";

interface Props {
  playlist: PlaylistItemTyping;
}

/**
 * Component for single play list card.
 * @param playlist
 * @returns {any}
 * @constructor
 */
export const PlaylistItem: React.StatelessComponent<Props> = ({ playlist }) => {
  return (
    <ItemWrapper>
      <ItemThumnail>
        <img src={playlist.thumbnailUrl}/>
      </ItemThumnail>
    
      <ItemContent>
        <ItemTitle>
          {playlist.title}
        </ItemTitle>
        <ItemAuthor>{playlist.artist}</ItemAuthor>
      </ItemContent>
    </ItemWrapper>
  );
};
