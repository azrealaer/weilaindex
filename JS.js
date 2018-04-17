/**
 * Created by ttc on 18-3-13.
 */
window.onload=function () {
    var fixedBox=document.getElementById("固定栏");
    var fixedBoxImgArray=fixedBox.children[0].children;
    var fixedBoxHoverImgArray=["pic/客服（hover）.bmp","pic/定制（hover）.png","pic/浏览（hover）.png","pic/反馈（hover）.png"];
    for(var i=0;i<4;i++)
    {
        fixedBoxImgArray[i].onmouseover=function () {
            fixedBoxImgArray[i].src=fixedBoxHoverImgArray[i];
        }
    }
}