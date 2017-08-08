module.exports = {
        mongo: {
        development: {
                connectionString: 'mongodb://localhost:27017/development',
        },
        production: {
                connectionString: 'mongodb://localhost:27017/production',
        },
        },
        authProviders: {
            facebook: {
                development: {
                    appId: 'your_app_id',
                    appSecret: 'your_app_secret',
                },
            },
            google: {
                development: {
                    clientID: 'your_client_id',
                    clientSecret: 'your_client_secret',
                },
            },
        },
        cookieSecret: 'your cookie secret goes here',
        gmail: {
                user: 'username',
                password: 'password',
        }
};