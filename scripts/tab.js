function side1() {
	var tab_1 = document.getElementById("tab_1");
	var lis = tab_1.getElementsByTagName("li");
	var items = document.getElementById("tab_1_items");
	var uls= items.getElementsByTagName("ul");
	for (var i=0; i<lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for (var n=0; n<lis.length; n++) {
				lis[n].className = "";
				this.className = "current";
			}
			for (var m=0; m<uls.length; m++) {
				uls[m].style.display = "none"
				uls[this.index].style.display = "block";
			}
		}
	}
}

function side2() {
	var tab_2 = document.getElementById("tab_2");
	var lis = tab_2.getElementsByTagName("li");
	var items = document.getElementById("tab_2_items");
	var uls = items.getElementsByTagName("ul");
	for (var i=0; i<lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for (var n=0; n<lis.length; n++) {
				lis[n].className = "";
				this.className = "current";
			}
			for (var m=0; m<uls.length; m++) {
				uls[m].style.display = "none";
				uls[this.index].style.display = "block";
			}
		}
		
	}
}

function hero_tab() {
	var hero_item = document.getElementById("hero_item");
	var lis = hero_item.getElementsByTagName("li");
	var detail = document.getElementById("hero_detail");
	var items = detail.getElementsByTagName("div");
	for (var i = 0; i < lis.length; i++) {
		lis[i].index = i;
		lis[i].onmouseover = function() {
			for (var n = 0; n<lis.length; n++) {
					lis[n].className = "";
					this.className = "current";
			}
			for (var m = 0; m<items.length; m++) {
				items[m].style.display = "none";
				items[this.index].style.display = "block";
			}
		}
	}
}
addLoadEvent(side1);
addLoadEvent(side2);
addLoadEvent(hero_tab);

function addLoadEvent(function){  
    var oldonload = window.onload;  
    if(typeof window.onload != "function"){  
        window.onload = func;  
    } else {  
        window.onload = function(){  
            oldonload();  
            func();  
        }  
    }  
}  