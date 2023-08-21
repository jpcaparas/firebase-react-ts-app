import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from './firebase';

const Logout: React.FC = () => {
    const history = useNavigate();

    useEffect(() => {
        auth.signOut().then(() => {
            history("/signin");
        }).catch((error) => {
            console.error("Error logging out: ", error);
        });
    }, [history]);

    return (
        <div>
            Logging out...
        </div>
    );
};

export default Logout;
