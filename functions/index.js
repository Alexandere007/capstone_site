const express = require("express");
const cors = require("cors");
const app = express();
const {functions} = require('./Imports')
app.use(cors());

const {GarbageEndpoints} = require('./api/GarbageQueries/GarbageEndpoints')
let garbageEndpoints = new GarbageEndpoints();
app.post('/api/addGarbage', garbageEndpoints.addGarbage)
app.get('/api/getGarbage', garbageEndpoints.getGarbage)

exports.app = functions.https.onRequest(app);
