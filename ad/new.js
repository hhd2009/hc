var close_img="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEASABIAAD/2wBDAAMCAgMCAgMDAwMEAwMEBQgFBQQEBQoHBwYIDAoMDAsKCwsNDhIQDQ4RDgsLEBYQERMUFRUVDA8XGBYUGBIUFRT/2wBDAQMEBAUEBQkFBQkUDQsNFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBQUFBT/wAARCAATABMDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwD9JvHXjqTwHLp15eac83h2RjHfalE2WsScbHdMZMZOQWB444qHWfiRFH4k0vw/oNsuvapd7LicQygQ2doSCZpHAIGQflXq2R2xk+JGs6xHb22g+H9L+3apq6vF9puYS1nZxAAPJMSMHhuE/iPtweK8E+Cb34A6nBY2ME2v+F9XlijuLqK3Bu7O5wEDsFGWgY/98Z/P1qVKlKkpSXv62V/i832trZXXNbpbX5PF4vF08W6VJv2N480uW7g3b3Y6e8paXdn7O93e6UPaKKKK8k+sCiiigAooooA//9k="

function new_ad(div,ad){
  document.getElementById(div).innerHTML=(`
<!-- ad中包含【海报】和【关闭键】两部分 -->
<link rel="stylesheet" href="\\./hc/ad/style.css">
<div id="ad">
  <!-- 海报 -->
  <div id="post">
    ${ad}
  </div>
  <!-- 关闭键 -->
  <div id="close">
    <a href="javascript:info=document.getElementById(\'${div}\').style.display=\'none\';if(info==\'none\'){console.log(\'广告对象${div}已关闭！\')}else{console.log(\'广告对象${div}未能关闭！\')}"><img src="${close_img}"></a>
  </div>      
</div>`)
}
