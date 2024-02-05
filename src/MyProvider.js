import React, { useState } from 'react';
import MyContext from './MyContext';

const MyProvider = ({ children }) => {
    const [state, setState] = useState({
        // your initial state here
    });

    // value to be passed to consuming components
    const contextValue = {
        state,
        updateState: newState => setState({ ...state, ...newState }),
    };

    return (
        <MyContext.Provider value={contextValue}>
            {children}
        </MyContext.Provider>
    );
};

export default MyProvider;
