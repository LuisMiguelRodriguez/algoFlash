var express = require('express');
var router = express.Router();
var fs = require('fs');


router.get('/greeting', function (req, res) {
    const name = req.query.name || 'World';
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify({ greeting: `Hello ${name}!` }));
});

router.post('/test', function (req, res) {

    const data = req.body.value;

    fs.writeFile(__dirname + '/../tests/beanCounting/index.js', data, function (err, data) {
        if (err) console.log(err);

        console.log("Successfully Written to File.");

        var exec = require('child_process').exec;

        // var testFilePath = 'jest ' + __dirname + '/../tests/beanCounting/test.js --outputFile=' + __dirname + '/../tests/beanCounting/report.json --json'
        var testFilePath = 'npm run test';
        
        console.log(testFilePath);

        exec( testFilePath , (err, stdout, stderr) => { 
          console.log(stderr)
        });

    });


    var {testResults} = JSON.parse(fs.readFileSync(__dirname + '/../tests/test-results.json', 'utf8'));

    res.json({obj: testResults[0].testResults})

});

module.exports = router;