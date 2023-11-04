const express = require('express');
const bodyParser = require('body-parser');
const app = express();
var cors = require('cors');
const dashboardRoute = require('./Routes/dashboardRoute');
const shoppingRoute = require('./Routes/shoppingRoute');
const reactionRoute = require('./Routes/reactionRoute');
const port = 8080;
app.use(express.json());
app.use(cors());
app.use(bodyParser.json());

app.use(dashboardRoute)
app.use(shoppingRoute)
app.use(reactionRoute)


app.listen(port, () => {
    console.log(`server running in port ${port}`);
});

