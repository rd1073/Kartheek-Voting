import React, { useState, useEffect } from 'react';
import axios from 'axios';
import congress from '../components/download (1).png';
import bjp from '../components/download.png'
import { Link, useNavigate } from 'react-router-dom';


function ResultsPage() {
    const [winner, setWinner] = useState('');
    const [votes, setVotes] = useState({});
    const navigate = useNavigate();

    const handleRestartVoting = async() => {
        try {
            await axios.post('http://localhost:5000/voter/restart-voting');
            navigate(`/dashboard`);// Redirect to the voting page
        } catch (error) {
            console.error('Error restarting voting:', error);
            // Handle error
        }
        // Implement logic to restart voting
    };

    const handleLogout = () => {
        // Implement logic to logout
        sessionStorage.removeItem('userInfo');

        navigate(`/login`);
    };

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
        <div style={{ position: 'absolute', bottom: '10px', left: '10px' }}>
                <button onClick={handleRestartVoting}>Restart Voting</button>
            </div>
            <div style={{ position: 'absolute', bottom: '10px', right: '10px' }}>
                <button onClick={handleLogout}>Logout</button>
            </div>
    </div>
    );
}

export default ResultsPage;
