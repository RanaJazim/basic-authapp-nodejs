const bcrypt = require('bcryptjs');

bcrypt.genSalt(10)
    .then((res) => hashed = res)
    .catch((err) => console.log(err));

async function hashed() {
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash('1234', salt);

    console.log(hash);
}

hashed();