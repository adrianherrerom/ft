//DETECTOR DE VISIBILIDAD
function isScrolledIntoView(elem)
{
    
    var docViewTop = jQuery(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    
    var elemTop = jQuery(elem).offset().top - 300;
    var elemBottom = elemTop + jQuery(elem).height();

    return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}
//DISPOSITIVO
var dispositivo = "no"; 

if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) { 

dispositivo = "si"; 
} 
widthpantalla = jQuery(window).width();
//MENU MOVIL

		//DESPLAZAMIENTO AUTOMÁTICO MENÚ
		if (dispositivo == "si") {
			jQuery( document ).ready(function() {
			var menu = jQuery("#mainheader nav");
			var seccionactual = jQuery("#mainheader nav div ul li[class*='current']");
			var position = seccionactual.position(); console.log(position);

					setTimeout(function(){
						leftpos = menu.scrollLeft();
						menu.animate({scrollLeft: leftpos + position.left - 100}, 200);
					}, 500);
			});
		}


//ODOMETER
/*! odometer 0.4.8 */
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G=[].slice;q='<span class="odometer-value"></span>',n='<span class="odometer-ribbon"><span class="odometer-ribbon-inner">'+q+"</span></span>",d='<span class="odometer-digit"><span class="odometer-digit-spacer">8</span><span class="odometer-digit-inner">'+n+"</span></span>",g='<span class="odometer-formatting-mark"></span>',c="(,ddd).dd",h=/^\(?([^)]*)\)?(?:(.)(d+))?$/,i=30,f=2e3,a=20,j=2,e=.5,k=1e3/i,b=1e3/a,o="transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",y=document.createElement("div").style,p=null!=y.transition||null!=y.webkitTransition||null!=y.mozTransition||null!=y.oTransition,w=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,l=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver,s=function(a){var b;return b=document.createElement("div"),b.innerHTML=a,b.children[0]},v=function(a,b){return a.className=a.className.replace(new RegExp("(^| )"+b.split(" ").join("|")+"( |$)","gi")," ")},r=function(a,b){return v(a,b),a.className+=" "+b},z=function(a,b){var c;return null!=document.createEvent?(c=document.createEvent("HTMLEvents"),c.initEvent(b,!0,!0),a.dispatchEvent(c)):void 0},u=function(){var a,b;return null!=(a=null!=(b=window.performance)&&"function"==typeof b.now?b.now():void 0)?a:+new Date},x=function(a,b){return null==b&&(b=0),b?(a*=Math.pow(10,b),a+=.5,a=Math.floor(a),a/=Math.pow(10,b)):Math.round(a)},A=function(a){return 0>a?Math.ceil(a):Math.floor(a)},t=function(a){return a-x(a)},C=!1,(B=function(){var a,b,c,d,e;if(!C&&null!=window.jQuery){for(C=!0,d=["html","text"],e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(function(a){var b;return b=window.jQuery.fn[a],window.jQuery.fn[a]=function(a){var c;return null==a||null==(null!=(c=this[0])?c.odometer:void 0)?b.apply(this,arguments):this[0].odometer.update(a)}}(a));return e}})(),setTimeout(B,0),m=function(){function a(b){var c,d,e,g,h,i,l,m,n,o,p=this;if(this.options=b,this.el=this.options.el,null!=this.el.odometer)return this.el.odometer;this.el.odometer=this,m=a.options;for(d in m)g=m[d],null==this.options[d]&&(this.options[d]=g);null==(h=this.options).duration&&(h.duration=f),this.MAX_VALUES=this.options.duration/k/j|0,this.resetFormat(),this.value=this.cleanValue(null!=(n=this.options.value)?n:""),this.renderInside(),this.render();try{for(o=["innerHTML","innerText","textContent"],i=0,l=o.length;l>i;i++)e=o[i],null!=this.el[e]&&!function(a){return Object.defineProperty(p.el,a,{get:function(){var b;return"innerHTML"===a?p.inside.outerHTML:null!=(b=p.inside.innerText)?b:p.inside.textContent},set:function(a){return p.update(a)}})}(e)}catch(q){c=q,this.watchForMutations()}}return a.prototype.renderInside=function(){return this.inside=document.createElement("div"),this.inside.className="odometer-inside",this.el.innerHTML="",this.el.appendChild(this.inside)},a.prototype.watchForMutations=function(){var a,b=this;if(null!=l)try{return null==this.observer&&(this.observer=new l(function(a){var c;return c=b.el.innerText,b.renderInside(),b.render(b.value),b.update(c)})),this.watchMutations=!0,this.startWatchingMutations()}catch(c){a=c}},a.prototype.startWatchingMutations=function(){return this.watchMutations?this.observer.observe(this.el,{childList:!0}):void 0},a.prototype.stopWatchingMutations=function(){var a;return null!=(a=this.observer)?a.disconnect():void 0},a.prototype.cleanValue=function(a){var b;return"string"==typeof a&&(a=a.replace(null!=(b=this.format.radix)?b:".","<radix>"),a=a.replace(/[.,]/g,""),a=a.replace("<radix>","."),a=parseFloat(a,10)||0),x(a,this.format.precision)},a.prototype.bindTransitionEnd=function(){var a,b,c,d,e,f,g=this;if(!this.transitionEndBound){for(this.transitionEndBound=!0,b=!1,e=o.split(" "),f=[],c=0,d=e.length;d>c;c++)a=e[c],f.push(this.el.addEventListener(a,function(){return b?!0:(b=!0,setTimeout(function(){return g.render(),b=!1,z(g.el,"odometerdone")},0),!0)},!1));return f}},a.prototype.resetFormat=function(){var a,b,d,e,f,g,i,j;if(a=null!=(i=this.options.format)?i:c,a||(a="d"),d=h.exec(a),!d)throw new Error("Odometer: Unparsable digit format");return j=d.slice(1,4),g=j[0],f=j[1],b=j[2],e=(null!=b?b.length:void 0)||0,this.format={repeating:g,radix:f,precision:e}},a.prototype.render=function(a){var b,c,d,e,f,g,h;for(null==a&&(a=this.value),this.stopWatchingMutations(),this.resetFormat(),this.inside.innerHTML="",f=this.options.theme,b=this.el.className.split(" "),e=[],g=0,h=b.length;h>g;g++)c=b[g],c.length&&((d=/^odometer-theme-(.+)$/.exec(c))?f=d[1]:/^odometer(-|$)/.test(c)||e.push(c));return e.push("odometer"),p||e.push("odometer-no-transitions"),f?e.push("odometer-theme-"+f):e.push("odometer-auto-theme"),this.el.className=e.join(" "),this.ribbons={},this.formatDigits(a),this.startWatchingMutations()},a.prototype.formatDigits=function(a){var b,c,d,e,f,g,h,i,j,k;if(this.digits=[],this.options.formatFunction)for(d=this.options.formatFunction(a),j=d.split("").reverse(),f=0,h=j.length;h>f;f++)c=j[f],c.match(/0-9/)?(b=this.renderDigit(),b.querySelector(".odometer-value").innerHTML=c,this.digits.push(b),this.insertDigit(b)):this.addSpacer(c);else for(e=!this.format.precision||!t(a)||!1,k=a.toString().split("").reverse(),g=0,i=k.length;i>g;g++)b=k[g],"."===b&&(e=!0),this.addDigit(b,e)},a.prototype.update=function(a){var b,c=this;return a=this.cleanValue(a),(b=a-this.value)?(v(this.el,"odometer-animating-up odometer-animating-down odometer-animating"),b>0?r(this.el,"odometer-animating-up"):r(this.el,"odometer-animating-down"),this.stopWatchingMutations(),this.animate(a),this.startWatchingMutations(),setTimeout(function(){return c.el.offsetHeight,r(c.el,"odometer-animating")},0),this.value=a):void 0},a.prototype.renderDigit=function(){return s(d)},a.prototype.insertDigit=function(a,b){return null!=b?this.inside.insertBefore(a,b):this.inside.children.length?this.inside.insertBefore(a,this.inside.children[0]):this.inside.appendChild(a)},a.prototype.addSpacer=function(a,b,c){var d;return d=s(g),d.innerHTML=a,c&&r(d,c),this.insertDigit(d,b)},a.prototype.addDigit=function(a,b){var c,d,e,f;if(null==b&&(b=!0),"-"===a)return this.addSpacer(a,null,"odometer-negation-mark");if("."===a)return this.addSpacer(null!=(f=this.format.radix)?f:".",null,"odometer-radix-mark");if(b)for(e=!1;;){if(!this.format.repeating.length){if(e)throw new Error("Bad odometer format without digits");this.resetFormat(),e=!0}if(c=this.format.repeating[this.format.repeating.length-1],this.format.repeating=this.format.repeating.substring(0,this.format.repeating.length-1),"d"===c)break;this.addSpacer(c)}return d=this.renderDigit(),d.querySelector(".odometer-value").innerHTML=a,this.digits.push(d),this.insertDigit(d)},a.prototype.animate=function(a){return p&&"count"!==this.options.animation?this.animateSlide(a):this.animateCount(a)},a.prototype.animateCount=function(a){var c,d,e,f,g,h=this;if(d=+a-this.value)return f=e=u(),c=this.value,(g=function(){var i,j,k;return u()-f>h.options.duration?(h.value=a,h.render(),void z(h.el,"odometerdone")):(i=u()-e,i>b&&(e=u(),k=i/h.options.duration,j=d*k,c+=j,h.render(Math.round(c))),null!=w?w(g):setTimeout(g,b))})()},a.prototype.getDigitCount=function(){var a,b,c,d,e,f;for(d=1<=arguments.length?G.call(arguments,0):[],a=e=0,f=d.length;f>e;a=++e)c=d[a],d[a]=Math.abs(c);return b=Math.max.apply(Math,d),Math.ceil(Math.log(b+1)/Math.log(10))},a.prototype.getFractionalDigitCount=function(){var a,b,c,d,e,f,g;for(e=1<=arguments.length?G.call(arguments,0):[],b=/^\-?\d*\.(\d*?)0*$/,a=f=0,g=e.length;g>f;a=++f)d=e[a],e[a]=d.toString(),c=b.exec(e[a]),null==c?e[a]=0:e[a]=c[1].length;return Math.max.apply(Math,e)},a.prototype.resetDigits=function(){return this.digits=[],this.ribbons=[],this.inside.innerHTML="",this.resetFormat()},a.prototype.animateSlide=function(a){var b,c,d,f,g,h,i,j,k,l,m,n,o,p,q,s,t,u,v,w,x,y,z,B,C,D,E;if(s=this.value,j=this.getFractionalDigitCount(s,a),j&&(a*=Math.pow(10,j),s*=Math.pow(10,j)),d=a-s){for(this.bindTransitionEnd(),f=this.getDigitCount(s,a),g=[],b=0,m=v=0;f>=0?f>v:v>f;m=f>=0?++v:--v){if(t=A(s/Math.pow(10,f-m-1)),i=A(a/Math.pow(10,f-m-1)),h=i-t,Math.abs(h)>this.MAX_VALUES){for(l=[],n=h/(this.MAX_VALUES+this.MAX_VALUES*b*e),c=t;h>0&&i>c||0>h&&c>i;)l.push(Math.round(c)),c+=n;l[l.length-1]!==i&&l.push(i),b++}else l=function(){E=[];for(var a=t;i>=t?i>=a:a>=i;i>=t?a++:a--)E.push(a);return E}.apply(this);for(m=w=0,y=l.length;y>w;m=++w)k=l[m],l[m]=Math.abs(k%10);g.push(l)}for(this.resetDigits(),D=g.reverse(),m=x=0,z=D.length;z>x;m=++x)for(l=D[m],this.digits[m]||this.addDigit(" ",m>=j),null==(u=this.ribbons)[m]&&(u[m]=this.digits[m].querySelector(".odometer-ribbon-inner")),this.ribbons[m].innerHTML="",0>d&&(l=l.reverse()),o=C=0,B=l.length;B>C;o=++C)k=l[o],q=document.createElement("div"),q.className="odometer-value",q.innerHTML=k,this.ribbons[m].appendChild(q),o===l.length-1&&r(q,"odometer-last-value"),0===o&&r(q,"odometer-first-value");return 0>t&&this.addDigit("-"),p=this.inside.querySelector(".odometer-radix-mark"),null!=p&&p.parent.removeChild(p),j?this.addSpacer(this.format.radix,this.digits[j-1],"odometer-radix-mark"):void 0}},a}(),m.options=null!=(E=window.odometerOptions)?E:{},setTimeout(function(){var a,b,c,d,e;if(window.odometerOptions){d=window.odometerOptions,e=[];for(a in d)b=d[a],e.push(null!=(c=m.options)[a]?(c=m.options)[a]:c[a]=b);return e}},0),m.init=function(){var a,b,c,d,e,f;if(null!=document.querySelectorAll){for(b=document.querySelectorAll(m.options.selector||".odometer"),f=[],c=0,d=b.length;d>c;c++)a=b[c],f.push(a.odometer=new m({el:a,value:null!=(e=a.innerText)?e:a.textContent}));return f}},null!=(null!=(F=document.documentElement)?F.doScroll:void 0)&&null!=document.createEventObject?(D=document.onreadystatechange,document.onreadystatechange=function(){return"complete"===document.readyState&&m.options.auto!==!1&&m.init(),null!=D?D.apply(this,arguments):void 0}):document.addEventListener("DOMContentLoaded",function(){return m.options.auto!==!1?m.init():void 0},!1),"function"==typeof define&&define.amd?define([],function(){return m}):"undefined"!=typeof exports&&null!==exports?module.exports=m:window.Odometer=m}).call(this);

