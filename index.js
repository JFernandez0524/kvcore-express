import express from 'express';
import 'dotenv/config';
import getContacts from './utils.js';

const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/api/contacts/', async (req, res) => {
  const contacts = await getContacts();
  res.send(JSON.stringify(contacts.total));
});

app.post('/api/contacts/:contactId', async (req, res) => {});

app.listen(PORT, () => console.log(`App runnig on port: ${PORT}`));
