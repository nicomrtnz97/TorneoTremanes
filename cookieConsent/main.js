function setCookie(cname, cvalue, exdays) {
  var d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  var expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + "; " + expires;
}

function showCookieBanner(){
	var cookieBanner = document.getElementById("cb-cookie-banner");
            cookieBanner.style.display = "block";
        }

/**
* @description Hides the Cookie banner and saves the value to localstorage
*/
function hideCookieBannerAccept(){
	    setCookie("c_analytics","1",365)

 	    dataLayer.push({'event':"pageview"})

            var cookieBanner = document.getElementById("cb-cookie-banner");
            cookieBanner.style.display = "none";
        }

/**
* @description Hides the Cookie banner and saves the value to localstorage
*/
function hideCookieBannerDeny(){
            document.cookie="c_analytics=0"


            var cookieBanner = document.getElementById("cb-cookie-banner");
            cookieBanner.style.display = "none";
        }


/**
* @description Checks the localstorage and shows Cookie banner based on it.
*/
function initializeCookieBanner(){
	var isCookieAccepted = false;
	cookies=document.cookie.split(";") 

	for(var i=0;i<cookies.length;i++){ 
		if(cookies[i].trim()=="c_analytics=1"){
			isCookieAccepted = true
		}
	    }
	if(!isCookieAccepted){ showCookieBanner()}
	else{
		hideCookieBannerAccept()
	}
}


initializeCookieBanner()