//BOTÓN BACK
function addBackBtn() {
	jQuery('#buddypress').prepend('<a href="https://www.diegorey.es/zona-fan/" class="back"><i class="icon-left"></i><span>Atrás</span></a>');

}
///////////LOGIN
function EntraButton() {
    jQuery("#user_pass").attr("placeholder", "Password");
    jQuery("#user_login").attr("placeholder", "User");
    var div_ = jQuery('#contenedorlogin');
    //jQuery('body').css('overflow-y', 'hidden');

    if (div_.hasClass('hidden'))
        div_.toggleClass('hidden', false);
    else
        div_.toggleClass('hidden', true);
}
function CloseForm() {
    jQuery('#contenedorlogin').toggleClass('hidden', true);
    jQuery('body').css('height', '').css('overflow-y', '');
}

///////////ACTUALIZAR FEED
function actualizarfeed() {
	jQuery("li#activity-all a").click();
}

jQuery(".bpfb_active").click(function() {
	alert("hola");

});

//JQUERY INITIALIZE
!function(i){"use strict";var t=function(i,t){this.selector=i,this.callback=t},e=[];e.initialize=function(e,n){var c=[],a=function(){-1==c.indexOf(this)&&(c.push(this),i(this).each(n))};i(e).each(a),this.push(new t(e,a))};var n=new MutationObserver(function(){for(var t=0;t<e.length;t++)i(e[t].selector).each(e[t].callback)});n.observe(document.documentElement,{childList:!0,subtree:!0,attributes:!0}),i.fn.initialize=function(i){e.initialize(this.selector,i)},i.initialize=function(i,t){e.initialize(i,t)}}(jQuery);


//FANWIRE

function eliminarfoto() {
	jQuery(".bpfb_actions_container").addClass("inactivo");
	setTimeout(function(){ jQuery(".bpfb_actions_container").removeClass("activo").removeClass("inactivo"); }, 1500);
	jQuery("#subirfoto").show();
}

jQuery(window).bind("load", function() {
	//FALSO BOTÓN SUBIR FOTOS
    jQuery("#bpfb_addPhotos").click(function() {
		jQuery(".qq-upload-button input").click();
	});

    jQuery("#bpfb_cancel_action").click(function() {
		eliminarfoto();
	});
	

	//BOTON PUBLICAR UPDATE
	jQuery("#buddypress #publicarbutton").click(function() {
		//SI HAY FOTO O NO
		if (jQuery(".bpfb_preview_container").is(':empty')) {
			jQuery("#aw-whats-new-submit").click();
		} else {
				if(jQuery("#whats-new").val().length > 5) {
					jQuery("#bpfb_submit").click();
					eliminarfoto();	
				} else {
					alert("You didn't write anything or your text is not long enough!");
				}
		}
	});
});

//SUBIR FOTOS
function subirfoto() {
	jQuery("#bpfb_addPhotos").click();
}

//DETECTAR CUANDO USUARIO INSERTA FOTO EN POST
jQuery.initialize(".qq-upload-file", function() {
	jQuery(".bpfb_actions_container").addClass("activo");
	jQuery("#subirfoto").hide();
});

//EJECUTAR FUNCIONES EN LA CARGA
jQuery(document).ready(function() {
	jQuery("body").addClass("loaded-readed");
	//jQuery("iframe[src*='youtube.com']").wrap("<div class='videoresponsive'></div>");
	addBackBtn();
});
jQuery(window).bind("load", function() {
	jQuery("body").addClass("loaded");
 });


//MAILPOET

