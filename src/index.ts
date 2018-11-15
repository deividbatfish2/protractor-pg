import protractorPg from './Plugin/plugin'

/*(async ()=> {
    await protractorPg.initializer("emissor", "descrição");
    await protractorPg.postTest(true, {category: "teste 1", name: "teste 1 - step 1"})
    await protractorPg.postTest(true, {category: "teste 1", name: "teste 1 - step 2"})
    await protractorPg.postTest(false, {category: "teste 1", name: "teste 1 - step 3"})
    await protractorPg.postTest(false, {category: "teste 2", name: "teste 2 - step 1"})
    await protractorPg.postTest(true, {category: "teste 2", name: "teste 2 - step 2"})
    await protractorPg.postTest(false, {category: "teste 2", name: "teste 2 - step 3"})
})()*/

export = protractorPg;
