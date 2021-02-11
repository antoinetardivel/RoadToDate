import { createContext } from "react";

interface AppContextProps {
    PlayMusic: boolean,
    setPlayMusic: React.Dispatch<React.SetStateAction<boolean>>
    PlayerPosition: number,
    setPlayerPosition: React.Dispatch<React.SetStateAction<number>>
}

const AppContext = createContext({
    PlayMusic: false,
    setPlayMusic: () => {},
    PlayerPosition: 0,
    setPlayerPosition: () => {},
} as AppContextProps);

export default AppContext;