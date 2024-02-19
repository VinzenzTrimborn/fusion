import React, {useEffect, useState} from "react";
import MyContext from "./MyContext";
import supabaseClient from "./supabaseClient";

const MyProvider = ({children}) => {
    const [state, setState] = useState({userId: null});

    useEffect(() => {
        // Function to fetch user ID
        const fetchUserId = async () => {
            const storedState = localStorage.getItem("state");
            if (storedState) {
                setState(JSON.parse(storedState));
                console.log("UserId: " + JSON.parse(storedState).userId);
            } else {
                // Otherwise, call Supabase to get a new user ID
                const {data, error} = await supabaseClient.rpc("create_user");
                if (data) {
                    console.log("UserId: " + data);
                    setState({userId: data});
                    localStorage.setItem("state", JSON.stringify({userId: data}));
                }
                if (error) console.error("Error:", error.message);
            }
        };

        fetchUserId();
    }, []);

    // value to be passed to consuming components
    const contextValue = {
        state,
        updateState: (newState) => setState({...state, ...newState}),
    };

    return (
        <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
    );
};

export default MyProvider;
