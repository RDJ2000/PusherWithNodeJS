const express = require('express')
const cors = require('cors')
const Pusher = require("pusher");
const bodyParser = require('body-parser');
const pusher = new Pusher({
    appId: "1248135",
    key: "6b33b615f5d8fa877cbd",
    secret: "602ff07d6b70da76f55b",
    cluster: "ap2",
    useTLS: true
  });

 
const app = express();

app.use(cors({
    origin: ['http://localhost:3000', 'http://localhost:8080', 'http://localhost:4200','https://todo-94c45.web.app']
    ,"methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
    "preflightContinue": false,
    "optionsSuccessStatus": 204
}))

const connectionParams={
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true 
  }
  app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.json())
app.use(express.urlencoded({
    extended: true
  }))
app.post('/api/messages/Web', async (req, res) => {
    await pusher.trigger('Web', "message", {
        username: req.body.username,
        message: req.body.message
    });

    res.json([]);
    console.log(req.body.username);
    console.log(req.body.message);
    
}

)
app.post('/api/messages/Android', async (req, res) => {
  await pusher.trigger('android', "message", {
      username: req.body.username,
      message: req.body.message
  });

  res.json([]);
  console.log(req.body.username);
  console.log(req.body.message);
  
}

)
app.post('/api/messages/Game', async (req, res) => {
  await pusher.trigger('game', "message", {
      username: req.body.username,
      message: req.body.message
  });

  res.json([]);
  console.log(req.body.username);
  console.log(req.body.message);
  
}

)
console.log('listening to port 8000');

app.listen(process.env.PORT || 3000, '0.0.0.0', () => {
    console.log("Server is running.");
  });