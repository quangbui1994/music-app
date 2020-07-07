import React, { useState, useRef, RefObject, useContext } from 'react';
import styles from './Home.module.css';
import SongItem from '../SongItem/SongItem';
import { searchMusic } from '../../services/api';
import TopBar from '../TopBar/TopBar';
import { RootState } from '../../store';
import { connect, ConnectedProps } from 'react-redux';
import { CSSTransition } from 'react-transition-group';

import HeroImage from '../../assets/img/audio-e-guitars-guitars-music-6966.jpg'
import Player from '../Player/Player';
import SideBar from '../SideBar/SideBar';
import Login from '../Login/Login';
import CloseButton from '../../UI/CloseButton';
import { AuthContext } from '../../context/authContext';
import { logout } from '../../services/auth';
import SongList from '../SongList/SongList';
import { fetchSongs } from '../../services/song';

interface Props extends ReduxProps {

}

const Home: React.FC<Props> = ({ app }) => {
    const [songs, setSongs] = useState<Song[]>([]);
    const [openModal, setOpenModal] = useState<boolean>(false);
    const state = useContext(AuthContext);

    const playGroundRef = useRef<HTMLDivElement>(null);
    const modalRef = useRef<HTMLDivElement>(null);

    /**
     * Detect click outside of modal
     */
    // useEffect(() => {
    //     window.addEventListener('click', clickEvent);

    //     return () => window.removeEventListener('click', clickEvent);
    // }, []);

    // const clickEvent = (e: MouseEvent) => {
    //     const target = e.target as HTMLElement;
    //     console.log(modalRef.current);
    //     if (modalRef.current && !modalRef.current?.contains(target)) {
    //         setOpenModal(false);
    //     } 
    // }

    /**
     * Search song by query and move to song section
     * @param query Search string
     */
    const onSearch = async (query: string) => {
        const results = await searchMusic(query);
        setSongs(results);

        scrollTo(playGroundRef);
    }

    /**
     * Scroll to the element by reference object
     * @param ref The reference of scroll to element
     */
    const scrollTo = (ref: RefObject<HTMLDivElement>):void => {
        if (ref.current) {
            window.scrollTo(0, ref.current?.offsetTop);
        }
    }

    const onClick = () => {
        if (state.auth) {
            logout();
            state.setAuth(false);
            localStorage.setItem('auth', '');
        } else {
            setOpenModal(true);
        }
    }

    /**
     * Toogle the user song list mode
     */
    const toggleUserSongs = async () => {
        try {
            const fetchedSongs: Array<Song> = await fetchSongs();
            setSongs(fetchedSongs);
            scrollTo(playGroundRef);
        } catch (error) {
            console.log(error);
        }
    }

    // HERO IMAGE
    const heroImage = (
        !app.currentSong 
        ? <div className={styles.heroImage} style={{backgroundImage: `url(${HeroImage})`}}></div> 
        : <div className={styles.heroImage}>
            <div className={styles.songImage}  style={{backgroundImage: `url(${app.currentSong?.bigImage})`}}></div>
        </div>
    )

    return (
        <div className={styles.Home}>
            <TopBar onSearch={onSearch} onClick={() => onClick()}/>
            <Player />
            <SideBar onClick={toggleUserSongs}/>
            <CSSTransition 
                unmountOnExit 
                mountOnEnter 
                timeout={300} 
                in={openModal} 
                classNames={{
                    enter: styles['modal-enter'],
                    enterActive: styles['modal-enter-active'],
                    exit: styles['modal-exit'],
                    exitActive: styles['modal-exit-active']
                }}>
                <div className={styles.modalContainer} ref={modalRef}>
                    <h2>Log in</h2>
                    <CloseButton onClick={() => setOpenModal(false)}/>
                    <Login closeModal={() => setOpenModal(false)}/>
                </div>
            </CSSTransition>
            {heroImage}
            <div ref={playGroundRef}><SongList songs={songs}/></div>        
        </div>
    )
};

const mapStateToProps = (state: RootState) => ({
    app: state.app
});

const connector = connect(mapStateToProps);

type ReduxProps = ConnectedProps<typeof connector>;

export default connector(Home);