function countdown(str){
	var end = new Date(str+" 23:59:59");
	var now = new Date();
	var time = end.getTime() - now.getTime();
	var day = Math.floor(time/(1000*60*60*24));
	if (day >= 2)
		document.write("<font color=#FF0000>"+day+" days</font>");
	else if (day == 1)
		document.write("<font color=#FF0000>1 day</font>");
	else if (day == 0)
		document.write("<font color=#0000FF>0 day</font>");
	else
		document.write("<font color=#0000FF>Passed</font>");
}
