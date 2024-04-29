const express = require("express");

const { Vote}=require("../config/db")

const router = express.Router();



// routes.js

// Vote for candidate
router.post('/vote', async (req, res) => {
    const { candidate } = req.body;
    try {
        const vote = await Vote.findOneAndUpdate({}, { $inc: { [candidate]: 1 } }, { upsert: true, new: true });
        res.json(vote);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


// Get results
router.get('/results', async (req, res) => {
    try {
        const votes = await Vote.findOne({});
        let winner;
        if (votes.candidate1 > votes.candidate2) {
            winner = 'BJP';
        } else if (votes.candidate2 > votes.candidate1) {
            winner = 'Congress';
        } else {
            winner = 'Tie';
        }
        res.json({ winner, votes });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
});


module.exports=  router ;
