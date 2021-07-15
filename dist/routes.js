"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createCourse = void 0;
var CreateCourseService_1 = __importDefault(require("./CreateCourseService"));
function createCourse(req, res) {
    var course = {
        name: "NodeJS",
        //duration: 100,
        educator: "Eric",
    };
    CreateCourseService_1.default.execute(course);
    return res.send("Loucura");
}
exports.createCourse = createCourse;
