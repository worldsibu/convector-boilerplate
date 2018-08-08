"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var tslib_1 = require("tslib");
var convector_core_controller_1 = require("@worldsibu/convector-core-controller");
var convector_core_storage_1 = require("@worldsibu/convector-core-storage");
var convector_storage_stub_1 = require("@worldsibu/convector-storage-stub");
var fabric_chaincode_utils_1 = require("@theledger/fabric-chaincode-utils");
var convector_core_errors_1 = require("@worldsibu/convector-core-errors");
var config_1 = require("./config");
var Chaincode = (function (_super) {
    tslib_1.__extends(Chaincode, _super);
    function Chaincode() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Chaincode.prototype.Init = function (stub) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0: return [4, _super.prototype.Init.call(this, stub)
                            .catch(function (e) {
                            var err = new convector_core_errors_1.ChaincodeInitializationError(e);
                            throw new fabric_chaincode_utils_1.ChaincodeError(err.toString());
                        })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Chaincode.prototype.Invoke = function (stub) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        convector_core_storage_1.BaseStorage.current = new convector_storage_stub_1.StubStorage(stub);
                        return [4, _super.prototype.Invoke.call(this, stub)
                                .catch(function (e) {
                                var err = new convector_core_errors_1.ChaincodeInvokationError(e);
                                throw new fabric_chaincode_utils_1.ChaincodeError(err.toString());
                            })];
                    case 1: return [2, _a.sent()];
                }
            });
        });
    };
    Chaincode.prototype.initControllers = function (stub, args) {
        return tslib_1.__awaiter(this, void 0, void 0, function () {
            var _this = this;
            var config, configObj, controllers;
            return tslib_1.__generator(this, function (_a) {
                switch (_a.label) {
                    case 0:
                        try {
                            configObj = JSON.parse(args[0]);
                            config = new config_1.Config(configObj);
                        }
                        catch (e) {
                            throw new convector_core_errors_1.ConfigurationInvalidError(e);
                        }
                        return [4, config.getControllers()];
                    case 1:
                        controllers = _a.sent();
                        controllers.forEach(function (C) { return Object.assign(_this, convector_core_controller_1.getInvokables(C)); });
                        return [2];
                }
            });
        });
    };
    return Chaincode;
}(fabric_chaincode_utils_1.Chaincode));
exports.Chaincode = Chaincode;
//# sourceMappingURL=chaincode.js.map