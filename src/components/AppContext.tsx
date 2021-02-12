import { createContext } from "react";

interface AppContextProps {
    PlayMusic: any,
    setPlayMusic: React.Dispatch<React.SetStateAction<any>>,
    PlayerPosition: number,
    setPlayerPosition: React.Dispatch<React.SetStateAction<number>>,
    PlayerLife: number,
    setPlayerLife: React.Dispatch<React.SetStateAction<number>>,
    PlayerScore: number,
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
    Start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,
}

const AppContext = createContext({
    PlayMusic: 0,
    setPlayMusic: () => {},
    PlayerPosition: 0,
    setPlayerPosition: () => {},
    PlayerLife: 3,
    setPlayerLife: () => {},
    PlayerScore: 0,
    setPlayerScore: () => {},
    Start: false,
    setStart: () => {},
} as AppContextProps);

export default AppContext;