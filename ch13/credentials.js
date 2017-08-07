module.exports = {
        mongo: {
        development: {
                connectionString: 'mongodb://localhost:27017/development',
        },
        production: {
                connectionString: 'mongodb://localhost:27017/production',
        },
        },
        cookieSecret: 'your cookie secret goes here',
        gmail: {
                user: 'bidsiemens',
                password: 'password',
        }
};