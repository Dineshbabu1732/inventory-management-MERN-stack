import { createContext, useState, useContext } from "react";

const AuthContext = createContext();

export const AuthProvider = ({childre}) => {
    const [user, setUser] = useState();
}