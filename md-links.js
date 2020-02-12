const fs = require('fs');
const path = require('path');
const marked = require('marked')


//console.log(path);
const leerFile = (path) => {
  let result = [];
  return new Promise((resolve, reject) => {
    fs.readFile(path, 'utf-8', (err, date) => {
      if(err){
        reject(err)
      }
      else{
        const renderer = new marked.Renderer();
        renderer.link = function(href, title, text){
          result.push({
            href: href,
            text: text,
            file: path
          })
        }
        marked(date, { renderer: renderer })
        resolve(result)
      }
    })
  })
}

// leerFile('../Laboratoria/SCL012-Cipher/README.md')
//   .then(result => console.log(result))
//   .catch(err => console.log(err))


const route = (routefile) => {
  return new Promise((resolve, reject) => {
    fs.stat(routefile, (err, stat) => {
      if(stat.isDirectory()){
        console.log("es valido")
        resolve(true)
      }
      else{
        console.log("false")
        reject(err)
      }
    })
  })
}

route('../Laboratoria/SCL012-Cipher')














// function writeFile(file, date){
//   return new Promise((resolve, reject) => {
//     fs.writeFile(file, date, (err) => {
//       resolve()
//     })
//   })
// }

// readFile('./README.md')
// .then(date => writeFile('./cantidad.txt', date.length))
// .catch(err => console.log('error: ' + err))




// fs.readFile('./README.md', (err, content) => {
//   fs.writeFile('./conteo.txt', content.length, (err) => {
//     console.log(content.length);
//   })
// })