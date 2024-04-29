import React, { useState, useEffect } from 'react';
import axios from 'axios';
import congress from '../components/download (1).png';
import bjp from '../components/download.png'

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
        <div style={{ textAlign: 'center', marginTop: '50px', color: 'white' }}>
        <h1>Results</h1>
        <p>The winner is: <strong>{winner}</strong></p>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <div style={{ marginRight: '50px' }}>
                <p>Votes for BJP: {votes.candidate1}</p>
                {winner === 'BJP' && <img src={bjp} alt="BJP" style={{ width: '200px', height: '200px' }} />}
            </div>
            <div>
                <p>Votes for Congress: {votes.candidate2}</p>
                {winner === 'Congress' && <img src={congress} alt="Congress" style={{ width: '200px', height: '200px' }} />}
            </div>
        </div>
    </div>
    );
}

export default ResultsPage;
