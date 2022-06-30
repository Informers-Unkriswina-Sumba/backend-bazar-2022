"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.asyncErrorHandler = void 0;
// middleware untuk menghandle error
const asyncErrorHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)) // melakukan resolve
        .catch(next); // jika terjadi error
};
exports.asyncErrorHandler = asyncErrorHandler;
//# sourceMappingURL=index.js.map