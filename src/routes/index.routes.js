const express = require('express');
const ctrlIndex = require('../controllers/index.controllers');
const route = express.Router();

route.get('/', ctrlIndex.IndexPage);

route.get('/upload', ctrlIndex.uploadGet);

route.post('/upload', ctrlIndex.uploadPost);

route.get('/image/:id', ctrlIndex.profileImage);

route.delete('/image/:id/delete', ctrlIndex.deleteImage);

module.exports = route;