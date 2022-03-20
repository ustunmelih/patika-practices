//dosya oku

// fs.readFile('index.html', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     console.log('dosya okundu')
//   }
// })

//dosya olustur

// fs.writeFile(
//   'example.json',
//   '{"name":"melih","surname":"ustun"}',

//   (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('dosya olusturuldu')
//     }
//   }
// )

//veri güncelle

// fs.appendFile(
//   'example.json',
//   ',{"name":"melih","surname":"ustun"}',

//   (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('veri eklendi')
//     }
//   }
// )

//dosya silme

// fs.unlink(
//   'example.json',

//   (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('dosya silindi')
//     }
//   }
// )

//dosya olusturma
// fs.mkdir('uploads/img', { recursive: true }, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('klasor olusturuldu')
//   }
// })

// fs.rmdir('uploads', { recursive: true }, (err) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log('klasor silindi')
//   }
// })

const fs = require('fs')

// fs.writeFile(
//   'employees.json',
//   '{"name": "Employee 1 Name", "salary": 2000}',
//   (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('dosya olusturuldu')
//     }
//   }
// )

// fs.readFile('employees.json', 'utf8', (err, data) => {
//   if (err) {
//     console.log(err)
//   } else {
//     console.log(data)
//     console.log('dosya okundu')
//   }
// })

// fs.appendFile(
//   'employees.json',
//   ',{"name": "Employee 1 Name", "salary": 2000}',
//   (err) => {
//     if (err) {
//       console.log(err)
//     } else {
//       console.log('dosya güncellendi')
//     }
//   }
// )

fs.unlink(
  'employees.json',

  (err) => {
    if (err) {
      console.log(err)
    } else {
      console.log('dosya silindi')
    }
  }
)
