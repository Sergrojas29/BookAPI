require('dotenv').config();
const jwt = require('jsonwebtoken')

const secret = process.config.TOKEN_SECERT || 'shhhmysecertshhhhhhh'

const expiration = '2h'

const testUserData = [
    {
        user: 'owner',
        password: 123
    }
]


const authenticate = {
    AuthenticationError: false,

    signToken: function (username, _id) {
        const payload = {_id, username};
        const token = jwt.sign({ data: payload }, secret, { expiresIn: expiration })
        return token
    }
}

module.exports = authenticate