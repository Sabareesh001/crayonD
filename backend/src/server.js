const User = require('../models/user');

const newData = User.build({
    username:"Bob",
    password:"1234"
})

newData.save();

User.sync();