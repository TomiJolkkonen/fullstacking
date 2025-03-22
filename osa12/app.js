// app.js
const express = require('express');
const app = express();

const PORT = 3000;

app.get('/', (req, res) => {
  res.send('Hello, Docker!');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

// rakenna docker-kuva: docker build -t docker-node-app .
// aja docker-kontti: docker run -p 3000:3000 docker-node-app

