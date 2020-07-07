import React, { useState } from 'react';
import { Howler, Howl } from 'howler';

interface Props {
    children: React.ReactNode
}

interface SongContext {
    sound: Howl,
    setSound: (sound: Howl) => void
}

export const SongContext = React.createContext({ sound: new Howl({}), setSound: (sound: Howl) => {}});

export const SongContextProvider: React.FC<Props> = ({ children }) => {
    const setSound = (sound: Howler | {}):void => {
        set({...initState, sound});
    }
    
    const initState: SongContext = {
        sound: new Howl({}),
        setSound
    }
    
    const [state, set] = useState<any>(initState);
    return (
        <SongContext.Provider value={state}>
            {children}
        </SongContext.Provider>
    )
}