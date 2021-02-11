import { createContext } from "react";

interface AppContextProps {
    PlayMusic: boolean,
    setPlayMusic: React.Dispatch<React.SetStateAction<boolean>>
}

const AppContext = createContext({
    PlayMusic: false,
    setPlayMusic: () => {}
} as AppContextProps);

export default AppContext;