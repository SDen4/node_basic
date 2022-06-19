const PORT = process.env.PORT || 3003;
import Router from './Router.js';
import Application from './Application.js';

const application = new Application();
const router = new Router();

router.get('/users', (req, res) => res.end('you send request to /users'));
router.get('/posts', (req, res) => res.end('you send request to /posts'));

application.addRouter(router);

application.listen(PORT, () =>
  console.log(`Server's started on the ${PORT} PORT`),
);
