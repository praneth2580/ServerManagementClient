const osu = require('node-os-utils');
const os = require('os');

module.exports = class ServerStats {

    constructor() {
        this.CPU = osu.cpu;
        this.RAM = osu.mem
        // console.log(os.cpus());
        // console.log(os.totalmem());
        // console.log(os.freemem())
        
    }

    getCPUUsage() {
        this
            .CPU
            .usage()
            .then(info => {
                console.log(info)
            })
            .catch(err => {
                console.log(err)
            })

    }

} 