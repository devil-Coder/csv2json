var express = require('express');
var router = express.Router();

const csv = require('csvtojson');
const csvFilePath='public/CSV/Entities.csv';

var fs = require('fs');

try{
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            var jsonObject = jsonObj;
            console.log(jsonObj);
            var jsonData = JSON.stringify(jsonObj);

            fs.writeFile('./public/JSON/myjsonfile.json', jsonData, 'utf8', function(err){
                if(err){
                    console.log(err);
                }else{
                    console.log(jsonData);
                }
            });
        })
} catch(e){
    console.log(e);
}

module.exports = router;
