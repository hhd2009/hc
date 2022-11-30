//<!CDATA[
var bodyBgs = [];
bodyBgs[0] = "\./hc/tool/background/1.jpg";
//bodyBgs[1] = "\./hc/tool/background/2.jpg";
//bodyBgs[2] = "\./hc/tool/background/3.jpg";
//bodyBgs[3] = "\./hc/tool/background/4.jpg";
//bodyBgs[4] = "\./hc/tool/background/5.jpg";
//bodyBgs[5] = "\./hc/tool/background/6.jpg";
//bodyBgs[6] = "\./hc/tool/background/7.jpg";
//bodyBgs[7] = "\./hc/tool/background/8.jpg";
//bodyBgs[8] = "\./hc/tool/background/9.jpg";
//bodyBgs[9] = "\./hc/tool/background/10.jpg";
//bodyBgs[10] = "\./hc/tool/background/11.jpg";
//bodyBgs[11] = "\./hc/tool/background/12.jpg";
//bodyBgs[12] = "\./hc/tool/background/13.jpg";
//bodyBgs[13] = "\./hc/tool/background/14.jpg";

var randomBgIndex = Math.round( Math.random() * 5 );

//输出随机的背景图
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')no-repeat; background-size:cover;-webkit-background-attachment: fixed;background-attachment: fixed;}</style>');
//]]>
