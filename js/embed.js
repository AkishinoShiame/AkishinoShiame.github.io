(function(){var e,t,a,r,d,i,l,m;for(a=function(e){var t,a,r,d,i;if(null!=document.querySelectorAll)return document.querySelectorAll("[data-"+e+"]");for(i=[],t=document.getElementsByTagName("*"),r=0,d=t.length;d>r;r++)a=t[r],a.getAttribute("data-"+e)&&i.push(a);return i},l=a("share-badge-id"),d=0,i=l.length;i>d;d++)t=l[d],e=t.attributes.getNamedItem("data-share-badge-id").value,m=t.attributes.getNamedItem("data-iframe-width").value,r=t.attributes.getNamedItem("data-iframe-height").value,t.outerHTML='<iframe name="acclaim-badge" allowTransparency="true" frameborder="0" id="embedded-badge-'+e+'" scrolling="no" src="https://www.youracclaim.com/embedded_badge/'+e+'" style="width: '+m+"px; height: "+r+'px;" title="View my verified achievement on Acclaim." ></iframe>'}).call(this);