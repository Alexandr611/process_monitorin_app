const { spawn } = require('child_process');
const spawnProcess = require('../util/spawn');
const stringParser = require('../util/stringparser');

class SpawnService {
    static async  getProcessInfo(name, options) {
        const data = await spawnProcess(name, options);
        const parsedData = stringParser(data);
        return parsedData;
    }
}

module.exports = SpawnService;
