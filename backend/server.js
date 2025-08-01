const express = require('express');
const cors = require('cors');
const fs = require('fs');

const app = express();
const PORT = 3000;

app.use(cors());

// Dummy API route to get intern data
app.get('/api/intern', (req, res) => {
  fs.readFile('./data.json', 'utf8', (err, data) => {
    if (err) {
      return res.status(500).json({ error: 'Failed to read data.' });
    }
    res.json(JSON.parse(data));
  });
});

app.get('/api/leaderboard', (req, res) => {
  const leaderboard = [
    { name: "Aparna Sanal", referralCode: "aparna2025", amountRaised: 10000 },
    { name: "Ravi Kumar", referralCode: "ravi2025", amountRaised: 8500 },
    { name: "Sneha Das", referralCode: "sneha2025", amountRaised: 7200 },
    { name: "Arjun M", referralCode: "arjun2025", amountRaised: 6500 },
    { name: "Nidhi R", referralCode: "nidhi2025", amountRaised: 4800 }
  ];
  res.json(leaderboard);
});


app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
