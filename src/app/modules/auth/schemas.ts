import { REQUIRED_MESSAGE } from '../../configs/constants';

export default {
    login: {
        parseFormData: true,
        validation: {
            password: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            },
            username: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            }
        }
    },
    logout: {
        authentication: true
    }
};
