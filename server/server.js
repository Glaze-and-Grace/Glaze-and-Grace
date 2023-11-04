const express = require('express');
const app = express();
const cors = require('cors');
const cookieParser = require('cookie-parser');
const port = 8080;
const userRouter = require('./Routes/userRoute');
const userProfile = require('./Routes/userProfileRoute');

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use(userRouter);
app.use(userProfile);


app.listen(port, ()=> {
    console.log(`server runnning in port ${port}`);
})