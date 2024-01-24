const express = require('express');
const productRouter = require('./Routes/ProductsRoute')
const userRouter = require('./Routes/UserRoute')
const cors = require ('cors')
require('dotenv').config();


require('./Config/database');

const app = express();

app.use(cors());
app.use(express.json());
app.use(productRouter);
app.use(userRouter);


app.listen(process.env.PORT, () => {
    console.log(`Servidor conectado en puerto: ${process.env.PORT}`)
})