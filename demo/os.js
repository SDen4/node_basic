import os from 'os';

console.log('Operation System: ', os.platform());
console.log('Processor architecture: ', os.arch());
console.log('Processors info: ', os.cpus());
console.log('Free memory: ', os.freemem());
console.log('Total memory: ', os.totalmem());
console.log('Home directory: ', os.homedir());
console.log('Uptime (s): ', os.uptime());

// node demo/os
