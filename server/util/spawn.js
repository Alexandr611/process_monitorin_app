const { spawn } = require('child_process');
const  Promise = require('bluebird');
let defautlArgs = ['aux', '|', 'grep'];
const defaultOptions = {
    shell: true,
    detached: false
}


const spawnProcess  = (name, options = defaultOptions) => {
    return new Promise((resolve, reject) => {
        let buffer = '';
        const process = spawn('ps', defautlArgs.concat(name), options);
        process.stdout.on('data', data => {
            buffer += data.toString();
        });

        process.on('close', code => {
            return resolve(buffer);
        });

        process.on('error', err => {
            return reject(err);
        });
    })
};

module.exports = spawnProcess;
