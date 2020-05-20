"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const path_1 = __importDefault(require("path"));
const express_1 = __importDefault(require("express"));
const Router_1 = __importDefault(require("./Router"));
const app = express_1.default();
// Body Parser Middleware
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Static Page
app.use(express_1.default.static(path_1.default.join(__dirname, 'public')));
// Routes
app.use('/api/member', Router_1.default);
const port = 5000 || process.env.PORT;
app.listen(port, () => {
    console.log('Server started at http://localhost:' + port);
});
//# sourceMappingURL=server.js.map