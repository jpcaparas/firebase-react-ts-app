import React, { useState } from 'react';
import { db, auth } from './firebase';

const AddNote: React.FC = () => {
    const [note, setNote] = useState("");
    const [message, setMessage] = useState("");

    const handleAddNote = async () => {
        if (!auth.currentUser) {
            setMessage("Please sign in to add notes.");
            return;
        }
        try {
            await db.collection('notes').add({
                userId: auth.currentUser.uid,
                content: note
            });
            setMessage("Note added successfully!");
            setNote("");  // Clear the note
        } catch (error: any) {
            setMessage(error.message);
        }
    };

    return (
        <div>
            <h2>Add Note</h2>
            <textarea
                value={note}
                onChange={(e) => setNote(e.target.value)}
                placeholder="Your note..."
            />
            <button onClick={handleAddNote}>Add Note</button>
            {message && <p>{message}</p>}
        </div>
    );
};

export default AddNote;
