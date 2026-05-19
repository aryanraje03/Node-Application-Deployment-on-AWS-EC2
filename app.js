const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from Aws EC2 + Node + PM2 CI/CD Deployment Successful');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
