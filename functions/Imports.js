const functions = require("firebase-functions");
const admin = require("firebase-admin");
const serviceAccount = require("./AdminKey.json");
admin.initializeApp({
    credential: admin.credential.cert(serviceAccount),
    projectId: "capstone-93499",
});
admin.firestore().settings({ignoreUndefinedProperties: true});
module.exports = {functions, admin}
