(function(a){var c=window.Modernizr,g=a.webshims,h=g.bugs,i=a('<form action="#" style="width: 1px; height: 1px; overflow: hidden;"><select name="b" required="" /><input type="date" required="" name="a" /><input type="submit" /></form>'),n=function(){if(i[0].querySelector)try{h.findRequired=!i[0].querySelector("select:required")}catch(a){h.findRequired=!1}};h.findRequired=!1;h.validationMessage=!1;h.valueAsNumberSet=!1;g.capturingEventPrevented=function(e){if(!e._isPolyfilled){var c=e.isDefaultPrevented,
g=e.preventDefault;e.preventDefault=function(){clearTimeout(a.data(e.target,e.type+"DefaultPrevented"));a.data(e.target,e.type+"DefaultPrevented",setTimeout(function(){a.removeData(e.target,e.type+"DefaultPrevented")},30));return g.apply(this,arguments)};e.isDefaultPrevented=function(){return!(!c.apply(this,arguments)&&!a.data(e.target,e.type+"DefaultPrevented"))};e._isPolyfilled=!0}};if(!c.formvalidation||h.bustedValidity)n();else if(g.capturingEvents(["input"]),g.capturingEvents(["invalid"],!0),
c.bugfreeformvalidation=!0,window.opera||a.browser.webkit||window.testGoodWithFix){var k=a("input",i).eq(0),o,q=function(a){g.loader.loadList(["dom-extend"]);g.ready("dom-extend",a)},j=function(e){var h=["form-extend","form-message","form-native-fix"];e&&(e.preventDefault(),e.stopImmediatePropagation());clearTimeout(o);setTimeout(function(){i&&(i.remove(),i=k=null)},9);if(!c.bugfreeformvalidation)g.addPolyfill("form-native-fix",{f:"forms",d:["form-extend"]}),g.modules["form-extend"].test=a.noop;g.isReady("form-number-date-api")&&
h.push("form-number-date-api");g.reTest(h);if(k)try{k.prop({disabled:!0,value:""}).prop("disabled",!1).is(":valid")&&q(function(){g.onNodeNamesPropertyModify(["input","textarea"],["disabled","readonly"],{set:function(e){!e&&this&&a.prop(this,"value",a.prop(this,"value"))}});g.onNodeNamesPropertyModify(["select"],["disabled","readonly"],{set:function(e){if(!e&&this)e=a(this).val(),(a("option:last-child",this)[0]||{}).selected=!0,a(this).val(e)}})})}catch(m){}(a.browser.opera||window.testGoodWithFix)&&
q(function(){var e=function(a){a.preventDefault()};["form","input","textarea","select"].forEach(function(c){var h=g.defineNodeNameProperty(c,"checkValidity",{prop:{value:function(){g.fromSubmit||a(this).bind("invalid.checkvalidity",e);g.fromCheckValidity=!0;var b=h.prop._supvalue.apply(this,arguments);g.fromSubmit||a(this).unbind("invalid.checkvalidity",e);g.fromCheckValidity=!1;return b}}})})})};i.appendTo("head");if(window.opera||window.testGoodWithFix){n();h.validationMessage=!k.prop("validationMessage");
if((c.inputtypes||{}).date){try{k.prop("valueAsNumber",0)}catch(p){}h.valueAsNumberSet="1970-01-01"!=k.prop("value")}k.prop("value","")}i.bind("submit",function(a){c.bugfreeformvalidation=!1;j(a)});o=setTimeout(function(){i&&i.triggerHandler("submit")},9);a("input, select",i).bind("invalid",j).filter('[type="submit"]').bind("click",function(a){a.stopImmediatePropagation()}).trigger("click");a.browser.webkit&&c.bugfreeformvalidation&&!g.bugs.bustedValidity&&function(){var e=/^(?:textarea|input)$/i,
c=!1;document.addEventListener("contextmenu",function(a){e.test(a.target.nodeName||"")&&(c=a.target.form)&&setTimeout(function(){c=!1},1)},!1);a(window).bind("invalid",function(a){if(a.originalEvent&&c&&c==a.target.form)a.wrongWebkitInvalid=!0,a.stopImmediatePropagation()})}()}})(jQuery);
jQuery.webshims.register("form-core",function(a,c,g,h,i,n){var k={radio:1},o={checkbox:1,radio:1},q=a([]),j=c.bugs,p=function(b){var b=a(b),d,c;d=q;if(k[b[0].type])c=b.prop("form"),d=(d=b[0].name)?c?a(c[d]):a(h.getElementsByName(d)).filter(function(){return!a.prop(this,"form")}):b,d=d.filter('[type="radio"]');return d},e=c.getContentValidationMessage=function(b,d,c){var f=a(b).data("errormessage")||b.getAttribute("x-moz-errormessage")||"";c&&f[c]&&(f=f[c]);"object"==typeof f&&(d=d||a.prop(b,"validity")||
{valid:1},d.valid||a.each(d,function(a,b){if(b&&"valid"!=a&&f[a])return f=f[a],!1}));if("object"==typeof f)f=f.defaultMessage;return f||""},r={number:1,range:1,date:1};a.extend(a.expr[":"],{"valid-element":function(b){return!(!a.prop(b,"willValidate")||!(a.prop(b,"validity")||{valid:1}).valid)},"invalid-element":function(b){return!(!a.prop(b,"willValidate")||(a.prop(b,"validity")||{valid:1}).valid)},"required-element":function(b){return!(!a.prop(b,"willValidate")||!a.prop(b,"required"))},"optional-element":function(b){return!!(a.prop(b,
"willValidate")&&!1===a.prop(b,"required"))},"in-range":function(b){if(!r[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||b.rangeOverflow||b.rangeUnderflow)},"out-of-range":function(b){if(!r[a.prop(b,"type")]||!a.prop(b,"willValidate"))return!1;b=a.prop(b,"validity");return!(!b||!b.rangeOverflow&&!b.rangeUnderflow)}});["valid","invalid","required","optional"].forEach(function(b){a.expr[":"][b]=a.expr.filters[b+"-element"]});a.expr[":"].focus=function(a){try{var d=
a.ownerDocument;return a===d.activeElement&&(!d.hasFocus||d.hasFocus())}catch(c){}return!1};var m=a.event.customEvent||{};(j.bustedValidity||j.findRequired||!Modernizr.bugfreeformvalidation)&&function(){var b=a.find,d=a.find.matchesSelector,c=/(\:valid|\:invalid|\:optional|\:required|\:in-range|\:out-of-range)(?=[\s\[\~\.\+\>\:\#*]|$)/ig,f=function(a){return a+"-element"};a.find=function(){var a=Array.prototype.slice,d=function(d){var e=arguments,e=a.call(e,1,e.length);e.unshift(d.replace(c,f));return b.apply(this,
e)},e;for(e in b)b.hasOwnProperty(e)&&(d[e]=b[e]);return d}();if(!Modernizr.prefixed||Modernizr.prefixed("matchesSelector",h.documentElement))a.find.matchesSelector=function(a,b){b=b.replace(c,f);return d.call(this,a,b)}}();var s=a.prop,t={selectedIndex:1,value:1,checked:1,disabled:1,readonly:1};a.prop=function(b,d,c){var e=s.apply(this,arguments);if(b&&"form"in b&&t[d]&&c!==i&&a(b).hasClass("form-ui-invalid")&&(a.prop(b,"validity")||{valid:1}).valid)a(b).getShadowElement().removeClass("form-ui-invalid"),
"checked"==d&&c&&p(b).not(b).removeClass("form-ui-invalid").removeAttr("aria-invalid");return e};var u=function(b,d){var c;a.each(b,function(b,e){if(e)return c="customError"==b?a.prop(d,"validationMessage"):b,!1});return c};a(h).bind(n.validityUIEvents||"focusout change refreshvalidityui",function(b){var d,c;if(b.target&&(d=a(b.target).getNativeElement()[0],"submit"!=d.type&&a.prop(d,"willValidate"))){c=a.data(d,"webshimsswitchvalidityclass");var e=function(){var c=a.prop(d,"validity"),e=a(d).getShadowElement(),
f,h,g,i;a(d).trigger("refreshCustomValidityRules");c.valid?e.hasClass("form-ui-valid")||(f="form-ui-valid",h="form-ui-invalid",i="changedvaliditystate",g="changedvalid",o[d.type]&&d.checked&&p(d).not(d).removeClass(h).addClass(f).removeAttr("aria-invalid"),a.removeData(d,"webshimsinvalidcause")):(c=u(c,d),a.data(d,"webshimsinvalidcause")!=c&&(a.data(d,"webshimsinvalidcause",c),i="changedvaliditystate"),e.hasClass("form-ui-invalid")||(f="form-ui-invalid",h="form-ui-valid",o[d.type]&&!d.checked&&p(d).not(d).removeClass(h).addClass(f),
g="changedinvalid"));f&&(e.addClass(f).removeClass(h),setTimeout(function(){a(d).trigger(g)},0));i&&setTimeout(function(){a(d).trigger(i)},0);a.removeData(b.target,"webshimsswitchvalidityclass")};c&&clearTimeout(c);"refreshvalidityui"==b.type?e():a.data(b.target,"webshimsswitchvalidityclass",setTimeout(e,9))}});m.changedvaliditystate=!0;m.refreshCustomValidityRules=!0;m.changedvalid=!0;m.changedinvalid=!0;m.refreshvalidityui=!0;c.triggerInlineForm=function(b,d){a(b).trigger(d)};c.modules["form-core"].getGroupElements=
p;j=function(){c.scrollRoot=a.browser.webkit||"BackCompat"==h.compatMode?a(h.body):a(h.documentElement)};j();c.ready("DOM",j);c.getRelOffset=function(b,d){var b=a(b),c=a(d).offset(),e;a.swap(a(b)[0],{visibility:"hidden",display:"inline-block",left:0,top:0},function(){e=b.offset()});c.top-=e.top;c.left-=e.left;return c};c.validityAlert=function(){var b=!a.browser.msie||7<parseInt(a.browser.version,10)?"span":"label",d,i=!1,f=!1,k,l={hideDelay:5E3,showFor:function(b,c,e,h){l._create();var b=a(b),j=
a(b).getShadowElement(),m=l.getOffsetFromBody(j);l.clear();h?this.hide():(this.getMessage(b,c),this.position(j,m),d.css({fontSize:b.css("fontSize"),fontFamily:b.css("fontFamily")}),this.show(),this.hideDelay&&(i=setTimeout(k,this.hideDelay)),a(g).bind("resize.validityalert",function(){clearTimeout(f);f=setTimeout(function(){l.position(j)},9)}));e||this.setFocus(j,m)},getOffsetFromBody:function(a){return c.getRelOffset(d,a)},setFocus:function(e,f){var g=a(e).getShadowFocusElement(),i=c.scrollRoot.scrollTop(),
l=(f||g.offset()).top-30,j;c.getID&&"label"==b&&d.attr("for",c.getID(g));i>l&&(c.scrollRoot.animate({scrollTop:l-5},{queue:!1,duration:Math.max(Math.min(600,1.5*(i-l)),80)}),j=!0);try{g[0].focus()}catch(m){}j&&(c.scrollRoot.scrollTop(i),setTimeout(function(){c.scrollRoot.scrollTop(i)},0));setTimeout(function(){a(h).bind("focusout.validityalert",k)},10)},getMessage:function(b,c){c||(c=e(b[0])||b.prop("validationMessage"));c?a("span.va-box",d).text(c):this.hide()},position:function(b,c){c=c?a.extend({},
c):l.getOffsetFromBody(b);c.top+=b.outerHeight();d.css(c)},show:function(){"none"===d.css("display")&&d.css({opacity:0}).show();d.addClass("va-visible").fadeTo(400,1)},hide:function(){d.removeClass("va-visible").fadeOut()},clear:function(){clearTimeout(!1);clearTimeout(i);a(h).unbind(".validityalert");a(g).unbind(".validityalert");d.stop().removeAttr("for")},_create:function(){if(!d)d=l.errorBubble=a("<"+b+' class="validity-alert-wrapper" role="alert"><span  class="validity-alert"><span class="va-arrow"><span class="va-arrow-box"></span></span><span class="va-box"></span></span></'+
b+">").css({position:"absolute",display:"none"}),c.ready("DOM",function(){d.appendTo("body");a.fn.bgIframe&&a.browser.msie&&7>parseInt(a.browser.version,10)&&d.bgIframe()})}};k=a.proxy(l,"hide");return l}();(function(){var b,c=[],e;a(h).bind("invalid",function(f){if(!f.wrongWebkitInvalid){var g=a(f.target),i=g.getShadowElement();i.hasClass("form-ui-invalid")||(i.addClass("form-ui-invalid").removeClass("form-ui-valid"),setTimeout(function(){a(f.target).trigger("changedinvalid").trigger("changedvaliditystate")},
0));if(!b)b=a.Event("firstinvalid"),b.isInvalidUIPrevented=f.isDefaultPrevented,i=a.Event("firstinvalidsystem"),a(h).triggerHandler(i,{element:f.target,form:f.target.form,isInvalidUIPrevented:f.isDefaultPrevented}),g.trigger(b);b&&b.isDefaultPrevented()&&f.preventDefault();c.push(f.target);f.extraData="fix";clearTimeout(e);e=setTimeout(function(){var e={type:"lastinvalid",cancelable:!1,invalidlist:a(c)};b=!1;c=[];a(f.target).trigger(e,e)},9);i=g=null}})})();a.fn.getErrorMessage=function(){var b="",
c=this[0];c&&(b=e(c)||a.prop(c,"customValidationMessage")||a.prop(c,"validationMessage"));return b};n.replaceValidationUI&&c.ready("DOM forms",function(){a(h).bind("firstinvalid",function(b){b.isInvalidUIPrevented()||(b.preventDefault(),a.webshims.validityAlert.showFor(b.target,a(b.target).prop("customValidationMessage")))})})});