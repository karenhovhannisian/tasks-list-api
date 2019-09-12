"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const http_1 = require("http");
require("./app/configs/database");
const app_1 = require("./app/app");
const params_1 = require("./app/configs/params");
http_1.createServer(app_1.default()).listen(params_1.default.apiPort, () => {
    console.info(`Listening ${params_1.default.apiPort} port.`);
});
//# sourceMappingURL=server.js.map