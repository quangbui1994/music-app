import React, { Dispatch, useContext, useState } from 'react';
import styles from './Player.module.css';
import { RootState } from '../../store';
import { ConnectedProps, connect } from 'react-redux';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlay, faPause, faVolumeUp, faUndoAlt, faStop } from '@fortawesome/free-solid-svg-icons';
import { ActionTypes } from '../../store/actions/actionTypes';
import { tooglePlay, stopPlay } from '../../store/actions/actions';
import { SongContext } from '../../context/songContext';

interface Props extends ReduxProps {

}

const Player: React.FC<Props> = ({ app, tooglePlay, stopPlay }) => {
    const [duration, setDuration] = useState<any>(0);
    const [loop, setLoop] = useState<boolean>(false);
    const [stop, setStop] = useState<boolean>(false);
    const state = useContext(SongContext);

    /**
     * Play and pause the player
     */
    const tooglePlayHandler = () => {
        if (app.playing) {
            state.sound?.pause();
        } else {
            state.sound?.play();
            setStop(false);
        }
        tooglePlay();
    }

    /**
     * Stop the playing song
     */
    const toggleStop = () => {
        if (!stop) {
            state.sound?.stop();
            stopPlay();
        } 
        setStop(!stop);
    }

    /**
     * Loop the song
     */
    const toggleLoop = () => {
        if (loop) {
            state.sound.loop(false);
        } else {
            state.sound?.loop();
        }
        setLoop(!loop);
    }

    /**
     * Set the time indicator for progress bar
     */
    const repeatOften = () => {
        setDuration(app.playing ? state.sound.seek() : duration)
        requestAnimationFrame(repeatOften);
    }
    requestAnimationFrame(repeatOften);

    return (
        app.currentSong ? <div className={styles.PlayerHolder}>
            <div className={styles.songHolder}>
                <div className={styles.imgCover} style={{backgroundImage: `url(${app.currentSong?.smallImage})`}}></div>
                <div className={styles.songDetails}>
                    <div className={styles.songName}>{app.currentSong?.name}</div>
                    <div className={styles.songArtist}>{app.currentSong?.artist}</div>
                </div>
            </div>
            <div className={styles.playButton} onClick={tooglePlayHandler}>
                <FontAwesomeIcon icon={app.playing ? faPause : faPlay} />
            </div>
            <div className={styles.volumeHandler}>
                <FontAwesomeIcon icon={faVolumeUp} />
            </div>
            <div className={styles.player}>
                <progress id="file" value={duration} max="100" />
                <FontAwesomeIcon icon={faUndoAlt} className={loop ? styles.loop : styles.unLoop} onClick={toggleLoop}/>
                <FontAwesomeIcon icon={faStop} className={stop ? styles.stop : styles.unStop} onClick={toggleStop}/>
            </div>
        </div> : null
    )
};

const mapStateToProps = (state: RootState) => ({
    app: state.app
});

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
    tooglePlay: () => dispatch(tooglePlay()),
    stopPlay: () => dispatch(stopPlay())
})

const connector = connect(mapStateToProps, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Player);