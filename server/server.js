const express = require('express');
const cors = require('cors');
const Pool = require('pg').Pool;
require('dotenv').config();

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static('client/dist'));

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running!' });
});

app.get('*', (req, res) => {
  res.sendFile(__dirname + '/client/dist/index.html');
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on port ${PORT}`);
});
