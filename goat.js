function runMe() {if(typeof(jQuery) == 'undefined') {var j = document.createElement('script');j.src = "//cdnjs.cloudflare.com/ajax/libs/jquery/2.1.4/jquery.min.js";document.getElementsByTagName('head')[0].appendChild(j);setTimeout("runMe()", 50);} else $('img').each(function() {$(this).attr('src','https://raw.githubusercontent.com/domodwyer/goat.js/master/x.png')});}runMe();