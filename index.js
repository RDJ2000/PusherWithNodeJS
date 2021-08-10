const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");

const pusher = new Pusher({
    appId: "1248135",
    key: "6b33b615f5d8fa877cbd",
    secret: "602ff07d6b70da76f55b",
    cluster: "ap2",
    useTLS: true
  });

 
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200']
}))

app.use(express.json())

app.post('/api/messages', async (req, res) => {
    await pusher.trigger("chat", "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
})

console.log('listening to port 8000');

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log("Server is running.");
  });