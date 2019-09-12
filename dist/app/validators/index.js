"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const moment = require("moment");
exports.isValidDate = (value) => {
    return moment(value).isValid();
};
//# sourceMappingURL=index.js.map