
//var got=false;

document.getElementById("start").onclick=function start(){
document.getElementById("avg").style.display="none"
var avg=0;
var n=0;	


var start = new Date().getTime();
function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function makeappear(){

	var top=Math.random()*400
	var left=Math.random()*800
	var width=(Math.random()*200)+100
	if(Math.random()>0.5){
		document.getElementById("box").style.borderRadius="50%"
	}
	else{
		document.getElementById("box").style.borderRadius="0"
	}
	document.getElementById("box").style.backgroundColor=getRandomColor();
document.getElementById("box").style.top=top+"px"
document.getElementById("box").style.left=left+"px"
document.getElementById("box").style.width=width+"px"
document.getElementById("box").style.height=width+"px"
	document.getElementById("box").style.display="block";
	start = new Date().getTime();
}
var myvar;
function appeartime(){
	myvar=setTimeout(makeappear,Math.random()*2000)
}

document.getElementById("stop").onclick=function(){
  clearTimeout(myvar);
 document.getElementById("avg").style.display="block"
  document.getElementById("avg").innerHTML= "<b>"+"Your average reaction time : " + (avg/n).toFixed(3) +"s" +"</b>"
  	document.getElementById("box").style.display="none"
}

appeartime();

document.getElementById("box").onclick=function(){

	document.getElementById("box").style.display="none"
	var end = new Date().getTime();
	var time = (end - start)/1000;
	document.getElementById("time").innerHTML= time + "s" ;
	avg=avg+time;
	n=n+1
	appeartime();
}
}


