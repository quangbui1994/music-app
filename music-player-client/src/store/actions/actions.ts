import { PLAY_SONG, ActionTypes, TOOGLE_PLAY, STOP_PLAY } from "./actionTypes";

export const playSong = (song: Song):ActionTypes => ({
    type: PLAY_SONG,
    payload: song
});

export const tooglePlay = (): ActionTypes => ({
    type: TOOGLE_PLAY
});

export const stopPlay = (): ActionTypes => ({
    type: STOP_PLAY
});