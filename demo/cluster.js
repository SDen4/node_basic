import cluster from 'cluster';
import os from 'os';

// console.log(cluster);
// console.log(cluster.isPrimary);

if (cluster.isMaster) {
  console.log(os.cpus().length);

  for (let i = 0; i < os.cpus().length; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker) => {
    console.log(`Worker pid #${worker.process.pid} was killed`);
    cluster.fork();
  });
} else {
  console.log(`Worker pid #${process.pid} is active.`);

  setInterval(() => {
    console.log(`Worker pid #${process.pid} is still active.`);
  }, 5000);
}

// node demo/cluster
