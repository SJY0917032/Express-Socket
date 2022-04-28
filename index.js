import express from "express";
import http from "http";
import cors from "cors";
import { Server } from "socket.io";
import socket from "./socket.js";

const app = express();
// 포트세팅
app.set("port", 3001);
// cors미들웨어 선언
app.use(
  cors({
    origin: "http://127.0.0.1:5500",
    credentials: true,
  })
);

// 서버를 http로 등록한다.
const server = http.createServer(app);

const io = new Server(server, {
  cors: {
    origin: "http://127.0.0.1:5500",
    credentials: true,
  },
});

socket(io);

server.listen(app.get("port"), () => {
  console.log(`🏇${app.get("port")}에서 서버가 실행중입니다!🚴🏻  `);
});
