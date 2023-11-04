const express = require('express');
const app = express();
const cors = require('cors');
const port = 8080;
const homeroutes = require('./Routes/productRoute');
const contactroutes = require('./Routes/contactRoute');
const dashboarduser = require('./Routes/dashboarduserRoute')
const cookieParser = require('cookie-parser');
const userRouter = require('./Routes/userRoute');
const userProfile = require('./Routes/userProfileRoute');
app.use(express.json());

app.use(cors());

app.use(cookieParser());

app.use('/', homeroutes);
app.use(contactroutes);
app.use(dashboarduser);
app.use(userRouter);
app.use(userProfile);


app.listen(port, ()=> {
    console.log(`server runnning in port ${port}`);
})
