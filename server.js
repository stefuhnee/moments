'use strict';

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('./public'));

app.post('/api/photo', function(req, res) {
  
});

app.listen(PORT, function() {
  console.log(`Listening on Port ${PORT}`);
});