const io = require('socket.io-client');

module.exports = class SocketClient {

    constructor(ip, port) {
        this.socket = io.connect(`http://${ip}`, {
            port: port,
            reconnect: true
        })

        this.socket.on('connect', function (socket) {
            console.log("Socket Connected")
            console.log(socket)
            // console.log(`[IP]:${socket}`)
        })

    }

}