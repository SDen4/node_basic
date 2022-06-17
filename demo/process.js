import dotenv from 'dotenv';
dotenv.config();

console.log(process.env);

console.log(process.env.TERM_PROGRAM);

console.log(process.env.NODE_ENV);

// Принудительное завершение
process.exit();

console.log(process.env.NODE_ENV);

// node demo/process
