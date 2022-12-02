function new_ad(div,ad){
  document.getElementById(div).innerHTML=(`
<!-- ad中包含【海报】和【关闭键】两部分 -->
<script type="text/javascript">
//关闭广告
function close_ad(){
  var ad = document.getElementById(\"${div}\");
  ad.style.display = "none";
}
</script>
<link rel="stylesheet" href="\./ad/style.css">
<div id="ad">
  <!-- 海报 -->
  <div id="post">
    ${ad}
  </div>
  <!-- 关闭键 -->
  <div id="close">
    <a href="javascript:close_ad()"><img src="\./ad/close.jpg"></a>
  </div>      
</div>`)
}
