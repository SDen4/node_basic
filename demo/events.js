import EventEmitter from 'events';

const emitter = new EventEmitter();

// прослушка событий
emitter.on('any', (data) => console.log('any: ', data));

// эммитирование событий
emitter.emit('any', { a: 1 });
emitter.emit('any', { a: 2 });
emitter.emit('any', { a: 'third' });
setTimeout(() => {
  emitter.emit('any', { a: 'new 4!!!' });
}, 1000);

// собственный класс для прослушки и диспатча событий
class Dispatcher extends EventEmitter {
  subscribe(eventName, cb) {
    console.log('subscribe...');
    this.on(eventName, cb);
  }
  dispatch(eventName, data) {
    console.log('dispatching...');
    this.emit(eventName, data);
  }
}

const dis = new Dispatcher();

dis.subscribe('event2', (data) => console.log('event2: ', data));
dis.dispatch('event2', { xyz: '12345' });

// node demo/events
