import { useEffect, useState } from "react"
import { AuthContext } from "./authContext";

export const AuthProvider = ({ children }) => {
    // eslint-disable-next-line no-unused-vars
    const [currentUser, setCurrenUser] = useState(
        JSON.parser(localStorage.getItem('user') || null
        ));

    const login = () => {
        // TO DO
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (<AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>)


}