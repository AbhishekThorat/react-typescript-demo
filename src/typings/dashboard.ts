export interface PlaylistItem {
  artist: string;
  title: string;
  thumbnailUrl: string;
  id: number;
  imageUrl: string;
}

export interface Dashboard {
    errorWhileFetchingPlaylist: boolean,
    playlistItems: PlaylistItem[],
};

