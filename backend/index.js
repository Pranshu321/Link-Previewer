const express = require('express');
const kahaki = require('kahaki');
const app = express();
const bodyParser = require('body-parser')
const cors = require("cors");
const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }))

app.post("/", async (req, res) => {
    // console.log(req.body.link);
    const { link } = req.body[0];
    try {
        const result = await kahaki.getPreview(link);
        console.log(result);
        res.send(result.image);
    }
    catch (err) {
    res.status(500).send(err);
    }
    // res.send("fdfsd")
});

app.listen(4000, () => {
    console.log("Server Stated");
});