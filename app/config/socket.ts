import { Server } from "socket.io";
import http from "http";

import { ClientToServerEvents, InterServerEvents, ServerToClientEvents } from "../types/socket";

export function startServer(server: http.Server) {
    const io = new Server<ClientToServerEvents, ServerToClientEvents, InterServerEvents>(server, {
        cors: {
            origin: "*",
            methods: ["GET", "POST"]
        }
    });

    io.on("connection", (socket) => {
        console.log("a user connected with id:", socket.id);

        socket.on("disconnect", () => {
            console.log("user disconnected!");
        });

        socket.on("chatMessage", (msg) => {
            socket.broadcast.emit("chatMessage", msg);
        });

        socket.on("typingStarted", () => {
            socket.broadcast.emit("typingStarted", socket.id);
        });

        socket.on("typingEnded", () => {
            socket.broadcast.emit("typingEnded");
        });
    });
}
