# KVcore Api Integration

get contacts from kvcore agent account.

run app to get total contacts

### .env

PORT=3000 \
API_KEY= <KVcore API TOKEN> \


### Remove .total to show all contacts

`app.get('/api/contacts/', async (req, res) => {
  const contacts = await getContacts();
  res.send(JSON.stringify(contacts.total));
});`
