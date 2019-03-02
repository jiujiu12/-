//触发按钮，输出框输出对应值
document.getElementById("print").value="0";
function cone(num){
	
var txt1=num.value;

//switch语句进行判断
//js可以将字符串转化为代码
switch(txt1){
	//求根式
	case "pow":document.getElementById("print").value=Math.sqrt(document.getElementById("print").value);break;
	case "CE":
	//清除按钮
	document.getElementById("print").value=null;
	break;
	case "=":
	//eval()函数可以将字符串转换为js代码
	document.getElementById("print").value=eval(document.getElementById("print").value);
	break;
	case "T":
	//定义并输出时间
	var mytime=new Date();
	document.getElementById("print").value=mytime.toLocaleString();break;
	//回退功能
	case "B":
	document.getElementById("print").value=document.getElementById("print").value.substr(0,document.getElementById("print").value);	
	break;
	//求正余弦
	case "sin":document.getElementById("print").value=Math.sin(document.getElementById("print").value);break;
	case "cos":document.getElementById("print").value=Math.cos(document.getElementById("print").value);break;
	case "tan":document.getElementById("print").value=Math.tan(document.getElementById("print").value);break;
	case "%":document.getElementById("print").value=0.01*document.getElementById("print").value;break;
	default:
	//其他情况直接在输出框输出按钮对应值
	document.getElementById("print").value=document.getElementById("print").value+txt1;
	break;
  }
  
}


