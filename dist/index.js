"use strict";
var protractorInflux = {
    postTest: function (passed, testInfo) {
        console.log("Passou: ", passed);
        console.log("Info: ", testInfo);
    },
    initializer: function (projectName, ipInfluxDB, portaInfluxDB) {
        console.log("Primeiro export");
    }
};
module.exports = protractorInflux;
