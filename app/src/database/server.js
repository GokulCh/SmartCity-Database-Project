import express from 'express';
import cors from 'cors';
import * as distinctQueries from './queries/distinctQueries.js';

const app = express();
const port = 3001;

app.use(cors()); // Add this line to enable CORS
app.use(express.json());

app.get('/api/:name', async (req, res) => {
  const { name } = req.params;
  const queryFunction = distinctQueries[name];

  if (typeof queryFunction !== 'function') {
    return res.status(400).send('Invalid query name');
  }

  try {
    const results = await queryFunction();
    res.json(results);
  } catch (err) {
    console.error('Error executing query:', err);
    res.status(500).send('Error executing query');
  }
});

app.get('/api', (req, res) => {
  const queryNames = Object.keys(distinctQueries);
  res.json({ message: "Valid api's", queryNames });
  console.log(queryNames);
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
