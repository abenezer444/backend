const express = require('express');
const bodyParser = require('body-parser');


const app = express();
app.use(bodyParser.json());

app.get('/', (req, res) => {

    res.send('super nigga');

});
function isValidInt32(value) {
    const MIN_INT32 = -2147483648;
    const MAX_INT32 = 2147483647;

    return Number.isInteger(value) && value >= MIN_INT32 && value <= MAX_INT32;
}
app.get('/health', (req, res) => {
    res.send("server running fine");
});
app.post('/sum', (req, res) => {
    const numbers = req.body;
    console.log(numbers)


    if (!numbers.every(isValidInt32)) {
        return res.status(400).send({ error: 'Invalid input, expected an array of int32 numbers' });
    }

    const sum = numbers.reduce((acc, num) => acc + num, 0);
    res.send(sum.toString());
});
app.listen(3000, () => {

    console.log('Server is running on port 3000');

});

