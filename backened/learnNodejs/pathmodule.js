console.log("pathmodule in js")
const path=require("path")
// console.log(path)
const as=path.basename('C:\\temp\\myfile.html');
console.log(as)
const a2=path.dirname('/foo/bar/baz/asdf/quux');
console.log(a2)

// extensison file name
const a3=path.extname('/foo/bar/baz/asdf/quux.html');
const a4=path.extname(__filename);
// extension with file name
const a5=path.extname(__filename)
console.log(`${__filename} and the extension file name is:${path.extname(__filename)}`)

console.log(a4)