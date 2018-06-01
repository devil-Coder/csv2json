var express = require('express');
var router = express.Router();

const csv = require('csvtojson');
const csvFilePath='public/CSV/Entities.csv';

try{
    csv()
        .fromFile(csvFilePath)
        .then((jsonObj)=>{
            var jsonObject = jsonObj;
            console.log(jsonObj.length);
        })
} catch(e){
    console.log(e);
}

module.exports = router;
