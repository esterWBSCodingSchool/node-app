import { EventEmitter } from 'events';

const url = 'https://mylogger.io/log';

export class Logger extends EventEmitter {
    log(message){
        console.log(message);

        this.emit('messageLogged', {id: 1, url: 'https://'});
    }
}

