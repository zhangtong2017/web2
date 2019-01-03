// function animate(obj,json,callback){
// 		clearInterval(obj.timer);//给Obj对象添加timer属性
// 		obj.timer=setInterval(function(){
// 			var isStop=true;//标志所有变量都到达目标值
// 			for(var attr in json)//遍历所有属性
// 			{
// 				if(attr=='opacity')//如果属性是透明度（0-1）
// 				{
// 					var now=parseInt(getStyle(obj,attr)*100);
// 				}	
// 				else
// 				{
// 					var now=parseInt(getStyle(obj,attr));
// 				}
// 				var speed=(json[attr]-now)/5;
// 				speed = speed>0?Math.ceil(speed):Math.floor(speed);//json[attr]==json.attr用json方式整理数据
// 				if(attr=='opacity')
// 				{
// 					obj.style[attr]=(now+speed)/100;
// 				}
// 				else
// 				{
// 					obj.style[attr]=now+speed+'px';
// 				}
// 				var current =now+speed;
// 				if(json[attr]!=current){
// 					isStop=false;
// 				}
// 			}
// 			if(isStop==true)
// 			{
// 				clearInterval(obj.timer);
// 				callback&&callback();
// 			}
// 		},80)
			
// 	}
	
// 	////******解决兼容性问题********////
// 	function getStyle(obj,style){
// 		if(getComputedStyle(obj))
// 		{
// 			return getComputedStyle(obj)[style];	
// 		}
// 		else{
// 			return obj.currentStyle[style];
// 		}
 //	}	
 	function animate(obj,json,callback){
		clearInterval(obj.timer);
		obj.timer=setInterval(function(){
			var isStop=true;
			for(var attr in json){ //用json的方法整理数据
				if(attr=='opacity'){
					var now=parseInt(getStyle(obj,attr)*100);
				}else{
					var now=parseInt(getStyle(obj,attr));
				}

				var speed=(json[attr]-now)/5;
				speed = speed>0?Math.ceil(speed):Math.floor(speed);

				if(attr=='opacity'){
					obj.style[attr] = (now+speed)/100;
				}else{
					obj.style[attr] = now+speed+'px';
				}

				var current=now+speed;

				//只要有一个属性没有到达目标值isStopde的值就为false
				if(json[attr]!==current){
					isStop=false;
				}
			}

			//当isStop为true（表示所有属性都达到目标值）时才清除定时器
			if(isStop==true){
				clearInterval(obj.timer);
				callback&&callback();
			}
		},50)
	}
	
	function getStyle(obj,style){
		if(getComputedStyle(obj)){
			return getComputedStyle(obj)[style];
		}else{
			return obj.currentStyle[style];
		}
	}
