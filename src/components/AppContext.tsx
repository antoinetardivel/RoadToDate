import { createContext } from "react";

interface AppContextProps {
    PlayMusic: boolean,
    setPlayMusic: React.Dispatch<React.SetStateAction<boolean>>,
    PlayerPosition: number,
    setPlayerPosition: React.Dispatch<React.SetStateAction<number>>,
    PlayerLife: number,
    setPlayerLife: React.Dispatch<React.SetStateAction<number>>,
    PlayerScore: number,
    setPlayerScore: React.Dispatch<React.SetStateAction<number>>,
    Start: boolean,
    setStart: React.Dispatch<React.SetStateAction<boolean>>,
    VagueNum: number,
    setVagueNum: React.Dispatch<React.SetStateAction<number>>,
}

const AppContext = createContext({
    PlayMusic: false,
    setPlayMusic: () => {},
    PlayerPosition: 0,
    setPlayerPosition: () => {},
    PlayerLife: 3,
    setPlayerLife: () => {},
    PlayerScore: 0,
    setPlayerScore: () => {},
    Start: false,
    setStart: () => {},
    VagueNum: 0,
    setVagueNum: () => {},
} as AppContextProps);

export default AppContext;