let str = 'Hello World!'
let strResult = ''

for (let i = 0; i < str.length; i++) {
   let current = str[i]

   strResult = current + strResult
}

console.log(strResult)