function new_ad(div,ad){
  document.getElementById(div).innerHTML=(`
<!-- ad中包含【海报】和【关闭键】两部分 -->
<script type="text/javascript" src="\\./hc/ad/close.js"></script>
<link rel="stylesheet" href="\\./hc/ad/style.css">
<div id="ad">
  <!-- 海报 -->
  <div id="post">
    ${ad}
  </div>
  <!-- 关闭键 -->
  <div id="close">
    <a href="javascript:info=document.getElementById(\'${div}\').style.display=\'none\';if(info==\'none\'){console.log(\'广告对象${div}已关闭！\')}else{console.log(\'广告对象${div}未能关闭！\')}"><img src="\\./hc/ad/close.jpg"></a>
  </div>      
</div>`)
}
