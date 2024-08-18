// JavaScript Document
window.onload=function(){
	alert("Please click on the \"Malaysia\'s tour\" in the upper left corner to enter the homepage!");
}
//标题栏下拉菜单
function change(myid,mode){
	document.getElementById(myid).style.display=mode;
	if(mode == 'block'){//显示下拉菜单
		//设置鼠标划过的背景颜色
		document.getElementById(myid).parentNode.style.borderBottom="none";
	}
	else{
		//当不显示下拉列表时，鼠标划过的背景颜色
		document.getElementById(myid).parentNode.style.backgroundColor="";
		document.getElementById(myid).parentNode.style.border="";
	}		
}