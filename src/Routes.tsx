import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes as Switch, useLocation } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddNote from './AddNote';
import { auth } from './firebase';
import Logout from './Logout';
import Navigation from './Navigation';

function AuthGuard({ children } : any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    const location = useLocation();

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    if (isAuthenticated && location.pathname === '/signin') {
        return <Navigate to="/addnote" replace />;
    }

    if (!isAuthenticated && location.pathname !== '/signin') {
        return <Navigate to="/signin" replace />;
    }

    return children;
}

const Routes: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/signup" element={<AuthGuard><SignUp /></AuthGuard>} />
                <Route path="/signin" element={<AuthGuard><SignIn /></AuthGuard>} />
                <Route path="/addnote" element={<AuthGuard><AddNote /></AuthGuard>} />
                <Route path="/logout" element={<Logout />} />
            </Switch>
        </Router>
    );
};

export default Routes;
