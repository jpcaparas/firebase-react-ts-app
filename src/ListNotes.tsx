// src/ListNotes.tsx
import React, { useState, useEffect } from 'react';
import { auth, db } from './firebase';

const ListNotes: React.FC = () => {
    const [notes, setNotes] = useState<Array<{ id: string, content: string }>>([]);
    
    useEffect(() => {
        const fetchNotes = async () => {
            const userId = auth.currentUser?.uid;
            if (!userId) return;

            const snapshot = await db.collection('notes').where('userId', '==', userId).get();
            const fetchedNotes = snapshot.docs.map(doc => ({
                id: doc.id,
                content: doc.data().content,
            }));
            setNotes(fetchedNotes);
        };

        fetchNotes();
    }, []);

    const handleDeleteNote = async (id: string) => {
        await db.collection('notes').doc(id).delete();
        // Refresh the list
        setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
    };

    return (
        <div>
            <h2>Your Notes</h2>
            <ul>
                {notes.map(note => (
                    <li key={note.id}>
                        {note.content}
                        <button onClick={() => handleDeleteNote(note.id)}>Delete</button>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default ListNotes;
