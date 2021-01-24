const express = require('express');
const bodyParser = require('body-parser');
const router = require('./router/api');
const app = express();
const cors = require('cors');
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


app.use('/api', router);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`App listening on PORT ${PORT}`);
});