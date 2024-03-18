import axios from 'axios';

let config = {
  method: 'get',
  maxBodyLength: Infinity,
  url: 'https://api.kvcore.com/v2/public/contacts',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${process.env.API_KEY}`,
  },
};

async function getContacts() {
  try {
    const res = await axios(config);
    const contacts = await res.data;
    console.log(JSON.stringify(contacts.total));
    return contacts;
  } catch (error) {
    console.log(error);
  }

  axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data.total));
    })
    .catch(function (error) {
      console.log(error);
    });
}

export default getContacts;
