// Download the helper library from https://www.twilio.com/docs/node/install
// Your Account Sid and Auth Token from twilio.com/console
// DANGER! This is insecure. See http://twil.io/secure
const accountSid = 'ACe4c22e467a7acee11d07dfca900345e4';
const authToken = '4cf439d9033b5e0779634d226587de1b';
const client = require('twilio')(accountSid, authToken);

client.messages
  .create({
     body: 'This is the ship that made the Kessel Run in fourteen parsecs?',
     from: '+19792272930',
     to: '+12815082224'
   })
  .then(message => console.log(message.sid));