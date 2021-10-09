const express = require('express')
const userRouter = require('./routes/userRoute');
const app = express();
const port = 3000;
app.use(express.json());

app.use('/user', userRouter);
app.listen(port, () => console.log(`Example app listening on port ${port}!`));