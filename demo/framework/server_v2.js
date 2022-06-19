const PORT = process.env.PORT || 3003;
import Router from './Router.js';
import Application from './Application.js';

const application = new Application();
const router = new Router();

const users = [
  { id: 1, name: 'LKJsdl' },
  { id: 2, name: 'KJsdlf' },
  { id: 3, name: 'Jsdlfk' },
  { id: 4, name: 'sdlfkj' },
  { id: 5, name: 'lfkjds' },
];

router.get('/users', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify(users));
});
router.get('/posts', (req, res) => res.end('you send request to /posts'));

application.addRouter(router);

application.listen(PORT, () =>
  console.log(`Server's started on the ${PORT} PORT`),
);
