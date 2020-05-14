const express = require('express');
const body_pasrser = require('body-parser');

require('./database/db')();
const auth = require('./routes/auth');

const app = express();

app.use(body_pasrser.json());
app.use(body_pasrser.urlencoded({ extended: true }));
app.use('/auth', auth);

app.get('/', (req, res) => res.send('Home page runs'));


const PORT = 8000;
app.listen(PORT, () => console.log(`App is listening on the port ${PORT}.....`));