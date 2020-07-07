import { ActionTypes, PLAY_SONG, TOOGLE_PLAY, STOP_PLAY } from "../actions/actionTypes";

const initState: IState = {
    currentSong: null,
    playing: false
};

interface IState {
    currentSong: Song | null,
    playing: boolean
};

export default (state: IState = initState, action: ActionTypes):IState => {
    switch (action.type) {
        case PLAY_SONG:
            return {...state, currentSong: action.payload, playing: true};   
        case TOOGLE_PLAY:
            return {...state, playing: !state.playing};   
        case STOP_PLAY:
            return {...state, playing: !state.playing};   
        default:
            return state;
    }
}