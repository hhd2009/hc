//<!CDATA[
var dir="https://hhd2009.github.io/hc"
var bodyBgs = [];
bodyBgs[1] = dir+"/tool/background/1.jpg";
bodyBgs[2] = dir+"/tool/background/2.jpg";
bodyBgs[3] = dir+"/tool/background/3.jpg";
bodyBgs[4] = dir+"/tool/background/4.jpg";
bodyBgs[5] = dir+"/tool/background/5.jpg";
//bodyBgs[6] = dir+"/tool/background/6.jpg";
//bodyBgs[7] = dir+"/tool/background/7.jpg";
//bodyBgs[8] = dir+"/tool/background/8.jpg";
//bodyBgs[9] = dir+"/tool/background/9.jpg";
//bodyBgs[10] = dir+"/tool/background/10.jpg";
//bodyBgs[11] = dir+"/tool/background/11.jpg";
//bodyBgs[12] = dir+"/tool/background/12.jpg";
//bodyBgs[13] = dir+"/tool/background/13.jpg";
//bodyBgs[14] = dir+"/tool/background/14.jpg";

var randomBgIndex = Math.round( Math.random() * 5 );
var img=bodyBgs[randomBgIndex]
console.log('背景图为：'+img)
//输出随机的背景图
if(img==undefined){
  img=dir+"/tool/background/undefined.jpg"
}
document.write(`
<style>
body {
  font-family: "微软雅黑", sans-serif;
  /* 这里修改背景图 */
  background: url(\'`+img+`\') no-repeat center;
  background-size: cover;
  -webkit-background-attachment: fixed;
  background-attachment: fixed;
  color: #fff;
}
</style>
`);

//]]>
