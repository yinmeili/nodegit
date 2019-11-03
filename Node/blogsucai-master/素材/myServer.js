const http=require("http");
const fs=require("fs");
const url=require("url");
const path = require("path");
const querystring=require("querystring");
//表单
http.createServer(function(req,res){
    //异步
    var urlObj=url.parse(req.url,true);
    var pathName=urlObj.pathname;
    if(pathName=="/list"){
        var chapterList='chapterList';
        showHTML(res,chapterList);
    }else if(pathName=="/login"){
        var login='login';
        showHTML(res,login);
    }else if(pathName.indexOf("login")>=0){
        showImg(res,pathName);  
    }else if(pathName=="/listmanager"){
        
        
    }else if(pathName=="/addChapter"){
        var addChapter='addChapter';
        showHTML(res,addChapter);
    }else if(pathName.indexOf('css')>=0){
        showCSS(res,pathName);
    }else if(pathName.indexOf('js')>=0){
        showJS(res,pathName);
    }else if(pathName.indexOf('images')>=0){
        showImg(res,pathName);
    }else if(pathName == '/detail'){
        
        
}
}).listen(8083);

function showHTML(res,pathName){
    var htmlPath=path.join(__dirname,'/'+pathName+'.html');
    var htmlContent=fs.readFileSync(htmlPath);
    res.writeHead(200,{"Content-Type":"text/html"});
    res.write(htmlContent);
    res.end();
}
function showCSS(res,pathName){
    var cssPath=path.join(__dirname,pathName);
    var cssContent=fs.readFileSync(cssPath);
    res.writeHead(200,{"Content-Type":"text/css"});
    res.write(cssContent);
    res.end();
}
function showJS(res,pathName){
    var jsPath=path.join(__dirname,pathName);
    var jsContent=fs.readFileSync(jsPath);
    res.writeHead(200,{"Content-Type":"text/js"});
    res.write(jsContent);
    res.end();
}
function showImg(res,pathName){
    var imgPath=path.join(__dirname,pathName);
    fs.readFile(imgPath,'binary',function(err,data){
        if(err){
            console.log("err");
        }else{
            res.write(data,'binary');
            res.end();
        }
    })
}
console.log("server is listening in 8083");