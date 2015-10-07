var fs = require("fs"),
    net = require("net"),
    openpgp = require("openpgp");

try {
    fs.mkdirSync(__dirname + "/data");
} catch(e) {}
