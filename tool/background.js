//<!CDATA[
var bodyBgs = [];
bodyBgs[1] = "\\./tool/background/1.jpg";
bodyBgs[2] = "\\./tool/background/2.jpg";
bodyBgs[3] = "\\./tool/background/3.jpg";
bodyBgs[4] = "\\./tool/background/4.jpg";
bodyBgs[5] = "\\./tool/background/5.jpg";
//bodyBgs[6] = "\\./tool/background/6.jpg";
//bodyBgs[7] = "\\./tool/background/7.jpg";
//bodyBgs[8] = "\\./tool/background/8.jpg";
//bodyBgs[9] = "\\./tool/background/9.jpg";
//bodyBgs[10] = "\\./tool/background/10.jpg";
//bodyBgs[11] = "\\./tool/background/11.jpg";
//bodyBgs[12] = "\\./tool/background/12.jpg";
//bodyBgs[13] = "\\./tool/background/13.jpg";
//bodyBgs[14] = "\\./tool/background/14.jpg";

var randomBgIndex = Math.round( Math.random() * 5 );
var img=bodyBgs[randomBgIndex]
console.log('背景图为：'+img)
//输出随机的背景图
if(img=="undefined"){
  document.write('<style>body{background:url(' + "\\./tool/background/undefined.jpg" + ')no-repeat; background-size:cover;-webkit-background-attachment: fixed;background-attachment: fixed;}</style>');
}
else{
  document.write('<style>body{background:url(' + img + ')no-repeat; background-size:cover;-webkit-background-attachment: fixed;background-attachment: fixed;}</style>');
}
//]]>
