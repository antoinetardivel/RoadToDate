import * as React from "react";

const MusicProvider = ({children}) => {
    // const [currentPage, setCurrentPage] = useState('pageGravurePoussiere')
    const [PlayMusic, setPlayMusic] = useState(false)
    const states = {
        PlayMusic, 
        setPlayMusic,
    }
    return (
        <MusicProvider.Provider value={states}>
            {children}
        </MusicProvider.Provider>
    );
};

export default MusicProvider;