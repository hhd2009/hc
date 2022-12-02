function new(ad){
  document.write(`
<!-- ad中包含【海报】和【关闭键】两部分 -->
<link rel="stylesheet" href="\./ad/style.css">
<div id="ad">
  <!-- 海报 -->
  <div id="post">
    <a><img src=${ad}></a>
  </div>
  <!-- 关闭键 -->
  <div id="close">
    <img src="\./ad/close.jpg">
  </div>      
</div>
<script type="text/javascript">
var close = document.getElementById("close");
var ad = document.getElementById("ad");
//关闭广告
close.onclick = function(){
  ad.style.display = "none";
}`)
}
