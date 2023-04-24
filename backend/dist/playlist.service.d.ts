export interface Song {
    id?: string;
    title: string;
    imgUrl: string;
}
export interface User {
    _id: string;
    username: string;
    password?: string;
    createdAt: string;
}
export interface Playlist {
    _id: string;
    name: string;
    tags: string[];
    createdBy: User;
    imgUrl: string;
    songs: Song[];
}
//# sourceMappingURL=playlist.service.d.ts.map