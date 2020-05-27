import express from "express";
import Startup from "./Startup";
import cors from 'cors'
import bp from 'body-parser'
import DbContext from "./db/DbConfig";

//create server & socketServer
const app = express();
const port = process.env.PORT || 3000;

//Establish Socket
Startup.ConfigureGlobalMiddleware(app);
Startup.ConfigureRoutes(app);

//Connect to AtlasDB
DbContext.connect();

app.use(express.static(__dirname + '/../client/dist'))

let whitelist = ['http://localhost:8080'];
let corsOptions = {
  origin: function (origin, callback) {
    let originIsWhitelisted = whitelist.indexOf(origin) !== -1;
    callback(null, originIsWhitelisted);
  },
  credentials: true
};
app.use(cors(corsOptions))

app.use(bp.urlencoded({ extended: true }))
app.use(bp.json())

import AuthController from './controllers/AuthController'
import Session from "./middleware/session"
app.use(new Session().express)
app.use('/account', new AuthController().router)

app.use((error, req, res, next) => {
  console.error(error);
  res.status(error.status || 400).send({ error: error.message })
})

app.use('*', (req, res, next) => {
  res.status(404).send("Route not found")
})
//Start Server
app.listen(port, () => {
  console.log("Server running on port:", port);
});