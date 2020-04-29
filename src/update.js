"use strict";
exports.__esModule = true;
var fs_1 = require("fs");
var kebabcase = require("lodash.kebabcase");
var dotfiles_json_1 = require("../dotfiles.json");
dotfiles_json_1.groups.forEach(function (_a) {
    var name = _a.name, files = _a.files;
    var dirName = kebabcase(name);
    fs_1.mkdir("./" + dirName, { recursive: true }, function (err) {
        if (err) {
            return console.error(err);
        }
        console.log("Created directory: " + dirName);
    });
});
