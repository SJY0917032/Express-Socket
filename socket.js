export default function socket(socketIo) {
  socketIo.on("connection", (socket) => {
    console.log("소켓이 연결됐습니다.");

    const room = "room1";

    socket.on("disconnect", (reason) => {
      console.log(`연결이 해제됐습니다. ${reason}`);
    });

    // Message 추가
    socket.on("messageS", (message) => {
      console.dir(message);
      console.log("message가 도착했습니다.");

      if (message.recepient === "ALL") {
        socketIo.sockets.emit("messageC", message);
      }
    });
  });
}
