import http from 'http';
import { EventEmitter } from 'events';

class Application {
  constructor() {
    this.emitter = new EventEmitter();
    this.server = this._createServer();
  }

  listen(port, cb) {
    this.server.listen(port, cb);
  }

  _getRouteMask(path, method) {
    return `[${path}]:[${method}]`;
  }

  addRouter(router) {
    Object.keys(router.endpoints).forEach((path) => {
      const endpoint = router.endpoints[path];
      Object.keys(endpoint).forEach((method) => {
        const handler = endpoint[method];
        this.emitter.on(this._getRouteMask(path, method), (req, res) => {
          handler(req, res);
        });
      });
    });
  }

  _createServer() {
    return http.createServer((req, res) => {
      const emitted = this.emitter.emit(
        this._getRouteMask(req.url, req.method),
        req,
        res,
      );
      if (!emitted) res.end('a-ta-ta!!!');
    });
  }
}

export default Application;
