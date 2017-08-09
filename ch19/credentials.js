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
                    appId: 'some_text',
                    appSecret: 'some_text',
                },
            },
            google: {
                development: {
                    clientID: 'some_text',
                    clientSecret: 'some_text',
                },
            },
        },
        twitter: {
            consumerKey: 'some_text',
            consumerSecret: 'some_text',
        },
        cookieSecret: 'your cookie secret goes here',
        gmail: {
                user: 'bidsiemens',
                password: 'eng-infra',
        }
};