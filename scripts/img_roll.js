window.onload = function ()
{
	var img = document.getElementById("img");
	var img_big = document.getElementById("img_big");
	var img_small = document.getElementById("img_small");
	var big = img_big.getElementsByTagName("li");
	var small = img_small.getElementsByTagName("li");
	var timer = play = null;
	var i = index = 0;	
	var n = true;
	
	//切换按钮
	for (i = 0; i < small.length; i++) {
		small[i].index = i;
		small[i].onmouseover = function () {
			show(this.index);
		}
	}
	//鼠标划过关闭定时器
	img.onmouseover = function () {
		clearInterval(play)	;
	}
	//鼠标离开启动自动播放
	img.onmouseout = function () {
		autoPlay();
	}
	//自动播放函数
	function autoPlay ()
	{
		play = setInterval(function () {
			//判断播放顺序
			n ? index++ : index--;			
			index >= big.length && (index = big.length - 2, n = false);
			index <= 0 && (index = 0, n = true);
			show(index)
		},2000);	
	}
	autoPlay();//应用
	//图片切换, 淡入淡出效果
	function show (a)
	{
		index = a;
		var alpha = 0;
		for (i = 0; i < small.length; i++) {
			small[i].className = "";
			small[index].className = "current";
			clearInterval(timer);
		}
		
		for (i = 0; i < big.length; i++)
		{
			big[i].style.opacity = 0;
			big[i].style.filter = "alpha(opacity=0)";	
		}
		
		timer = setInterval(function () {
			alpha += 2;
			alpha > 100 && (alpha =100);
			big[index].style.opacity = alpha / 100;
			big[index].style.filter = "alpha(opacity = " + alpha + ")";
			alpha == 100 && clearInterval(timer)
		},20);
	}
};