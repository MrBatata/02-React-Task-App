const express = require("express");
const cors = require("cors");

// Middlewares
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Todo Ok!')
});

app.post('/subscription', (req, res) => {
  const { pushSubscription } = req.body;
  console.log(pushSubscription);
  res.sendStatus(200);
});

// Server listen -> port
const port = 8000;
app.listen(port, () => console.log(`Server listening on port ${port}!`));