const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const homeroutes = require('./Routes/productRoute');
const contactroutes = require('./Routes/contactRoute');
const dashboarduser = require('./Routes/dashboarduserRoute')
app.use(express.json());

app.use(cors());



app.use('/', homeroutes);
app.use(contactroutes);
app.use(dashboarduser);

app.listen(port, ()=> {
    console.log(`server runnning in port ${port}`);
});
