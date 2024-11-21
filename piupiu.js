        window.onload = function() {
        var puURL = 'http://google.com';
        var puTS = Math.round(+new Date()/1000);
        console.log('T.'+localStorage.puTS+'/'+puTS);
        if (typeof localStorage.puTS == 'undefined' || parseInt(localStorage.puTS) <= (puTS - 5)) {
            var links = document.getElementsByTagName('a');
            for(var i = 0, len = links.length; i < len; i++) {
                links[i].onclick = function (e) {
                    var puHref = this.getAttribute("href");
                    var puTarget = this.getAttribute("target");
                    if (puHref !== '#' && puHref !== 'javascript:void(0)') {
                        e.preventDefault();
                        if (puTarget == '_blank') {
                                window.open( URL, windowName[, windowFeatures] ); 
                                window.focus(); // move new window behind parent window
                        }
                        window.open(puHref);
                        window.location.href = puURL;
                        localStorage.puTS = puTS;
                    }
                }
            }
        }
    };
