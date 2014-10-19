exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'production';
exports.CALLBACK_URL = 'http://localhost:3001';
exports.PUSH_TOPIC = 'AllAccounts';

exports.CLIENT_ID = YOUR-SFDC-CLIENT-ID;
exports.CLIENT_SECRET = YOUR-SFDC-CLIENT-SECRET;
exports.USERNAME = YOUR-SFDC-USERNAME;
exports.PASSWORD = YOUR-SFDC-PASSWORD-AND-TOKEN;
