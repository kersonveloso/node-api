"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const Members_1 = require("./api/Members");
const router = express_1.default.Router();
router.get('/', (req, res) => {
    res.json(Members_1.members);
});
exports.default = router;
//# sourceMappingURL=Router.js.map