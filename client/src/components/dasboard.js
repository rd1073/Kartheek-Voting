import React, { useState, useEffect } from 'react';
import axios from 'axios';

import '../components/voting.css'
import congress from '../components/download (1).png';
import bjp from '../components/download.png'
import { Link, useNavigate } from 'react-router-dom';

function Voting() {
    const [voteCounts, setVoteCounts] = useState(() => {
        const storedCounts = JSON.parse(localStorage.getItem('voteCounts'));
        return storedCounts || { candidate1: 0, candidate2: 0 };
    });
 
        console.log('Vote counts updated:', voteCounts);

        const navigate = useNavigate();

   /* const handleVote = async (candidateId) => {
        try {
            // Send vote submission request to backend
            // Update vote counts based on the response
            const updatedVoteCounts = { ...voteCounts };
            updatedVoteCounts[candidateId] += 1;
            setVoteCounts(updatedVoteCounts);

            console.log('Vote submitted successfully');
            localStorage.setItem('voteCounts', JSON.stringify(updatedVoteCounts));

            // Log the vote counts of individual candidates
            console.log(`Vote count for ${candidateId}:`, updatedVoteCounts[candidateId]);
            window.location.reload();
        } catch (error) {
            console.error('Error submitting vote:', error);
        }
    };

    */


    // Frontend code
const handleVote = async (candidate) => {
    try {
        await axios.post('http://localhost:5000/voter/vote', { candidate });
        console.log('Vote recorded successfully');
        window.location.reload();

    } catch (error) {
        console.error('Error recording vote:', error);
    }
};

    const checkResults = () => {
        
        navigate(`/winner`);
    };



    return (
        <div>
            <header>
                <h1>Vote in Digital Voting System</h1>
            </header>
            <main>
                <section id="voting">
                    <h2 style={{ color: 'aliceblue', fontSize: 'xx-large', textShadow: '2px 2px 8px goldenrod' }}>
                        Choose Your Candidate
                    </h2>
                    <form id="votingForm">
                        <div className="candidate">
                        <input
                        type="radio"
                        id="candidate1"
                        name="candidate"
                        value="candidate1"
                        onChange={() => handleVote('candidate1')}
                    />
                            <img
                                style={{ display: 'block' }}
                                src={bjp}
                                alt="Narendra Modi"
                                width="100px"
                                height="100px"
                            />
                            <label
                                style={{ color: 'aliceblue', paddingRight: '50px', fontSize: 'x-large' }}
                                htmlFor="candidate1"
                            >
                                <b>BJP</b>
                            </label>
                        </div>
                        <div className="candidate">
                        <input
                        type="radio"
                        id="candidate2"
                        name="candidate"
                        value="candidate2"
                        onChange={() => handleVote('candidate2')}
                    />
                            <img
                                style={{ display: 'block' }}
                                src={congress}
                                alt="Congress"
                                width="100px"
                                height="100px"
                            />
                            <label
                                style={{ color: 'aliceblue', paddingRight: '50px', fontSize: 'x-large' }}
                                htmlFor="candidate2"
                            >
                                <b>Congress</b>
                            </label>
                        </div>
                        {/* Add more candidates as needed */}
                       <button onClick={checkResults}>Check Results</button>                     </form>
                </section>
            </main>
            <footer>
                <p>&copy; 2024 Digital Voting System</p>
            </footer>
        </div>
    );
}

export default Voting;
