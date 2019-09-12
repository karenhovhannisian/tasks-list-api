import {
    apiPort,
    apiUrl,
    appUrl,
    corsOrigins,
    tokenSecret
} from '../helpers/config';

const params: any = {
    development: {
        apiPort,
        apiUrl,
        appUrl,
        corsOrigins,
        tokenSecret
    },
    production: {
        apiPort,
        apiUrl,
        appUrl,
        corsOrigins,
        tokenSecret
    }
};

export default params[process.env.NODE_ENV || 'development'];
