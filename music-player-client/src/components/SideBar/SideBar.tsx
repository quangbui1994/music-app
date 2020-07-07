import React, { useContext } from 'react';
import styles from './SideBar.module.css';
import { AuthContext } from '../../context/authContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-regular-svg-icons';

interface Props {
    onClick: (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => void;
}

const SideBar: React.FC<Props> = ({ onClick }) => {
    const state = useContext(AuthContext);

    return (
        <div className={styles.SideBar}>
            <div className={styles.logo}></div>
            {state.auth && <FontAwesomeIcon className={styles.icon} size="lg" icon={faHeart} onClick={onClick}/>}
        </div>
    )
};

export default SideBar;