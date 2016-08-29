/**
 * Created by Administrator on 2016/8/23.
 */
var ulNode=document.getElementsByTagName("ul")[0];
var liNodes=ulNode.getElementsByTagName("li");
var leftNode=document.querySelector(".left");
var rightNode=document.querySelector(".right");
var box=document.getElementById("box");
var flash;


box.onmouseenter= function () {
    leftNode.style.display="block";
    rightNode.style.display="block";
    clearInterval(flash)
};
box.onmouseleave= function () {
    leftNode.style.display="none";
    rightNode.style.display="none";
    flash=setInterval(leftNode.onclick , 2000);
};

rightNode.onclick=function(){
    moveRightFun();
};

function moveRightFun() {
    if(bool){
        var num=parseFloat(liNodes[0].style.marginLeft);
        num-=4;
        if(num>-210){
            liNodes[0].style.marginLeft=num+"px";
            setTimeout(moveRightFun,6);
        }else {
            ulNode.appendChild(liNodes[0]);
            ulNode.lastChild.style.marginLeft = 0;
        }
    }else{
        ulNode.appendChild(liNodes[0]);
        ulNode.lastChild.style.marginLeft = 0;
        bool=true;
        moveRightFun();
    }
}


var bool=true;
leftNode.onclick=function(){
    moveLeftFun();
};

function moveLeftFun() {
    if(bool){
        liNodes[liNodes.length-1].style.marginLeft=-210+"px";
        ulNode.insertBefore(liNodes[liNodes.length-1],liNodes[0]);
        bool=false;
    }

    var margin=parseFloat(liNodes[0].style.marginLeft);
    if(margin>=-210 && margin<0){
        margin+=3;
        liNodes[0].style.marginLeft=margin+"px";
        setTimeout(moveLeftFun,6);
    }else{
        liNodes[liNodes.length-1].style.marginLeft=-210+"px";
        ulNode.insertBefore(liNodes[liNodes.length-1],liNodes[0]);
    }
}
flash=setInterval(leftNode.onclick , 2000);