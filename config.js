exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'production';
exports.CALLBACK_URL = 'http://localhost:3001';
exports.PUSH_TOPIC = 'AllAccounts';

exports.CLIENT_ID = process.env.CLIENT_ID || "YOUR-SFDC-CLIENT-ID";
exports.CLIENT_SECRET = process.env.CLIENT_SECRET || "YOUR-SFDC-CLIENT-SECRET";
exports.USERNAME = process.env.USERNAME || "YOUR-SFDC-USERNAME";
exports.PASSWORD = process.env.PASSWORD || "YOUR-SFDC-PASSWORD-AND-TOKEN";
