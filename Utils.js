"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.readJSON = readJSON;
exports.parseArguments = parseArguments;
// src/Utils.ts
var fs = require("fs");
function readJSON(filePath) {
    var data = fs.readFileSync(filePath, "utf-8");
    return JSON.parse(data);
}
function parseArguments(args) {
    var parsedArgs = {};
    for (var i = 0; i < args.length; i += 2) {
        parsedArgs[args[i].replace("--", "")] = args[i + 1];
    }
    return parsedArgs;
}
