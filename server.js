// server.js
const express = require('express');
const fs = require('fs');

const app = express();
const port = 3000;

app.use(express.json());

const contractAbi = JSON.parse(
  fs
    .readFileSync(
      './artifacts/contracts/CreateTokenTemplate.sol/CreateTokenTemplate.json'
    )
    .toString()
);

app.get('/contract-details', (req, res) => {
  res.json({
    abi: contractAbi.abi,
    bytecode: contractAbi.bytecode,
  });
});

app.listen(port, () => console.log(`Server running on port ${port}`));
