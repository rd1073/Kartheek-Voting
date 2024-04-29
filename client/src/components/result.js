import React, { useState, useEffect } from 'react';
import axios from 'axios';

function ResultsPage() {
    const [winner, setWinner] = useState('');
    const [votes, setVotes] = useState({});

    useEffect(() => {
        async function fetchResults() {
            try {
                const response = await axios.get('http://localhost:5000/voter/results');
                const { winner, votes } = response.data;
                setWinner(winner);
                setVotes(votes);
            } catch (error) {
                console.error('Error fetching results:', error);
            }
        }

        fetchResults();
    }, []);

    return (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
            <h1>Results</h1>
            <p>The winner is: <strong>{winner}</strong></p>
            <p>Votes for BJP: {votes.candidate1}</p>
            <p>Votes for Congress: {votes.candidate2}</p>
        </div>
    );
}

export default ResultsPage;
