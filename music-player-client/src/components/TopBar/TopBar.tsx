import React, { useState, FormEvent, useRef, useContext } from 'react';
import styles from './TopBar.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { AuthContext } from '../../context/authContext';

interface Props {
    onSearch: OnSearch,
    onClick: () => void
};

const TopBar: React.FC<Props> = ({ onSearch, onClick }) => {
    const state = useContext(AuthContext);
    const [val, set] = useState<string | ''>('');

    const inputRef = useRef<HTMLInputElement>(null);

    const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
        //MAKE AN API REQUEST SONGS BY SEARCH QUERY
        e.preventDefault();
        onSearch(val);

        //RESET FIELDS AND FOCUS
        set('');
        inputRef.current?.focus();
    }

    return (
        <div className={styles.TopBar}>
            <form onSubmit={onSubmit}>
                <label>
                    <FontAwesomeIcon icon={faSearch} className={styles.searchIcon}/>       
                </label>
                <input 
                    ref={inputRef}
                    placeholder="Search here"
                    className={styles.searchField} 
                    type="text" 
                    value={val} 
                    onChange={e => set(e.target.value)}/>
                <span className={styles.auth} onClick={onClick}>{state.auth ? 'Log out' : 'Log in'}</span>
            </form>
        </div>
    )
};

export default TopBar;