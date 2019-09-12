import { INVALID, REQUIRED_MESSAGE } from '../../configs/constants';

export default {
    edit: {
        authentication: true,
        parseFormData: true,
        validation: {
            status: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            },
            text: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            }
        }
    },
    save: {
        authentication: true,
        parseFormData: true,
        validation: {
            email: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body',
                isEmail: {
                    errorMessage: INVALID('email')
                }
            },
            text: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            },
            username: {
                errorMessage: REQUIRED_MESSAGE,
                in: 'body'
            },
        }
    },
    task: {
        authentication: true
    }
};
