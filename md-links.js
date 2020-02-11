//const readFile = require ('fs');
const fs = require ('fs');
const path = require ('path');
// const fs = require ('fs')
// const fs = require ('fs')


function readFile(file){
  return new Promise((resolve, reject) => {
    fs.readFile(file, (err, date) => {
      if(err){
        reject(err)
      }
      resolve(date)
    })
  })
}

function writeFile(file, date){
  return new Promise((resolve, reject) => {
    fs.writeFile(file, date, (err) => {
      resolve()
    })
  })
}

readFile('./README.md')
.then(date => writeFile('./cantidad.txt', date.length))
.catch(err => console.log('error: ' + err))




// fs.readFile('./README.md', (err, content) => {
//   fs.writeFile('./conteo.txt', content.length, (err) => {
//     console.log(content.length);
//   })
// })