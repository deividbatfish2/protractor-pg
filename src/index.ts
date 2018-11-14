import protractorPg from './Plugin/plugin'

(async ()=> {
    await protractorPg.initializer("emissor");
    protractorPg.postTest(true, {name: "teste 22", category: "step 1"})
})()

export = protractorPg;
