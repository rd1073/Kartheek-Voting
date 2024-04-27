import React from 'react';
import { useParams } from 'react-router-dom';

function ResultsPage() {
    // Access the URL parameter 'winner' using useParams
    const { winner } = useParams();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px', colour:'white' }}>
        <h1>Results</h1>
         <p>The winner is: <strong>{winner}</strong></p>
    </div>
    );
}

export default ResultsPage;
