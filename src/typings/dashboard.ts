export interface IPlaylistItem {
  artist: string;
  title: string;
  thumbnailUrl: string;
  id: number;
  imageUrl: string;
}

export interface IDashboard {
    errorWhileFetchingPlaylist: boolean,
    playlistItems: IPlaylistItem[],
};

