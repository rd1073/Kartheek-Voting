import React from 'react';
import { useParams } from 'react-router-dom';
// Import the image file

function ResultsPage() {
    // Access the URL parameter 'winner' using useParams
    const { winner } = useParams();

    return (
        <div style={{ textAlign: 'center', marginTop: '50px',  }}>
            <h1>Results</h1>
             <p>The winner is: BJP <strong>{winner}</strong></p>
             <a href='/login'><button style={{ marginBottom: '20px' }}>Logout</button></a>
        </div>
    );
}

export default ResultsPage;
