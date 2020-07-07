export const PLAY_SONG = 'PLAY_SONG';
export const TOOGLE_PLAY = 'TOOGLE_PLAY';
export const STOP_PLAY = 'STOP_PLAY';

interface PlaySong {
    type: typeof PLAY_SONG,
    payload: Song
};

interface TooglePlay {
    type: typeof TOOGLE_PLAY,
}

interface StopPlay {
    type: typeof STOP_PLAY,
}

export type ActionTypes = PlaySong | TooglePlay | StopPlay;