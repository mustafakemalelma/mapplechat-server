import express from "express";
import http from "http";
import cors from "cors";

import * as SocketConfig from "./app/config/socket";

const app = express();
const server = http.createServer(app);
SocketConfig.startServer(server);

app.use(cors());

app.get("/", (req, res) => {
    res.send("Mapple Chat!");
});

server.listen(5000, () => {
    console.log("Server is listening at 5000!");
});
