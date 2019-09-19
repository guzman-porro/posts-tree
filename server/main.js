const express = require('express');
const cors = require('cors');

const api = require('./routes');

const PORT = 4000;
const app = express();

app.use(cors());
app.use('/api', api);

app.listen(PORT, function(){
    console.log('Server is running at PORT:', PORT);
});
