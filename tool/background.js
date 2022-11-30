//<!CDATA[
var bodyBgs = [];
//bodyBgs[0] = "./background/1.jpg";
//bodyBgs[1] = "./background/2.jpg";
//bodyBgs[2] = "./background/3.jpg";
//bodyBgs[3] = "./background/4.jpg";
//bodyBgs[4] = "./background/5.jpg";
//bodyBgs[5] = "./background/6.jpg";
//bodyBgs[6] = "./background/7.jpg";
//bodyBgs[7] = "./background/8.jpg";
//bodyBgs[8] = "./background/9.jpg";
//bodyBgs[9] = "./background/10.jpg";
//bodyBgs[10] = "./background/11.jpg";
//bodyBgs[11] = "./background/12.jpg";
//bodyBgs[12] = "./background/13.jpg";
//bodyBgs[13] = "./background/14.jpg";

var randomBgIndex = Math.round( Math.random() * 5 );

//输出随机的背景图
document.write('<style>body{background:url(' + bodyBgs[randomBgIndex] + ')no-repeat; background-size:cover;-webkit-background-attachment: fixed;background-attachment: fixed;}</style>');
//]]>
