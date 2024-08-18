// JavaScript Document
/*匿名函数，当页面加载完成后立即执行*/
window.onload=function(){
	//实现轮播效果
	//保存当前焦点元素的索引
	var current_index=0;
	//2秒轮播下一张图片
	var timer=window.setInterval(autoChange,2000);
	//获取轮播按钮(4个小点)
	//通过id“button”获取标签“li”
	var button_li=document.getElementById("ddd").getElementsByTagName("li");
	//获取轮播图片(4张图片)
	//通过id“banner_pic”获取标签“li”里的图片
	var pic_li=document.getElementById("banner_pic").getElementsByTagName("li");
	//遍历元素
	for(var i=0;i<button_li.length;i++){
		//鼠标滑过事件
		//鼠标滑过时执行overm函数
		button_li[i].onmouseover=overm;
		//鼠标移出事件
		button_li[i].onmouseout=function(){
			//鼠标移出时启动定时器，恢复自动切换
			timer=setInterval(autoChange,2000);
		}
	}
	//图片轮播
	function autoChange(){
		//索引自增
		++current_index;
		//当索引自增达到上限时，索引归0
		if(current_index==button_li.length){
			current_index=0;
		}
		//遍历元素
		for(var i=0;i<button_li.length;i++){
			//如果遍历到的元素的值等于索引的值时就显示此张图片，没有遍历到就不显示
			if(i==current_index){
				button_li[i].className="point active";
				pic_li[i].className="item active";
			}
			else{
				button_li[i].className="point";
				pic_li[i].className="item";
			}
		}
	}
	//鼠标移上小点时
	function overm(){
		//鼠标移上时执行清除定时器
		if(timer){
			clearInterval(timer);
		}
		//遍历元素
		for(var j=0;j<pic_li.length;j++){
			//将当前索引对应的元素设置为显示
			//鼠标移上此个小点时显示此张图片，否则不显示
			if(button_li[j]==this){
				//鼠标移出时，从当前索引位置开始轮播图片
				current_index=j;
				button_li[j].className="point active";
				pic_li[j].className="item active";
			}
			else{
				button_li[j].className="point";
				pic_li[j].className="item";
			}
		}
	}
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

var items=document.getElementsByClassName('item');//图片
var points=document.getElementsByClassName('point');//点
var goPreBtn=document.getElementById('goPre');
var goNextBtn=document.getElementById('goNext');
var index=0;//index表示第几张图片在显示，表示第几个点在显示
var clearActive=function(){
	for(var i=0;i<items.length;i++){
		items[i].className='item';
	}
	for(var i=0;i<points.length;i++){
		points[i].className='point';
	}
}
var goIndex=function(){
	clearActive();
	points[index].className='point active';
	items[index].className='item active';
}
var goNext=function(){
	if(index<3){
		index++;
	}
	else{
		index=0;
	}
	goIndex();
}
var goPre=function(){
	if(index==0){
		index=3;
	}
	else{
		index--;
	}
	goIndex();
}
function bbb(){
	goNext();
}
function aaa(){
	goPre();
}

function swap(val){
	if(val=="one"){
		one.style.display='block';
		two.style.display='none';
		three.style.display='none';
		four.style.display='none';
		five.style.display='none';
	}else if(val=="two"){
		one.style.display='none';
		two.style.display='block';
		three.style.display='none';
		four.style.display='none';
		five.style.display='none';
	}else if(val=="three"){
		one.style.display='none';
		two.style.display='none';
		three.style.display='block';
		four.style.display='none';
		five.style.display='none';
	}else if(val=="four"){
		one.style.display='none';
		two.style.display='none';
		three.style.display='none';
		four.style.display='block';
		five.style.display='none';
	}else if(val=="five"){
		one.style.display='none';
		two.style.display='none';
		three.style.display='none';
		four.style.display='none';
		five.style.display='block';
	}
　　}