"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const status_codes_1 = require("../configs/status-codes");
const constants_1 = require("../configs/constants");
class AuthError extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.UNAUTHORIZED_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.AuthError = AuthError;
class BadRequest extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.BAD_REQUEST_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.BadRequest = BadRequest;
class UnsupportedMediaType extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.UNSUPPORTED_MEDIA_TYPE_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.UnsupportedMediaType = UnsupportedMediaType;
class Conflict extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.CONFLICT_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.Conflict = Conflict;
class NotFound extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.NOT_FOUND_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.NotFound = NotFound;
class Forbidden extends Error {
    constructor(errors = null) {
        super();
        this.status = status_codes_1.FORBIDDEN_CODE;
        this.message = constants_1.PERMISSION_DENIED;
        this.errors = errors;
    }
}
exports.Forbidden = Forbidden;
class Gone extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.GONE_CODE;
        this.message = message;
        this.errors = errors;
    }
}
exports.Gone = Gone;
class ValidationError extends Error {
    constructor(errors) {
        super();
        this.status = status_codes_1.VALIDATION_ERROR_CODE;
        this.message = constants_1.VALIDATION_ERROR;
        this.errors = errors;
    }
}
exports.ValidationError = ValidationError;
class ExternalApiError extends Error {
    constructor(errors) {
        super();
        this.status = status_codes_1.SERVICE_UNAVAILABLE_CODE;
        this.message = constants_1.SERVICE_UNAVAILABLE;
        this.errors = errors;
    }
}
exports.ExternalApiError = ExternalApiError;
class ServiceUnavailable extends Error {
    constructor(message, errors = null) {
        super();
        this.status = status_codes_1.BAD_REQUEST_CODE;
        this.message = constants_1.SOMETHING_WENT_WRONG;
        if (errors) {
            this.message = message;
            this.errors = errors;
        }
        else {
            if (typeof message === 'string') {
                this.message = message;
            }
            else {
                this.errors = message;
            }
        }
    }
}
exports.ServiceUnavailable = ServiceUnavailable;
//# sourceMappingURL=index.js.map