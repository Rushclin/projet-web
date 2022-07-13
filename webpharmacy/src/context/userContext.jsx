import { CircularProgress } from '@mui/material';
import { createContext, useContext, useEffect, useState } from 'react';

const AuthContext = createContext({
    user: {}, logged: false, update: () => {
    }
});

const AuthContextProvider = ({ children }) => {
    const [user, setUser] = useState({});
    const [logged, setLogged] = useState(false);
    const [pending, setPending] = useState(true);

    const checkUser = () => {
        setPending(true);
        setLogged(false);
        const userString = window.sessionStorage.getItem('user');
        if (userString !== null) {
            setUser({ ...JSON.parse(userString) });
            setLogged(true);
        }
        setPending(false);
    };

    useEffect(() => {
        checkUser();
    }, []);

    const value = { user: user, logged: logged, update: checkUser };

    return (
        pending ? <div> <CircularProgress /> </div> : <AuthContext.Provider value={value}>{children}</AuthContext.Provider>
    );
};

const useAuthContext = () => {
    const { user, logged, update } = useContext(AuthContext);

    return { user, update, logged };
};

export { useAuthContext, AuthContextProvider };