import { useState, useEffect } from 'react';
import { getCurrentUser, loginUser, logoutUser } from '../services/api';

const useAuth = () => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchUser = async () => {
            const currentUser = await getCurrentUser();
            setUser(currentUser);
            setLoading(false);
        };

        fetchUser();
    }, []);

    const login = async (credentials) => {
        const loggedInUser = await loginUser(credentials);
        setUser(loggedInUser);
    };

    const logout = async () => {
        await logoutUser();
        setUser(null);
    };

    return { user, loading, login, logout };
};

export default useAuth;