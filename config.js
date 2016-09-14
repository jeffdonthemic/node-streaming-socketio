exports.PORT = process.env.PORT || 3001; // use heroku's dynamic port or 3001 if localhost
exports.DEBUG = true;
exports.ENVIRONMENT = 'production';
exports.CALLBACK_URL = 'http://localhost:3001';
exports.PUSH_TOPIC = 'AllAccounts';

exports.CLIENT_ID = process.env.CLIENT_ID || "3MVG9KI2HHAq33RxYKowHOdnSD7W2RopY73rvbOKiCFV.cLsntWLO0r5sPur7j4Gl1qr4JPYNEeQMLlv.azRQ";
exports.CLIENT_SECRET = process.env.CLIENT_SECRET || "3496367180768679823";
exports.USERNAME = process.env.USERNAME || "node-nforce-demo@jeffdouglas.com";
exports.PASSWORD = process.env.PASSWORD || "!0Vvctkrt8bhWuys6boXWRQdBpadz3xC4pxnG";
