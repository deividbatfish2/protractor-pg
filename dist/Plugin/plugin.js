"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var projeto_repository_1 = require("../repository/projeto.repository");
var Projeto_1 = require("../entity/Projeto");
var project_singletom_1 = require("../model/project.singletom");
var cenario_repository_1 = require("../repository/cenario.repository");
var Cenario_1 = require("../entity/Cenario");
var configConnection_1 = require("../connection/configConnection");
var protractorPg = {
    postTest: function (passed, testInfo) {
        return __awaiter(this, void 0, void 0, function () {
            var configConnection, cenarioRepositorio, cenario;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configConnection = new configConnection_1.ConfigConnection();
                        return [4 /*yield*/, configConnection.getNewConnection()];
                    case 1:
                        _a.sent();
                        cenarioRepositorio = new cenario_repository_1.CenarioRepository();
                        cenario = new Cenario_1.Cenario(testInfo.name, project_singletom_1.ProjectSingleton.getDefault());
                        return [4 /*yield*/, cenarioRepositorio.save(cenario)];
                    case 2:
                        _a.sent();
                        return [4 /*yield*/, configConnection.closeConnection()];
                    case 3:
                        _a.sent();
                        return [2 /*return*/];
                }
            });
        });
    },
    initializer: function (projectName, descricao) {
        return __awaiter(this, void 0, void 0, function () {
            var configConnection, projetoRepositorio, projeto, projetoCriado;
            return __generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        configConnection = new configConnection_1.ConfigConnection();
                        return [4 /*yield*/, configConnection.getNewConnection()];
                    case 1:
                        _a.sent();
                        projetoRepositorio = new projeto_repository_1.ProjetoRepository();
                        projeto = new Projeto_1.Projeto(projectName, descricao);
                        return [4 /*yield*/, projetoRepositorio.save(projeto)];
                    case 2:
                        projetoCriado = _a.sent();
                        return [4 /*yield*/, configConnection.closeConnection()];
                    case 3:
                        _a.sent();
                        project_singletom_1.ProjectSingleton.default = projetoCriado;
                        return [2 /*return*/];
                }
            });
        });
    }
};
module.exports = protractorPg;
