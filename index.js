const express = require('express');

const app = express();

app.get('/', (req, res) => {

    res.send('super nigga');

});
app.get('/health', (req, res) => {
    res.send("sever running fine");
});

app.listen(3000, () => {

    console.log('Server is running on port 3000');

});

