function countdown(str){
	var end = new Date(str+' 23:59:59');
	var now = new Date();
	var time = end.getTime() - now.getTime();
	var day = Math.floor(time/(1000*60*60*24));
	if (day >= 2)
		document.write('<font color=#FF0000>'+day+' days</font>');
	else if (day == 1)
		document.write('<font color=#FF0000>1 day</font>');
	else if (day == 0)
		document.write('<font color=#0000FF>0 day</font>');
	else
		document.write('<font color=#0000FF>Passed</font>');
}

function navigation(){
	document.write('<ul><li><a href="index.html">Home</a></li><li><a href="about.html">CV</a></li><li><a href="research.html">Research</a></li><li><a href="resource.html">Resource</a></li><li><a href="link.html">Link</a></li><li><a href="calendar.html">Calendar</a></li><li><a href="contact.html">Contact</a></li></ul>');
}

function footer(){
	document.write('<img border="0" alt="Welcome to Zhifei\'s Homepage" src="http://www.easycounter.com/counter.php?feifeitj">Copyright &copy; 2011-2013 Zhifei ZHANG. Last updated on 2013-12-01.');
}
