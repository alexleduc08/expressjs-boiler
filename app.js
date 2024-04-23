const express = require('express');
const cors = require('cors');

const port = 8081;
const corsOptions = {
    origin: '*',
    methods:['GET','PUT','POST','DELETE'],
    credentials: true
};
const app = express();
app.use(cors(corsOptions));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("Hello World!");
})

app.listen(port, () => {
    console.log(`Backend listening on port ${port}.`)
});