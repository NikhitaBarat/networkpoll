const express = require('express');
const path = require('path');
const fs = require('fs');
const { HttpStatusCode } = require('axios');


// Express routing Client
const contractV2 = express.Router()

//* desp: Read all the contract ABI stored in build/contracts
// @param: None    
// returns: array of file paths  
const ReadAllFilePath = () => {
    var filePaths = []

    const directoryPath = path.join(__dirname, '../../../build/contracts')
    
    console.log(directoryPath)
    fs.readdir(directoryPath, (err, files) => {
        if (err) {
            return console.log('Unable to scan directory: ' + err);
        } 
        files.forEach((file) => {
            filePaths.push({
                path: path.join(directoryPath, file)
            })
            console.log(path.join(directoryPath, file))
        });
    });
     console.log(filePaths)
}

// Execution
ReadAllFilePath()



// * desp: gives all contracts information
// contractV2.get('/contracts/all', (req, res) => {
//     //   let ABIs = ReadAllFilePath()



//       res.status(200).json({
//         status: HttpStatusCode.Ok,
//         data: "filePaths",
//       })
//     //   const contract_abi = await

// })


module.exports = contractV2;