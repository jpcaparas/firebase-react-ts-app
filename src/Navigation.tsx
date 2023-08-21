import React, { useState, useEffect } from 'react';
import { auth } from './firebase';
import { Link } from 'react-router-dom';

const Navigation: React.FC = () => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    return (
        <nav>
            <ul>
                {isAuthenticated ? (
                    <>
                        <li><Link to="/addnote">Add Note</Link></li>
                        <li><Link to="/logout">Logout</Link></li>
                    </>
                ) : (
                    <>
                        <li><Link to="/signup">Sign Up</Link></li>
                        <li><Link to="/signin">Sign In</Link></li>
                    </>
                )}
            </ul>
        </nav>
    );
};

export default Navigation;
