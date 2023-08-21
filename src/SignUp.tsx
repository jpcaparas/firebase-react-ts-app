import React, { useState } from 'react';
import { auth } from './firebase';

const SignUp: React.FC = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [message, setMessage] = useState("");

    const handleSignUp = async () => {
        try {
            await auth.createUserWithEmailAndPassword(email, password);
            setMessage("Successfully signed up!");
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
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
            <button onClick={handleSignUp}>Sign Up</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default SignUp;
