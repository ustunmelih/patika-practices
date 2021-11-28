// ********** ternary operator ile short if kullanimi **********

// eger kullanici adin varsa yazdir yoksa kullanici bilginiz bulunamadi yaz

// let age = prompt("ad Bilginiz Yaziniz")
// let info = document.querySelector("#info")

let age = prompt("yas gir")
let info = document.querySelector("#info")
info.innerHTML = `${age ? age : "yas gir lan"}`

// ternary kullanimi:
// kosul ? dogruysa : yanlissa

// // userName.length > 0 ? userName : "Kullani Bilginiz Bulunamadi :("



// info.innerHTML = `${userName ? userName : "Kullani Bilginiz Bulunamadi :("}`