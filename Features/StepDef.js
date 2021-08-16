"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
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
Object.defineProperty(exports, "__esModule", { value: true });
var cucumber_1 = require("cucumber");
var protractor_1 = require("protractor");
var _a = require("cucumber"), After = _a.After, Status = _a.Status;
// Launching the Browser and URL
cucumber_1.Given('I launch the url', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    //await  browser.get("https://way2automation.com/angularjs-protractor/banking/#/login").then (async function(){
                    return [4 /*yield*/, protractor_1.browser.get("https://login.yahoo.com/manage_account?signin=true&done=https%3A%2F%2Fwww.yahoo.com%2F&eid=100").then(function () {
                            return __awaiter(this, void 0, void 0, function () {
                                return __generator(this, function (_a) {
                                    switch (_a.label) {
                                        case 0:
                                            protractor_1.browser.manage().window().maximize();
                                            return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                                        case 1:
                                            _a.sent();
                                            return [2 /*return*/];
                                    }
                                });
                            });
                        })];
                case 1:
                    //await  browser.get("https://way2automation.com/angularjs-protractor/banking/#/login").then (async function(){
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('I give the User mailId {string}', { timeout: 60 * 1000 }, function (mail) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//input[@name='username']")).sendKeys(mail)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("(//input[@id='login-signin'])")).click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('I give the User password {string}', { timeout: 60 * 1000 }, function (psw) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//input[@type='password']")).sendKeys(psw)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("(//button[@type='submit'])")).click()];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 4:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('i will click Mail icon', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//a[@id='ybarMailLink']")).click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Given('I click on Compose', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//a[text()='Compose']")).click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('I sends an email with subject {string},{string}', { timeout: 60 * 1000 }, function (tomail, sub) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("(//*[@type='text'])[4]")).sendKeys(tomail)];
                case 2:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[@placeholder='Subject']")).sendKeys(sub)];
                case 3:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[text()='Send']")).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(5000)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('I click on Sent folder and mail appears with the subject entered', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[text()='Sent']")).click()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(2000)];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
cucumber_1.Then('I will Logout', { timeout: 60 * 1000 }, function () {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    protractor_1.browser.waitForAngularEnabled(false);
                    return [4 /*yield*/, protractor_1.browser.sleep(3000)];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.id("ybarAccountMenuOpener")).click()
                        //it('Mouse Operations', function() {
                        // set implicit time to 30 seconds
                        //	browser.manage().timeouts().implicitlyWait(2000);
                        // mouse hover on a submenu
                        //browser.actions().mouseMove(element(by.id("ybarAccountMenuOpener"))).perform()
                        //});
                    ];
                case 2:
                    _a.sent();
                    //it('Mouse Operations', function() {
                    // set implicit time to 30 seconds
                    //	browser.manage().timeouts().implicitlyWait(2000);
                    // mouse hover on a submenu
                    //browser.actions().mouseMove(element(by.id("ybarAccountMenuOpener"))).perform()
                    //});
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                case 3:
                    //it('Mouse Operations', function() {
                    // set implicit time to 30 seconds
                    //	browser.manage().timeouts().implicitlyWait(2000);
                    // mouse hover on a submenu
                    //browser.actions().mouseMove(element(by.id("ybarAccountMenuOpener"))).perform()
                    //});
                    _a.sent();
                    return [4 /*yield*/, protractor_1.element(protractor_1.by.xpath("//*[text()='Sign out']")).click()];
                case 4:
                    _a.sent();
                    return [4 /*yield*/, protractor_1.browser.sleep(1000)];
                case 5:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiU3RlcERlZi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL0ZlYXR1cmVzL1N0ZXBfRGVmaW5hdGlvbnMvU3RlcERlZi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFDQUEyQztBQUMzQyx5Q0FBaUQ7QUFFN0MsSUFBQSxLQUFxQixPQUFPLENBQUMsVUFBVSxDQUFDLEVBQXRDLEtBQUssV0FBQSxFQUFFLE1BQU0sWUFBeUIsQ0FBQztBQUk3QyxnQ0FBZ0M7QUFDaEMsZ0JBQUssQ0FBRSxrQkFBa0IsRUFBRSxFQUFFLE9BQU8sRUFBRSxFQUFFLEdBQUMsSUFBSSxFQUFFLEVBQUM7Ozs7O29CQUMvQyxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNuQywrR0FBK0c7b0JBQzlHLHFCQUFPLG9CQUFPLENBQUMsR0FBRyxDQUFDLGdHQUFnRyxDQUFDLENBQUMsSUFBSSxDQUFFOzs7Ozs0Q0FDekgsb0JBQU8sQ0FBQyxNQUFNLEVBQUUsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxRQUFRLEVBQUUsQ0FBQzs0Q0FDeEMscUJBQU0sb0JBQU8sQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLEVBQUE7OzRDQUF6QixTQUF5QixDQUFBOzs7Ozt5QkFDdkIsQ0FBQyxFQUFBOztvQkFKSCwrR0FBK0c7b0JBQzlHLFNBR0UsQ0FBQTs7Ozs7Q0FDTCxDQUFDLENBQUE7QUFFRixnQkFBSyxDQUFDLGlDQUFpQyxFQUFDLEVBQUUsT0FBTyxFQUFFLEVBQUUsR0FBQyxJQUFJLEVBQUUsRUFBQyxVQUFlLElBQUk7Ozs7O29CQUM1RSxvQkFBTyxDQUFDLHFCQUFxQixDQUFDLEtBQUssQ0FBQyxDQUFDO29CQUNwQyxxQkFBTSxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMkJBQTJCLENBQUMsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsRUFBQTs7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