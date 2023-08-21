import React, { useState } from 'react';
import { auth } from './firebase';

const SignIn: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignIn = async () => {
        try {
            await auth.signInWithEmailAndPassword(email, password);
            setMessage("Successfully signed in!");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Sign In</h2>
            <input
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Email"
            />
            <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Password"
            />
            <button onClick={handleSignIn}>Sign In</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignIn;
