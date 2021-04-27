const { exercise0,
        exercise1,
        exercise2,
        exercise3,
        exercise4,
        exercise5,
        exercise6,     
        exercise7 } = require("../database/haibuBackend");



const exerciseGet =  (req, res) => {
    let results;
    const { id } = req.params;

    switch (id) {
        case '0':
            results =  exercise0();
            res.json( {results});
            break;
        case '1':
            results =  exercise1();
            res.json( {results});
            break;
        case '2':
            results =  exercise2();
            res.json( {results});
            break;
        case '3':
            results =  exercise3();
            res.json( {results});
            break;
        case '4':
            results =  exercise4();
            res.json( {results});
            break;
        case '5':
            results =  exercise5();
            res.json( {results});
            break;
        case '6':
            results =  exercise6();
            res.json( {results});
            break;
        case '7':
            results =  exercise7();
            res.json( {results});
            break;
        default:
            res.status(404).json( {results: `La tarea: ${id} no existe`})
            break;
    }

}
module.exports = {
    exerciseGet
}