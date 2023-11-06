import { Logger } from './logger.mjs'

const logger = new Logger();

logger.on('messageLogged', (e) => {
    console.log('Listener called', e)
});

logger.log('message');