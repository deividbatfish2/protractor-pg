import {ProtractorPlugin} from 'protractor';

const protractorInflux: ProtractorPlugin | any = {
    postTest(passed: boolean, testInfo: any): void {
        console.log("Passou: ", passed);
        console.log("Info: ", testInfo);
    },
    initializer(projectName: string, ipInfluxDB: string, portaInfluxDB: string): void {
        console.log("Primeiro export")
    }
}

export = protractorInflux;