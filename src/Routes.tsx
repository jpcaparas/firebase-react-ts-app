import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Navigate, Route, Routes as Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddNote from './AddNote';
import { auth } from './firebase';
import Logout from './Logout';
import Navigation from './Navigation';

function AuthGuard({ children }: any) {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

    useEffect(() => {
        // Listen for auth state changes
        const unsubscribe = auth.onAuthStateChanged(user => {
            setIsAuthenticated(!!user);
        });

        // Cleanup the listener on component unmount
        return () => unsubscribe();
    }, []);

    if (!isAuthenticated) {
        return children;
    }

    return <Navigate to="/addnote" replace />;
}

const Routes: React.FC = () => {
    return (
        <Router>
            <Navigation />
            <Switch>
                <Route path="/signup" element={<AuthGuard><SignUp /></AuthGuard>} />
                <Route path="/signin" element={<AuthGuard><SignIn /></AuthGuard>} />
                {/* TODO: Add protection for the AddNote route */}
                <Route path="/addnote" element={<AddNote />} />
                <Route path="/logout" element={<Logout />} />
            </Switch>
        </Router>
    );
};

export default Routes;
