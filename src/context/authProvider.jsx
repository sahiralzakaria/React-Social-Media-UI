import { useEffect, useState } from "react"
import { AuthContext } from "./authContext";
import personImg from '../assets/person.jpg';

export const AuthProvider = ({ children }) => {
    const [currentUser, setCurrenUser] = useState(
        JSON.parse(localStorage.getItem('user') || null
        ));

    const login = () => {
        setCurrenUser({ id: 1, name: 'sahir', profilePicture: personImg })
    }

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(currentUser))
    }, [currentUser]);

    return (<AuthContext.Provider value={{ currentUser, login }}>{children}</AuthContext.Provider>)


}