import { createContext, useState } from "react";

export const AdminContext = createContext({
    isauth: false,
    token: "",
    auth: (token_) => {}
});

export const AdminProvider = ({ children }) => {

    const [ isauth, setIsAuth ] = useState(false);
    const [ token, setToken ] = useState("");

    const auth = (token_) => {
        setIsAuth(true);
        setToken(token_);
    }

    return (
        <AdminContext.Provider value={{
            isauth,
            token,
            auth
        }}>
            { children }
        </AdminContext.Provider>
    );
}

