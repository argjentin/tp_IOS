const express = require('express');
const apiRouter = require('./routes/apiRouter');
const app = express();

app.use('/api', apiRouter);

app.listen(3000, () => {
    console.log('Server is listening on port 3000');
});