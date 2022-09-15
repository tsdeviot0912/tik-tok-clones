import EventEmitter from 'events';

const _emitter = new EventEmitter();

_emitter.setMaxListeners(0); // không giới hạn số người nghe được events

const emitter = _emitter;

export { emitter };
