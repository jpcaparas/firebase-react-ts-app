import React from 'react';
import { BrowserRouter as Router, Route, Routes as Switch } from 'react-router-dom';
import SignUp from './SignUp';
import SignIn from './SignIn';
import AddNote from './AddNote';

const Routes: React.FC = () => {
    return (
        <Router>
            <div>
                <nav>
                    <ul>
                        <li><a href="/signup">Sign Up</a></li>
                        <li><a href="/signin">Sign In</a></li>
                        <li><a href="/addnote">Add Note</a></li>
                    </ul>
                </nav>
            </div>
            <Switch>
                <Route path="/signup" element={<SignUp />} />
                <Route path="/signin" element={<SignIn />} />
                <Route path="/addnote" element={<AddNote />} />
            </Switch>
        </Router>
    );
};

export default Routes;
