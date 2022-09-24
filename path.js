let path=require("path");
let fs=require("fs");

 let dirName=__dirname;
 console.log(dirName);
 let newFilePath=path.join(dirName,"file.txt"); 
 fs.writeFileSync(newFilePath,"Hello how are you");

 