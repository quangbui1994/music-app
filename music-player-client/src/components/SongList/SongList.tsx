import React from 'react';
import styles from './SongList.module.css';
import SongItem from '../SongItem/SongItem';

interface Props {
    songs: Array<Song>
}

const SongList: React.FC<Props> = ({ songs }) => {
    return (
        songs.length !== 0 ? <div className={styles.playGround}>
            <h3 className={styles.callout}>Start to</h3>
            <h2 className={styles.discover}>Discover</h2>
            <div className={styles.songContainer}>
                {songs.map((song, i) => <SongItem key={i} song={song}/>)}
            </div>
        </div> : null
    )
};

export default SongList;