if (typeof wMailpoet !== 'undefined') {
	
	(function($){$.fn.validationEngineLanguage=function(){};$.validationEngineLanguage={newLang:function(){$.validationEngineLanguage.allRules={"required":{"regex":"none","alertText":"* This field is required","alertTextCheckboxMultiple":"* Please select an option","alertTextCheckboxe":"* This checkbox is required","alertTextDateRange":"* Both date range fields are required"},"requiredInFunction":{"func":function(field,rules,i,options){return(field.val()=="test")?!0:!1},"alertText":"* Field must equal test"},"dateRange":{"regex":"none","alertText":"* Invalid ","alertText2":"Date Range"},"dateTimeRange":{"regex":"none","alertText":"* Invalid ","alertText2":"Date Time Range"},"minSize":{"regex":"none","alertText":"* Minimum ","alertText2":" characters required"},"maxSize":{"regex":"none","alertText":"* Maximum ","alertText2":" characters allowed"},"groupRequired":{"regex":"none","alertText":"* You must fill one of the following fields","alertTextCheckboxMultiple":"* Please select an option","alertTextCheckboxe":"* This checkbox is required"},"min":{"regex":"none","alertText":"* Minimum value is "},"max":{"regex":"none","alertText":"* Maximum value is "},"past":{"regex":"none","alertText":"* Date prior to "},"future":{"regex":"none","alertText":"* Date past "},"maxCheckbox":{"regex":"none","alertText":"* Maximum ","alertText2":" options allowed"},"minCheckbox":{"regex":"none","alertText":"* Please select ","alertText2":" options"},"equals":{"regex":"none","alertText":"* Fields do not match"},"creditCard":{"regex":"none","alertText":"* Invalid credit card number"},"phone":{"regex":/^([\+][0-9]{1,3}([ \.\-])?)?([\(][0-9]{1,6}[\)])?([0-9 \.\-]{1,32})(([A-Za-z \:]{1,11})?[0-9]{1,4}?)$/,"alertText":"* Invalid phone number"},"email":{"regex":/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,"alertText":"* Invalid email address"},"fullname":{"regex":/^([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]*)+[ ]([a-zA-Z]+[\'\,\.\-]?[a-zA-Z ]+)+$/,"alertText":"* Must be first and last name"},"zip":{"regex":/^\d{5}$|^\d{5}-\d{4}$/,"alertText":"* Invalid zip format"},"integer":{"regex":/^[\-\+]?\d+$/,"alertText":"* Not a valid integer"},"number":{"regex":/^[\-\+]?((([0-9]{1,3})([,][0-9]{3})*)|([0-9]+))?([\.]([0-9]+))?$/,"alertText":"* Invalid floating decimal number"},"date":{"func":function(field){var pattern=new RegExp(/^(\d{4})[\/\-\.](0?[1-9]|1[012])[\/\-\.](0?[1-9]|[12][0-9]|3[01])$/);var match=pattern.exec(field.val());if(match==null)
	return!1;var year=match[1];var month=match[2]*1;var day=match[3]*1;var date=new Date(year,month-1,day);return(date.getFullYear()==year&&date.getMonth()==(month-1)&&date.getDate()==day)},"alertText":"* Invalid date, must be in YYYY-MM-DD format"},"ipv4":{"regex":/^((([01]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))[.]){3}(([0-1]?[0-9]{1,2})|(2[0-4][0-9])|(25[0-5]))$/,"alertText":"* Invalid IP address"},"url":{"regex":/^(https?|ftp):\/\/(((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:)*@)?(((\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5])\.(\d|[1-9]\d|1\d\d|2[0-4]\d|25[0-5]))|((([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|\d|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.)+(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])*([a-z]|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])))\.?)(:\d*)?)(\/((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)+(\/(([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)*)*)?)?(\?((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|[\uE000-\uF8FF]|\/|\?)*)?(\#((([a-z]|\d|-|\.|_|~|[\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])|(%[\da-f]{2})|[!\$&'\(\)\*\+,;=]|:|@)|\/|\?)*)?$/i,"alertText":"* Invalid URL"},"onlyNumberSp":{"regex":/^[0-9\ ]+$/,"alertText":"* Numbers only"},"onlyLetterSp":{"regex":/^[a-zA-Z\ \']+$/,"alertText":"* Letters only"},"onlyLetterAccentSp":{"regex":/^[a-z\u00C0-\u017F\ ]+$/i,"alertText":"* Letters only (accents allowed)"},"onlyLetterNumber":{"regex":/^[0-9a-zA-Z]+$/,"alertText":"* No special characters allowed"},"ajaxUserCall":{"url":"ajaxValidateFieldUser","extraData":"name=eric","alertText":"* This user is already taken","alertTextLoad":"* Validating, please wait"},"ajaxUserCallPhp":{"url":"phpajax/ajaxValidateFieldUser.php","extraData":"name=eric","alertTextOk":"* This username is available","alertText":"* This user is already taken","alertTextLoad":"* Validating, please wait"},"ajaxNameCall":{"url":"ajaxValidateFieldName","alertText":"* This name is already taken","alertTextOk":"* This name is available","alertTextLoad":"* Validating, please wait"},"ajaxNameCallPhp":{"url":"phpajax/ajaxValidateFieldName.php","alertText":"* This name is already taken","alertTextLoad":"* Validating, please wait"},"validate2fields":{"alertText":"* Please input HELLO"},"dateFormat":{"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/,"alertText":"* Invalid Date"},"dateTimeFormat":{"regex":/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/,"alertText":"* Invalid Date or Date Format","alertText2":"Expected Format: ","alertText3":"mm/dd/yyyy hh:mm:ss AM|PM or ","alertText4":"yyyy-mm-dd hh:mm:ss AM|PM"}}}};$.validationEngineLanguage.newLang()})(jQuery);(function($){"use strict";var methods={init:function(options){var form=this;if(!form.data('jqv')||form.data('jqv')==null){options=methods._saveOptions(form,options);$(document).on("click",".formError",function(){$(this).fadeOut(150,function(){$(this).parent('.formErrorOuter').remove();$(this).remove()})})}
	return this},attach:function(userOptions){var form=this;var options;if(userOptions)
	options=methods._saveOptions(form,userOptions);else options=form.data('jqv');options.validateAttribute=(form.find("[data-validation-engine*=validate]").length)?"data-validation-engine":"class";if(options.binded){form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate]:not([type=checkbox]):not([type=radio]):not(.datepicker)",methods._onFieldEvent);form.on("click","["+options.validateAttribute+"*=validate][type=checkbox],["+options.validateAttribute+"*=validate][type=radio]",methods._onFieldEvent);form.on(options.validationEventTrigger,"["+options.validateAttribute+"*=validate][class*=datepicker]",{"delay":300},methods._onFieldEvent)}
	if(options.autoPositionUpdate){$(window).bind("resize",{"noAnimation":!0,"formElem":form},methods.updatePromptsPosition)}
	form.on("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",methods._submitButtonClick);form.removeData('jqv_submitButton');form.on("submit",methods._onSubmitEvent);return this},detach:function(){var form=this;var options=form.data('jqv');form.find("["+options.validateAttribute+"*=validate]").not("[type=checkbox]").off(options.validationEventTrigger,methods._onFieldEvent);form.find("["+options.validateAttribute+"*=validate][type=checkbox],[class*=validate][type=radio]").off("click",methods._onFieldEvent);form.off("submit",methods.onAjaxFormComplete);form.off("submit",methods.onAjaxFormComplete);form.removeData('jqv');form.off("click","a[data-validation-engine-skip], a[class*='validate-skip'], button[data-validation-engine-skip], button[class*='validate-skip'], input[data-validation-engine-skip], input[class*='validate-skip']",methods._submitButtonClick);form.removeData('jqv_submitButton');if(options.autoPositionUpdate)
	$(window).unbind("resize",methods.updatePromptsPosition);return this},validate:function(){var element=$(this);var valid=null;if(element.is("form")||element.hasClass("validationEngineContainer")){if(element.hasClass('validating')){return!1}else{element.addClass('validating');var options=element.data('jqv');var valid=methods._validateFields(this);setTimeout(function(){element.removeClass('validating')},100);if(valid&&options.onSuccess){options.onSuccess()}else if(!valid&&options.onFailure){options.onFailure()}}}else if(element.is('form')||element.hasClass('validationEngineContainer')){element.removeClass('validating')}else{var form=element.closest('form, .validationEngineContainer'),options=(form.data('jqv'))?form.data('jqv'):$.validationEngine.defaults,valid=methods._validateField(element,options);if(valid&&options.onFieldSuccess)
	options.onFieldSuccess();else if(options.onFieldFailure&&options.InvalidFields.length>0){options.onFieldFailure()}}
	if(options.onValidationComplete){return!!options.onValidationComplete(form,valid)}
	return valid},updatePromptsPosition:function(event){if(event&&this==window){var form=event.data.formElem;var noAnimation=event.data.noAnimation}
	else var form=$(this.closest('form, .validationEngineContainer'));var options=form.data('jqv');form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){var field=$(this);if(options.prettySelect&&field.is(":hidden"))
	field=form.find("#"+options.usePrefix+field.attr('id')+options.useSuffix);var prompt=methods._getPrompt(field);var promptText=$(prompt).find(".formErrorContent").html();if(prompt)
	methods._updatePrompt(field,$(prompt),promptText,undefined,!1,options,noAnimation)});return this},showPrompt:function(promptText,type,promptPosition,showArrow){var form=this.closest('form, .validationEngineContainer');var options=form.data('jqv');if(!options)
	options=methods._saveOptions(this,options);if(promptPosition)
	options.promptPosition=promptPosition;options.showArrow=showArrow==!0;methods._showPrompt(this,promptText,type,!1,options);return this},hide:function(){var form=$(this).closest('form, .validationEngineContainer');var options=form.data('jqv');var fadeDuration=(options&&options.fadeDuration)?options.fadeDuration:0.3;var closingtag;if($(this).is("form")||$(this).hasClass("validationEngineContainer")){closingtag="parentForm"+methods._getClassName($(this).attr("id"))}else{closingtag=methods._getClassName($(this).attr("id"))+"formError"}
	$('.'+closingtag).fadeTo(fadeDuration,0.3,function(){$(this).parent('.formErrorOuter').remove();$(this).remove()});return this},hideAll:function(){var form=this;var options=form.data('jqv');var duration=options?options.fadeDuration:300;$('.formError').fadeTo(duration,300,function(){$(this).parent('.formErrorOuter').remove();$(this).remove()});return this},_onFieldEvent:function(event){var field=$(this);var form=field.closest('form, .validationEngineContainer');var options=form.data('jqv');options.eventTrigger="field";window.setTimeout(function(){methods._validateField(field,options);if(options.InvalidFields.length==0&&options.onFieldSuccess){options.onFieldSuccess()}else if(options.InvalidFields.length>0&&options.onFieldFailure){options.onFieldFailure()}},(event.data)?event.data.delay:0)},_onSubmitEvent:function(){var form=$(this);var options=form.data('jqv');if(form.data("jqv_submitButton")){var submitButton=$("#"+form.data("jqv_submitButton"));if(submitButton){if(submitButton.length>0){if(submitButton.hasClass("validate-skip")||submitButton.attr("data-validation-engine-skip")=="true")
	return!0}}}
	options.eventTrigger="submit";var r=methods._validateFields(form);if(r&&options.ajaxFormValidation){methods._validateFormWithAjax(form,options);return!1}
	if(options.onValidationComplete){return!!options.onValidationComplete(form,r)}
	return r},_checkAjaxStatus:function(options){var status=!0;$.each(options.ajaxValidCache,function(key,value){if(!value){status=!1;return!1}});return status},_checkAjaxFieldStatus:function(fieldid,options){return options.ajaxValidCache[fieldid]==!0},_validateFields:function(form){var options=form.data('jqv');var errorFound=!1;form.trigger("jqv.form.validating");var first_err=null;form.find('['+options.validateAttribute+'*=validate]').not(":disabled").each(function(){var field=$(this);var names=[];if($.inArray(field.attr('name'),names)<0){errorFound|=methods._validateField(field,options);if(errorFound&&first_err==null)
	if(field.is(":hidden")&&options.prettySelect)
	first_err=field=form.find("#"+options.usePrefix+methods._jqSelector(field.attr('id'))+options.useSuffix);else first_err=field;if(options.doNotShowAllErrosOnSubmit)
	return!1;names.push(field.attr('name'));if(options.showOneMessage==!0&&errorFound){return!1}}});form.trigger("jqv.form.result",[errorFound]);if(errorFound){if(options.scroll){var destination=first_err.offset().top;var fixleft=first_err.offset().left;var positionType=options.promptPosition;if(typeof(positionType)=='string'&&positionType.indexOf(":")!=-1)
	positionType=positionType.substring(0,positionType.indexOf(":"));if(positionType!="bottomRight"&&positionType!="bottomLeft"){var prompt_err=methods._getPrompt(first_err);if(prompt_err){destination=prompt_err.offset().top}}
	if(options.scrollOffset){destination-=options.scrollOffset}
	if(options.isOverflown){var overflowDIV=$(options.overflownDIV);if(!overflowDIV.length)return!1;var scrollContainerScroll=overflowDIV.scrollTop();var scrollContainerPos=-parseInt(overflowDIV.offset().top);destination+=scrollContainerScroll+scrollContainerPos-5;var scrollContainer=$(options.overflownDIV+":not(:animated)");scrollContainer.animate({scrollTop:destination},1100,function(){if(options.focusFirstField)first_err.focus()})}else{$("html, body").animate({scrollTop:destination},1100,function(){if(options.focusFirstField)first_err.focus()});$("html, body").animate({scrollLeft:fixleft},1100)}}else if(options.focusFirstField)
	first_err.focus();return!1}
	return!0},_validateFormWithAjax:function(form,options){var data=form.serialize();var type=(options.ajaxFormValidationMethod)?options.ajaxFormValidationMethod:"GET";var url=(options.ajaxFormValidationURL)?options.ajaxFormValidationURL:form.attr("action");var dataType=(options.dataType)?options.dataType:"json";$.ajax({type:type,url:url,cache:!1,dataType:dataType,data:data,form:form,methods:methods,options:options,beforeSend:function(){return options.onBeforeAjaxFormValidation(form,options)},error:function(data,transport){methods._ajaxError(data,transport)},success:function(json){if((dataType=="json")&&(json!==!0)){var errorInForm=!1;for(var i=0;i<json.length;i++){var value=json[i];var errorFieldId=value[0];var errorField=$($("#"+errorFieldId)[0]);if(errorField.length==1){var msg=value[2];if(value[1]==!0){if(msg==""||!msg){methods._closePrompt(errorField)}else{if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt)
	msg=txt}
	if(options.showPrompts)methods._showPrompt(errorField,msg,"pass",!1,options,!0)}}else{errorInForm|=!0;if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt)
	msg=txt}
	if(options.showPrompts)methods._showPrompt(errorField,msg,"",!1,options,!0)}}}
	options.onAjaxFormComplete(!errorInForm,form,json,options)}else options.onAjaxFormComplete(!0,form,json,options)}})},_validateField:function(field,options,skipAjaxValidation){if(!field.attr("id")){field.attr("id","form-validation-field-"+$.validationEngine.fieldIdCounter);++$.validationEngine.fieldIdCounter}
	if(!options.validateNonVisibleFields&&(field.is(":hidden")&&!options.prettySelect||field.parent().is(":hidden")))
	return!1;var rulesParsing=field.attr(options.validateAttribute);var getRules=/validate\[(.*)\]/.exec(rulesParsing);if(!getRules)
	return!1;var str=getRules[1];var rules=str.split(/\[|,|\]/);var isAjaxValidator=!1;var fieldName=field.attr("name");var promptText="";var promptType="";var required=!1;var limitErrors=!1;options.isError=!1;options.showArrow=!0;if(options.maxErrorsPerField>0){limitErrors=!0}
	var form=$(field.closest("form, .validationEngineContainer"));for(var i=0;i<rules.length;i++){rules[i]=rules[i].replace(" ","");if(rules[i]===''){delete rules[i]}}
	for(var i=0,field_errors=0;i<rules.length;i++){if(limitErrors&&field_errors>=options.maxErrorsPerField){if(!required){var have_required=$.inArray('required',rules);required=(have_required!=-1&&have_required>=i)}
	break}
	var errorMsg=undefined;switch(rules[i]){case "required":required=!0;errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._required);break;case "custom":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._custom);break;case "groupRequired":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";var firstOfGroup=form.find(classGroup).eq(0);if(firstOfGroup[0]!=field[0]){methods._validateField(firstOfGroup,options,skipAjaxValidation);options.showArrow=!0}
	errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._groupRequired);if(errorMsg)required=!0;options.showArrow=!1;break;case "ajax":errorMsg=methods._ajax(field,rules,i,options);if(errorMsg){promptType="load"}
	break;case "minSize":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._minSize);break;case "maxSize":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._maxSize);break;case "min":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._min);break;case "max":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._max);break;case "past":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._past);break;case "future":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._future);break;case "dateRange":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";options.firstOfGroup=form.find(classGroup).eq(0);options.secondOfGroup=form.find(classGroup).eq(1);if(options.firstOfGroup[0].value||options.secondOfGroup[0].value){errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._dateRange)}
	if(errorMsg)required=!0;options.showArrow=!1;break;case "dateTimeRange":var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";options.firstOfGroup=form.find(classGroup).eq(0);options.secondOfGroup=form.find(classGroup).eq(1);if(options.firstOfGroup[0].value||options.secondOfGroup[0].value){errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._dateTimeRange)}
	if(errorMsg)required=!0;options.showArrow=!1;break;case "maxCheckbox":field=$(form.find("input[name='"+fieldName+"']"));errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._maxCheckbox);break;case "minCheckbox":field=$(form.find("input[name='"+fieldName+"']"));errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._minCheckbox);break;case "equals":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._equals);break;case "funcCall":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._funcCall);break;case "creditCard":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._creditCard);break;case "condRequired":errorMsg=methods._getErrorMessage(form,field,rules[i],rules,i,options,methods._condRequired);if(errorMsg!==undefined){required=!0}
	break;default:}
	var end_validation=!1;if(typeof errorMsg=="object"){switch(errorMsg.status){case "_break":end_validation=!0;break;case "_error":errorMsg=errorMsg.message;break;case "_error_no_prompt":return!0;break;default:break}}
	if(end_validation){break}
	if(typeof errorMsg=='string'){promptText+=errorMsg+"<br/>";options.isError=!0;field_errors++}}
	if(!required&&!(field.val())&&field.val().length<1)options.isError=!1;var fieldType=field.prop("type");var positionType=field.data("promptPosition")||options.promptPosition;if((fieldType=="radio"||fieldType=="checkbox")&&form.find("input[name='"+fieldName+"']").size()>1){if(positionType==='inline'){field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:last"))}else{field=$(form.find("input[name='"+fieldName+"'][type!=hidden]:first"))}
	options.showArrow=!1}
	if(field.is(":hidden")&&options.prettySelect){field=form.find("#"+options.usePrefix+methods._jqSelector(field.attr('id'))+options.useSuffix)}
	if(options.isError&&options.showPrompts){methods._showPrompt(field,promptText,promptType,!1,options)}else{if(!isAjaxValidator)methods._closePrompt(field)}
	if(!isAjaxValidator){field.trigger("jqv.field.result",[field,options.isError,promptText])}
	var errindex=$.inArray(field[0],options.InvalidFields);if(errindex==-1){if(options.isError)
	options.InvalidFields.push(field[0])}else if(!options.isError){options.InvalidFields.splice(errindex,1)}
	methods._handleStatusCssClasses(field,options);if(options.isError&&options.onFieldFailure)
	options.onFieldFailure(field);if(!options.isError&&options.onFieldSuccess)
	options.onFieldSuccess(field);return options.isError},_handleStatusCssClasses:function(field,options){if(options.addSuccessCssClassToField)
	field.removeClass(options.addSuccessCssClassToField);if(options.addFailureCssClassToField)
	field.removeClass(options.addFailureCssClassToField);if(options.addSuccessCssClassToField&&!options.isError)
	field.addClass(options.addSuccessCssClassToField);if(options.addFailureCssClassToField&&options.isError)
	field.addClass(options.addFailureCssClassToField)},_getErrorMessage:function(form,field,rule,rules,i,options,originalValidationMethod){var rule_index=jQuery.inArray(rule,rules);if(rule==="custom"||rule==="funcCall"){var custom_validation_type=rules[rule_index+1];rule=rule+"["+custom_validation_type+"]";delete(rules[rule_index])}
	var alteredRule=rule;var element_classes=(field.attr("data-validation-engine"))?field.attr("data-validation-engine"):field.attr("class");var element_classes_array=element_classes.split(" ");var errorMsg;if(rule=="future"||rule=="past"||rule=="maxCheckbox"||rule=="minCheckbox"){errorMsg=originalValidationMethod(form,field,rules,i,options)}else{errorMsg=originalValidationMethod(field,rules,i,options)}
	if(errorMsg!=undefined){var custom_message=methods._getCustomErrorMessage($(field),element_classes_array,alteredRule,options);if(custom_message)errorMsg=custom_message}
	return errorMsg},_getCustomErrorMessage:function(field,classes,rule,options){var custom_message=!1;var validityProp=methods._validityProp[rule];if(validityProp!=undefined){custom_message=field.attr("data-errormessage-"+validityProp);if(custom_message!=undefined)
	return custom_message}
	custom_message=field.attr("data-errormessage");if(custom_message!=undefined)
	return custom_message;var id='#'+field.attr("id");if(typeof options.custom_error_messages[id]!="undefined"&&typeof options.custom_error_messages[id][rule]!="undefined"){custom_message=options.custom_error_messages[id][rule].message}else if(classes.length>0){for(var i=0;i<classes.length&&classes.length>0;i++){var element_class="."+classes[i];if(typeof options.custom_error_messages[element_class]!="undefined"&&typeof options.custom_error_messages[element_class][rule]!="undefined"){custom_message=options.custom_error_messages[element_class][rule].message;break}}}
	if(!custom_message&&typeof options.custom_error_messages[rule]!="undefined"&&typeof options.custom_error_messages[rule].message!="undefined"){custom_message=options.custom_error_messages[rule].message}
	return custom_message},_validityProp:{"required":"value-missing","custom":"custom-error","groupRequired":"value-missing","ajax":"custom-error","minSize":"range-underflow","maxSize":"range-overflow","min":"range-underflow","max":"range-overflow","past":"type-mismatch","future":"type-mismatch","dateRange":"type-mismatch","dateTimeRange":"type-mismatch","maxCheckbox":"range-overflow","minCheckbox":"range-underflow","equals":"pattern-mismatch","funcCall":"custom-error","creditCard":"pattern-mismatch","condRequired":"value-missing"},_required:function(field,rules,i,options,condRequired){switch(field.prop("type")){case "text":case "password":case "textarea":case "file":case "select-one":case "select-multiple":default:var field_val=$.trim(field.val());var dv_placeholder=$.trim(field.attr("data-validation-placeholder"));var placeholder=$.trim(field.attr("placeholder"));if((!field_val)||(dv_placeholder&&field_val==dv_placeholder)||(placeholder&&field_val==placeholder)){return options.allrules[rules[i]].alertText}
	break;case "radio":case "checkbox":if(condRequired){if(!field.attr('checked')){return options.allrules[rules[i]].alertTextCheckboxMultiple}
	break}
	var form=field.closest("form, .validationEngineContainer");var name=field.attr("name");if(form.find("input[name='"+name+"']:checked").size()==0){if(form.find("input[name='"+name+"']:visible").size()==1)
	return options.allrules[rules[i]].alertTextCheckboxe;else return options.allrules[rules[i]].alertTextCheckboxMultiple}
	break}},_groupRequired:function(field,rules,i,options){var classGroup="["+options.validateAttribute+"*="+rules[i+1]+"]";var isValid=!1;field.closest("form, .validationEngineContainer").find(classGroup).each(function(){if(!methods._required($(this),rules,i,options)){isValid=!0;return!1}});if(!isValid){return options.allrules[rules[i]].alertText}},_custom:function(field,rules,i,options){var customRule=rules[i+1];var rule=options.allrules[customRule];var fn;if(!rule){alert("jqv:custom rule not found - "+customRule);return}
	if(rule.regex){var ex=rule.regex;if(!ex){alert("jqv:custom regex not found - "+customRule);return}
	var pattern=new RegExp(ex);if(!pattern.test(field.val()))return options.allrules[customRule].alertText}else if(rule.func){fn=rule.func;if(typeof(fn)!=="function"){alert("jqv:custom parameter 'function' is no function - "+customRule);return}
	if(!fn(field,rules,i,options))
	return options.allrules[customRule].alertText}else{alert("jqv:custom type not allowed "+customRule);return}},_funcCall:function(field,rules,i,options){var functionName=rules[i+1];var fn;if(functionName.indexOf('.')>-1)
	{var namespaces=functionName.split('.');var scope=window;while(namespaces.length)
	{scope=scope[namespaces.shift()]}
	fn=scope}
	else fn=window[functionName]||options.customFunctions[functionName];if(typeof(fn)=='function')
	return fn(field,rules,i,options)},_equals:function(field,rules,i,options){var equalsField=rules[i+1];if(field.val()!=$("#"+equalsField).val())
	return options.allrules.equals.alertText},_maxSize:function(field,rules,i,options){var max=rules[i+1];var len=field.val().length;if(len>max){var rule=options.allrules.maxSize;return rule.alertText+max+rule.alertText2}},_minSize:function(field,rules,i,options){var min=rules[i+1];var len=field.val().length;if(len<min){var rule=options.allrules.minSize;return rule.alertText+min+rule.alertText2}},_min:function(field,rules,i,options){var min=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len<min){var rule=options.allrules.min;if(rule.alertText2)return rule.alertText+min+rule.alertText2;return rule.alertText+min}},_max:function(field,rules,i,options){var max=parseFloat(rules[i+1]);var len=parseFloat(field.val());if(len>max){var rule=options.allrules.max;if(rule.alertText2)return rule.alertText+max+rule.alertText2;return rule.alertText+max}},_past:function(form,field,rules,i,options){var p=rules[i+1];var fieldAlt=$(form.find("input[name='"+p.replace(/^#+/,'')+"']"));var pdate;if(p.toLowerCase()=="now"){pdate=new Date()}else if(undefined!=fieldAlt.val()){if(fieldAlt.is(":disabled"))
	return;pdate=methods._parseDate(fieldAlt.val())}else{pdate=methods._parseDate(p)}
	var vdate=methods._parseDate(field.val());if(vdate>pdate){var rule=options.allrules.past;if(rule.alertText2)return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate)}},_future:function(form,field,rules,i,options){var p=rules[i+1];var fieldAlt=$(form.find("input[name='"+p.replace(/^#+/,'')+"']"));var pdate;if(p.toLowerCase()=="now"){pdate=new Date()}else if(undefined!=fieldAlt.val()){if(fieldAlt.is(":disabled"))
	return;pdate=methods._parseDate(fieldAlt.val())}else{pdate=methods._parseDate(p)}
	var vdate=methods._parseDate(field.val());if(vdate<pdate){var rule=options.allrules.future;if(rule.alertText2)
	return rule.alertText+methods._dateToString(pdate)+rule.alertText2;return rule.alertText+methods._dateToString(pdate)}},_isDate:function(value){var dateRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(?:(?:0?[1-9]|1[0-2])(\/|-)(?:0?[1-9]|1\d|2[0-8]))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^(0?2(\/|-)29)(\/|-)(?:(?:0[48]00|[13579][26]00|[2468][048]00)|(?:\d\d)?(?:0[48]|[2468][048]|[13579][26]))$/);return dateRegEx.test(value)},_isDateTime:function(value){var dateTimeRegEx=new RegExp(/^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1}$|^(?:(?:(?:0?[13578]|1[02])(\/|-)31)|(?:(?:0?[1,3-9]|1[0-2])(\/|-)(?:29|30)))(\/|-)(?:[1-9]\d\d\d|\d[1-9]\d\d|\d\d[1-9]\d|\d\d\d[1-9])$|^((1[012]|0?[1-9]){1}\/(0?[1-9]|[12][0-9]|3[01]){1}\/\d{2,4}\s+(1[012]|0?[1-9]){1}:(0?[1-5]|[0-6][0-9]){1}:(0?[0-6]|[0-6][0-9]){1}\s+(am|pm|AM|PM){1})$/);return dateTimeRegEx.test(value)},_dateCompare:function(start,end){return(new Date(start.toString())<new Date(end.toString()))},_dateRange:function(field,rules,i,options){if((!options.firstOfGroup[0].value&&options.secondOfGroup[0].value)||(options.firstOfGroup[0].value&&!options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}
	if(!methods._isDate(options.firstOfGroup[0].value)||!methods._isDate(options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}
	if(!methods._dateCompare(options.firstOfGroup[0].value,options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}},_dateTimeRange:function(field,rules,i,options){if((!options.firstOfGroup[0].value&&options.secondOfGroup[0].value)||(options.firstOfGroup[0].value&&!options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}
	if(!methods._isDateTime(options.firstOfGroup[0].value)||!methods._isDateTime(options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}
	if(!methods._dateCompare(options.firstOfGroup[0].value,options.secondOfGroup[0].value)){return options.allrules[rules[i]].alertText+options.allrules[rules[i]].alertText2}},_maxCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize>nbCheck){options.showArrow=!1;if(options.allrules.maxCheckbox.alertText2)
	return options.allrules.maxCheckbox.alertText+" "+nbCheck+" "+options.allrules.maxCheckbox.alertText2;return options.allrules.maxCheckbox.alertText}},_minCheckbox:function(form,field,rules,i,options){var nbCheck=rules[i+1];var groupname=field.attr("name");var groupSize=form.find("input[name='"+groupname+"']:checked").size();if(groupSize<nbCheck){options.showArrow=!1;return options.allrules.minCheckbox.alertText+" "+nbCheck+" "+options.allrules.minCheckbox.alertText2}},_creditCard:function(field,rules,i,options){var valid=!1,cardNumber=field.val().replace(/ +/g,'').replace(/-+/g,'');var numDigits=cardNumber.length;if(numDigits>=14&&numDigits<=16&&parseInt(cardNumber)>0){var sum=0,i=numDigits-1,pos=1,digit,luhn=new String();do{digit=parseInt(cardNumber.charAt(i));luhn+=(pos++%2==0)?digit*2:digit}while(--i>=0)
	for(i=0;i<luhn.length;i++){sum+=parseInt(luhn.charAt(i))}
	valid=sum%10==0}
	if(!valid)return options.allrules.creditCard.alertText},_ajax:function(field,rules,i,options){var errorSelector=rules[i+1];var rule=options.allrules[errorSelector];var extraData=rule.extraData;var extraDataDynamic=rule.extraDataDynamic;var data={"fieldId":field.attr("id"),"fieldValue":field.val()};if(typeof extraData==="object"){$.extend(data,extraData)}else if(typeof extraData==="string"){var tempData=extraData.split("&");for(var i=0;i<tempData.length;i++){var values=tempData[i].split("=");if(values[0]&&values[0]){data[values[0]]=values[1]}}}
	if(extraDataDynamic){var tmpData=[];var domIds=String(extraDataDynamic).split(",");for(var i=0;i<domIds.length;i++){var id=domIds[i];if($(id).length){var inputValue=field.closest("form, .validationEngineContainer").find(id).val();var keyValue=id.replace('#','')+'='+escape(inputValue);data[id.replace('#','')]=inputValue}}}
	if(options.eventTrigger=="field"){delete(options.ajaxValidCache[field.attr("id")])}
	if(!options.isError&&!methods._checkAjaxFieldStatus(field.attr("id"),options)){$.ajax({type:options.ajaxFormValidationMethod,url:rule.url,cache:!1,dataType:"json",data:data,field:field,rule:rule,methods:methods,options:options,beforeSend:function(){},error:function(data,transport){methods._ajaxError(data,transport)},success:function(json){var errorFieldId=json[0];var errorField=$("#"+errorFieldId).eq(0);if(errorField.length==1){var status=json[1];var msg=json[2];if(!status){options.ajaxValidCache[errorFieldId]=!1;options.isError=!0;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertText;if(txt){msg=txt}}}
	else msg=rule.alertText;if(options.showPrompts)methods._showPrompt(errorField,msg,"",!0,options)}else{options.ajaxValidCache[errorFieldId]=!0;if(msg){if(options.allrules[msg]){var txt=options.allrules[msg].alertTextOk;if(txt){msg=txt}}}
	else msg=rule.alertTextOk;if(options.showPrompts){if(msg)
	methods._showPrompt(errorField,msg,"pass",!0,options);else methods._closePrompt(errorField)}
	if(options.eventTrigger=="submit")
	field.closest("form").submit()}}
	errorField.trigger("jqv.field.result",[errorField,options.isError,msg])}});return rule.alertTextLoad}},_ajaxError:function(data,transport){if(data.status==0&&transport==null)
	alert("The page is not served from a server! ajax call failed");else if(typeof console!="undefined")
	console.log("Ajax error: "+data.status+" "+transport)},_dateToString:function(date){return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate()},_parseDate:function(d){var dateParts=d.split("-");if(dateParts==d)
	dateParts=d.split("/");if(dateParts==d){dateParts=d.split(".");return new Date(dateParts[2],(dateParts[1]-1),dateParts[0])}
	return new Date(dateParts[0],(dateParts[1]-1),dateParts[2])},_showPrompt:function(field,promptText,type,ajaxed,options,ajaxform){var prompt=methods._getPrompt(field);if(ajaxform)prompt=!1;if($.trim(promptText)){if(prompt)
	methods._updatePrompt(field,prompt,promptText,type,ajaxed,options);else methods._buildPrompt(field,promptText,type,ajaxed,options)}},_buildPrompt:function(field,promptText,type,ajaxed,options){var prompt=$('<div>');prompt.addClass(methods._getClassName(field.attr("id"))+"formError");prompt.addClass("parentForm"+methods._getClassName(field.closest('form, .validationEngineContainer').attr("id")));prompt.addClass("formError");switch(type){case "pass":prompt.addClass("greenPopup");break;case "load":prompt.addClass("blackPopup");break;default:}
	if(ajaxed)
	prompt.addClass("ajaxed");var promptContent=$('<div>').addClass("formErrorContent").html(promptText).appendTo(prompt);var positionType=field.data("promptPosition")||options.promptPosition;if(options.showArrow){var arrow=$('<div>').addClass("formErrorArrow");if(typeof(positionType)=='string')
	{var pos=positionType.indexOf(":");if(pos!=-1)
	positionType=positionType.substring(0,pos)}
	switch(positionType){case "bottomLeft":case "bottomRight":prompt.find(".formErrorContent").before(arrow);arrow.addClass("formErrorArrowBottom").html('<div class="line1"><!-- --></div><div class="line2"><!-- --></div><div class="line3"><!-- --></div><div class="line4"><!-- --></div><div class="line5"><!-- --></div><div class="line6"><!-- --></div><div class="line7"><!-- --></div><div class="line8"><!-- --></div><div class="line9"><!-- --></div><div class="line10"><!-- --></div>');break;case "topLeft":case "topRight":arrow.html('<div class="line10"><!-- --></div><div class="line9"><!-- --></div><div class="line8"><!-- --></div><div class="line7"><!-- --></div><div class="line6"><!-- --></div><div class="line5"><!-- --></div><div class="line4"><!-- --></div><div class="line3"><!-- --></div><div class="line2"><!-- --></div><div class="line1"><!-- --></div>');prompt.append(arrow);break}}
	if(options.addPromptClass)
	prompt.addClass(options.addPromptClass);var requiredOverride=field.attr('data-required-class');if(requiredOverride!==undefined){prompt.addClass(requiredOverride)}else{if(options.prettySelect){if($('#'+field.attr('id')).next().is('select')){var prettyOverrideClass=$('#'+field.attr('id').substr(options.usePrefix.length).substring(options.useSuffix.length)).attr('data-required-class');if(prettyOverrideClass!==undefined){prompt.addClass(prettyOverrideClass)}}}}
	prompt.css({"opacity":0});if(positionType==='inline'){prompt.addClass("inline");if(typeof field.attr('data-prompt-target')!=='undefined'&&$('#'+field.attr('data-prompt-target')).length>0){prompt.appendTo($('#'+field.attr('data-prompt-target')))}else{field.after(prompt)}}else{field.before(prompt)}
	var pos=methods._calculatePosition(field,prompt,options);prompt.css({'position':positionType==='inline'?'relative':'absolute',"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize,"opacity":0}).data("callerField",field);if(options.autoHidePrompt){setTimeout(function(){prompt.animate({"opacity":0},function(){prompt.closest('.formErrorOuter').remove();prompt.remove()})},options.autoHideDelay)}
	return prompt.animate({"opacity":0.87})},_updatePrompt:function(field,prompt,promptText,type,ajaxed,options,noAnimation){if(prompt){if(typeof type!=="undefined"){if(type=="pass")
	prompt.addClass("greenPopup");else prompt.removeClass("greenPopup");if(type=="load")
	prompt.addClass("blackPopup");else prompt.removeClass("blackPopup")}
	if(ajaxed)
	prompt.addClass("ajaxed");else prompt.removeClass("ajaxed");prompt.find(".formErrorContent").html(promptText);var pos=methods._calculatePosition(field,prompt,options);var css={"top":pos.callerTopPosition,"left":pos.callerleftPosition,"marginTop":pos.marginTopSize};if(noAnimation)
	prompt.css(css);else prompt.animate(css)}},_closePrompt:function(field){var prompt=methods._getPrompt(field);if(prompt)
	prompt.fadeTo("fast",0,function(){prompt.parent('.formErrorOuter').remove();prompt.remove()})},closePrompt:function(field){return methods._closePrompt(field)},_getPrompt:function(field){var formId=$(field).closest('form, .validationEngineContainer').attr('id');var className=methods._getClassName(field.attr("id"))+"formError";var match=$("."+methods._escapeExpression(className)+'.parentForm'+formId)[0];if(match)
	return $(match)},_escapeExpression:function(selector){return selector.replace(/([#;&,\.\+\*\~':"\!\^$\[\]\(\)=>\|])/g,"\\$1")},isRTL:function(field)
	{var $document=$(document);var $body=$('body');var rtl=(field&&field.hasClass('rtl'))||(field&&(field.attr('dir')||'').toLowerCase()==='rtl')||$document.hasClass('rtl')||($document.attr('dir')||'').toLowerCase()==='rtl'||$body.hasClass('rtl')||($body.attr('dir')||'').toLowerCase()==='rtl';return Boolean(rtl)},_calculatePosition:function(field,promptElmt,options){var promptTopPosition,promptleftPosition,marginTopSize;var fieldWidth=field.width();var fieldLeft=field.position().left;var fieldTop=field.position().top;var fieldHeight=field.height();var promptHeight=promptElmt.height();promptTopPosition=promptleftPosition=0;marginTopSize=-promptHeight;var positionType=field.data("promptPosition")||options.promptPosition;var shift1="";var shift2="";var shiftX=0;var shiftY=0;if(typeof(positionType)=='string'){if(positionType.indexOf(":")!=-1){shift1=positionType.substring(positionType.indexOf(":")+1);positionType=positionType.substring(0,positionType.indexOf(":"));if(shift1.indexOf(",")!=-1){shift2=shift1.substring(shift1.indexOf(",")+1);shift1=shift1.substring(0,shift1.indexOf(","));shiftY=parseInt(shift2);if(isNaN(shiftY))shiftY=0};shiftX=parseInt(shift1);if(isNaN(shift1))shift1=0}};switch(positionType){default:case "topRight":promptleftPosition+=fieldLeft+fieldWidth-30;promptTopPosition+=fieldTop;break;case "topLeft":promptTopPosition+=fieldTop;promptleftPosition+=fieldLeft;break;case "centerRight":promptTopPosition=fieldTop+4;marginTopSize=0;promptleftPosition=fieldLeft+field.outerWidth(!0)+5;break;case "centerLeft":promptleftPosition=fieldLeft-(promptElmt.width()+2);promptTopPosition=fieldTop+4;marginTopSize=0;break;case "bottomLeft":promptTopPosition=fieldTop+field.height()+5;marginTopSize=0;promptleftPosition=fieldLeft;break;case "bottomRight":promptleftPosition=fieldLeft+fieldWidth-30;promptTopPosition=fieldTop+field.height()+5;marginTopSize=0;break;case "inline":promptleftPosition=0;promptTopPosition=0;marginTopSize=0};promptleftPosition+=shiftX;promptTopPosition+=shiftY;return{"callerTopPosition":promptTopPosition+"px","callerleftPosition":promptleftPosition+"px","marginTopSize":marginTopSize+"px"}},_saveOptions:function(form,options){if($.validationEngineLanguage)
	var allRules=$.validationEngineLanguage.allRules;else $.error("jQuery.validationEngine rules are not loaded, plz add localization files to the page");$.validationEngine.defaults.allrules=allRules;var userOptions=$.extend(!0,{},$.validationEngine.defaults,options);form.data('jqv',userOptions);return userOptions},_getClassName:function(className){if(className)
	return className.replace(/:/g,"_").replace(/\./g,"_")},_jqSelector:function(str){return str.replace(/([;&,\.\+\*\~':"\!\^#$%@\[\]\(\)=>\|])/g,'\\$1')},_condRequired:function(field,rules,i,options){var idx,dependingField;for(idx=(i+1);idx<rules.length;idx++){dependingField=jQuery("#"+rules[idx]).first();if(dependingField.length&&methods._required(dependingField,["required"],0,options,!0)==undefined){return methods._required(field,["required"],0,options)}}},_submitButtonClick:function(event){var button=$(this);var form=button.closest('form, .validationEngineContainer');form.data("jqv_submitButton",button.attr("id"))}};$.fn.validationEngine=function(method){var form=$(this);if(!form[0])return form;if(typeof(method)=='string'&&method.charAt(0)!='_'&&methods[method]){if(method!="showPrompt"&&method!="hide"&&method!="hideAll")
	methods.init.apply(form);return methods[method].apply(form,Array.prototype.slice.call(arguments,1))}else if(typeof method=='object'||!method){methods.init.apply(form,arguments);return methods.attach.apply(form)}else{$.error('Method '+method+' does not exist in jQuery.validationEngine')}};$.validationEngine={fieldIdCounter:0,defaults:{validationEventTrigger:"blur",scroll:!0,focusFirstField:!0,showPrompts:!0,validateNonVisibleFields:!1,promptPosition:"topRight",bindMethod:"bind",inlineAjax:!1,ajaxFormValidation:!1,ajaxFormValidationURL:!1,ajaxFormValidationMethod:'get',onAjaxFormComplete:$.noop,onBeforeAjaxFormValidation:$.noop,onValidationComplete:!1,doNotShowAllErrosOnSubmit:!1,custom_error_messages:{},binded:!0,showArrow:!0,isError:!1,maxErrorsPerField:!1,ajaxValidCache:{},autoPositionUpdate:!1,InvalidFields:[],onFieldSuccess:!1,onFieldFailure:!1,onSuccess:!1,onFailure:!1,validateAttribute:"class",addSuccessCssClassToField:"",addFailureCssClassToField:"",autoHidePrompt:!1,autoHideDelay:10000,fadeDuration:0.3,prettySelect:!1,addPromptClass:"",usePrefix:"",useSuffix:"",showOneMessage:!1}};$(function(){$.validationEngine.defaults.promptPosition=methods.isRTL()?'topLeft':"topRight"})})(jQuery);function version_compare(t,i){if(t===i)return 0;for(var a=t.split("."),n=i.split("."),l=Math.min(a.length,n.length),e=0;l>e;e++){if(parseInt(a[e])>parseInt(n[e]))return 1;if(parseInt(a[e])<parseInt(n[e]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}jQuery(function(t){void 0===t.fn.on&&(t.fn.on=function(i,a,n,l){return"function"==typeof a?t(this.context).live(i,a):t(a).live(i,n,l),this}),t(document).on("click",".showerrors",function(){return t(".xdetailed-errors").toggle(),!1}),t(document).on("click",".shownotices",function(){return t(".xdetailed-updated").toggle(),!1}),t("form.widget_wysija").on("focus","input[placeholder]",function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")}),t("form.widget_wysija").on("blur","input[placeholder]",function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").on("focus","input.defaultlabels",function(){t(this).val()===t(this).attr("title")&&t(this).val("")}),t("form.widget_wysija").on("blur","input.defaultlabels",function(){""===t(this).val()&&t(this).val(t(this).attr("title"))}),t(document).on("submit","form.widget_wysija",function(i){if(i.preventDefault(),void 0!==wysijaAJAX.noajax)return t(this).validationEngine("validate");if(t(this).validationEngine("validate")===!0){var a=t(this).find('input[name="action"]').val(),n=t(this).find('input[name="controller"]').val(),l=t(this).attr("id"),e=t(this).serializeArray();wysijaAJAX.task=a,wysijaAJAX.controller=n,wysijaAJAX.formid=l,t.each(e,function(t,i){wysijaAJAX["data["+t+"][name]"]=i.name,wysijaAJAX["data["+t+"][value]"]=i.value}),t("#msg-"+l).html('<div class="allmsgs"><blink>'+wysijaAJAX.loadingTrans+"</blink></div>"),t("#"+l).fadeOut(),t.ajax({type:"post",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(i){t("#msg-"+l).html('<div class="allmsgs"></div>'),i.result||t("#"+l).fadeIn(),t.each(i.msgs,function(i,a){t("#msg-"+l+" .allmsgs ."+i+" ul").length||t("#msg-"+l+" .allmsgs").append('<div class="'+i+'"><ul></ul></div>'),t.each(a,function(a,n){t("#msg-"+l+" .allmsgs ."+i+" ul").append("<li>"+n+"</li>")})})},error:function(i,a,n){t("#msg-"+l).html('<div class="allmsgs"></div>'),t("#msg-"+l+" .allmsgs").html('<div class="error"><ul><li>Oops! There is a problem with this form:</li><li>textStatus:'+a+"</li><li>errorThrown:"+n+"</li><li>responseText:"+i.responseText+"</li></ul></div>")},dataType:"jsonp"})}return!1}),t(function(){var i="centerRight";wysijaAJAX.is_rtl&&(i="centerLeft"),t("form.widget_wysija").validationEngine("attach",{promptPosition:i,scroll:!1}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input[placeholder]").each(function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")})}),t("form.widget_wysija").find("input[placeholder]").each(function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input.defaultlabels").each(function(){t(this).val()===t(this).attr("title")&&t(this).val("")})}),t("form.widget_wysija").find("input.defaultlabels").each(function(){""===t(this).val()&&t(this).val(t(this).attr("title"))})})})
	//MAILPOET WIDGET
	function version_compare(t,i){if(t===i)return 0;for(var a=t.split("."),n=i.split("."),l=Math.min(a.length,n.length),e=0;l>e;e++){if(parseInt(a[e])>parseInt(n[e]))return 1;if(parseInt(a[e])<parseInt(n[e]))return-1}return a.length>n.length?1:a.length<n.length?-1:0}jQuery(function(t){void 0===t.fn.on&&(t.fn.on=function(i,a,n,l){return"function"==typeof a?t(this.context).live(i,a):t(a).live(i,n,l),this}),t(document).on("click",".showerrors",function(){return t(".xdetailed-errors").toggle(),!1}),t(document).on("click",".shownotices",function(){return t(".xdetailed-updated").toggle(),!1}),t("form.widget_wysija").on("focus","input[placeholder]",function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")}),t("form.widget_wysija").on("blur","input[placeholder]",function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").on("focus","input.defaultlabels",function(){t(this).val()===t(this).attr("title")&&t(this).val("")}),t("form.widget_wysija").on("blur","input.defaultlabels",function(){""===t(this).val()&&t(this).val(t(this).attr("title"))}),t(document).on("submit","form.widget_wysija",function(i){if(i.preventDefault(),void 0!==wysijaAJAX.noajax)return t(this).validationEngine("validate");if(t(this).validationEngine("validate")===!0){var a=t(this).find('input[name="action"]').val(),n=t(this).find('input[name="controller"]').val(),l=t(this).attr("id"),e=t(this).serializeArray();wysijaAJAX.task=a,wysijaAJAX.controller=n,wysijaAJAX.formid=l,t.each(e,function(t,i){wysijaAJAX["data["+t+"][name]"]=i.name,wysijaAJAX["data["+t+"][value]"]=i.value}),t("#msg-"+l).html('<div class="allmsgs"><blink>'+wysijaAJAX.loadingTrans+"</blink></div>"),t("#"+l).fadeOut(),t.ajax({type:"post",url:wysijaAJAX.ajaxurl,data:wysijaAJAX,success:function(i){t("#msg-"+l).html('<div class="allmsgs"></div>'),i.result||t("#"+l).fadeIn(),t.each(i.msgs,function(i,a){t("#msg-"+l+" .allmsgs ."+i+" ul").length||t("#msg-"+l+" .allmsgs").append('<div class="'+i+'"><ul></ul></div>'),t.each(a,function(a,n){t("#msg-"+l+" .allmsgs ."+i+" ul").append("<li>"+n+"</li>")})})},error:function(i,a,n){t("#msg-"+l).html('<div class="allmsgs"></div>'),t("#msg-"+l+" .allmsgs").html('<div class="error"><ul><li>Oops! There is a problem with this form:</li><li>textStatus:'+a+"</li><li>errorThrown:"+n+"</li><li>responseText:"+i.responseText+"</li></ul></div>")},dataType:"jsonp"})}return!1}),t(function(){var i="centerRight";wysijaAJAX.is_rtl&&(i="centerLeft"),t("form.widget_wysija").validationEngine("attach",{promptPosition:i,scroll:!1}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input[placeholder]").each(function(){t(this).val()===t(this).attr("placeholder")&&t(this).val("")})}),t("form.widget_wysija").find("input[placeholder]").each(function(){""===t(this).val()&&t(this).val(t(this).attr("placeholder"))}),t("form.widget_wysija").bind("jqv.form.validating",function(){t(this).find("input.defaultlabels").each(function(){t(this).val()===t(this).attr("title")&&t(this).val("")})}),t("form.widget_wysija").find("input.defaultlabels").each(function(){""===t(this).val()&&t(this).val(t(this).attr("title"))})})});


}


if (typeof wTwitter !== "undefined") {
	

/////////////MODULO TWITTER
$(document).ready(function() {

	JQTWEET = {
	     
	    // Set twitter hash/user, number of tweets & id/class to append tweets
	    // You need to clear tweet-date.txt before toggle between hash and user
	    // for multiple hashtags, you can separate the hashtag with OR, eg:
		// hash: '%23jquery OR %23css'			    
		//{AVATAR}
	    search: '', //leave this blank if you want to show user's tweet
	    user: 'diegooreyh', //username 
	    numTweets: 10, //number of tweets
	    appendTo: '#jstwitter', 
		cacheExpiry: 1, //get the new cache in 2 hours
	    template: '<div class="item"><a href="{URL}" target="_blank"><img id="avatar" src="https://www.diegorey.es/img/cached/diego-avatar.jpg"/></a><div class="tweet-wrapper"><span class="user">@{USER}</span><br/><span class="text">{TEXT}</span>\
	               <span class="time"><a href="{URL}" target="_blank">{AGO}</a></span></div></div>',
	     //{IMG}
	    // core function of jqtweet
	    // https://dev.twitter.com/docs/using-search
	    loadTweets: function() {

	        var request;
	         
	        // different JSON request {hash|user}
	        if (JQTWEET.search) {
            request = {
				q: JQTWEET.search,
				count: JQTWEET.numTweets,
				expiry: JQTWEET.cacheExpiry,	
                api: 'search_tweets'
            }
	        } else {
            request = {
                q: JQTWEET.user,
				count: JQTWEET.numTweets,
				expiry: JQTWEET.cacheExpiry, 
                api: 'statuses_userTimeline'
            }
	        }

	        $.ajax({
	            url: 'https://www.diegorey.es/wp-content/themes/blankslate/twitter/grabtweets.php',
	            type: 'POST',
	            dataType: 'json',
	            data: request,
	            success: function(data, textStatus, xhr) {
		            
		            if (data.httpstatus == 200) {
		            	if (JQTWEET.search) data = data.statuses;

	                var text, name, img;	         
	                	                
	                try {
	                  // append tweets into page
	                  for (var i = 0; i < JQTWEET.numTweets; i++) {		
	                  
	                    img = '';
	                    url = 'http://twitter.com/' + data[i].user.screen_name + '/status/' + data[i].id_str;
	                    try {
	                      if (data[i].entities['media']) {
	                        img = '<a href="' + url + '" target="_blank"><img src="' + data[i].entities['media'][0].media_url + '" /></a>';
	                      }
	                    } catch (e) {  
	                      //no media
	                    }
	                  
	                    $(JQTWEET.appendTo).append( JQTWEET.template.replace('{TEXT}', JQTWEET.ify.clean(data[i].text) )
	                        .replace('{USER}', data[i].user.screen_name)
	                        .replace('{IMG}', img)                                
	                        .replace('{AGO}', JQTWEET.timeAgo(data[i].created_at) )
							.replace('{URL}', url )
							.replace('{AVATAR}', data[i].user.profile_image_url )				                            
	                        );
	                  }
                  
                  } catch (e) {
	                  //item is less than item count
                  }
                  
		                if (JQTWEET.useGridalicious) {                
			                //run grid-a-licious
											$(JQTWEET.appendTo).gridalicious({
												gutter: 13, 
												width: 200, 
												animate: true
											});	                   
										}                  
	                    
	               } else alert('no data returned');
	             
	            }   
	 
	        });
	 
	    }, 
	     
	         
	    /**
	      * relative time calculator FROM TWITTER
	      * @param {string} twitter date string returned from Twitter API
	      * @return {string} relative time like "2 minutes ago"
	      */
	    timeAgo: function(dateString) {
	        var rightNow = new Date();
	        var then = new Date(dateString);
	         
	        if ($.browser.msie) {
	            // IE can't parse these crazy Ruby dates
	            then = Date.parse(dateString.replace(/( \+)/, ' UTC$1'));
	        }
	 
	        var diff = rightNow - then;
	 
	        var second = 1000,
	        minute = second * 60,
	        hour = minute * 60,
	        day = hour * 24,
	        week = day * 7;
	 
	        if (isNaN(diff) || diff < 0) {
	            return ""; // return blank string if unknown
	        }
	 
	        if (diff < second * 2) {
	            // within 2 seconds
	            return "right now";
	        }
	 
	        if (diff < minute) {
	            return Math.floor(diff / second) + " seconds ago";
	        }
	 
	        if (diff < minute * 2) {
	            return "about 1 minute ago";
	        }
	 
	        if (diff < hour) {
	            return Math.floor(diff / minute) + " minutes ago";
	        }
	 
	        if (diff < hour * 2) {
	            return "about 1 hour ago";
	        }
	 
	        if (diff < day) {
	            return  Math.floor(diff / hour) + " hours ago";
	        }
	 
	        if (diff > day && diff < day * 2) {
	            return "yesterday";
	        }
	 
	        if (diff < day * 365) {
	            return Math.floor(diff / day) + " days ago";
	        }
	 
	        else {
	            return "over a year ago";
	        }
	    }, // timeAgo()
	     
	     
	    /**
	      * The Twitalinkahashifyer!
	      * http://www.dustindiaz.com/basement/ify.html
	      * Eg:
	      * ify.clean('your tweet text');
	      */
	    ify:  {
	      link: function(tweet) {
	        return tweet.replace(/\b(((https*\:\/\/)|www\.)[^\"\']+?)(([!?,.\)]+)?(\s|$))/g, function(link, m1, m2, m3, m4) {
	          var http = m2.match(/w/) ? 'http://' : '';
	          return '<a class="twtr-hyperlink" target="_blank" href="' + http + m1 + '">' + ((m1.length > 25) ? m1.substr(0, 24) + '...' : m1) + '</a>' + m4;
	        });
	      },
	 
	      at: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20})/g, function(m, username) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/intent/user?screen_name=' + username + '">@' + username + '</a>';
	        });
	      },
	 
	      list: function(tweet) {
	        return tweet.replace(/\B[@＠]([a-zA-Z0-9_]{1,20}\/\w+)/g, function(m, userlist) {
	          return '<a target="_blank" class="twtr-atreply" href="http://twitter.com/' + userlist + '">@' + userlist + '</a>';
	        });
	      },
	 
	      hash: function(tweet) {
	        return tweet.replace(/(^|\s+)#(\w+)/gi, function(m, before, hash) {
	          return before + '<a target="_blank" class="twtr-hashtag" href="http://twitter.com/search?q=%23' + hash + '">#' + hash + '</a>';
	        });
	      },
	 
	      clean: function(tweet) {
	        return this.hash(this.at(this.list(this.link(tweet))));
	      }
	    } // ify
	 
	     
	};		
	
});

//LLAMADA
$(function () {
    // start jqtweet!
    JQTWEET.loadTweets();
});		

    /* jQuery - Easy Ticker - Plugin v2.0 www.aakashweb.com (c) 2014 Aakash Chakravarthy MIT License. */
	;(function($,h,i,j){var k="easyTicker",defaults={direction:'up',easing:'swing',speed:'slow',interval:2000,height:'auto',visible:0,mousePause:1,controls:{up:'',down:'',toggle:'',playText:'Play',stopText:'Stop'}};function EasyTicker(f,g){var s=this;s.opts=$.extend({},defaults,g);s.elem=$(f);s.targ=$(f).children(':first-child');s.timer=0;s.mHover=0;s.winFocus=1;init();start();$([h,i]).off('focus.jqet').on('focus.jqet',function(){s.winFocus=1}).off('blur.jqet').on('blur.jqet',function(){s.winFocus=0});if(s.opts.mousePause==1){s.elem.mouseenter(function(){s.timerTemp=s.timer;stop()}).mouseleave(function(){if(s.timerTemp!==0)start()})}$(s.opts.controls.up).on('click',function(e){e.preventDefault();moveDir('up')});$(s.opts.controls.down).on('click',function(e){e.preventDefault();moveDir('down')});$(s.opts.controls.toggle).on('click',function(e){e.preventDefault();if(s.timer==0)start();else stop()});function init(){s.elem.children().css('margin',0).children().css('margin',0);s.elem.css({position:'relative',height:s.opts.height,overflow:'hidden'});s.targ.css({'position':'absolute','margin':0});setInterval(function(){adjHeight()},100)}function start(){s.timer=setInterval(function(){if(s.winFocus==1){move(s.opts.direction)}},s.opts.interval);$(s.opts.controls.toggle).addClass('et-run').html(s.opts.controls.stopText)}function stop(){clearInterval(s.timer);s.timer=0;$(s.opts.controls.toggle).removeClass('et-run').html(s.opts.controls.playText)}function move(a){var b,eq,appType;if(!s.elem.is(':visible'))return;if(a=='up'){b=':first-child';eq='-=';appType='appendTo'}else{b=':last-child';eq='+=';appType='prependTo'}var c=s.targ.children(b);var d=c.outerHeight();s.targ.stop(true,true).animate({'top':eq+d+"px"},s.opts.speed,s.opts.easing,function(){c.hide()[appType](s.targ).fadeIn();s.targ.css('top',0);adjHeight()})}function moveDir(a){stop();if(a=='up')move('up');else move('down')}function fullHeight(){var a=0;var b=s.elem.css('display');s.elem.css('display','block');s.targ.children().each(function(){a+=$(this).outerHeight()});s.elem.css({'display':b,'height':a})}function visHeight(a){var b=0;s.targ.children(':lt('+s.opts.visible+')').each(function(){b+=$(this).outerHeight()});if(a==1){s.elem.stop(true,true).animate({height:b},s.opts.speed)}else{s.elem.css('height',b)}}function adjHeight(){if(s.opts.height=='auto'&&s.opts.visible!=0){anim=arguments.callee.caller.name=='init'?0:1;visHeight(anim)}else if(s.opts.height=='auto'){fullHeight()}}return{up:function(){moveDir('up')},down:function(){moveDir('down')},start:start,stop:stop,options:s.opts}}$.fn[k]=function(a){return this.each(function(){if(!$.data(this,k)){$.data(this,k,new EasyTicker(this,a))}})}})(jQuery,window,document);
$(document).ready(function(){
var altura = $(document).height();
    
        

         
$(window).bind("load", function() { 
   //setTimeout(function(){  $("a:contains('atedral')").addClass("hash");$(".text:contains('RT')").parent().parent().remove(); }, 1000); 


	var dd = $('#vticker').easyTicker({
		direction: 'down',
		speed: 'slow',
        interval: 4000,
		height: altura,
		visible: 8,
		mousePause: 0
	}).data('easyTicker');

});
});

}