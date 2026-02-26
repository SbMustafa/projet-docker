import React, { useEffect, useState } from 'react';

function App() {
    const [message, setMessage] = useState("Connexion au serveur...");

    useEffect(() => {
        fetch('http://localhost:5000/')
            .then(res => res.text())
            .then(data => setMessage(data))
            .catch(() => setMessage("Erreur de connexion au serveur."));
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Mon Projet Conteneurisé</h1>
            <p>Statut du Backend : <strong>{message}</strong></p>
        </div>
    );
}

export default App;