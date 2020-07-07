import React, { Dispatch, useContext, useState } from 'react';
import styles from './SongItem.module.css';
import { trimString } from '../../helpers/helpers';
import { Howl, Howler } from 'howler';
import { ActionTypes } from '../../store/actions/actionTypes';
import { playSong } from '../../store/actions/actions';
import { connect, ConnectedProps } from 'react-redux';
import { SongContext } from '../../context/songContext';
import { AuthContext } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as faHeartRegular, faPlayCircle } from '@fortawesome/free-regular-svg-icons';
import { faHeart as faHeartSolid } from '@fortawesome/free-solid-svg-icons';
import { likeSong, disLike } from '../../services/song';


interface Props extends ReduxProps {
    song: Song
}

const SongItem: React.FC<Props> = ({ song, playSong }) => {
    const songState = useContext(SongContext);
    const authState = useContext(AuthContext);
    const [like, setLike] = useState<boolean>(song.like ? true : false);

    Howler.volume(.5);
    /**
     * Create the song variable based on Howl and save to Context data and Redux
     * @param src The source of song file
     */
    const soundPlay = (src: string): void => {
        let sound = new Howl({
            src
        });
        console.log(src);
        sound.play();

        songState?.setSound(sound);
        playSong(song);
    };

    /**
     * Like song handler
     */
    const onLike = () => {
        if (!like) {
            likeSong(song);
        } else {
            disLike(song.id);
        }
        setLike(!like);
    }
    
    return (
        <div className={styles.SongItem}>
            <div className={styles.songImage} style={{ backgroundImage: `url(${song.mediumImage})`}}>
                <div>
                    <FontAwesomeIcon icon={faPlayCircle} className={styles.playIcon} onClick={() => soundPlay(song.preview)}/>
                </div>
            </div>
            <div className={styles.title}>{trimString(song.name)}</div>
            <div className={styles.artist}>{song.artist}</div>
            {authState.auth && <FontAwesomeIcon icon={(like) ? faHeartSolid : faHeartRegular} onClick={onLike} className={styles.icon}/>}
        </div>
    );
};

const mapDispatchToProps = (dispatch: Dispatch<ActionTypes>) => ({
    playSong: (song: Song) => dispatch(playSong(song))
});

const connector = connect(null, mapDispatchToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(SongItem);