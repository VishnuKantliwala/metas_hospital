/*! jQuery v2.2.4 | (c) jQuery Foundation | jquery.org/license */
!function(a,b){"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){var c=[],d=a.document,e=c.slice,f=c.concat,g=c.push,h=c.indexOf,i={},j=i.toString,k=i.hasOwnProperty,l={},m="2.2.4",n=function(a,b){return new n.fn.init(a,b)},o=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,p=/^-ms-/,q=/-([\da-z])/gi,r=function(a,b){return b.toUpperCase()};n.fn=n.prototype={jquery:m,constructor:n,selector:"",length:0,toArray:function(){return e.call(this)},get:function(a){return null!=a?0>a?this[a+this.length]:this[a]:e.call(this)},pushStack:function(a){var b=n.merge(this.constructor(),a);return b.prevObject=this,b.context=this.context,b},each:function(a){return n.each(this,a)},map:function(a){return this.pushStack(n.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(e.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(0>a?b:0);return this.pushStack(c>=0&&b>c?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:g,sort:c.sort,splice:c.splice},n.extend=n.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||n.isFunction(g)||(g={}),h===i&&(g=this,h--);i>h;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(n.isPlainObject(d)||(e=n.isArray(d)))?(e?(e=!1,f=c&&n.isArray(c)?c:[]):f=c&&n.isPlainObject(c)?c:{},g[b]=n.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},n.extend({expando:"jQuery"+(m+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===n.type(a)},isArray:Array.isArray,isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=a&&a.toString();return!n.isArray(a)&&b-parseFloat(b)+1>=0},isPlainObject:function(a){var b;if("object"!==n.type(a)||a.nodeType||n.isWindow(a))return!1;if(a.constructor&&!k.call(a,"constructor")&&!k.call(a.constructor.prototype||{},"isPrototypeOf"))return!1;for(b in a);return void 0===b||k.call(a,b)},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?i[j.call(a)]||"object":typeof a},globalEval:function(a){var b,c=eval;a=n.trim(a),a&&(1===a.indexOf("use strict")?(b=d.createElement("script"),b.text=a,d.head.appendChild(b).parentNode.removeChild(b)):c(a))},camelCase:function(a){return a.replace(p,"ms-").replace(q,r)},nodeName:function(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()},each:function(a,b){var c,d=0;if(s(a)){for(c=a.length;c>d;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(o,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(s(Object(a))?n.merge(c,"string"==typeof a?[a]:a):g.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:h.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;c>d;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;g>f;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,g=0,h=[];if(s(a))for(d=a.length;d>g;g++)e=b(a[g],g,c),null!=e&&h.push(e);else for(g in a)e=b(a[g],g,c),null!=e&&h.push(e);return f.apply([],h)},guid:1,proxy:function(a,b){var c,d,f;return"string"==typeof b&&(c=a[b],b=a,a=c),n.isFunction(a)?(d=e.call(arguments,2),f=function(){return a.apply(b||this,d.concat(e.call(arguments)))},f.guid=a.guid=a.guid||n.guid++,f):void 0},now:Date.now,support:l}),"function"==typeof Symbol&&(n.fn[Symbol.iterator]=c[Symbol.iterator]),n.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){i["[object "+b+"]"]=b.toLowerCase()});function s(a){var b=!!a&&"length"in a&&a.length,c=n.type(a);return"function"===c||n.isWindow(a)?!1:"array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a}var t=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ga(),z=ga(),A=ga(),B=function(a,b){return a===b&&(l=!0),0},C=1<<31,D={}.hasOwnProperty,E=[],F=E.pop,G=E.push,H=E.push,I=E.slice,J=function(a,b){for(var c=0,d=a.length;d>c;c++)if(a[c]===b)return c;return-1},K="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",L="[\\x20\\t\\r\\n\\f]",M="(?:\\\\.|[\\w-]|[^\\x00-\\xa0])+",N="\\["+L+"*("+M+")(?:"+L+"*([*^$|!~]?=)"+L+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+M+"))|)"+L+"*\\]",O=":("+M+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+N+")*)|.*)\\)|)",P=new RegExp(L+"+","g"),Q=new RegExp("^"+L+"+|((?:^|[^\\\\])(?:\\\\.)*)"+L+"+$","g"),R=new RegExp("^"+L+"*,"+L+"*"),S=new RegExp("^"+L+"*([>+~]|"+L+")"+L+"*"),T=new RegExp("="+L+"*([^\\]'\"]*?)"+L+"*\\]","g"),U=new RegExp(O),V=new RegExp("^"+M+"$"),W={ID:new RegExp("^#("+M+")"),CLASS:new RegExp("^\\.("+M+")"),TAG:new RegExp("^("+M+"|[*])"),ATTR:new RegExp("^"+N),PSEUDO:new RegExp("^"+O),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+L+"*(even|odd|(([+-]|)(\\d*)n|)"+L+"*(?:([+-]|)"+L+"*(\\d+)|))"+L+"*\\)|)","i"),bool:new RegExp("^(?:"+K+")$","i"),needsContext:new RegExp("^"+L+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+L+"*((?:-\\d)?\\d*)"+L+"*\\)|)(?=[^-]|$)","i")},X=/^(?:input|select|textarea|button)$/i,Y=/^h\d$/i,Z=/^[^{]+\{\s*\[native \w/,$=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,_=/[+~]/,aa=/'|\\/g,ba=new RegExp("\\\\([\\da-f]{1,6}"+L+"?|("+L+")|.)","ig"),ca=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:0>d?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},da=function(){m()};try{H.apply(E=I.call(v.childNodes),v.childNodes),E[v.childNodes.length].nodeType}catch(ea){H={apply:E.length?function(a,b){G.apply(a,I.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function fa(a,b,d,e){var f,h,j,k,l,o,r,s,w=b&&b.ownerDocument,x=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==x&&9!==x&&11!==x)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==x&&(o=$.exec(a)))if(f=o[1]){if(9===x){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(w&&(j=w.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(o[2])return H.apply(d,b.getElementsByTagName(a)),d;if((f=o[3])&&c.getElementsByClassName&&b.getElementsByClassName)return H.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==x)w=b,s=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(aa,"\\$&"):b.setAttribute("id",k=u),r=g(a),h=r.length,l=V.test(k)?"#"+k:"[id='"+k+"']";while(h--)r[h]=l+" "+qa(r[h]);s=r.join(","),w=_.test(a)&&oa(b.parentNode)||b}if(s)try{return H.apply(d,w.querySelectorAll(s)),d}catch(y){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(Q,"$1"),b,d,e)}function ga(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ha(a){return a[u]=!0,a}function ia(a){var b=n.createElement("div");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ja(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function ka(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&(~b.sourceIndex||C)-(~a.sourceIndex||C);if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function la(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function na(a){return ha(function(b){return b=+b,ha(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function oa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=fa.support={},f=fa.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return b?"HTML"!==b.nodeName:!1},m=fa.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ia(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ia(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Z.test(n.getElementsByClassName),c.getById=ia(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}},d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){return a.getAttribute("id")===b}}):(delete d.find.ID,d.filter.ID=function(a){var b=a.replace(ba,ca);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){return"undefined"!=typeof b.getElementsByClassName&&p?b.getElementsByClassName(a):void 0},r=[],q=[],(c.qsa=Z.test(n.querySelectorAll))&&(ia(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+L+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+L+"*(?:value|"+K+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ia(function(a){var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+L+"*[*^$|!~]?="),a.querySelectorAll(":enabled").length||q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Z.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ia(function(a){c.disconnectedMatch=s.call(a,"div"),s.call(a,"[s!='']:x"),r.push("!=",O)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Z.test(o.compareDocumentPosition),t=b||Z.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?J(k,a)-J(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?J(k,a)-J(k,b):0;if(e===f)return ka(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?ka(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},fa.matches=function(a,b){return fa(a,null,null,b)},fa.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(T,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return fa(b,n,null,[a]).length>0},fa.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},fa.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&D.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},fa.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},fa.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=fa.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=fa.selectors={cacheLength:50,createPseudo:ha,match:W,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(ba,ca),a[3]=(a[3]||a[4]||a[5]||"").replace(ba,ca),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||fa.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&fa.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return W.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&U.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(ba,ca).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+L+")"+a+"("+L+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=fa.attr(d,a);return null==e?"!="===b:b?(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(P," ")+" ").indexOf(c)>-1:"|="===b?e===c||e.slice(0,c.length+1)===c+"-":!1):!0}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||fa.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ha(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=J(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ha(function(a){var b=[],c=[],d=h(a.replace(Q,"$1"));return d[u]?ha(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ha(function(a){return function(b){return fa(a,b).length>0}}),contains:ha(function(a){return a=a.replace(ba,ca),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ha(function(a){return V.test(a||"")||fa.error("unsupported lang: "+a),a=a.replace(ba,ca).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:function(a){return a.disabled===!1},disabled:function(a){return a.disabled===!0},checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return Y.test(a.nodeName)},input:function(a){return X.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:na(function(){return[0]}),last:na(function(a,b){return[b-1]}),eq:na(function(a,b,c){return[0>c?c+b:c]}),even:na(function(a,b){for(var c=0;b>c;c+=2)a.push(c);return a}),odd:na(function(a,b){for(var c=1;b>c;c+=2)a.push(c);return a}),lt:na(function(a,b,c){for(var d=0>c?c+b:c;--d>=0;)a.push(d);return a}),gt:na(function(a,b,c){for(var d=0>c?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=la(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=ma(b);function pa(){}pa.prototype=d.filters=d.pseudos,d.setFilters=new pa,g=fa.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=R.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=S.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(Q," ")}),h=h.slice(c.length));for(g in d.filter)!(e=W[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?fa.error(a):z(a,i).slice(0)};function qa(a){for(var b=0,c=a.length,d="";c>b;b++)d+=a[b].value;return d}function ra(a,b,c){var d=b.dir,e=c&&"parentNode"===d,f=x++;return b.first?function(b,c,f){while(b=b[d])if(1===b.nodeType||e)return a(b,c,f)}:function(b,c,g){var h,i,j,k=[w,f];if(g){while(b=b[d])if((1===b.nodeType||e)&&a(b,c,g))return!0}else while(b=b[d])if(1===b.nodeType||e){if(j=b[u]||(b[u]={}),i=j[b.uniqueID]||(j[b.uniqueID]={}),(h=i[d])&&h[0]===w&&h[1]===f)return k[2]=h[2];if(i[d]=k,k[2]=a(b,c,g))return!0}}}function sa(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function ta(a,b,c){for(var d=0,e=b.length;e>d;d++)fa(a,b[d],c);return c}function ua(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;i>h;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function va(a,b,c,d,e,f){return d&&!d[u]&&(d=va(d)),e&&!e[u]&&(e=va(e,f)),ha(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||ta(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:ua(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=ua(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?J(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=ua(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):H.apply(g,r)})}function wa(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ra(function(a){return a===b},h,!0),l=ra(function(a){return J(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];f>i;i++)if(c=d.relative[a[i].type])m=[ra(sa(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;f>e;e++)if(d.relative[a[e].type])break;return va(i>1&&sa(m),i>1&&qa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(Q,"$1"),c,e>i&&wa(a.slice(i,e)),f>e&&wa(a=a.slice(e)),f>e&&qa(a))}m.push(c)}return sa(m)}function xa(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=F.call(i));u=ua(u)}H.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&fa.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ha(f):f}return h=fa.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=wa(b[c]),f[u]?d.push(f):e.push(f);f=A(a,xa(e,d)),f.selector=a}return f},i=fa.select=function(a,b,e,f){var i,j,k,l,m,n="function"==typeof a&&a,o=!f&&g(a=n.selector||a);if(e=e||[],1===o.length){if(j=o[0]=o[0].slice(0),j.length>2&&"ID"===(k=j[0]).type&&c.getById&&9===b.nodeType&&p&&d.relative[j[1].type]){if(b=(d.find.ID(k.matches[0].replace(ba,ca),b)||[])[0],!b)return e;n&&(b=b.parentNode),a=a.slice(j.shift().value.length)}i=W.needsContext.test(a)?0:j.length;while(i--){if(k=j[i],d.relative[l=k.type])break;if((m=d.find[l])&&(f=m(k.matches[0].replace(ba,ca),_.test(j[0].type)&&oa(b.parentNode)||b))){if(j.splice(i,1),a=f.length&&qa(j),!a)return H.apply(e,f),e;break}}}return(n||h(a,o))(f,b,!p,e,!b||_.test(a)&&oa(b.parentNode)||b),e},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ia(function(a){return 1&a.compareDocumentPosition(n.createElement("div"))}),ia(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ja("type|href|height|width",function(a,b,c){return c?void 0:a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ia(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ja("value",function(a,b,c){return c||"input"!==a.nodeName.toLowerCase()?void 0:a.defaultValue}),ia(function(a){return null==a.getAttribute("disabled")})||ja(K,function(a,b,c){var d;return c?void 0:a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),fa}(a);n.find=t,n.expr=t.selectors,n.expr[":"]=n.expr.pseudos,n.uniqueSort=n.unique=t.uniqueSort,n.text=t.getText,n.isXMLDoc=t.isXML,n.contains=t.contains;var u=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&n(a).is(c))break;d.push(a)}return d},v=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},w=n.expr.match.needsContext,x=/^<([\w-]+)\s*\/?>(?:<\/\1>|)$/,y=/^.[^:#\[\.,]*$/;function z(a,b,c){if(n.isFunction(b))return n.grep(a,function(a,d){return!!b.call(a,d,a)!==c});if(b.nodeType)return n.grep(a,function(a){return a===b!==c});if("string"==typeof b){if(y.test(b))return n.filter(b,a,c);b=n.filter(b,a)}return n.grep(a,function(a){return h.call(b,a)>-1!==c})}n.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?n.find.matchesSelector(d,a)?[d]:[]:n.find.matches(a,n.grep(b,function(a){return 1===a.nodeType}))},n.fn.extend({find:function(a){var b,c=this.length,d=[],e=this;if("string"!=typeof a)return this.pushStack(n(a).filter(function(){for(b=0;c>b;b++)if(n.contains(e[b],this))return!0}));for(b=0;c>b;b++)n.find(a,e[b],d);return d=this.pushStack(c>1?n.unique(d):d),d.selector=this.selector?this.selector+" "+a:a,d},filter:function(a){return this.pushStack(z(this,a||[],!1))},not:function(a){return this.pushStack(z(this,a||[],!0))},is:function(a){return!!z(this,"string"==typeof a&&w.test(a)?n(a):a||[],!1).length}});var A,B=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]*))$/,C=n.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||A,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:B.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof n?b[0]:b,n.merge(this,n.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),x.test(e[1])&&n.isPlainObject(b))for(e in b)n.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&f.parentNode&&(this.length=1,this[0]=f),this.context=d,this.selector=a,this}return a.nodeType?(this.context=this[0]=a,this.length=1,this):n.isFunction(a)?void 0!==c.ready?c.ready(a):a(n):(void 0!==a.selector&&(this.selector=a.selector,this.context=a.context),n.makeArray(a,this))};C.prototype=n.fn,A=n(d);var D=/^(?:parents|prev(?:Until|All))/,E={children:!0,contents:!0,next:!0,prev:!0};n.fn.extend({has:function(a){var b=n(a,this),c=b.length;return this.filter(function(){for(var a=0;c>a;a++)if(n.contains(this,b[a]))return!0})},closest:function(a,b){for(var c,d=0,e=this.length,f=[],g=w.test(a)||"string"!=typeof a?n(a,b||this.context):0;e>d;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&n.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?n.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?h.call(n(a),this[0]):h.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(n.uniqueSort(n.merge(this.get(),n(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function F(a,b){while((a=a[b])&&1!==a.nodeType);return a}n.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return u(a,"parentNode")},parentsUntil:function(a,b,c){return u(a,"parentNode",c)},next:function(a){return F(a,"nextSibling")},prev:function(a){return F(a,"previousSibling")},nextAll:function(a){return u(a,"nextSibling")},prevAll:function(a){return u(a,"previousSibling")},nextUntil:function(a,b,c){return u(a,"nextSibling",c)},prevUntil:function(a,b,c){return u(a,"previousSibling",c)},siblings:function(a){return v((a.parentNode||{}).firstChild,a)},children:function(a){return v(a.firstChild)},contents:function(a){return a.contentDocument||n.merge([],a.childNodes)}},function(a,b){n.fn[a]=function(c,d){var e=n.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=n.filter(d,e)),this.length>1&&(E[a]||n.uniqueSort(e),D.test(a)&&e.reverse()),this.pushStack(e)}});var G=/\S+/g;function H(a){var b={};return n.each(a.match(G)||[],function(a,c){b[c]=!0}),b}n.Callbacks=function(a){a="string"==typeof a?H(a):n.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){n.each(b,function(b,c){n.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==n.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return n.each(arguments,function(a,b){var c;while((c=n.inArray(b,f,c))>-1)f.splice(c,1),h>=c&&h--}),this},has:function(a){return a?n.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j},n.extend({Deferred:function(a){var b=[["resolve","done",n.Callbacks("once memory"),"resolved"],["reject","fail",n.Callbacks("once memory"),"rejected"],["notify","progress",n.Callbacks("memory")]],c="pending",d={state:function(){return c},always:function(){return e.done(arguments).fail(arguments),this},then:function(){var a=arguments;return n.Deferred(function(c){n.each(b,function(b,f){var g=n.isFunction(a[b])&&a[b];e[f[1]](function(){var a=g&&g.apply(this,arguments);a&&n.isFunction(a.promise)?a.promise().progress(c.notify).done(c.resolve).fail(c.reject):c[f[0]+"With"](this===d?c.promise():this,g?[a]:arguments)})}),a=null}).promise()},promise:function(a){return null!=a?n.extend(a,d):d}},e={};return d.pipe=d.then,n.each(b,function(a,f){var g=f[2],h=f[3];d[f[1]]=g.add,h&&g.add(function(){c=h},b[1^a][2].disable,b[2][2].lock),e[f[0]]=function(){return e[f[0]+"With"](this===e?d:this,arguments),this},e[f[0]+"With"]=g.fireWith}),d.promise(e),a&&a.call(e,e),e},when:function(a){var b=0,c=e.call(arguments),d=c.length,f=1!==d||a&&n.isFunction(a.promise)?d:0,g=1===f?a:n.Deferred(),h=function(a,b,c){return function(d){b[a]=this,c[a]=arguments.length>1?e.call(arguments):d,c===i?g.notifyWith(b,c):--f||g.resolveWith(b,c)}},i,j,k;if(d>1)for(i=new Array(d),j=new Array(d),k=new Array(d);d>b;b++)c[b]&&n.isFunction(c[b].promise)?c[b].promise().progress(h(b,j,i)).done(h(b,k,c)).fail(g.reject):--f;return f||g.resolveWith(k,c),g.promise()}});var I;n.fn.ready=function(a){return n.ready.promise().done(a),this},n.extend({isReady:!1,readyWait:1,holdReady:function(a){a?n.readyWait++:n.ready(!0)},ready:function(a){(a===!0?--n.readyWait:n.isReady)||(n.isReady=!0,a!==!0&&--n.readyWait>0||(I.resolveWith(d,[n]),n.fn.triggerHandler&&(n(d).triggerHandler("ready"),n(d).off("ready"))))}});function J(){d.removeEventListener("DOMContentLoaded",J),a.removeEventListener("load",J),n.ready()}n.ready.promise=function(b){return I||(I=n.Deferred(),"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(n.ready):(d.addEventListener("DOMContentLoaded",J),a.addEventListener("load",J))),I.promise(b)},n.ready.promise();var K=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===n.type(c)){e=!0;for(h in c)K(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,n.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(n(a),c)})),b))for(;i>h;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},L=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function M(){this.expando=n.expando+M.uid++}M.uid=1,M.prototype={register:function(a,b){var c=b||{};return a.nodeType?a[this.expando]=c:Object.defineProperty(a,this.expando,{value:c,writable:!0,configurable:!0}),a[this.expando]},cache:function(a){if(!L(a))return{};var b=a[this.expando];return b||(b={},L(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[b]=c;else for(d in b)e[d]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][b]},access:function(a,b,c){var d;return void 0===b||b&&"string"==typeof b&&void 0===c?(d=this.get(a,b),void 0!==d?d:this.get(a,n.camelCase(b))):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d,e,f=a[this.expando];if(void 0!==f){if(void 0===b)this.register(a);else{n.isArray(b)?d=b.concat(b.map(n.camelCase)):(e=n.camelCase(b),b in f?d=[b,e]:(d=e,d=d in f?[d]:d.match(G)||[])),c=d.length;while(c--)delete f[d[c]]}(void 0===b||n.isEmptyObject(f))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!n.isEmptyObject(b)}};var N=new M,O=new M,P=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Q=/[A-Z]/g;function R(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Q,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c="true"===c?!0:"false"===c?!1:"null"===c?null:+c+""===c?+c:P.test(c)?n.parseJSON(c):c;
}catch(e){}O.set(a,b,c)}else c=void 0;return c}n.extend({hasData:function(a){return O.hasData(a)||N.hasData(a)},data:function(a,b,c){return O.access(a,b,c)},removeData:function(a,b){O.remove(a,b)},_data:function(a,b,c){return N.access(a,b,c)},_removeData:function(a,b){N.remove(a,b)}}),n.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=O.get(f),1===f.nodeType&&!N.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=n.camelCase(d.slice(5)),R(f,d,e[d])));N.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){O.set(this,a)}):K(this,function(b){var c,d;if(f&&void 0===b){if(c=O.get(f,a)||O.get(f,a.replace(Q,"-$&").toLowerCase()),void 0!==c)return c;if(d=n.camelCase(a),c=O.get(f,d),void 0!==c)return c;if(c=R(f,d,void 0),void 0!==c)return c}else d=n.camelCase(a),this.each(function(){var c=O.get(this,d);O.set(this,d,b),a.indexOf("-")>-1&&void 0!==c&&O.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){O.remove(this,a)})}}),n.extend({queue:function(a,b,c){var d;return a?(b=(b||"fx")+"queue",d=N.get(a,b),c&&(!d||n.isArray(c)?d=N.access(a,b,n.makeArray(c)):d.push(c)),d||[]):void 0},dequeue:function(a,b){b=b||"fx";var c=n.queue(a,b),d=c.length,e=c.shift(),f=n._queueHooks(a,b),g=function(){n.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return N.get(a,c)||N.access(a,c,{empty:n.Callbacks("once memory").add(function(){N.remove(a,[b+"queue",c])})})}}),n.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?n.queue(this[0],a):void 0===b?this:this.each(function(){var c=n.queue(this,a,b);n._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&n.dequeue(this,a)})},dequeue:function(a){return this.each(function(){n.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=n.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=N.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var S=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,T=new RegExp("^(?:([+-])=|)("+S+")([a-z%]*)$","i"),U=["Top","Right","Bottom","Left"],V=function(a,b){return a=b||a,"none"===n.css(a,"display")||!n.contains(a.ownerDocument,a)};function W(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return n.css(a,b,"")},i=h(),j=c&&c[3]||(n.cssNumber[b]?"":"px"),k=(n.cssNumber[b]||"px"!==j&&+i)&&T.exec(n.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,n.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var X=/^(?:checkbox|radio)$/i,Y=/<([\w:-]+)/,Z=/^$|\/(?:java|ecma)script/i,$={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};$.optgroup=$.option,$.tbody=$.tfoot=$.colgroup=$.caption=$.thead,$.th=$.td;function _(a,b){var c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[];return void 0===b||b&&n.nodeName(a,b)?n.merge([a],c):c}function aa(a,b){for(var c=0,d=a.length;d>c;c++)N.set(a[c],"globalEval",!b||N.get(b[c],"globalEval"))}var ba=/<|&#?\w+;/;function ca(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],o=0,p=a.length;p>o;o++)if(f=a[o],f||0===f)if("object"===n.type(f))n.merge(m,f.nodeType?[f]:f);else if(ba.test(f)){g=g||l.appendChild(b.createElement("div")),h=(Y.exec(f)||["",""])[1].toLowerCase(),i=$[h]||$._default,g.innerHTML=i[1]+n.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;n.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",o=0;while(f=m[o++])if(d&&n.inArray(f,d)>-1)e&&e.push(f);else if(j=n.contains(f.ownerDocument,f),g=_(l.appendChild(f),"script"),j&&aa(g),c){k=0;while(f=g[k++])Z.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),l.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",l.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var da=/^key/,ea=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,fa=/^([^.]*)(?:\.(.+)|)/;function ga(){return!0}function ha(){return!1}function ia(){try{return d.activeElement}catch(a){}}function ja(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ja(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=ha;else if(!e)return a;return 1===f&&(g=e,e=function(a){return n().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=n.guid++)),a.each(function(){n.event.add(this,b,e,d,c)})}n.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.get(a);if(r){c.handler&&(f=c,c=f.handler,e=f.selector),c.guid||(c.guid=n.guid++),(i=r.events)||(i=r.events={}),(g=r.handle)||(g=r.handle=function(b){return"undefined"!=typeof n&&n.event.triggered!==b.type?n.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(G)||[""],j=b.length;while(j--)h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o&&(l=n.event.special[o]||{},o=(e?l.delegateType:l.bindType)||o,l=n.event.special[o]||{},k=n.extend({type:o,origType:q,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&n.expr.match.needsContext.test(e),namespace:p.join(".")},f),(m=i[o])||(m=i[o]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,p,g)!==!1||a.addEventListener&&a.addEventListener(o,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),n.event.global[o]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,o,p,q,r=N.hasData(a)&&N.get(a);if(r&&(i=r.events)){b=(b||"").match(G)||[""],j=b.length;while(j--)if(h=fa.exec(b[j])||[],o=q=h[1],p=(h[2]||"").split(".").sort(),o){l=n.event.special[o]||{},o=(d?l.delegateType:l.bindType)||o,m=i[o]||[],h=h[2]&&new RegExp("(^|\\.)"+p.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&q!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,p,r.handle)!==!1||n.removeEvent(a,o,r.handle),delete i[o])}else for(o in i)n.event.remove(a,o+b[j],c,d,!0);n.isEmptyObject(i)&&N.remove(a,"handle events")}},dispatch:function(a){a=n.event.fix(a);var b,c,d,f,g,h=[],i=e.call(arguments),j=(N.get(this,"events")||{})[a.type]||[],k=n.event.special[a.type]||{};if(i[0]=a,a.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,a)!==!1){h=n.event.handlers.call(this,a,j),b=0;while((f=h[b++])&&!a.isPropagationStopped()){a.currentTarget=f.elem,c=0;while((g=f.handlers[c++])&&!a.isImmediatePropagationStopped())a.rnamespace&&!a.rnamespace.test(g.namespace)||(a.handleObj=g,a.data=g.data,d=((n.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==d&&(a.result=d)===!1&&(a.preventDefault(),a.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,a),a.result}},handlers:function(a,b){var c,d,e,f,g=[],h=b.delegateCount,i=a.target;if(h&&i.nodeType&&("click"!==a.type||isNaN(a.button)||a.button<1))for(;i!==this;i=i.parentNode||this)if(1===i.nodeType&&(i.disabled!==!0||"click"!==a.type)){for(d=[],c=0;h>c;c++)f=b[c],e=f.selector+" ",void 0===d[e]&&(d[e]=f.needsContext?n(e,this).index(i)>-1:n.find(e,this,null,[i]).length),d[e]&&d.push(f);d.length&&g.push({elem:i,handlers:d})}return h<b.length&&g.push({elem:this,handlers:b.slice(h)}),g},props:"altKey bubbles cancelable ctrlKey currentTarget detail eventPhase metaKey relatedTarget shiftKey target timeStamp view which".split(" "),fixHooks:{},keyHooks:{props:"char charCode key keyCode".split(" "),filter:function(a,b){return null==a.which&&(a.which=null!=b.charCode?b.charCode:b.keyCode),a}},mouseHooks:{props:"button buttons clientX clientY offsetX offsetY pageX pageY screenX screenY toElement".split(" "),filter:function(a,b){var c,e,f,g=b.button;return null==a.pageX&&null!=b.clientX&&(c=a.target.ownerDocument||d,e=c.documentElement,f=c.body,a.pageX=b.clientX+(e&&e.scrollLeft||f&&f.scrollLeft||0)-(e&&e.clientLeft||f&&f.clientLeft||0),a.pageY=b.clientY+(e&&e.scrollTop||f&&f.scrollTop||0)-(e&&e.clientTop||f&&f.clientTop||0)),a.which||void 0===g||(a.which=1&g?1:2&g?3:4&g?2:0),a}},fix:function(a){if(a[n.expando])return a;var b,c,e,f=a.type,g=a,h=this.fixHooks[f];h||(this.fixHooks[f]=h=ea.test(f)?this.mouseHooks:da.test(f)?this.keyHooks:{}),e=h.props?this.props.concat(h.props):this.props,a=new n.Event(g),b=e.length;while(b--)c=e[b],a[c]=g[c];return a.target||(a.target=d),3===a.target.nodeType&&(a.target=a.target.parentNode),h.filter?h.filter(a,g):a},special:{load:{noBubble:!0},focus:{trigger:function(){return this!==ia()&&this.focus?(this.focus(),!1):void 0},delegateType:"focusin"},blur:{trigger:function(){return this===ia()&&this.blur?(this.blur(),!1):void 0},delegateType:"focusout"},click:{trigger:function(){return"checkbox"===this.type&&this.click&&n.nodeName(this,"input")?(this.click(),!1):void 0},_default:function(a){return n.nodeName(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},n.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},n.Event=function(a,b){return this instanceof n.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?ga:ha):this.type=a,b&&n.extend(this,b),this.timeStamp=a&&a.timeStamp||n.now(),void(this[n.expando]=!0)):new n.Event(a,b)},n.Event.prototype={constructor:n.Event,isDefaultPrevented:ha,isPropagationStopped:ha,isImmediatePropagationStopped:ha,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=ga,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=ga,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=ga,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},n.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){n.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||n.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),n.fn.extend({on:function(a,b,c,d){return ja(this,a,b,c,d)},one:function(a,b,c,d){return ja(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,n(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=ha),this.each(function(){n.event.remove(this,a,c,b)})}});var ka=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:-]+)[^>]*)\/>/gi,la=/<script|<style|<link/i,ma=/checked\s*(?:[^=]|=\s*.checked.)/i,na=/^true\/(.*)/,oa=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function pa(a,b){return n.nodeName(a,"table")&&n.nodeName(11!==b.nodeType?b:b.firstChild,"tr")?a.getElementsByTagName("tbody")[0]||a.appendChild(a.ownerDocument.createElement("tbody")):a}function qa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function ra(a){var b=na.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function sa(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(N.hasData(a)&&(f=N.access(a),g=N.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;d>c;c++)n.event.add(b,e,j[e][c])}O.hasData(a)&&(h=O.access(a),i=n.extend({},h),O.set(b,i))}}function ta(a,b){var c=b.nodeName.toLowerCase();"input"===c&&X.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function ua(a,b,c,d){b=f.apply([],b);var e,g,h,i,j,k,m=0,o=a.length,p=o-1,q=b[0],r=n.isFunction(q);if(r||o>1&&"string"==typeof q&&!l.checkClone&&ma.test(q))return a.each(function(e){var f=a.eq(e);r&&(b[0]=q.call(this,e,f.html())),ua(f,b,c,d)});if(o&&(e=ca(b,a[0].ownerDocument,!1,a,d),g=e.firstChild,1===e.childNodes.length&&(e=g),g||d)){for(h=n.map(_(e,"script"),qa),i=h.length;o>m;m++)j=e,m!==p&&(j=n.clone(j,!0,!0),i&&n.merge(h,_(j,"script"))),c.call(a[m],j,m);if(i)for(k=h[h.length-1].ownerDocument,n.map(h,ra),m=0;i>m;m++)j=h[m],Z.test(j.type||"")&&!N.access(j,"globalEval")&&n.contains(k,j)&&(j.src?n._evalUrl&&n._evalUrl(j.src):n.globalEval(j.textContent.replace(oa,"")))}return a}function va(a,b,c){for(var d,e=b?n.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||n.cleanData(_(d)),d.parentNode&&(c&&n.contains(d.ownerDocument,d)&&aa(_(d,"script")),d.parentNode.removeChild(d));return a}n.extend({htmlPrefilter:function(a){return a.replace(ka,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=n.contains(a.ownerDocument,a);if(!(l.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||n.isXMLDoc(a)))for(g=_(h),f=_(a),d=0,e=f.length;e>d;d++)ta(f[d],g[d]);if(b)if(c)for(f=f||_(a),g=g||_(h),d=0,e=f.length;e>d;d++)sa(f[d],g[d]);else sa(a,h);return g=_(h,"script"),g.length>0&&aa(g,!i&&_(a,"script")),h},cleanData:function(a){for(var b,c,d,e=n.event.special,f=0;void 0!==(c=a[f]);f++)if(L(c)){if(b=c[N.expando]){if(b.events)for(d in b.events)e[d]?n.event.remove(c,d):n.removeEvent(c,d,b.handle);c[N.expando]=void 0}c[O.expando]&&(c[O.expando]=void 0)}}}),n.fn.extend({domManip:ua,detach:function(a){return va(this,a,!0)},remove:function(a){return va(this,a)},text:function(a){return K(this,function(a){return void 0===a?n.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.appendChild(a)}})},prepend:function(){return ua(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=pa(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return ua(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(n.cleanData(_(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null==a?!1:a,b=null==b?a:b,this.map(function(){return n.clone(this,a,b)})},html:function(a){return K(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!la.test(a)&&!$[(Y.exec(a)||["",""])[1].toLowerCase()]){a=n.htmlPrefilter(a);try{for(;d>c;c++)b=this[c]||{},1===b.nodeType&&(n.cleanData(_(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return ua(this,arguments,function(b){var c=this.parentNode;n.inArray(this,a)<0&&(n.cleanData(_(this)),c&&c.replaceChild(b,this))},a)}}),n.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){n.fn[a]=function(a){for(var c,d=[],e=n(a),f=e.length-1,h=0;f>=h;h++)c=h===f?this:this.clone(!0),n(e[h])[b](c),g.apply(d,c.get());return this.pushStack(d)}});var wa,xa={HTML:"block",BODY:"block"};function ya(a,b){var c=n(b.createElement(a)).appendTo(b.body),d=n.css(c[0],"display");return c.detach(),d}function za(a){var b=d,c=xa[a];return c||(c=ya(a,b),"none"!==c&&c||(wa=(wa||n("<iframe frameborder='0' width='0' height='0'/>")).appendTo(b.documentElement),b=wa[0].contentDocument,b.write(),b.close(),c=ya(a,b),wa.detach()),xa[a]=c),c}var Aa=/^margin/,Ba=new RegExp("^("+S+")(?!px)[a-z%]+$","i"),Ca=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)},Da=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e},Ea=d.documentElement;!function(){var b,c,e,f,g=d.createElement("div"),h=d.createElement("div");if(h.style){h.style.backgroundClip="content-box",h.cloneNode(!0).style.backgroundClip="",l.clearCloneStyle="content-box"===h.style.backgroundClip,g.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",g.appendChild(h);function i(){h.style.cssText="-webkit-box-sizing:border-box;-moz-box-sizing:border-box;box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",h.innerHTML="",Ea.appendChild(g);var d=a.getComputedStyle(h);b="1%"!==d.top,f="2px"===d.marginLeft,c="4px"===d.width,h.style.marginRight="50%",e="4px"===d.marginRight,Ea.removeChild(g)}n.extend(l,{pixelPosition:function(){return i(),b},boxSizingReliable:function(){return null==c&&i(),c},pixelMarginRight:function(){return null==c&&i(),e},reliableMarginLeft:function(){return null==c&&i(),f},reliableMarginRight:function(){var b,c=h.appendChild(d.createElement("div"));return c.style.cssText=h.style.cssText="-webkit-box-sizing:content-box;box-sizing:content-box;display:block;margin:0;border:0;padding:0",c.style.marginRight=c.style.width="0",h.style.width="1px",Ea.appendChild(g),b=!parseFloat(a.getComputedStyle(c).marginRight),Ea.removeChild(g),h.removeChild(c),b}})}}();function Fa(a,b,c){var d,e,f,g,h=a.style;return c=c||Ca(a),g=c?c.getPropertyValue(b)||c[b]:void 0,""!==g&&void 0!==g||n.contains(a.ownerDocument,a)||(g=n.style(a,b)),c&&!l.pixelMarginRight()&&Ba.test(g)&&Aa.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f),void 0!==g?g+"":g}function Ga(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Ha=/^(none|table(?!-c[ea]).+)/,Ia={position:"absolute",visibility:"hidden",display:"block"},Ja={letterSpacing:"0",fontWeight:"400"},Ka=["Webkit","O","Moz","ms"],La=d.createElement("div").style;function Ma(a){if(a in La)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ka.length;while(c--)if(a=Ka[c]+b,a in La)return a}function Na(a,b,c){var d=T.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Oa(a,b,c,d,e){for(var f=c===(d?"border":"content")?4:"width"===b?1:0,g=0;4>f;f+=2)"margin"===c&&(g+=n.css(a,c+U[f],!0,e)),d?("content"===c&&(g-=n.css(a,"padding"+U[f],!0,e)),"margin"!==c&&(g-=n.css(a,"border"+U[f]+"Width",!0,e))):(g+=n.css(a,"padding"+U[f],!0,e),"padding"!==c&&(g+=n.css(a,"border"+U[f]+"Width",!0,e)));return g}function Pa(a,b,c){var d=!0,e="width"===b?a.offsetWidth:a.offsetHeight,f=Ca(a),g="border-box"===n.css(a,"boxSizing",!1,f);if(0>=e||null==e){if(e=Fa(a,b,f),(0>e||null==e)&&(e=a.style[b]),Ba.test(e))return e;d=g&&(l.boxSizingReliable()||e===a.style[b]),e=parseFloat(e)||0}return e+Oa(a,b,c||(g?"border":"content"),d,f)+"px"}function Qa(a,b){for(var c,d,e,f=[],g=0,h=a.length;h>g;g++)d=a[g],d.style&&(f[g]=N.get(d,"olddisplay"),c=d.style.display,b?(f[g]||"none"!==c||(d.style.display=""),""===d.style.display&&V(d)&&(f[g]=N.access(d,"olddisplay",za(d.nodeName)))):(e=V(d),"none"===c&&e||N.set(d,"olddisplay",e?c:n.css(d,"display"))));for(g=0;h>g;g++)d=a[g],d.style&&(b&&"none"!==d.style.display&&""!==d.style.display||(d.style.display=b?f[g]||"":"none"));return a}n.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Fa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=n.camelCase(b),i=a.style;return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:i[b]:(f=typeof c,"string"===f&&(e=T.exec(c))&&e[1]&&(c=W(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(n.cssNumber[h]?"":"px")),l.clearCloneStyle||""!==c||0!==b.indexOf("background")||(i[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=n.camelCase(b);return b=n.cssProps[h]||(n.cssProps[h]=Ma(h)||h),g=n.cssHooks[b]||n.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Fa(a,b,d)),"normal"===e&&b in Ja&&(e=Ja[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),n.each(["height","width"],function(a,b){n.cssHooks[b]={get:function(a,c,d){return c?Ha.test(n.css(a,"display"))&&0===a.offsetWidth?Da(a,Ia,function(){return Pa(a,b,d)}):Pa(a,b,d):void 0},set:function(a,c,d){var e,f=d&&Ca(a),g=d&&Oa(a,b,d,"border-box"===n.css(a,"boxSizing",!1,f),f);return g&&(e=T.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=n.css(a,b)),Na(a,c,g)}}}),n.cssHooks.marginLeft=Ga(l.reliableMarginLeft,function(a,b){return b?(parseFloat(Fa(a,"marginLeft"))||a.getBoundingClientRect().left-Da(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px":void 0}),n.cssHooks.marginRight=Ga(l.reliableMarginRight,function(a,b){return b?Da(a,{display:"inline-block"},Fa,[a,"marginRight"]):void 0}),n.each({margin:"",padding:"",border:"Width"},function(a,b){n.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];4>d;d++)e[a+U[d]+b]=f[d]||f[d-2]||f[0];return e}},Aa.test(a)||(n.cssHooks[a+b].set=Na)}),n.fn.extend({css:function(a,b){return K(this,function(a,b,c){var d,e,f={},g=0;if(n.isArray(b)){for(d=Ca(a),e=b.length;e>g;g++)f[b[g]]=n.css(a,b[g],!1,d);return f}return void 0!==c?n.style(a,b,c):n.css(a,b)},a,b,arguments.length>1)},show:function(){return Qa(this,!0)},hide:function(){return Qa(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){V(this)?n(this).show():n(this).hide()})}});function Ra(a,b,c,d,e){return new Ra.prototype.init(a,b,c,d,e)}n.Tween=Ra,Ra.prototype={constructor:Ra,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||n.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(n.cssNumber[c]?"":"px")},cur:function(){var a=Ra.propHooks[this.prop];return a&&a.get?a.get(this):Ra.propHooks._default.get(this)},run:function(a){var b,c=Ra.propHooks[this.prop];return this.options.duration?this.pos=b=n.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):Ra.propHooks._default.set(this),this}},Ra.prototype.init.prototype=Ra.prototype,Ra.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=n.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){n.fx.step[a.prop]?n.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[n.cssProps[a.prop]]&&!n.cssHooks[a.prop]?a.elem[a.prop]=a.now:n.style(a.elem,a.prop,a.now+a.unit)}}},Ra.propHooks.scrollTop=Ra.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},n.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},n.fx=Ra.prototype.init,n.fx.step={};var Sa,Ta,Ua=/^(?:toggle|show|hide)$/,Va=/queueHooks$/;function Wa(){return a.setTimeout(function(){Sa=void 0}),Sa=n.now()}function Xa(a,b){var c,d=0,e={height:a};for(b=b?1:0;4>d;d+=2-b)c=U[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function Ya(a,b,c){for(var d,e=(_a.tweeners[b]||[]).concat(_a.tweeners["*"]),f=0,g=e.length;g>f;f++)if(d=e[f].call(c,b,a))return d}function Za(a,b,c){var d,e,f,g,h,i,j,k,l=this,m={},o=a.style,p=a.nodeType&&V(a),q=N.get(a,"fxshow");c.queue||(h=n._queueHooks(a,"fx"),null==h.unqueued&&(h.unqueued=0,i=h.empty.fire,h.empty.fire=function(){h.unqueued||i()}),h.unqueued++,l.always(function(){l.always(function(){h.unqueued--,n.queue(a,"fx").length||h.empty.fire()})})),1===a.nodeType&&("height"in b||"width"in b)&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=n.css(a,"display"),k="none"===j?N.get(a,"olddisplay")||za(a.nodeName):j,"inline"===k&&"none"===n.css(a,"float")&&(o.display="inline-block")),c.overflow&&(o.overflow="hidden",l.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]}));for(d in b)if(e=b[d],Ua.exec(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}m[d]=q&&q[d]||n.style(a,d)}else j=void 0;if(n.isEmptyObject(m))"inline"===("none"===j?za(a.nodeName):j)&&(o.display=j);else{q?"hidden"in q&&(p=q.hidden):q=N.access(a,"fxshow",{}),f&&(q.hidden=!p),p?n(a).show():l.done(function(){n(a).hide()}),l.done(function(){var b;N.remove(a,"fxshow");for(b in m)n.style(a,b,m[b])});for(d in m)g=Ya(p?q[d]:0,d,l),d in q||(q[d]=g.start,p&&(g.end=g.start,g.start="width"===d||"height"===d?1:0))}}function $a(a,b){var c,d,e,f,g;for(c in a)if(d=n.camelCase(c),e=b[d],f=a[c],n.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=n.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function _a(a,b,c){var d,e,f=0,g=_a.prefilters.length,h=n.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=Sa||Wa(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;i>g;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),1>f&&i?c:(h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:n.extend({},b),opts:n.extend(!0,{specialEasing:{},easing:n.easing._default},c),originalProperties:b,originalOptions:c,startTime:Sa||Wa(),duration:c.duration,tweens:[],createTween:function(b,c){var d=n.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;d>c;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for($a(k,j.opts.specialEasing);g>f;f++)if(d=_a.prefilters[f].call(j,a,k,j.opts))return n.isFunction(d.stop)&&(n._queueHooks(j.elem,j.opts.queue).stop=n.proxy(d.stop,d)),d;return n.map(k,Ya,j),n.isFunction(j.opts.start)&&j.opts.start.call(a,j),n.fx.timer(n.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always)}n.Animation=n.extend(_a,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return W(c.elem,a,T.exec(b),c),c}]},tweener:function(a,b){n.isFunction(a)?(b=a,a=["*"]):a=a.match(G);for(var c,d=0,e=a.length;e>d;d++)c=a[d],_a.tweeners[c]=_a.tweeners[c]||[],_a.tweeners[c].unshift(b)},prefilters:[Za],prefilter:function(a,b){b?_a.prefilters.unshift(a):_a.prefilters.push(a)}}),n.speed=function(a,b,c){var d=a&&"object"==typeof a?n.extend({},a):{complete:c||!c&&b||n.isFunction(a)&&a,duration:a,easing:c&&b||b&&!n.isFunction(b)&&b};return d.duration=n.fx.off?0:"number"==typeof d.duration?d.duration:d.duration in n.fx.speeds?n.fx.speeds[d.duration]:n.fx.speeds._default,null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){n.isFunction(d.old)&&d.old.call(this),d.queue&&n.dequeue(this,d.queue)},d},n.fn.extend({fadeTo:function(a,b,c,d){return this.filter(V).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=n.isEmptyObject(a),f=n.speed(b,c,d),g=function(){var b=_a(this,n.extend({},a),f);(e||N.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=n.timers,g=N.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&Va.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||n.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=N.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=n.timers,g=d?d.length:0;for(c.finish=!0,n.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;g>b;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),n.each(["toggle","show","hide"],function(a,b){var c=n.fn[b];n.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(Xa(b,!0),a,d,e)}}),n.each({slideDown:Xa("show"),slideUp:Xa("hide"),slideToggle:Xa("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){n.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),n.timers=[],n.fx.tick=function(){var a,b=0,c=n.timers;for(Sa=n.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||n.fx.stop(),Sa=void 0},n.fx.timer=function(a){n.timers.push(a),a()?n.fx.start():n.timers.pop()},n.fx.interval=13,n.fx.start=function(){Ta||(Ta=a.setInterval(n.fx.tick,n.fx.interval))},n.fx.stop=function(){a.clearInterval(Ta),Ta=null},n.fx.speeds={slow:600,fast:200,_default:400},n.fn.delay=function(b,c){return b=n.fx?n.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",l.checkOn=""!==a.value,l.optSelected=c.selected,b.disabled=!0,l.optDisabled=!c.disabled,a=d.createElement("input"),a.value="t",a.type="radio",l.radioValue="t"===a.value}();var ab,bb=n.expr.attrHandle;n.fn.extend({attr:function(a,b){return K(this,n.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){n.removeAttr(this,a)})}}),n.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?n.prop(a,b,c):(1===f&&n.isXMLDoc(a)||(b=b.toLowerCase(),e=n.attrHooks[b]||(n.expr.match.bool.test(b)?ab:void 0)),void 0!==c?null===c?void n.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=n.find.attr(a,b),null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!l.radioValue&&"radio"===b&&n.nodeName(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d,e=0,f=b&&b.match(G);if(f&&1===a.nodeType)while(c=f[e++])d=n.propFix[c]||c,n.expr.match.bool.test(c)&&(a[d]=!1),a.removeAttribute(c)}}),ab={set:function(a,b,c){return b===!1?n.removeAttr(a,c):a.setAttribute(c,c),c}},n.each(n.expr.match.bool.source.match(/\w+/g),function(a,b){var c=bb[b]||n.find.attr;bb[b]=function(a,b,d){var e,f;return d||(f=bb[b],bb[b]=e,e=null!=c(a,b,d)?b.toLowerCase():null,bb[b]=f),e}});var cb=/^(?:input|select|textarea|button)$/i,db=/^(?:a|area)$/i;n.fn.extend({prop:function(a,b){return K(this,n.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[n.propFix[a]||a]})}}),n.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&n.isXMLDoc(a)||(b=n.propFix[b]||b,e=n.propHooks[b]),
void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=n.find.attr(a,"tabindex");return b?parseInt(b,10):cb.test(a.nodeName)||db.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),l.optSelected||(n.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),n.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){n.propFix[this.toLowerCase()]=this});var eb=/[\t\r\n\f]/g;function fb(a){return a.getAttribute&&a.getAttribute("class")||""}n.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).addClass(a.call(this,b,fb(this)))});if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(n.isFunction(a))return this.each(function(b){n(this).removeClass(a.call(this,b,fb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(G)||[];while(c=this[i++])if(e=fb(c),d=1===c.nodeType&&(" "+e+" ").replace(eb," ")){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=n.trim(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):n.isFunction(a)?this.each(function(c){n(this).toggleClass(a.call(this,c,fb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=n(this),f=a.match(G)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=fb(this),b&&N.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":N.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+fb(c)+" ").replace(eb," ").indexOf(b)>-1)return!0;return!1}});var gb=/\r/g,hb=/[\x20\t\r\n\f]+/g;n.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=n.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,n(this).val()):a,null==e?e="":"number"==typeof e?e+="":n.isArray(e)&&(e=n.map(e,function(a){return null==a?"":a+""})),b=n.valHooks[this.type]||n.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=n.valHooks[e.type]||n.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(gb,""):null==c?"":c)}}}),n.extend({valHooks:{option:{get:function(a){var b=n.find.attr(a,"value");return null!=b?b:n.trim(n.text(a)).replace(hb," ")}},select:{get:function(a){for(var b,c,d=a.options,e=a.selectedIndex,f="select-one"===a.type||0>e,g=f?null:[],h=f?e+1:d.length,i=0>e?h:f?e:0;h>i;i++)if(c=d[i],(c.selected||i===e)&&(l.optDisabled?!c.disabled:null===c.getAttribute("disabled"))&&(!c.parentNode.disabled||!n.nodeName(c.parentNode,"optgroup"))){if(b=n(c).val(),f)return b;g.push(b)}return g},set:function(a,b){var c,d,e=a.options,f=n.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=n.inArray(n.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),n.each(["radio","checkbox"],function(){n.valHooks[this]={set:function(a,b){return n.isArray(b)?a.checked=n.inArray(n(a).val(),b)>-1:void 0}},l.checkOn||(n.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var ib=/^(?:focusinfocus|focusoutblur)$/;n.extend(n.event,{trigger:function(b,c,e,f){var g,h,i,j,l,m,o,p=[e||d],q=k.call(b,"type")?b.type:b,r=k.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!ib.test(q+n.event.triggered)&&(q.indexOf(".")>-1&&(r=q.split("."),q=r.shift(),r.sort()),l=q.indexOf(":")<0&&"on"+q,b=b[n.expando]?b:new n.Event(q,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=r.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+r.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:n.makeArray(c,[b]),o=n.event.special[q]||{},f||!o.trigger||o.trigger.apply(e,c)!==!1)){if(!f&&!o.noBubble&&!n.isWindow(e)){for(j=o.delegateType||q,ib.test(j+q)||(h=h.parentNode);h;h=h.parentNode)p.push(h),i=h;i===(e.ownerDocument||d)&&p.push(i.defaultView||i.parentWindow||a)}g=0;while((h=p[g++])&&!b.isPropagationStopped())b.type=g>1?j:o.bindType||q,m=(N.get(h,"events")||{})[b.type]&&N.get(h,"handle"),m&&m.apply(h,c),m=l&&h[l],m&&m.apply&&L(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=q,f||b.isDefaultPrevented()||o._default&&o._default.apply(p.pop(),c)!==!1||!L(e)||l&&n.isFunction(e[q])&&!n.isWindow(e)&&(i=e[l],i&&(e[l]=null),n.event.triggered=q,e[q](),n.event.triggered=void 0,i&&(e[l]=i)),b.result}},simulate:function(a,b,c){var d=n.extend(new n.Event,c,{type:a,isSimulated:!0});n.event.trigger(d,null,b)}}),n.fn.extend({trigger:function(a,b){return this.each(function(){n.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];return c?n.event.trigger(a,b,c,!0):void 0}}),n.each("blur focus focusin focusout load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup error contextmenu".split(" "),function(a,b){n.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),n.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),l.focusin="onfocusin"in a,l.focusin||n.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){n.event.simulate(b,a.target,n.event.fix(a))};n.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=N.access(d,b);e||d.addEventListener(a,c,!0),N.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=N.access(d,b)-1;e?N.access(d,b,e):(d.removeEventListener(a,c,!0),N.remove(d,b))}}});var jb=a.location,kb=n.now(),lb=/\?/;n.parseJSON=function(a){return JSON.parse(a+"")},n.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||n.error("Invalid XML: "+b),c};var mb=/#.*$/,nb=/([?&])_=[^&]*/,ob=/^(.*?):[ \t]*([^\r\n]*)$/gm,pb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,qb=/^(?:GET|HEAD)$/,rb=/^\/\//,sb={},tb={},ub="*/".concat("*"),vb=d.createElement("a");vb.href=jb.href;function wb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(G)||[];if(n.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function xb(a,b,c,d){var e={},f=a===tb;function g(h){var i;return e[h]=!0,n.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function yb(a,b){var c,d,e=n.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&n.extend(!0,a,d),a}function zb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}return f?(f!==i[0]&&i.unshift(f),c[f]):void 0}function Ab(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}n.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:jb.href,type:"GET",isLocal:pb.test(jb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":ub,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":n.parseJSON,"text xml":n.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?yb(yb(a,n.ajaxSettings),b):yb(n.ajaxSettings,a)},ajaxPrefilter:wb(sb),ajaxTransport:wb(tb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m=n.ajaxSetup({},c),o=m.context||m,p=m.context&&(o.nodeType||o.jquery)?n(o):n.event,q=n.Deferred(),r=n.Callbacks("once memory"),s=m.statusCode||{},t={},u={},v=0,w="canceled",x={readyState:0,getResponseHeader:function(a){var b;if(2===v){if(!h){h={};while(b=ob.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return 2===v?g:null},setRequestHeader:function(a,b){var c=a.toLowerCase();return v||(a=u[c]=u[c]||a,t[a]=b),this},overrideMimeType:function(a){return v||(m.mimeType=a),this},statusCode:function(a){var b;if(a)if(2>v)for(b in a)s[b]=[s[b],a[b]];else x.always(a[x.status]);return this},abort:function(a){var b=a||w;return e&&e.abort(b),z(0,b),this}};if(q.promise(x).complete=r.add,x.success=x.done,x.error=x.fail,m.url=((b||m.url||jb.href)+"").replace(mb,"").replace(rb,jb.protocol+"//"),m.type=c.method||c.type||m.method||m.type,m.dataTypes=n.trim(m.dataType||"*").toLowerCase().match(G)||[""],null==m.crossDomain){j=d.createElement("a");try{j.href=m.url,j.href=j.href,m.crossDomain=vb.protocol+"//"+vb.host!=j.protocol+"//"+j.host}catch(y){m.crossDomain=!0}}if(m.data&&m.processData&&"string"!=typeof m.data&&(m.data=n.param(m.data,m.traditional)),xb(sb,m,c,x),2===v)return x;k=n.event&&m.global,k&&0===n.active++&&n.event.trigger("ajaxStart"),m.type=m.type.toUpperCase(),m.hasContent=!qb.test(m.type),f=m.url,m.hasContent||(m.data&&(f=m.url+=(lb.test(f)?"&":"?")+m.data,delete m.data),m.cache===!1&&(m.url=nb.test(f)?f.replace(nb,"$1_="+kb++):f+(lb.test(f)?"&":"?")+"_="+kb++)),m.ifModified&&(n.lastModified[f]&&x.setRequestHeader("If-Modified-Since",n.lastModified[f]),n.etag[f]&&x.setRequestHeader("If-None-Match",n.etag[f])),(m.data&&m.hasContent&&m.contentType!==!1||c.contentType)&&x.setRequestHeader("Content-Type",m.contentType),x.setRequestHeader("Accept",m.dataTypes[0]&&m.accepts[m.dataTypes[0]]?m.accepts[m.dataTypes[0]]+("*"!==m.dataTypes[0]?", "+ub+"; q=0.01":""):m.accepts["*"]);for(l in m.headers)x.setRequestHeader(l,m.headers[l]);if(m.beforeSend&&(m.beforeSend.call(o,x,m)===!1||2===v))return x.abort();w="abort";for(l in{success:1,error:1,complete:1})x[l](m[l]);if(e=xb(tb,m,c,x)){if(x.readyState=1,k&&p.trigger("ajaxSend",[x,m]),2===v)return x;m.async&&m.timeout>0&&(i=a.setTimeout(function(){x.abort("timeout")},m.timeout));try{v=1,e.send(t,z)}catch(y){if(!(2>v))throw y;z(-1,y)}}else z(-1,"No Transport");function z(b,c,d,h){var j,l,t,u,w,y=c;2!==v&&(v=2,i&&a.clearTimeout(i),e=void 0,g=h||"",x.readyState=b>0?4:0,j=b>=200&&300>b||304===b,d&&(u=zb(m,x,d)),u=Ab(m,u,x,j),j?(m.ifModified&&(w=x.getResponseHeader("Last-Modified"),w&&(n.lastModified[f]=w),w=x.getResponseHeader("etag"),w&&(n.etag[f]=w)),204===b||"HEAD"===m.type?y="nocontent":304===b?y="notmodified":(y=u.state,l=u.data,t=u.error,j=!t)):(t=y,!b&&y||(y="error",0>b&&(b=0))),x.status=b,x.statusText=(c||y)+"",j?q.resolveWith(o,[l,y,x]):q.rejectWith(o,[x,y,t]),x.statusCode(s),s=void 0,k&&p.trigger(j?"ajaxSuccess":"ajaxError",[x,m,j?l:t]),r.fireWith(o,[x,y]),k&&(p.trigger("ajaxComplete",[x,m]),--n.active||n.event.trigger("ajaxStop")))}return x},getJSON:function(a,b,c){return n.get(a,b,c,"json")},getScript:function(a,b){return n.get(a,void 0,b,"script")}}),n.each(["get","post"],function(a,b){n[b]=function(a,c,d,e){return n.isFunction(c)&&(e=e||d,d=c,c=void 0),n.ajax(n.extend({url:a,type:b,dataType:e,data:c,success:d},n.isPlainObject(a)&&a))}}),n._evalUrl=function(a){return n.ajax({url:a,type:"GET",dataType:"script",async:!1,global:!1,"throws":!0})},n.fn.extend({wrapAll:function(a){var b;return n.isFunction(a)?this.each(function(b){n(this).wrapAll(a.call(this,b))}):(this[0]&&(b=n(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this)},wrapInner:function(a){return n.isFunction(a)?this.each(function(b){n(this).wrapInner(a.call(this,b))}):this.each(function(){var b=n(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=n.isFunction(a);return this.each(function(c){n(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(){return this.parent().each(function(){n.nodeName(this,"body")||n(this).replaceWith(this.childNodes)}).end()}}),n.expr.filters.hidden=function(a){return!n.expr.filters.visible(a)},n.expr.filters.visible=function(a){return a.offsetWidth>0||a.offsetHeight>0||a.getClientRects().length>0};var Bb=/%20/g,Cb=/\[\]$/,Db=/\r?\n/g,Eb=/^(?:submit|button|image|reset|file)$/i,Fb=/^(?:input|select|textarea|keygen)/i;function Gb(a,b,c,d){var e;if(n.isArray(b))n.each(b,function(b,e){c||Cb.test(a)?d(a,e):Gb(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==n.type(b))d(a,b);else for(e in b)Gb(a+"["+e+"]",b[e],c,d)}n.param=function(a,b){var c,d=[],e=function(a,b){b=n.isFunction(b)?b():null==b?"":b,d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(b)};if(void 0===b&&(b=n.ajaxSettings&&n.ajaxSettings.traditional),n.isArray(a)||a.jquery&&!n.isPlainObject(a))n.each(a,function(){e(this.name,this.value)});else for(c in a)Gb(c,a[c],b,e);return d.join("&").replace(Bb,"+")},n.fn.extend({serialize:function(){return n.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=n.prop(this,"elements");return a?n.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!n(this).is(":disabled")&&Fb.test(this.nodeName)&&!Eb.test(a)&&(this.checked||!X.test(a))}).map(function(a,b){var c=n(this).val();return null==c?null:n.isArray(c)?n.map(c,function(a){return{name:b.name,value:a.replace(Db,"\r\n")}}):{name:b.name,value:c.replace(Db,"\r\n")}}).get()}}),n.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Hb={0:200,1223:204},Ib=n.ajaxSettings.xhr();l.cors=!!Ib&&"withCredentials"in Ib,l.ajax=Ib=!!Ib,n.ajaxTransport(function(b){var c,d;return l.cors||Ib&&!b.crossDomain?{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Hb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}:void 0}),n.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return n.globalEval(a),a}}}),n.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),n.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=n("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Jb=[],Kb=/(=)\?(?=&|$)|\?\?/;n.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Jb.pop()||n.expando+"_"+kb++;return this[a]=!0,a}}),n.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Kb.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Kb.test(b.data)&&"data");return h||"jsonp"===b.dataTypes[0]?(e=b.jsonpCallback=n.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Kb,"$1"+e):b.jsonp!==!1&&(b.url+=(lb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||n.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?n(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Jb.push(e)),g&&n.isFunction(f)&&f(g[0]),g=f=void 0}),"script"):void 0}),n.parseHTML=function(a,b,c){if(!a||"string"!=typeof a)return null;"boolean"==typeof b&&(c=b,b=!1),b=b||d;var e=x.exec(a),f=!c&&[];return e?[b.createElement(e[1])]:(e=ca([a],b,f),f&&f.length&&n(f).remove(),n.merge([],e.childNodes))};var Lb=n.fn.load;n.fn.load=function(a,b,c){if("string"!=typeof a&&Lb)return Lb.apply(this,arguments);var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=n.trim(a.slice(h)),a=a.slice(0,h)),n.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&n.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?n("<div>").append(n.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},n.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){n.fn[b]=function(a){return this.on(b,a)}}),n.expr.filters.animated=function(a){return n.grep(n.timers,function(b){return a===b.elem}).length};function Mb(a){return n.isWindow(a)?a:9===a.nodeType&&a.defaultView}n.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=n.css(a,"position"),l=n(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=n.css(a,"top"),i=n.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),n.isFunction(b)&&(b=b.call(a,c,n.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},n.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){n.offset.setOffset(this,a,b)});var b,c,d=this[0],e={top:0,left:0},f=d&&d.ownerDocument;if(f)return b=f.documentElement,n.contains(b,d)?(e=d.getBoundingClientRect(),c=Mb(f),{top:e.top+c.pageYOffset-b.clientTop,left:e.left+c.pageXOffset-b.clientLeft}):e},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===n.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),n.nodeName(a[0],"html")||(d=a.offset()),d.top+=n.css(a[0],"borderTopWidth",!0),d.left+=n.css(a[0],"borderLeftWidth",!0)),{top:b.top-d.top-n.css(c,"marginTop",!0),left:b.left-d.left-n.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===n.css(a,"position"))a=a.offsetParent;return a||Ea})}}),n.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;n.fn[a]=function(d){return K(this,function(a,d,e){var f=Mb(a);return void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),n.each(["top","left"],function(a,b){n.cssHooks[b]=Ga(l.pixelPosition,function(a,c){return c?(c=Fa(a,b),Ba.test(c)?n(a).position()[b]+"px":c):void 0})}),n.each({Height:"height",Width:"width"},function(a,b){n.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){n.fn[d]=function(d,e){var f=arguments.length&&(c||"boolean"!=typeof d),g=c||(d===!0||e===!0?"margin":"border");return K(this,function(b,c,d){var e;return n.isWindow(b)?b.document.documentElement["client"+a]:9===b.nodeType?(e=b.documentElement,Math.max(b.body["scroll"+a],e["scroll"+a],b.body["offset"+a],e["offset"+a],e["client"+a])):void 0===d?n.css(b,c,g):n.style(b,c,d,g)},b,f?d:void 0,f,null)}})}),n.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)},size:function(){return this.length}}),n.fn.andSelf=n.fn.addBack,"function"==typeof define&&define.amd&&define("jquery",[],function(){return n});var Nb=a.jQuery,Ob=a.$;return n.noConflict=function(b){return a.$===n&&(a.$=Ob),b&&a.jQuery===n&&(a.jQuery=Nb),n},b||(a.jQuery=a.$=n),n});
;
/*!
 * Modernizr v2.8.3
 * www.modernizr.com
 *
 * Copyright (c) Faruk Ates, Paul Irish, Alex Sexton
 * Available under the BSD and MIT licenses: www.modernizr.com/license/
 */

/*
 * Modernizr tests which native CSS3 and HTML5 features are available in
 * the current UA and makes the results available to you in two ways:
 * as properties on a global Modernizr object, and as classes on the
 * <html> element. This information allows you to progressively enhance
 * your pages with a granular level of control over the experience.
 *
 * Modernizr has an optional (not included) conditional resource loader
 * called Modernizr.load(), based on Yepnope.js (yepnopejs.com).
 * To get a build that includes Modernizr.load(), as well as choosing
 * which tests to include, go to www.modernizr.com/download/
 *
 * Authors        Faruk Ates, Paul Irish, Alex Sexton
 * Contributors   Ryan Seddon, Ben Alman
 */

window.Modernizr = (function( window, document, undefined ) {

    var version = '2.8.3',

    Modernizr = {},

    /*>>cssclasses*/
    // option for enabling the HTML classes to be added
    enableClasses = true,
    /*>>cssclasses*/

    docElement = document.documentElement,

    /**
     * Create our "modernizr" element that we do most feature tests on.
     */
    mod = 'modernizr',
    modElem = document.createElement(mod),
    mStyle = modElem.style,

    /**
     * Create the input element for various Web Forms feature tests.
     */
    inputElem /*>>inputelem*/ = document.createElement('input') /*>>inputelem*/ ,

    /*>>smile*/
    smile = ':)',
    /*>>smile*/

    toString = {}.toString,

    // TODO :: make the prefixes more granular
    /*>>prefixes*/
    // List of property values to set for css tests. See ticket #21
    prefixes = ' -webkit- -moz- -o- -ms- '.split(' '),
    /*>>prefixes*/

    /*>>domprefixes*/
    // Following spec is to expose vendor-specific style properties as:
    //   elem.style.WebkitBorderRadius
    // and the following would be incorrect:
    //   elem.style.webkitBorderRadius

    // Webkit ghosts their properties in lowercase but Opera & Moz do not.
    // Microsoft uses a lowercase `ms` instead of the correct `Ms` in IE8+
    //   erik.eae.net/archives/2008/03/10/21.48.10/

    // More here: github.com/Modernizr/Modernizr/issues/issue/21
    omPrefixes = 'Webkit Moz O ms',

    cssomPrefixes = omPrefixes.split(' '),

    domPrefixes = omPrefixes.toLowerCase().split(' '),
    /*>>domprefixes*/

    /*>>ns*/
    ns = {'svg': 'http://www.w3.org/2000/svg'},
    /*>>ns*/

    tests = {},
    inputs = {},
    attrs = {},

    classes = [],

    slice = classes.slice,

    featureName, // used in testing loop


    /*>>teststyles*/
    // Inject element with style element and some CSS rules
    injectElementWithStyles = function( rule, callback, nodes, testnames ) {

      var style, ret, node, docOverflow,
          div = document.createElement('div'),
          // After page load injecting a fake body doesn't work so check if body exists
          body = document.body,
          // IE6 and 7 won't return offsetWidth or offsetHeight unless it's in the body element, so we fake it.
          fakeBody = body || document.createElement('body');

      if ( parseInt(nodes, 10) ) {
          // In order not to give false positives we create a node for each test
          // This also allows the method to scale for unspecified uses
          while ( nodes-- ) {
              node = document.createElement('div');
              node.id = testnames ? testnames[nodes] : mod + (nodes + 1);
              div.appendChild(node);
          }
      }

      // <style> elements in IE6-9 are considered 'NoScope' elements and therefore will be removed
      // when injected with innerHTML. To get around this you need to prepend the 'NoScope' element
      // with a 'scoped' element, in our case the soft-hyphen entity as it won't mess with our measurements.
      // msdn.microsoft.com/en-us/library/ms533897%28VS.85%29.aspx
      // Documents served as xml will throw if using &shy; so use xml friendly encoded version. See issue #277
      style = ['&#173;','<style id="s', mod, '">', rule, '</style>'].join('');
      div.id = mod;
      // IE6 will false positive on some tests due to the style element inside the test div somehow interfering offsetHeight, so insert it into body or fakebody.
      // Opera will act all quirky when injecting elements in documentElement when page is served as xml, needs fakebody too. #270
      (body ? div : fakeBody).innerHTML += style;
      fakeBody.appendChild(div);
      if ( !body ) {
          //avoid crashing IE8, if background image is used
          fakeBody.style.background = '';
          //Safari 5.13/5.1.4 OSX stops loading if ::-webkit-scrollbar is used and scrollbars are visible
          fakeBody.style.overflow = 'hidden';
          docOverflow = docElement.style.overflow;
          docElement.style.overflow = 'hidden';
          docElement.appendChild(fakeBody);
      }

      ret = callback(div, rule);
      // If this is done after page load we don't want to remove the body so check if body exists
      if ( !body ) {
          fakeBody.parentNode.removeChild(fakeBody);
          docElement.style.overflow = docOverflow;
      } else {
          div.parentNode.removeChild(div);
      }

      return !!ret;

    },
    /*>>teststyles*/

    /*>>mq*/
    // adapted from matchMedia polyfill
    // by Scott Jehl and Paul Irish
    // gist.github.com/786768
    testMediaQuery = function( mq ) {

      var matchMedia = window.matchMedia || window.msMatchMedia;
      if ( matchMedia ) {
        return matchMedia(mq) && matchMedia(mq).matches || false;
      }

      var bool;

      injectElementWithStyles('@media ' + mq + ' { #' + mod + ' { position: absolute; } }', function( node ) {
        bool = (window.getComputedStyle ?
                  getComputedStyle(node, null) :
                  node.currentStyle)['position'] == 'absolute';
      });

      return bool;

     },
     /*>>mq*/


    /*>>hasevent*/
    //
    // isEventSupported determines if a given element supports the given event
    // kangax.github.com/iseventsupported/
    //
    // The following results are known incorrects:
    //   Modernizr.hasEvent("webkitTransitionEnd", elem) // false negative
    //   Modernizr.hasEvent("textInput") // in Webkit. github.com/Modernizr/Modernizr/issues/333
    //   ...
    isEventSupported = (function() {

      var TAGNAMES = {
        'select': 'input', 'change': 'input',
        'submit': 'form', 'reset': 'form',
        'error': 'img', 'load': 'img', 'abort': 'img'
      };

      function isEventSupported( eventName, element ) {

        element = element || document.createElement(TAGNAMES[eventName] || 'div');
        eventName = 'on' + eventName;

        // When using `setAttribute`, IE skips "unload", WebKit skips "unload" and "resize", whereas `in` "catches" those
        var isSupported = eventName in element;

        if ( !isSupported ) {
          // If it has no `setAttribute` (i.e. doesn't implement Node interface), try generic element
          if ( !element.setAttribute ) {
            element = document.createElement('div');
          }
          if ( element.setAttribute && element.removeAttribute ) {
            element.setAttribute(eventName, '');
            isSupported = is(element[eventName], 'function');

            // If property was created, "remove it" (by setting value to `undefined`)
            if ( !is(element[eventName], 'undefined') ) {
              element[eventName] = undefined;
            }
            element.removeAttribute(eventName);
          }
        }

        element = null;
        return isSupported;
      }
      return isEventSupported;
    })(),
    /*>>hasevent*/

    // TODO :: Add flag for hasownprop ? didn't last time

    // hasOwnProperty shim by kangax needed for Safari 2.0 support
    _hasOwnProperty = ({}).hasOwnProperty, hasOwnProp;

    if ( !is(_hasOwnProperty, 'undefined') && !is(_hasOwnProperty.call, 'undefined') ) {
      hasOwnProp = function (object, property) {
        return _hasOwnProperty.call(object, property);
      };
    }
    else {
      hasOwnProp = function (object, property) { /* yes, this can give false positives/negatives, but most of the time we don't care about those */
        return ((property in object) && is(object.constructor.prototype[property], 'undefined'));
      };
    }

    // Adapted from ES5-shim https://github.com/kriskowal/es5-shim/blob/master/es5-shim.js
    // es5.github.com/#x15.3.4.5

    if (!Function.prototype.bind) {
      Function.prototype.bind = function bind(that) {

        var target = this;

        if (typeof target != "function") {
            throw new TypeError();
        }

        var args = slice.call(arguments, 1),
            bound = function () {

            if (this instanceof bound) {

              var F = function(){};
              F.prototype = target.prototype;
              var self = new F();

              var result = target.apply(
                  self,
                  args.concat(slice.call(arguments))
              );
              if (Object(result) === result) {
                  return result;
              }
              return self;

            } else {

              return target.apply(
                  that,
                  args.concat(slice.call(arguments))
              );

            }

        };

        return bound;
      };
    }

    /**
     * setCss applies given styles to the Modernizr DOM node.
     */
    function setCss( str ) {
        mStyle.cssText = str;
    }

    /**
     * setCssAll extrapolates all vendor-specific css strings.
     */
    function setCssAll( str1, str2 ) {
        return setCss(prefixes.join(str1 + ';') + ( str2 || '' ));
    }

    /**
     * is returns a boolean for if typeof obj is exactly type.
     */
    function is( obj, type ) {
        return typeof obj === type;
    }

    /**
     * contains returns a boolean for if substr is found within str.
     */
    function contains( str, substr ) {
        return !!~('' + str).indexOf(substr);
    }

    /*>>testprop*/

    // testProps is a generic CSS / DOM property test.

    // In testing support for a given CSS property, it's legit to test:
    //    `elem.style[styleName] !== undefined`
    // If the property is supported it will return an empty string,
    // if unsupported it will return undefined.

    // We'll take advantage of this quick test and skip setting a style
    // on our modernizr element, but instead just testing undefined vs
    // empty string.

    // Because the testing of the CSS property names (with "-", as
    // opposed to the camelCase DOM properties) is non-portable and
    // non-standard but works in WebKit and IE (but not Gecko or Opera),
    // we explicitly reject properties with dashes so that authors
    // developing in WebKit or IE first don't end up with
    // browser-specific content by accident.

    function testProps( props, prefixed ) {
        for ( var i in props ) {
            var prop = props[i];
            if ( !contains(prop, "-") && mStyle[prop] !== undefined ) {
                return prefixed == 'pfx' ? prop : true;
            }
        }
        return false;
    }
    /*>>testprop*/

    // TODO :: add testDOMProps
    /**
     * testDOMProps is a generic DOM property test; if a browser supports
     *   a certain property, it won't return undefined for it.
     */
    function testDOMProps( props, obj, elem ) {
        for ( var i in props ) {
            var item = obj[props[i]];
            if ( item !== undefined) {

                // return the property name as a string
                if (elem === false) return props[i];

                // let's bind a function
                if (is(item, 'function')){
                  // default to autobind unless override
                  return item.bind(elem || obj);
                }

                // return the unbound function or obj or value
                return item;
            }
        }
        return false;
    }

    /*>>testallprops*/
    /**
     * testPropsAll tests a list of DOM properties we want to check against.
     *   We specify literally ALL possible (known and/or likely) properties on
     *   the element including the non-vendor prefixed one, for forward-
     *   compatibility.
     */
    function testPropsAll( prop, prefixed, elem ) {

        var ucProp  = prop.charAt(0).toUpperCase() + prop.slice(1),
            props   = (prop + ' ' + cssomPrefixes.join(ucProp + ' ') + ucProp).split(' ');

        // did they call .prefixed('boxSizing') or are we just testing a prop?
        if(is(prefixed, "string") || is(prefixed, "undefined")) {
          return testProps(props, prefixed);

        // otherwise, they called .prefixed('requestAnimationFrame', window[, elem])
        } else {
          props = (prop + ' ' + (domPrefixes).join(ucProp + ' ') + ucProp).split(' ');
          return testDOMProps(props, prefixed, elem);
        }
    }
    /*>>testallprops*/


    /**
     * Tests
     * -----
     */

    // The *new* flexbox
    // dev.w3.org/csswg/css3-flexbox

    tests['flexbox'] = function() {
      return testPropsAll('flexWrap');
    };

    // The *old* flexbox
    // www.w3.org/TR/2009/WD-css3-flexbox-20090723/

    tests['flexboxlegacy'] = function() {
        return testPropsAll('boxDirection');
    };

    // On the S60 and BB Storm, getContext exists, but always returns undefined
    // so we actually have to call getContext() to verify
    // github.com/Modernizr/Modernizr/issues/issue/97/

    tests['canvas'] = function() {
        var elem = document.createElement('canvas');
        return !!(elem.getContext && elem.getContext('2d'));
    };

    tests['canvastext'] = function() {
        return !!(Modernizr['canvas'] && is(document.createElement('canvas').getContext('2d').fillText, 'function'));
    };

    // webk.it/70117 is tracking a legit WebGL feature detect proposal

    // We do a soft detect which may false positive in order to avoid
    // an expensive context creation: bugzil.la/732441

    tests['webgl'] = function() {
        return !!window.WebGLRenderingContext;
    };

    /*
     * The Modernizr.touch test only indicates if the browser supports
     *    touch events, which does not necessarily reflect a touchscreen
     *    device, as evidenced by tablets running Windows 7 or, alas,
     *    the Palm Pre / WebOS (touch) phones.
     *
     * Additionally, Chrome (desktop) used to lie about its support on this,
     *    but that has since been rectified: crbug.com/36415
     *
     * We also test for Firefox 4 Multitouch Support.
     *
     * For more info, see: modernizr.github.com/Modernizr/touch.html
     */

    tests['touch'] = function() {
        var bool;

        if(('ontouchstart' in window) || window.DocumentTouch && document instanceof DocumentTouch) {
          bool = true;
        } else {
          injectElementWithStyles(['@media (',prefixes.join('touch-enabled),('),mod,')','{#modernizr{top:9px;position:absolute}}'].join(''), function( node ) {
            bool = node.offsetTop === 9;
          });
        }

        return bool;
    };


    // geolocation is often considered a trivial feature detect...
    // Turns out, it's quite tricky to get right:
    //
    // Using !!navigator.geolocation does two things we don't want. It:
    //   1. Leaks memory in IE9: github.com/Modernizr/Modernizr/issues/513
    //   2. Disables page caching in WebKit: webk.it/43956
    //
    // Meanwhile, in Firefox < 8, an about:config setting could expose
    // a false positive that would throw an exception: bugzil.la/688158

    tests['geolocation'] = function() {
        return 'geolocation' in navigator;
    };


    tests['postmessage'] = function() {
      return !!window.postMessage;
    };


    // Chrome incognito mode used to throw an exception when using openDatabase
    // It doesn't anymore.
    tests['websqldatabase'] = function() {
      return !!window.openDatabase;
    };

    // Vendors had inconsistent prefixing with the experimental Indexed DB:
    // - Webkit's implementation is accessible through webkitIndexedDB
    // - Firefox shipped moz_indexedDB before FF4b9, but since then has been mozIndexedDB
    // For speed, we don't test the legacy (and beta-only) indexedDB
    tests['indexedDB'] = function() {
      return !!testPropsAll("indexedDB", window);
    };

    // documentMode logic from YUI to filter out IE8 Compat Mode
    //   which false positives.
    tests['hashchange'] = function() {
      return isEventSupported('hashchange', window) && (document.documentMode === undefined || document.documentMode > 7);
    };

    // Per 1.6:
    // This used to be Modernizr.historymanagement but the longer
    // name has been deprecated in favor of a shorter and property-matching one.
    // The old API is still available in 1.6, but as of 2.0 will throw a warning,
    // and in the first release thereafter disappear entirely.
    tests['history'] = function() {
      return !!(window.history && history.pushState);
    };

    tests['draganddrop'] = function() {
        var div = document.createElement('div');
        return ('draggable' in div) || ('ondragstart' in div && 'ondrop' in div);
    };

    // FF3.6 was EOL'ed on 4/24/12, but the ESR version of FF10
    // will be supported until FF19 (2/12/13), at which time, ESR becomes FF17.
    // FF10 still uses prefixes, so check for it until then.
    // for more ESR info, see: mozilla.org/en-US/firefox/organizations/faq/
    tests['websockets'] = function() {
        return 'WebSocket' in window || 'MozWebSocket' in window;
    };


    // css-tricks.com/rgba-browser-support/
    tests['rgba'] = function() {
        // Set an rgba() color and check the returned value

        setCss('background-color:rgba(150,255,150,.5)');

        return contains(mStyle.backgroundColor, 'rgba');
    };

    tests['hsla'] = function() {
        // Same as rgba(), in fact, browsers re-map hsla() to rgba() internally,
        //   except IE9 who retains it as hsla

        setCss('background-color:hsla(120,40%,100%,.5)');

        return contains(mStyle.backgroundColor, 'rgba') || contains(mStyle.backgroundColor, 'hsla');
    };

    tests['multiplebgs'] = function() {
        // Setting multiple images AND a color on the background shorthand property
        //  and then querying the style.background property value for the number of
        //  occurrences of "url(" is a reliable method for detecting ACTUAL support for this!

        setCss('background:url(https://),url(https://),red url(https://)');

        // If the UA supports multiple backgrounds, there should be three occurrences
        //   of the string "url(" in the return value for elemStyle.background

        return (/(url\s*\(.*?){3}/).test(mStyle.background);
    };



    // this will false positive in Opera Mini
    //   github.com/Modernizr/Modernizr/issues/396

    tests['backgroundsize'] = function() {
        return testPropsAll('backgroundSize');
    };

    tests['borderimage'] = function() {
        return testPropsAll('borderImage');
    };


    // Super comprehensive table about all the unique implementations of
    // border-radius: muddledramblings.com/table-of-css3-border-radius-compliance

    tests['borderradius'] = function() {
        return testPropsAll('borderRadius');
    };

    // WebOS unfortunately false positives on this test.
    tests['boxshadow'] = function() {
        return testPropsAll('boxShadow');
    };

    // FF3.0 will false positive on this test
    tests['textshadow'] = function() {
        return document.createElement('div').style.textShadow === '';
    };


    tests['opacity'] = function() {
        // Browsers that actually have CSS Opacity implemented have done so
        //  according to spec, which means their return values are within the
        //  range of [0.0,1.0] - including the leading zero.

        setCssAll('opacity:.55');

        // The non-literal . in this regex is intentional:
        //   German Chrome returns this value as 0,55
        // github.com/Modernizr/Modernizr/issues/#issue/59/comment/516632
        return (/^0.55$/).test(mStyle.opacity);
    };


    // Note, Android < 4 will pass this test, but can only animate
    //   a single property at a time
    //   goo.gl/v3V4Gp
    tests['cssanimations'] = function() {
        return testPropsAll('animationName');
    };


    tests['csscolumns'] = function() {
        return testPropsAll('columnCount');
    };


    tests['cssgradients'] = function() {
        /**
         * For CSS Gradients syntax, please see:
         * webkit.org/blog/175/introducing-css-gradients/
         * developer.mozilla.org/en/CSS/-moz-linear-gradient
         * developer.mozilla.org/en/CSS/-moz-radial-gradient
         * dev.w3.org/csswg/css3-images/#gradients-
         */

        var str1 = 'background-image:',
            str2 = 'gradient(linear,left top,right bottom,from(#9f9),to(white));',
            str3 = 'linear-gradient(left top,#9f9, white);';

        setCss(
             // legacy webkit syntax (FIXME: remove when syntax not in use anymore)
              (str1 + '-webkit- '.split(' ').join(str2 + str1) +
             // standard syntax             // trailing 'background-image:'
              prefixes.join(str3 + str1)).slice(0, -str1.length)
        );

        return contains(mStyle.backgroundImage, 'gradient');
    };


    tests['cssreflections'] = function() {
        return testPropsAll('boxReflect');
    };


    tests['csstransforms'] = function() {
        return !!testPropsAll('transform');
    };


    tests['csstransforms3d'] = function() {

        var ret = !!testPropsAll('perspective');

        // Webkit's 3D transforms are passed off to the browser's own graphics renderer.
        //   It works fine in Safari on Leopard and Snow Leopard, but not in Chrome in
        //   some conditions. As a result, Webkit typically recognizes the syntax but
        //   will sometimes throw a false positive, thus we must do a more thorough check:
        if ( ret && 'webkitPerspective' in docElement.style ) {

          // Webkit allows this media query to succeed only if the feature is enabled.
          // `@media (transform-3d),(-webkit-transform-3d){ ... }`
          injectElementWithStyles('@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}', function( node, rule ) {
            ret = node.offsetLeft === 9 && node.offsetHeight === 3;
          });
        }
        return ret;
    };


    tests['csstransitions'] = function() {
        return testPropsAll('transition');
    };


    /*>>fontface*/
    // @font-face detection routine by Diego Perini
    // javascript.nwbox.com/CSSSupport/

    // false positives:
    //   WebOS github.com/Modernizr/Modernizr/issues/342
    //   WP7   github.com/Modernizr/Modernizr/issues/538
    tests['fontface'] = function() {
        var bool;

        injectElementWithStyles('@font-face {font-family:"font";src:url("https://")}', function( node, rule ) {
          var style = document.getElementById('smodernizr'),
              sheet = style.sheet || style.styleSheet,
              cssText = sheet ? (sheet.cssRules && sheet.cssRules[0] ? sheet.cssRules[0].cssText : sheet.cssText || '') : '';

          bool = /src/i.test(cssText) && cssText.indexOf(rule.split(' ')[0]) === 0;
        });

        return bool;
    };
    /*>>fontface*/

    // CSS generated content detection
    tests['generatedcontent'] = function() {
        var bool;

        injectElementWithStyles(['#',mod,'{font:0/0 a}#',mod,':after{content:"',smile,'";visibility:hidden;font:3px/1 a}'].join(''), function( node ) {
          bool = node.offsetHeight >= 3;
        });

        return bool;
    };



    // These tests evaluate support of the video/audio elements, as well as
    // testing what types of content they support.
    //
    // We're using the Boolean constructor here, so that we can extend the value
    // e.g.  Modernizr.video     // true
    //       Modernizr.video.ogg // 'probably'
    //
    // Codec values from : github.com/NielsLeenheer/html5test/blob/9106a8/index.html#L845
    //                     thx to NielsLeenheer and zcorpan

    // Note: in some older browsers, "no" was a return value instead of empty string.
    //   It was live in FF3.5.0 and 3.5.1, but fixed in 3.5.2
    //   It was also live in Safari 4.0.0 - 4.0.4, but fixed in 4.0.5

    tests['video'] = function() {
        var elem = document.createElement('video'),
            bool = false;

        // IE9 Running on Windows Server SKU can cause an exception to be thrown, bug #224
        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('video/ogg; codecs="theora"')      .replace(/^no$/,'');

                // Without QuickTime, this value will be `undefined`. github.com/Modernizr/Modernizr/issues/546
                bool.h264 = elem.canPlayType('video/mp4; codecs="avc1.42E01E"') .replace(/^no$/,'');

                bool.webm = elem.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,'');
            }

        } catch(e) { }

        return bool;
    };

    tests['audio'] = function() {
        var elem = document.createElement('audio'),
            bool = false;

        try {
            if ( bool = !!elem.canPlayType ) {
                bool      = new Boolean(bool);
                bool.ogg  = elem.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,'');
                bool.mp3  = elem.canPlayType('audio/mpeg;')               .replace(/^no$/,'');

                // Mimetypes accepted:
                //   developer.mozilla.org/En/Media_formats_supported_by_the_audio_and_video_elements
                //   bit.ly/iphoneoscodecs
                bool.wav  = elem.canPlayType('audio/wav; codecs="1"')     .replace(/^no$/,'');
                bool.m4a  = ( elem.canPlayType('audio/x-m4a;')            ||
                              elem.canPlayType('audio/aac;'))             .replace(/^no$/,'');
            }
        } catch(e) { }

        return bool;
    };


    // In FF4, if disabled, window.localStorage should === null.

    // Normally, we could not test that directly and need to do a
    //   `('localStorage' in window) && ` test first because otherwise Firefox will
    //   throw bugzil.la/365772 if cookies are disabled

    // Also in iOS5 Private Browsing mode, attempting to use localStorage.setItem
    // will throw the exception:
    //   QUOTA_EXCEEDED_ERRROR DOM Exception 22.
    // Peculiarly, getItem and removeItem calls do not throw.

    // Because we are forced to try/catch this, we'll go aggressive.

    // Just FWIW: IE8 Compat mode supports these features completely:
    //   www.quirksmode.org/dom/html5.html
    // But IE8 doesn't support either with local files

    tests['localstorage'] = function() {
        try {
            localStorage.setItem(mod, mod);
            localStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };

    tests['sessionstorage'] = function() {
        try {
            sessionStorage.setItem(mod, mod);
            sessionStorage.removeItem(mod);
            return true;
        } catch(e) {
            return false;
        }
    };


    tests['webworkers'] = function() {
        return !!window.Worker;
    };


    tests['applicationcache'] = function() {
        return !!window.applicationCache;
    };


    // Thanks to Erik Dahlstrom
    tests['svg'] = function() {
        return !!document.createElementNS && !!document.createElementNS(ns.svg, 'svg').createSVGRect;
    };

    // specifically for SVG inline in HTML, not within XHTML
    // test page: paulirish.com/demo/inline-svg
    tests['inlinesvg'] = function() {
      var div = document.createElement('div');
      div.innerHTML = '<svg/>';
      return (div.firstChild && div.firstChild.namespaceURI) == ns.svg;
    };

    // SVG SMIL animation
    tests['smil'] = function() {
        return !!document.createElementNS && /SVGAnimate/.test(toString.call(document.createElementNS(ns.svg, 'animate')));
    };

    // This test is only for clip paths in SVG proper, not clip paths on HTML content
    // demo: srufaculty.sru.edu/david.dailey/svg/newstuff/clipPath4.svg

    // However read the comments to dig into applying SVG clippaths to HTML content here:
    //   github.com/Modernizr/Modernizr/issues/213#issuecomment-1149491
    tests['svgclippaths'] = function() {
        return !!document.createElementNS && /SVGClipPath/.test(toString.call(document.createElementNS(ns.svg, 'clipPath')));
    };

    /*>>webforms*/
    // input features and input types go directly onto the ret object, bypassing the tests loop.
    // Hold this guy to execute in a moment.
    function webforms() {
        /*>>input*/
        // Run through HTML5's new input attributes to see if the UA understands any.
        // We're using f which is the <input> element created early on
        // Mike Taylr has created a comprehensive resource for testing these attributes
        //   when applied to all input types:
        //   miketaylr.com/code/input-type-attr.html
        // spec: www.whatwg.org/specs/web-apps/current-work/multipage/the-input-element.html#input-type-attr-summary

        // Only input placeholder is tested while textarea's placeholder is not.
        // Currently Safari 4 and Opera 11 have support only for the input placeholder
        // Both tests are available in feature-detects/forms-placeholder.js
        Modernizr['input'] = (function( props ) {
            for ( var i = 0, len = props.length; i < len; i++ ) {
                attrs[ props[i] ] = !!(props[i] in inputElem);
            }
            if (attrs.list){
              // safari false positive's on datalist: webk.it/74252
              // see also github.com/Modernizr/Modernizr/issues/146
              attrs.list = !!(document.createElement('datalist') && window.HTMLDataListElement);
            }
            return attrs;
        })('autocomplete autofocus list placeholder max min multiple pattern required step'.split(' '));
        /*>>input*/

        /*>>inputtypes*/
        // Run through HTML5's new input types to see if the UA understands any.
        //   This is put behind the tests runloop because it doesn't return a
        //   true/false like all the other tests; instead, it returns an object
        //   containing each input type with its corresponding true/false value

        // Big thanks to @miketaylr for the html5 forms expertise. miketaylr.com/
        Modernizr['inputtypes'] = (function(props) {

            for ( var i = 0, bool, inputElemType, defaultView, len = props.length; i < len; i++ ) {

                inputElem.setAttribute('type', inputElemType = props[i]);
                bool = inputElem.type !== 'text';

                // We first check to see if the type we give it sticks..
                // If the type does, we feed it a textual value, which shouldn't be valid.
                // If the value doesn't stick, we know there's input sanitization which infers a custom UI
                if ( bool ) {

                    inputElem.value         = smile;
                    inputElem.style.cssText = 'position:absolute;visibility:hidden;';

                    if ( /^range$/.test(inputElemType) && inputElem.style.WebkitAppearance !== undefined ) {

                      docElement.appendChild(inputElem);
                      defaultView = document.defaultView;

                      // Safari 2-4 allows the smiley as a value, despite making a slider
                      bool =  defaultView.getComputedStyle &&
                              defaultView.getComputedStyle(inputElem, null).WebkitAppearance !== 'textfield' &&
                              // Mobile android web browser has false positive, so must
                              // check the height to see if the widget is actually there.
                              (inputElem.offsetHeight !== 0);

                      docElement.removeChild(inputElem);

                    } else if ( /^(search|tel)$/.test(inputElemType) ){
                      // Spec doesn't define any special parsing or detectable UI
                      //   behaviors so we pass these through as true

                      // Interestingly, opera fails the earlier test, so it doesn't
                      //  even make it here.

                    } else if ( /^(url|email)$/.test(inputElemType) ) {
                      // Real url and email support comes with prebaked validation.
                      bool = inputElem.checkValidity && inputElem.checkValidity() === false;

                    } else {
                      // If the upgraded input compontent rejects the :) text, we got a winner
                      bool = inputElem.value != smile;
                    }
                }

                inputs[ props[i] ] = !!bool;
            }
            return inputs;
        })('search tel url email datetime date month week time datetime-local number range color'.split(' '));
        /*>>inputtypes*/
    }
    /*>>webforms*/


    // End of test definitions
    // -----------------------



    // Run through all tests and detect their support in the current UA.
    // todo: hypothetically we could be doing an array of tests and use a basic loop here.
    for ( var feature in tests ) {
        if ( hasOwnProp(tests, feature) ) {
            // run the test, throw the return value into the Modernizr,
            //   then based on that boolean, define an appropriate className
            //   and push it into an array of classes we'll join later.
            featureName  = feature.toLowerCase();
            Modernizr[featureName] = tests[feature]();

            classes.push((Modernizr[featureName] ? '' : 'no-') + featureName);
        }
    }

    /*>>webforms*/
    // input tests need to run.
    Modernizr.input || webforms();
    /*>>webforms*/


    /**
     * addTest allows the user to define their own feature tests
     * the result will be added onto the Modernizr object,
     * as well as an appropriate className set on the html element
     *
     * @param feature - String naming the feature
     * @param test - Function returning true if feature is supported, false if not
     */
     Modernizr.addTest = function ( feature, test ) {
       if ( typeof feature == 'object' ) {
         for ( var key in feature ) {
           if ( hasOwnProp( feature, key ) ) {
             Modernizr.addTest( key, feature[ key ] );
           }
         }
       } else {

         feature = feature.toLowerCase();

         if ( Modernizr[feature] !== undefined ) {
           // we're going to quit if you're trying to overwrite an existing test
           // if we were to allow it, we'd do this:
           //   var re = new RegExp("\\b(no-)?" + feature + "\\b");
           //   docElement.className = docElement.className.replace( re, '' );
           // but, no rly, stuff 'em.
           return Modernizr;
         }

         test = typeof test == 'function' ? test() : test;

         if (typeof enableClasses !== "undefined" && enableClasses) {
           docElement.className += ' ' + (test ? '' : 'no-') + feature;
         }
         Modernizr[feature] = test;

       }

       return Modernizr; // allow chaining.
     };


    // Reset modElem.cssText to nothing to reduce memory footprint.
    setCss('');
    modElem = inputElem = null;

    /*>>shiv*/
    /**
     * @preserve HTML5 Shiv prev3.7.1 | @afarkas @jdalton @jon_neal @rem | MIT/GPL2 Licensed
     */
    ;(function(window, document) {
        /*jshint evil:true */
        /** version */
        var version = '3.7.0';

        /** Preset options */
        var options = window.html5 || {};

        /** Used to skip problem elements */
        var reSkip = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i;

        /** Not all elements can be cloned in IE **/
        var saveClones = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i;

        /** Detect whether the browser supports default html5 styles */
        var supportsHtml5Styles;

        /** Name of the expando, to work with multiple documents or to re-shiv one document */
        var expando = '_html5shiv';

        /** The id for the the documents expando */
        var expanID = 0;

        /** Cached data for each document */
        var expandoData = {};

        /** Detect whether the browser supports unknown elements */
        var supportsUnknownElements;

        (function() {
          try {
            var a = document.createElement('a');
            a.innerHTML = '<xyz></xyz>';
            //if the hidden property is implemented we can assume, that the browser supports basic HTML5 Styles
            supportsHtml5Styles = ('hidden' in a);

            supportsUnknownElements = a.childNodes.length == 1 || (function() {
              // assign a false positive if unable to shiv
              (document.createElement)('a');
              var frag = document.createDocumentFragment();
              return (
                typeof frag.cloneNode == 'undefined' ||
                typeof frag.createDocumentFragment == 'undefined' ||
                typeof frag.createElement == 'undefined'
              );
            }());
          } catch(e) {
            // assign a false positive if detection fails => unable to shiv
            supportsHtml5Styles = true;
            supportsUnknownElements = true;
          }

        }());

        /*--------------------------------------------------------------------------*/

        /**
         * Creates a style sheet with the given CSS text and adds it to the document.
         * @private
         * @param {Document} ownerDocument The document.
         * @param {String} cssText The CSS text.
         * @returns {StyleSheet} The style element.
         */
        function addStyleSheet(ownerDocument, cssText) {
          var p = ownerDocument.createElement('p'),
          parent = ownerDocument.getElementsByTagName('head')[0] || ownerDocument.documentElement;

          p.innerHTML = 'x<style>' + cssText + '</style>';
          return parent.insertBefore(p.lastChild, parent.firstChild);
        }

        /**
         * Returns the value of `html5.elements` as an array.
         * @private
         * @returns {Array} An array of shived element node names.
         */
        function getElements() {
          var elements = html5.elements;
          return typeof elements == 'string' ? elements.split(' ') : elements;
        }

        /**
         * Returns the data associated to the given document
         * @private
         * @param {Document} ownerDocument The document.
         * @returns {Object} An object of data.
         */
        function getExpandoData(ownerDocument) {
          var data = expandoData[ownerDocument[expando]];
          if (!data) {
            data = {};
            expanID++;
            ownerDocument[expando] = expanID;
            expandoData[expanID] = data;
          }
          return data;
        }

        /**
         * returns a shived element for the given nodeName and document
         * @memberOf html5
         * @param {String} nodeName name of the element
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived element.
         */
        function createElement(nodeName, ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createElement(nodeName);
          }
          if (!data) {
            data = getExpandoData(ownerDocument);
          }
          var node;

          if (data.cache[nodeName]) {
            node = data.cache[nodeName].cloneNode();
          } else if (saveClones.test(nodeName)) {
            node = (data.cache[nodeName] = data.createElem(nodeName)).cloneNode();
          } else {
            node = data.createElem(nodeName);
          }

          // Avoid adding some elements to fragments in IE < 9 because
          // * Attributes like `name` or `type` cannot be set/changed once an element
          //   is inserted into a document/fragment
          // * Link elements with `src` attributes that are inaccessible, as with
          //   a 403 response, will cause the tab/window to crash
          // * Script elements appended to fragments will execute when their `src`
          //   or `text` property is set
          return node.canHaveChildren && !reSkip.test(nodeName) && !node.tagUrn ? data.frag.appendChild(node) : node;
        }

        /**
         * returns a shived DocumentFragment for the given document
         * @memberOf html5
         * @param {Document} ownerDocument The context document.
         * @returns {Object} The shived DocumentFragment.
         */
        function createDocumentFragment(ownerDocument, data){
          if (!ownerDocument) {
            ownerDocument = document;
          }
          if(supportsUnknownElements){
            return ownerDocument.createDocumentFragment();
          }
          data = data || getExpandoData(ownerDocument);
          var clone = data.frag.cloneNode(),
          i = 0,
          elems = getElements(),
          l = elems.length;
          for(;i<l;i++){
            clone.createElement(elems[i]);
          }
          return clone;
        }

        /**
         * Shivs the `createElement` and `createDocumentFragment` methods of the document.
         * @private
         * @param {Document|DocumentFragment} ownerDocument The document.
         * @param {Object} data of the document.
         */
        function shivMethods(ownerDocument, data) {
          if (!data.cache) {
            data.cache = {};
            data.createElem = ownerDocument.createElement;
            data.createFrag = ownerDocument.createDocumentFragment;
            data.frag = data.createFrag();
          }


          ownerDocument.createElement = function(nodeName) {
            //abort shiv
            if (!html5.shivMethods) {
              return data.createElem(nodeName);
            }
            return createElement(nodeName, ownerDocument, data);
          };

          ownerDocument.createDocumentFragment = Function('h,f', 'return function(){' +
                                                          'var n=f.cloneNode(),c=n.createElement;' +
                                                          'h.shivMethods&&(' +
                                                          // unroll the `createElement` calls
                                                          getElements().join().replace(/[\w\-]+/g, function(nodeName) {
            data.createElem(nodeName);
            data.frag.createElement(nodeName);
            return 'c("' + nodeName + '")';
          }) +
            ');return n}'
                                                         )(html5, data.frag);
        }

        /*--------------------------------------------------------------------------*/

        /**
         * Shivs the given document.
         * @memberOf html5
         * @param {Document} ownerDocument The document to shiv.
         * @returns {Document} The shived document.
         */
        function shivDocument(ownerDocument) {
          if (!ownerDocument) {
            ownerDocument = document;
          }
          var data = getExpandoData(ownerDocument);

          if (html5.shivCSS && !supportsHtml5Styles && !data.hasCSS) {
            data.hasCSS = !!addStyleSheet(ownerDocument,
                                          // corrects block display not defined in IE6/7/8/9
                                          'article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}' +
                                            // adds styling not present in IE6/7/8/9
                                            'mark{background:#FF0;color:#000}' +
                                            // hides non-rendered elements
                                            'template{display:none}'
                                         );
          }
          if (!supportsUnknownElements) {
            shivMethods(ownerDocument, data);
          }
          return ownerDocument;
        }

        /*--------------------------------------------------------------------------*/

        /**
         * The `html5` object is exposed so that more elements can be shived and
         * existing shiving can be detected on iframes.
         * @type Object
         * @example
         *
         * // options can be changed before the script is included
         * html5 = { 'elements': 'mark section', 'shivCSS': false, 'shivMethods': false };
         */
        var html5 = {

          /**
           * An array or space separated string of node names of the elements to shiv.
           * @memberOf html5
           * @type Array|String
           */
          'elements': options.elements || 'abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video',

          /**
           * current version of html5shiv
           */
          'version': version,

          /**
           * A flag to indicate that the HTML5 style sheet should be inserted.
           * @memberOf html5
           * @type Boolean
           */
          'shivCSS': (options.shivCSS !== false),

          /**
           * Is equal to true if a browser supports creating unknown/HTML5 elements
           * @memberOf html5
           * @type boolean
           */
          'supportsUnknownElements': supportsUnknownElements,

          /**
           * A flag to indicate that the document's `createElement` and `createDocumentFragment`
           * methods should be overwritten.
           * @memberOf html5
           * @type Boolean
           */
          'shivMethods': (options.shivMethods !== false),

          /**
           * A string to describe the type of `html5` object ("default" or "default print").
           * @memberOf html5
           * @type String
           */
          'type': 'default',

          // shivs the document according to the specified `html5` object options
          'shivDocument': shivDocument,

          //creates a shived element
          createElement: createElement,

          //creates a shived documentFragment
          createDocumentFragment: createDocumentFragment
        };

        /*--------------------------------------------------------------------------*/

        // expose html5
        window.html5 = html5;

        // shiv the document
        shivDocument(document);

    }(this, document));
    /*>>shiv*/

    // Assign private properties to the return object with prefix
    Modernizr._version      = version;

    // expose these for the plugin API. Look in the source for how to join() them against your input
    /*>>prefixes*/
    Modernizr._prefixes     = prefixes;
    /*>>prefixes*/
    /*>>domprefixes*/
    Modernizr._domPrefixes  = domPrefixes;
    Modernizr._cssomPrefixes  = cssomPrefixes;
    /*>>domprefixes*/

    /*>>mq*/
    // Modernizr.mq tests a given media query, live against the current state of the window
    // A few important notes:
    //   * If a browser does not support media queries at all (eg. oldIE) the mq() will always return false
    //   * A max-width or orientation query will be evaluated against the current state, which may change later.
    //   * You must specify values. Eg. If you are testing support for the min-width media query use:
    //       Modernizr.mq('(min-width:0)')
    // usage:
    // Modernizr.mq('only screen and (max-width:768)')
    Modernizr.mq            = testMediaQuery;
    /*>>mq*/

    /*>>hasevent*/
    // Modernizr.hasEvent() detects support for a given event, with an optional element to test on
    // Modernizr.hasEvent('gesturestart', elem)
    Modernizr.hasEvent      = isEventSupported;
    /*>>hasevent*/

    /*>>testprop*/
    // Modernizr.testProp() investigates whether a given style property is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testProp('pointerEvents')
    Modernizr.testProp      = function(prop){
        return testProps([prop]);
    };
    /*>>testprop*/

    /*>>testallprops*/
    // Modernizr.testAllProps() investigates whether a given style property,
    //   or any of its vendor-prefixed variants, is recognized
    // Note that the property names must be provided in the camelCase variant.
    // Modernizr.testAllProps('boxSizing')
    Modernizr.testAllProps  = testPropsAll;
    /*>>testallprops*/


    /*>>teststyles*/
    // Modernizr.testStyles() allows you to add custom styles to the document and test an element afterwards
    // Modernizr.testStyles('#modernizr { position:absolute }', function(elem, rule){ ... })
    Modernizr.testStyles    = injectElementWithStyles;
    /*>>teststyles*/


    /*>>prefixed*/
    // Modernizr.prefixed() returns the prefixed or nonprefixed property name variant of your input
    // Modernizr.prefixed('boxSizing') // 'MozBoxSizing'

    // Properties must be passed as dom-style camelcase, rather than `box-sizing` hypentated style.
    // Return values will also be the camelCase variant, if you need to translate that to hypenated style use:
    //
    //     str.replace(/([A-Z])/g, function(str,m1){ return '-' + m1.toLowerCase(); }).replace(/^ms-/,'-ms-');

    // If you're trying to ascertain which transition end event to bind to, you might do something like...
    //
    //     var transEndEventNames = {
    //       'WebkitTransition' : 'webkitTransitionEnd',
    //       'MozTransition'    : 'transitionend',
    //       'OTransition'      : 'oTransitionEnd',
    //       'msTransition'     : 'MSTransitionEnd',
    //       'transition'       : 'transitionend'
    //     },
    //     transEndEventName = transEndEventNames[ Modernizr.prefixed('transition') ];

    Modernizr.prefixed      = function(prop, obj, elem){
      if(!obj) {
        return testPropsAll(prop, 'pfx');
      } else {
        // Testing DOM property e.g. Modernizr.prefixed('requestAnimationFrame', window) // 'mozRequestAnimationFrame'
        return testPropsAll(prop, obj, elem);
      }
    };
    /*>>prefixed*/


    /*>>cssclasses*/
    // Remove "no-js" class from <html> element, if it exists:
    docElement.className = docElement.className.replace(/(^|\s)no-js(\s|$)/, '$1$2') +

                            // Add the new classes to the <html> element.
                            (enableClasses ? ' js ' + classes.join(' ') : '');
    /*>>cssclasses*/

    return Modernizr;

})(this, this.document);
;
/*! modernizr 3.5.0 (Custom Build) | MIT *
 * https://modernizr.com/download/?-backgroundblendmode-cssfilters-cssmask-csspositionsticky-cssvhunit-cssvmaxunit-cssvminunit-cssvwunit-objectfit-setclasses !*/
!function(e,t,n){function r(e,t){return typeof e===t}function i(){var e,t,n,i,s,o,l;for(var a in C)if(C.hasOwnProperty(a)){if(e=[],t=C[a],t.name&&(e.push(t.name.toLowerCase()),t.options&&t.options.aliases&&t.options.aliases.length))for(n=0;n<t.options.aliases.length;n++)e.push(t.options.aliases[n].toLowerCase());for(i=r(t.fn,"function")?t.fn():t.fn,s=0;s<e.length;s++)o=e[s],l=o.split("."),1===l.length?Modernizr[l[0]]=i:(!Modernizr[l[0]]||Modernizr[l[0]]instanceof Boolean||(Modernizr[l[0]]=new Boolean(Modernizr[l[0]])),Modernizr[l[0]][l[1]]=i),w.push((i?"":"no-")+l.join("-"))}}function s(e){var t=b.className,n=Modernizr._config.classPrefix||"";if(_&&(t=t.baseVal),Modernizr._config.enableJSClass){var r=new RegExp("(^|\\s)"+n+"no-js(\\s|$)");t=t.replace(r,"$1"+n+"js$2")}Modernizr._config.enableClasses&&(t+=" "+n+e.join(" "+n),_?b.className.baseVal=t:b.className=t)}function o(){return"function"!=typeof t.createElement?t.createElement(arguments[0]):_?t.createElementNS.call(t,"http://www.w3.org/2000/svg",arguments[0]):t.createElement.apply(t,arguments)}function l(t,n,r){var i;if("getComputedStyle"in e){i=getComputedStyle.call(e,t,n);var s=e.console;if(null!==i)r&&(i=i.getPropertyValue(r));else if(s){var o=s.error?"error":"log";s[o].call(s,"getComputedStyle returning null, its possible modernizr test results are inaccurate")}}else i=!n&&t.currentStyle&&t.currentStyle[r];return i}function a(e,t){return e-1===t||e===t||e+1===t}function d(e){return e.replace(/([a-z])-([a-z])/g,function(e,t,n){return t+n.toUpperCase()}).replace(/^-/,"")}function u(){var e=t.body;return e||(e=o(_?"svg":"body"),e.fake=!0),e}function f(e,n,r,i){var s,l,a,d,f="modernizr",c=o("div"),p=u();if(parseInt(r,10))for(;r--;)a=o("div"),a.id=i?i[r]:f+(r+1),c.appendChild(a);return s=o("style"),s.type="text/css",s.id="s"+f,(p.fake?p:c).appendChild(s),p.appendChild(c),s.styleSheet?s.styleSheet.cssText=e:s.appendChild(t.createTextNode(e)),c.id=f,p.fake&&(p.style.background="",p.style.overflow="hidden",d=b.style.overflow,b.style.overflow="hidden",b.appendChild(p)),l=n(c,e),p.fake?(p.parentNode.removeChild(p),b.style.overflow=d,b.offsetHeight):c.parentNode.removeChild(c),!!l}function c(e,t){return!!~(""+e).indexOf(t)}function p(e,t){return function(){return e.apply(t,arguments)}}function h(e,t,n){var i;for(var s in e)if(e[s]in t)return n===!1?e[s]:(i=t[e[s]],r(i,"function")?p(i,n||t):i);return!1}function m(e){return e.replace(/([A-Z])/g,function(e,t){return"-"+t.toLowerCase()}).replace(/^ms-/,"-ms-")}function v(t,r){var i=t.length;if("CSS"in e&&"supports"in e.CSS){for(;i--;)if(e.CSS.supports(m(t[i]),r))return!0;return!1}if("CSSSupportsRule"in e){for(var s=[];i--;)s.push("("+m(t[i])+":"+r+")");return s=s.join(" or "),f("@supports ("+s+") { #modernizr { position: absolute; } }",function(e){return"absolute"==l(e,null,"position")})}return n}function g(e,t,i,s){function l(){u&&(delete L.style,delete L.modElem)}if(s=r(s,"undefined")?!1:s,!r(i,"undefined")){var a=v(e,i);if(!r(a,"undefined"))return a}for(var u,f,p,h,m,g=["modernizr","tspan","samp"];!L.style&&g.length;)u=!0,L.modElem=o(g.shift()),L.style=L.modElem.style;for(p=e.length,f=0;p>f;f++)if(h=e[f],m=L.style[h],c(h,"-")&&(h=d(h)),L.style[h]!==n){if(s||r(i,"undefined"))return l(),"pfx"==t?h:!0;try{L.style[h]=i}catch(y){}if(L.style[h]!=m)return l(),"pfx"==t?h:!0}return l(),!1}function y(e,t,n,i,s){var o=e.charAt(0).toUpperCase()+e.slice(1),l=(e+" "+I.join(o+" ")+o).split(" ");return r(t,"string")||r(t,"undefined")?g(l,t,i,s):(l=(e+" "+E.join(o+" ")+o).split(" "),h(l,t,n))}function x(e,t,r){return y(e,n,n,t,r)}var w=[],C=[],S={_version:"3.5.0",_config:{classPrefix:"",enableClasses:!0,enableJSClass:!0,usePrefixes:!0},_q:[],on:function(e,t){var n=this;setTimeout(function(){t(n[e])},0)},addTest:function(e,t,n){C.push({name:e,fn:t,options:n})},addAsyncTest:function(e){C.push({name:null,fn:e})}},Modernizr=function(){};Modernizr.prototype=S,Modernizr=new Modernizr;var b=t.documentElement,_="svg"===b.nodeName.toLowerCase(),z=S._config.usePrefixes?" -webkit- -moz- -o- -ms- ".split(" "):["",""];S._prefixes=z;var T="CSS"in e&&"supports"in e.CSS,N="supportsCSS"in e;Modernizr.addTest("supports",T||N),Modernizr.addTest("csspositionsticky",function(){var e="position:",t="sticky",n=o("a"),r=n.style;return r.cssText=e+z.join(t+";"+e).slice(0,-e.length),-1!==r.position.indexOf(t)});var k=S.testStyles=f;k("#modernizr { height: 50vh; }",function(t){var n=parseInt(e.innerHeight/2,10),r=parseInt(l(t,null,"height"),10);Modernizr.addTest("cssvhunit",r==n)}),k("#modernizr1{width: 50vmax}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),s=r.clientWidth/100,o=r.clientHeight/100,d=parseInt(50*Math.max(s,o),10),u=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvmaxunit",a(d,u)||a(d,u-i))},3),k("#modernizr1{width: 50vm;width:50vmin}#modernizr2{width:50px;height:50px;overflow:scroll}#modernizr3{position:fixed;top:0;left:0;bottom:0;right:0}",function(e){var t=e.childNodes[2],n=e.childNodes[1],r=e.childNodes[0],i=parseInt((n.offsetWidth-n.clientWidth)/2,10),s=r.clientWidth/100,o=r.clientHeight/100,d=parseInt(50*Math.min(s,o),10),u=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvminunit",a(d,u)||a(d,u-i))},3),k("#modernizr { width: 50vw; }",function(t){var n=parseInt(e.innerWidth/2,10),r=parseInt(l(t,null,"width"),10);Modernizr.addTest("cssvwunit",r==n)});var j="Moz O ms Webkit",I=S._config.usePrefixes?j.split(" "):[];S._cssomPrefixes=I;var P=function(t){var r,i=z.length,s=e.CSSRule;if("undefined"==typeof s)return n;if(!t)return!1;if(t=t.replace(/^@/,""),r=t.replace(/-/g,"_").toUpperCase()+"_RULE",r in s)return"@"+t;for(var o=0;i>o;o++){var l=z[o],a=l.toUpperCase()+"_"+r;if(a in s)return"@-"+l.toLowerCase()+"-"+t}return!1};S.atRule=P;var E=S._config.usePrefixes?j.toLowerCase().split(" "):[];S._domPrefixes=E;var W={elem:o("modernizr")};Modernizr._q.push(function(){delete W.elem});var L={style:W.elem.style};Modernizr._q.unshift(function(){delete L.style}),S.testAllProps=y;var M=S.prefixed=function(e,t,n){return 0===e.indexOf("@")?P(e):(-1!=e.indexOf("-")&&(e=d(e)),t?y(e,t,n):y(e,"pfx"))};Modernizr.addTest("backgroundblendmode",M("backgroundBlendMode","text")),Modernizr.addTest("objectfit",!!M("objectFit"),{aliases:["object-fit"]}),S.testAllProps=x,Modernizr.addTest("cssfilters",function(){if(Modernizr.supports)return x("filter","blur(2px)");var e=o("a");return e.style.cssText=z.join("filter:blur(2px); "),!!e.style.length&&(t.documentMode===n||t.documentMode>9)}),Modernizr.addTest("cssmask",x("maskRepeat","repeat-x",!0)),i(),s(w),delete S.addTest,delete S.addAsyncTest;for(var O=0;O<Modernizr._q.length;O++)Modernizr._q[O]();e.Modernizr=Modernizr}(window,document);;
/*!
 * hoverIntent v1.8.0 // 2014.06.29 // jQuery v1.9.1+
 * http://cherne.net/brian/resources/jquery.hoverIntent.html
 *
 * You may use hoverIntent under the terms of the MIT license. Basically that
 * means you are free to use hoverIntent as long as this header is left intact.
 * Copyright 2007, 2014 Brian Cherne
 */
(function($){$.fn.hoverIntent=function(handlerIn,handlerOut,selector){var cfg={interval:100,sensitivity:6,timeout:0};if(typeof handlerIn==="object"){cfg=$.extend(cfg,handlerIn)}else{if($.isFunction(handlerOut)){cfg=$.extend(cfg,{over:handlerIn,out:handlerOut,selector:selector})}else{cfg=$.extend(cfg,{over:handlerIn,out:handlerIn,selector:handlerOut})}}var cX,cY,pX,pY;var track=function(ev){cX=ev.pageX;cY=ev.pageY};var compare=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);if(Math.sqrt((pX-cX)*(pX-cX)+(pY-cY)*(pY-cY))<cfg.sensitivity){$(ob).off("mousemove.hoverIntent",track);ob.hoverIntent_s=true;return cfg.over.apply(ob,[ev])}else{pX=cX;pY=cY;ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}};var delay=function(ev,ob){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t);ob.hoverIntent_s=false;return cfg.out.apply(ob,[ev])};var handleHover=function(e){var ev=$.extend({},e);var ob=this;if(ob.hoverIntent_t){ob.hoverIntent_t=clearTimeout(ob.hoverIntent_t)}if(e.type==="mouseenter"){pX=ev.pageX;pY=ev.pageY;$(ob).on("mousemove.hoverIntent",track);if(!ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){compare(ev,ob)},cfg.interval)}}else{$(ob).off("mousemove.hoverIntent",track);if(ob.hoverIntent_s){ob.hoverIntent_t=setTimeout(function(){delay(ev,ob)},cfg.timeout)}}};return this.on({"mouseenter.hoverIntent":handleHover,"mouseleave.hoverIntent":handleHover},cfg.selector)}})(jQuery);;
/*!
 * @fileOverview TouchSwipe - jQuery Plugin
 * @version 1.6.18
 *
 * @author Matt Bryson http://www.github.com/mattbryson
 * @see https://github.com/mattbryson/TouchSwipe-Jquery-Plugin
 * @see http://labs.rampinteractive.co.uk/touchSwipe/
 * @see http://plugins.jquery.com/project/touchSwipe
 * @license
 * Copyright (c) 2010-2015 Matt Bryson
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
!function(factory){"function"==typeof define&&define.amd&&define.amd.jQuery?define(["jquery"],factory):factory("undefined"!=typeof module&&module.exports?require("jquery"):jQuery)}(function($){"use strict";function init(options){return!options||void 0!==options.allowPageScroll||void 0===options.swipe&&void 0===options.swipeStatus||(options.allowPageScroll=NONE),void 0!==options.click&&void 0===options.tap&&(options.tap=options.click),options||(options={}),options=$.extend({},$.fn.swipe.defaults,options),this.each(function(){var $this=$(this),plugin=$this.data(PLUGIN_NS);plugin||(plugin=new TouchSwipe(this,options),$this.data(PLUGIN_NS,plugin))})}function TouchSwipe(element,options){function touchStart(jqEvent){if(!(getTouchInProgress()||$(jqEvent.target).closest(options.excludedElements,$element).length>0)){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(!event.pointerType||"mouse"!=event.pointerType||0!=options.fallbackToMouseEvents){var ret,touches=event.touches,evt=touches?touches[0]:event;return phase=PHASE_START,touches?fingerCount=touches.length:options.preventDefaultEvents!==!1&&jqEvent.preventDefault(),distance=0,direction=null,currentDirection=null,pinchDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,maximumsMap=createMaximumsData(),cancelMultiFingerRelease(),createFingerData(0,evt),!touches||fingerCount===options.fingers||options.fingers===ALL_FINGERS||hasPinches()?(startTime=getTimeStamp(),2==fingerCount&&(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)),(options.swipeStatus||options.pinchStatus)&&(ret=triggerHandler(event,phase))):ret=!1,ret===!1?(phase=PHASE_CANCEL,triggerHandler(event,phase),ret):(options.hold&&(holdTimeout=setTimeout($.proxy(function(){$element.trigger("hold",[event.target]),options.hold&&(ret=options.hold.call($element,event,event.target))},this),options.longTapThreshold)),setTouchInProgress(!0),null)}}}function touchMove(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;if(phase!==PHASE_END&&phase!==PHASE_CANCEL&&!inMultiFingerRelease()){var ret,touches=event.touches,evt=touches?touches[0]:event,currentFinger=updateFingerData(evt);if(endTime=getTimeStamp(),touches&&(fingerCount=touches.length),options.hold&&clearTimeout(holdTimeout),phase=PHASE_MOVE,2==fingerCount&&(0==startTouchesDistance?(createFingerData(1,touches[1]),startTouchesDistance=endTouchesDistance=calculateTouchesDistance(fingerData[0].start,fingerData[1].start)):(updateFingerData(touches[1]),endTouchesDistance=calculateTouchesDistance(fingerData[0].end,fingerData[1].end),pinchDirection=calculatePinchDirection(fingerData[0].end,fingerData[1].end)),pinchZoom=calculatePinchZoom(startTouchesDistance,endTouchesDistance),pinchDistance=Math.abs(startTouchesDistance-endTouchesDistance)),fingerCount===options.fingers||options.fingers===ALL_FINGERS||!touches||hasPinches()){if(direction=calculateDirection(currentFinger.start,currentFinger.end),currentDirection=calculateDirection(currentFinger.last,currentFinger.end),validateDefaultEvent(jqEvent,currentDirection),distance=calculateDistance(currentFinger.start,currentFinger.end),duration=calculateDuration(),setMaxDistance(direction,distance),ret=triggerHandler(event,phase),!options.triggerOnTouchEnd||options.triggerOnTouchLeave){var inBounds=!0;if(options.triggerOnTouchLeave){var bounds=getbounds(this);inBounds=isInBounds(currentFinger.end,bounds)}!options.triggerOnTouchEnd&&inBounds?phase=getNextPhase(PHASE_MOVE):options.triggerOnTouchLeave&&!inBounds&&(phase=getNextPhase(PHASE_END)),phase!=PHASE_CANCEL&&phase!=PHASE_END||triggerHandler(event,phase)}}else phase=PHASE_CANCEL,triggerHandler(event,phase);ret===!1&&(phase=PHASE_CANCEL,triggerHandler(event,phase))}}function touchEnd(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent,touches=event.touches;if(touches){if(touches.length&&!inMultiFingerRelease())return startMultiFingerRelease(event),!0;if(touches.length&&inMultiFingerRelease())return!0}return inMultiFingerRelease()&&(fingerCount=fingerCountAtRelease),endTime=getTimeStamp(),duration=calculateDuration(),didSwipeBackToCancel()||!validateSwipeDistance()?(phase=PHASE_CANCEL,triggerHandler(event,phase)):options.triggerOnTouchEnd||options.triggerOnTouchEnd===!1&&phase===PHASE_MOVE?(options.preventDefaultEvents!==!1&&jqEvent.cancelable!==!1&&jqEvent.preventDefault(),phase=PHASE_END,triggerHandler(event,phase)):!options.triggerOnTouchEnd&&hasTap()?(phase=PHASE_END,triggerHandlerForGesture(event,phase,TAP)):phase===PHASE_MOVE&&(phase=PHASE_CANCEL,triggerHandler(event,phase)),setTouchInProgress(!1),null}function touchCancel(){fingerCount=0,endTime=0,startTime=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,cancelMultiFingerRelease(),setTouchInProgress(!1)}function touchLeave(jqEvent){var event=jqEvent.originalEvent?jqEvent.originalEvent:jqEvent;options.triggerOnTouchLeave&&(phase=getNextPhase(PHASE_END),triggerHandler(event,phase))}function removeListeners(){$element.unbind(START_EV,touchStart),$element.unbind(CANCEL_EV,touchCancel),$element.unbind(MOVE_EV,touchMove),$element.unbind(END_EV,touchEnd),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave),setTouchInProgress(!1)}function getNextPhase(currentPhase){var nextPhase=currentPhase,validTime=validateSwipeTime(),validDistance=validateSwipeDistance(),didCancel=didSwipeBackToCancel();return!validTime||didCancel?nextPhase=PHASE_CANCEL:!validDistance||currentPhase!=PHASE_MOVE||options.triggerOnTouchEnd&&!options.triggerOnTouchLeave?!validDistance&&currentPhase==PHASE_END&&options.triggerOnTouchLeave&&(nextPhase=PHASE_CANCEL):nextPhase=PHASE_END,nextPhase}function triggerHandler(event,phase){var ret,touches=event.touches;return(didSwipe()||hasSwipes())&&(ret=triggerHandlerForGesture(event,phase,SWIPE)),(didPinch()||hasPinches())&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,PINCH)),didDoubleTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,DOUBLE_TAP):didLongTap()&&ret!==!1?ret=triggerHandlerForGesture(event,phase,LONG_TAP):didTap()&&ret!==!1&&(ret=triggerHandlerForGesture(event,phase,TAP)),phase===PHASE_CANCEL&&touchCancel(event),phase===PHASE_END&&(touches?touches.length||touchCancel(event):touchCancel(event)),ret}function triggerHandlerForGesture(event,phase,gesture){var ret;if(gesture==SWIPE){if($element.trigger("swipeStatus",[phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection]),options.swipeStatus&&(ret=options.swipeStatus.call($element,event,phase,direction||null,distance||0,duration||0,fingerCount,fingerData,currentDirection),ret===!1))return!1;if(phase==PHASE_END&&validateSwipe()){if(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),$element.trigger("swipe",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipe&&(ret=options.swipe.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection),ret===!1))return!1;switch(direction){case LEFT:$element.trigger("swipeLeft",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeLeft&&(ret=options.swipeLeft.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case RIGHT:$element.trigger("swipeRight",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeRight&&(ret=options.swipeRight.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case UP:$element.trigger("swipeUp",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeUp&&(ret=options.swipeUp.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection));break;case DOWN:$element.trigger("swipeDown",[direction,distance,duration,fingerCount,fingerData,currentDirection]),options.swipeDown&&(ret=options.swipeDown.call($element,event,direction,distance,duration,fingerCount,fingerData,currentDirection))}}}if(gesture==PINCH){if($element.trigger("pinchStatus",[phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchStatus&&(ret=options.pinchStatus.call($element,event,phase,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData),ret===!1))return!1;if(phase==PHASE_END&&validatePinch())switch(pinchDirection){case IN:$element.trigger("pinchIn",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchIn&&(ret=options.pinchIn.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData));break;case OUT:$element.trigger("pinchOut",[pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData]),options.pinchOut&&(ret=options.pinchOut.call($element,event,pinchDirection||null,pinchDistance||0,duration||0,fingerCount,pinchZoom,fingerData))}}return gesture==TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),hasDoubleTap()&&!inDoubleTap()?(doubleTapStartTime=getTimeStamp(),singleTapTimeout=setTimeout($.proxy(function(){doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target))},this),options.doubleTapThreshold)):(doubleTapStartTime=null,$element.trigger("tap",[event.target]),options.tap&&(ret=options.tap.call($element,event,event.target)))):gesture==DOUBLE_TAP?phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),clearTimeout(holdTimeout),doubleTapStartTime=null,$element.trigger("doubletap",[event.target]),options.doubleTap&&(ret=options.doubleTap.call($element,event,event.target))):gesture==LONG_TAP&&(phase!==PHASE_CANCEL&&phase!==PHASE_END||(clearTimeout(singleTapTimeout),doubleTapStartTime=null,$element.trigger("longtap",[event.target]),options.longTap&&(ret=options.longTap.call($element,event,event.target)))),ret}function validateSwipeDistance(){var valid=!0;return null!==options.threshold&&(valid=distance>=options.threshold),valid}function didSwipeBackToCancel(){var cancelled=!1;return null!==options.cancelThreshold&&null!==direction&&(cancelled=getMaxDistance(direction)-distance>=options.cancelThreshold),cancelled}function validatePinchDistance(){return null===options.pinchThreshold||pinchDistance>=options.pinchThreshold}function validateSwipeTime(){var result;return result=!options.maxTimeThreshold||!(duration>=options.maxTimeThreshold)}function validateDefaultEvent(jqEvent,direction){if(options.preventDefaultEvents!==!1)if(options.allowPageScroll===NONE)jqEvent.preventDefault();else{var auto=options.allowPageScroll===AUTO;switch(direction){case LEFT:(options.swipeLeft&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case RIGHT:(options.swipeRight&&auto||!auto&&options.allowPageScroll!=HORIZONTAL)&&jqEvent.preventDefault();break;case UP:(options.swipeUp&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case DOWN:(options.swipeDown&&auto||!auto&&options.allowPageScroll!=VERTICAL)&&jqEvent.preventDefault();break;case NONE:}}}function validatePinch(){var hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),hasCorrectDistance=validatePinchDistance();return hasCorrectFingerCount&&hasEndPoint&&hasCorrectDistance}function hasPinches(){return!!(options.pinchStatus||options.pinchIn||options.pinchOut)}function didPinch(){return!(!validatePinch()||!hasPinches())}function validateSwipe(){var hasValidTime=validateSwipeTime(),hasValidDistance=validateSwipeDistance(),hasCorrectFingerCount=validateFingers(),hasEndPoint=validateEndPoint(),didCancel=didSwipeBackToCancel(),valid=!didCancel&&hasEndPoint&&hasCorrectFingerCount&&hasValidDistance&&hasValidTime;return valid}function hasSwipes(){return!!(options.swipe||options.swipeStatus||options.swipeLeft||options.swipeRight||options.swipeUp||options.swipeDown)}function didSwipe(){return!(!validateSwipe()||!hasSwipes())}function validateFingers(){return fingerCount===options.fingers||options.fingers===ALL_FINGERS||!SUPPORTS_TOUCH}function validateEndPoint(){return 0!==fingerData[0].end.x}function hasTap(){return!!options.tap}function hasDoubleTap(){return!!options.doubleTap}function hasLongTap(){return!!options.longTap}function validateDoubleTap(){if(null==doubleTapStartTime)return!1;var now=getTimeStamp();return hasDoubleTap()&&now-doubleTapStartTime<=options.doubleTapThreshold}function inDoubleTap(){return validateDoubleTap()}function validateTap(){return(1===fingerCount||!SUPPORTS_TOUCH)&&(isNaN(distance)||distance<options.threshold)}function validateLongTap(){return duration>options.longTapThreshold&&distance<DOUBLE_TAP_THRESHOLD}function didTap(){return!(!validateTap()||!hasTap())}function didDoubleTap(){return!(!validateDoubleTap()||!hasDoubleTap())}function didLongTap(){return!(!validateLongTap()||!hasLongTap())}function startMultiFingerRelease(event){previousTouchEndTime=getTimeStamp(),fingerCountAtRelease=event.touches.length+1}function cancelMultiFingerRelease(){previousTouchEndTime=0,fingerCountAtRelease=0}function inMultiFingerRelease(){var withinThreshold=!1;if(previousTouchEndTime){var diff=getTimeStamp()-previousTouchEndTime;diff<=options.fingerReleaseThreshold&&(withinThreshold=!0)}return withinThreshold}function getTouchInProgress(){return!($element.data(PLUGIN_NS+"_intouch")!==!0)}function setTouchInProgress(val){$element&&(val===!0?($element.bind(MOVE_EV,touchMove),$element.bind(END_EV,touchEnd),LEAVE_EV&&$element.bind(LEAVE_EV,touchLeave)):($element.unbind(MOVE_EV,touchMove,!1),$element.unbind(END_EV,touchEnd,!1),LEAVE_EV&&$element.unbind(LEAVE_EV,touchLeave,!1)),$element.data(PLUGIN_NS+"_intouch",val===!0))}function createFingerData(id,evt){var f={start:{x:0,y:0},last:{x:0,y:0},end:{x:0,y:0}};return f.start.x=f.last.x=f.end.x=evt.pageX||evt.clientX,f.start.y=f.last.y=f.end.y=evt.pageY||evt.clientY,fingerData[id]=f,f}function updateFingerData(evt){var id=void 0!==evt.identifier?evt.identifier:0,f=getFingerData(id);return null===f&&(f=createFingerData(id,evt)),f.last.x=f.end.x,f.last.y=f.end.y,f.end.x=evt.pageX||evt.clientX,f.end.y=evt.pageY||evt.clientY,f}function getFingerData(id){return fingerData[id]||null}function setMaxDistance(direction,distance){direction!=NONE&&(distance=Math.max(distance,getMaxDistance(direction)),maximumsMap[direction].distance=distance)}function getMaxDistance(direction){if(maximumsMap[direction])return maximumsMap[direction].distance}function createMaximumsData(){var maxData={};return maxData[LEFT]=createMaximumVO(LEFT),maxData[RIGHT]=createMaximumVO(RIGHT),maxData[UP]=createMaximumVO(UP),maxData[DOWN]=createMaximumVO(DOWN),maxData}function createMaximumVO(dir){return{direction:dir,distance:0}}function calculateDuration(){return endTime-startTime}function calculateTouchesDistance(startPoint,endPoint){var diffX=Math.abs(startPoint.x-endPoint.x),diffY=Math.abs(startPoint.y-endPoint.y);return Math.round(Math.sqrt(diffX*diffX+diffY*diffY))}function calculatePinchZoom(startDistance,endDistance){var percent=endDistance/startDistance*1;return percent.toFixed(2)}function calculatePinchDirection(){return pinchZoom<1?OUT:IN}function calculateDistance(startPoint,endPoint){return Math.round(Math.sqrt(Math.pow(endPoint.x-startPoint.x,2)+Math.pow(endPoint.y-startPoint.y,2)))}function calculateAngle(startPoint,endPoint){var x=startPoint.x-endPoint.x,y=endPoint.y-startPoint.y,r=Math.atan2(y,x),angle=Math.round(180*r/Math.PI);return angle<0&&(angle=360-Math.abs(angle)),angle}function calculateDirection(startPoint,endPoint){if(comparePoints(startPoint,endPoint))return NONE;var angle=calculateAngle(startPoint,endPoint);return angle<=45&&angle>=0?LEFT:angle<=360&&angle>=315?LEFT:angle>=135&&angle<=225?RIGHT:angle>45&&angle<135?DOWN:UP}function getTimeStamp(){var now=new Date;return now.getTime()}function getbounds(el){el=$(el);var offset=el.offset(),bounds={left:offset.left,right:offset.left+el.outerWidth(),top:offset.top,bottom:offset.top+el.outerHeight()};return bounds}function isInBounds(point,bounds){return point.x>bounds.left&&point.x<bounds.right&&point.y>bounds.top&&point.y<bounds.bottom}function comparePoints(pointA,pointB){return pointA.x==pointB.x&&pointA.y==pointB.y}var options=$.extend({},options),useTouchEvents=SUPPORTS_TOUCH||SUPPORTS_POINTER||!options.fallbackToMouseEvents,START_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerDown":"pointerdown":"touchstart":"mousedown",MOVE_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerMove":"pointermove":"touchmove":"mousemove",END_EV=useTouchEvents?SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerUp":"pointerup":"touchend":"mouseup",LEAVE_EV=useTouchEvents?SUPPORTS_POINTER?"mouseleave":null:"mouseleave",CANCEL_EV=SUPPORTS_POINTER?SUPPORTS_POINTER_IE10?"MSPointerCancel":"pointercancel":"touchcancel",distance=0,direction=null,currentDirection=null,duration=0,startTouchesDistance=0,endTouchesDistance=0,pinchZoom=1,pinchDistance=0,pinchDirection=0,maximumsMap=null,$element=$(element),phase="start",fingerCount=0,fingerData={},startTime=0,endTime=0,previousTouchEndTime=0,fingerCountAtRelease=0,doubleTapStartTime=0,singleTapTimeout=null,holdTimeout=null;try{$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel)}catch(e){$.error("events not supported "+START_EV+","+CANCEL_EV+" on jQuery.swipe")}this.enable=function(){return this.disable(),$element.bind(START_EV,touchStart),$element.bind(CANCEL_EV,touchCancel),$element},this.disable=function(){return removeListeners(),$element},this.destroy=function(){removeListeners(),$element.data(PLUGIN_NS,null),$element=null},this.option=function(property,value){if("object"==typeof property)options=$.extend(options,property);else if(void 0!==options[property]){if(void 0===value)return options[property];options[property]=value}else{if(!property)return options;$.error("Option "+property+" does not exist on jQuery.swipe.options")}return null}}var VERSION="1.6.18",LEFT="left",RIGHT="right",UP="up",DOWN="down",IN="in",OUT="out",NONE="none",AUTO="auto",SWIPE="swipe",PINCH="pinch",TAP="tap",DOUBLE_TAP="doubletap",LONG_TAP="longtap",HORIZONTAL="horizontal",VERTICAL="vertical",ALL_FINGERS="all",DOUBLE_TAP_THRESHOLD=10,PHASE_START="start",PHASE_MOVE="move",PHASE_END="end",PHASE_CANCEL="cancel",SUPPORTS_TOUCH="ontouchstart"in window,SUPPORTS_POINTER_IE10=window.navigator.msPointerEnabled&&!window.navigator.pointerEnabled&&!SUPPORTS_TOUCH,SUPPORTS_POINTER=(window.navigator.pointerEnabled||window.navigator.msPointerEnabled)&&!SUPPORTS_TOUCH,PLUGIN_NS="TouchSwipe",defaults={fingers:1,threshold:75,cancelThreshold:null,pinchThreshold:20,maxTimeThreshold:null,fingerReleaseThreshold:250,longTapThreshold:500,doubleTapThreshold:200,swipe:null,swipeLeft:null,swipeRight:null,swipeUp:null,swipeDown:null,swipeStatus:null,pinchIn:null,pinchOut:null,pinchStatus:null,click:null,tap:null,doubleTap:null,longTap:null,hold:null,triggerOnTouchEnd:!0,triggerOnTouchLeave:!1,allowPageScroll:"auto",fallbackToMouseEvents:!0,excludedElements:".noSwipe",preventDefaultEvents:!0};$.fn.swipe=function(method){var $this=$(this),plugin=$this.data(PLUGIN_NS);if(plugin&&"string"==typeof method){if(plugin[method])return plugin[method].apply(plugin,Array.prototype.slice.call(arguments,1));$.error("Method "+method+" does not exist on jQuery.swipe")}else if(plugin&&"object"==typeof method)plugin.option.apply(plugin,arguments);else if(!(plugin||"object"!=typeof method&&method))return init.apply(this,arguments);return $this},$.fn.swipe.version=VERSION,$.fn.swipe.defaults=defaults,$.fn.swipe.phases={PHASE_START:PHASE_START,PHASE_MOVE:PHASE_MOVE,PHASE_END:PHASE_END,PHASE_CANCEL:PHASE_CANCEL},$.fn.swipe.directions={LEFT:LEFT,RIGHT:RIGHT,UP:UP,DOWN:DOWN,IN:IN,OUT:OUT},$.fn.swipe.pageScroll={NONE:NONE,HORIZONTAL:HORIZONTAL,VERTICAL:VERTICAL,AUTO:AUTO},$.fn.swipe.fingers={ONE:1,TWO:2,THREE:3,FOUR:4,FIVE:5,ALL:ALL_FINGERS}});;
/*
 * jQuery appear plugin
 *
 * Copyright (c) 2012 Andrey Sidorov
 * licensed under MIT license.
 *
 * https://github.com/morr/jquery.appear/
 *
 * Version: 0.3.6
 */
(function($) {
  var selectors = [];

  var check_binded = false;
  var check_lock = false;
  var defaults = {
    interval: 250,
    force_process: false
  };
  var $window = $(window);

  var $prior_appeared = [];

  function appeared(selector) {
    return $(selector).filter(function() {
      return $(this).is(':appeared');
    });
  }

  function process() {
    check_lock = false;
    for (var index = 0, selectorsLength = selectors.length; index < selectorsLength; index++) {
      var $appeared = appeared(selectors[index]);

      $appeared.trigger('appear', [$appeared]);

      if ($prior_appeared[index]) {
        var $disappeared = $prior_appeared[index].not($appeared);
        $disappeared.trigger('disappear', [$disappeared]);
      }
      $prior_appeared[index] = $appeared;
    }
  }

  function add_selector(selector) {
    selectors.push(selector);
    $prior_appeared.push();
  }

  // "appeared" custom filter
  $.expr[':'].appeared = function(element) {
    var $element = $(element);
    if (!$element.is(':visible')) {
      return false;
    }

    var window_left = $window.scrollLeft();
    var window_top = $window.scrollTop();
    var offset = $element.offset();
    var left = offset.left;
    var top = offset.top;

    if (top + $element.height() >= window_top &&
        top - ($element.data('appear-top-offset') || 0) <= window_top + $window.height() &&
        left + $element.width() >= window_left &&
        left - ($element.data('appear-left-offset') || 0) <= window_left + $window.width()) {
      return true;
    } else {
      return false;
    }
  };

  $.fn.extend({
    // watching for element's appearance in browser viewport
    appear: function(options) {
      var opts = $.extend({}, defaults, options || {});
      var selector = this.selector || this;
      if (!check_binded) {
        var on_check = function() {
          if (check_lock) {
            return;
          }
          check_lock = true;

          setTimeout(process, opts.interval);
        };

        $(window).scroll(on_check).resize(on_check);
        check_binded = true;
      }

      if (opts.force_process) {
        setTimeout(process, opts.interval);
      }
      add_selector(selector);
      return $(selector);
    }
  });

  $.extend({
    // force elements's appearance check
    force_appear: function() {
      if (check_binded) {
        process();
        return true;
      }
      return false;
    }
  });
})(function() {
  if (typeof module !== 'undefined') {
    // Node
    return require('jquery');
  } else {
    return jQuery;
  }
}());
;
//! moment.js
//! version : 2.9.0
//! authors : Tim Wood, Iskren Chernev, Moment.js contributors
//! license : MIT
//! momentjs.com
(function (a) {
    function b(a, b, c) { switch (arguments.length) { case 2: return null != a ? a : b; case 3: return null != a ? a : null != b ? b : c; default: throw new Error("Implement me") } } function c(a, b) { return Bb.call(a, b) } function d() { return { empty: !1, unusedTokens: [], unusedInput: [], overflow: -2, charsLeftOver: 0, nullInput: !1, invalidMonth: null, invalidFormat: !1, userInvalidated: !1, iso: !1 } } function e(a) { vb.suppressDeprecationWarnings === !1 && "undefined" != typeof console && console.warn && console.warn("Deprecation warning: " + a) } function f(a, b) { var c = !0; return o(function () { return c && (e(a), c = !1), b.apply(this, arguments) }, b) } function g(a, b) { sc[a] || (e(b), sc[a] = !0) } function h(a, b) { return function (c) { return r(a.call(this, c), b) } } function i(a, b) { return function (c) { return this.localeData().ordinal(a.call(this, c), b) } } function j(a, b) { var c, d, e = 12 * (b.year() - a.year()) + (b.month() - a.month()), f = a.clone().add(e, "months"); return 0 > b - f ? (c = a.clone().add(e - 1, "months"), d = (b - f) / (f - c)) : (c = a.clone().add(e + 1, "months"), d = (b - f) / (c - f)), -(e + d) } function k(a, b, c) { var d; return null == c ? b : null != a.meridiemHour ? a.meridiemHour(b, c) : null != a.isPM ? (d = a.isPM(c), d && 12 > b && (b += 12), d || 12 !== b || (b = 0), b) : b } function l() { } function m(a, b) { b !== !1 && H(a), p(this, a), this._d = new Date(+a._d), uc === !1 && (uc = !0, vb.updateOffset(this), uc = !1) } function n(a) { var b = A(a), c = b.year || 0, d = b.quarter || 0, e = b.month || 0, f = b.week || 0, g = b.day || 0, h = b.hour || 0, i = b.minute || 0, j = b.second || 0, k = b.millisecond || 0; this._milliseconds = +k + 1e3 * j + 6e4 * i + 36e5 * h, this._days = +g + 7 * f, this._months = +e + 3 * d + 12 * c, this._data = {}, this._locale = vb.localeData(), this._bubble() } function o(a, b) { for (var d in b) c(b, d) && (a[d] = b[d]); return c(b, "toString") && (a.toString = b.toString), c(b, "valueOf") && (a.valueOf = b.valueOf), a } function p(a, b) { var c, d, e; if ("undefined" != typeof b._isAMomentObject && (a._isAMomentObject = b._isAMomentObject), "undefined" != typeof b._i && (a._i = b._i), "undefined" != typeof b._f && (a._f = b._f), "undefined" != typeof b._l && (a._l = b._l), "undefined" != typeof b._strict && (a._strict = b._strict), "undefined" != typeof b._tzm && (a._tzm = b._tzm), "undefined" != typeof b._isUTC && (a._isUTC = b._isUTC), "undefined" != typeof b._offset && (a._offset = b._offset), "undefined" != typeof b._pf && (a._pf = b._pf), "undefined" != typeof b._locale && (a._locale = b._locale), Kb.length > 0) for (c in Kb) d = Kb[c], e = b[d], "undefined" != typeof e && (a[d] = e); return a } function q(a) { return 0 > a ? Math.ceil(a) : Math.floor(a) } function r(a, b, c) { for (var d = "" + Math.abs(a), e = a >= 0; d.length < b;) d = "0" + d; return (e ? c ? "+" : "" : "-") + d } function s(a, b) { var c = { milliseconds: 0, months: 0 }; return c.months = b.month() - a.month() + 12 * (b.year() - a.year()), a.clone().add(c.months, "M").isAfter(b) && --c.months, c.milliseconds = +b - +a.clone().add(c.months, "M"), c } function t(a, b) { var c; return b = M(b, a), a.isBefore(b) ? c = s(a, b) : (c = s(b, a), c.milliseconds = -c.milliseconds, c.months = -c.months), c } function u(a, b) { return function (c, d) { var e, f; return null === d || isNaN(+d) || (g(b, "moment()." + b + "(period, number) is deprecated. Please use moment()." + b + "(number, period)."), f = c, c = d, d = f), c = "string" == typeof c ? +c : c, e = vb.duration(c, d), v(this, e, a), this } } function v(a, b, c, d) { var e = b._milliseconds, f = b._days, g = b._months; d = null == d ? !0 : d, e && a._d.setTime(+a._d + e * c), f && pb(a, "Date", ob(a, "Date") + f * c), g && nb(a, ob(a, "Month") + g * c), d && vb.updateOffset(a, f || g) } function w(a) { return "[object Array]" === Object.prototype.toString.call(a) } function x(a) { return "[object Date]" === Object.prototype.toString.call(a) || a instanceof Date } function y(a, b, c) { var d, e = Math.min(a.length, b.length), f = Math.abs(a.length - b.length), g = 0; for (d = 0; e > d; d++) (c && a[d] !== b[d] || !c && C(a[d]) !== C(b[d])) && g++; return g + f } function z(a) { if (a) { var b = a.toLowerCase().replace(/(.)s$/, "$1"); a = lc[a] || mc[b] || b } return a } function A(a) { var b, d, e = {}; for (d in a) c(a, d) && (b = z(d), b && (e[b] = a[d])); return e } function B(b) { var c, d; if (0 === b.indexOf("week")) c = 7, d = "day"; else { if (0 !== b.indexOf("month")) return; c = 12, d = "month" } vb[b] = function (e, f) { var g, h, i = vb._locale[b], j = []; if ("number" == typeof e && (f = e, e = a), h = function (a) { var b = vb().utc().set(d, a); return i.call(vb._locale, b, e || "") }, null != f) return h(f); for (g = 0; c > g; g++) j.push(h(g)); return j } } function C(a) { var b = +a, c = 0; return 0 !== b && isFinite(b) && (c = b >= 0 ? Math.floor(b) : Math.ceil(b)), c } function D(a, b) { return new Date(Date.UTC(a, b + 1, 0)).getUTCDate() } function E(a, b, c) { return jb(vb([a, 11, 31 + b - c]), b, c).week } function F(a) { return G(a) ? 366 : 365 } function G(a) { return a % 4 === 0 && a % 100 !== 0 || a % 400 === 0 } function H(a) { var b; a._a && -2 === a._pf.overflow && (b = a._a[Db] < 0 || a._a[Db] > 11 ? Db : a._a[Eb] < 1 || a._a[Eb] > D(a._a[Cb], a._a[Db]) ? Eb : a._a[Fb] < 0 || a._a[Fb] > 24 || 24 === a._a[Fb] && (0 !== a._a[Gb] || 0 !== a._a[Hb] || 0 !== a._a[Ib]) ? Fb : a._a[Gb] < 0 || a._a[Gb] > 59 ? Gb : a._a[Hb] < 0 || a._a[Hb] > 59 ? Hb : a._a[Ib] < 0 || a._a[Ib] > 999 ? Ib : -1, a._pf._overflowDayOfYear && (Cb > b || b > Eb) && (b = Eb), a._pf.overflow = b) } function I(b) { return null == b._isValid && (b._isValid = !isNaN(b._d.getTime()) && b._pf.overflow < 0 && !b._pf.empty && !b._pf.invalidMonth && !b._pf.nullInput && !b._pf.invalidFormat && !b._pf.userInvalidated, b._strict && (b._isValid = b._isValid && 0 === b._pf.charsLeftOver && 0 === b._pf.unusedTokens.length && b._pf.bigHour === a)), b._isValid } function J(a) { return a ? a.toLowerCase().replace("_", "-") : a } function K(a) { for (var b, c, d, e, f = 0; f < a.length;) { for (e = J(a[f]).split("-"), b = e.length, c = J(a[f + 1]), c = c ? c.split("-") : null; b > 0;) { if (d = L(e.slice(0, b).join("-"))) return d; if (c && c.length >= b && y(e, c, !0) >= b - 1) break; b-- } f++ } return null } function L(a) { var b = null; if (!Jb[a] && Lb) try { b = vb.locale(), require("./locale/" + a), vb.locale(b) } catch (c) { } return Jb[a] } function M(a, b) { var c, d; return b._isUTC ? (c = b.clone(), d = (vb.isMoment(a) || x(a) ? +a : +vb(a)) - +c, c._d.setTime(+c._d + d), vb.updateOffset(c, !1), c) : vb(a).local() } function N(a) { return a.match(/\[[\s\S]/) ? a.replace(/^\[|\]$/g, "") : a.replace(/\\/g, "") } function O(a) { var b, c, d = a.match(Pb); for (b = 0, c = d.length; c > b; b++) d[b] = rc[d[b]] ? rc[d[b]] : N(d[b]); return function (e) { var f = ""; for (b = 0; c > b; b++) f += d[b] instanceof Function ? d[b].call(e, a) : d[b]; return f } } function P(a, b) { return a.isValid() ? (b = Q(b, a.localeData()), nc[b] || (nc[b] = O(b)), nc[b](a)) : a.localeData().invalidDate() } function Q(a, b) { function c(a) { return b.longDateFormat(a) || a } var d = 5; for (Qb.lastIndex = 0; d >= 0 && Qb.test(a) ;) a = a.replace(Qb, c), Qb.lastIndex = 0, d -= 1; return a } function R(a, b) { var c, d = b._strict; switch (a) { case "Q": return _b; case "DDDD": return bc; case "YYYY": case "GGGG": case "gggg": return d ? cc : Tb; case "Y": case "G": case "g": return ec; case "YYYYYY": case "YYYYY": case "GGGGG": case "ggggg": return d ? dc : Ub; case "S": if (d) return _b; case "SS": if (d) return ac; case "SSS": if (d) return bc; case "DDD": return Sb; case "MMM": case "MMMM": case "dd": case "ddd": case "dddd": return Wb; case "a": case "A": return b._locale._meridiemParse; case "x": return Zb; case "X": return $b; case "Z": case "ZZ": return Xb; case "T": return Yb; case "SSSS": return Vb; case "MM": case "DD": case "YY": case "GG": case "gg": case "HH": case "hh": case "mm": case "ss": case "ww": case "WW": return d ? ac : Rb; case "M": case "D": case "d": case "H": case "h": case "m": case "s": case "w": case "W": case "e": case "E": return Rb; case "Do": return d ? b._locale._ordinalParse : b._locale._ordinalParseLenient; default: return c = new RegExp($(Z(a.replace("\\", "")), "i")) } } function S(a) { a = a || ""; var b = a.match(Xb) || [], c = b[b.length - 1] || [], d = (c + "").match(jc) || ["-", 0, 0], e = +(60 * d[1]) + C(d[2]); return "+" === d[0] ? e : -e } function T(a, b, c) { var d, e = c._a; switch (a) { case "Q": null != b && (e[Db] = 3 * (C(b) - 1)); break; case "M": case "MM": null != b && (e[Db] = C(b) - 1); break; case "MMM": case "MMMM": d = c._locale.monthsParse(b, a, c._strict), null != d ? e[Db] = d : c._pf.invalidMonth = b; break; case "D": case "DD": null != b && (e[Eb] = C(b)); break; case "Do": null != b && (e[Eb] = C(parseInt(b.match(/\d{1,2}/)[0], 10))); break; case "DDD": case "DDDD": null != b && (c._dayOfYear = C(b)); break; case "YY": e[Cb] = vb.parseTwoDigitYear(b); break; case "YYYY": case "YYYYY": case "YYYYYY": e[Cb] = C(b); break; case "a": case "A": c._meridiem = b; break; case "h": case "hh": c._pf.bigHour = !0; case "H": case "HH": e[Fb] = C(b); break; case "m": case "mm": e[Gb] = C(b); break; case "s": case "ss": e[Hb] = C(b); break; case "S": case "SS": case "SSS": case "SSSS": e[Ib] = C(1e3 * ("0." + b)); break; case "x": c._d = new Date(C(b)); break; case "X": c._d = new Date(1e3 * parseFloat(b)); break; case "Z": case "ZZ": c._useUTC = !0, c._tzm = S(b); break; case "dd": case "ddd": case "dddd": d = c._locale.weekdaysParse(b), null != d ? (c._w = c._w || {}, c._w.d = d) : c._pf.invalidWeekday = b; break; case "w": case "ww": case "W": case "WW": case "d": case "e": case "E": a = a.substr(0, 1); case "gggg": case "GGGG": case "GGGGG": a = a.substr(0, 2), b && (c._w = c._w || {}, c._w[a] = C(b)); break; case "gg": case "GG": c._w = c._w || {}, c._w[a] = vb.parseTwoDigitYear(b) } } function U(a) { var c, d, e, f, g, h, i; c = a._w, null != c.GG || null != c.W || null != c.E ? (g = 1, h = 4, d = b(c.GG, a._a[Cb], jb(vb(), 1, 4).year), e = b(c.W, 1), f = b(c.E, 1)) : (g = a._locale._week.dow, h = a._locale._week.doy, d = b(c.gg, a._a[Cb], jb(vb(), g, h).year), e = b(c.w, 1), null != c.d ? (f = c.d, g > f && ++e) : f = null != c.e ? c.e + g : g), i = kb(d, e, f, h, g), a._a[Cb] = i.year, a._dayOfYear = i.dayOfYear } function V(a) { var c, d, e, f, g = []; if (!a._d) { for (e = X(a), a._w && null == a._a[Eb] && null == a._a[Db] && U(a), a._dayOfYear && (f = b(a._a[Cb], e[Cb]), a._dayOfYear > F(f) && (a._pf._overflowDayOfYear = !0), d = fb(f, 0, a._dayOfYear), a._a[Db] = d.getUTCMonth(), a._a[Eb] = d.getUTCDate()), c = 0; 3 > c && null == a._a[c]; ++c) a._a[c] = g[c] = e[c]; for (; 7 > c; c++) a._a[c] = g[c] = null == a._a[c] ? 2 === c ? 1 : 0 : a._a[c]; 24 === a._a[Fb] && 0 === a._a[Gb] && 0 === a._a[Hb] && 0 === a._a[Ib] && (a._nextDay = !0, a._a[Fb] = 0), a._d = (a._useUTC ? fb : eb).apply(null, g), null != a._tzm && a._d.setUTCMinutes(a._d.getUTCMinutes() - a._tzm), a._nextDay && (a._a[Fb] = 24) } } function W(a) { var b; a._d || (b = A(a._i), a._a = [b.year, b.month, b.day || b.date, b.hour, b.minute, b.second, b.millisecond], V(a)) } function X(a) { var b = new Date; return a._useUTC ? [b.getUTCFullYear(), b.getUTCMonth(), b.getUTCDate()] : [b.getFullYear(), b.getMonth(), b.getDate()] } function Y(b) { if (b._f === vb.ISO_8601) return void ab(b); b._a = [], b._pf.empty = !0; var c, d, e, f, g, h = "" + b._i, i = h.length, j = 0; for (e = Q(b._f, b._locale).match(Pb) || [], c = 0; c < e.length; c++) f = e[c], d = (h.match(R(f, b)) || [])[0], d && (g = h.substr(0, h.indexOf(d)), g.length > 0 && b._pf.unusedInput.push(g), h = h.slice(h.indexOf(d) + d.length), j += d.length), rc[f] ? (d ? b._pf.empty = !1 : b._pf.unusedTokens.push(f), T(f, d, b)) : b._strict && !d && b._pf.unusedTokens.push(f); b._pf.charsLeftOver = i - j, h.length > 0 && b._pf.unusedInput.push(h), b._pf.bigHour === !0 && b._a[Fb] <= 12 && (b._pf.bigHour = a), b._a[Fb] = k(b._locale, b._a[Fb], b._meridiem), V(b), H(b) } function Z(a) { return a.replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (a, b, c, d, e) { return b || c || d || e }) } function $(a) { return a.replace(/[-\/\\^$*+?.()|[\]{}]/g, "\\$&") } function _(a) { var b, c, e, f, g; if (0 === a._f.length) return a._pf.invalidFormat = !0, void (a._d = new Date(0 / 0)); for (f = 0; f < a._f.length; f++) g = 0, b = p({}, a), null != a._useUTC && (b._useUTC = a._useUTC), b._pf = d(), b._f = a._f[f], Y(b), I(b) && (g += b._pf.charsLeftOver, g += 10 * b._pf.unusedTokens.length, b._pf.score = g, (null == e || e > g) && (e = g, c = b)); o(a, c || b) } function ab(a) { var b, c, d = a._i, e = fc.exec(d); if (e) { for (a._pf.iso = !0, b = 0, c = hc.length; c > b; b++) if (hc[b][1].exec(d)) { a._f = hc[b][0] + (e[6] || " "); break } for (b = 0, c = ic.length; c > b; b++) if (ic[b][1].exec(d)) { a._f += ic[b][0]; break } d.match(Xb) && (a._f += "Z"), Y(a) } else a._isValid = !1 } function bb(a) { ab(a), a._isValid === !1 && (delete a._isValid, vb.createFromInputFallback(a)) } function cb(a, b) { var c, d = []; for (c = 0; c < a.length; ++c) d.push(b(a[c], c)); return d } function db(b) { var c, d = b._i; d === a ? b._d = new Date : x(d) ? b._d = new Date(+d) : null !== (c = Mb.exec(d)) ? b._d = new Date(+c[1]) : "string" == typeof d ? bb(b) : w(d) ? (b._a = cb(d.slice(0), function (a) { return parseInt(a, 10) }), V(b)) : "object" == typeof d ? W(b) : "number" == typeof d ? b._d = new Date(d) : vb.createFromInputFallback(b) } function eb(a, b, c, d, e, f, g) { var h = new Date(a, b, c, d, e, f, g); return 1970 > a && h.setFullYear(a), h } function fb(a) { var b = new Date(Date.UTC.apply(null, arguments)); return 1970 > a && b.setUTCFullYear(a), b } function gb(a, b) { if ("string" == typeof a) if (isNaN(a)) { if (a = b.weekdaysParse(a), "number" != typeof a) return null } else a = parseInt(a, 10); return a } function hb(a, b, c, d, e) { return e.relativeTime(b || 1, !!c, a, d) } function ib(a, b, c) { var d = vb.duration(a).abs(), e = Ab(d.as("s")), f = Ab(d.as("m")), g = Ab(d.as("h")), h = Ab(d.as("d")), i = Ab(d.as("M")), j = Ab(d.as("y")), k = e < oc.s && ["s", e] || 1 === f && ["m"] || f < oc.m && ["mm", f] || 1 === g && ["h"] || g < oc.h && ["hh", g] || 1 === h && ["d"] || h < oc.d && ["dd", h] || 1 === i && ["M"] || i < oc.M && ["MM", i] || 1 === j && ["y"] || ["yy", j]; return k[2] = b, k[3] = +a > 0, k[4] = c, hb.apply({}, k) } function jb(a, b, c) { var d, e = c - b, f = c - a.day(); return f > e && (f -= 7), e - 7 > f && (f += 7), d = vb(a).add(f, "d"), { week: Math.ceil(d.dayOfYear() / 7), year: d.year() } } function kb(a, b, c, d, e) { var f, g, h = fb(a, 0, 1).getUTCDay(); return h = 0 === h ? 7 : h, c = null != c ? c : e, f = e - h + (h > d ? 7 : 0) - (e > h ? 7 : 0), g = 7 * (b - 1) + (c - e) + f + 1, { year: g > 0 ? a : a - 1, dayOfYear: g > 0 ? g : F(a - 1) + g } } function lb(b) { var c, d = b._i, e = b._f; return b._locale = b._locale || vb.localeData(b._l), null === d || e === a && "" === d ? vb.invalid({ nullInput: !0 }) : ("string" == typeof d && (b._i = d = b._locale.preparse(d)), vb.isMoment(d) ? new m(d, !0) : (e ? w(e) ? _(b) : Y(b) : db(b), c = new m(b), c._nextDay && (c.add(1, "d"), c._nextDay = a), c)) } function mb(a, b) { var c, d; if (1 === b.length && w(b[0]) && (b = b[0]), !b.length) return vb(); for (c = b[0], d = 1; d < b.length; ++d) b[d][a](c) && (c = b[d]); return c } function nb(a, b) { var c; return "string" == typeof b && (b = a.localeData().monthsParse(b), "number" != typeof b) ? a : (c = Math.min(a.date(), D(a.year(), b)), a._d["set" + (a._isUTC ? "UTC" : "") + "Month"](b, c), a) } function ob(a, b) { return a._d["get" + (a._isUTC ? "UTC" : "") + b]() } function pb(a, b, c) { return "Month" === b ? nb(a, c) : a._d["set" + (a._isUTC ? "UTC" : "") + b](c) } function qb(a, b) { return function (c) { return null != c ? (pb(this, a, c), vb.updateOffset(this, b), this) : ob(this, a) } } function rb(a) { return 400 * a / 146097 } function sb(a) { return 146097 * a / 400 } function tb(a) { vb.duration.fn[a] = function () { return this._data[a] } } function ub(a) { "undefined" == typeof ender && (wb = zb.moment, zb.moment = a ? f("Accessing Moment through the global scope is deprecated, and will be removed in an upcoming release.", vb) : vb) } for (var vb, wb, xb, yb = "2.9.0", zb = "undefined" == typeof global || "undefined" != typeof window && window !== global.window ? this : global, Ab = Math.round, Bb = Object.prototype.hasOwnProperty, Cb = 0, Db = 1, Eb = 2, Fb = 3, Gb = 4, Hb = 5, Ib = 6, Jb = {}, Kb = [], Lb = "undefined" != typeof module && module && module.exports, Mb = /^\/?Date\((\-?\d+)/i, Nb = /(\-)?(?:(\d*)\.)?(\d+)\:(\d+)(?:\:(\d+)\.?(\d{3})?)?/, Ob = /^(-)?P(?:(?:([0-9,.]*)Y)?(?:([0-9,.]*)M)?(?:([0-9,.]*)D)?(?:T(?:([0-9,.]*)H)?(?:([0-9,.]*)M)?(?:([0-9,.]*)S)?)?|([0-9,.]*)W)$/, Pb = /(\[[^\[]*\])|(\\)?(Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Q|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|mm?|ss?|S{1,4}|x|X|zz?|ZZ?|.)/g, Qb = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g, Rb = /\d\d?/, Sb = /\d{1,3}/, Tb = /\d{1,4}/, Ub = /[+\-]?\d{1,6}/, Vb = /\d+/, Wb = /[0-9]*['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+|[\u0600-\u06FF\/]+(\s*?[\u0600-\u06FF]+){1,2}/i, Xb = /Z|[\+\-]\d\d:?\d\d/gi, Yb = /T/i, Zb = /[\+\-]?\d+/, $b = /[\+\-]?\d+(\.\d{1,3})?/, _b = /\d/, ac = /\d\d/, bc = /\d{3}/, cc = /\d{4}/, dc = /[+-]?\d{6}/, ec = /[+-]?\d+/, fc = /^\s*(?:[+-]\d{6}|\d{4})-(?:(\d\d-\d\d)|(W\d\d$)|(W\d\d-\d)|(\d\d\d))((T| )(\d\d(:\d\d(:\d\d(\.\d+)?)?)?)?([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/, gc = "YYYY-MM-DDTHH:mm:ssZ", hc = [["YYYYYY-MM-DD", /[+-]\d{6}-\d{2}-\d{2}/], ["YYYY-MM-DD", /\d{4}-\d{2}-\d{2}/], ["GGGG-[W]WW-E", /\d{4}-W\d{2}-\d/], ["GGGG-[W]WW", /\d{4}-W\d{2}/], ["YYYY-DDD", /\d{4}-\d{3}/]], ic = [["HH:mm:ss.SSSS", /(T| )\d\d:\d\d:\d\d\.\d+/], ["HH:mm:ss", /(T| )\d\d:\d\d:\d\d/], ["HH:mm", /(T| )\d\d:\d\d/], ["HH", /(T| )\d\d/]], jc = /([\+\-]|\d\d)/gi, kc = ("Date|Hours|Minutes|Seconds|Milliseconds".split("|"), { Milliseconds: 1, Seconds: 1e3, Minutes: 6e4, Hours: 36e5, Days: 864e5, Months: 2592e6, Years: 31536e6 }), lc = { ms: "millisecond", s: "second", m: "minute", h: "hour", d: "day", D: "date", w: "week", W: "isoWeek", M: "month", Q: "quarter", y: "year", DDD: "dayOfYear", e: "weekday", E: "isoWeekday", gg: "weekYear", GG: "isoWeekYear" }, mc = { dayofyear: "dayOfYear", isoweekday: "isoWeekday", isoweek: "isoWeek", weekyear: "weekYear", isoweekyear: "isoWeekYear" }, nc = {}, oc = { s: 45, m: 45, h: 22, d: 26, M: 11 }, pc = "DDD w W M D d".split(" "), qc = "M D H h m s w W".split(" "), rc = { M: function () { return this.month() + 1 }, MMM: function (a) { return this.localeData().monthsShort(this, a) }, MMMM: function (a) { return this.localeData().months(this, a) }, D: function () { return this.date() }, DDD: function () { return this.dayOfYear() }, d: function () { return this.day() }, dd: function (a) { return this.localeData().weekdaysMin(this, a) }, ddd: function (a) { return this.localeData().weekdaysShort(this, a) }, dddd: function (a) { return this.localeData().weekdays(this, a) }, w: function () { return this.week() }, W: function () { return this.isoWeek() }, YY: function () { return r(this.year() % 100, 2) }, YYYY: function () { return r(this.year(), 4) }, YYYYY: function () { return r(this.year(), 5) }, YYYYYY: function () { var a = this.year(), b = a >= 0 ? "+" : "-"; return b + r(Math.abs(a), 6) }, gg: function () { return r(this.weekYear() % 100, 2) }, gggg: function () { return r(this.weekYear(), 4) }, ggggg: function () { return r(this.weekYear(), 5) }, GG: function () { return r(this.isoWeekYear() % 100, 2) }, GGGG: function () { return r(this.isoWeekYear(), 4) }, GGGGG: function () { return r(this.isoWeekYear(), 5) }, e: function () { return this.weekday() }, E: function () { return this.isoWeekday() }, a: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !0) }, A: function () { return this.localeData().meridiem(this.hours(), this.minutes(), !1) }, H: function () { return this.hours() }, h: function () { return this.hours() % 12 || 12 }, m: function () { return this.minutes() }, s: function () { return this.seconds() }, S: function () { return C(this.milliseconds() / 100) }, SS: function () { return r(C(this.milliseconds() / 10), 2) }, SSS: function () { return r(this.milliseconds(), 3) }, SSSS: function () { return r(this.milliseconds(), 3) }, Z: function () { var a = this.utcOffset(), b = "+"; return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + ":" + r(C(a) % 60, 2) }, ZZ: function () { var a = this.utcOffset(), b = "+"; return 0 > a && (a = -a, b = "-"), b + r(C(a / 60), 2) + r(C(a) % 60, 2) }, z: function () { return this.zoneAbbr() }, zz: function () { return this.zoneName() }, x: function () { return this.valueOf() }, X: function () { return this.unix() }, Q: function () { return this.quarter() } }, sc = {}, tc = ["months", "monthsShort", "weekdays", "weekdaysShort", "weekdaysMin"], uc = !1; pc.length;) xb = pc.pop(), rc[xb + "o"] = i(rc[xb], xb); for (; qc.length;) xb = qc.pop(), rc[xb + xb] = h(rc[xb], 2); rc.DDDD = h(rc.DDD, 3), o(l.prototype, { set: function (a) { var b, c; for (c in a) b = a[c], "function" == typeof b ? this[c] = b : this["_" + c] = b; this._ordinalParseLenient = new RegExp(this._ordinalParse.source + "|" + /\d{1,2}/.source) }, _months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), months: function (a) { return this._months[a.month()] }, _monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), monthsShort: function (a) { return this._monthsShort[a.month()] }, monthsParse: function (a, b, c) { var d, e, f; for (this._monthsParse || (this._monthsParse = [], this._longMonthsParse = [], this._shortMonthsParse = []), d = 0; 12 > d; d++) { if (e = vb.utc([2e3, d]), c && !this._longMonthsParse[d] && (this._longMonthsParse[d] = new RegExp("^" + this.months(e, "").replace(".", "") + "$", "i"), this._shortMonthsParse[d] = new RegExp("^" + this.monthsShort(e, "").replace(".", "") + "$", "i")), c || this._monthsParse[d] || (f = "^" + this.months(e, "") + "|^" + this.monthsShort(e, ""), this._monthsParse[d] = new RegExp(f.replace(".", ""), "i")), c && "MMMM" === b && this._longMonthsParse[d].test(a)) return d; if (c && "MMM" === b && this._shortMonthsParse[d].test(a)) return d; if (!c && this._monthsParse[d].test(a)) return d } }, _weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdays: function (a) { return this._weekdays[a.day()] }, _weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysShort: function (a) { return this._weekdaysShort[a.day()] }, _weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), weekdaysMin: function (a) { return this._weekdaysMin[a.day()] }, weekdaysParse: function (a) { var b, c, d; for (this._weekdaysParse || (this._weekdaysParse = []), b = 0; 7 > b; b++) if (this._weekdaysParse[b] || (c = vb([2e3, 1]).day(b), d = "^" + this.weekdays(c, "") + "|^" + this.weekdaysShort(c, "") + "|^" + this.weekdaysMin(c, ""), this._weekdaysParse[b] = new RegExp(d.replace(".", ""), "i")), this._weekdaysParse[b].test(a)) return b }, _longDateFormat: { LTS: "h:mm:ss A", LT: "h:mm A", L: "MM/DD/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM D, YYYY LT" }, longDateFormat: function (a) { var b = this._longDateFormat[a]; return !b && this._longDateFormat[a.toUpperCase()] && (b = this._longDateFormat[a.toUpperCase()].replace(/MMMM|MM|DD|dddd/g, function (a) { return a.slice(1) }), this._longDateFormat[a] = b), b }, isPM: function (a) { return "p" === (a + "").toLowerCase().charAt(0) }, _meridiemParse: /[ap]\.?m?\.?/i, meridiem: function (a, b, c) { return a > 11 ? c ? "pm" : "PM" : c ? "am" : "AM" }, _calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, calendar: function (a, b, c) { var d = this._calendar[a]; return "function" == typeof d ? d.apply(b, [c]) : d }, _relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, relativeTime: function (a, b, c, d) { var e = this._relativeTime[c]; return "function" == typeof e ? e(a, b, c, d) : e.replace(/%d/i, a) }, pastFuture: function (a, b) { var c = this._relativeTime[a > 0 ? "future" : "past"]; return "function" == typeof c ? c(b) : c.replace(/%s/i, b) }, ordinal: function (a) { return this._ordinal.replace("%d", a) }, _ordinal: "%d", _ordinalParse: /\d{1,2}/, preparse: function (a) { return a }, postformat: function (a) { return a }, week: function (a) { return jb(a, this._week.dow, this._week.doy).week }, _week: { dow: 0, doy: 6 }, firstDayOfWeek: function () { return this._week.dow }, firstDayOfYear: function () { return this._week.doy }, _invalidDate: "Invalid date", invalidDate: function () { return this._invalidDate } }), vb = function (b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._i = b, g._f = c, g._l = e, g._strict = f, g._isUTC = !1, g._pf = d(), lb(g) }, vb.suppressDeprecationWarnings = !1, vb.createFromInputFallback = f("moment construction falls back to js Date. This is discouraged and will be removed in upcoming major release. Please refer to https://github.com/moment/moment/issues/1407 for more info.", function (a) { a._d = new Date(a._i + (a._useUTC ? " UTC" : "")) }), vb.min = function () { var a = [].slice.call(arguments, 0); return mb("isBefore", a) }, vb.max = function () { var a = [].slice.call(arguments, 0); return mb("isAfter", a) }, vb.utc = function (b, c, e, f) { var g; return "boolean" == typeof e && (f = e, e = a), g = {}, g._isAMomentObject = !0, g._useUTC = !0, g._isUTC = !0, g._l = e, g._i = b, g._f = c, g._strict = f, g._pf = d(), lb(g).utc() }, vb.unix = function (a) { return vb(1e3 * a) }, vb.duration = function (a, b) { var d, e, f, g, h = a, i = null; return vb.isDuration(a) ? h = { ms: a._milliseconds, d: a._days, M: a._months } : "number" == typeof a ? (h = {}, b ? h[b] = a : h.milliseconds = a) : (i = Nb.exec(a)) ? (d = "-" === i[1] ? -1 : 1, h = { y: 0, d: C(i[Eb]) * d, h: C(i[Fb]) * d, m: C(i[Gb]) * d, s: C(i[Hb]) * d, ms: C(i[Ib]) * d }) : (i = Ob.exec(a)) ? (d = "-" === i[1] ? -1 : 1, f = function (a) { var b = a && parseFloat(a.replace(",", ".")); return (isNaN(b) ? 0 : b) * d }, h = { y: f(i[2]), M: f(i[3]), d: f(i[4]), h: f(i[5]), m: f(i[6]), s: f(i[7]), w: f(i[8]) }) : null == h ? h = {} : "object" == typeof h && ("from" in h || "to" in h) && (g = t(vb(h.from), vb(h.to)), h = {}, h.ms = g.milliseconds, h.M = g.months), e = new n(h), vb.isDuration(a) && c(a, "_locale") && (e._locale = a._locale), e }, vb.version = yb, vb.defaultFormat = gc, vb.ISO_8601 = function () { }, vb.momentProperties = Kb, vb.updateOffset = function () { }, vb.relativeTimeThreshold = function (b, c) { return oc[b] === a ? !1 : c === a ? oc[b] : (oc[b] = c, !0) }, vb.lang = f("moment.lang is deprecated. Use moment.locale instead.", function (a, b) { return vb.locale(a, b) }), vb.locale = function (a, b) { var c; return a && (c = "undefined" != typeof b ? vb.defineLocale(a, b) : vb.localeData(a), c && (vb.duration._locale = vb._locale = c)), vb._locale._abbr }, vb.defineLocale = function (a, b) { return null !== b ? (b.abbr = a, Jb[a] || (Jb[a] = new l), Jb[a].set(b), vb.locale(a), Jb[a]) : (delete Jb[a], null) }, vb.langData = f("moment.langData is deprecated. Use moment.localeData instead.", function (a) { return vb.localeData(a) }), vb.localeData = function (a) { var b; if (a && a._locale && a._locale._abbr && (a = a._locale._abbr), !a) return vb._locale; if (!w(a)) { if (b = L(a)) return b; a = [a] } return K(a) }, vb.isMoment = function (a) { return a instanceof m || null != a && c(a, "_isAMomentObject") }, vb.isDuration = function (a) { return a instanceof n }; for (xb = tc.length - 1; xb >= 0; --xb) B(tc[xb]); vb.normalizeUnits = function (a) { return z(a) }, vb.invalid = function (a) { var b = vb.utc(0 / 0); return null != a ? o(b._pf, a) : b._pf.userInvalidated = !0, b }, vb.parseZone = function () { return vb.apply(null, arguments).parseZone() }, vb.parseTwoDigitYear = function (a) { return C(a) + (C(a) > 68 ? 1900 : 2e3) }, vb.isDate = x, o(vb.fn = m.prototype, { clone: function () { return vb(this) }, valueOf: function () { return +this._d - 6e4 * (this._offset || 0) }, unix: function () { return Math.floor(+this / 1e3) }, toString: function () { return this.clone().locale("en").format("ddd MMM DD YYYY HH:mm:ss [GMT]ZZ") }, toDate: function () { return this._offset ? new Date(+this) : this._d }, toISOString: function () { var a = vb(this).utc(); return 0 < a.year() && a.year() <= 9999 ? "function" == typeof Date.prototype.toISOString ? this.toDate().toISOString() : P(a, "YYYY-MM-DD[T]HH:mm:ss.SSS[Z]") : P(a, "YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]") }, toArray: function () { var a = this; return [a.year(), a.month(), a.date(), a.hours(), a.minutes(), a.seconds(), a.milliseconds()] }, isValid: function () { return I(this) }, isDSTShifted: function () { return this._a ? this.isValid() && y(this._a, (this._isUTC ? vb.utc(this._a) : vb(this._a)).toArray()) > 0 : !1 }, parsingFlags: function () { return o({}, this._pf) }, invalidAt: function () { return this._pf.overflow }, utc: function (a) { return this.utcOffset(0, a) }, local: function (a) { return this._isUTC && (this.utcOffset(0, a), this._isUTC = !1, a && this.subtract(this._dateUtcOffset(), "m")), this }, format: function (a) { var b = P(this, a || vb.defaultFormat); return this.localeData().postformat(b) }, add: u(1, "add"), subtract: u(-1, "subtract"), diff: function (a, b, c) { var d, e, f = M(a, this), g = 6e4 * (f.utcOffset() - this.utcOffset()); return b = z(b), "year" === b || "month" === b || "quarter" === b ? (e = j(this, f), "quarter" === b ? e /= 3 : "year" === b && (e /= 12)) : (d = this - f, e = "second" === b ? d / 1e3 : "minute" === b ? d / 6e4 : "hour" === b ? d / 36e5 : "day" === b ? (d - g) / 864e5 : "week" === b ? (d - g) / 6048e5 : d), c ? e : q(e) }, from: function (a, b) { return vb.duration({ to: this, from: a }).locale(this.locale()).humanize(!b) }, fromNow: function (a) { return this.from(vb(), a) }, calendar: function (a) { var b = a || vb(), c = M(b, this).startOf("day"), d = this.diff(c, "days", !0), e = -6 > d ? "sameElse" : -1 > d ? "lastWeek" : 0 > d ? "lastDay" : 1 > d ? "sameDay" : 2 > d ? "nextDay" : 7 > d ? "nextWeek" : "sameElse"; return this.format(this.localeData().calendar(e, this, vb(b))) }, isLeapYear: function () { return G(this.year()) }, isDST: function () { return this.utcOffset() > this.clone().month(0).utcOffset() || this.utcOffset() > this.clone().month(5).utcOffset() }, day: function (a) { var b = this._isUTC ? this._d.getUTCDay() : this._d.getDay(); return null != a ? (a = gb(a, this.localeData()), this.add(a - b, "d")) : b }, month: qb("Month", !0), startOf: function (a) { switch (a = z(a)) { case "year": this.month(0); case "quarter": case "month": this.date(1); case "week": case "isoWeek": case "day": this.hours(0); case "hour": this.minutes(0); case "minute": this.seconds(0); case "second": this.milliseconds(0) } return "week" === a ? this.weekday(0) : "isoWeek" === a && this.isoWeekday(1), "quarter" === a && this.month(3 * Math.floor(this.month() / 3)), this }, endOf: function (b) { return b = z(b), b === a || "millisecond" === b ? this : this.startOf(b).add(1, "isoWeek" === b ? "week" : b).subtract(1, "ms") }, isAfter: function (a, b) { var c; return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this > +a) : (c = vb.isMoment(a) ? +a : +vb(a), c < +this.clone().startOf(b)) }, isBefore: function (a, b) { var c; return b = z("undefined" != typeof b ? b : "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +a > +this) : (c = vb.isMoment(a) ? +a : +vb(a), +this.clone().endOf(b) < c) }, isBetween: function (a, b, c) { return this.isAfter(a, c) && this.isBefore(b, c) }, isSame: function (a, b) { var c; return b = z(b || "millisecond"), "millisecond" === b ? (a = vb.isMoment(a) ? a : vb(a), +this === +a) : (c = +vb(a), +this.clone().startOf(b) <= c && c <= +this.clone().endOf(b)) }, min: f("moment().min is deprecated, use moment.min instead. https://github.com/moment/moment/issues/1548", function (a) { return a = vb.apply(null, arguments), this > a ? this : a }), max: f("moment().max is deprecated, use moment.max instead. https://github.com/moment/moment/issues/1548", function (a) { return a = vb.apply(null, arguments), a > this ? this : a }), zone: f("moment().zone is deprecated, use moment().utcOffset instead. https://github.com/moment/moment/issues/1779", function (a, b) { return null != a ? ("string" != typeof a && (a = -a), this.utcOffset(a, b), this) : -this.utcOffset() }), utcOffset: function (a, b) { var c, d = this._offset || 0; return null != a ? ("string" == typeof a && (a = S(a)), Math.abs(a) < 16 && (a = 60 * a), !this._isUTC && b && (c = this._dateUtcOffset()), this._offset = a, this._isUTC = !0, null != c && this.add(c, "m"), d !== a && (!b || this._changeInProgress ? v(this, vb.duration(a - d, "m"), 1, !1) : this._changeInProgress || (this._changeInProgress = !0, vb.updateOffset(this, !0), this._changeInProgress = null)), this) : this._isUTC ? d : this._dateUtcOffset() }, isLocal: function () { return !this._isUTC }, isUtcOffset: function () { return this._isUTC }, isUtc: function () { return this._isUTC && 0 === this._offset }, zoneAbbr: function () { return this._isUTC ? "UTC" : "" }, zoneName: function () { return this._isUTC ? "Coordinated Universal Time" : "" }, parseZone: function () { return this._tzm ? this.utcOffset(this._tzm) : "string" == typeof this._i && this.utcOffset(S(this._i)), this }, hasAlignedHourOffset: function (a) { return a = a ? vb(a).utcOffset() : 0, (this.utcOffset() - a) % 60 === 0 }, daysInMonth: function () { return D(this.year(), this.month()) }, dayOfYear: function (a) { var b = Ab((vb(this).startOf("day") - vb(this).startOf("year")) / 864e5) + 1; return null == a ? b : this.add(a - b, "d") }, quarter: function (a) { return null == a ? Math.ceil((this.month() + 1) / 3) : this.month(3 * (a - 1) + this.month() % 3) }, weekYear: function (a) { var b = jb(this, this.localeData()._week.dow, this.localeData()._week.doy).year; return null == a ? b : this.add(a - b, "y") }, isoWeekYear: function (a) { var b = jb(this, 1, 4).year; return null == a ? b : this.add(a - b, "y") }, week: function (a) { var b = this.localeData().week(this); return null == a ? b : this.add(7 * (a - b), "d") }, isoWeek: function (a) { var b = jb(this, 1, 4).week; return null == a ? b : this.add(7 * (a - b), "d") }, weekday: function (a) { var b = (this.day() + 7 - this.localeData()._week.dow) % 7; return null == a ? b : this.add(a - b, "d") }, isoWeekday: function (a) { return null == a ? this.day() || 7 : this.day(this.day() % 7 ? a : a - 7) }, isoWeeksInYear: function () { return E(this.year(), 1, 4) }, weeksInYear: function () { var a = this.localeData()._week; return E(this.year(), a.dow, a.doy) }, get: function (a) { return a = z(a), this[a]() }, set: function (a, b) { var c; if ("object" == typeof a) for (c in a) this.set(c, a[c]); else a = z(a), "function" == typeof this[a] && this[a](b); return this }, locale: function (b) { var c; return b === a ? this._locale._abbr : (c = vb.localeData(b), null != c && (this._locale = c), this) }, lang: f("moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.", function (b) { return b === a ? this.localeData() : this.locale(b) }), localeData: function () { return this._locale }, _dateUtcOffset: function () { return 15 * -Math.round(this._d.getTimezoneOffset() / 15) } }), vb.fn.millisecond = vb.fn.milliseconds = qb("Milliseconds", !1), vb.fn.second = vb.fn.seconds = qb("Seconds", !1), vb.fn.minute = vb.fn.minutes = qb("Minutes", !1), vb.fn.hour = vb.fn.hours = qb("Hours", !0), vb.fn.date = qb("Date", !0), vb.fn.dates = f("dates accessor is deprecated. Use date instead.", qb("Date", !0)), vb.fn.year = qb("FullYear", !0), vb.fn.years = f("years accessor is deprecated. Use year instead.", qb("FullYear", !0)), vb.fn.days = vb.fn.day, vb.fn.months = vb.fn.month, vb.fn.weeks = vb.fn.week, vb.fn.isoWeeks = vb.fn.isoWeek, vb.fn.quarters = vb.fn.quarter, vb.fn.toJSON = vb.fn.toISOString, vb.fn.isUTC = vb.fn.isUtc, o(vb.duration.fn = n.prototype, {
        _bubble: function () { var a, b, c, d = this._milliseconds, e = this._days, f = this._months, g = this._data, h = 0; g.milliseconds = d % 1e3, a = q(d / 1e3), g.seconds = a % 60, b = q(a / 60), g.minutes = b % 60, c = q(b / 60), g.hours = c % 24, e += q(c / 24), h = q(rb(e)), e -= q(sb(h)), f += q(e / 30), e %= 30, h += q(f / 12), f %= 12, g.days = e, g.months = f, g.years = h }, abs: function () { return this._milliseconds = Math.abs(this._milliseconds), this._days = Math.abs(this._days), this._months = Math.abs(this._months), this._data.milliseconds = Math.abs(this._data.milliseconds), this._data.seconds = Math.abs(this._data.seconds), this._data.minutes = Math.abs(this._data.minutes), this._data.hours = Math.abs(this._data.hours), this._data.months = Math.abs(this._data.months), this._data.years = Math.abs(this._data.years), this }, weeks: function () { return q(this.days() / 7) }, valueOf: function () {
            return this._milliseconds + 864e5 * this._days + this._months % 12 * 2592e6 + 31536e6 * C(this._months / 12)
        }, humanize: function (a) { var b = ib(this, !a, this.localeData()); return a && (b = this.localeData().pastFuture(+this, b)), this.localeData().postformat(b) }, add: function (a, b) { var c = vb.duration(a, b); return this._milliseconds += c._milliseconds, this._days += c._days, this._months += c._months, this._bubble(), this }, subtract: function (a, b) { var c = vb.duration(a, b); return this._milliseconds -= c._milliseconds, this._days -= c._days, this._months -= c._months, this._bubble(), this }, get: function (a) { return a = z(a), this[a.toLowerCase() + "s"]() }, as: function (a) { var b, c; if (a = z(a), "month" === a || "year" === a) return b = this._days + this._milliseconds / 864e5, c = this._months + 12 * rb(b), "month" === a ? c : c / 12; switch (b = this._days + Math.round(sb(this._months / 12)), a) { case "week": return b / 7 + this._milliseconds / 6048e5; case "day": return b + this._milliseconds / 864e5; case "hour": return 24 * b + this._milliseconds / 36e5; case "minute": return 24 * b * 60 + this._milliseconds / 6e4; case "second": return 24 * b * 60 * 60 + this._milliseconds / 1e3; case "millisecond": return Math.floor(24 * b * 60 * 60 * 1e3) + this._milliseconds; default: throw new Error("Unknown unit " + a) } }, lang: vb.fn.lang, locale: vb.fn.locale, toIsoString: f("toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)", function () { return this.toISOString() }), toISOString: function () { var a = Math.abs(this.years()), b = Math.abs(this.months()), c = Math.abs(this.days()), d = Math.abs(this.hours()), e = Math.abs(this.minutes()), f = Math.abs(this.seconds() + this.milliseconds() / 1e3); return this.asSeconds() ? (this.asSeconds() < 0 ? "-" : "") + "P" + (a ? a + "Y" : "") + (b ? b + "M" : "") + (c ? c + "D" : "") + (d || e || f ? "T" : "") + (d ? d + "H" : "") + (e ? e + "M" : "") + (f ? f + "S" : "") : "P0D" }, localeData: function () { return this._locale }, toJSON: function () { return this.toISOString() }
    }), vb.duration.fn.toString = vb.duration.fn.toISOString; for (xb in kc) c(kc, xb) && tb(xb.toLowerCase()); vb.duration.fn.asMilliseconds = function () { return this.as("ms") }, vb.duration.fn.asSeconds = function () { return this.as("s") }, vb.duration.fn.asMinutes = function () { return this.as("m") }, vb.duration.fn.asHours = function () { return this.as("h") }, vb.duration.fn.asDays = function () { return this.as("d") }, vb.duration.fn.asWeeks = function () { return this.as("weeks") }, vb.duration.fn.asMonths = function () { return this.as("M") }, vb.duration.fn.asYears = function () { return this.as("y") }, vb.locale("en", { ordinalParse: /\d{1,2}(th|st|nd|rd)/, ordinal: function (a) { var b = a % 10, c = 1 === C(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c } }), function (a) { a(vb) }(function (a) { return a.defineLocale("af", { months: "Januarie_Februarie_Maart_April_Mei_Junie_Julie_Augustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Aug_Sep_Okt_Nov_Des".split("_"), weekdays: "Sondag_Maandag_Dinsdag_Woensdag_Donderdag_Vrydag_Saterdag".split("_"), weekdaysShort: "Son_Maa_Din_Woe_Don_Vry_Sat".split("_"), weekdaysMin: "So_Ma_Di_Wo_Do_Vr_Sa".split("_"), meridiemParse: /vm|nm/i, isPM: function (a) { return /^nm$/i.test(a) }, meridiem: function (a, b, c) { return 12 > a ? c ? "vm" : "VM" : c ? "nm" : "NM" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Vandag om] LT", nextDay: "[Môre om] LT", nextWeek: "dddd [om] LT", lastDay: "[Gister om] LT", lastWeek: "[Laas] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oor %s", past: "%s gelede", s: "'n paar sekondes", m: "'n minuut", mm: "%d minute", h: "'n uur", hh: "%d ure", d: "'n dag", dd: "%d dae", M: "'n maand", MM: "%d maande", y: "'n jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ar-ma", { months: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_ماي_يونيو_يوليوز_غشت_شتنبر_أكتوبر_نونبر_دجنبر".split("_"), weekdays: "الأحد_الإتنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "احد_اتنين_ثلاثاء_اربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, c = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }; return a.defineLocale("ar-sa", { months: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "يناير_فبراير_مارس_أبريل_مايو_يونيو_يوليو_أغسطس_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function (a) { return "م" === a }, meridiem: function (a) { return 12 > a ? "ص" : "م" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, preparse: function (a) { return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) { return c[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ar-tn", { months: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), monthsShort: "جانفي_فيفري_مارس_أفريل_ماي_جوان_جويلية_أوت_سبتمبر_أكتوبر_نوفمبر_ديسمبر".split("_"), weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[اليوم على الساعة] LT", nextDay: "[غدا على الساعة] LT", nextWeek: "dddd [على الساعة] LT", lastDay: "[أمس على الساعة] LT", lastWeek: "dddd [على الساعة] LT", sameElse: "L" }, relativeTime: { future: "في %s", past: "منذ %s", s: "ثوان", m: "دقيقة", mm: "%d دقائق", h: "ساعة", hh: "%d ساعات", d: "يوم", dd: "%d أيام", M: "شهر", MM: "%d أشهر", y: "سنة", yy: "%d سنوات" }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "١", 2: "٢", 3: "٣", 4: "٤", 5: "٥", 6: "٦", 7: "٧", 8: "٨", 9: "٩", 0: "٠" }, c = { "١": "1", "٢": "2", "٣": "3", "٤": "4", "٥": "5", "٦": "6", "٧": "7", "٨": "8", "٩": "9", "٠": "0" }, d = function (a) { return 0 === a ? 0 : 1 === a ? 1 : 2 === a ? 2 : a % 100 >= 3 && 10 >= a % 100 ? 3 : a % 100 >= 11 ? 4 : 5 }, e = { s: ["أقل من ثانية", "ثانية واحدة", ["ثانيتان", "ثانيتين"], "%d ثوان", "%d ثانية", "%d ثانية"], m: ["أقل من دقيقة", "دقيقة واحدة", ["دقيقتان", "دقيقتين"], "%d دقائق", "%d دقيقة", "%d دقيقة"], h: ["أقل من ساعة", "ساعة واحدة", ["ساعتان", "ساعتين"], "%d ساعات", "%d ساعة", "%d ساعة"], d: ["أقل من يوم", "يوم واحد", ["يومان", "يومين"], "%d أيام", "%d يومًا", "%d يوم"], M: ["أقل من شهر", "شهر واحد", ["شهران", "شهرين"], "%d أشهر", "%d شهرا", "%d شهر"], y: ["أقل من عام", "عام واحد", ["عامان", "عامين"], "%d أعوام", "%d عامًا", "%d عام"] }, f = function (a) { return function (b, c) { var f = d(b), g = e[a][d(b)]; return 2 === f && (g = g[c ? 0 : 1]), g.replace(/%d/i, b) } }, g = ["كانون الثاني يناير", "شباط فبراير", "آذار مارس", "نيسان أبريل", "أيار مايو", "حزيران يونيو", "تموز يوليو", "آب أغسطس", "أيلول سبتمبر", "تشرين الأول أكتوبر", "تشرين الثاني نوفمبر", "كانون الأول ديسمبر"]; return a.defineLocale("ar", { months: g, monthsShort: g, weekdays: "الأحد_الإثنين_الثلاثاء_الأربعاء_الخميس_الجمعة_السبت".split("_"), weekdaysShort: "أحد_إثنين_ثلاثاء_أربعاء_خميس_جمعة_سبت".split("_"), weekdaysMin: "ح_ن_ث_ر_خ_ج_س".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, meridiemParse: /ص|م/, isPM: function (a) { return "م" === a }, meridiem: function (a) { return 12 > a ? "ص" : "م" }, calendar: { sameDay: "[اليوم عند الساعة] LT", nextDay: "[غدًا عند الساعة] LT", nextWeek: "dddd [عند الساعة] LT", lastDay: "[أمس عند الساعة] LT", lastWeek: "dddd [عند الساعة] LT", sameElse: "L" }, relativeTime: { future: "بعد %s", past: "منذ %s", s: f("s"), m: f("m"), mm: f("m"), h: f("h"), hh: f("h"), d: f("d"), dd: f("d"), M: f("M"), MM: f("M"), y: f("y"), yy: f("y") }, preparse: function (a) { return a.replace(/[١٢٣٤٥٦٧٨٩٠]/g, function (a) { return c[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }).replace(/,/g, "،") }, week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "-inci", 5: "-inci", 8: "-inci", 70: "-inci", 80: "-inci", 2: "-nci", 7: "-nci", 20: "-nci", 50: "-nci", 3: "-üncü", 4: "-üncü", 100: "-üncü", 6: "-ncı", 9: "-uncu", 10: "-uncu", 30: "-uncu", 60: "-ıncı", 90: "-ıncı" }; return a.defineLocale("az", { months: "yanvar_fevral_mart_aprel_may_iyun_iyul_avqust_sentyabr_oktyabr_noyabr_dekabr".split("_"), monthsShort: "yan_fev_mar_apr_may_iyn_iyl_avq_sen_okt_noy_dek".split("_"), weekdays: "Bazar_Bazar ertəsi_Çərşənbə axşamı_Çərşənbə_Cümə axşamı_Cümə_Şənbə".split("_"), weekdaysShort: "Baz_BzE_ÇAx_Çər_CAx_Cüm_Şən".split("_"), weekdaysMin: "Bz_BE_ÇA_Çə_CA_Cü_Şə".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[sabah saat] LT", nextWeek: "[gələn həftə] dddd [saat] LT", lastDay: "[dünən] LT", lastWeek: "[keçən həftə] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s əvvəl", s: "birneçə saniyyə", m: "bir dəqiqə", mm: "%d dəqiqə", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir il", yy: "%d il" }, meridiemParse: /gecə|səhər|gündüz|axşam/, isPM: function (a) { return /^(gündüz|axşam)$/.test(a) }, meridiem: function (a) { return 4 > a ? "gecə" : 12 > a ? "səhər" : 17 > a ? "gündüz" : "axşam" }, ordinalParse: /\d{1,2}-(ıncı|inci|nci|üncü|ncı|uncu)/, ordinal: function (a) { if (0 === a) return a + "-ıncı"; var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null; return a + (b[c] || b[d] || b[e]) }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] } function c(a, c, d) { var e = { mm: c ? "хвіліна_хвіліны_хвілін" : "хвіліну_хвіліны_хвілін", hh: c ? "гадзіна_гадзіны_гадзін" : "гадзіну_гадзіны_гадзін", dd: "дзень_дні_дзён", MM: "месяц_месяцы_месяцаў", yy: "год_гады_гадоў" }; return "m" === d ? c ? "хвіліна" : "хвіліну" : "h" === d ? c ? "гадзіна" : "гадзіну" : a + " " + b(e[d], +a) } function d(a, b) { var c = { nominative: "студзень_люты_сакавік_красавік_травень_чэрвень_ліпень_жнівень_верасень_кастрычнік_лістапад_снежань".split("_"), accusative: "студзеня_лютага_сакавіка_красавіка_траўня_чэрвеня_ліпеня_жніўня_верасня_кастрычніка_лістапада_снежня".split("_") }, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function e(a, b) { var c = { nominative: "нядзеля_панядзелак_аўторак_серада_чацвер_пятніца_субота".split("_"), accusative: "нядзелю_панядзелак_аўторак_сераду_чацвер_пятніцу_суботу".split("_") }, d = /\[ ?[Вв] ?(?:мінулую|наступную)? ?\] ?dddd/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("be", { months: d, monthsShort: "студ_лют_сак_крас_трав_чэрв_ліп_жнів_вер_каст_ліст_снеж".split("_"), weekdays: e, weekdaysShort: "нд_пн_ат_ср_чц_пт_сб".split("_"), weekdaysMin: "нд_пн_ат_ср_чц_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сёння ў] LT", nextDay: "[Заўтра ў] LT", lastDay: "[Учора ў] LT", nextWeek: function () { return "[У] dddd [ў] LT" }, lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return "[У мінулую] dddd [ў] LT"; case 1: case 2: case 4: return "[У мінулы] dddd [ў] LT" } }, sameElse: "L" }, relativeTime: { future: "праз %s", past: "%s таму", s: "некалькі секунд", m: c, mm: c, h: c, hh: c, d: "дзень", dd: c, M: "месяц", MM: c, y: "год", yy: c }, meridiemParse: /ночы|раніцы|дня|вечара/, isPM: function (a) { return /^(дня|вечара)$/.test(a) }, meridiem: function (a) { return 4 > a ? "ночы" : 12 > a ? "раніцы" : 17 > a ? "дня" : "вечара" }, ordinalParse: /\d{1,2}-(і|ы|га)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": case "w": case "W": return a % 10 !== 2 && a % 10 !== 3 || a % 100 === 12 || a % 100 === 13 ? a + "-ы" : a + "-і"; case "D": return a + "-га"; default: return a } }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("bg", { months: "януари_февруари_март_април_май_юни_юли_август_септември_октомври_ноември_декември".split("_"), monthsShort: "янр_фев_мар_апр_май_юни_юли_авг_сеп_окт_ное_дек".split("_"), weekdays: "неделя_понеделник_вторник_сряда_четвъртък_петък_събота".split("_"), weekdaysShort: "нед_пон_вто_сря_чет_пет_съб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Днес в] LT", nextDay: "[Утре в] LT", nextWeek: "dddd [в] LT", lastDay: "[Вчера в] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[В изминалата] dddd [в] LT"; case 1: case 2: case 4: case 5: return "[В изминалия] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "след %s", past: "преди %s", s: "няколко секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дни", M: "месец", MM: "%d месеца", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function (a) { var b = a % 10, c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "১", 2: "২", 3: "৩", 4: "৪", 5: "৫", 6: "৬", 7: "৭", 8: "৮", 9: "৯", 0: "০" }, c = { "১": "1", "২": "2", "৩": "3", "৪": "4", "৫": "5", "৬": "6", "৭": "7", "৮": "8", "৯": "9", "০": "0" }; return a.defineLocale("bn", { months: "জানুয়ারী_ফেবুয়ারী_মার্চ_এপ্রিল_মে_জুন_জুলাই_অগাস্ট_সেপ্টেম্বর_অক্টোবর_নভেম্বর_ডিসেম্বর".split("_"), monthsShort: "জানু_ফেব_মার্চ_এপর_মে_জুন_জুল_অগ_সেপ্ট_অক্টো_নভ_ডিসেম্".split("_"), weekdays: "রবিবার_সোমবার_মঙ্গলবার_বুধবার_বৃহস্পত্তিবার_শুক্রুবার_শনিবার".split("_"), weekdaysShort: "রবি_সোম_মঙ্গল_বুধ_বৃহস্পত্তি_শুক্রু_শনি".split("_"), weekdaysMin: "রব_সম_মঙ্গ_বু_ব্রিহ_শু_শনি".split("_"), longDateFormat: { LT: "A h:mm সময়", LTS: "A h:mm:ss সময়", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[আজ] LT", nextDay: "[আগামীকাল] LT", nextWeek: "dddd, LT", lastDay: "[গতকাল] LT", lastWeek: "[গত] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s পরে", past: "%s আগে", s: "কএক সেকেন্ড", m: "এক মিনিট", mm: "%d মিনিট", h: "এক ঘন্টা", hh: "%d ঘন্টা", d: "এক দিন", dd: "%d দিন", M: "এক মাস", MM: "%d মাস", y: "এক বছর", yy: "%d বছর" }, preparse: function (a) { return a.replace(/[১২৩৪৫৬৭৮৯০]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, meridiemParse: /রাত|শকাল|দুপুর|বিকেল|রাত/, isPM: function (a) { return /^(দুপুর|বিকেল|রাত)$/.test(a) }, meridiem: function (a) { return 4 > a ? "রাত" : 10 > a ? "শকাল" : 17 > a ? "দুপুর" : 20 > a ? "বিকেল" : "রাত" }, week: { dow: 0, doy: 6 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "༡", 2: "༢", 3: "༣", 4: "༤", 5: "༥", 6: "༦", 7: "༧", 8: "༨", 9: "༩", 0: "༠" }, c = { "༡": "1", "༢": "2", "༣": "3", "༤": "4", "༥": "5", "༦": "6", "༧": "7", "༨": "8", "༩": "9", "༠": "0" }; return a.defineLocale("bo", { months: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), monthsShort: "ཟླ་བ་དང་པོ_ཟླ་བ་གཉིས་པ_ཟླ་བ་གསུམ་པ_ཟླ་བ་བཞི་པ_ཟླ་བ་ལྔ་པ_ཟླ་བ་དྲུག་པ_ཟླ་བ་བདུན་པ_ཟླ་བ་བརྒྱད་པ_ཟླ་བ་དགུ་པ_ཟླ་བ་བཅུ་པ_ཟླ་བ་བཅུ་གཅིག་པ_ཟླ་བ་བཅུ་གཉིས་པ".split("_"), weekdays: "གཟའ་ཉི་མ་_གཟའ་ཟླ་བ་_གཟའ་མིག་དམར་_གཟའ་ལྷག་པ་_གཟའ་ཕུར་བུ_གཟའ་པ་སངས་_གཟའ་སྤེན་པ་".split("_"), weekdaysShort: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), weekdaysMin: "ཉི་མ་_ཟླ་བ་_མིག་དམར་_ལྷག་པ་_ཕུར་བུ_པ་སངས་_སྤེན་པ་".split("_"), longDateFormat: { LT: "A h:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[དི་རིང] LT", nextDay: "[སང་ཉིན] LT", nextWeek: "[བདུན་ཕྲག་རྗེས་མ], LT", lastDay: "[ཁ་སང] LT", lastWeek: "[བདུན་ཕྲག་མཐའ་མ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s ལ་", past: "%s སྔན་ལ", s: "ལམ་སང", m: "སྐར་མ་གཅིག", mm: "%d སྐར་མ", h: "ཆུ་ཚོད་གཅིག", hh: "%d ཆུ་ཚོད", d: "ཉིན་གཅིག", dd: "%d ཉིན་", M: "ཟླ་བ་གཅིག", MM: "%d ཟླ་བ", y: "ལོ་གཅིག", yy: "%d ལོ" }, preparse: function (a) { return a.replace(/[༡༢༣༤༥༦༧༨༩༠]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, meridiemParse: /མཚན་མོ|ཞོགས་ཀས|ཉིན་གུང|དགོང་དག|མཚན་མོ/, isPM: function (a) { return /^(ཉིན་གུང|དགོང་དག|མཚན་མོ)$/.test(a) }, meridiem: function (a) { return 4 > a ? "མཚན་མོ" : 10 > a ? "ཞོགས་ཀས" : 17 > a ? "ཉིན་གུང" : 20 > a ? "དགོང་དག" : "མཚན་མོ" }, week: { dow: 0, doy: 6 } }) }), function (a) { a(vb) }(function (b) { function c(a, b, c) { var d = { mm: "munutenn", MM: "miz", dd: "devezh" }; return a + " " + f(d[c], a) } function d(a) { switch (e(a)) { case 1: case 3: case 4: case 5: case 9: return a + " bloaz"; default: return a + " vloaz" } } function e(a) { return a > 9 ? e(a % 10) : a } function f(a, b) { return 2 === b ? g(a) : a } function g(b) { var c = { m: "v", b: "v", d: "z" }; return c[b.charAt(0)] === a ? b : c[b.charAt(0)] + b.substring(1) } return b.defineLocale("br", { months: "Genver_C'hwevrer_Meurzh_Ebrel_Mae_Mezheven_Gouere_Eost_Gwengolo_Here_Du_Kerzu".split("_"), monthsShort: "Gen_C'hwe_Meu_Ebr_Mae_Eve_Gou_Eos_Gwe_Her_Du_Ker".split("_"), weekdays: "Sul_Lun_Meurzh_Merc'her_Yaou_Gwener_Sadorn".split("_"), weekdaysShort: "Sul_Lun_Meu_Mer_Yao_Gwe_Sad".split("_"), weekdaysMin: "Su_Lu_Me_Mer_Ya_Gw_Sa".split("_"), longDateFormat: { LT: "h[e]mm A", LTS: "h[e]mm:ss A", L: "DD/MM/YYYY", LL: "D [a viz] MMMM YYYY", LLL: "D [a viz] MMMM YYYY LT", LLLL: "dddd, D [a viz] MMMM YYYY LT" }, calendar: { sameDay: "[Hiziv da] LT", nextDay: "[Warc'hoazh da] LT", nextWeek: "dddd [da] LT", lastDay: "[Dec'h da] LT", lastWeek: "dddd [paset da] LT", sameElse: "L" }, relativeTime: { future: "a-benn %s", past: "%s 'zo", s: "un nebeud segondennoù", m: "ur vunutenn", mm: c, h: "un eur", hh: "%d eur", d: "un devezh", dd: c, M: "ur miz", MM: c, y: "ur bloaz", yy: d }, ordinalParse: /\d{1,2}(añ|vet)/, ordinal: function (a) { var b = 1 === a ? "añ" : "vet"; return a + b }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "jedna minuta" : "jedne minute"; case "mm": return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta"; case "h": return b ? "jedan sat" : "jednog sata"; case "hh": return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati"; case "dd": return d += 1 === a ? "dan" : "dana"; case "MM": return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci"; case "yy": return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } return a.defineLocale("bs", { months: "januar_februar_mart_april_maj_juni_juli_august_septembar_oktobar_novembar_decembar".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._aug._sep._okt._nov._dec.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[prošlu] dddd [u] LT"; case 6: return "[prošle] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ca", { months: "gener_febrer_març_abril_maig_juny_juliol_agost_setembre_octubre_novembre_desembre".split("_"), monthsShort: "gen._febr._mar._abr._mai._jun._jul._ag._set._oct._nov._des.".split("_"), weekdays: "diumenge_dilluns_dimarts_dimecres_dijous_divendres_dissabte".split("_"), weekdaysShort: "dg._dl._dt._dc._dj._dv._ds.".split("_"), weekdaysMin: "Dg_Dl_Dt_Dc_Dj_Dv_Ds".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function () { return "[avui a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextDay: function () { return "[demà a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, nextWeek: function () { return "dddd [a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastDay: function () { return "[ahir a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, lastWeek: function () { return "[el] dddd [passat a " + (1 !== this.hours() ? "les" : "la") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "fa %s", s: "uns segons", m: "un minut", mm: "%d minuts", h: "una hora", hh: "%d hores", d: "un dia", dd: "%d dies", M: "un mes", MM: "%d mesos", y: "un any", yy: "%d anys" }, ordinalParse: /\d{1,2}(r|n|t|è|a)/, ordinal: function (a, b) { var c = 1 === a ? "r" : 2 === a ? "n" : 3 === a ? "r" : 4 === a ? "t" : "è"; return ("w" === b || "W" === b) && (c = "a"), a + c }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a) { return a > 1 && 5 > a && 1 !== ~~(a / 10) } function c(a, c, d, e) { var f = a + " "; switch (d) { case "s": return c || e ? "pár sekund" : "pár sekundami"; case "m": return c ? "minuta" : e ? "minutu" : "minutou"; case "mm": return c || e ? f + (b(a) ? "minuty" : "minut") : f + "minutami"; break; case "h": return c ? "hodina" : e ? "hodinu" : "hodinou"; case "hh": return c || e ? f + (b(a) ? "hodiny" : "hodin") : f + "hodinami"; break; case "d": return c || e ? "den" : "dnem"; case "dd": return c || e ? f + (b(a) ? "dny" : "dní") : f + "dny"; break; case "M": return c || e ? "měsíc" : "měsícem"; case "MM": return c || e ? f + (b(a) ? "měsíce" : "měsíců") : f + "měsíci"; break; case "y": return c || e ? "rok" : "rokem"; case "yy": return c || e ? f + (b(a) ? "roky" : "let") : f + "lety" } } var d = "leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"), e = "led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_"); return a.defineLocale("cs", { months: d, monthsShort: e, monthsParse: function (a, b) { var c, d = []; for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i"); return d }(d, e), weekdays: "neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"), weekdaysShort: "ne_po_út_st_čt_pá_so".split("_"), weekdaysMin: "ne_po_út_st_čt_pá_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" }, calendar: { sameDay: "[dnes v] LT", nextDay: "[zítra v] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v neděli v] LT"; case 1: case 2: return "[v] dddd [v] LT"; case 3: return "[ve středu v] LT"; case 4: return "[ve čtvrtek v] LT"; case 5: return "[v pátek v] LT"; case 6: return "[v sobotu v] LT" } }, lastDay: "[včera v] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minulou neděli v] LT"; case 1: case 2: return "[minulé] dddd [v] LT"; case 3: return "[minulou středu v] LT"; case 4: case 5: return "[minulý] dddd [v] LT"; case 6: return "[minulou sobotu v] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "před %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("cv", { months: "кăрлач_нарăс_пуш_ака_май_çĕртме_утă_çурла_авăн_юпа_чӳк_раштав".split("_"), monthsShort: "кăр_нар_пуш_ака_май_çĕр_утă_çур_ав_юпа_чӳк_раш".split("_"), weekdays: "вырсарникун_тунтикун_ытларикун_юнкун_кĕçнерникун_эрнекун_шăматкун".split("_"), weekdaysShort: "выр_тун_ытл_юн_кĕç_эрн_шăм".split("_"), weekdaysMin: "вр_тн_ыт_юн_кç_эр_шм".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ]", LLL: "YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT", LLLL: "dddd, YYYY [çулхи] MMMM [уйăхĕн] D[-мĕшĕ], LT" }, calendar: { sameDay: "[Паян] LT [сехетре]", nextDay: "[Ыран] LT [сехетре]", lastDay: "[Ĕнер] LT [сехетре]", nextWeek: "[Çитес] dddd LT [сехетре]", lastWeek: "[Иртнĕ] dddd LT [сехетре]", sameElse: "L" }, relativeTime: { future: function (a) { var b = /сехет$/i.exec(a) ? "рен" : /çул$/i.exec(a) ? "тан" : "ран"; return a + b }, past: "%s каялла", s: "пĕр-ик çеккунт", m: "пĕр минут", mm: "%d минут", h: "пĕр сехет", hh: "%d сехет", d: "пĕр кун", dd: "%d кун", M: "пĕр уйăх", MM: "%d уйăх", y: "пĕр çул", yy: "%d çул" }, ordinalParse: /\d{1,2}-мĕш/, ordinal: "%d-мĕш", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("cy", { months: "Ionawr_Chwefror_Mawrth_Ebrill_Mai_Mehefin_Gorffennaf_Awst_Medi_Hydref_Tachwedd_Rhagfyr".split("_"), monthsShort: "Ion_Chwe_Maw_Ebr_Mai_Meh_Gor_Aws_Med_Hyd_Tach_Rhag".split("_"), weekdays: "Dydd Sul_Dydd Llun_Dydd Mawrth_Dydd Mercher_Dydd Iau_Dydd Gwener_Dydd Sadwrn".split("_"), weekdaysShort: "Sul_Llun_Maw_Mer_Iau_Gwe_Sad".split("_"), weekdaysMin: "Su_Ll_Ma_Me_Ia_Gw_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Heddiw am] LT", nextDay: "[Yfory am] LT", nextWeek: "dddd [am] LT", lastDay: "[Ddoe am] LT", lastWeek: "dddd [diwethaf am] LT", sameElse: "L" }, relativeTime: { future: "mewn %s", past: "%s yn ôl", s: "ychydig eiliadau", m: "munud", mm: "%d munud", h: "awr", hh: "%d awr", d: "diwrnod", dd: "%d diwrnod", M: "mis", MM: "%d mis", y: "blwyddyn", yy: "%d flynedd" }, ordinalParse: /\d{1,2}(fed|ain|af|il|ydd|ed|eg)/, ordinal: function (a) { var b = a, c = "", d = ["", "af", "il", "ydd", "ydd", "ed", "ed", "ed", "fed", "fed", "fed", "eg", "fed", "eg", "eg", "fed", "eg", "eg", "fed", "eg", "fed"]; return b > 20 ? c = 40 === b || 50 === b || 60 === b || 80 === b || 100 === b ? "fed" : "ain" : b > 0 && (c = d[b]), a + c }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("da", { months: "januar_februar_marts_april_maj_juni_juli_august_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tir_ons_tor_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd [d.] D. MMMM YYYY LT" }, calendar: { sameDay: "[I dag kl.] LT", nextDay: "[I morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[I går kl.] LT", lastWeek: "[sidste] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "%s siden", s: "få sekunder", m: "et minut", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dage", M: "en måned", MM: "%d måneder", y: "et år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? d[c][0] : d[c][1] } return a.defineLocale("de-at", { months: "Jänner_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jän._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = { m: ["eine Minute", "einer Minute"], h: ["eine Stunde", "einer Stunde"], d: ["ein Tag", "einem Tag"], dd: [a + " Tage", a + " Tagen"], M: ["ein Monat", "einem Monat"], MM: [a + " Monate", a + " Monaten"], y: ["ein Jahr", "einem Jahr"], yy: [a + " Jahre", a + " Jahren"] }; return b ? d[c][0] : d[c][1] } return a.defineLocale("de", { months: "Januar_Februar_März_April_Mai_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Apr._Mai_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonntag_Montag_Dienstag_Mittwoch_Donnerstag_Freitag_Samstag".split("_"), weekdaysShort: "So._Mo._Di._Mi._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mo_Di_Mi_Do_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Heute um] LT [Uhr]", sameElse: "L", nextDay: "[Morgen um] LT [Uhr]", nextWeek: "dddd [um] LT [Uhr]", lastDay: "[Gestern um] LT [Uhr]", lastWeek: "[letzten] dddd [um] LT [Uhr]" }, relativeTime: { future: "in %s", past: "vor %s", s: "ein paar Sekunden", m: b, mm: "%d Minuten", h: b, hh: "%d Stunden", d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("el", { monthsNominativeEl: "Ιανουάριος_Φεβρουάριος_Μάρτιος_Απρίλιος_Μάιος_Ιούνιος_Ιούλιος_Αύγουστος_Σεπτέμβριος_Οκτώβριος_Νοέμβριος_Δεκέμβριος".split("_"), monthsGenitiveEl: "Ιανουαρίου_Φεβρουαρίου_Μαρτίου_Απριλίου_Μαΐου_Ιουνίου_Ιουλίου_Αυγούστου_Σεπτεμβρίου_Οκτωβρίου_Νοεμβρίου_Δεκεμβρίου".split("_"), months: function (a, b) { return /D/.test(b.substring(0, b.indexOf("MMMM"))) ? this._monthsGenitiveEl[a.month()] : this._monthsNominativeEl[a.month()] }, monthsShort: "Ιαν_Φεβ_Μαρ_Απρ_Μαϊ_Ιουν_Ιουλ_Αυγ_Σεπ_Οκτ_Νοε_Δεκ".split("_"), weekdays: "Κυριακή_Δευτέρα_Τρίτη_Τετάρτη_Πέμπτη_Παρασκευή_Σάββατο".split("_"), weekdaysShort: "Κυρ_Δευ_Τρι_Τετ_Πεμ_Παρ_Σαβ".split("_"), weekdaysMin: "Κυ_Δε_Τρ_Τε_Πε_Πα_Σα".split("_"), meridiem: function (a, b, c) { return a > 11 ? c ? "μμ" : "ΜΜ" : c ? "πμ" : "ΠΜ" }, isPM: function (a) { return "μ" === (a + "").toLowerCase()[0] }, meridiemParse: /[ΠΜ]\.?Μ?\.?/i, longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendarEl: { sameDay: "[Σήμερα {}] LT", nextDay: "[Αύριο {}] LT", nextWeek: "dddd [{}] LT", lastDay: "[Χθες {}] LT", lastWeek: function () { switch (this.day()) { case 6: return "[το προηγούμενο] dddd [{}] LT"; default: return "[την προηγούμενη] dddd [{}] LT" } }, sameElse: "L" }, calendar: function (a, b) { var c = this._calendarEl[a], d = b && b.hours(); return "function" == typeof c && (c = c.apply(b)), c.replace("{}", d % 12 === 1 ? "στη" : "στις") }, relativeTime: { future: "σε %s", past: "%s πριν", s: "λίγα δευτερόλεπτα", m: "ένα λεπτό", mm: "%d λεπτά", h: "μία ώρα", hh: "%d ώρες", d: "μία μέρα", dd: "%d μέρες", M: "ένας μήνας", MM: "%d μήνες", y: "ένας χρόνος", yy: "%d χρόνια" }, ordinalParse: /\d{1,2}η/, ordinal: "%dη", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("en-au", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) {
        return a.defineLocale("en-ca", {
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "YYYY-MM-DD", LL: "D MMMM, YYYY", LLL: "D MMMM, YYYY LT", LLLL: "dddd, D MMMM, YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) {
                var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th";
                return a + c
            }
        })
    }), function (a) { a(vb) }(function (a) { return a.defineLocale("en-gb", { months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_"), monthsShort: "Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"), weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"), weekdaysShort: "Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"), weekdaysMin: "Su_Mo_Tu_We_Th_Fr_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Today at] LT", nextDay: "[Tomorrow at] LT", nextWeek: "dddd [at] LT", lastDay: "[Yesterday at] LT", lastWeek: "[Last] dddd [at] LT", sameElse: "L" }, relativeTime: { future: "in %s", past: "%s ago", s: "a few seconds", m: "a minute", mm: "%d minutes", h: "an hour", hh: "%d hours", d: "a day", dd: "%d days", M: "a month", MM: "%d months", y: "a year", yy: "%d years" }, ordinalParse: /\d{1,2}(st|nd|rd|th)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "th" : 1 === b ? "st" : 2 === b ? "nd" : 3 === b ? "rd" : "th"; return a + c }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("eo", { months: "januaro_februaro_marto_aprilo_majo_junio_julio_aŭgusto_septembro_oktobro_novembro_decembro".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aŭg_sep_okt_nov_dec".split("_"), weekdays: "Dimanĉo_Lundo_Mardo_Merkredo_Ĵaŭdo_Vendredo_Sabato".split("_"), weekdaysShort: "Dim_Lun_Mard_Merk_Ĵaŭ_Ven_Sab".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Ĵa_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D[-an de] MMMM, YYYY", LLL: "D[-an de] MMMM, YYYY LT", LLLL: "dddd, [la] D[-an de] MMMM, YYYY LT" }, meridiemParse: /[ap]\.t\.m/i, isPM: function (a) { return "p" === a.charAt(0).toLowerCase() }, meridiem: function (a, b, c) { return a > 11 ? c ? "p.t.m." : "P.T.M." : c ? "a.t.m." : "A.T.M." }, calendar: { sameDay: "[Hodiaŭ je] LT", nextDay: "[Morgaŭ je] LT", nextWeek: "dddd [je] LT", lastDay: "[Hieraŭ je] LT", lastWeek: "[pasinta] dddd [je] LT", sameElse: "L" }, relativeTime: { future: "je %s", past: "antaŭ %s", s: "sekundoj", m: "minuto", mm: "%d minutoj", h: "horo", hh: "%d horoj", d: "tago", dd: "%d tagoj", M: "monato", MM: "%d monatoj", y: "jaro", yy: "%d jaroj" }, ordinalParse: /\d{1,2}a/, ordinal: "%da", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = "ene._feb._mar._abr._may._jun._jul._ago._sep._oct._nov._dic.".split("_"), c = "ene_feb_mar_abr_may_jun_jul_ago_sep_oct_nov_dic".split("_"); return a.defineLocale("es", { months: "enero_febrero_marzo_abril_mayo_junio_julio_agosto_septiembre_octubre_noviembre_diciembre".split("_"), monthsShort: function (a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "domingo_lunes_martes_miércoles_jueves_viernes_sábado".split("_"), weekdaysShort: "dom._lun._mar._mié._jue._vie._sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mi_Ju_Vi_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: function () { return "[hoy a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextDay: function () { return "[mañana a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, nextWeek: function () { return "dddd [a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastDay: function () { return "[ayer a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, lastWeek: function () { return "[el] dddd [pasado a la" + (1 !== this.hours() ? "s" : "") + "] LT" }, sameElse: "L" }, relativeTime: { future: "en %s", past: "hace %s", s: "unos segundos", m: "un minuto", mm: "%d minutos", h: "una hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un año", yy: "%d años" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c, d) { var e = { s: ["mõne sekundi", "mõni sekund", "paar sekundit"], m: ["ühe minuti", "üks minut"], mm: [a + " minuti", a + " minutit"], h: ["ühe tunni", "tund aega", "üks tund"], hh: [a + " tunni", a + " tundi"], d: ["ühe päeva", "üks päev"], M: ["kuu aja", "kuu aega", "üks kuu"], MM: [a + " kuu", a + " kuud"], y: ["ühe aasta", "aasta", "üks aasta"], yy: [a + " aasta", a + " aastat"] }; return b ? e[c][2] ? e[c][2] : e[c][1] : d ? e[c][0] : e[c][1] } return a.defineLocale("et", { months: "jaanuar_veebruar_märts_aprill_mai_juuni_juuli_august_september_oktoober_november_detsember".split("_"), monthsShort: "jaan_veebr_märts_apr_mai_juuni_juuli_aug_sept_okt_nov_dets".split("_"), weekdays: "pühapäev_esmaspäev_teisipäev_kolmapäev_neljapäev_reede_laupäev".split("_"), weekdaysShort: "P_E_T_K_N_R_L".split("_"), weekdaysMin: "P_E_T_K_N_R_L".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Täna,] LT", nextDay: "[Homme,] LT", nextWeek: "[Järgmine] dddd LT", lastDay: "[Eile,] LT", lastWeek: "[Eelmine] dddd LT", sameElse: "L" }, relativeTime: { future: "%s pärast", past: "%s tagasi", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: "%d päeva", M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("eu", { months: "urtarrila_otsaila_martxoa_apirila_maiatza_ekaina_uztaila_abuztua_iraila_urria_azaroa_abendua".split("_"), monthsShort: "urt._ots._mar._api._mai._eka._uzt._abu._ira._urr._aza._abe.".split("_"), weekdays: "igandea_astelehena_asteartea_asteazkena_osteguna_ostirala_larunbata".split("_"), weekdaysShort: "ig._al._ar._az._og._ol._lr.".split("_"), weekdaysMin: "ig_al_ar_az_og_ol_lr".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY[ko] MMMM[ren] D[a]", LLL: "YYYY[ko] MMMM[ren] D[a] LT", LLLL: "dddd, YYYY[ko] MMMM[ren] D[a] LT", l: "YYYY-M-D", ll: "YYYY[ko] MMM D[a]", lll: "YYYY[ko] MMM D[a] LT", llll: "ddd, YYYY[ko] MMM D[a] LT" }, calendar: { sameDay: "[gaur] LT[etan]", nextDay: "[bihar] LT[etan]", nextWeek: "dddd LT[etan]", lastDay: "[atzo] LT[etan]", lastWeek: "[aurreko] dddd LT[etan]", sameElse: "L" }, relativeTime: { future: "%s barru", past: "duela %s", s: "segundo batzuk", m: "minutu bat", mm: "%d minutu", h: "ordu bat", hh: "%d ordu", d: "egun bat", dd: "%d egun", M: "hilabete bat", MM: "%d hilabete", y: "urte bat", yy: "%d urte" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "۱", 2: "۲", 3: "۳", 4: "۴", 5: "۵", 6: "۶", 7: "۷", 8: "۸", 9: "۹", 0: "۰" }, c = { "۱": "1", "۲": "2", "۳": "3", "۴": "4", "۵": "5", "۶": "6", "۷": "7", "۸": "8", "۹": "9", "۰": "0" }; return a.defineLocale("fa", { months: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), monthsShort: "ژانویه_فوریه_مارس_آوریل_مه_ژوئن_ژوئیه_اوت_سپتامبر_اکتبر_نوامبر_دسامبر".split("_"), weekdays: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysShort: "یک‌شنبه_دوشنبه_سه‌شنبه_چهارشنبه_پنج‌شنبه_جمعه_شنبه".split("_"), weekdaysMin: "ی_د_س_چ_پ_ج_ش".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, meridiemParse: /قبل از ظهر|بعد از ظهر/, isPM: function (a) { return /بعد از ظهر/.test(a) }, meridiem: function (a) { return 12 > a ? "قبل از ظهر" : "بعد از ظهر" }, calendar: { sameDay: "[امروز ساعت] LT", nextDay: "[فردا ساعت] LT", nextWeek: "dddd [ساعت] LT", lastDay: "[دیروز ساعت] LT", lastWeek: "dddd [پیش] [ساعت] LT", sameElse: "L" }, relativeTime: { future: "در %s", past: "%s پیش", s: "چندین ثانیه", m: "یک دقیقه", mm: "%d دقیقه", h: "یک ساعت", hh: "%d ساعت", d: "یک روز", dd: "%d روز", M: "یک ماه", MM: "%d ماه", y: "یک سال", yy: "%d سال" }, preparse: function (a) { return a.replace(/[۰-۹]/g, function (a) { return c[a] }).replace(/،/g, ",") }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }).replace(/,/g, "،") }, ordinalParse: /\d{1,2}م/, ordinal: "%dم", week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, d, e) { var f = ""; switch (d) { case "s": return e ? "muutaman sekunnin" : "muutama sekunti"; case "m": return e ? "minuutin" : "minuutti"; case "mm": f = e ? "minuutin" : "minuuttia"; break; case "h": return e ? "tunnin" : "tunti"; case "hh": f = e ? "tunnin" : "tuntia"; break; case "d": return e ? "päivän" : "päivä"; case "dd": f = e ? "päivän" : "päivää"; break; case "M": return e ? "kuukauden" : "kuukausi"; case "MM": f = e ? "kuukauden" : "kuukautta"; break; case "y": return e ? "vuoden" : "vuosi"; case "yy": f = e ? "vuoden" : "vuotta" } return f = c(a, e) + " " + f } function c(a, b) { return 10 > a ? b ? e[a] : d[a] : a } var d = "nolla yksi kaksi kolme neljä viisi kuusi seitsemän kahdeksan yhdeksän".split(" "), e = ["nolla", "yhden", "kahden", "kolmen", "neljän", "viiden", "kuuden", d[7], d[8], d[9]]; return a.defineLocale("fi", { months: "tammikuu_helmikuu_maaliskuu_huhtikuu_toukokuu_kesäkuu_heinäkuu_elokuu_syyskuu_lokakuu_marraskuu_joulukuu".split("_"), monthsShort: "tammi_helmi_maalis_huhti_touko_kesä_heinä_elo_syys_loka_marras_joulu".split("_"), weekdays: "sunnuntai_maanantai_tiistai_keskiviikko_torstai_perjantai_lauantai".split("_"), weekdaysShort: "su_ma_ti_ke_to_pe_la".split("_"), weekdaysMin: "su_ma_ti_ke_to_pe_la".split("_"), longDateFormat: { LT: "HH.mm", LTS: "HH.mm.ss", L: "DD.MM.YYYY", LL: "Do MMMM[ta] YYYY", LLL: "Do MMMM[ta] YYYY, [klo] LT", LLLL: "dddd, Do MMMM[ta] YYYY, [klo] LT", l: "D.M.YYYY", ll: "Do MMM YYYY", lll: "Do MMM YYYY, [klo] LT", llll: "ddd, Do MMM YYYY, [klo] LT" }, calendar: { sameDay: "[tänään] [klo] LT", nextDay: "[huomenna] [klo] LT", nextWeek: "dddd [klo] LT", lastDay: "[eilen] [klo] LT", lastWeek: "[viime] dddd[na] [klo] LT", sameElse: "L" }, relativeTime: { future: "%s päästä", past: "%s sitten", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("fo", { months: "januar_februar_mars_apríl_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sunnudagur_mánadagur_týsdagur_mikudagur_hósdagur_fríggjadagur_leygardagur".split("_"), weekdaysShort: "sun_mán_týs_mik_hós_frí_ley".split("_"), weekdaysMin: "su_má_tý_mi_hó_fr_le".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D. MMMM, YYYY LT" }, calendar: { sameDay: "[Í dag kl.] LT", nextDay: "[Í morgin kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[Í gjár kl.] LT", lastWeek: "[síðstu] dddd [kl] LT", sameElse: "L" }, relativeTime: { future: "um %s", past: "%s síðani", s: "fá sekund", m: "ein minutt", mm: "%d minuttir", h: "ein tími", hh: "%d tímar", d: "ein dagur", dd: "%d dagar", M: "ein mánaði", MM: "%d mánaðir", y: "eitt ár", yy: "%d ár" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("fr-ca", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function (a) { return a + (1 === a ? "er" : "") } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("fr", { months: "janvier_février_mars_avril_mai_juin_juillet_août_septembre_octobre_novembre_décembre".split("_"), monthsShort: "janv._févr._mars_avr._mai_juin_juil._août_sept._oct._nov._déc.".split("_"), weekdays: "dimanche_lundi_mardi_mercredi_jeudi_vendredi_samedi".split("_"), weekdaysShort: "dim._lun._mar._mer._jeu._ven._sam.".split("_"), weekdaysMin: "Di_Lu_Ma_Me_Je_Ve_Sa".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Aujourd'hui à] LT", nextDay: "[Demain à] LT", nextWeek: "dddd [à] LT", lastDay: "[Hier à] LT", lastWeek: "dddd [dernier à] LT", sameElse: "L" }, relativeTime: { future: "dans %s", past: "il y a %s", s: "quelques secondes", m: "une minute", mm: "%d minutes", h: "une heure", hh: "%d heures", d: "un jour", dd: "%d jours", M: "un mois", MM: "%d mois", y: "un an", yy: "%d ans" }, ordinalParse: /\d{1,2}(er|)/, ordinal: function (a) { return a + (1 === a ? "er" : "") }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { var b = "jan._feb._mrt._apr._mai_jun._jul._aug._sep._okt._nov._des.".split("_"), c = "jan_feb_mrt_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"); return a.defineLocale("fy", { months: "jannewaris_febrewaris_maart_april_maaie_juny_july_augustus_septimber_oktober_novimber_desimber".split("_"), monthsShort: function (a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "snein_moandei_tiisdei_woansdei_tongersdei_freed_sneon".split("_"), weekdaysShort: "si._mo._ti._wo._to._fr._so.".split("_"), weekdaysMin: "Si_Mo_Ti_Wo_To_Fr_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[hjoed om] LT", nextDay: "[moarn om] LT", nextWeek: "dddd [om] LT", lastDay: "[juster om] LT", lastWeek: "[ôfrûne] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "oer %s", past: "%s lyn", s: "in pear sekonden", m: "ien minút", mm: "%d minuten", h: "ien oere", hh: "%d oeren", d: "ien dei", dd: "%d dagen", M: "ien moanne", MM: "%d moannen", y: "ien jier", yy: "%d jierren" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("gl", { months: "Xaneiro_Febreiro_Marzo_Abril_Maio_Xuño_Xullo_Agosto_Setembro_Outubro_Novembro_Decembro".split("_"), monthsShort: "Xan._Feb._Mar._Abr._Mai._Xuñ._Xul._Ago._Set._Out._Nov._Dec.".split("_"), weekdays: "Domingo_Luns_Martes_Mércores_Xoves_Venres_Sábado".split("_"), weekdaysShort: "Dom._Lun._Mar._Mér._Xov._Ven._Sáb.".split("_"), weekdaysMin: "Do_Lu_Ma_Mé_Xo_Ve_Sá".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: function () { return "[hoxe " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextDay: function () { return "[mañá " + (1 !== this.hours() ? "ás" : "á") + "] LT" }, nextWeek: function () { return "dddd [" + (1 !== this.hours() ? "ás" : "a") + "] LT" }, lastDay: function () { return "[onte " + (1 !== this.hours() ? "á" : "a") + "] LT" }, lastWeek: function () { return "[o] dddd [pasado " + (1 !== this.hours() ? "ás" : "a") + "] LT" }, sameElse: "L" }, relativeTime: { future: function (a) { return "uns segundos" === a ? "nuns segundos" : "en " + a }, past: "hai %s", s: "uns segundos", m: "un minuto", mm: "%d minutos", h: "unha hora", hh: "%d horas", d: "un día", dd: "%d días", M: "un mes", MM: "%d meses", y: "un ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("he", { months: "ינואר_פברואר_מרץ_אפריל_מאי_יוני_יולי_אוגוסט_ספטמבר_אוקטובר_נובמבר_דצמבר".split("_"), monthsShort: "ינו׳_פבר׳_מרץ_אפר׳_מאי_יוני_יולי_אוג׳_ספט׳_אוק׳_נוב׳_דצמ׳".split("_"), weekdays: "ראשון_שני_שלישי_רביעי_חמישי_שישי_שבת".split("_"), weekdaysShort: "א׳_ב׳_ג׳_ד׳_ה׳_ו׳_ש׳".split("_"), weekdaysMin: "א_ב_ג_ד_ה_ו_ש".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [ב]MMMM YYYY", LLL: "D [ב]MMMM YYYY LT", LLLL: "dddd, D [ב]MMMM YYYY LT", l: "D/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[היום ב־]LT", nextDay: "[מחר ב־]LT", nextWeek: "dddd [בשעה] LT", lastDay: "[אתמול ב־]LT", lastWeek: "[ביום] dddd [האחרון בשעה] LT", sameElse: "L" }, relativeTime: { future: "בעוד %s", past: "לפני %s", s: "מספר שניות", m: "דקה", mm: "%d דקות", h: "שעה", hh: function (a) { return 2 === a ? "שעתיים" : a + " שעות" }, d: "יום", dd: function (a) { return 2 === a ? "יומיים" : a + " ימים" }, M: "חודש", MM: function (a) { return 2 === a ? "חודשיים" : a + " חודשים" }, y: "שנה", yy: function (a) { return 2 === a ? "שנתיים" : a % 10 === 0 && 10 !== a ? a + " שנה" : a + " שנים" } } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("hi", { months: "जनवरी_फ़रवरी_मार्च_अप्रैल_मई_जून_जुलाई_अगस्त_सितम्बर_अक्टूबर_नवम्बर_दिसम्बर".split("_"), monthsShort: "जन._फ़र._मार्च_अप्रै._मई_जून_जुल._अग._सित._अक्टू._नव._दिस.".split("_"), weekdays: "रविवार_सोमवार_मंगलवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगल_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm बजे", LTS: "A h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[कल] LT", nextWeek: "dddd, LT", lastDay: "[कल] LT", lastWeek: "[पिछले] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s में", past: "%s पहले", s: "कुछ ही क्षण", m: "एक मिनट", mm: "%d मिनट", h: "एक घंटा", hh: "%d घंटे", d: "एक दिन", dd: "%d दिन", M: "एक महीने", MM: "%d महीने", y: "एक वर्ष", yy: "%d वर्ष" }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, meridiemParse: /रात|सुबह|दोपहर|शाम/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "रात" === b ? 4 > a ? a : a + 12 : "सुबह" === b ? a : "दोपहर" === b ? a >= 10 ? a : a + 12 : "शाम" === b ? a + 12 : void 0 }, meridiem: function (a) { return 4 > a ? "रात" : 10 > a ? "सुबह" : 17 > a ? "दोपहर" : 20 > a ? "शाम" : "रात" }, week: { dow: 0, doy: 6 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "jedna minuta" : "jedne minute"; case "mm": return d += 1 === a ? "minuta" : 2 === a || 3 === a || 4 === a ? "minute" : "minuta"; case "h": return b ? "jedan sat" : "jednog sata"; case "hh": return d += 1 === a ? "sat" : 2 === a || 3 === a || 4 === a ? "sata" : "sati"; case "dd": return d += 1 === a ? "dan" : "dana"; case "MM": return d += 1 === a ? "mjesec" : 2 === a || 3 === a || 4 === a ? "mjeseca" : "mjeseci"; case "yy": return d += 1 === a ? "godina" : 2 === a || 3 === a || 4 === a ? "godine" : "godina" } } return a.defineLocale("hr", { months: "sječanj_veljača_ožujak_travanj_svibanj_lipanj_srpanj_kolovoz_rujan_listopad_studeni_prosinac".split("_"), monthsShort: "sje._vel._ožu._tra._svi._lip._srp._kol._ruj._lis._stu._pro.".split("_"), weekdays: "nedjelja_ponedjeljak_utorak_srijeda_četvrtak_petak_subota".split("_"), weekdaysShort: "ned._pon._uto._sri._čet._pet._sub.".split("_"), weekdaysMin: "ne_po_ut_sr_če_pe_su".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedjelju] [u] LT"; case 3: return "[u] [srijedu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[jučer u] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: return "[prošlu] dddd [u] LT"; case 6: return "[prošle] [subote] [u] LT"; case 1: case 2: case 4: case 5: return "[prošli] dddd [u] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "prije %s", s: "par sekundi", m: b, mm: b, h: b, hh: b, d: "dan", dd: b, M: "mjesec", MM: b, y: "godinu", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c, d) { var e = a; switch (c) { case "s": return d || b ? "néhány másodperc" : "néhány másodperce"; case "m": return "egy" + (d || b ? " perc" : " perce"); case "mm": return e + (d || b ? " perc" : " perce"); case "h": return "egy" + (d || b ? " óra" : " órája"); case "hh": return e + (d || b ? " óra" : " órája"); case "d": return "egy" + (d || b ? " nap" : " napja"); case "dd": return e + (d || b ? " nap" : " napja"); case "M": return "egy" + (d || b ? " hónap" : " hónapja"); case "MM": return e + (d || b ? " hónap" : " hónapja"); case "y": return "egy" + (d || b ? " év" : " éve"); case "yy": return e + (d || b ? " év" : " éve") } return "" } function c(a) { return (a ? "" : "[múlt] ") + "[" + d[this.day()] + "] LT[-kor]" } var d = "vasárnap hétfőn kedden szerdán csütörtökön pénteken szombaton".split(" "); return a.defineLocale("hu", { months: "január_február_március_április_május_június_július_augusztus_szeptember_október_november_december".split("_"), monthsShort: "jan_feb_márc_ápr_máj_jún_júl_aug_szept_okt_nov_dec".split("_"), weekdays: "vasárnap_hétfő_kedd_szerda_csütörtök_péntek_szombat".split("_"), weekdaysShort: "vas_hét_kedd_sze_csüt_pén_szo".split("_"), weekdaysMin: "v_h_k_sze_cs_p_szo".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "YYYY.MM.DD.", LL: "YYYY. MMMM D.", LLL: "YYYY. MMMM D., LT", LLLL: "YYYY. MMMM D., dddd LT" }, meridiemParse: /de|du/i, isPM: function (a) { return "u" === a.charAt(1).toLowerCase() }, meridiem: function (a, b, c) { return 12 > a ? c === !0 ? "de" : "DE" : c === !0 ? "du" : "DU" }, calendar: { sameDay: "[ma] LT[-kor]", nextDay: "[holnap] LT[-kor]", nextWeek: function () { return c.call(this, !0) }, lastDay: "[tegnap] LT[-kor]", lastWeek: function () { return c.call(this, !1) }, sameElse: "L" }, relativeTime: { future: "%s múlva", past: "%s", s: b, m: b, mm: b, h: b, hh: b, d: b, dd: b, M: b, MM: b, y: b, yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a, b) { var c = { nominative: "հունվար_փետրվար_մարտ_ապրիլ_մայիս_հունիս_հուլիս_օգոստոս_սեպտեմբեր_հոկտեմբեր_նոյեմբեր_դեկտեմբեր".split("_"), accusative: "հունվարի_փետրվարի_մարտի_ապրիլի_մայիսի_հունիսի_հուլիսի_օգոստոսի_սեպտեմբերի_հոկտեմբերի_նոյեմբերի_դեկտեմբերի".split("_") }, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function c(a) { var b = "հնվ_փտր_մրտ_ապր_մյս_հնս_հլս_օգս_սպտ_հկտ_նմբ_դկտ".split("_"); return b[a.month()] } function d(a) { var b = "կիրակի_երկուշաբթի_երեքշաբթի_չորեքշաբթի_հինգշաբթի_ուրբաթ_շաբաթ".split("_"); return b[a.day()] } return a.defineLocale("hy-am", { months: b, monthsShort: c, weekdays: d, weekdaysShort: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), weekdaysMin: "կրկ_երկ_երք_չրք_հնգ_ուրբ_շբթ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY թ.", LLL: "D MMMM YYYY թ., LT", LLLL: "dddd, D MMMM YYYY թ., LT" }, calendar: { sameDay: "[այսօր] LT", nextDay: "[վաղը] LT", lastDay: "[երեկ] LT", nextWeek: function () { return "dddd [օրը ժամը] LT" }, lastWeek: function () { return "[անցած] dddd [օրը ժամը] LT" }, sameElse: "L" }, relativeTime: { future: "%s հետո", past: "%s առաջ", s: "մի քանի վայրկյան", m: "րոպե", mm: "%d րոպե", h: "ժամ", hh: "%d ժամ", d: "օր", dd: "%d օր", M: "ամիս", MM: "%d ամիս", y: "տարի", yy: "%d տարի" }, meridiemParse: /գիշերվա|առավոտվա|ցերեկվա|երեկոյան/, isPM: function (a) { return /^(ցերեկվա|երեկոյան)$/.test(a) }, meridiem: function (a) { return 4 > a ? "գիշերվա" : 12 > a ? "առավոտվա" : 17 > a ? "ցերեկվա" : "երեկոյան" }, ordinalParse: /\d{1,2}|\d{1,2}-(ին|րդ)/, ordinal: function (a, b) { switch (b) { case "DDD": case "w": case "W": case "DDDo": return 1 === a ? a + "-ին" : a + "-րդ"; default: return a } }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("id", { months: "Januari_Februari_Maret_April_Mei_Juni_Juli_Agustus_September_Oktober_November_Desember".split("_"), monthsShort: "Jan_Feb_Mar_Apr_Mei_Jun_Jul_Ags_Sep_Okt_Nov_Des".split("_"), weekdays: "Minggu_Senin_Selasa_Rabu_Kamis_Jumat_Sabtu".split("_"), weekdaysShort: "Min_Sen_Sel_Rab_Kam_Jum_Sab".split("_"), weekdaysMin: "Mg_Sn_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|siang|sore|malam/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "siang" === b ? a >= 11 ? a : a + 12 : "sore" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function (a) { return 11 > a ? "pagi" : 15 > a ? "siang" : 19 > a ? "sore" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Besok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kemarin pukul] LT", lastWeek: "dddd [lalu pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lalu", s: "beberapa detik", m: "semenit", mm: "%d menit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a) { return a % 100 === 11 ? !0 : a % 10 === 1 ? !1 : !0 } function c(a, c, d, e) { var f = a + " "; switch (d) { case "s": return c || e ? "nokkrar sekúndur" : "nokkrum sekúndum"; case "m": return c ? "mínúta" : "mínútu"; case "mm": return b(a) ? f + (c || e ? "mínútur" : "mínútum") : c ? f + "mínúta" : f + "mínútu"; case "hh": return b(a) ? f + (c || e ? "klukkustundir" : "klukkustundum") : f + "klukkustund"; case "d": return c ? "dagur" : e ? "dag" : "degi"; case "dd": return b(a) ? c ? f + "dagar" : f + (e ? "daga" : "dögum") : c ? f + "dagur" : f + (e ? "dag" : "degi"); case "M": return c ? "mánuður" : e ? "mánuð" : "mánuði"; case "MM": return b(a) ? c ? f + "mánuðir" : f + (e ? "mánuði" : "mánuðum") : c ? f + "mánuður" : f + (e ? "mánuð" : "mánuði"); case "y": return c || e ? "ár" : "ári"; case "yy": return b(a) ? f + (c || e ? "ár" : "árum") : f + (c || e ? "ár" : "ári") } } return a.defineLocale("is", { months: "janúar_febrúar_mars_apríl_maí_júní_júlí_ágúst_september_október_nóvember_desember".split("_"), monthsShort: "jan_feb_mar_apr_maí_jún_júl_ágú_sep_okt_nóv_des".split("_"), weekdays: "sunnudagur_mánudagur_þriðjudagur_miðvikudagur_fimmtudagur_föstudagur_laugardagur".split("_"), weekdaysShort: "sun_mán_þri_mið_fim_fös_lau".split("_"), weekdaysMin: "Su_Má_Þr_Mi_Fi_Fö_La".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd, D. MMMM YYYY [kl.] LT" }, calendar: { sameDay: "[í dag kl.] LT", nextDay: "[á morgun kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[í gær kl.] LT", lastWeek: "[síðasta] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "eftir %s", past: "fyrir %s síðan", s: c, m: c, mm: c, h: "klukkustund", hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("it", { months: "gennaio_febbraio_marzo_aprile_maggio_giugno_luglio_agosto_settembre_ottobre_novembre_dicembre".split("_"), monthsShort: "gen_feb_mar_apr_mag_giu_lug_ago_set_ott_nov_dic".split("_"), weekdays: "Domenica_Lunedì_Martedì_Mercoledì_Giovedì_Venerdì_Sabato".split("_"), weekdaysShort: "Dom_Lun_Mar_Mer_Gio_Ven_Sab".split("_"), weekdaysMin: "D_L_Ma_Me_G_V_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Oggi alle] LT", nextDay: "[Domani alle] LT", nextWeek: "dddd [alle] LT", lastDay: "[Ieri alle] LT", lastWeek: function () { switch (this.day()) { case 0: return "[la scorsa] dddd [alle] LT"; default: return "[lo scorso] dddd [alle] LT" } }, sameElse: "L" }, relativeTime: { future: function (a) { return (/^[0-9].+$/.test(a) ? "tra" : "in") + " " + a }, past: "%s fa", s: "alcuni secondi", m: "un minuto", mm: "%d minuti", h: "un'ora", hh: "%d ore", d: "un giorno", dd: "%d giorni", M: "un mese", MM: "%d mesi", y: "un anno", yy: "%d anni" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ja", { months: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "日曜日_月曜日_火曜日_水曜日_木曜日_金曜日_土曜日".split("_"), weekdaysShort: "日_月_火_水_木_金_土".split("_"), weekdaysMin: "日_月_火_水_木_金_土".split("_"), longDateFormat: { LT: "Ah時m分", LTS: "LTs秒", L: "YYYY/MM/DD", LL: "YYYY年M月D日", LLL: "YYYY年M月D日LT", LLLL: "YYYY年M月D日LT dddd" }, meridiemParse: /午前|午後/i, isPM: function (a) { return "午後" === a }, meridiem: function (a) { return 12 > a ? "午前" : "午後" }, calendar: { sameDay: "[今日] LT", nextDay: "[明日] LT", nextWeek: "[来週]dddd LT", lastDay: "[昨日] LT", lastWeek: "[前週]dddd LT", sameElse: "L" }, relativeTime: { future: "%s後", past: "%s前", s: "数秒", m: "1分", mm: "%d分", h: "1時間", hh: "%d時間", d: "1日", dd: "%d日", M: "1ヶ月", MM: "%dヶ月", y: "1年", yy: "%d年" } }) }), function (a) { a(vb) }(function (a) { function b(a, b) { var c = { nominative: "იანვარი_თებერვალი_მარტი_აპრილი_მაისი_ივნისი_ივლისი_აგვისტო_სექტემბერი_ოქტომბერი_ნოემბერი_დეკემბერი".split("_"), accusative: "იანვარს_თებერვალს_მარტს_აპრილის_მაისს_ივნისს_ივლისს_აგვისტს_სექტემბერს_ოქტომბერს_ნოემბერს_დეკემბერს".split("_") }, d = /D[oD] *MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function c(a, b) { var c = { nominative: "კვირა_ორშაბათი_სამშაბათი_ოთხშაბათი_ხუთშაბათი_პარასკევი_შაბათი".split("_"), accusative: "კვირას_ორშაბათს_სამშაბათს_ოთხშაბათს_ხუთშაბათს_პარასკევს_შაბათს".split("_") }, d = /(წინა|შემდეგ)/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("ka", { months: b, monthsShort: "იან_თებ_მარ_აპრ_მაი_ივნ_ივლ_აგვ_სექ_ოქტ_ნოე_დეკ".split("_"), weekdays: c, weekdaysShort: "კვი_ორშ_სამ_ოთხ_ხუთ_პარ_შაბ".split("_"), weekdaysMin: "კვ_ორ_სა_ოთ_ხუ_პა_შა".split("_"), longDateFormat: { LT: "h:mm A", LTS: "h:mm:ss A", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[დღეს] LT[-ზე]", nextDay: "[ხვალ] LT[-ზე]", lastDay: "[გუშინ] LT[-ზე]", nextWeek: "[შემდეგ] dddd LT[-ზე]", lastWeek: "[წინა] dddd LT-ზე", sameElse: "L" }, relativeTime: { future: function (a) { return /(წამი|წუთი|საათი|წელი)/.test(a) ? a.replace(/ი$/, "ში") : a + "ში" }, past: function (a) { return /(წამი|წუთი|საათი|დღე|თვე)/.test(a) ? a.replace(/(ი|ე)$/, "ის წინ") : /წელი/.test(a) ? a.replace(/წელი$/, "წლის წინ") : void 0 }, s: "რამდენიმე წამი", m: "წუთი", mm: "%d წუთი", h: "საათი", hh: "%d საათი", d: "დღე", dd: "%d დღე", M: "თვე", MM: "%d თვე", y: "წელი", yy: "%d წელი" }, ordinalParse: /0|1-ლი|მე-\d{1,2}|\d{1,2}-ე/, ordinal: function (a) { return 0 === a ? a : 1 === a ? a + "-ლი" : 20 > a || 100 >= a && a % 20 === 0 || a % 100 === 0 ? "მე-" + a : a + "-ე" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("km", { months: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), monthsShort: "មករា_កុម្ភៈ_មិនា_មេសា_ឧសភា_មិថុនា_កក្កដា_សីហា_កញ្ញា_តុលា_វិច្ឆិកា_ធ្នូ".split("_"), weekdays: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysShort: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), weekdaysMin: "អាទិត្យ_ច័ន្ទ_អង្គារ_ពុធ_ព្រហស្បតិ៍_សុក្រ_សៅរ៍".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[ថ្ងៃនៈ ម៉ោង] LT", nextDay: "[ស្អែក ម៉ោង] LT", nextWeek: "dddd [ម៉ោង] LT", lastDay: "[ម្សិលមិញ ម៉ោង] LT", lastWeek: "dddd [សប្តាហ៍មុន] [ម៉ោង] LT", sameElse: "L" }, relativeTime: { future: "%sទៀត", past: "%sមុន", s: "ប៉ុន្មានវិនាទី", m: "មួយនាទី", mm: "%d នាទី", h: "មួយម៉ោង", hh: "%d ម៉ោង", d: "មួយថ្ងៃ", dd: "%d ថ្ងៃ", M: "មួយខែ", MM: "%d ខែ", y: "មួយឆ្នាំ", yy: "%d ឆ្នាំ" }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ko", { months: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), monthsShort: "1월_2월_3월_4월_5월_6월_7월_8월_9월_10월_11월_12월".split("_"), weekdays: "일요일_월요일_화요일_수요일_목요일_금요일_토요일".split("_"), weekdaysShort: "일_월_화_수_목_금_토".split("_"), weekdaysMin: "일_월_화_수_목_금_토".split("_"), longDateFormat: { LT: "A h시 m분", LTS: "A h시 m분 s초", L: "YYYY.MM.DD", LL: "YYYY년 MMMM D일", LLL: "YYYY년 MMMM D일 LT", LLLL: "YYYY년 MMMM D일 dddd LT" }, calendar: { sameDay: "오늘 LT", nextDay: "내일 LT", nextWeek: "dddd LT", lastDay: "어제 LT", lastWeek: "지난주 dddd LT", sameElse: "L" }, relativeTime: { future: "%s 후", past: "%s 전", s: "몇초", ss: "%d초", m: "일분", mm: "%d분", h: "한시간", hh: "%d시간", d: "하루", dd: "%d일", M: "한달", MM: "%d달", y: "일년", yy: "%d년" }, ordinalParse: /\d{1,2}일/, ordinal: "%d일", meridiemParse: /오전|오후/, isPM: function (a) { return "오후" === a }, meridiem: function (a) { return 12 > a ? "오전" : "오후" } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = { m: ["eng Minutt", "enger Minutt"], h: ["eng Stonn", "enger Stonn"], d: ["een Dag", "engem Dag"], M: ["ee Mount", "engem Mount"], y: ["ee Joer", "engem Joer"] }; return b ? d[c][0] : d[c][1] } function c(a) { var b = a.substr(0, a.indexOf(" ")); return e(b) ? "a " + a : "an " + a } function d(a) { var b = a.substr(0, a.indexOf(" ")); return e(b) ? "viru " + a : "virun " + a } function e(a) { if (a = parseInt(a, 10), isNaN(a)) return !1; if (0 > a) return !0; if (10 > a) return a >= 4 && 7 >= a ? !0 : !1; if (100 > a) { var b = a % 10, c = a / 10; return e(0 === b ? c : b) } if (1e4 > a) { for (; a >= 10;) a /= 10; return e(a) } return a /= 1e3, e(a) } return a.defineLocale("lb", { months: "Januar_Februar_Mäerz_Abrëll_Mee_Juni_Juli_August_September_Oktober_November_Dezember".split("_"), monthsShort: "Jan._Febr._Mrz._Abr._Mee_Jun._Jul._Aug._Sept._Okt._Nov._Dez.".split("_"), weekdays: "Sonndeg_Méindeg_Dënschdeg_Mëttwoch_Donneschdeg_Freideg_Samschdeg".split("_"), weekdaysShort: "So._Mé._Dë._Më._Do._Fr._Sa.".split("_"), weekdaysMin: "So_Mé_Dë_Më_Do_Fr_Sa".split("_"), longDateFormat: { LT: "H:mm [Auer]", LTS: "H:mm:ss [Auer]", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[Haut um] LT", sameElse: "L", nextDay: "[Muer um] LT", nextWeek: "dddd [um] LT", lastDay: "[Gëschter um] LT", lastWeek: function () { switch (this.day()) { case 2: case 4: return "[Leschten] dddd [um] LT"; default: return "[Leschte] dddd [um] LT" } } }, relativeTime: { future: c, past: d, s: "e puer Sekonnen", m: b, mm: "%d Minutten", h: b, hh: "%d Stonnen", d: b, dd: "%d Deeg", M: b, MM: "%d Méint", y: b, yy: "%d Joer" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) {
        function b(a, b, c, d) { return b ? "kelios sekundės" : d ? "kelių sekundžių" : "kelias sekundes" } function c(a, b, c, d) {
            return b ? e(c)[0] : d ? e(c)[1] : e(c)[2]
        } function d(a) { return a % 10 === 0 || a > 10 && 20 > a } function e(a) { return h[a].split("_") } function f(a, b, f, g) { var h = a + " "; return 1 === a ? h + c(a, b, f[0], g) : b ? h + (d(a) ? e(f)[1] : e(f)[0]) : g ? h + e(f)[1] : h + (d(a) ? e(f)[1] : e(f)[2]) } function g(a, b) { var c = -1 === b.indexOf("dddd HH:mm"), d = i[a.day()]; return c ? d : d.substring(0, d.length - 2) + "į" } var h = { m: "minutė_minutės_minutę", mm: "minutės_minučių_minutes", h: "valanda_valandos_valandą", hh: "valandos_valandų_valandas", d: "diena_dienos_dieną", dd: "dienos_dienų_dienas", M: "mėnuo_mėnesio_mėnesį", MM: "mėnesiai_mėnesių_mėnesius", y: "metai_metų_metus", yy: "metai_metų_metus" }, i = "sekmadienis_pirmadienis_antradienis_trečiadienis_ketvirtadienis_penktadienis_šeštadienis".split("_"); return a.defineLocale("lt", { months: "sausio_vasario_kovo_balandžio_gegužės_birželio_liepos_rugpjūčio_rugsėjo_spalio_lapkričio_gruodžio".split("_"), monthsShort: "sau_vas_kov_bal_geg_bir_lie_rgp_rgs_spa_lap_grd".split("_"), weekdays: g, weekdaysShort: "Sek_Pir_Ant_Tre_Ket_Pen_Šeš".split("_"), weekdaysMin: "S_P_A_T_K_Pn_Š".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "YYYY [m.] MMMM D [d.]", LLL: "YYYY [m.] MMMM D [d.], LT [val.]", LLLL: "YYYY [m.] MMMM D [d.], dddd, LT [val.]", l: "YYYY-MM-DD", ll: "YYYY [m.] MMMM D [d.]", lll: "YYYY [m.] MMMM D [d.], LT [val.]", llll: "YYYY [m.] MMMM D [d.], ddd, LT [val.]" }, calendar: { sameDay: "[Šiandien] LT", nextDay: "[Rytoj] LT", nextWeek: "dddd LT", lastDay: "[Vakar] LT", lastWeek: "[Praėjusį] dddd LT", sameElse: "L" }, relativeTime: { future: "po %s", past: "prieš %s", s: b, m: c, mm: f, h: c, hh: f, d: c, dd: f, M: c, MM: f, y: c, yy: f }, ordinalParse: /\d{1,2}-oji/, ordinal: function (a) { return a + "-oji" }, week: { dow: 1, doy: 4 } })
    }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = a.split("_"); return c ? b % 10 === 1 && 11 !== b ? d[2] : d[3] : b % 10 === 1 && 11 !== b ? d[0] : d[1] } function c(a, c, e) { return a + " " + b(d[e], a, c) } var d = { mm: "minūti_minūtes_minūte_minūtes", hh: "stundu_stundas_stunda_stundas", dd: "dienu_dienas_diena_dienas", MM: "mēnesi_mēnešus_mēnesis_mēneši", yy: "gadu_gadus_gads_gadi" }; return a.defineLocale("lv", { months: "janvāris_februāris_marts_aprīlis_maijs_jūnijs_jūlijs_augusts_septembris_oktobris_novembris_decembris".split("_"), monthsShort: "jan_feb_mar_apr_mai_jūn_jūl_aug_sep_okt_nov_dec".split("_"), weekdays: "svētdiena_pirmdiena_otrdiena_trešdiena_ceturtdiena_piektdiena_sestdiena".split("_"), weekdaysShort: "Sv_P_O_T_C_Pk_S".split("_"), weekdaysMin: "Sv_P_O_T_C_Pk_S".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "YYYY. [gada] D. MMMM", LLL: "YYYY. [gada] D. MMMM, LT", LLLL: "YYYY. [gada] D. MMMM, dddd, LT" }, calendar: { sameDay: "[Šodien pulksten] LT", nextDay: "[Rīt pulksten] LT", nextWeek: "dddd [pulksten] LT", lastDay: "[Vakar pulksten] LT", lastWeek: "[Pagājušā] dddd [pulksten] LT", sameElse: "L" }, relativeTime: { future: "%s vēlāk", past: "%s agrāk", s: "dažas sekundes", m: "minūti", mm: c, h: "stundu", hh: c, d: "dienu", dd: c, M: "mēnesi", MM: c, y: "gadu", yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("mk", { months: "јануари_февруари_март_април_мај_јуни_јули_август_септември_октомври_ноември_декември".split("_"), monthsShort: "јан_фев_мар_апр_мај_јун_јул_авг_сеп_окт_ное_дек".split("_"), weekdays: "недела_понеделник_вторник_среда_четврток_петок_сабота".split("_"), weekdaysShort: "нед_пон_вто_сре_чет_пет_саб".split("_"), weekdaysMin: "нe_пo_вт_ср_че_пе_сa".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "D.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Денес во] LT", nextDay: "[Утре во] LT", nextWeek: "dddd [во] LT", lastDay: "[Вчера во] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[Во изминатата] dddd [во] LT"; case 1: case 2: case 4: case 5: return "[Во изминатиот] dddd [во] LT" } }, sameElse: "L" }, relativeTime: { future: "после %s", past: "пред %s", s: "неколку секунди", m: "минута", mm: "%d минути", h: "час", hh: "%d часа", d: "ден", dd: "%d дена", M: "месец", MM: "%d месеци", y: "година", yy: "%d години" }, ordinalParse: /\d{1,2}-(ев|ен|ти|ви|ри|ми)/, ordinal: function (a) { var b = a % 10, c = a % 100; return 0 === a ? a + "-ев" : 0 === c ? a + "-ен" : c > 10 && 20 > c ? a + "-ти" : 1 === b ? a + "-ви" : 2 === b ? a + "-ри" : 7 === b || 8 === b ? a + "-ми" : a + "-ти" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ml", { months: "ജനുവരി_ഫെബ്രുവരി_മാർച്ച്_ഏപ്രിൽ_മേയ്_ജൂൺ_ജൂലൈ_ഓഗസ്റ്റ്_സെപ്റ്റംബർ_ഒക്ടോബർ_നവംബർ_ഡിസംബർ".split("_"), monthsShort: "ജനു._ഫെബ്രു._മാർ._ഏപ്രി._മേയ്_ജൂൺ_ജൂലൈ._ഓഗ._സെപ്റ്റ._ഒക്ടോ._നവം._ഡിസം.".split("_"), weekdays: "ഞായറാഴ്ച_തിങ്കളാഴ്ച_ചൊവ്വാഴ്ച_ബുധനാഴ്ച_വ്യാഴാഴ്ച_വെള്ളിയാഴ്ച_ശനിയാഴ്ച".split("_"), weekdaysShort: "ഞായർ_തിങ്കൾ_ചൊവ്വ_ബുധൻ_വ്യാഴം_വെള്ളി_ശനി".split("_"), weekdaysMin: "ഞാ_തി_ചൊ_ബു_വ്യാ_വെ_ശ".split("_"), longDateFormat: { LT: "A h:mm -നു", LTS: "A h:mm:ss -നു", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[ഇന്ന്] LT", nextDay: "[നാളെ] LT", nextWeek: "dddd, LT", lastDay: "[ഇന്നലെ] LT", lastWeek: "[കഴിഞ്ഞ] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s കഴിഞ്ഞ്", past: "%s മുൻപ്", s: "അൽപ നിമിഷങ്ങൾ", m: "ഒരു മിനിറ്റ്", mm: "%d മിനിറ്റ്", h: "ഒരു മണിക്കൂർ", hh: "%d മണിക്കൂർ", d: "ഒരു ദിവസം", dd: "%d ദിവസം", M: "ഒരു മാസം", MM: "%d മാസം", y: "ഒരു വർഷം", yy: "%d വർഷം" }, meridiemParse: /രാത്രി|രാവിലെ|ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി/i, isPM: function (a) { return /^(ഉച്ച കഴിഞ്ഞ്|വൈകുന്നേരം|രാത്രി)$/.test(a) }, meridiem: function (a) { return 4 > a ? "രാത്രി" : 12 > a ? "രാവിലെ" : 17 > a ? "ഉച്ച കഴിഞ്ഞ്" : 20 > a ? "വൈകുന്നേരം" : "രാത്രി" } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("mr", { months: "जानेवारी_फेब्रुवारी_मार्च_एप्रिल_मे_जून_जुलै_ऑगस्ट_सप्टेंबर_ऑक्टोबर_नोव्हेंबर_डिसेंबर".split("_"), monthsShort: "जाने._फेब्रु._मार्च._एप्रि._मे._जून._जुलै._ऑग._सप्टें._ऑक्टो._नोव्हें._डिसें.".split("_"), weekdays: "रविवार_सोमवार_मंगळवार_बुधवार_गुरूवार_शुक्रवार_शनिवार".split("_"), weekdaysShort: "रवि_सोम_मंगळ_बुध_गुरू_शुक्र_शनि".split("_"), weekdaysMin: "र_सो_मं_बु_गु_शु_श".split("_"), longDateFormat: { LT: "A h:mm वाजता", LTS: "A h:mm:ss वाजता", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[आज] LT", nextDay: "[उद्या] LT", nextWeek: "dddd, LT", lastDay: "[काल] LT", lastWeek: "[मागील] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s नंतर", past: "%s पूर्वी", s: "सेकंद", m: "एक मिनिट", mm: "%d मिनिटे", h: "एक तास", hh: "%d तास", d: "एक दिवस", dd: "%d दिवस", M: "एक महिना", MM: "%d महिने", y: "एक वर्ष", yy: "%d वर्षे" }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, meridiemParse: /रात्री|सकाळी|दुपारी|सायंकाळी/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "रात्री" === b ? 4 > a ? a : a + 12 : "सकाळी" === b ? a : "दुपारी" === b ? a >= 10 ? a : a + 12 : "सायंकाळी" === b ? a + 12 : void 0 }, meridiem: function (a) { return 4 > a ? "रात्री" : 10 > a ? "सकाळी" : 17 > a ? "दुपारी" : 20 > a ? "सायंकाळी" : "रात्री" }, week: { dow: 0, doy: 6 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ms-my", { months: "Januari_Februari_Mac_April_Mei_Jun_Julai_Ogos_September_Oktober_November_Disember".split("_"), monthsShort: "Jan_Feb_Mac_Apr_Mei_Jun_Jul_Ogs_Sep_Okt_Nov_Dis".split("_"), weekdays: "Ahad_Isnin_Selasa_Rabu_Khamis_Jumaat_Sabtu".split("_"), weekdaysShort: "Ahd_Isn_Sel_Rab_Kha_Jum_Sab".split("_"), weekdaysMin: "Ah_Is_Sl_Rb_Km_Jm_Sb".split("_"), longDateFormat: { LT: "HH.mm", LTS: "LT.ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY [pukul] LT", LLLL: "dddd, D MMMM YYYY [pukul] LT" }, meridiemParse: /pagi|tengahari|petang|malam/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "pagi" === b ? a : "tengahari" === b ? a >= 11 ? a : a + 12 : "petang" === b || "malam" === b ? a + 12 : void 0 }, meridiem: function (a) { return 11 > a ? "pagi" : 15 > a ? "tengahari" : 19 > a ? "petang" : "malam" }, calendar: { sameDay: "[Hari ini pukul] LT", nextDay: "[Esok pukul] LT", nextWeek: "dddd [pukul] LT", lastDay: "[Kelmarin pukul] LT", lastWeek: "dddd [lepas pukul] LT", sameElse: "L" }, relativeTime: { future: "dalam %s", past: "%s yang lepas", s: "beberapa saat", m: "seminit", mm: "%d minit", h: "sejam", hh: "%d jam", d: "sehari", dd: "%d hari", M: "sebulan", MM: "%d bulan", y: "setahun", yy: "%d tahun" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "၁", 2: "၂", 3: "၃", 4: "၄", 5: "၅", 6: "၆", 7: "၇", 8: "၈", 9: "၉", 0: "၀" }, c = { "၁": "1", "၂": "2", "၃": "3", "၄": "4", "၅": "5", "၆": "6", "၇": "7", "၈": "8", "၉": "9", "၀": "0" }; return a.defineLocale("my", { months: "ဇန်နဝါရီ_ဖေဖော်ဝါရီ_မတ်_ဧပြီ_မေ_ဇွန်_ဇူလိုင်_သြဂုတ်_စက်တင်ဘာ_အောက်တိုဘာ_နိုဝင်ဘာ_ဒီဇင်ဘာ".split("_"), monthsShort: "ဇန်_ဖေ_မတ်_ပြီ_မေ_ဇွန်_လိုင်_သြ_စက်_အောက်_နို_ဒီ".split("_"), weekdays: "တနင်္ဂနွေ_တနင်္လာ_အင်္ဂါ_ဗုဒ္ဓဟူး_ကြာသပတေး_သောကြာ_စနေ".split("_"), weekdaysShort: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), weekdaysMin: "နွေ_လာ_င်္ဂါ_ဟူး_ကြာ_သော_နေ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "HH:mm:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ယနေ.] LT [မှာ]", nextDay: "[မနက်ဖြန်] LT [မှာ]", nextWeek: "dddd LT [မှာ]", lastDay: "[မနေ.က] LT [မှာ]", lastWeek: "[ပြီးခဲ့သော] dddd LT [မှာ]", sameElse: "L" }, relativeTime: { future: "လာမည့် %s မှာ", past: "လွန်ခဲ့သော %s က", s: "စက္ကန်.အနည်းငယ်", m: "တစ်မိနစ်", mm: "%d မိနစ်", h: "တစ်နာရီ", hh: "%d နာရီ", d: "တစ်ရက်", dd: "%d ရက်", M: "တစ်လ", MM: "%d လ", y: "တစ်နှစ်", yy: "%d နှစ်" }, preparse: function (a) { return a.replace(/[၁၂၃၄၅၆၇၈၉၀]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("nb", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "søndag_mandag_tirsdag_onsdag_torsdag_fredag_lørdag".split("_"), weekdaysShort: "søn_man_tirs_ons_tors_fre_lør".split("_"), weekdaysMin: "sø_ma_ti_on_to_fr_lø".split("_"), longDateFormat: { LT: "H.mm", LTS: "LT.ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY [kl.] LT", LLLL: "dddd D. MMMM YYYY [kl.] LT" }, calendar: { sameDay: "[i dag kl.] LT", nextDay: "[i morgen kl.] LT", nextWeek: "dddd [kl.] LT", lastDay: "[i går kl.] LT", lastWeek: "[forrige] dddd [kl.] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s siden", s: "noen sekunder", m: "ett minutt", mm: "%d minutter", h: "en time", hh: "%d timer", d: "en dag", dd: "%d dager", M: "en måned", MM: "%d måneder", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "१", 2: "२", 3: "३", 4: "४", 5: "५", 6: "६", 7: "७", 8: "८", 9: "९", 0: "०" }, c = { "१": "1", "२": "2", "३": "3", "४": "4", "५": "5", "६": "6", "७": "7", "८": "8", "९": "9", "०": "0" }; return a.defineLocale("ne", { months: "जनवरी_फेब्रुवरी_मार्च_अप्रिल_मई_जुन_जुलाई_अगष्ट_सेप्टेम्बर_अक्टोबर_नोभेम्बर_डिसेम्बर".split("_"), monthsShort: "जन._फेब्रु._मार्च_अप्रि._मई_जुन_जुलाई._अग._सेप्ट._अक्टो._नोभे._डिसे.".split("_"), weekdays: "आइतबार_सोमबार_मङ्गलबार_बुधबार_बिहिबार_शुक्रबार_शनिबार".split("_"), weekdaysShort: "आइत._सोम._मङ्गल._बुध._बिहि._शुक्र._शनि.".split("_"), weekdaysMin: "आइ._सो._मङ्_बु._बि._शु._श.".split("_"), longDateFormat: { LT: "Aको h:mm बजे", LTS: "Aको h:mm:ss बजे", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, preparse: function (a) { return a.replace(/[१२३४५६७८९०]/g, function (a) { return c[a] }) }, postformat: function (a) { return a.replace(/\d/g, function (a) { return b[a] }) }, meridiemParse: /राती|बिहान|दिउँसो|बेलुका|साँझ|राती/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "राती" === b ? 3 > a ? a : a + 12 : "बिहान" === b ? a : "दिउँसो" === b ? a >= 10 ? a : a + 12 : "बेलुका" === b || "साँझ" === b ? a + 12 : void 0 }, meridiem: function (a) { return 3 > a ? "राती" : 10 > a ? "बिहान" : 15 > a ? "दिउँसो" : 18 > a ? "बेलुका" : 20 > a ? "साँझ" : "राती" }, calendar: { sameDay: "[आज] LT", nextDay: "[भोली] LT", nextWeek: "[आउँदो] dddd[,] LT", lastDay: "[हिजो] LT", lastWeek: "[गएको] dddd[,] LT", sameElse: "L" }, relativeTime: { future: "%sमा", past: "%s अगाडी", s: "केही समय", m: "एक मिनेट", mm: "%d मिनेट", h: "एक घण्टा", hh: "%d घण्टा", d: "एक दिन", dd: "%d दिन", M: "एक महिना", MM: "%d महिना", y: "एक बर्ष", yy: "%d बर्ष" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = "jan._feb._mrt._apr._mei_jun._jul._aug._sep._okt._nov._dec.".split("_"), c = "jan_feb_mrt_apr_mei_jun_jul_aug_sep_okt_nov_dec".split("_"); return a.defineLocale("nl", { months: "januari_februari_maart_april_mei_juni_juli_augustus_september_oktober_november_december".split("_"), monthsShort: function (a, d) { return /-MMM-/.test(d) ? c[a.month()] : b[a.month()] }, weekdays: "zondag_maandag_dinsdag_woensdag_donderdag_vrijdag_zaterdag".split("_"), weekdaysShort: "zo._ma._di._wo._do._vr._za.".split("_"), weekdaysMin: "Zo_Ma_Di_Wo_Do_Vr_Za".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD-MM-YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[vandaag om] LT", nextDay: "[morgen om] LT", nextWeek: "dddd [om] LT", lastDay: "[gisteren om] LT", lastWeek: "[afgelopen] dddd [om] LT", sameElse: "L" }, relativeTime: { future: "over %s", past: "%s geleden", s: "een paar seconden", m: "één minuut", mm: "%d minuten", h: "één uur", hh: "%d uur", d: "één dag", dd: "%d dagen", M: "één maand", MM: "%d maanden", y: "één jaar", yy: "%d jaar" }, ordinalParse: /\d{1,2}(ste|de)/, ordinal: function (a) { return a + (1 === a || 8 === a || a >= 20 ? "ste" : "de") }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("nn", { months: "januar_februar_mars_april_mai_juni_juli_august_september_oktober_november_desember".split("_"), monthsShort: "jan_feb_mar_apr_mai_jun_jul_aug_sep_okt_nov_des".split("_"), weekdays: "sundag_måndag_tysdag_onsdag_torsdag_fredag_laurdag".split("_"), weekdaysShort: "sun_mån_tys_ons_tor_fre_lau".split("_"), weekdaysMin: "su_må_ty_on_to_fr_lø".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[I dag klokka] LT", nextDay: "[I morgon klokka] LT", nextWeek: "dddd [klokka] LT", lastDay: "[I går klokka] LT", lastWeek: "[Føregåande] dddd [klokka] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "for %s sidan", s: "nokre sekund", m: "eit minutt", mm: "%d minutt", h: "ein time", hh: "%d timar", d: "ein dag", dd: "%d dagar", M: "ein månad", MM: "%d månader", y: "eit år", yy: "%d år" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a) { return 5 > a % 10 && a % 10 > 1 && ~~(a / 10) % 10 !== 1 } function c(a, c, d) { var e = a + " "; switch (d) { case "m": return c ? "minuta" : "minutę"; case "mm": return e + (b(a) ? "minuty" : "minut"); case "h": return c ? "godzina" : "godzinę"; case "hh": return e + (b(a) ? "godziny" : "godzin"); case "MM": return e + (b(a) ? "miesiące" : "miesięcy"); case "yy": return e + (b(a) ? "lata" : "lat") } } var d = "styczeń_luty_marzec_kwiecień_maj_czerwiec_lipiec_sierpień_wrzesień_październik_listopad_grudzień".split("_"), e = "stycznia_lutego_marca_kwietnia_maja_czerwca_lipca_sierpnia_września_października_listopada_grudnia".split("_"); return a.defineLocale("pl", { months: function (a, b) { return /D MMMM/.test(b) ? e[a.month()] : d[a.month()] }, monthsShort: "sty_lut_mar_kwi_maj_cze_lip_sie_wrz_paź_lis_gru".split("_"), weekdays: "niedziela_poniedziałek_wtorek_środa_czwartek_piątek_sobota".split("_"), weekdaysShort: "nie_pon_wt_śr_czw_pt_sb".split("_"), weekdaysMin: "N_Pn_Wt_Śr_Cz_Pt_So".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Dziś o] LT", nextDay: "[Jutro o] LT", nextWeek: "[W] dddd [o] LT", lastDay: "[Wczoraj o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[W zeszłą niedzielę o] LT"; case 3: return "[W zeszłą środę o] LT"; case 6: return "[W zeszłą sobotę o] LT"; default: return "[W zeszły] dddd [o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "%s temu", s: "kilka sekund", m: c, mm: c, h: c, hh: c, d: "1 dzień", dd: "%d dni", M: "miesiąc", MM: c, y: "rok", yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("pt-br", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY [às] LT", LLLL: "dddd, D [de] MMMM [de] YYYY [às] LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function () { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "%s atrás", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº" }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("pt", { months: "janeiro_fevereiro_março_abril_maio_junho_julho_agosto_setembro_outubro_novembro_dezembro".split("_"), monthsShort: "jan_fev_mar_abr_mai_jun_jul_ago_set_out_nov_dez".split("_"), weekdays: "domingo_segunda-feira_terça-feira_quarta-feira_quinta-feira_sexta-feira_sábado".split("_"), weekdaysShort: "dom_seg_ter_qua_qui_sex_sáb".split("_"), weekdaysMin: "dom_2ª_3ª_4ª_5ª_6ª_sáb".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D [de] MMMM [de] YYYY", LLL: "D [de] MMMM [de] YYYY LT", LLLL: "dddd, D [de] MMMM [de] YYYY LT" }, calendar: { sameDay: "[Hoje às] LT", nextDay: "[Amanhã às] LT", nextWeek: "dddd [às] LT", lastDay: "[Ontem às] LT", lastWeek: function () { return 0 === this.day() || 6 === this.day() ? "[Último] dddd [às] LT" : "[Última] dddd [às] LT" }, sameElse: "L" }, relativeTime: { future: "em %s", past: "há %s", s: "segundos", m: "um minuto", mm: "%d minutos", h: "uma hora", hh: "%d horas", d: "um dia", dd: "%d dias", M: "um mês", MM: "%d meses", y: "um ano", yy: "%d anos" }, ordinalParse: /\d{1,2}º/, ordinal: "%dº", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = { mm: "minute", hh: "ore", dd: "zile", MM: "luni", yy: "ani" }, e = " "; return (a % 100 >= 20 || a >= 100 && a % 100 === 0) && (e = " de "), a + e + d[c] } return a.defineLocale("ro", { months: "ianuarie_februarie_martie_aprilie_mai_iunie_iulie_august_septembrie_octombrie_noiembrie_decembrie".split("_"), monthsShort: "ian._febr._mart._apr._mai_iun._iul._aug._sept._oct._nov._dec.".split("_"), weekdays: "duminică_luni_marți_miercuri_joi_vineri_sâmbătă".split("_"), weekdaysShort: "Dum_Lun_Mar_Mie_Joi_Vin_Sâm".split("_"), weekdaysMin: "Du_Lu_Ma_Mi_Jo_Vi_Sâ".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY H:mm", LLLL: "dddd, D MMMM YYYY H:mm" }, calendar: { sameDay: "[azi la] LT", nextDay: "[mâine la] LT", nextWeek: "dddd [la] LT", lastDay: "[ieri la] LT", lastWeek: "[fosta] dddd [la] LT", sameElse: "L" }, relativeTime: { future: "peste %s", past: "%s în urmă", s: "câteva secunde", m: "un minut", mm: b, h: "o oră", hh: b, d: "o zi", dd: b, M: "o lună", MM: b, y: "un an", yy: b }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] } function c(a, c, d) { var e = { mm: c ? "минута_минуты_минут" : "минуту_минуты_минут", hh: "час_часа_часов", dd: "день_дня_дней", MM: "месяц_месяца_месяцев", yy: "год_года_лет" }; return "m" === d ? c ? "минута" : "минуту" : a + " " + b(e[d], +a) } function d(a, b) { var c = { nominative: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), accusative: "января_февраля_марта_апреля_мая_июня_июля_августа_сентября_октября_ноября_декабря".split("_") }, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function e(a, b) { var c = { nominative: "янв_фев_март_апр_май_июнь_июль_авг_сен_окт_ноя_дек".split("_"), accusative: "янв_фев_мар_апр_мая_июня_июля_авг_сен_окт_ноя_дек".split("_") }, d = /D[oD]?(\[[^\[\]]*\]|\s+)+MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function f(a, b) { var c = { nominative: "воскресенье_понедельник_вторник_среда_четверг_пятница_суббота".split("_"), accusative: "воскресенье_понедельник_вторник_среду_четверг_пятницу_субботу".split("_") }, d = /\[ ?[Вв] ?(?:прошлую|следующую|эту)? ?\] ?dddd/.test(b) ? "accusative" : "nominative"; return c[d][a.day()] } return a.defineLocale("ru", { months: d, monthsShort: e, weekdays: f, weekdaysShort: "вс_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "вс_пн_вт_ср_чт_пт_сб".split("_"), monthsParse: [/^янв/i, /^фев/i, /^мар/i, /^апр/i, /^ма[й|я]/i, /^июн/i, /^июл/i, /^авг/i, /^сен/i, /^окт/i, /^ноя/i, /^дек/i], longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY г.", LLL: "D MMMM YYYY г., LT", LLLL: "dddd, D MMMM YYYY г., LT" }, calendar: { sameDay: "[Сегодня в] LT", nextDay: "[Завтра в] LT", lastDay: "[Вчера в] LT", nextWeek: function () { return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT" }, lastWeek: function (a) { if (a.week() === this.week()) return 2 === this.day() ? "[Во] dddd [в] LT" : "[В] dddd [в] LT"; switch (this.day()) { case 0: return "[В прошлое] dddd [в] LT"; case 1: case 2: case 4: return "[В прошлый] dddd [в] LT"; case 3: case 5: case 6: return "[В прошлую] dddd [в] LT" } }, sameElse: "L" }, relativeTime: { future: "через %s", past: "%s назад", s: "несколько секунд", m: c, mm: c, h: "час", hh: c, d: "день", dd: c, M: "месяц", MM: c, y: "год", yy: c }, meridiemParse: /ночи|утра|дня|вечера/i, isPM: function (a) { return /^(дня|вечера)$/.test(a) }, meridiem: function (a) { return 4 > a ? "ночи" : 12 > a ? "утра" : 17 > a ? "дня" : "вечера" }, ordinalParse: /\d{1,2}-(й|го|я)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": return a + "-й"; case "D": return a + "-го"; case "w": case "W": return a + "-я"; default: return a } }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { function b(a) { return a > 1 && 5 > a } function c(a, c, d, e) { var f = a + " "; switch (d) { case "s": return c || e ? "pár sekúnd" : "pár sekundami"; case "m": return c ? "minúta" : e ? "minútu" : "minútou"; case "mm": return c || e ? f + (b(a) ? "minúty" : "minút") : f + "minútami"; break; case "h": return c ? "hodina" : e ? "hodinu" : "hodinou"; case "hh": return c || e ? f + (b(a) ? "hodiny" : "hodín") : f + "hodinami"; break; case "d": return c || e ? "deň" : "dňom"; case "dd": return c || e ? f + (b(a) ? "dni" : "dní") : f + "dňami"; break; case "M": return c || e ? "mesiac" : "mesiacom"; case "MM": return c || e ? f + (b(a) ? "mesiace" : "mesiacov") : f + "mesiacmi"; break; case "y": return c || e ? "rok" : "rokom"; case "yy": return c || e ? f + (b(a) ? "roky" : "rokov") : f + "rokmi" } } var d = "január_február_marec_apríl_máj_jún_júl_august_september_október_november_december".split("_"), e = "jan_feb_mar_apr_máj_jún_júl_aug_sep_okt_nov_dec".split("_"); return a.defineLocale("sk", { months: d, monthsShort: e, monthsParse: function (a, b) { var c, d = []; for (c = 0; 12 > c; c++) d[c] = new RegExp("^" + a[c] + "$|^" + b[c] + "$", "i"); return d }(d, e), weekdays: "nedeľa_pondelok_utorok_streda_štvrtok_piatok_sobota".split("_"), weekdaysShort: "ne_po_ut_st_št_pi_so".split("_"), weekdaysMin: "ne_po_ut_st_št_pi_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd D. MMMM YYYY LT" }, calendar: { sameDay: "[dnes o] LT", nextDay: "[zajtra o] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v nedeľu o] LT"; case 1: case 2: return "[v] dddd [o] LT"; case 3: return "[v stredu o] LT"; case 4: return "[vo štvrtok o] LT"; case 5: return "[v piatok o] LT"; case 6: return "[v sobotu o] LT" } }, lastDay: "[včera o] LT", lastWeek: function () { switch (this.day()) { case 0: return "[minulú nedeľu o] LT"; case 1: case 2: return "[minulý] dddd [o] LT"; case 3: return "[minulú stredu o] LT"; case 4: case 5: return "[minulý] dddd [o] LT"; case 6: return "[minulú sobotu o] LT" } }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pred %s", s: c, m: c, mm: c, h: c, hh: c, d: c, dd: c, M: c, MM: c, y: c, yy: c }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { function b(a, b, c) { var d = a + " "; switch (c) { case "m": return b ? "ena minuta" : "eno minuto"; case "mm": return d += 1 === a ? "minuta" : 2 === a ? "minuti" : 3 === a || 4 === a ? "minute" : "minut"; case "h": return b ? "ena ura" : "eno uro"; case "hh": return d += 1 === a ? "ura" : 2 === a ? "uri" : 3 === a || 4 === a ? "ure" : "ur"; case "dd": return d += 1 === a ? "dan" : "dni"; case "MM": return d += 1 === a ? "mesec" : 2 === a ? "meseca" : 3 === a || 4 === a ? "mesece" : "mesecev"; case "yy": return d += 1 === a ? "leto" : 2 === a ? "leti" : 3 === a || 4 === a ? "leta" : "let" } } return a.defineLocale("sl", { months: "januar_februar_marec_april_maj_junij_julij_avgust_september_oktober_november_december".split("_"), monthsShort: "jan._feb._mar._apr._maj._jun._jul._avg._sep._okt._nov._dec.".split("_"), weekdays: "nedelja_ponedeljek_torek_sreda_četrtek_petek_sobota".split("_"), weekdaysShort: "ned._pon._tor._sre._čet._pet._sob.".split("_"), weekdaysMin: "ne_po_to_sr_če_pe_so".split("_"), longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danes ob] LT", nextDay: "[jutri ob] LT", nextWeek: function () { switch (this.day()) { case 0: return "[v] [nedeljo] [ob] LT"; case 3: return "[v] [sredo] [ob] LT"; case 6: return "[v] [soboto] [ob] LT"; case 1: case 2: case 4: case 5: return "[v] dddd [ob] LT" } }, lastDay: "[včeraj ob] LT", lastWeek: function () { switch (this.day()) { case 0: case 3: case 6: return "[prejšnja] dddd [ob] LT"; case 1: case 2: case 4: case 5: return "[prejšnji] dddd [ob] LT" } }, sameElse: "L" }, relativeTime: { future: "čez %s", past: "%s nazaj", s: "nekaj sekund", m: b, mm: b, h: b, hh: b, d: "en dan", dd: b, M: "en mesec", MM: b, y: "eno leto", yy: b }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("sq", { months: "Janar_Shkurt_Mars_Prill_Maj_Qershor_Korrik_Gusht_Shtator_Tetor_Nëntor_Dhjetor".split("_"), monthsShort: "Jan_Shk_Mar_Pri_Maj_Qer_Kor_Gus_Sht_Tet_Nën_Dhj".split("_"), weekdays: "E Diel_E Hënë_E Martë_E Mërkurë_E Enjte_E Premte_E Shtunë".split("_"), weekdaysShort: "Die_Hën_Mar_Mër_Enj_Pre_Sht".split("_"), weekdaysMin: "D_H_Ma_Më_E_P_Sh".split("_"), meridiemParse: /PD|MD/, isPM: function (a) { return "M" === a.charAt(0) }, meridiem: function (a) { return 12 > a ? "PD" : "MD" }, longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[Sot në] LT", nextDay: "[Nesër në] LT", nextWeek: "dddd [në] LT", lastDay: "[Dje në] LT", lastWeek: "dddd [e kaluar në] LT", sameElse: "L" }, relativeTime: { future: "në %s", past: "%s më parë", s: "disa sekonda", m: "një minutë", mm: "%d minuta", h: "një orë", hh: "%d orë", d: "një ditë", dd: "%d ditë", M: "një muaj", MM: "%d muaj", y: "një vit", yy: "%d vite" }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { var b = { words: { m: ["један минут", "једне минуте"], mm: ["минут", "минуте", "минута"], h: ["један сат", "једног сата"], hh: ["сат", "сата", "сати"], dd: ["дан", "дана", "дана"], MM: ["месец", "месеца", "месеци"], yy: ["година", "године", "година"] }, correctGrammaticalCase: function (a, b) { return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2] }, translate: function (a, c, d) { var e = b.words[d]; return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e) } }; return a.defineLocale("sr-cyrl", { months: ["јануар", "фебруар", "март", "април", "мај", "јун", "јул", "август", "септембар", "октобар", "новембар", "децембар"], monthsShort: ["јан.", "феб.", "мар.", "апр.", "мај", "јун", "јул", "авг.", "сеп.", "окт.", "нов.", "дец."], weekdays: ["недеља", "понедељак", "уторак", "среда", "четвртак", "петак", "субота"], weekdaysShort: ["нед.", "пон.", "уто.", "сре.", "чет.", "пет.", "суб."], weekdaysMin: ["не", "по", "ут", "ср", "че", "пе", "су"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[данас у] LT", nextDay: "[сутра у] LT", nextWeek: function () { switch (this.day()) { case 0: return "[у] [недељу] [у] LT"; case 3: return "[у] [среду] [у] LT"; case 6: return "[у] [суботу] [у] LT"; case 1: case 2: case 4: case 5: return "[у] dddd [у] LT" } }, lastDay: "[јуче у] LT", lastWeek: function () { var a = ["[прошле] [недеље] [у] LT", "[прошлог] [понедељка] [у] LT", "[прошлог] [уторка] [у] LT", "[прошле] [среде] [у] LT", "[прошлог] [четвртка] [у] LT", "[прошлог] [петка] [у] LT", "[прошле] [суботе] [у] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "за %s", past: "пре %s", s: "неколико секунди", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "дан", dd: b.translate, M: "месец", MM: b.translate, y: "годину", yy: b.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { var b = { words: { m: ["jedan minut", "jedne minute"], mm: ["minut", "minute", "minuta"], h: ["jedan sat", "jednog sata"], hh: ["sat", "sata", "sati"], dd: ["dan", "dana", "dana"], MM: ["mesec", "meseca", "meseci"], yy: ["godina", "godine", "godina"] }, correctGrammaticalCase: function (a, b) { return 1 === a ? b[0] : a >= 2 && 4 >= a ? b[1] : b[2] }, translate: function (a, c, d) { var e = b.words[d]; return 1 === d.length ? c ? e[0] : e[1] : a + " " + b.correctGrammaticalCase(a, e) } }; return a.defineLocale("sr", { months: ["januar", "februar", "mart", "april", "maj", "jun", "jul", "avgust", "septembar", "oktobar", "novembar", "decembar"], monthsShort: ["jan.", "feb.", "mar.", "apr.", "maj", "jun", "jul", "avg.", "sep.", "okt.", "nov.", "dec."], weekdays: ["nedelja", "ponedeljak", "utorak", "sreda", "četvrtak", "petak", "subota"], weekdaysShort: ["ned.", "pon.", "uto.", "sre.", "čet.", "pet.", "sub."], weekdaysMin: ["ne", "po", "ut", "sr", "če", "pe", "su"], longDateFormat: { LT: "H:mm", LTS: "LT:ss", L: "DD. MM. YYYY", LL: "D. MMMM YYYY", LLL: "D. MMMM YYYY LT", LLLL: "dddd, D. MMMM YYYY LT" }, calendar: { sameDay: "[danas u] LT", nextDay: "[sutra u] LT", nextWeek: function () { switch (this.day()) { case 0: return "[u] [nedelju] [u] LT"; case 3: return "[u] [sredu] [u] LT"; case 6: return "[u] [subotu] [u] LT"; case 1: case 2: case 4: case 5: return "[u] dddd [u] LT" } }, lastDay: "[juče u] LT", lastWeek: function () { var a = ["[prošle] [nedelje] [u] LT", "[prošlog] [ponedeljka] [u] LT", "[prošlog] [utorka] [u] LT", "[prošle] [srede] [u] LT", "[prošlog] [četvrtka] [u] LT", "[prošlog] [petka] [u] LT", "[prošle] [subote] [u] LT"]; return a[this.day()] }, sameElse: "L" }, relativeTime: { future: "za %s", past: "pre %s", s: "nekoliko sekundi", m: b.translate, mm: b.translate, h: b.translate, hh: b.translate, d: "dan", dd: b.translate, M: "mesec", MM: b.translate, y: "godinu", yy: b.translate }, ordinalParse: /\d{1,2}\./, ordinal: "%d.", week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("sv", { months: "januari_februari_mars_april_maj_juni_juli_augusti_september_oktober_november_december".split("_"), monthsShort: "jan_feb_mar_apr_maj_jun_jul_aug_sep_okt_nov_dec".split("_"), weekdays: "söndag_måndag_tisdag_onsdag_torsdag_fredag_lördag".split("_"), weekdaysShort: "sön_mån_tis_ons_tor_fre_lör".split("_"), weekdaysMin: "sö_må_ti_on_to_fr_lö".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "YYYY-MM-DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[Idag] LT", nextDay: "[Imorgon] LT", lastDay: "[Igår] LT", nextWeek: "dddd LT", lastWeek: "[Förra] dddd[en] LT", sameElse: "L" }, relativeTime: { future: "om %s", past: "för %s sedan", s: "några sekunder", m: "en minut", mm: "%d minuter", h: "en timme", hh: "%d timmar", d: "en dag", dd: "%d dagar", M: "en månad", MM: "%d månader", y: "ett år", yy: "%d år" }, ordinalParse: /\d{1,2}(e|a)/, ordinal: function (a) { var b = a % 10, c = 1 === ~~(a % 100 / 10) ? "e" : 1 === b ? "a" : 2 === b ? "a" : "e"; return a + c }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("ta", { months: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), monthsShort: "ஜனவரி_பிப்ரவரி_மார்ச்_ஏப்ரல்_மே_ஜூன்_ஜூலை_ஆகஸ்ட்_செப்டெம்பர்_அக்டோபர்_நவம்பர்_டிசம்பர்".split("_"), weekdays: "ஞாயிற்றுக்கிழமை_திங்கட்கிழமை_செவ்வாய்கிழமை_புதன்கிழமை_வியாழக்கிழமை_வெள்ளிக்கிழமை_சனிக்கிழமை".split("_"), weekdaysShort: "ஞாயிறு_திங்கள்_செவ்வாய்_புதன்_வியாழன்_வெள்ளி_சனி".split("_"), weekdaysMin: "ஞா_தி_செ_பு_வி_வெ_ச".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY, LT", LLLL: "dddd, D MMMM YYYY, LT" }, calendar: { sameDay: "[இன்று] LT", nextDay: "[நாளை] LT", nextWeek: "dddd, LT", lastDay: "[நேற்று] LT", lastWeek: "[கடந்த வாரம்] dddd, LT", sameElse: "L" }, relativeTime: { future: "%s இல்", past: "%s முன்", s: "ஒரு சில விநாடிகள்", m: "ஒரு நிமிடம்", mm: "%d நிமிடங்கள்", h: "ஒரு மணி நேரம்", hh: "%d மணி நேரம்", d: "ஒரு நாள்", dd: "%d நாட்கள்", M: "ஒரு மாதம்", MM: "%d மாதங்கள்", y: "ஒரு வருடம்", yy: "%d ஆண்டுகள்" }, ordinalParse: /\d{1,2}வது/, ordinal: function (a) { return a + "வது" }, meridiemParse: /யாமம்|வைகறை|காலை|நண்பகல்|எற்பாடு|மாலை/, meridiem: function (a) { return 2 > a ? " யாமம்" : 6 > a ? " வைகறை" : 10 > a ? " காலை" : 14 > a ? " நண்பகல்" : 18 > a ? " எற்பாடு" : 22 > a ? " மாலை" : " யாமம்" }, meridiemHour: function (a, b) { return 12 === a && (a = 0), "யாமம்" === b ? 2 > a ? a : a + 12 : "வைகறை" === b || "காலை" === b ? a : "நண்பகல்" === b && a >= 10 ? a : a + 12 }, week: { dow: 0, doy: 6 } }) }), function (a) { a(vb) }(function (a) {
        return a.defineLocale("th", {
            months: "มกราคม_กุมภาพันธ์_มีนาคม_เมษายน_พฤษภาคม_มิถุนายน_กรกฎาคม_สิงหาคม_กันยายน_ตุลาคม_พฤศจิกายน_ธันวาคม".split("_"), monthsShort: "มกรา_กุมภา_มีนา_เมษา_พฤษภา_มิถุนา_กรกฎา_สิงหา_กันยา_ตุลา_พฤศจิกา_ธันวา".split("_"), weekdays: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัสบดี_ศุกร์_เสาร์".split("_"), weekdaysShort: "อาทิตย์_จันทร์_อังคาร_พุธ_พฤหัส_ศุกร์_เสาร์".split("_"), weekdaysMin: "อา._จ._อ._พ._พฤ._ศ._ส.".split("_"), longDateFormat: { LT: "H นาฬิกา m นาที", LTS: "LT s วินาที", L: "YYYY/MM/DD", LL: "D MMMM YYYY", LLL: "D MMMM YYYY เวลา LT", LLLL: "วันddddที่ D MMMM YYYY เวลา LT" }, meridiemParse: /ก่อนเที่ยง|หลังเที่ยง/, isPM: function (a) {
                return "หลังเที่ยง" === a
            }, meridiem: function (a) { return 12 > a ? "ก่อนเที่ยง" : "หลังเที่ยง" }, calendar: { sameDay: "[วันนี้ เวลา] LT", nextDay: "[พรุ่งนี้ เวลา] LT", nextWeek: "dddd[หน้า เวลา] LT", lastDay: "[เมื่อวานนี้ เวลา] LT", lastWeek: "[วัน]dddd[ที่แล้ว เวลา] LT", sameElse: "L" }, relativeTime: { future: "อีก %s", past: "%sที่แล้ว", s: "ไม่กี่วินาที", m: "1 นาที", mm: "%d นาที", h: "1 ชั่วโมง", hh: "%d ชั่วโมง", d: "1 วัน", dd: "%d วัน", M: "1 เดือน", MM: "%d เดือน", y: "1 ปี", yy: "%d ปี" }
        })
    }), function (a) { a(vb) }(function (a) { return a.defineLocale("tl-ph", { months: "Enero_Pebrero_Marso_Abril_Mayo_Hunyo_Hulyo_Agosto_Setyembre_Oktubre_Nobyembre_Disyembre".split("_"), monthsShort: "Ene_Peb_Mar_Abr_May_Hun_Hul_Ago_Set_Okt_Nob_Dis".split("_"), weekdays: "Linggo_Lunes_Martes_Miyerkules_Huwebes_Biyernes_Sabado".split("_"), weekdaysShort: "Lin_Lun_Mar_Miy_Huw_Biy_Sab".split("_"), weekdaysMin: "Li_Lu_Ma_Mi_Hu_Bi_Sab".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "MM/D/YYYY", LL: "MMMM D, YYYY", LLL: "MMMM D, YYYY LT", LLLL: "dddd, MMMM DD, YYYY LT" }, calendar: { sameDay: "[Ngayon sa] LT", nextDay: "[Bukas sa] LT", nextWeek: "dddd [sa] LT", lastDay: "[Kahapon sa] LT", lastWeek: "dddd [huling linggo] LT", sameElse: "L" }, relativeTime: { future: "sa loob ng %s", past: "%s ang nakalipas", s: "ilang segundo", m: "isang minuto", mm: "%d minuto", h: "isang oras", hh: "%d oras", d: "isang araw", dd: "%d araw", M: "isang buwan", MM: "%d buwan", y: "isang taon", yy: "%d taon" }, ordinalParse: /\d{1,2}/, ordinal: function (a) { return a }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { var b = { 1: "'inci", 5: "'inci", 8: "'inci", 70: "'inci", 80: "'inci", 2: "'nci", 7: "'nci", 20: "'nci", 50: "'nci", 3: "'üncü", 4: "'üncü", 100: "'üncü", 6: "'ncı", 9: "'uncu", 10: "'uncu", 30: "'uncu", 60: "'ıncı", 90: "'ıncı" }; return a.defineLocale("tr", { months: "Ocak_Şubat_Mart_Nisan_Mayıs_Haziran_Temmuz_Ağustos_Eylül_Ekim_Kasım_Aralık".split("_"), monthsShort: "Oca_Şub_Mar_Nis_May_Haz_Tem_Ağu_Eyl_Eki_Kas_Ara".split("_"), weekdays: "Pazar_Pazartesi_Salı_Çarşamba_Perşembe_Cuma_Cumartesi".split("_"), weekdaysShort: "Paz_Pts_Sal_Çar_Per_Cum_Cts".split("_"), weekdaysMin: "Pz_Pt_Sa_Ça_Pe_Cu_Ct".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd, D MMMM YYYY LT" }, calendar: { sameDay: "[bugün saat] LT", nextDay: "[yarın saat] LT", nextWeek: "[haftaya] dddd [saat] LT", lastDay: "[dün] LT", lastWeek: "[geçen hafta] dddd [saat] LT", sameElse: "L" }, relativeTime: { future: "%s sonra", past: "%s önce", s: "birkaç saniye", m: "bir dakika", mm: "%d dakika", h: "bir saat", hh: "%d saat", d: "bir gün", dd: "%d gün", M: "bir ay", MM: "%d ay", y: "bir yıl", yy: "%d yıl" }, ordinalParse: /\d{1,2}'(inci|nci|üncü|ncı|uncu|ıncı)/, ordinal: function (a) { if (0 === a) return a + "'ıncı"; var c = a % 10, d = a % 100 - c, e = a >= 100 ? 100 : null; return a + (b[c] || b[d] || b[e]) }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("tzm-latn", { months: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), monthsShort: "innayr_brˤayrˤ_marˤsˤ_ibrir_mayyw_ywnyw_ywlywz_ɣwšt_šwtanbir_ktˤwbrˤ_nwwanbir_dwjnbir".split("_"), weekdays: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysShort: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), weekdaysMin: "asamas_aynas_asinas_akras_akwas_asimwas_asiḍyas".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[asdkh g] LT", nextDay: "[aska g] LT", nextWeek: "dddd [g] LT", lastDay: "[assant g] LT", lastWeek: "dddd [g] LT", sameElse: "L" }, relativeTime: { future: "dadkh s yan %s", past: "yan %s", s: "imik", m: "minuḍ", mm: "%d minuḍ", h: "saɛa", hh: "%d tassaɛin", d: "ass", dd: "%d ossan", M: "ayowr", MM: "%d iyyirn", y: "asgas", yy: "%d isgasn" }, week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("tzm", { months: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), monthsShort: "ⵉⵏⵏⴰⵢⵔ_ⴱⵕⴰⵢⵕ_ⵎⴰⵕⵚ_ⵉⴱⵔⵉⵔ_ⵎⴰⵢⵢⵓ_ⵢⵓⵏⵢⵓ_ⵢⵓⵍⵢⵓⵣ_ⵖⵓⵛⵜ_ⵛⵓⵜⴰⵏⴱⵉⵔ_ⴽⵟⵓⴱⵕ_ⵏⵓⵡⴰⵏⴱⵉⵔ_ⴷⵓⵊⵏⴱⵉⵔ".split("_"), weekdays: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysShort: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), weekdaysMin: "ⴰⵙⴰⵎⴰⵙ_ⴰⵢⵏⴰⵙ_ⴰⵙⵉⵏⴰⵙ_ⴰⴽⵔⴰⵙ_ⴰⴽⵡⴰⵙ_ⴰⵙⵉⵎⵡⴰⵙ_ⴰⵙⵉⴹⵢⴰⵙ".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "dddd D MMMM YYYY LT" }, calendar: { sameDay: "[ⴰⵙⴷⵅ ⴴ] LT", nextDay: "[ⴰⵙⴽⴰ ⴴ] LT", nextWeek: "dddd [ⴴ] LT", lastDay: "[ⴰⵚⴰⵏⵜ ⴴ] LT", lastWeek: "dddd [ⴴ] LT", sameElse: "L" }, relativeTime: { future: "ⴷⴰⴷⵅ ⵙ ⵢⴰⵏ %s", past: "ⵢⴰⵏ %s", s: "ⵉⵎⵉⴽ", m: "ⵎⵉⵏⵓⴺ", mm: "%d ⵎⵉⵏⵓⴺ", h: "ⵙⴰⵄⴰ", hh: "%d ⵜⴰⵙⵙⴰⵄⵉⵏ", d: "ⴰⵙⵙ", dd: "%d oⵙⵙⴰⵏ", M: "ⴰⵢoⵓⵔ", MM: "%d ⵉⵢⵢⵉⵔⵏ", y: "ⴰⵙⴳⴰⵙ", yy: "%d ⵉⵙⴳⴰⵙⵏ" }, week: { dow: 6, doy: 12 } }) }), function (a) { a(vb) }(function (a) { function b(a, b) { var c = a.split("_"); return b % 10 === 1 && b % 100 !== 11 ? c[0] : b % 10 >= 2 && 4 >= b % 10 && (10 > b % 100 || b % 100 >= 20) ? c[1] : c[2] } function c(a, c, d) { var e = { mm: "хвилина_хвилини_хвилин", hh: "година_години_годин", dd: "день_дні_днів", MM: "місяць_місяці_місяців", yy: "рік_роки_років" }; return "m" === d ? c ? "хвилина" : "хвилину" : "h" === d ? c ? "година" : "годину" : a + " " + b(e[d], +a) } function d(a, b) { var c = { nominative: "січень_лютий_березень_квітень_травень_червень_липень_серпень_вересень_жовтень_листопад_грудень".split("_"), accusative: "січня_лютого_березня_квітня_травня_червня_липня_серпня_вересня_жовтня_листопада_грудня".split("_") }, d = /D[oD]? *MMMM?/.test(b) ? "accusative" : "nominative"; return c[d][a.month()] } function e(a, b) { var c = { nominative: "неділя_понеділок_вівторок_середа_четвер_п’ятниця_субота".split("_"), accusative: "неділю_понеділок_вівторок_середу_четвер_п’ятницю_суботу".split("_"), genitive: "неділі_понеділка_вівторка_середи_четверга_п’ятниці_суботи".split("_") }, d = /(\[[ВвУу]\]) ?dddd/.test(b) ? "accusative" : /\[?(?:минулої|наступної)? ?\] ?dddd/.test(b) ? "genitive" : "nominative"; return c[d][a.day()] } function f(a) { return function () { return a + "о" + (11 === this.hours() ? "б" : "") + "] LT" } } return a.defineLocale("uk", { months: d, monthsShort: "січ_лют_бер_квіт_трав_черв_лип_серп_вер_жовт_лист_груд".split("_"), weekdays: e, weekdaysShort: "нд_пн_вт_ср_чт_пт_сб".split("_"), weekdaysMin: "нд_пн_вт_ср_чт_пт_сб".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD.MM.YYYY", LL: "D MMMM YYYY р.", LLL: "D MMMM YYYY р., LT", LLLL: "dddd, D MMMM YYYY р., LT" }, calendar: { sameDay: f("[Сьогодні "), nextDay: f("[Завтра "), lastDay: f("[Вчора "), nextWeek: f("[У] dddd ["), lastWeek: function () { switch (this.day()) { case 0: case 3: case 5: case 6: return f("[Минулої] dddd [").call(this); case 1: case 2: case 4: return f("[Минулого] dddd [").call(this) } }, sameElse: "L" }, relativeTime: { future: "за %s", past: "%s тому", s: "декілька секунд", m: c, mm: c, h: "годину", hh: c, d: "день", dd: c, M: "місяць", MM: c, y: "рік", yy: c }, meridiemParse: /ночі|ранку|дня|вечора/, isPM: function (a) { return /^(дня|вечора)$/.test(a) }, meridiem: function (a) { return 4 > a ? "ночі" : 12 > a ? "ранку" : 17 > a ? "дня" : "вечора" }, ordinalParse: /\d{1,2}-(й|го)/, ordinal: function (a, b) { switch (b) { case "M": case "d": case "DDD": case "w": case "W": return a + "-й"; case "D": return a + "-го"; default: return a } }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("uz", { months: "январь_февраль_март_апрель_май_июнь_июль_август_сентябрь_октябрь_ноябрь_декабрь".split("_"), monthsShort: "янв_фев_мар_апр_май_июн_июл_авг_сен_окт_ноя_дек".split("_"), weekdays: "Якшанба_Душанба_Сешанба_Чоршанба_Пайшанба_Жума_Шанба".split("_"), weekdaysShort: "Якш_Душ_Сеш_Чор_Пай_Жум_Шан".split("_"), weekdaysMin: "Як_Ду_Се_Чо_Па_Жу_Ша".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM YYYY", LLL: "D MMMM YYYY LT", LLLL: "D MMMM YYYY, dddd LT" }, calendar: { sameDay: "[Бугун соат] LT [да]", nextDay: "[Эртага] LT [да]", nextWeek: "dddd [куни соат] LT [да]", lastDay: "[Кеча соат] LT [да]", lastWeek: "[Утган] dddd [куни соат] LT [да]", sameElse: "L" }, relativeTime: { future: "Якин %s ичида", past: "Бир неча %s олдин", s: "фурсат", m: "бир дакика", mm: "%d дакика", h: "бир соат", hh: "%d соат", d: "бир кун", dd: "%d кун", M: "бир ой", MM: "%d ой", y: "бир йил", yy: "%d йил" }, week: { dow: 1, doy: 7 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("vi", { months: "tháng 1_tháng 2_tháng 3_tháng 4_tháng 5_tháng 6_tháng 7_tháng 8_tháng 9_tháng 10_tháng 11_tháng 12".split("_"), monthsShort: "Th01_Th02_Th03_Th04_Th05_Th06_Th07_Th08_Th09_Th10_Th11_Th12".split("_"), weekdays: "chủ nhật_thứ hai_thứ ba_thứ tư_thứ năm_thứ sáu_thứ bảy".split("_"), weekdaysShort: "CN_T2_T3_T4_T5_T6_T7".split("_"), weekdaysMin: "CN_T2_T3_T4_T5_T6_T7".split("_"), longDateFormat: { LT: "HH:mm", LTS: "LT:ss", L: "DD/MM/YYYY", LL: "D MMMM [năm] YYYY", LLL: "D MMMM [năm] YYYY LT", LLLL: "dddd, D MMMM [năm] YYYY LT", l: "DD/M/YYYY", ll: "D MMM YYYY", lll: "D MMM YYYY LT", llll: "ddd, D MMM YYYY LT" }, calendar: { sameDay: "[Hôm nay lúc] LT", nextDay: "[Ngày mai lúc] LT", nextWeek: "dddd [tuần tới lúc] LT", lastDay: "[Hôm qua lúc] LT", lastWeek: "dddd [tuần rồi lúc] LT", sameElse: "L" }, relativeTime: { future: "%s tới", past: "%s trước", s: "vài giây", m: "một phút", mm: "%d phút", h: "một giờ", hh: "%d giờ", d: "một ngày", dd: "%d ngày", M: "một tháng", MM: "%d tháng", y: "một năm", yy: "%d năm" }, ordinalParse: /\d{1,2}/, ordinal: function (a) { return a }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("zh-cn", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "周日_周一_周二_周三_周四_周五_周六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah点mm", LTS: "Ah点m分s秒", L: "YYYY-MM-DD", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY-MM-DD", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /凌晨|早上|上午|中午|下午|晚上/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "凌晨" === b || "早上" === b || "上午" === b ? a : "下午" === b || "晚上" === b ? a + 12 : a >= 11 ? a : a + 12 }, meridiem: function (a, b) { var c = 100 * a + b; return 600 > c ? "凌晨" : 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上" }, calendar: { sameDay: function () { return 0 === this.minutes() ? "[今天]Ah[点整]" : "[今天]LT" }, nextDay: function () { return 0 === this.minutes() ? "[明天]Ah[点整]" : "[明天]LT" }, lastDay: function () { return 0 === this.minutes() ? "[昨天]Ah[点整]" : "[昨天]LT" }, nextWeek: function () { var b, c; return b = a().startOf("week"), c = this.unix() - b.unix() >= 604800 ? "[下]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, lastWeek: function () { var b, c; return b = a().startOf("week"), c = this.unix() < b.unix() ? "[上]" : "[本]", 0 === this.minutes() ? c + "dddAh点整" : c + "dddAh点mm" }, sameElse: "LL" }, ordinalParse: /\d{1,2}(日|月|周)/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; case "M": return a + "月"; case "w": case "W": return a + "周"; default: return a } }, relativeTime: { future: "%s内", past: "%s前", s: "几秒", m: "1分钟", mm: "%d分钟", h: "1小时", hh: "%d小时", d: "1天", dd: "%d天", M: "1个月", MM: "%d个月", y: "1年", yy: "%d年" }, week: { dow: 1, doy: 4 } }) }), function (a) { a(vb) }(function (a) { return a.defineLocale("zh-tw", { months: "一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"), monthsShort: "1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"), weekdays: "星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"), weekdaysShort: "週日_週一_週二_週三_週四_週五_週六".split("_"), weekdaysMin: "日_一_二_三_四_五_六".split("_"), longDateFormat: { LT: "Ah點mm", LTS: "Ah點m分s秒", L: "YYYY年MMMD日", LL: "YYYY年MMMD日", LLL: "YYYY年MMMD日LT", LLLL: "YYYY年MMMD日ddddLT", l: "YYYY年MMMD日", ll: "YYYY年MMMD日", lll: "YYYY年MMMD日LT", llll: "YYYY年MMMD日ddddLT" }, meridiemParse: /早上|上午|中午|下午|晚上/, meridiemHour: function (a, b) { return 12 === a && (a = 0), "早上" === b || "上午" === b ? a : "中午" === b ? a >= 11 ? a : a + 12 : "下午" === b || "晚上" === b ? a + 12 : void 0 }, meridiem: function (a, b) { var c = 100 * a + b; return 900 > c ? "早上" : 1130 > c ? "上午" : 1230 > c ? "中午" : 1800 > c ? "下午" : "晚上" }, calendar: { sameDay: "[今天]LT", nextDay: "[明天]LT", nextWeek: "[下]ddddLT", lastDay: "[昨天]LT", lastWeek: "[上]ddddLT", sameElse: "L" }, ordinalParse: /\d{1,2}(日|月|週)/, ordinal: function (a, b) { switch (b) { case "d": case "D": case "DDD": return a + "日"; case "M": return a + "月"; case "w": case "W": return a + "週"; default: return a } }, relativeTime: { future: "%s內", past: "%s前", s: "幾秒", m: "一分鐘", mm: "%d分鐘", h: "一小時", hh: "%d小時", d: "一天", dd: "%d天", M: "一個月", MM: "%d個月", y: "一年", yy: "%d年" } }) }), vb.locale("en"), Lb ? module.exports = vb : "function" == typeof define && define.amd ? (define(function (a, b, c) { return c.config && c.config() && c.config().noGlobal === !0 && (zb.moment = wb), vb }), ub(!0)) : ub()
}).call(this);;
//! moment-timezone.js
//! version : 0.5.10
//! Copyright (c) JS Foundation and other contributors
//! license : MIT
//! github.com/moment/moment-timezone

(function (root, factory) {
    "use strict";

    /*global define*/
    if (typeof define === 'function' && define.amd) {
        define(['moment'], factory);                 // AMD
    } else if (typeof module === 'object' && module.exports) {
        module.exports = factory(require('moment')); // Node
    } else {
        factory(root.moment);                        // Browser
    }
}(this, function (moment) {
    "use strict";

    // Do not load moment-timezone a second time.
    if (moment.tz !== undefined) {
        logError('Moment Timezone ' + moment.tz.version + ' was already loaded ' + (moment.tz.dataVersion ? 'with data from ' : 'without any data') + moment.tz.dataVersion);
        return moment;
    }

    var VERSION = "0.5.10",
		zones = {},
		links = {},
		names = {},
		guesses = {},
		cachedGuess,

		momentVersion = moment.version.split('.'),
		major = +momentVersion[0],
		minor = +momentVersion[1];

    // Moment.js version check
    if (major < 2 || (major === 2 && minor < 6)) {
        logError('Moment Timezone requires Moment.js >= 2.6.0. You are using Moment.js ' + moment.version + '. See momentjs.com');
    }

    /************************************
		Unpacking
	************************************/

    function charCodeToInt(charCode) {
        if (charCode > 96) {
            return charCode - 87;
        } else if (charCode > 64) {
            return charCode - 29;
        }
        return charCode - 48;
    }

    function unpackBase60(string) {
        var i = 0,
			parts = string.split('.'),
			whole = parts[0],
			fractional = parts[1] || '',
			multiplier = 1,
			num,
			out = 0,
			sign = 1;

        // handle negative numbers
        if (string.charCodeAt(0) === 45) {
            i = 1;
            sign = -1;
        }

        // handle digits before the decimal
        for (i; i < whole.length; i++) {
            num = charCodeToInt(whole.charCodeAt(i));
            out = 60 * out + num;
        }

        // handle digits after the decimal
        for (i = 0; i < fractional.length; i++) {
            multiplier = multiplier / 60;
            num = charCodeToInt(fractional.charCodeAt(i));
            out += num * multiplier;
        }

        return out * sign;
    }

    function arrayToInt(array) {
        for (var i = 0; i < array.length; i++) {
            array[i] = unpackBase60(array[i]);
        }
    }

    function intToUntil(array, length) {
        for (var i = 0; i < length; i++) {
            array[i] = Math.round((array[i - 1] || 0) + (array[i] * 60000)); // minutes to milliseconds
        }

        array[length - 1] = Infinity;
    }

    function mapIndices(source, indices) {
        var out = [], i;

        for (i = 0; i < indices.length; i++) {
            out[i] = source[indices[i]];
        }

        return out;
    }

    function unpack(string) {
        var data = string.split('|'),
			offsets = data[2].split(' '),
			indices = data[3].split(''),
			untils = data[4].split(' ');

        arrayToInt(offsets);
        arrayToInt(indices);
        arrayToInt(untils);

        intToUntil(untils, indices.length);

        return {
            name: data[0],
            abbrs: mapIndices(data[1].split(' '), indices),
            offsets: mapIndices(offsets, indices),
            untils: untils,
            population: data[5] | 0
        };
    }

    /************************************
		Zone object
	************************************/

    function Zone(packedString) {
        if (packedString) {
            this._set(unpack(packedString));
        }
    }

    Zone.prototype = {
        _set: function (unpacked) {
            this.name = unpacked.name;
            this.abbrs = unpacked.abbrs;
            this.untils = unpacked.untils;
            this.offsets = unpacked.offsets;
            this.population = unpacked.population;
        },

        _index: function (timestamp) {
            var target = +timestamp,
				untils = this.untils,
				i;

            for (i = 0; i < untils.length; i++) {
                if (target < untils[i]) {
                    return i;
                }
            }
        },

        parse: function (timestamp) {
            var target = +timestamp,
				offsets = this.offsets,
				untils = this.untils,
				max = untils.length - 1,
				offset, offsetNext, offsetPrev, i;

            for (i = 0; i < max; i++) {
                offset = offsets[i];
                offsetNext = offsets[i + 1];
                offsetPrev = offsets[i ? i - 1 : i];

                if (offset < offsetNext && tz.moveAmbiguousForward) {
                    offset = offsetNext;
                } else if (offset > offsetPrev && tz.moveInvalidForward) {
                    offset = offsetPrev;
                }

                if (target < untils[i] - (offset * 60000)) {
                    return offsets[i];
                }
            }

            return offsets[max];
        },

        abbr: function (mom) {
            return this.abbrs[this._index(mom)];
        },

        offset: function (mom) {
            return this.offsets[this._index(mom)];
        }
    };

    /************************************
		Current Timezone
	************************************/

    function OffsetAt(at) {
        var timeString = at.toTimeString();
        var abbr = timeString.match(/\([a-z ]+\)/i);
        if (abbr && abbr[0]) {
            // 17:56:31 GMT-0600 (CST)
            // 17:56:31 GMT-0600 (Central Standard Time)
            abbr = abbr[0].match(/[A-Z]/g);
            abbr = abbr ? abbr.join('') : undefined;
        } else {
            // 17:56:31 CST
            // 17:56:31 GMT+0800 (台北標準時間)
            abbr = timeString.match(/[A-Z]{3,5}/g);
            abbr = abbr ? abbr[0] : undefined;
        }

        if (abbr === 'GMT') {
            abbr = undefined;
        }

        this.at = +at;
        this.abbr = abbr;
        this.offset = at.getTimezoneOffset();
    }

    function ZoneScore(zone) {
        this.zone = zone;
        this.offsetScore = 0;
        this.abbrScore = 0;
    }

    ZoneScore.prototype.scoreOffsetAt = function (offsetAt) {
        this.offsetScore += Math.abs(this.zone.offset(offsetAt.at) - offsetAt.offset);
        if (this.zone.abbr(offsetAt.at).replace(/[^A-Z]/g, '') !== offsetAt.abbr) {
            this.abbrScore++;
        }
    };

    function findChange(low, high) {
        var mid, diff;

        while ((diff = ((high.at - low.at) / 12e4 | 0) * 6e4)) {
            mid = new OffsetAt(new Date(low.at + diff));
            if (mid.offset === low.offset) {
                low = mid;
            } else {
                high = mid;
            }
        }

        return low;
    }

    function userOffsets() {
        var startYear = new Date().getFullYear() - 2,
			last = new OffsetAt(new Date(startYear, 0, 1)),
			offsets = [last],
			change, next, i;

        for (i = 1; i < 48; i++) {
            next = new OffsetAt(new Date(startYear, i, 1));
            if (next.offset !== last.offset) {
                change = findChange(last, next);
                offsets.push(change);
                offsets.push(new OffsetAt(new Date(change.at + 6e4)));
            }
            last = next;
        }

        for (i = 0; i < 4; i++) {
            offsets.push(new OffsetAt(new Date(startYear + i, 0, 1)));
            offsets.push(new OffsetAt(new Date(startYear + i, 6, 1)));
        }

        return offsets;
    }

    function sortZoneScores(a, b) {
        if (a.offsetScore !== b.offsetScore) {
            return a.offsetScore - b.offsetScore;
        }
        if (a.abbrScore !== b.abbrScore) {
            return a.abbrScore - b.abbrScore;
        }
        return b.zone.population - a.zone.population;
    }

    function addToGuesses(name, offsets) {
        var i, offset;
        arrayToInt(offsets);
        for (i = 0; i < offsets.length; i++) {
            offset = offsets[i];
            guesses[offset] = guesses[offset] || {};
            guesses[offset][name] = true;
        }
    }

    function guessesForUserOffsets(offsets) {
        var offsetsLength = offsets.length,
			filteredGuesses = {},
			out = [],
			i, j, guessesOffset;

        for (i = 0; i < offsetsLength; i++) {
            guessesOffset = guesses[offsets[i].offset] || {};
            for (j in guessesOffset) {
                if (guessesOffset.hasOwnProperty(j)) {
                    filteredGuesses[j] = true;
                }
            }
        }

        for (i in filteredGuesses) {
            if (filteredGuesses.hasOwnProperty(i)) {
                out.push(names[i]);
            }
        }

        return out;
    }

    function rebuildGuess() {

        // use Intl API when available and returning valid time zone
        try {
            var intlName = Intl.DateTimeFormat().resolvedOptions().timeZone;
            if (intlName) {
                var name = names[normalizeName(intlName)];
                if (name) {
                    return name;
                }
                logError("Moment Timezone found " + intlName + " from the Intl api, but did not have that data loaded.");
            }
        } catch (e) {
            // Intl unavailable, fall back to manual guessing.
        }

        var offsets = userOffsets(),
			offsetsLength = offsets.length,
			guesses = guessesForUserOffsets(offsets),
			zoneScores = [],
			zoneScore, i, j;

        for (i = 0; i < guesses.length; i++) {
            zoneScore = new ZoneScore(getZone(guesses[i]), offsetsLength);
            for (j = 0; j < offsetsLength; j++) {
                zoneScore.scoreOffsetAt(offsets[j]);
            }
            zoneScores.push(zoneScore);
        }

        zoneScores.sort(sortZoneScores);

        return zoneScores.length > 0 ? zoneScores[0].zone.name : undefined;
    }

    function guess(ignoreCache) {
        if (!cachedGuess || ignoreCache) {
            cachedGuess = rebuildGuess();
        }
        return cachedGuess;
    }

    /************************************
		Global Methods
	************************************/

    function normalizeName(name) {
        return (name || '').toLowerCase().replace(/\//g, '_');
    }

    function addZone(packed) {
        var i, name, split, normalized;

        if (typeof packed === "string") {
            packed = [packed];
        }

        for (i = 0; i < packed.length; i++) {
            split = packed[i].split('|');
            name = split[0];
            normalized = normalizeName(name);
            zones[normalized] = packed[i];
            names[normalized] = name;
            if (split[5]) {
                addToGuesses(normalized, split[2].split(' '));
            }
        }
    }

    function getZone(name, caller) {
        name = normalizeName(name);

        var zone = zones[name];
        var link;

        if (zone instanceof Zone) {
            return zone;
        }

        if (typeof zone === 'string') {
            zone = new Zone(zone);
            zones[name] = zone;
            return zone;
        }

        // Pass getZone to prevent recursion more than 1 level deep
        if (links[name] && caller !== getZone && (link = getZone(links[name], getZone))) {
            zone = zones[name] = new Zone();
            zone._set(link);
            zone.name = names[name];
            return zone;
        }

        return null;
    }

    function getNames() {
        var i, out = [];

        for (i in names) {
            if (names.hasOwnProperty(i) && (zones[i] || zones[links[i]]) && names[i]) {
                out.push(names[i]);
            }
        }

        return out.sort();
    }

    function addLink(aliases) {
        var i, alias, normal0, normal1;

        if (typeof aliases === "string") {
            aliases = [aliases];
        }

        for (i = 0; i < aliases.length; i++) {
            alias = aliases[i].split('|');

            normal0 = normalizeName(alias[0]);
            normal1 = normalizeName(alias[1]);

            links[normal0] = normal1;
            names[normal0] = alias[0];

            links[normal1] = normal0;
            names[normal1] = alias[1];
        }
    }

    function loadData(data) {
        addZone(data.zones);
        addLink(data.links);
        tz.dataVersion = data.version;
    }

    function zoneExists(name) {
        if (!zoneExists.didShowError) {
            zoneExists.didShowError = true;
            logError("moment.tz.zoneExists('" + name + "') has been deprecated in favor of !moment.tz.zone('" + name + "')");
        }
        return !!getZone(name);
    }

    function needsOffset(m) {
        return !!(m._a && (m._tzm === undefined));
    }

    function logError(message) {
        if (typeof console !== 'undefined' && typeof console.error === 'function') {
            console.error(message);
        }
    }

    /************************************
		moment.tz namespace
	************************************/

    function tz(input) {
        var args = Array.prototype.slice.call(arguments, 0, -1),
			name = arguments[arguments.length - 1],
			zone = getZone(name),
			out = moment.utc.apply(null, args);

        if (zone && !moment.isMoment(input) && needsOffset(out)) {
            out.add(zone.parse(out), 'minutes');
        }

        out.tz(name);

        return out;
    }

    tz.version = VERSION;
    tz.dataVersion = '';
    tz._zones = zones;
    tz._links = links;
    tz._names = names;
    tz.add = addZone;
    tz.link = addLink;
    tz.load = loadData;
    tz.zone = getZone;
    tz.zoneExists = zoneExists; // deprecated in 0.1.0
    tz.guess = guess;
    tz.names = getNames;
    tz.Zone = Zone;
    tz.unpack = unpack;
    tz.unpackBase60 = unpackBase60;
    tz.needsOffset = needsOffset;
    tz.moveInvalidForward = true;
    tz.moveAmbiguousForward = false;

    /************************************
		Interface with Moment.js
	************************************/

    var fn = moment.fn;

    moment.tz = tz;

    moment.defaultZone = null;

    moment.updateOffset = function (mom, keepTime) {
        var zone = moment.defaultZone,
			offset;

        if (mom._z === undefined) {
            if (zone && needsOffset(mom) && !mom._isUTC) {
                mom._d = moment.utc(mom._a)._d;
                mom.utc().add(zone.parse(mom), 'minutes');
            }
            mom._z = zone;
        }
        if (mom._z) {
            offset = mom._z.offset(mom);
            if (Math.abs(offset) < 16) {
                offset = offset / 60;
            }
            if (mom.utcOffset !== undefined) {
                mom.utcOffset(-offset, keepTime);
            } else {
                mom.zone(offset, keepTime);
            }
        }
    };

    fn.tz = function (name) {
        if (name) {
            this._z = getZone(name);
            if (this._z) {
                moment.updateOffset(this);
            } else {
                logError("Moment Timezone has no data for " + name + ". See http://momentjs.com/timezone/docs/#/data-loading/.");
            }
            return this;
        }
        if (this._z) { return this._z.name; }
    };

    function abbrWrap(old) {
        return function () {
            if (this._z) { return this._z.abbr(this); }
            return old.call(this);
        };
    }

    function resetZoneWrap(old) {
        return function () {
            this._z = null;
            return old.apply(this, arguments);
        };
    }

    fn.zoneName = abbrWrap(fn.zoneName);
    fn.zoneAbbr = abbrWrap(fn.zoneAbbr);
    fn.utc = resetZoneWrap(fn.utc);

    moment.tz.setDefault = function (name) {
        if (major < 2 || (major === 2 && minor < 9)) {
            logError('Moment Timezone setDefault() requires Moment.js >= 2.9.0. You are using Moment.js ' + moment.version + '.');
        }
        moment.defaultZone = name ? getZone(name) : null;
        return moment;
    };

    // Cloning a moment should include the _z property.
    var momentProperties = moment.momentProperties;
    if (Object.prototype.toString.call(momentProperties) === '[object Array]') {
        // moment 2.8.1+
        momentProperties.push('_z');
        momentProperties.push('_a');
    } else if (momentProperties) {
        // moment 2.7.0
        momentProperties._z = null;
    }

    loadData({
        "version": "2016j",
        "zones": [
			"Africa/Abidjan|GMT|0|0||48e5",
			"Africa/Khartoum|EAT|-30|0||51e5",
			"Africa/Algiers|CET|-10|0||26e5",
			"Africa/Lagos|WAT|-10|0||17e6",
			"Africa/Maputo|CAT|-20|0||26e5",
			"Africa/Cairo|EET EEST|-20 -30|010101010|1Cby0 Fb0 c10 8n0 8Nd0 gL0 e10 mn0|15e6",
			"Africa/Casablanca|WET WEST|0 -10|01010101010101010101010101010101010101010|1Cco0 Db0 1zd0 Lz0 1Nf0 wM0 co0 go0 1o00 s00 dA0 vc0 11A0 A00 e00 y00 11A0 uM0 e00 Dc0 11A0 s00 e00 IM0 WM0 mo0 gM0 LA0 WM0 jA0 e00 Rc0 11A0 e00 e00 U00 11A0 8o0 e00 11A0|32e5",
			"Europe/Paris|CET CEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|11e6",
			"Africa/Johannesburg|SAST|-20|0||84e5",
			"Africa/Tripoli|EET CET CEST|-20 -10 -20|0120|1IlA0 TA0 1o00|11e5",
			"Africa/Windhoek|WAST WAT|-20 -10|01010101010101010101010|1C1c0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 11B0|32e4",
			"America/Adak|HST HDT|a0 90|01010101010101010101010|1BR00 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|326",
			"America/Anchorage|AKST AKDT|90 80|01010101010101010101010|1BQX0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|30e4",
			"America/Santo_Domingo|AST|40|0||29e5",
			"America/Araguaina|BRT BRST|30 20|010|1IdD0 Lz0|14e4",
			"America/Argentina/Buenos_Aires|ART|30|0|",
			"America/Asuncion|PYST PYT|30 40|01010101010101010101010|1C430 1a10 1fz0 1a10 1fz0 1cN0 17b0 1ip0 17b0 1ip0 17b0 1ip0 19X0 1fB0 19X0 1fB0 19X0 1ip0 17b0 1ip0 17b0 1ip0|28e5",
			"America/Panama|EST|50|0||15e5",
			"America/Bahia|BRT BRST|30 20|010|1FJf0 Rb0|27e5",
			"America/Bahia_Banderas|MST CDT CST|70 50 60|01212121212121212121212|1C1l0 1nW0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|84e3",
			"America/Fortaleza|BRT|30|0||34e5",
			"America/Managua|CST|60|0||22e5",
			"America/Manaus|AMT|40|0||19e5",
			"America/Bogota|COT|50|0||90e5",
			"America/Denver|MST MDT|70 60|01010101010101010101010|1BQV0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|26e5",
			"America/Campo_Grande|AMST AMT|30 40|01010101010101010101010|1BIr0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|77e4",
			"America/Cancun|CST CDT EST|60 50 50|010101010102|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 Dd0|63e4",
			"America/Caracas|VET VET|4u 40|01|1QMT0|29e5",
			"America/Cayenne|GFT|30|0||58e3",
			"America/Chicago|CST CDT|60 50|01010101010101010101010|1BQU0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|92e5",
			"America/Chihuahua|MST MDT|70 60|01010101010101010101010|1C1l0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|81e4",
			"America/Phoenix|MST|70|0||42e5",
			"America/Los_Angeles|PST PDT|80 70|01010101010101010101010|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|15e6",
			"America/New_York|EST EDT|50 40|01010101010101010101010|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|21e6",
			"America/Rio_Branco|AMT ACT|40 50|01|1KLE0|31e4",
			"America/Fort_Nelson|PST PDT MST|80 70 70|010101010102|1BQW0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0|39e2",
			"America/Halifax|AST ADT|40 30|01010101010101010101010|1BQS0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|39e4",
			"America/Godthab|WGT WGST|30 20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|17e3",
			"America/Goose_Bay|AST ADT|40 30|01010101010101010101010|1BQQ1 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|76e2",
			"America/Grand_Turk|EST EDT AST|50 40 40|0101010101012|1BQT0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|37e2",
			"America/Guayaquil|ECT|50|0||27e5",
			"America/Guyana|GYT|40|0||80e4",
			"America/Havana|CST CDT|50 40|01010101010101010101010|1BQR0 1wo0 U00 1zc0 U00 1qM0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Rc0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0 Oo0 1zc0|21e5",
			"America/La_Paz|BOT|40|0||19e5",
			"America/Lima|PET|50|0||11e6",
			"America/Mexico_City|CST CDT|60 50|01010101010101010101010|1C1k0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0 14p0 1lb0 14p0 1nX0 11B0 1nX0 11B0 1nX0 14p0 1lb0 14p0 1lb0|20e6",
			"America/Metlakatla|PST AKST AKDT|80 90 80|012121212121|1PAa0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|14e2",
			"America/Miquelon|PMST PMDT|30 20|01010101010101010101010|1BQR0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|61e2",
			"America/Montevideo|UYST UYT|20 30|010101010101|1BQQ0 1ld0 14n0 1ld0 14n0 1o10 11z0 1o10 11z0 1o10 11z0|17e5",
			"America/Noronha|FNT|20|0||30e2",
			"America/North_Dakota/Beulah|MST MDT CST CDT|70 60 60 50|01232323232323232323232|1BQV0 1zb0 Oo0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0",
			"America/Paramaribo|SRT|30|0||24e4",
			"America/Port-au-Prince|EST EDT|50 40|010101010|1GI70 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|23e5",
			"America/Santiago|CLST CLT|30 40|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|62e5",
			"America/Sao_Paulo|BRST BRT|20 30|01010101010101010101010|1BIq0 1zd0 On0 1zd0 Rb0 1zd0 Lz0 1C10 Lz0 1C10 On0 1zd0 On0 1zd0 On0 1zd0 On0 1C10 Lz0 1C10 Lz0 1C10|20e6",
			"America/Scoresbysund|EGT EGST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|452",
			"America/St_Johns|NST NDT|3u 2u|01010101010101010101010|1BQPv 1zb0 Op0 1zcX Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Rd0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0 Op0 1zb0|11e4",
			"Antarctica/Casey|+11 +08|-b0 -80|01010|1BN30 40P0 KL0 blz0|10",
			"Antarctica/Davis|+05 +07|-50 -70|0101|1BPw0 3Wn0 KN0|70",
			"Antarctica/DumontDUrville|+10|-a0|0||80",
			"Antarctica/Macquarie|AEDT MIST|-b0 -b0|01|1C140|1",
			"Asia/Tashkent|+05|-50|0||23e5",
			"Pacific/Auckland|NZDT NZST|-d0 -c0|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|14e5",
			"Antarctica/Rothera|-03|30|0||130",
			"Antarctica/Syowa|+03|-30|0||20",
			"Antarctica/Troll|+00 +02|0 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|40",
			"Asia/Almaty|+06|-60|0||15e5",
			"Asia/Baghdad|AST|-30|0||66e5",
			"Asia/Amman|EET EEST|-20 -30|010101010101010101010|1BVy0 1qM0 11A0 1o00 11A0 4bX0 Dd0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0|25e5",
			"Asia/Kamchatka|+12 +11|-c0 -b0|010|1Dp30 WM0|18e4",
			"Asia/Baku|+04 +05|-40 -50|0101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00|27e5",
			"Asia/Bangkok|ICT|-70|0||15e6",
			"Asia/Barnaul|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3rd0",
			"Asia/Beirut|EET EEST|-20 -30|01010101010101010101010|1BWm0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0|22e5",
			"Asia/Brunei|BNT|-80|0||42e4",
			"Asia/Kolkata|IST|-5u|0||15e6",
			"Asia/Chita|+09 +10 +08|-90 -a0 -80|010120|1BWh0 1qM0 WM0 8Hz0 3re0|33e4",
			"Asia/Choibalsan|CHOT CHOST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|38e3",
			"Asia/Shanghai|CST|-80|0||23e6",
			"Asia/Colombo|+0530|-5u|0||22e5",
			"Asia/Dhaka|BDT|-60|0||16e6",
			"Asia/Damascus|EET EEST|-20 -30|01010101010101010101010|1C0m0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0 WN0 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1nX0 11B0 1qL0|26e5",
			"Asia/Dili|TLT|-90|0||19e4",
			"Asia/Dubai|GST|-40|0||39e5",
			"Asia/Famagusta|EET EEST +03|-20 -30 -30|010101010101012|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 15U0",
			"Asia/Gaza|EET EEST|-20 -30|01010101010101010101010|1BVW1 SKX 1xd1 MKX 1AN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|18e5",
			"Asia/Hebron|EET EEST|-20 -30|0101010101010101010101010|1BVy0 Tb0 1xd1 MKX bB0 cn0 1cN0 1a00 1fA0 1cL0 1cN0 1nX0 1210 1nz0 1220 1qL0 WN0 1qL0 11B0 1nX0 11B0 1nX0 11B0 1qL0|25e4",
			"Asia/Hong_Kong|HKT|-80|0||73e5",
			"Asia/Hovd|HOVT HOVST|-70 -80|0101010101010|1O8H0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|81e3",
			"Asia/Irkutsk|+08 +09|-80 -90|01010|1BWi0 1qM0 WM0 8Hz0|60e4",
			"Europe/Istanbul|EET EEST +03|-20 -30 -30|010101010101012|1BWp0 1qM0 Xc0 1qo0 WM0 1qM0 11A0 1o00 1200 1nA0 11A0 1tA0 U00 15w0|13e6",
			"Asia/Jakarta|WIB|-70|0||31e6",
			"Asia/Jayapura|WIT|-90|0||26e4",
			"Asia/Jerusalem|IST IDT|-20 -30|01010101010101010101010|1BVA0 17X0 1kp0 1dz0 1c10 1aL0 1eN0 1oL0 10N0 1oL0 10N0 1oL0 10N0 1rz0 W10 1rz0 W10 1rz0 10N0 1oL0 10N0 1oL0|81e4",
			"Asia/Kabul|AFT|-4u|0||46e5",
			"Asia/Karachi|PKT|-50|0||24e6",
			"Asia/Urumqi|XJT|-60|0||32e5",
			"Asia/Kathmandu|NPT|-5J|0||12e5",
			"Asia/Khandyga|+10 +11 +09|-a0 -b0 -90|010102|1BWg0 1qM0 WM0 17V0 7zD0|66e2",
			"Asia/Krasnoyarsk|+07 +08|-70 -80|01010|1BWj0 1qM0 WM0 8Hz0|10e5",
			"Asia/Kuala_Lumpur|MYT|-80|0||71e5",
			"Asia/Magadan|+11 +12 +10|-b0 -c0 -a0|010120|1BWf0 1qM0 WM0 8Hz0 3Cq0|95e3",
			"Asia/Makassar|WITA|-80|0||15e5",
			"Asia/Manila|PHT|-80|0||24e6",
			"Europe/Athens|EET EEST|-20 -30|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|35e5",
			"Asia/Novokuznetsk|+07 +06|-70 -60|010|1Dp80 WM0|55e4",
			"Asia/Novosibirsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 4eN0|15e5",
			"Asia/Omsk|+06 +07|-60 -70|01010|1BWk0 1qM0 WM0 8Hz0|12e5",
			"Asia/Pyongyang|KST KST|-90 -8u|01|1P4D0|29e5",
			"Asia/Rangoon|MMT|-6u|0||48e5",
			"Asia/Sakhalin|+10 +11|-a0 -b0|010101|1BWg0 1qM0 WM0 8Hz0 3rd0|58e4",
			"Asia/Seoul|KST|-90|0||23e6",
			"Asia/Singapore|SGT|-80|0||56e5",
			"Asia/Srednekolymsk|+11 +12|-b0 -c0|01010|1BWf0 1qM0 WM0 8Hz0|35e2",
			"Asia/Tbilisi|+04|-40|0||11e5",
			"Asia/Tehran|IRST IRDT|-3u -4u|01010101010101010101010|1BTUu 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0 1cN0 1dz0 1cp0 1dz0 1cp0 1dz0 1cp0 1dz0|14e6",
			"Asia/Thimphu|BTT|-60|0||79e3",
			"Asia/Tokyo|JST|-90|0||38e6",
			"Asia/Tomsk|+06 +07|-60 -70|010101|1BWk0 1qM0 WM0 8Hz0 3Qp0|10e5",
			"Asia/Ulaanbaatar|ULAT ULAST|-80 -90|0101010101010|1O8G0 1cJ0 1cP0 1cJ0 1cP0 1fx0 1cP0 1cJ0 1cP0 1cJ0 1cP0 1cJ0|12e5",
			"Asia/Ust-Nera|+11 +12 +10|-b0 -c0 -a0|010102|1BWf0 1qM0 WM0 17V0 7zD0|65e2",
			"Asia/Vladivostok|+10 +11|-a0 -b0|01010|1BWg0 1qM0 WM0 8Hz0|60e4",
			"Asia/Yakutsk|+09 +10|-90 -a0|01010|1BWh0 1qM0 WM0 8Hz0|28e4",
			"Asia/Yekaterinburg|+05 +06|-50 -60|01010|1BWl0 1qM0 WM0 8Hz0|14e5",
			"Asia/Yerevan|+04 +05|-40 -50|01010|1BWm0 1qM0 WM0 1qM0|13e5",
			"Atlantic/Azores|AZOT AZOST|10 0|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|25e4",
			"Europe/Lisbon|WET WEST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|27e5",
			"Atlantic/Cape_Verde|CVT|10|0||50e4",
			"Atlantic/South_Georgia|GST|20|0||30",
			"Atlantic/Stanley|FKST FKT|30 40|010|1C6R0 U10|21e2",
			"Australia/Sydney|AEDT AEST|-b0 -a0|01010101010101010101010|1C140 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|40e5",
			"Australia/Adelaide|ACDT ACST|-au -9u|01010101010101010101010|1C14u 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1cM0 1fA0 1cM0 1cM0 1cM0 1cM0|11e5",
			"Australia/Brisbane|AEST|-a0|0||20e5",
			"Australia/Darwin|ACST|-9u|0||12e4",
			"Australia/Eucla|ACWST|-8J|0||368",
			"Australia/Lord_Howe|LHDT LHST|-b0 -au|01010101010101010101010|1C130 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1cMu 1cLu 1fAu 1cLu 1cMu 1cLu 1cMu|347",
			"Australia/Perth|AWST|-80|0||18e5",
			"Pacific/Easter|EASST EAST|50 60|010101010101010101010|1C1f0 1fB0 1nX0 G10 1EL0 Op0 1zb0 Rd0 1wn0 Rd0 46n0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0 1Nb0 Ap0|30e2",
			"Europe/Dublin|GMT IST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|12e5",
			"Etc/GMT+1|-01|10|0|",
			"Etc/GMT+10|-10|a0|0|",
			"Etc/GMT+11|-11|b0|0|",
			"Etc/GMT+12|-12|c0|0|",
			"Etc/GMT+2|-02|20|0|",
			"Etc/GMT+4|-04|40|0|",
			"Etc/GMT+5|-05|50|0|",
			"Etc/GMT+6|-06|60|0|",
			"Etc/GMT+7|-07|70|0|",
			"Etc/GMT+8|-08|80|0|",
			"Etc/GMT+9|-09|90|0|",
			"Etc/GMT-1|+01|-10|0|",
			"Etc/GMT-11|+11|-b0|0|",
			"Etc/GMT-12|+12|-c0|0|",
			"Etc/GMT-13|+13|-d0|0|",
			"Etc/GMT-14|+14|-e0|0|",
			"Etc/GMT-2|+02|-20|0|",
			"Etc/GMT-7|+07|-70|0|",
			"Etc/GMT-8|+08|-80|0|",
			"Etc/GMT-9|+09|-90|0|",
			"Etc/UCT|UCT|0|0|",
			"Etc/UTC|UTC|0|0|",
			"Europe/Astrakhan|+03 +04|-30 -40|010101|1BWn0 1qM0 WM0 8Hz0 3rd0",
			"Europe/London|GMT BST|0 -10|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|10e6",
			"Europe/Chisinau|EET EEST|-20 -30|01010101010101010101010|1BWo0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00|67e4",
			"Europe/Kaliningrad|EET EEST +03|-20 -30 -30|01020|1BWo0 1qM0 WM0 8Hz0|44e4",
			"Europe/Volgograd|+03 +04|-30 -40|01010|1BWn0 1qM0 WM0 8Hz0|10e5",
			"Europe/Minsk|EET EEST +03|-20 -30 -30|0102|1BWo0 1qM0 WM0|19e5",
			"Europe/Moscow|MSK MSD MSK|-30 -40 -40|01020|1BWn0 1qM0 WM0 8Hz0|16e6",
			"Europe/Samara|+04 +03|-40 -30|010|1Dpb0 WM0|12e5",
			"Europe/Saratov|+03 +04|-30 -40|010101|1BWn0 1qM0 WM0 8Hz0 5810",
			"Europe/Simferopol|EET EEST MSK MSK|-20 -30 -40 -30|01010101023|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11z0 1nW0|33e4",
			"Pacific/Honolulu|HST|a0|0||37e4",
			"Indian/Chagos|IOT|-60|0||30e2",
			"Indian/Christmas|CXT|-70|0||21e2",
			"Indian/Cocos|CCT|-6u|0||596",
			"Indian/Mahe|SCT|-40|0||79e3",
			"Indian/Maldives|MVT|-50|0||35e4",
			"Indian/Mauritius|MUT|-40|0||15e4",
			"Indian/Reunion|RET|-40|0||84e4",
			"Pacific/Majuro|MHT|-c0|0||28e3",
			"MET|MET MEST|-10 -20|01010101010101010101010|1BWp0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00 11A0 1o00 11A0 1qM0 WM0 1qM0 WM0 1qM0 11A0 1o00 11A0 1o00",
			"Pacific/Chatham|CHADT CHAST|-dJ -cJ|01010101010101010101010|1C120 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|600",
			"Pacific/Apia|SST SDT WSDT WSST|b0 a0 -e0 -d0|01012323232323232323232|1Dbn0 1ff0 1a00 CI0 AQ0 1cM0 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1a00 1fA0 1cM0 1fA0 1a00 1fA0 1a00|37e3",
			"Pacific/Bougainville|PGT BST|-a0 -b0|01|1NwE0|18e4",
			"Pacific/Chuuk|CHUT|-a0|0||49e3",
			"Pacific/Efate|VUT|-b0|0||66e3",
			"Pacific/Enderbury|PHOT|-d0|0||1",
			"Pacific/Fakaofo|TKT TKT|b0 -d0|01|1Gfn0|483",
			"Pacific/Fiji|FJST FJT|-d0 -c0|01010101010101010101010|1BWe0 1o00 Rc0 1wo0 Ao0 1Nc0 Ao0 1Q00 xz0 1SN0 uM0 1SM0 uM0 1VA0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0|88e4",
			"Pacific/Funafuti|TVT|-c0|0||45e2",
			"Pacific/Galapagos|GALT|60|0||25e3",
			"Pacific/Gambier|GAMT|90|0||125",
			"Pacific/Guadalcanal|SBT|-b0|0||11e4",
			"Pacific/Guam|ChST|-a0|0||17e4",
			"Pacific/Kiritimati|LINT|-e0|0||51e2",
			"Pacific/Kosrae|KOST|-b0|0||66e2",
			"Pacific/Marquesas|MART|9u|0||86e2",
			"Pacific/Pago_Pago|SST|b0|0||37e2",
			"Pacific/Nauru|NRT|-c0|0||10e3",
			"Pacific/Niue|NUT|b0|0||12e2",
			"Pacific/Norfolk|NFT NFT|-bu -b0|01|1PoCu|25e4",
			"Pacific/Noumea|NCT|-b0|0||98e3",
			"Pacific/Palau|PWT|-90|0||21e3",
			"Pacific/Pitcairn|PST|80|0||56",
			"Pacific/Pohnpei|PONT|-b0|0||34e3",
			"Pacific/Port_Moresby|PGT|-a0|0||25e4",
			"Pacific/Rarotonga|CKT|a0|0||13e3",
			"Pacific/Tahiti|TAHT|a0|0||18e4",
			"Pacific/Tarawa|GILT|-c0|0||29e3",
			"Pacific/Tongatapu|+13 +14|-d0 -e0|0101010101|1S4d0 s00 1VA0 uM0 1SM0 uM0 1SM0 uM0 1SM0|75e3",
			"Pacific/Wake|WAKT|-c0|0||16e3",
			"Pacific/Wallis|WFT|-c0|0||94"
        ],
        "links": [
			"Africa/Abidjan|Africa/Accra",
			"Africa/Abidjan|Africa/Bamako",
			"Africa/Abidjan|Africa/Banjul",
			"Africa/Abidjan|Africa/Bissau",
			"Africa/Abidjan|Africa/Conakry",
			"Africa/Abidjan|Africa/Dakar",
			"Africa/Abidjan|Africa/Freetown",
			"Africa/Abidjan|Africa/Lome",
			"Africa/Abidjan|Africa/Monrovia",
			"Africa/Abidjan|Africa/Nouakchott",
			"Africa/Abidjan|Africa/Ouagadougou",
			"Africa/Abidjan|Africa/Sao_Tome",
			"Africa/Abidjan|Africa/Timbuktu",
			"Africa/Abidjan|America/Danmarkshavn",
			"Africa/Abidjan|Atlantic/Reykjavik",
			"Africa/Abidjan|Atlantic/St_Helena",
			"Africa/Abidjan|Etc/GMT",
			"Africa/Abidjan|Etc/GMT+0",
			"Africa/Abidjan|Etc/GMT-0",
			"Africa/Abidjan|Etc/GMT0",
			"Africa/Abidjan|Etc/Greenwich",
			"Africa/Abidjan|GMT",
			"Africa/Abidjan|GMT+0",
			"Africa/Abidjan|GMT-0",
			"Africa/Abidjan|GMT0",
			"Africa/Abidjan|Greenwich",
			"Africa/Abidjan|Iceland",
			"Africa/Algiers|Africa/Tunis",
			"Africa/Cairo|Egypt",
			"Africa/Casablanca|Africa/El_Aaiun",
			"Africa/Johannesburg|Africa/Maseru",
			"Africa/Johannesburg|Africa/Mbabane",
			"Africa/Khartoum|Africa/Addis_Ababa",
			"Africa/Khartoum|Africa/Asmara",
			"Africa/Khartoum|Africa/Asmera",
			"Africa/Khartoum|Africa/Dar_es_Salaam",
			"Africa/Khartoum|Africa/Djibouti",
			"Africa/Khartoum|Africa/Juba",
			"Africa/Khartoum|Africa/Kampala",
			"Africa/Khartoum|Africa/Mogadishu",
			"Africa/Khartoum|Africa/Nairobi",
			"Africa/Khartoum|Indian/Antananarivo",
			"Africa/Khartoum|Indian/Comoro",
			"Africa/Khartoum|Indian/Mayotte",
			"Africa/Lagos|Africa/Bangui",
			"Africa/Lagos|Africa/Brazzaville",
			"Africa/Lagos|Africa/Douala",
			"Africa/Lagos|Africa/Kinshasa",
			"Africa/Lagos|Africa/Libreville",
			"Africa/Lagos|Africa/Luanda",
			"Africa/Lagos|Africa/Malabo",
			"Africa/Lagos|Africa/Ndjamena",
			"Africa/Lagos|Africa/Niamey",
			"Africa/Lagos|Africa/Porto-Novo",
			"Africa/Maputo|Africa/Blantyre",
			"Africa/Maputo|Africa/Bujumbura",
			"Africa/Maputo|Africa/Gaborone",
			"Africa/Maputo|Africa/Harare",
			"Africa/Maputo|Africa/Kigali",
			"Africa/Maputo|Africa/Lubumbashi",
			"Africa/Maputo|Africa/Lusaka",
			"Africa/Tripoli|Libya",
			"America/Adak|America/Atka",
			"America/Adak|US/Aleutian",
			"America/Anchorage|America/Juneau",
			"America/Anchorage|America/Nome",
			"America/Anchorage|America/Sitka",
			"America/Anchorage|America/Yakutat",
			"America/Anchorage|US/Alaska",
			"America/Argentina/Buenos_Aires|America/Argentina/Catamarca",
			"America/Argentina/Buenos_Aires|America/Argentina/ComodRivadavia",
			"America/Argentina/Buenos_Aires|America/Argentina/Cordoba",
			"America/Argentina/Buenos_Aires|America/Argentina/Jujuy",
			"America/Argentina/Buenos_Aires|America/Argentina/La_Rioja",
			"America/Argentina/Buenos_Aires|America/Argentina/Mendoza",
			"America/Argentina/Buenos_Aires|America/Argentina/Rio_Gallegos",
			"America/Argentina/Buenos_Aires|America/Argentina/Salta",
			"America/Argentina/Buenos_Aires|America/Argentina/San_Juan",
			"America/Argentina/Buenos_Aires|America/Argentina/San_Luis",
			"America/Argentina/Buenos_Aires|America/Argentina/Tucuman",
			"America/Argentina/Buenos_Aires|America/Argentina/Ushuaia",
			"America/Argentina/Buenos_Aires|America/Buenos_Aires",
			"America/Argentina/Buenos_Aires|America/Catamarca",
			"America/Argentina/Buenos_Aires|America/Cordoba",
			"America/Argentina/Buenos_Aires|America/Jujuy",
			"America/Argentina/Buenos_Aires|America/Mendoza",
			"America/Argentina/Buenos_Aires|America/Rosario",
			"America/Campo_Grande|America/Cuiaba",
			"America/Chicago|America/Indiana/Knox",
			"America/Chicago|America/Indiana/Tell_City",
			"America/Chicago|America/Knox_IN",
			"America/Chicago|America/Matamoros",
			"America/Chicago|America/Menominee",
			"America/Chicago|America/North_Dakota/Center",
			"America/Chicago|America/North_Dakota/New_Salem",
			"America/Chicago|America/Rainy_River",
			"America/Chicago|America/Rankin_Inlet",
			"America/Chicago|America/Resolute",
			"America/Chicago|America/Winnipeg",
			"America/Chicago|CST6CDT",
			"America/Chicago|Canada/Central",
			"America/Chicago|US/Central",
			"America/Chicago|US/Indiana-Starke",
			"America/Chihuahua|America/Mazatlan",
			"America/Chihuahua|Mexico/BajaSur",
			"America/Denver|America/Boise",
			"America/Denver|America/Cambridge_Bay",
			"America/Denver|America/Edmonton",
			"America/Denver|America/Inuvik",
			"America/Denver|America/Ojinaga",
			"America/Denver|America/Shiprock",
			"America/Denver|America/Yellowknife",
			"America/Denver|Canada/Mountain",
			"America/Denver|MST7MDT",
			"America/Denver|Navajo",
			"America/Denver|US/Mountain",
			"America/Fortaleza|America/Belem",
			"America/Fortaleza|America/Maceio",
			"America/Fortaleza|America/Recife",
			"America/Fortaleza|America/Santarem",
			"America/Halifax|America/Glace_Bay",
			"America/Halifax|America/Moncton",
			"America/Halifax|America/Thule",
			"America/Halifax|Atlantic/Bermuda",
			"America/Halifax|Canada/Atlantic",
			"America/Havana|Cuba",
			"America/Los_Angeles|America/Dawson",
			"America/Los_Angeles|America/Ensenada",
			"America/Los_Angeles|America/Santa_Isabel",
			"America/Los_Angeles|America/Tijuana",
			"America/Los_Angeles|America/Vancouver",
			"America/Los_Angeles|America/Whitehorse",
			"America/Los_Angeles|Canada/Pacific",
			"America/Los_Angeles|Canada/Yukon",
			"America/Los_Angeles|Mexico/BajaNorte",
			"America/Los_Angeles|PST8PDT",
			"America/Los_Angeles|US/Pacific",
			"America/Los_Angeles|US/Pacific-New",
			"America/Managua|America/Belize",
			"America/Managua|America/Costa_Rica",
			"America/Managua|America/El_Salvador",
			"America/Managua|America/Guatemala",
			"America/Managua|America/Regina",
			"America/Managua|America/Swift_Current",
			"America/Managua|America/Tegucigalpa",
			"America/Managua|Canada/East-Saskatchewan",
			"America/Managua|Canada/Saskatchewan",
			"America/Manaus|America/Boa_Vista",
			"America/Manaus|America/Porto_Velho",
			"America/Manaus|Brazil/West",
			"America/Mexico_City|America/Merida",
			"America/Mexico_City|America/Monterrey",
			"America/Mexico_City|Mexico/General",
			"America/New_York|America/Detroit",
			"America/New_York|America/Fort_Wayne",
			"America/New_York|America/Indiana/Indianapolis",
			"America/New_York|America/Indiana/Marengo",
			"America/New_York|America/Indiana/Petersburg",
			"America/New_York|America/Indiana/Vevay",
			"America/New_York|America/Indiana/Vincennes",
			"America/New_York|America/Indiana/Winamac",
			"America/New_York|America/Indianapolis",
			"America/New_York|America/Iqaluit",
			"America/New_York|America/Kentucky/Louisville",
			"America/New_York|America/Kentucky/Monticello",
			"America/New_York|America/Louisville",
			"America/New_York|America/Montreal",
			"America/New_York|America/Nassau",
			"America/New_York|America/Nipigon",
			"America/New_York|America/Pangnirtung",
			"America/New_York|America/Thunder_Bay",
			"America/New_York|America/Toronto",
			"America/New_York|Canada/Eastern",
			"America/New_York|EST5EDT",
			"America/New_York|US/East-Indiana",
			"America/New_York|US/Eastern",
			"America/New_York|US/Michigan",
			"America/Noronha|Brazil/DeNoronha",
			"America/Panama|America/Atikokan",
			"America/Panama|America/Cayman",
			"America/Panama|America/Coral_Harbour",
			"America/Panama|America/Jamaica",
			"America/Panama|EST",
			"America/Panama|Jamaica",
			"America/Phoenix|America/Creston",
			"America/Phoenix|America/Dawson_Creek",
			"America/Phoenix|America/Hermosillo",
			"America/Phoenix|MST",
			"America/Phoenix|US/Arizona",
			"America/Rio_Branco|America/Eirunepe",
			"America/Rio_Branco|America/Porto_Acre",
			"America/Rio_Branco|Brazil/Acre",
			"America/Santiago|Antarctica/Palmer",
			"America/Santiago|Chile/Continental",
			"America/Santo_Domingo|America/Anguilla",
			"America/Santo_Domingo|America/Antigua",
			"America/Santo_Domingo|America/Aruba",
			"America/Santo_Domingo|America/Barbados",
			"America/Santo_Domingo|America/Blanc-Sablon",
			"America/Santo_Domingo|America/Curacao",
			"America/Santo_Domingo|America/Dominica",
			"America/Santo_Domingo|America/Grenada",
			"America/Santo_Domingo|America/Guadeloupe",
			"America/Santo_Domingo|America/Kralendijk",
			"America/Santo_Domingo|America/Lower_Princes",
			"America/Santo_Domingo|America/Marigot",
			"America/Santo_Domingo|America/Martinique",
			"America/Santo_Domingo|America/Montserrat",
			"America/Santo_Domingo|America/Port_of_Spain",
			"America/Santo_Domingo|America/Puerto_Rico",
			"America/Santo_Domingo|America/St_Barthelemy",
			"America/Santo_Domingo|America/St_Kitts",
			"America/Santo_Domingo|America/St_Lucia",
			"America/Santo_Domingo|America/St_Thomas",
			"America/Santo_Domingo|America/St_Vincent",
			"America/Santo_Domingo|America/Tortola",
			"America/Santo_Domingo|America/Virgin",
			"America/Sao_Paulo|Brazil/East",
			"America/St_Johns|Canada/Newfoundland",
			"Antarctica/DumontDUrville|Etc/GMT-10",
			"Antarctica/Rothera|Etc/GMT+3",
			"Antarctica/Syowa|Etc/GMT-3",
			"Asia/Almaty|Antarctica/Vostok",
			"Asia/Almaty|Asia/Bishkek",
			"Asia/Almaty|Asia/Qyzylorda",
			"Asia/Almaty|Etc/GMT-6",
			"Asia/Baghdad|Asia/Aden",
			"Asia/Baghdad|Asia/Bahrain",
			"Asia/Baghdad|Asia/Kuwait",
			"Asia/Baghdad|Asia/Qatar",
			"Asia/Baghdad|Asia/Riyadh",
			"Asia/Bangkok|Asia/Ho_Chi_Minh",
			"Asia/Bangkok|Asia/Phnom_Penh",
			"Asia/Bangkok|Asia/Saigon",
			"Asia/Bangkok|Asia/Vientiane",
			"Asia/Dhaka|Asia/Dacca",
			"Asia/Dubai|Asia/Muscat",
			"Asia/Hong_Kong|Hongkong",
			"Asia/Jakarta|Asia/Pontianak",
			"Asia/Jerusalem|Asia/Tel_Aviv",
			"Asia/Jerusalem|Israel",
			"Asia/Kamchatka|Asia/Anadyr",
			"Asia/Kathmandu|Asia/Katmandu",
			"Asia/Kolkata|Asia/Calcutta",
			"Asia/Kuala_Lumpur|Asia/Kuching",
			"Asia/Makassar|Asia/Ujung_Pandang",
			"Asia/Rangoon|Asia/Yangon",
			"Asia/Seoul|ROK",
			"Asia/Shanghai|Asia/Chongqing",
			"Asia/Shanghai|Asia/Chungking",
			"Asia/Shanghai|Asia/Harbin",
			"Asia/Shanghai|Asia/Macao",
			"Asia/Shanghai|Asia/Macau",
			"Asia/Shanghai|Asia/Taipei",
			"Asia/Shanghai|PRC",
			"Asia/Shanghai|ROC",
			"Asia/Singapore|Singapore",
			"Asia/Tashkent|Antarctica/Mawson",
			"Asia/Tashkent|Asia/Aqtau",
			"Asia/Tashkent|Asia/Aqtobe",
			"Asia/Tashkent|Asia/Ashgabat",
			"Asia/Tashkent|Asia/Ashkhabad",
			"Asia/Tashkent|Asia/Atyrau",
			"Asia/Tashkent|Asia/Dushanbe",
			"Asia/Tashkent|Asia/Oral",
			"Asia/Tashkent|Asia/Samarkand",
			"Asia/Tashkent|Etc/GMT-5",
			"Asia/Tashkent|Indian/Kerguelen",
			"Asia/Tbilisi|Etc/GMT-4",
			"Asia/Tehran|Iran",
			"Asia/Thimphu|Asia/Thimbu",
			"Asia/Tokyo|Japan",
			"Asia/Ulaanbaatar|Asia/Ulan_Bator",
			"Asia/Urumqi|Asia/Kashgar",
			"Australia/Adelaide|Australia/Broken_Hill",
			"Australia/Adelaide|Australia/South",
			"Australia/Adelaide|Australia/Yancowinna",
			"Australia/Brisbane|Australia/Lindeman",
			"Australia/Brisbane|Australia/Queensland",
			"Australia/Darwin|Australia/North",
			"Australia/Lord_Howe|Australia/LHI",
			"Australia/Perth|Australia/West",
			"Australia/Sydney|Australia/ACT",
			"Australia/Sydney|Australia/Canberra",
			"Australia/Sydney|Australia/Currie",
			"Australia/Sydney|Australia/Hobart",
			"Australia/Sydney|Australia/Melbourne",
			"Australia/Sydney|Australia/NSW",
			"Australia/Sydney|Australia/Tasmania",
			"Australia/Sydney|Australia/Victoria",
			"Etc/UCT|UCT",
			"Etc/UTC|Etc/Universal",
			"Etc/UTC|Etc/Zulu",
			"Etc/UTC|UTC",
			"Etc/UTC|Universal",
			"Etc/UTC|Zulu",
			"Europe/Astrakhan|Europe/Ulyanovsk",
			"Europe/Athens|Asia/Nicosia",
			"Europe/Athens|EET",
			"Europe/Athens|Europe/Bucharest",
			"Europe/Athens|Europe/Helsinki",
			"Europe/Athens|Europe/Kiev",
			"Europe/Athens|Europe/Mariehamn",
			"Europe/Athens|Europe/Nicosia",
			"Europe/Athens|Europe/Riga",
			"Europe/Athens|Europe/Sofia",
			"Europe/Athens|Europe/Tallinn",
			"Europe/Athens|Europe/Uzhgorod",
			"Europe/Athens|Europe/Vilnius",
			"Europe/Athens|Europe/Zaporozhye",
			"Europe/Chisinau|Europe/Tiraspol",
			"Europe/Dublin|Eire",
			"Europe/Istanbul|Asia/Istanbul",
			"Europe/Istanbul|Turkey",
			"Europe/Lisbon|Atlantic/Canary",
			"Europe/Lisbon|Atlantic/Faeroe",
			"Europe/Lisbon|Atlantic/Faroe",
			"Europe/Lisbon|Atlantic/Madeira",
			"Europe/Lisbon|Portugal",
			"Europe/Lisbon|WET",
			"Europe/London|Europe/Belfast",
			"Europe/London|Europe/Guernsey",
			"Europe/London|Europe/Isle_of_Man",
			"Europe/London|Europe/Jersey",
			"Europe/London|GB",
			"Europe/London|GB-Eire",
			"Europe/Moscow|W-SU",
			"Europe/Paris|Africa/Ceuta",
			"Europe/Paris|Arctic/Longyearbyen",
			"Europe/Paris|Atlantic/Jan_Mayen",
			"Europe/Paris|CET",
			"Europe/Paris|Europe/Amsterdam",
			"Europe/Paris|Europe/Andorra",
			"Europe/Paris|Europe/Belgrade",
			"Europe/Paris|Europe/Berlin",
			"Europe/Paris|Europe/Bratislava",
			"Europe/Paris|Europe/Brussels",
			"Europe/Paris|Europe/Budapest",
			"Europe/Paris|Europe/Busingen",
			"Europe/Paris|Europe/Copenhagen",
			"Europe/Paris|Europe/Gibraltar",
			"Europe/Paris|Europe/Ljubljana",
			"Europe/Paris|Europe/Luxembourg",
			"Europe/Paris|Europe/Madrid",
			"Europe/Paris|Europe/Malta",
			"Europe/Paris|Europe/Monaco",
			"Europe/Paris|Europe/Oslo",
			"Europe/Paris|Europe/Podgorica",
			"Europe/Paris|Europe/Prague",
			"Europe/Paris|Europe/Rome",
			"Europe/Paris|Europe/San_Marino",
			"Europe/Paris|Europe/Sarajevo",
			"Europe/Paris|Europe/Skopje",
			"Europe/Paris|Europe/Stockholm",
			"Europe/Paris|Europe/Tirane",
			"Europe/Paris|Europe/Vaduz",
			"Europe/Paris|Europe/Vatican",
			"Europe/Paris|Europe/Vienna",
			"Europe/Paris|Europe/Warsaw",
			"Europe/Paris|Europe/Zagreb",
			"Europe/Paris|Europe/Zurich",
			"Europe/Paris|Poland",
			"Europe/Volgograd|Europe/Kirov",
			"Pacific/Auckland|Antarctica/McMurdo",
			"Pacific/Auckland|Antarctica/South_Pole",
			"Pacific/Auckland|NZ",
			"Pacific/Chatham|NZ-CHAT",
			"Pacific/Chuuk|Pacific/Truk",
			"Pacific/Chuuk|Pacific/Yap",
			"Pacific/Easter|Chile/EasterIsland",
			"Pacific/Guam|Pacific/Saipan",
			"Pacific/Honolulu|HST",
			"Pacific/Honolulu|Pacific/Johnston",
			"Pacific/Honolulu|US/Hawaii",
			"Pacific/Majuro|Kwajalein",
			"Pacific/Majuro|Pacific/Kwajalein",
			"Pacific/Pago_Pago|Pacific/Midway",
			"Pacific/Pago_Pago|Pacific/Samoa",
			"Pacific/Pago_Pago|US/Samoa",
			"Pacific/Pohnpei|Pacific/Ponape"
        ]
    });


    return moment;
}));;
(function(t,e){if(typeof define==="function"&&define.amd){define(["jquery"],e)}else if(typeof exports==="object"){module.exports=e(require("jquery"))}else{e(t.jQuery)}})(this,function(t){t.transit={version:"0.9.12",propertyMap:{marginLeft:"margin",marginRight:"margin",marginBottom:"margin",marginTop:"margin",paddingLeft:"padding",paddingRight:"padding",paddingBottom:"padding",paddingTop:"padding"},enabled:true,useTransitionEnd:false};var e=document.createElement("div");var n={};function i(t){if(t in e.style)return t;var n=["Moz","Webkit","O","ms"];var i=t.charAt(0).toUpperCase()+t.substr(1);for(var r=0;r<n.length;++r){var s=n[r]+i;if(s in e.style){return s}}}function r(){e.style[n.transform]="";e.style[n.transform]="rotateY(90deg)";return e.style[n.transform]!==""}var s=navigator.userAgent.toLowerCase().indexOf("chrome")>-1;n.transition=i("transition");n.transitionDelay=i("transitionDelay");n.transform=i("transform");n.transformOrigin=i("transformOrigin");n.filter=i("Filter");n.transform3d=r();var a={transition:"transitionend",MozTransition:"transitionend",OTransition:"oTransitionEnd",WebkitTransition:"webkitTransitionEnd",msTransition:"MSTransitionEnd"};var o=n.transitionEnd=a[n.transition]||null;for(var u in n){if(n.hasOwnProperty(u)&&typeof t.support[u]==="undefined"){t.support[u]=n[u]}}e=null;t.cssEase={_default:"ease","in":"ease-in",out:"ease-out","in-out":"ease-in-out",snap:"cubic-bezier(0,1,.5,1)",easeInCubic:"cubic-bezier(.550,.055,.675,.190)",easeOutCubic:"cubic-bezier(.215,.61,.355,1)",easeInOutCubic:"cubic-bezier(.645,.045,.355,1)",easeInCirc:"cubic-bezier(.6,.04,.98,.335)",easeOutCirc:"cubic-bezier(.075,.82,.165,1)",easeInOutCirc:"cubic-bezier(.785,.135,.15,.86)",easeInExpo:"cubic-bezier(.95,.05,.795,.035)",easeOutExpo:"cubic-bezier(.19,1,.22,1)",easeInOutExpo:"cubic-bezier(1,0,0,1)",easeInQuad:"cubic-bezier(.55,.085,.68,.53)",easeOutQuad:"cubic-bezier(.25,.46,.45,.94)",easeInOutQuad:"cubic-bezier(.455,.03,.515,.955)",easeInQuart:"cubic-bezier(.895,.03,.685,.22)",easeOutQuart:"cubic-bezier(.165,.84,.44,1)",easeInOutQuart:"cubic-bezier(.77,0,.175,1)",easeInQuint:"cubic-bezier(.755,.05,.855,.06)",easeOutQuint:"cubic-bezier(.23,1,.32,1)",easeInOutQuint:"cubic-bezier(.86,0,.07,1)",easeInSine:"cubic-bezier(.47,0,.745,.715)",easeOutSine:"cubic-bezier(.39,.575,.565,1)",easeInOutSine:"cubic-bezier(.445,.05,.55,.95)",easeInBack:"cubic-bezier(.6,-.28,.735,.045)",easeOutBack:"cubic-bezier(.175, .885,.32,1.275)",easeInOutBack:"cubic-bezier(.68,-.55,.265,1.55)"};t.cssHooks["transit:transform"]={get:function(e){return t(e).data("transform")||new f},set:function(e,i){var r=i;if(!(r instanceof f)){r=new f(r)}if(n.transform==="WebkitTransform"&&!s){e.style[n.transform]=r.toString(true)}else{e.style[n.transform]=r.toString()}t(e).data("transform",r)}};t.cssHooks.transform={set:t.cssHooks["transit:transform"].set};t.cssHooks.filter={get:function(t){return t.style[n.filter]},set:function(t,e){t.style[n.filter]=e}};if(t.fn.jquery<"1.8"){t.cssHooks.transformOrigin={get:function(t){return t.style[n.transformOrigin]},set:function(t,e){t.style[n.transformOrigin]=e}};t.cssHooks.transition={get:function(t){return t.style[n.transition]},set:function(t,e){t.style[n.transition]=e}}}p("scale");p("scaleX");p("scaleY");p("translate");p("rotate");p("rotateX");p("rotateY");p("rotate3d");p("perspective");p("skewX");p("skewY");p("x",true);p("y",true);function f(t){if(typeof t==="string"){this.parse(t)}return this}f.prototype={setFromString:function(t,e){var n=typeof e==="string"?e.split(","):e.constructor===Array?e:[e];n.unshift(t);f.prototype.set.apply(this,n)},set:function(t){var e=Array.prototype.slice.apply(arguments,[1]);if(this.setter[t]){this.setter[t].apply(this,e)}else{this[t]=e.join(",")}},get:function(t){if(this.getter[t]){return this.getter[t].apply(this)}else{return this[t]||0}},setter:{rotate:function(t){this.rotate=b(t,"deg")},rotateX:function(t){this.rotateX=b(t,"deg")},rotateY:function(t){this.rotateY=b(t,"deg")},scale:function(t,e){if(e===undefined){e=t}this.scale=t+","+e},skewX:function(t){this.skewX=b(t,"deg")},skewY:function(t){this.skewY=b(t,"deg")},perspective:function(t){this.perspective=b(t,"px")},x:function(t){this.set("translate",t,null)},y:function(t){this.set("translate",null,t)},translate:function(t,e){if(this._translateX===undefined){this._translateX=0}if(this._translateY===undefined){this._translateY=0}if(t!==null&&t!==undefined){this._translateX=b(t,"px")}if(e!==null&&e!==undefined){this._translateY=b(e,"px")}this.translate=this._translateX+","+this._translateY}},getter:{x:function(){return this._translateX||0},y:function(){return this._translateY||0},scale:function(){var t=(this.scale||"1,1").split(",");if(t[0]){t[0]=parseFloat(t[0])}if(t[1]){t[1]=parseFloat(t[1])}return t[0]===t[1]?t[0]:t},rotate3d:function(){var t=(this.rotate3d||"0,0,0,0deg").split(",");for(var e=0;e<=3;++e){if(t[e]){t[e]=parseFloat(t[e])}}if(t[3]){t[3]=b(t[3],"deg")}return t}},parse:function(t){var e=this;t.replace(/([a-zA-Z0-9]+)\((.*?)\)/g,function(t,n,i){e.setFromString(n,i)})},toString:function(t){var e=[];for(var i in this){if(this.hasOwnProperty(i)){if(!n.transform3d&&(i==="rotateX"||i==="rotateY"||i==="perspective"||i==="transformOrigin")){continue}if(i[0]!=="_"){if(t&&i==="scale"){e.push(i+"3d("+this[i]+",1)")}else if(t&&i==="translate"){e.push(i+"3d("+this[i]+",0)")}else{e.push(i+"("+this[i]+")")}}}}return e.join(" ")}};function c(t,e,n){if(e===true){t.queue(n)}else if(e){t.queue(e,n)}else{t.each(function(){n.call(this)})}}function l(e){var i=[];t.each(e,function(e){e=t.camelCase(e);e=t.transit.propertyMap[e]||t.cssProps[e]||e;e=h(e);if(n[e])e=h(n[e]);if(t.inArray(e,i)===-1){i.push(e)}});return i}function d(e,n,i,r){var s=l(e);if(t.cssEase[i]){i=t.cssEase[i]}var a=""+y(n)+" "+i;if(parseInt(r,10)>0){a+=" "+y(r)}var o=[];t.each(s,function(t,e){o.push(e+" "+a)});return o.join(", ")}t.fn.transition=t.fn.transit=function(e,i,r,s){var a=this;var u=0;var f=true;var l=t.extend(true,{},e);if(typeof i==="function"){s=i;i=undefined}if(typeof i==="object"){r=i.easing;u=i.delay||0;f=typeof i.queue==="undefined"?true:i.queue;s=i.complete;i=i.duration}if(typeof r==="function"){s=r;r=undefined}if(typeof l.easing!=="undefined"){r=l.easing;delete l.easing}if(typeof l.duration!=="undefined"){i=l.duration;delete l.duration}if(typeof l.complete!=="undefined"){s=l.complete;delete l.complete}if(typeof l.queue!=="undefined"){f=l.queue;delete l.queue}if(typeof l.delay!=="undefined"){u=l.delay;delete l.delay}if(typeof i==="undefined"){i=t.fx.speeds._default}if(typeof r==="undefined"){r=t.cssEase._default}i=y(i);var p=d(l,i,r,u);var h=t.transit.enabled&&n.transition;var b=h?parseInt(i,10)+parseInt(u,10):0;if(b===0){var g=function(t){a.css(l);if(s){s.apply(a)}if(t){t()}};c(a,f,g);return a}var m={};var v=function(e){var i=false;var r=function(){if(i){a.unbind(o,r)}if(b>0){a.each(function(){this.style[n.transition]=m[this]||null})}if(typeof s==="function"){s.apply(a)}if(typeof e==="function"){e()}};if(b>0&&o&&t.transit.useTransitionEnd){i=true;a.bind(o,r)}else{window.setTimeout(r,b)}a.each(function(){if(b>0){this.style[n.transition]=p}t(this).css(l)})};var z=function(t){this.offsetWidth;v(t)};c(a,f,z);return this};function p(e,i){if(!i){t.cssNumber[e]=true}t.transit.propertyMap[e]=n.transform;t.cssHooks[e]={get:function(n){var i=t(n).css("transit:transform");return i.get(e)},set:function(n,i){var r=t(n).css("transit:transform");r.setFromString(e,i);t(n).css({"transit:transform":r})}}}function h(t){return t.replace(/([A-Z])/g,function(t){return"-"+t.toLowerCase()})}function b(t,e){if(typeof t==="string"&&!t.match(/^[\-0-9\.]+$/)){return t}else{return""+t+e}}function y(e){var n=e;if(typeof n==="string"&&!n.match(/^[\-0-9\.]+/)){n=t.fx.speeds[n]||t.fx.speeds._default}return b(n,"ms")}t.transit.getTransitionValue=d;return t});;
/*
 _ _      _       _
 ___| (_) ___| | __  (_)___
 / __| | |/ __| |/ /  | / __|
 \__ \ | | (__|   < _ | \__ \
 |___/_|_|\___|_|\_(_)/ |___/
 |__/

 Version: 1.6.0
 Author: Ken Wheeler
 Website: http://kenwheeler.github.io
 Docs: http://kenwheeler.github.io/slick
 Repo: http://github.com/kenwheeler/slick
 Issues: http://github.com/kenwheeler/slick/issues

 */
!function (a) {
  "use strict";
  "function" == typeof define && define.amd ? define(["jquery"], a) : "undefined" != typeof exports ? module.exports = a(require("jquery")) : a(jQuery)
}(function (a) {
  "use strict";
  var b = window.Slick || {};
  b = function () {
    function c(c, d) {
      var f, e = this;
      e.defaults = {
        accessibility: !0,
        adaptiveHeight: !1,
        appendArrows: a(c),
        appendDots: a(c),
        arrows: !0,
        asNavFor: null,
        prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button">Previous</button>',
        nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button">Next</button>',
        autoplay: !1,
        autoplaySpeed: 3e3,
        centerMode: !1,
        centerPadding: "50px",
        cssEase: "ease",
        customPaging: function (b, c) {
          return a('<button type="button" data-role="none" role="button" tabindex="0" />').text(c + 1)
        },
        dots: !1,
        dotsClass: "slick-dots",
        draggable: !0,
        easing: "linear",
        edgeFriction: .35,
        fade: !1,
        focusOnSelect: !1,
        infinite: !0,
        initialSlide: 0,
        lazyLoad: "ondemand",
        mobileFirst: !1,
        pauseOnHover: !0,
        pauseOnFocus: !0,
        pauseOnDotsHover: !1,
        respondTo: "window",
        responsive: null,
        rows: 1,
        rtl: !1,
        slide: "",
        slidesPerRow: 1,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
        swipe: !0,
        swipeToSlide: !1,
        touchMove: !0,
        touchThreshold: 5,
        useCSS: !0,
        useTransform: !0,
        variableWidth: !1,
        vertical: !1,
        verticalSwiping: !1,
        waitForAnimate: !0,
        zIndex: 1e3
      }, e.initials = {
        animating: !1,
        dragging: !1,
        autoPlayTimer: null,
        currentDirection: 0,
        currentLeft: null,
        currentSlide: 0,
        direction: 1,
        $dots: null,
        listWidth: null,
        listHeight: null,
        loadIndex: 0,
        $nextArrow: null,
        $prevArrow: null,
        slideCount: null,
        slideWidth: null,
        $slideTrack: null,
        $slides: null,
        sliding: !1,
        slideOffset: 0,
        swipeLeft: null,
        $list: null,
        touchObject: {},
        transformsEnabled: !1,
        unslicked: !1
      }, a.extend(e, e.initials), e.activeBreakpoint = null, e.animType = null, e.animProp = null, e.breakpoints = [], e.breakpointSettings = [], e.cssTransitions = !1, e.focussed = !1, e.interrupted = !1, e.hidden = "hidden", e.paused = !0, e.positionProp = null, e.respondTo = null, e.rowCount = 1, e.shouldClick = !0, e.$slider = a(c), e.$slidesCache = null, e.transformType = null, e.transitionType = null, e.visibilityChange = "visibilitychange", e.windowWidth = 0, e.windowTimer = null, f = a(c).data("slick") || {}, e.options = a.extend({}, e.defaults, d, f), e.currentSlide = e.options.initialSlide, e.originalSettings = e.options, "undefined" != typeof document.mozHidden ? (e.hidden = "mozHidden", e.visibilityChange = "mozvisibilitychange") : "undefined" != typeof document.webkitHidden && (e.hidden = "webkitHidden", e.visibilityChange = "webkitvisibilitychange"), e.autoPlay = a.proxy(e.autoPlay, e), e.autoPlayClear = a.proxy(e.autoPlayClear, e), e.autoPlayIterator = a.proxy(e.autoPlayIterator, e), e.changeSlide = a.proxy(e.changeSlide, e), e.clickHandler = a.proxy(e.clickHandler, e), e.selectHandler = a.proxy(e.selectHandler, e), e.setPosition = a.proxy(e.setPosition, e), e.swipeHandler = a.proxy(e.swipeHandler, e), e.dragHandler = a.proxy(e.dragHandler, e), e.keyHandler = a.proxy(e.keyHandler, e), e.instanceUid = b++, e.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, e.registerBreakpoints(), e.init(!0)
    }

    var b = 0;
    return c
  }(), b.prototype.activateADA = function () {
    var a = this;
    a.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
  }, b.prototype.addSlide = b.prototype.slickAdd = function (b, c, d) {
    var e = this;
    if ("boolean" == typeof c) d = c, c = null; else if (0 > c || c >= e.slideCount)return !1;
    e.unload(), "number" == typeof c ? 0 === c && 0 === e.$slides.length ? a(b).appendTo(e.$slideTrack) : d ? a(b).insertBefore(e.$slides.eq(c)) : a(b).insertAfter(e.$slides.eq(c)) : d === !0 ? a(b).prependTo(e.$slideTrack) : a(b).appendTo(e.$slideTrack), e.$slides = e.$slideTrack.children(this.options.slide), e.$slideTrack.children(this.options.slide).detach(), e.$slideTrack.append(e.$slides), e.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b)
    }), e.$slidesCache = e.$slides, e.reinit()
  }, b.prototype.animateHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.animate({height: b}, a.options.speed)
    }
  }, b.prototype.animateSlide = function (b, c) {
    var d = {}, e = this;
    e.animateHeight(), e.options.rtl === !0 && e.options.vertical === !1 && (b = -b), e.transformsEnabled === !1 ? e.options.vertical === !1 ? e.$slideTrack.animate({left: b}, e.options.speed, e.options.easing, c) : e.$slideTrack.animate({top: b}, e.options.speed, e.options.easing, c) : e.cssTransitions === !1 ? (e.options.rtl === !0 && (e.currentLeft = -e.currentLeft), a({animStart: e.currentLeft}).animate({animStart: b}, {
      duration: e.options.speed,
      easing: e.options.easing,
      step: function (a) {
        a = Math.ceil(a), e.options.vertical === !1 ? (d[e.animType] = "translate(" + a + "px, 0px)", e.$slideTrack.css(d)) : (d[e.animType] = "translate(0px," + a + "px)", e.$slideTrack.css(d))
      },
      complete: function () {
        c && c.call()
      }
    })) : (e.applyTransition(), b = Math.ceil(b), e.options.vertical === !1 ? d[e.animType] = "translate3d(" + b + "px, 0px, 0px)" : d[e.animType] = "translate3d(0px," + b + "px, 0px)", e.$slideTrack.css(d), c && setTimeout(function () {
      e.disableTransition(), c.call()
    }, e.options.speed))
  }, b.prototype.getNavTarget = function () {
    var b = this, c = b.options.asNavFor;
    return c && null !== c && (c = a(c).not(b.$slider)), c
  }, b.prototype.asNavFor = function (b) {
    var c = this, d = c.getNavTarget();
    null !== d && "object" == typeof d && d.each(function () {
      var c = a(this).slick("getSlick");
      c.unslicked || c.slideHandler(b, !0)
    })
  }, b.prototype.applyTransition = function (a) {
    var b = this, c = {};
    b.options.fade === !1 ? c[b.transitionType] = b.transformType + " " + b.options.speed + "ms " + b.options.cssEase : c[b.transitionType] = "opacity " + b.options.speed + "ms " + b.options.cssEase, b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.autoPlay = function () {
    var a = this;
    a.autoPlayClear(), a.slideCount > a.options.slidesToShow && (a.autoPlayTimer = setInterval(a.autoPlayIterator, a.options.autoplaySpeed))
  }, b.prototype.autoPlayClear = function () {
    var a = this;
    a.autoPlayTimer && clearInterval(a.autoPlayTimer)
  }, b.prototype.autoPlayIterator = function () {
    var a = this, b = a.currentSlide + a.options.slidesToScroll;
    a.paused || a.interrupted || a.focussed || (a.options.infinite === !1 && (1 === a.direction && a.currentSlide + 1 === a.slideCount - 1 ? a.direction = 0 : 0 === a.direction && (b = a.currentSlide - a.options.slidesToScroll, a.currentSlide - 1 === 0 && (a.direction = 1))), a.slideHandler(b))
  }, b.prototype.buildArrows = function () {
    var b = this;
    b.options.arrows === !0 && (b.$prevArrow = a(b.options.prevArrow).addClass("slick-arrow"), b.$nextArrow = a(b.options.nextArrow).addClass("slick-arrow"), b.slideCount > b.options.slidesToShow ? (b.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.prependTo(b.options.appendArrows), b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.appendTo(b.options.appendArrows), b.options.infinite !== !0 && b.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : b.$prevArrow.add(b.$nextArrow).addClass("slick-hidden").attr({
      "aria-disabled": "true",
      tabindex: "-1"
    }))
  }, b.prototype.buildDots = function () {
    var c, d, b = this;
    if (b.options.dots === !0 && b.slideCount > b.options.slidesToShow) {
      for (b.$slider.addClass("slick-dotted"), d = a("<ul />").addClass(b.options.dotsClass), c = 0; c <= b.getDotCount(); c += 1)d.append(a("<li />").append(b.options.customPaging.call(this, b, c)));
      b.$dots = d.appendTo(b.options.appendDots), b.$dots.find("li").first().addClass("slick-active").attr("aria-hidden", "false")
    }
  }, b.prototype.buildOut = function () {
    var b = this;
    b.$slides = b.$slider.children(b.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), b.slideCount = b.$slides.length, b.$slides.each(function (b, c) {
      a(c).attr("data-slick-index", b).data("originalStyling", a(c).attr("style") || "")
    }), b.$slider.addClass("slick-slider"), b.$slideTrack = 0 === b.slideCount ? a('<div class="slick-track"/>').appendTo(b.$slider) : b.$slides.wrapAll('<div class="slick-track"/>').parent(), b.$list = b.$slideTrack.wrap('<div aria-live="polite" class="slick-list"/>').parent(), b.$slideTrack.css("opacity", 0), (b.options.centerMode === !0 || b.options.swipeToSlide === !0) && (b.options.slidesToScroll = 1), a("img[data-lazy]", b.$slider).not("[src]").addClass("slick-loading"), b.setupInfinite(), b.buildArrows(), b.buildDots(), b.updateDots(), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.options.draggable === !0 && b.$list.addClass("draggable")
  }, b.prototype.buildRows = function () {
    var b, c, d, e, f, g, h, a = this;
    if (e = document.createDocumentFragment(), g = a.$slider.children(), a.options.rows > 1) {
      for (h = a.options.slidesPerRow * a.options.rows, f = Math.ceil(g.length / h), b = 0; f > b; b++) {
        var i = document.createElement("div");
        for (c = 0; c < a.options.rows; c++) {
          var j = document.createElement("div");
          for (d = 0; d < a.options.slidesPerRow; d++) {
            var k = b * h + (c * a.options.slidesPerRow + d);
            g.get(k) && j.appendChild(g.get(k))
          }
          i.appendChild(j)
        }
        e.appendChild(i)
      }
      a.$slider.empty().append(e), a.$slider.children().children().children().css({
        width: 100 / a.options.slidesPerRow + "%",
        display: "inline-block"
      })
    }
  }, b.prototype.checkResponsive = function (b, c) {
    var e, f, g, d = this, h = !1, i = d.$slider.width(), j = window.innerWidth || a(window).width();
    if ("window" === d.respondTo ? g = j : "slider" === d.respondTo ? g = i : "min" === d.respondTo && (g = Math.min(j, i)), d.options.responsive && d.options.responsive.length && null !== d.options.responsive) {
      f = null;
      for (e in d.breakpoints)d.breakpoints.hasOwnProperty(e) && (d.originalSettings.mobileFirst === !1 ? g < d.breakpoints[e] && (f = d.breakpoints[e]) : g > d.breakpoints[e] && (f = d.breakpoints[e]));
      null !== f ? null !== d.activeBreakpoint ? (f !== d.activeBreakpoint || c) && (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : (d.activeBreakpoint = f, "unslick" === d.breakpointSettings[f] ? d.unslick(f) : (d.options = a.extend({}, d.originalSettings, d.breakpointSettings[f]), b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b)), h = f) : null !== d.activeBreakpoint && (d.activeBreakpoint = null, d.options = d.originalSettings, b === !0 && (d.currentSlide = d.options.initialSlide), d.refresh(b), h = f), b || h === !1 || d.$slider.trigger("breakpoint", [d, h])
    }
  }, b.prototype.changeSlide = function (b, c) {
    var f, g, h, d = this, e = a(b.currentTarget);
    switch (e.is("a") && b.preventDefault(), e.is("li") || (e = e.closest("li")), h = d.slideCount % d.options.slidesToScroll !== 0, f = h ? 0 : (d.slideCount - d.currentSlide) % d.options.slidesToScroll, b.data.message) {
      case"previous":
        g = 0 === f ? d.options.slidesToScroll : d.options.slidesToShow - f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide - g, !1, c);
        break;
      case"next":
        g = 0 === f ? d.options.slidesToScroll : f, d.slideCount > d.options.slidesToShow && d.slideHandler(d.currentSlide + g, !1, c);
        break;
      case"index":
        var i = 0 === b.data.index ? 0 : b.data.index || e.index() * d.options.slidesToScroll;
        d.slideHandler(d.checkNavigable(i), !1, c), e.children().trigger("focus");
        break;
      default:
        return
    }
  }, b.prototype.checkNavigable = function (a) {
    var c, d, b = this;
    if (c = b.getNavigableIndexes(), d = 0, a > c[c.length - 1]) a = c[c.length - 1]; else for (var e in c) {
      if (a < c[e]) {
        a = d;
        break
      }
      d = c[e]
    }
    return a
  }, b.prototype.cleanUpEvents = function () {
    var b = this;
    b.options.dots && null !== b.$dots && a("li", b.$dots).off("click.slick", b.changeSlide).off("mouseenter.slick", a.proxy(b.interrupt, b, !0)).off("mouseleave.slick", a.proxy(b.interrupt, b, !1)), b.$slider.off("focus.slick blur.slick"), b.options.arrows === !0 && b.slideCount > b.options.slidesToShow && (b.$prevArrow && b.$prevArrow.off("click.slick", b.changeSlide), b.$nextArrow && b.$nextArrow.off("click.slick", b.changeSlide)), b.$list.off("touchstart.slick mousedown.slick", b.swipeHandler), b.$list.off("touchmove.slick mousemove.slick", b.swipeHandler), b.$list.off("touchend.slick mouseup.slick", b.swipeHandler), b.$list.off("touchcancel.slick mouseleave.slick", b.swipeHandler), b.$list.off("click.slick", b.clickHandler), a(document).off(b.visibilityChange, b.visibility), b.cleanUpSlideEvents(), b.options.accessibility === !0 && b.$list.off("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().off("click.slick", b.selectHandler), a(window).off("orientationchange.slick.slick-" + b.instanceUid, b.orientationChange), a(window).off("resize.slick.slick-" + b.instanceUid, b.resize), a("[draggable!=true]", b.$slideTrack).off("dragstart", b.preventDefault), a(window).off("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).off("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.cleanUpSlideEvents = function () {
    var b = this;
    b.$list.off("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.off("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.cleanUpRows = function () {
    var b, a = this;
    a.options.rows > 1 && (b = a.$slides.children().children(), b.removeAttr("style"), a.$slider.empty().append(b))
  }, b.prototype.clickHandler = function (a) {
    var b = this;
    b.shouldClick === !1 && (a.stopImmediatePropagation(), a.stopPropagation(), a.preventDefault())
  }, b.prototype.destroy = function (b) {
    var c = this;
    c.autoPlayClear(), c.touchObject = {}, c.cleanUpEvents(), a(".slick-cloned", c.$slider).detach(), c.$dots && c.$dots.remove(), c.$prevArrow && c.$prevArrow.length && (c.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.prevArrow) && c.$prevArrow.remove()), c.$nextArrow && c.$nextArrow.length && (c.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), c.htmlExpr.test(c.options.nextArrow) && c.$nextArrow.remove()), c.$slides && (c.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
      a(this).attr("style", a(this).data("originalStyling"))
    }), c.$slideTrack.children(this.options.slide).detach(), c.$slideTrack.detach(), c.$list.detach(), c.$slider.append(c.$slides)), c.cleanUpRows(), c.$slider.removeClass("slick-slider"), c.$slider.removeClass("slick-initialized"), c.$slider.removeClass("slick-dotted"), c.unslicked = !0, b || c.$slider.trigger("destroy", [c])
  }, b.prototype.disableTransition = function (a) {
    var b = this, c = {};
    c[b.transitionType] = "", b.options.fade === !1 ? b.$slideTrack.css(c) : b.$slides.eq(a).css(c)
  }, b.prototype.fadeSlide = function (a, b) {
    var c = this;
    c.cssTransitions === !1 ? (c.$slides.eq(a).css({zIndex: c.options.zIndex}), c.$slides.eq(a).animate({opacity: 1}, c.options.speed, c.options.easing, b)) : (c.applyTransition(a), c.$slides.eq(a).css({
      opacity: 1,
      zIndex: c.options.zIndex
    }), b && setTimeout(function () {
      c.disableTransition(a), b.call()
    }, c.options.speed))
  }, b.prototype.fadeSlideOut = function (a) {
    var b = this;
    b.cssTransitions === !1 ? b.$slides.eq(a).animate({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }, b.options.speed, b.options.easing) : (b.applyTransition(a), b.$slides.eq(a).css({
      opacity: 0,
      zIndex: b.options.zIndex - 2
    }))
  }, b.prototype.filterSlides = b.prototype.slickFilter = function (a) {
    var b = this;
    null !== a && (b.$slidesCache = b.$slides, b.unload(), b.$slideTrack.children(this.options.slide).detach(), b.$slidesCache.filter(a).appendTo(b.$slideTrack), b.reinit())
  }, b.prototype.focusHandler = function () {
    var b = this;
    b.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*:not(.slick-arrow)", function (c) {
      c.stopImmediatePropagation();
      var d = a(this);
      setTimeout(function () {
        b.options.pauseOnFocus && (b.focussed = d.is(":focus"), b.autoPlay())
      }, 0)
    })
  }, b.prototype.getCurrent = b.prototype.slickCurrentSlide = function () {
    var a = this;
    return a.currentSlide
  }, b.prototype.getDotCount = function () {
    var a = this, b = 0, c = 0, d = 0;
    if (a.options.infinite === !0)for (; b < a.slideCount;)++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else if (a.options.centerMode === !0) d = a.slideCount; else if (a.options.asNavFor)for (; b < a.slideCount;)++d, b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow; else d = 1 + Math.ceil((a.slideCount - a.options.slidesToShow) / a.options.slidesToScroll);
    return d - 1
  }, b.prototype.getLeft = function (a) {
    var c, d, f, b = this, e = 0;
    return b.slideOffset = 0, d = b.$slides.first().outerHeight(!0), b.options.infinite === !0 ? (b.slideCount > b.options.slidesToShow && (b.slideOffset = b.slideWidth * b.options.slidesToShow * -1, e = d * b.options.slidesToShow * -1), b.slideCount % b.options.slidesToScroll !== 0 && a + b.options.slidesToScroll > b.slideCount && b.slideCount > b.options.slidesToShow && (a > b.slideCount ? (b.slideOffset = (b.options.slidesToShow - (a - b.slideCount)) * b.slideWidth * -1, e = (b.options.slidesToShow - (a - b.slideCount)) * d * -1) : (b.slideOffset = b.slideCount % b.options.slidesToScroll * b.slideWidth * -1, e = b.slideCount % b.options.slidesToScroll * d * -1))) : a + b.options.slidesToShow > b.slideCount && (b.slideOffset = (a + b.options.slidesToShow - b.slideCount) * b.slideWidth, e = (a + b.options.slidesToShow - b.slideCount) * d), b.slideCount <= b.options.slidesToShow && (b.slideOffset = 0, e = 0), b.options.centerMode === !0 && b.options.infinite === !0 ? b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2) - b.slideWidth : b.options.centerMode === !0 && (b.slideOffset = 0, b.slideOffset += b.slideWidth * Math.floor(b.options.slidesToShow / 2)), c = b.options.vertical === !1 ? a * b.slideWidth * -1 + b.slideOffset : a * d * -1 + e, b.options.variableWidth === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, b.options.centerMode === !0 && (f = b.slideCount <= b.options.slidesToShow || b.options.infinite === !1 ? b.$slideTrack.children(".slick-slide").eq(a) : b.$slideTrack.children(".slick-slide").eq(a + b.options.slidesToShow + 1), c = b.options.rtl === !0 ? f[0] ? -1 * (b.$slideTrack.width() - f[0].offsetLeft - f.width()) : 0 : f[0] ? -1 * f[0].offsetLeft : 0, c += (b.$list.width() - f.outerWidth()) / 2)), c
  }, b.prototype.getOption = b.prototype.slickGetOption = function (a) {
    var b = this;
    return b.options[a]
  }, b.prototype.getNavigableIndexes = function () {
    var e, a = this, b = 0, c = 0, d = [];
    for (a.options.infinite === !1 ? e = a.slideCount : (b = -1 * a.options.slidesToScroll, c = -1 * a.options.slidesToScroll, e = 2 * a.slideCount); e > b;)d.push(b), b = c + a.options.slidesToScroll, c += a.options.slidesToScroll <= a.options.slidesToShow ? a.options.slidesToScroll : a.options.slidesToShow;
    return d
  }, b.prototype.getSlick = function () {
    return this
  }, b.prototype.getSlideCount = function () {
    var c, d, e, b = this;
    return e = b.options.centerMode === !0 ? b.slideWidth * Math.floor(b.options.slidesToShow / 2) : 0, b.options.swipeToSlide === !0 ? (b.$slideTrack.find(".slick-slide").each(function (c, f) {
      return f.offsetLeft - e + a(f).outerWidth() / 2 > -1 * b.swipeLeft ? (d = f, !1) : void 0
    }), c = Math.abs(a(d).attr("data-slick-index") - b.currentSlide) || 1) : b.options.slidesToScroll
  }, b.prototype.goTo = b.prototype.slickGoTo = function (a, b) {
    var c = this;
    c.changeSlide({data: {message: "index", index: parseInt(a)}}, b)
  }, b.prototype.init = function (b) {
    var c = this;
    a(c.$slider).hasClass("slick-initialized") || (a(c.$slider).addClass("slick-initialized"), c.buildRows(), c.buildOut(), c.setProps(), c.startLoad(), c.loadSlider(), c.initializeEvents(), c.updateArrows(), c.updateDots(), c.checkResponsive(!0), c.focusHandler()), b && c.$slider.trigger("init", [c]), c.options.accessibility === !0 && c.initADA(), c.options.autoplay && (c.paused = !1, c.autoPlay())
  }, b.prototype.initADA = function () {
    var b = this;
    b.$slides.add(b.$slideTrack.find(".slick-cloned")).attr({
      "aria-hidden": "true",
      tabindex: "-1"
    }).find("a, input, button, select").attr({tabindex: "-1"}), b.$slideTrack.attr("role", "listbox"), b.$slides.not(b.$slideTrack.find(".slick-cloned")).each(function (c) {
      a(this).attr({role: "option", "aria-describedby": "slick-slide" + b.instanceUid + c})
    }), null !== b.$dots && b.$dots.attr("role", "tablist").find("li").each(function (c) {
      a(this).attr({
        role: "presentation",
        "aria-selected": "false",
        "aria-controls": "navigation" + b.instanceUid + c,
        id: "slick-slide" + b.instanceUid + c
      })
    }).first().attr("aria-selected", "true").end().find("button").attr("role", "button").end().closest("div").attr("role", "toolbar"), b.activateADA()
  }, b.prototype.initArrowEvents = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, a.changeSlide), a.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, a.changeSlide))
  }, b.prototype.initDotEvents = function () {
    var b = this;
    b.options.dots === !0 && b.slideCount > b.options.slidesToShow && a("li", b.$dots).on("click.slick", {message: "index"}, b.changeSlide), b.options.dots === !0 && b.options.pauseOnDotsHover === !0 && a("li", b.$dots).on("mouseenter.slick", a.proxy(b.interrupt, b, !0)).on("mouseleave.slick", a.proxy(b.interrupt, b, !1))
  }, b.prototype.initSlideEvents = function () {
    var b = this;
    b.options.pauseOnHover && (b.$list.on("mouseenter.slick", a.proxy(b.interrupt, b, !0)), b.$list.on("mouseleave.slick", a.proxy(b.interrupt, b, !1)))
  }, b.prototype.initializeEvents = function () {
    var b = this;
    b.initArrowEvents(), b.initDotEvents(), b.initSlideEvents(), b.$list.on("touchstart.slick mousedown.slick", {action: "start"}, b.swipeHandler), b.$list.on("touchmove.slick mousemove.slick", {action: "move"}, b.swipeHandler), b.$list.on("touchend.slick mouseup.slick", {action: "end"}, b.swipeHandler), b.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, b.swipeHandler), b.$list.on("click.slick", b.clickHandler), a(document).on(b.visibilityChange, a.proxy(b.visibility, b)), b.options.accessibility === !0 && b.$list.on("keydown.slick", b.keyHandler), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), a(window).on("orientationchange.slick.slick-" + b.instanceUid, a.proxy(b.orientationChange, b)), a(window).on("resize.slick.slick-" + b.instanceUid, a.proxy(b.resize, b)), a("[draggable!=true]", b.$slideTrack).on("dragstart", b.preventDefault), a(window).on("load.slick.slick-" + b.instanceUid, b.setPosition), a(document).on("ready.slick.slick-" + b.instanceUid, b.setPosition)
  }, b.prototype.initUI = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.show(), a.$nextArrow.show()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.show()
  }, b.prototype.keyHandler = function (a) {
    var b = this;
    a.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === a.keyCode && b.options.accessibility === !0 ? b.changeSlide({data: {message: b.options.rtl === !0 ? "next" : "previous"}}) : 39 === a.keyCode && b.options.accessibility === !0 && b.changeSlide({data: {message: b.options.rtl === !0 ? "previous" : "next"}}))
  }, b.prototype.lazyLoad = function () {
    function g(c) {
      a("img[data-lazy]", c).each(function () {
        var c = a(this), d = a(this).attr("data-lazy"), e = document.createElement("img");
        e.onload = function () {
          c.animate({opacity: 0}, 100, function () {
            c.attr("src", d).animate({opacity: 1}, 200, function () {
              c.removeAttr("data-lazy").removeClass("slick-loading")
            }), b.$slider.trigger("lazyLoaded", [b, c, d])
          })
        }, e.onerror = function () {
          c.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), b.$slider.trigger("lazyLoadError", [b, c, d])
        }, e.src = d
      })
    }

    var c, d, e, f, b = this;
    b.options.centerMode === !0 ? b.options.infinite === !0 ? (e = b.currentSlide + (b.options.slidesToShow / 2 + 1), f = e + b.options.slidesToShow + 2) : (e = Math.max(0, b.currentSlide - (b.options.slidesToShow / 2 + 1)), f = 2 + (b.options.slidesToShow / 2 + 1) + b.currentSlide) : (e = b.options.infinite ? b.options.slidesToShow + b.currentSlide : b.currentSlide, f = Math.ceil(e + b.options.slidesToShow), b.options.fade === !0 && (e > 0 && e--, f <= b.slideCount && f++)), c = b.$slider.find(".slick-slide").slice(e, f), g(c), b.slideCount <= b.options.slidesToShow ? (d = b.$slider.find(".slick-slide"), g(d)) : b.currentSlide >= b.slideCount - b.options.slidesToShow ? (d = b.$slider.find(".slick-cloned").slice(0, b.options.slidesToShow), g(d)) : 0 === b.currentSlide && (d = b.$slider.find(".slick-cloned").slice(-1 * b.options.slidesToShow), g(d))
  }, b.prototype.loadSlider = function () {
    var a = this;
    a.setPosition(), a.$slideTrack.css({opacity: 1}), a.$slider.removeClass("slick-loading"), a.initUI(), "progressive" === a.options.lazyLoad && a.progressiveLazyLoad()
  }, b.prototype.next = b.prototype.slickNext = function () {
    var a = this;
    a.changeSlide({data: {message: "next"}})
  }, b.prototype.orientationChange = function () {
    var a = this;
    a.checkResponsive(), a.setPosition()
  }, b.prototype.pause = b.prototype.slickPause = function () {
    var a = this;
    a.autoPlayClear(), a.paused = !0
  }, b.prototype.play = b.prototype.slickPlay = function () {
    var a = this;
    a.autoPlay(), a.options.autoplay = !0, a.paused = !1, a.focussed = !1, a.interrupted = !1
  }, b.prototype.postSlide = function (a) {
    var b = this;
    b.unslicked || (b.$slider.trigger("afterChange", [b, a]), b.animating = !1, b.setPosition(), b.swipeLeft = null, b.options.autoplay && b.autoPlay(), b.options.accessibility === !0 && b.initADA())
  }, b.prototype.prev = b.prototype.slickPrev = function () {
    var a = this;
    a.changeSlide({data: {message: "previous"}})
  }, b.prototype.preventDefault = function (a) {
    a.preventDefault()
  }, b.prototype.progressiveLazyLoad = function (b) {
    b = b || 1;
    var e, f, g, c = this, d = a("img[data-lazy]", c.$slider);
    d.length ? (e = d.first(), f = e.attr("data-lazy"), g = document.createElement("img"), g.onload = function () {
      e.attr("src", f).removeAttr("data-lazy").removeClass("slick-loading"), c.options.adaptiveHeight === !0 && c.setPosition(), c.$slider.trigger("lazyLoaded", [c, e, f]), c.progressiveLazyLoad()
    }, g.onerror = function () {
      3 > b ? setTimeout(function () {
        c.progressiveLazyLoad(b + 1)
      }, 500) : (e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), c.$slider.trigger("lazyLoadError", [c, e, f]), c.progressiveLazyLoad())
    }, g.src = f) : c.$slider.trigger("allImagesLoaded", [c])
  }, b.prototype.refresh = function (b) {
    var d, e, c = this;
    e = c.slideCount - c.options.slidesToShow, !c.options.infinite && c.currentSlide > e && (c.currentSlide = e), c.slideCount <= c.options.slidesToShow && (c.currentSlide = 0), d = c.currentSlide, c.destroy(!0), a.extend(c, c.initials, {currentSlide: d}), c.init(), b || c.changeSlide({
      data: {
        message: "index",
        index: d
      }
    }, !1)
  }, b.prototype.registerBreakpoints = function () {
    var c, d, e, b = this, f = b.options.responsive || null;
    if ("array" === a.type(f) && f.length) {
      b.respondTo = b.options.respondTo || "window";
      for (c in f)if (e = b.breakpoints.length - 1, d = f[c].breakpoint, f.hasOwnProperty(c)) {
        for (; e >= 0;)b.breakpoints[e] && b.breakpoints[e] === d && b.breakpoints.splice(e, 1), e--;
        b.breakpoints.push(d), b.breakpointSettings[d] = f[c].settings
      }
      b.breakpoints.sort(function (a, c) {
        return b.options.mobileFirst ? a - c : c - a
      })
    }
  }, b.prototype.reinit = function () {
    var b = this;
    b.$slides = b.$slideTrack.children(b.options.slide).addClass("slick-slide"), b.slideCount = b.$slides.length, b.currentSlide >= b.slideCount && 0 !== b.currentSlide && (b.currentSlide = b.currentSlide - b.options.slidesToScroll), b.slideCount <= b.options.slidesToShow && (b.currentSlide = 0), b.registerBreakpoints(), b.setProps(), b.setupInfinite(), b.buildArrows(), b.updateArrows(), b.initArrowEvents(), b.buildDots(), b.updateDots(), b.initDotEvents(), b.cleanUpSlideEvents(), b.initSlideEvents(), b.checkResponsive(!1, !0), b.options.focusOnSelect === !0 && a(b.$slideTrack).children().on("click.slick", b.selectHandler), b.setSlideClasses("number" == typeof b.currentSlide ? b.currentSlide : 0), b.setPosition(), b.focusHandler(), b.paused = !b.options.autoplay, b.autoPlay(), b.$slider.trigger("reInit", [b])
  }, b.prototype.resize = function () {
    var b = this;
    a(window).width() !== b.windowWidth && (clearTimeout(b.windowDelay), b.windowDelay = window.setTimeout(function () {
      b.windowWidth = a(window).width(), b.checkResponsive(), b.unslicked || b.setPosition()
    }, 50))
  }, b.prototype.removeSlide = b.prototype.slickRemove = function (a, b, c) {
    var d = this;
    return "boolean" == typeof a ? (b = a, a = b === !0 ? 0 : d.slideCount - 1) : a = b === !0 ? --a : a, d.slideCount < 1 || 0 > a || a > d.slideCount - 1 ? !1 : (d.unload(), c === !0 ? d.$slideTrack.children().remove() : d.$slideTrack.children(this.options.slide).eq(a).remove(), d.$slides = d.$slideTrack.children(this.options.slide), d.$slideTrack.children(this.options.slide).detach(), d.$slideTrack.append(d.$slides), d.$slidesCache = d.$slides, void d.reinit())
  }, b.prototype.setCSS = function (a) {
    var d, e, b = this, c = {};
    b.options.rtl === !0 && (a = -a), d = "left" == b.positionProp ? Math.ceil(a) + "px" : "0px", e = "top" == b.positionProp ? Math.ceil(a) + "px" : "0px", c[b.positionProp] = a, b.transformsEnabled === !1 ? b.$slideTrack.css(c) : (c = {}, b.cssTransitions === !1 ? (c[b.animType] = "translate(" + d + ", " + e + ")", b.$slideTrack.css(c)) : (c[b.animType] = "translate3d(" + d + ", " + e + ", 0px)", b.$slideTrack.css(c)))
  }, b.prototype.setDimensions = function () {
    var a = this;
    a.options.vertical === !1 ? a.options.centerMode === !0 && a.$list.css({padding: "0px " + a.options.centerPadding}) : (a.$list.height(a.$slides.first().outerHeight(!0) * a.options.slidesToShow), a.options.centerMode === !0 && a.$list.css({padding: a.options.centerPadding + " 0px"})), a.listWidth = a.$list.width(), a.listHeight = a.$list.height(), a.options.vertical === !1 && a.options.variableWidth === !1 ? (a.slideWidth = Math.ceil(a.listWidth / a.options.slidesToShow), a.$slideTrack.width(Math.ceil(a.slideWidth * a.$slideTrack.children(".slick-slide").length))) : a.options.variableWidth === !0 ? a.$slideTrack.width(5e3 * a.slideCount) : (a.slideWidth = Math.ceil(a.listWidth), a.$slideTrack.height(Math.ceil(a.$slides.first().outerHeight(!0) * a.$slideTrack.children(".slick-slide").length)));
    var b = a.$slides.first().outerWidth(!0) - a.$slides.first().width();
    a.options.variableWidth === !1 && a.$slideTrack.children(".slick-slide").width(a.slideWidth - b)
  }, b.prototype.setFade = function () {
    var c, b = this;
    b.$slides.each(function (d, e) {
      c = b.slideWidth * d * -1, b.options.rtl === !0 ? a(e).css({
        position: "relative",
        right: c,
        top: 0,
        zIndex: b.options.zIndex - 2,
        opacity: 0
      }) : a(e).css({position: "relative", left: c, top: 0, zIndex: b.options.zIndex - 2, opacity: 0})
    }), b.$slides.eq(b.currentSlide).css({zIndex: b.options.zIndex - 1, opacity: 1})
  }, b.prototype.setHeight = function () {
    var a = this;
    if (1 === a.options.slidesToShow && a.options.adaptiveHeight === !0 && a.options.vertical === !1) {
      var b = a.$slides.eq(a.currentSlide).outerHeight(!0);
      a.$list.css("height", b)
    }
  }, b.prototype.setOption = b.prototype.slickSetOption = function () {
    var c, d, e, f, h, b = this, g = !1;
    if ("object" === a.type(arguments[0]) ? (e = arguments[0], g = arguments[1], h = "multiple") : "string" === a.type(arguments[0]) && (e = arguments[0], f = arguments[1], g = arguments[2], "responsive" === arguments[0] && "array" === a.type(arguments[1]) ? h = "responsive" : "undefined" != typeof arguments[1] && (h = "single")), "single" === h) b.options[e] = f; else if ("multiple" === h) a.each(e, function (a, c) {
      b.options[a] = c
    }); else if ("responsive" === h)for (d in f)if ("array" !== a.type(b.options.responsive)) b.options.responsive = [f[d]]; else {
      for (c = b.options.responsive.length - 1; c >= 0;)b.options.responsive[c].breakpoint === f[d].breakpoint && b.options.responsive.splice(c, 1), c--;
      b.options.responsive.push(f[d])
    }
    g && (b.unload(), b.reinit())
  }, b.prototype.setPosition = function () {
    var a = this;
    a.setDimensions(), a.setHeight(), a.options.fade === !1 ? a.setCSS(a.getLeft(a.currentSlide)) : a.setFade(), a.$slider.trigger("setPosition", [a])
  }, b.prototype.setProps = function () {
    var a = this, b = document.body.style;
    a.positionProp = a.options.vertical === !0 ? "top" : "left", "top" === a.positionProp ? a.$slider.addClass("slick-vertical") : a.$slider.removeClass("slick-vertical"), (void 0 !== b.WebkitTransition || void 0 !== b.MozTransition || void 0 !== b.msTransition) && a.options.useCSS === !0 && (a.cssTransitions = !0), a.options.fade && ("number" == typeof a.options.zIndex ? a.options.zIndex < 3 && (a.options.zIndex = 3) : a.options.zIndex = a.defaults.zIndex), void 0 !== b.OTransform && (a.animType = "OTransform", a.transformType = "-o-transform", a.transitionType = "OTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.MozTransform && (a.animType = "MozTransform", a.transformType = "-moz-transform", a.transitionType = "MozTransition", void 0 === b.perspectiveProperty && void 0 === b.MozPerspective && (a.animType = !1)), void 0 !== b.webkitTransform && (a.animType = "webkitTransform", a.transformType = "-webkit-transform", a.transitionType = "webkitTransition", void 0 === b.perspectiveProperty && void 0 === b.webkitPerspective && (a.animType = !1)), void 0 !== b.msTransform && (a.animType = "msTransform", a.transformType = "-ms-transform", a.transitionType = "msTransition", void 0 === b.msTransform && (a.animType = !1)), void 0 !== b.transform && a.animType !== !1 && (a.animType = "transform", a.transformType = "transform", a.transitionType = "transition"), a.transformsEnabled = a.options.useTransform && null !== a.animType && a.animType !== !1
  }, b.prototype.setSlideClasses = function (a) {
    var c, d, e, f, b = this;
    d = b.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), b.$slides.eq(a).addClass("slick-current"), b.options.centerMode === !0 ? (c = Math.floor(b.options.slidesToShow / 2), b.options.infinite === !0 && (a >= c && a <= b.slideCount - 1 - c ? b.$slides.slice(a - c, a + c + 1).addClass("slick-active").attr("aria-hidden", "false") : (e = b.options.slidesToShow + a,
      d.slice(e - c + 1, e + c + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === a ? d.eq(d.length - 1 - b.options.slidesToShow).addClass("slick-center") : a === b.slideCount - 1 && d.eq(b.options.slidesToShow).addClass("slick-center")), b.$slides.eq(a).addClass("slick-center")) : a >= 0 && a <= b.slideCount - b.options.slidesToShow ? b.$slides.slice(a, a + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : d.length <= b.options.slidesToShow ? d.addClass("slick-active").attr("aria-hidden", "false") : (f = b.slideCount % b.options.slidesToShow, e = b.options.infinite === !0 ? b.options.slidesToShow + a : a, b.options.slidesToShow == b.options.slidesToScroll && b.slideCount - a < b.options.slidesToShow ? d.slice(e - (b.options.slidesToShow - f), e + f).addClass("slick-active").attr("aria-hidden", "false") : d.slice(e, e + b.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false")), "ondemand" === b.options.lazyLoad && b.lazyLoad()
  }, b.prototype.setupInfinite = function () {
    var c, d, e, b = this;
    if (b.options.fade === !0 && (b.options.centerMode = !1), b.options.infinite === !0 && b.options.fade === !1 && (d = null, b.slideCount > b.options.slidesToShow)) {
      for (e = b.options.centerMode === !0 ? b.options.slidesToShow + 1 : b.options.slidesToShow, c = b.slideCount; c > b.slideCount - e; c -= 1)d = c - 1, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d - b.slideCount).prependTo(b.$slideTrack).addClass("slick-cloned");
      for (c = 0; e > c; c += 1)d = c, a(b.$slides[d]).clone(!0).attr("id", "").attr("data-slick-index", d + b.slideCount).appendTo(b.$slideTrack).addClass("slick-cloned");
      b.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
        a(this).attr("id", "")
      })
    }
  }, b.prototype.interrupt = function (a) {
    var b = this;
    a || b.autoPlay(), b.interrupted = a
  }, b.prototype.selectHandler = function (b) {
    var c = this, d = a(b.target).is(".slick-slide") ? a(b.target) : a(b.target).parents(".slick-slide"),
      e = parseInt(d.attr("data-slick-index"));
    return e || (e = 0), c.slideCount <= c.options.slidesToShow ? (c.setSlideClasses(e), void c.asNavFor(e)) : void c.slideHandler(e)
  }, b.prototype.slideHandler = function (a, b, c) {
    var d, e, f, g, j, h = null, i = this;
    return b = b || !1, i.animating === !0 && i.options.waitForAnimate === !0 || i.options.fade === !0 && i.currentSlide === a || i.slideCount <= i.options.slidesToShow ? void 0 : (b === !1 && i.asNavFor(a), d = a, h = i.getLeft(d), g = i.getLeft(i.currentSlide), i.currentLeft = null === i.swipeLeft ? g : i.swipeLeft, i.options.infinite === !1 && i.options.centerMode === !1 && (0 > a || a > i.getDotCount() * i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : i.options.infinite === !1 && i.options.centerMode === !0 && (0 > a || a > i.slideCount - i.options.slidesToScroll) ? void(i.options.fade === !1 && (d = i.currentSlide, c !== !0 ? i.animateSlide(g, function () {
      i.postSlide(d)
    }) : i.postSlide(d))) : (i.options.autoplay && clearInterval(i.autoPlayTimer), e = 0 > d ? i.slideCount % i.options.slidesToScroll !== 0 ? i.slideCount - i.slideCount % i.options.slidesToScroll : i.slideCount + d : d >= i.slideCount ? i.slideCount % i.options.slidesToScroll !== 0 ? 0 : d - i.slideCount : d, i.animating = !0, i.$slider.trigger("beforeChange", [i, i.currentSlide, e]), f = i.currentSlide, i.currentSlide = e, i.setSlideClasses(i.currentSlide), i.options.asNavFor && (j = i.getNavTarget(), j = j.slick("getSlick"), j.slideCount <= j.options.slidesToShow && j.setSlideClasses(i.currentSlide)), i.updateDots(), i.updateArrows(), i.options.fade === !0 ? (c !== !0 ? (i.fadeSlideOut(f), i.fadeSlide(e, function () {
      i.postSlide(e)
    })) : i.postSlide(e), void i.animateHeight()) : void(c !== !0 ? i.animateSlide(h, function () {
      i.postSlide(e)
    }) : i.postSlide(e))))
  }, b.prototype.startLoad = function () {
    var a = this;
    a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && (a.$prevArrow.hide(), a.$nextArrow.hide()), a.options.dots === !0 && a.slideCount > a.options.slidesToShow && a.$dots.hide(), a.$slider.addClass("slick-loading")
  }, b.prototype.swipeDirection = function () {
    var a, b, c, d, e = this;
    return a = e.touchObject.startX - e.touchObject.curX, b = e.touchObject.startY - e.touchObject.curY, c = Math.atan2(b, a), d = Math.round(180 * c / Math.PI), 0 > d && (d = 360 - Math.abs(d)), 45 >= d && d >= 0 ? e.options.rtl === !1 ? "left" : "right" : 360 >= d && d >= 315 ? e.options.rtl === !1 ? "left" : "right" : d >= 135 && 225 >= d ? e.options.rtl === !1 ? "right" : "left" : e.options.verticalSwiping === !0 ? d >= 35 && 135 >= d ? "down" : "up" : "vertical"
  }, b.prototype.swipeEnd = function (a) {
    var c, d, b = this;
    if (b.dragging = !1, b.interrupted = !1, b.shouldClick = b.touchObject.swipeLength > 10 ? !1 : !0, void 0 === b.touchObject.curX)return !1;
    if (b.touchObject.edgeHit === !0 && b.$slider.trigger("edge", [b, b.swipeDirection()]), b.touchObject.swipeLength >= b.touchObject.minSwipe) {
      switch (d = b.swipeDirection()) {
        case"left":
        case"down":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide + b.getSlideCount()) : b.currentSlide + b.getSlideCount(), b.currentDirection = 0;
          break;
        case"right":
        case"up":
          c = b.options.swipeToSlide ? b.checkNavigable(b.currentSlide - b.getSlideCount()) : b.currentSlide - b.getSlideCount(), b.currentDirection = 1
      }
      "vertical" != d && (b.slideHandler(c), b.touchObject = {}, b.$slider.trigger("swipe", [b, d]))
    } else b.touchObject.startX !== b.touchObject.curX && (b.slideHandler(b.currentSlide), b.touchObject = {})
  }, b.prototype.swipeHandler = function (a) {
    var b = this;
    if (!(b.options.swipe === !1 || "ontouchend" in document && b.options.swipe === !1 || b.options.draggable === !1 && -1 !== a.type.indexOf("mouse")))switch (b.touchObject.fingerCount = a.originalEvent && void 0 !== a.originalEvent.touches ? a.originalEvent.touches.length : 1, b.touchObject.minSwipe = b.listWidth / b.options.touchThreshold, b.options.verticalSwiping === !0 && (b.touchObject.minSwipe = b.listHeight / b.options.touchThreshold), a.data.action) {
      case"start":
        b.swipeStart(a);
        break;
      case"move":
        b.swipeMove(a);
        break;
      case"end":
        b.swipeEnd(a)
    }
  }, b.prototype.swipeMove = function (a) {
    var d, e, f, g, h, b = this;
    return h = void 0 !== a.originalEvent ? a.originalEvent.touches : null, !b.dragging || h && 1 !== h.length ? !1 : (d = b.getLeft(b.currentSlide), b.touchObject.curX = void 0 !== h ? h[0].pageX : a.clientX, b.touchObject.curY = void 0 !== h ? h[0].pageY : a.clientY, b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curX - b.touchObject.startX, 2))), b.options.verticalSwiping === !0 && (b.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(b.touchObject.curY - b.touchObject.startY, 2)))), e = b.swipeDirection(), "vertical" !== e ? (void 0 !== a.originalEvent && b.touchObject.swipeLength > 4 && a.preventDefault(), g = (b.options.rtl === !1 ? 1 : -1) * (b.touchObject.curX > b.touchObject.startX ? 1 : -1), b.options.verticalSwiping === !0 && (g = b.touchObject.curY > b.touchObject.startY ? 1 : -1), f = b.touchObject.swipeLength, b.touchObject.edgeHit = !1, b.options.infinite === !1 && (0 === b.currentSlide && "right" === e || b.currentSlide >= b.getDotCount() && "left" === e) && (f = b.touchObject.swipeLength * b.options.edgeFriction, b.touchObject.edgeHit = !0), b.options.vertical === !1 ? b.swipeLeft = d + f * g : b.swipeLeft = d + f * (b.$list.height() / b.listWidth) * g, b.options.verticalSwiping === !0 && (b.swipeLeft = d + f * g), b.options.fade === !0 || b.options.touchMove === !1 ? !1 : b.animating === !0 ? (b.swipeLeft = null, !1) : void b.setCSS(b.swipeLeft)) : void 0)
  }, b.prototype.swipeStart = function (a) {
    var c, b = this;
    return b.interrupted = !0, 1 !== b.touchObject.fingerCount || b.slideCount <= b.options.slidesToShow ? (b.touchObject = {}, !1) : (void 0 !== a.originalEvent && void 0 !== a.originalEvent.touches && (c = a.originalEvent.touches[0]), b.touchObject.startX = b.touchObject.curX = void 0 !== c ? c.pageX : a.clientX, b.touchObject.startY = b.touchObject.curY = void 0 !== c ? c.pageY : a.clientY, void(b.dragging = !0))
  }, b.prototype.unfilterSlides = b.prototype.slickUnfilter = function () {
    var a = this;
    null !== a.$slidesCache && (a.unload(), a.$slideTrack.children(this.options.slide).detach(), a.$slidesCache.appendTo(a.$slideTrack), a.reinit())
  }, b.prototype.unload = function () {
    var b = this;
    a(".slick-cloned", b.$slider).remove(), b.$dots && b.$dots.remove(), b.$prevArrow && b.htmlExpr.test(b.options.prevArrow) && b.$prevArrow.remove(), b.$nextArrow && b.htmlExpr.test(b.options.nextArrow) && b.$nextArrow.remove(), b.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
  }, b.prototype.unslick = function (a) {
    var b = this;
    b.$slider.trigger("unslick", [b, a]), b.destroy()
  }, b.prototype.updateArrows = function () {
    var b, a = this;
    b = Math.floor(a.options.slidesToShow / 2), a.options.arrows === !0 && a.slideCount > a.options.slidesToShow && !a.options.infinite && (a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === a.currentSlide ? (a.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - a.options.slidesToShow && a.options.centerMode === !1 ? (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : a.currentSlide >= a.slideCount - 1 && a.options.centerMode === !0 && (a.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), a.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
  }, b.prototype.updateDots = function () {
    var a = this;
    null !== a.$dots && (a.$dots.find("li").removeClass("slick-active").attr("aria-hidden", "true"), a.$dots.find("li").eq(Math.floor(a.currentSlide / a.options.slidesToScroll)).addClass("slick-active").attr("aria-hidden", "false"))
  }, b.prototype.visibility = function () {
    var a = this;
    a.options.autoplay && (document[a.hidden] ? a.interrupted = !0 : a.interrupted = !1)
  }, a.fn.slick = function () {
    var f, g, a = this, c = arguments[0], d = Array.prototype.slice.call(arguments, 1), e = a.length;
    for (f = 0; e > f; f++)if ("object" == typeof c || "undefined" == typeof c ? a[f].slick = new b(a[f], c) : g = a[f].slick[c].apply(a[f].slick, d), "undefined" != typeof g)return g;
    return a
  }
});;
/*
 *	jQuery dotdotdot 1.6.14
 *
 *	Copyright (c) Fred Heusschen
 *	www.frebsite.nl
 *
 *	Plugin website:
 *	dotdotdot.frebsite.nl
 *
 *	Dual licensed under the MIT and GPL licenses.
 *	http://en.wikipedia.org/wiki/MIT_License
 *	http://en.wikipedia.org/wiki/GNU_General_Public_License
 */

(function( $, undef )
{
	if ( $.fn.dotdotdot )
	{
		return;
	}

	$.fn.dotdotdot = function( o )
	{
		if ( this.length == 0 )
		{
			$.fn.dotdotdot.debug( 'No element found for "' + this.selector + '".' );
			return this;
		}
		if ( this.length > 1 )
		{
			return this.each(
				function()
				{
					$(this).dotdotdot( o );
				}
			);
		}


		var $dot = this;

		if ( $dot.data( 'dotdotdot' ) )
		{
			$dot.trigger( 'destroy.dot' );
		}

		$dot.data( 'dotdotdot-style', $dot.attr( 'style' ) || '' );
		$dot.css( 'word-wrap', 'break-word' );
		if ($dot.css( 'white-space' ) === 'nowrap')
		{
			$dot.css( 'white-space', 'normal' );
		}

		$dot.bind_events = function()
		{
			$dot.bind(
				'update.dot',
				function( e, c )
				{
					e.preventDefault();
					e.stopPropagation();

					opts.maxHeight = ( typeof opts.height == 'number' )
						? opts.height
						: getTrueInnerHeight( $dot );

					opts.maxHeight += opts.tolerance;

					if ( typeof c != 'undefined' )
					{
						if ( typeof c == 'string' || c instanceof HTMLElement )
						{
					 		c = $('<div />').append( c ).contents();
						}
						if ( c instanceof $ )
						{
							orgContent = c;
						}
					}

					$inr = $dot.wrapInner( '<div class="dotdotdot" />' ).children();
					$inr.contents()
						.detach()
						.end()
						.append( orgContent.clone( true ) )
						.find( 'br' ).replaceWith( '  <br />  ' ).end()
						.css({
							'height'	: 'auto',
							'width'		: 'auto',
							'border'	: 'none',
							'padding'	: 0,
							'margin'	: 0
						});

					var after = false,
						trunc = false;

					if ( conf.afterElement )
					{
						after = conf.afterElement.clone( true );
					    after.show();
						conf.afterElement.detach();
					}

					if ( test( $inr, opts ) )
					{
						if ( opts.wrap == 'children' )
						{
							trunc = children( $inr, opts, after );
						}
						else
						{
							trunc = ellipsis( $inr, $dot, $inr, opts, after );
						}
					}
					$inr.replaceWith( $inr.contents() );
					$inr = null;

					if ( $.isFunction( opts.callback ) )
					{
						opts.callback.call( $dot[ 0 ], trunc, orgContent );
					}

					conf.isTruncated = trunc;
					return trunc;
				}

			).bind(
				'isTruncated.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], conf.isTruncated );
					}
					return conf.isTruncated;
				}

			).bind(
				'originalContent.dot',
				function( e, fn )
				{
					e.preventDefault();
					e.stopPropagation();

					if ( typeof fn == 'function' )
					{
						fn.call( $dot[ 0 ], orgContent );
					}
					return orgContent;
				}

			).bind(
				'destroy.dot',
				function( e )
				{
					e.preventDefault();
					e.stopPropagation();

					$dot.unwatch()
						.unbind_events()
						.contents()
						.detach()
						.end()
						.append( orgContent )
						.attr( 'style', $dot.data( 'dotdotdot-style' ) || '' )
						.data( 'dotdotdot', false );
				}
			);
			return $dot;
		};	//	/bind_events

		$dot.unbind_events = function()
		{
			$dot.unbind('.dot');
			return $dot;
		};	//	/unbind_events

		$dot.watch = function()
		{
			$dot.unwatch();
			if ( opts.watch == 'window' )
			{
				var $window = $(window),
					_wWidth = $window.width(),
					_wHeight = $window.height();

				$window.bind(
					'resize.dot' + conf.dotId,
					function()
					{
						if ( _wWidth != $window.width() || _wHeight != $window.height() || !opts.windowResizeFix )
						{
							_wWidth = $window.width();
							_wHeight = $window.height();

							if ( watchInt )
							{
								clearInterval( watchInt );
							}
							watchInt = setTimeout(
								function()
								{
									$dot.trigger( 'update.dot' );
								}, 100
							);
						}
					}
				);
			}
			else
			{
				watchOrg = getSizes( $dot );
				watchInt = setInterval(
					function()
					{
						if ( $dot.is( ':visible' ) )
						{
							var watchNew = getSizes( $dot );
							if ( watchOrg.width  != watchNew.width ||
								 watchOrg.height != watchNew.height )
							{
								$dot.trigger( 'update.dot' );
								watchOrg = watchNew;
							}
						}
					}, 500
				);
			}
			return $dot;
		};
		$dot.unwatch = function()
		{
			$(window).unbind( 'resize.dot' + conf.dotId );
			if ( watchInt )
			{
				clearInterval( watchInt );
			}
			return $dot;
		};

		var	orgContent	= $dot.contents(),
			opts 		= $.extend( true, {}, $.fn.dotdotdot.defaults, o ),
			conf		= {},
			watchOrg	= {},
			watchInt	= null,
			$inr		= null;


		if ( !( opts.lastCharacter.remove instanceof Array ) )
		{
			opts.lastCharacter.remove = $.fn.dotdotdot.defaultArrays.lastCharacter.remove;
		}
		if ( !( opts.lastCharacter.noEllipsis instanceof Array ) )
		{
			opts.lastCharacter.noEllipsis = $.fn.dotdotdot.defaultArrays.lastCharacter.noEllipsis;
		}


		conf.afterElement	= getElement( opts.after, $dot );
		conf.isTruncated	= false;
		conf.dotId			= dotId++;


		$dot.data( 'dotdotdot', true )
			.bind_events()
			.trigger( 'update.dot' );

		if ( opts.watch )
		{
			$dot.watch();
		}

		return $dot;
	};


	//	public
	$.fn.dotdotdot.defaults = {
		'ellipsis'			: '... ',
		'wrap'				: 'word',
		'fallbackToLetter'	: true,
		'lastCharacter'		: {},
		'tolerance'			: 0,
		'callback'			: null,
		'after'				: null,
		'height'			: null,
		'watch'				: false,
		'windowResizeFix'	: true
	};
	$.fn.dotdotdot.defaultArrays = {
		'lastCharacter'		: {
			'remove'			: [ ' ', '\u3000', ',', ';', '.', '!', '?' ],
			'noEllipsis'		: []
		}
	};
	$.fn.dotdotdot.debug = function( msg ) {};


	//	private
	var dotId = 1;

	function children( $elem, o, after )
	{
		var $elements 	= $elem.children(),
			isTruncated	= false;

		$elem.empty();

		for ( var a = 0, l = $elements.length; a < l; a++ )
		{
			var $e = $elements.eq( a );
			$elem.append( $e );
			if ( after )
			{
				$elem.append( after );
			}
			if ( test( $elem, o ) )
			{
				$e.remove();
				isTruncated = true;
				break;
			}
			else
			{
				if ( after )
				{
					after.detach();
				}
			}
		}
		return isTruncated;
	}
	function ellipsis( $elem, $d, $i, o, after )
	{
		var isTruncated	= false;

		//	Don't put the ellipsis directly inside these elements
		var notx = 'table, thead, tbody, tfoot, tr, col, colgroup, object, embed, param, ol, ul, dl, blockquote, select, optgroup, option, textarea, script, style';

		//	Don't remove these elements even if they are after the ellipsis
		var noty = 'script';

		$elem
			.contents()
			.detach()
			.each(
				function()
				{

					var e	= this,
						$e	= $(e);

					if ( typeof e == 'undefined' || ( e.nodeType == 3 && $.trim( e.data ).length == 0 ) )
					{
						return true;
					}
					else if ( $e.is( noty ) )
					{
						$elem.append( $e );
					}
					else if ( isTruncated )
					{
						return true;
					}
					else
					{
						$elem.append( $e );
						if ( after )
						{
							$elem[ $elem.is( notx ) ? 'after' : 'append' ]( after );
						}
						if ( test( $i, o ) )
						{
							if ( e.nodeType == 3 ) // node is TEXT
							{
								isTruncated = ellipsisElement( $e, $d, $i, o, after );
							}
							else
							{
								isTruncated = ellipsis( $e, $d, $i, o, after );
							}

							if ( !isTruncated )
							{
								$e.detach();
								isTruncated = true;
							}
						}

						if ( !isTruncated )
						{
							if ( after )
							{
								after.detach();
							}
						}
					}
				}
			);

		return isTruncated;
	}
	function ellipsisElement( $e, $d, $i, o, after )
	{
		var e = $e[ 0 ];

		if ( !e )
		{
			return false;
		}

		var txt			= getTextContent( e ),
			space		= ( txt.indexOf(' ') !== -1 ) ? ' ' : '\u3000',
			separator	= ( o.wrap == 'letter' ) ? '' : space,
			textArr		= txt.split( separator ),
			position 	= -1,
			midPos		= -1,
			startPos	= 0,
			endPos		= textArr.length - 1;


		//	Only one word
		if ( o.fallbackToLetter && startPos == 0 && endPos == 0 )
		{
			separator	= '';
			textArr		= txt.split( separator );
			endPos		= textArr.length - 1;
		}

		while ( startPos <= endPos && !( startPos == 0 && endPos == 0 ) )
		{
			var m = Math.floor( ( startPos + endPos ) / 2 );
			if ( m == midPos )
			{
				break;
			}
			midPos = m;

			setTextContent( e, textArr.slice( 0, midPos + 1 ).join( separator ) + o.ellipsis );

			if ( !test( $i, o ) )
			{
				position = midPos;
				startPos = midPos;
			}
			else
			{
				endPos = midPos;

				//	Fallback to letter
				if (o.fallbackToLetter && startPos == 0 && endPos == 0 )
				{
					separator	= '';
					textArr		= textArr[ 0 ].split( separator );
					position	= -1;
					midPos		= -1;
					startPos	= 0;
					endPos		= textArr.length - 1;
				}
			}
		}

		if ( position != -1 && !( textArr.length == 1 && textArr[ 0 ].length == 0 ) )
		{
			txt = addEllipsis( textArr.slice( 0, position + 1 ).join( separator ), o );
			setTextContent( e, txt );
		}
		else
		{
			var $w = $e.parent();
			$e.detach();

			var afterLength = ( after && after.closest($w).length ) ? after.length : 0;

			if ( $w.contents().length > afterLength )
			{
				e = findLastTextNode( $w.contents().eq( -1 - afterLength ), $d );
			}
			else
			{
				e = findLastTextNode( $w, $d, true );
				if ( !afterLength )
				{
					$w.detach();
				}
			}
			if ( e )
			{
				txt = addEllipsis( getTextContent( e ), o );
				setTextContent( e, txt );
				if ( afterLength && after )
				{
					$(e).parent().append( after );
				}
			}
		}

		return true;
	}
	function test( $i, o )
	{
		return $i.innerHeight() > o.maxHeight;
	}
	function addEllipsis( txt, o )
	{
		while( $.inArray( txt.slice( -1 ), o.lastCharacter.remove ) > -1 )
		{
			txt = txt.slice( 0, -1 );
		}
		if ( $.inArray( txt.slice( -1 ), o.lastCharacter.noEllipsis ) < 0 )
		{
			txt += o.ellipsis;
		}
		return txt;
	}
	function getSizes( $d )
	{
		return {
			'width'	: $d.innerWidth(),
			'height': $d.innerHeight()
		};
	}
	function setTextContent( e, content )
	{
		if ( e.innerText )
		{
			e.innerText = content;
		}
		else if ( e.nodeValue )
		{
			e.nodeValue = content;
		}
		else if (e.textContent)
		{
			e.textContent = content;
		}

	}
	function getTextContent( e )
	{
		if ( e.innerText )
		{
			return e.innerText;
		}
		else if ( e.nodeValue )
		{
			return e.nodeValue;
		}
		else if ( e.textContent )
		{
			return e.textContent;
		}
		else
		{
			return "";
		}
	}
	function getPrevNode( n )
	{
		do
		{
			n = n.previousSibling;
		}
		while ( n && n.nodeType !== 1 && n.nodeType !== 3 );

		return n;
	}
	function findLastTextNode( $el, $top, excludeCurrent )
	{
		var e = $el && $el[ 0 ], p;
		if ( e )
		{
			if ( !excludeCurrent )
			{
				if ( e.nodeType === 3 )
				{
					return e;
				}
				if ( $.trim( $el.text() ) )
				{
					return findLastTextNode( $el.contents().last(), $top );
				}
			}
			p = getPrevNode( e );
			while ( !p )
			{
				$el = $el.parent();
				if ( $el.is( $top ) || !$el.length )
				{
					return false;
				}
				p = getPrevNode( $el[0] );
			}
			if ( p )
			{
				return findLastTextNode( $(p), $top );
			}
		}
		return false;
	}
	function getElement( e, $i )
	{
		if ( !e )
		{
			return false;
		}
		if ( typeof e === 'string' )
		{
			e = $(e, $i);
			return ( e.length )
				? e
				: false;
		}
		return !e.jquery
			? false
			: e;
	}
	function getTrueInnerHeight( $el )
	{
		var h = $el.innerHeight(),
			a = [ 'paddingTop', 'paddingBottom' ];

		for ( var z = 0, l = a.length; z < l; z++ )
		{
			var m = parseInt( $el.css( a[ z ] ), 10 );
			if ( isNaN( m ) )
			{
				m = 0;
			}
			h -= m;
		}
		return h;
	}


	//	override jQuery.html
	var _orgHtml = $.fn.html;
	$.fn.html = function( str )
	{
		if ( str != undef && !$.isFunction( str ) && this.data( 'dotdotdot' ) )
		{
			return this.trigger( 'update', [ str ] );
		}
		return _orgHtml.apply( this, arguments );
	};


	//	override jQuery.text
	var _orgText = $.fn.text;
	$.fn.text = function( str )
	{
		if ( str != undef && !$.isFunction( str ) && this.data( 'dotdotdot' ) )
		{
			str = $( '<div />' ).text( str ).html();
			return this.trigger( 'update', [ str ] );
		}
		return _orgText.apply( this, arguments );
	};


})( jQuery );
;
/**
 * BxSlider v4.1.2 - Fully loaded, responsive content slider
 * http://bxslider.com
 *
 * Copyright 2014, Steven Wanderski - http://stevenwanderski.com - http://bxcreative.com
 * Written while drinking Belgian ales and listening to jazz
 *
 * Released under the MIT license - http://opensource.org/licenses/MIT
 */

;(function($){

	var plugin = {};

	var defaults = {

		// GENERAL
		mode: 'horizontal',
		slideSelector: '',
		infiniteLoop: true,
		hideControlOnEnd: false,
		speed: 500,
		easing: null,
		slideMargin: 0,
		startSlide: 0,
		randomStart: false,
		captions: false,
		ticker: false,
		tickerHover: false,
		adaptiveHeight: false,
		adaptiveHeightSpeed: 500,
		video: false,
		useCSS: true,
		preloadImages: 'visible',
		responsive: true,
		slideZIndex: 50,
		wrapperClass: 'bx-wrapper',

		// TOUCH
		touchEnabled: true,
		swipeThreshold: 50,
		oneToOneTouch: true,
		preventDefaultSwipeX: true,
		preventDefaultSwipeY: false,

		// PAGER
		pager: true,
		pagerType: 'full',
		pagerShortSeparator: ' / ',
		pagerSelector: null,
		buildPager: null,
		pagerCustom: null,

		// CONTROLS
		controls: true,
		nextText: 'Next',
		prevText: 'Prev',
		nextSelector: null,
		prevSelector: null,
		autoControls: false,
		startText: 'Start',
		stopText: 'Stop',
		autoControlsCombine: false,
		autoControlsSelector: null,

		// AUTO
		auto: false,
		pause: 4000,
		autoStart: true,
		autoDirection: 'next',
		autoHover: false,
		autoDelay: 0,
		autoSlideForOnePage: false,

		// CAROUSEL
		minSlides: 1,
		maxSlides: 1,
		moveSlides: 0,
		slideWidth: 0,

		// CALLBACKS
		onSliderLoad: function() {},
		onSlideBefore: function() {},
		onSlideAfter: function() {},
		onSlideNext: function() {},
		onSlidePrev: function() {},
		onSliderResize: function() {}
	}

	$.fn.bxSlider = function(options){

		if(this.length == 0) return this;

		// support mutltiple elements
		if(this.length > 1){
			this.each(function(){$(this).bxSlider(options)});
			return this;
		}

		// create a namespace to be used throughout the plugin
		var slider = {};
		// set a reference to our slider element
		var el = this;
		plugin.el = this;

		/**
		 * Makes slideshow responsive
		 */
		// first get the original window dimens (thanks alot IE)
		var windowWidth = $(window).width();
		var windowHeight = $(window).height();



		/**
		 * ===================================================================================
		 * = PRIVATE FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Initializes namespace settings to be used throughout plugin
		 */
		var init = function(){
			// merge user-supplied options with the defaults
			slider.settings = $.extend({}, defaults, options);
			// parse slideWidth setting
			slider.settings.slideWidth = parseInt(slider.settings.slideWidth);
			// store the original children
			slider.children = el.children(slider.settings.slideSelector);
			// check if actual number of slides is less than minSlides / maxSlides
			if(slider.children.length < slider.settings.minSlides) slider.settings.minSlides = slider.children.length;
			if(slider.children.length < slider.settings.maxSlides) slider.settings.maxSlides = slider.children.length;
			// if random start, set the startSlide setting to random number
			if(slider.settings.randomStart) slider.settings.startSlide = Math.floor(Math.random() * slider.children.length);
			// store active slide information
			slider.active = { index: slider.settings.startSlide }
			// store if the slider is in carousel mode (displaying / moving multiple slides)
			slider.carousel = slider.settings.minSlides > 1 || slider.settings.maxSlides > 1;
			// if carousel, force preloadImages = 'all'
			if(slider.carousel) slider.settings.preloadImages = 'all';
			// calculate the min / max width thresholds based on min / max number of slides
			// used to setup and update carousel slides dimensions
			slider.minThreshold = (slider.settings.minSlides * slider.settings.slideWidth) + ((slider.settings.minSlides - 1) * slider.settings.slideMargin);
			slider.maxThreshold = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
			// store the current state of the slider (if currently animating, working is true)
			slider.working = false;
			// initialize the controls object
			slider.controls = {};
			// initialize an auto interval
			slider.interval = null;
			// determine which property to use for transitions
			slider.animProp = slider.settings.mode == 'vertical' ? 'top' : 'left';
			// determine if hardware acceleration can be used
			slider.usingCSS = slider.settings.useCSS && slider.settings.mode != 'fade' && (function(){
				// create our test div element
				var div = document.createElement('div');
				// css transition properties
				var props = ['WebkitPerspective', 'MozPerspective', 'OPerspective', 'msPerspective'];
				// test for each property
				for(var i in props){
					if(div.style[props[i]] !== undefined){
						slider.cssPrefix = props[i].replace('Perspective', '').toLowerCase();
						slider.animProp = '-' + slider.cssPrefix + '-transform';
						return true;
					}
				}
				return false;
			}());
			// if vertical mode always make maxSlides and minSlides equal
			if(slider.settings.mode == 'vertical') slider.settings.maxSlides = slider.settings.minSlides;
			// save original style data
			el.data("origStyle", el.attr("style"));
			el.children(slider.settings.slideSelector).each(function() {
			  $(this).data("origStyle", $(this).attr("style"));
			});
			// perform all DOM / CSS modifications
			setup();
		}

		/**
		 * Performs all DOM and CSS modifications
		 */
		var setup = function(){
			// wrap el in a wrapper
			el.wrap('<div class="' + slider.settings.wrapperClass + '"><div class="bx-viewport"></div></div>');
			// store a namspace reference to .bx-viewport
			slider.viewport = el.parent();
			// add a loading div to display while images are loading
			slider.loader = $('<div class="bx-loading" />');
			//slider.viewport.prepend(slider.loader);
			// set el to a massive width, to hold any needed slides
			// also strip any margin and padding from el
			el.css({
				width: slider.settings.mode == 'horizontal' ? (slider.children.length * 100 + 215) + '%' : 'auto',
				position: 'relative'
			});
			// if using CSS, add the easing property
			if(slider.usingCSS && slider.settings.easing){
				el.css('-' + slider.cssPrefix + '-transition-timing-function', slider.settings.easing);
			// if not using CSS and no easing value was supplied, use the default JS animation easing (swing)
			}else if(!slider.settings.easing){
				slider.settings.easing = 'swing';
			}
			var slidesShowing = getNumberSlidesShowing();
			// make modifications to the viewport (.bx-viewport)
			slider.viewport.css({
				width: '100%',
				overflow: 'hidden',
				position: 'relative'
			});
			slider.viewport.parent().css({
				maxWidth: getViewportMaxWidth()
			});
			// make modification to the wrapper (.bx-wrapper)
			if(!slider.settings.pager) {
				slider.viewport.parent().css({
				margin: '0 auto 0px'
				});
			}
			// apply css to all slider children
			slider.children.css({
				'float': slider.settings.mode == 'horizontal' ? 'left' : 'none',
				listStyle: 'none',
				position: 'relative'
			});
			// apply the calculated width after the float is applied to prevent scrollbar interference
			slider.children.css('width', getSlideWidth());
			// if slideMargin is supplied, add the css
			if(slider.settings.mode == 'horizontal' && slider.settings.slideMargin > 0) slider.children.css('marginRight', slider.settings.slideMargin);
			if(slider.settings.mode == 'vertical' && slider.settings.slideMargin > 0) slider.children.css('marginBottom', slider.settings.slideMargin);
			// if "fade" mode, add positioning and z-index CSS
			if(slider.settings.mode == 'fade'){
				slider.children.css({
					position: 'absolute',
					zIndex: 0,
					display: 'none'
				});
				// prepare the z-index on the showing element
				slider.children.eq(slider.settings.startSlide).css({zIndex: slider.settings.slideZIndex, display: 'block'});
			}
			// create an element to contain all slider controls (pager, start / stop, etc)
			slider.controls.el = $('<div class="bx-controls" />');
			// if captions are requested, add them
			if(slider.settings.captions) appendCaptions();
			// check if startSlide is last slide
			slider.active.last = slider.settings.startSlide == getPagerQty() - 1;
			// if video is true, set up the fitVids plugin
			if(slider.settings.video) el.fitVids();
			// set the default preload selector (visible)
			var preloadSelector = slider.children.eq(slider.settings.startSlide);
			if (slider.settings.preloadImages == "all") preloadSelector = slider.children;
			// only check for control addition if not in "ticker" mode
			if(!slider.settings.ticker){
				// if pager is requested, add it
				if(slider.settings.pager) appendPager();
				// if controls are requested, add them
				if(slider.settings.controls) appendControls();
				// if auto is true, and auto controls are requested, add them
				if(slider.settings.auto && slider.settings.autoControls) appendControlsAuto();
				// if any control option is requested, add the controls wrapper
				if(slider.settings.controls || slider.settings.autoControls || slider.settings.pager) slider.viewport.after(slider.controls.el);
			// if ticker mode, do not allow a pager
			}else{
				slider.settings.pager = false;
			}
			// preload all images, then perform final DOM / CSS modifications that depend on images being loaded
			loadElements(preloadSelector, start);
		}

		var loadElements = function(selector, callback){
			var total = selector.find('iframe').length;
			if (total == 0){
				callback();
				return;
			}
			var count = 0;
			selector.find('iframe').each(function(){
				$(this).one('load', function() {
				  if(++count == total) callback();
				}).each(function() {
				  if(this.complete) $(this).load();
				});
			});
		}

		/**
		 * Start the slider
		 */
		var start = function(){
			// if infinite loop, prepare additional slides
			if(slider.settings.infiniteLoop && slider.settings.mode != 'fade' && !slider.settings.ticker){
				var slice = slider.settings.mode == 'vertical' ? slider.settings.minSlides : slider.settings.maxSlides;
				var sliceAppend = slider.children.slice(0, slice).clone().addClass('bx-clone');
				var slicePrepend = slider.children.slice(-slice).clone().addClass('bx-clone');
				el.append(sliceAppend).prepend(slicePrepend);
			}
			// remove the loading DOM element
			slider.loader.remove();
			// set the left / top position of "el"
			setSlidePosition();
			// if "vertical" mode, always use adaptiveHeight to prevent odd behavior
			if (slider.settings.mode == 'vertical') slider.settings.adaptiveHeight = true;
			// set the viewport height
			slider.viewport.height(getViewportHeight());
			// make sure everything is positioned just right (same as a window resize)
			el.redrawSlider();
			// onSliderLoad callback
			slider.settings.onSliderLoad(slider.active.index);
			// slider has been fully initialized
			slider.initialized = true;
			// bind the resize call to the window
			if (slider.settings.responsive) $(window).bind('resize', resizeWindow);
			// if auto is true and has more than 1 page, start the show
			if (slider.settings.auto && slider.settings.autoStart && (getPagerQty() > 1 || slider.settings.autoSlideForOnePage)) initAuto();
			// if ticker is true, start the ticker
			if (slider.settings.ticker) initTicker();
			// if pager is requested, make the appropriate pager link active
			if (slider.settings.pager) updatePagerActive(slider.settings.startSlide);
			// check for any updates to the controls (like hideControlOnEnd updates)
			if (slider.settings.controls) updateDirectionControls();
			// if touchEnabled is true, setup the touch events
			if (slider.settings.touchEnabled && !slider.settings.ticker) initTouch();
		}

		/**
		 * Returns the calculated height of the viewport, used to determine either adaptiveHeight or the maxHeight value
		 */
		var getViewportHeight = function(){
			var height = 0;
			// first determine which children (slides) should be used in our height calculation
			var children = $();
			// if mode is not "vertical" and adaptiveHeight is false, include all children
			if(slider.settings.mode != 'vertical' && !slider.settings.adaptiveHeight){
				children = slider.children;
			}else{
				// if not carousel, return the single active child
				if(!slider.carousel){
					children = slider.children.eq(slider.active.index);
				// if carousel, return a slice of children
				}else{
					// get the individual slide index
					var currentIndex = slider.settings.moveSlides == 1 ? slider.active.index : slider.active.index * getMoveBy();
					// add the current slide to the children
					children = slider.children.eq(currentIndex);
					// cycle through the remaining "showing" slides
					for (i = 1; i <= slider.settings.maxSlides - 1; i++){
						// if looped back to the start
						if(currentIndex + i >= slider.children.length){
							children = children.add(slider.children.eq(i - 1));
						}else{
							children = children.add(slider.children.eq(currentIndex + i));
						}
					}
				}
			}
			// if "vertical" mode, calculate the sum of the heights of the children
			if(slider.settings.mode == 'vertical'){
				children.each(function(index) {
				  height += $(this).outerHeight();
				});
				// add user-supplied margins
				if(slider.settings.slideMargin > 0){
					height += slider.settings.slideMargin * (slider.settings.minSlides - 1);
				}
			// if not "vertical" mode, calculate the max height of the children
			}else{
				height = Math.max.apply(Math, children.map(function(){
					return $(this).outerHeight(false);
				}).get());
			}

			if(slider.viewport.css('box-sizing') == 'border-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom')) +
							parseFloat(slider.viewport.css('border-top-width')) + parseFloat(slider.viewport.css('border-bottom-width'));
			}else if(slider.viewport.css('box-sizing') == 'padding-box'){
				height +=	parseFloat(slider.viewport.css('padding-top')) + parseFloat(slider.viewport.css('padding-bottom'));
			}

			return height;
		}

		/**
		 * Returns the calculated width to be used for the outer wrapper / viewport
		 */
		var getViewportMaxWidth = function(){
			var width = '100%';
			if(slider.settings.slideWidth > 0){
				if(slider.settings.mode == 'horizontal'){
					width = (slider.settings.maxSlides * slider.settings.slideWidth) + ((slider.settings.maxSlides - 1) * slider.settings.slideMargin);
				}else{
					width = slider.settings.slideWidth;
				}
			}
			return width;
		}

		/**
		 * Returns the calculated width to be applied to each slide
		 */
		var getSlideWidth = function(){
			// start with any user-supplied slide width
			var newElWidth = slider.settings.slideWidth;
			// get the current viewport width
			var wrapWidth = slider.viewport.width();
			// if slide width was not supplied, or is larger than the viewport use the viewport width
			if(slider.settings.slideWidth == 0 ||
				(slider.settings.slideWidth > wrapWidth && !slider.carousel) ||
				slider.settings.mode == 'vertical'){
				newElWidth = wrapWidth;
			// if carousel, use the thresholds to determine the width
			}else if(slider.settings.maxSlides > 1 && slider.settings.mode == 'horizontal'){
				if(wrapWidth > slider.maxThreshold){
					// newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.maxSlides - 1))) / slider.settings.maxSlides;
				}else if(wrapWidth < slider.minThreshold){
					newElWidth = (wrapWidth - (slider.settings.slideMargin * (slider.settings.minSlides - 1))) / slider.settings.minSlides;
				}
			}
			return newElWidth;
		}

		/**
		 * Returns the number of slides currently visible in the viewport (includes partially visible slides)
		 */
		var getNumberSlidesShowing = function(){
			var slidesShowing = 1;
			if(slider.settings.mode == 'horizontal' && slider.settings.slideWidth > 0){
				// if viewport is smaller than minThreshold, return minSlides
				if(slider.viewport.width() < slider.minThreshold){
					slidesShowing = slider.settings.minSlides;
				// if viewport is larger than minThreshold, return maxSlides
				}else if(slider.viewport.width() > slider.maxThreshold){
					slidesShowing = slider.settings.maxSlides;
				// if viewport is between min / max thresholds, divide viewport width by first child width
				}else{
					var childWidth = slider.children.first().width() + slider.settings.slideMargin;
					slidesShowing = Math.floor((slider.viewport.width() +
						slider.settings.slideMargin) / childWidth);
				}
			// if "vertical" mode, slides showing will always be minSlides
			}else if(slider.settings.mode == 'vertical'){
				slidesShowing = slider.settings.minSlides;
			}
			return slidesShowing;
		}

		/**
		 * Returns the number of pages (one full viewport of slides is one "page")
		 */
		var getPagerQty = function(){
			var pagerQty = 0;
			// if moveSlides is specified by the user
			if(slider.settings.moveSlides > 0){
				if(slider.settings.infiniteLoop){
					pagerQty = Math.ceil(slider.children.length / getMoveBy());
				}else{
					// use a while loop to determine pages
					var breakPoint = 0;
					var counter = 0
					// when breakpoint goes above children length, counter is the number of pages
					while (breakPoint < slider.children.length){
						++pagerQty;
						breakPoint = counter + getNumberSlidesShowing();
						counter += slider.settings.moveSlides <= getNumberSlidesShowing() ? slider.settings.moveSlides : getNumberSlidesShowing();
					}
				}
			// if moveSlides is 0 (auto) divide children length by sides showing, then round up
			}else{
				pagerQty = Math.ceil(slider.children.length / getNumberSlidesShowing());
			}
			return pagerQty;
		}

		/**
		 * Returns the number of indivual slides by which to shift the slider
		 */
		var getMoveBy = function(){
			// if moveSlides was set by the user and moveSlides is less than number of slides showing
			if(slider.settings.moveSlides > 0 && slider.settings.moveSlides <= getNumberSlidesShowing()){
				return slider.settings.moveSlides;
			}
			// if moveSlides is 0 (auto)
			return getNumberSlidesShowing();
		}

		/**
		 * Sets the slider's (el) left or top position
		 */
		var setSlidePosition = function(){
			// if last slide, not infinite loop, and number of children is larger than specified maxSlides
			if(slider.children.length > slider.settings.maxSlides && slider.active.last && !slider.settings.infiniteLoop){
				if (slider.settings.mode == 'horizontal'){
					// get the last child's position
					var lastChild = slider.children.last();
					var position = lastChild.position();
					// set the left position
					setPositionProperty(-(position.left - (slider.viewport.width() - lastChild.outerWidth())), 'reset', 0);
				}else if(slider.settings.mode == 'vertical'){
					// get the last showing index's position
					var lastShowingIndex = slider.children.length - slider.settings.minSlides;
					var position = slider.children.eq(lastShowingIndex).position();
					// set the top position
					setPositionProperty(-position.top, 'reset', 0);
				}
			// if not last slide
			}else{
				// get the position of the first showing slide
				var position = slider.children.eq(slider.active.index * getMoveBy()).position();
				// check for last slide
				if (slider.active.index == getPagerQty() - 1) slider.active.last = true;
				// set the repective position
				if (position != undefined){
					if (slider.settings.mode == 'horizontal') setPositionProperty(-position.left, 'reset', 0);
					else if (slider.settings.mode == 'vertical') setPositionProperty(-position.top, 'reset', 0);
				}
			}
		}

		/**
		 * Sets the el's animating property position (which in turn will sometimes animate el).
		 * If using CSS, sets the transform property. If not using CSS, sets the top / left property.
		 *
		 * @param value (int)
		 *  - the animating property's value
		 *
		 * @param type (string) 'slider', 'reset', 'ticker'
		 *  - the type of instance for which the function is being
		 *
		 * @param duration (int)
		 *  - the amount of time (in ms) the transition should occupy
		 *
		 * @param params (array) optional
		 *  - an optional parameter containing any variables that need to be passed in
		 */
		var setPositionProperty = function(value, type, duration, params){
			// use CSS transform
			if(slider.usingCSS){
				// determine the translate3d value
				var propValue = slider.settings.mode == 'vertical' ? 'translate3d(0, ' + value + 'px, 0)' : 'translate3d(' + value + 'px, 0, 0)';
				// add the CSS transition-duration
				el.css('-' + slider.cssPrefix + '-transition-duration', duration / 1000 + 's');
				if(type == 'slide'){
					// set the property value
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, propValue);
				}else if(type == 'ticker'){
					// make the transition use 'linear'
					el.css('-' + slider.cssPrefix + '-transition-timing-function', 'linear');
					el.css(slider.animProp, propValue);
					// bind a callback method - executes when CSS transition completes
					el.bind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd', function(){
						// unbind the callback
						el.unbind('transitionend webkitTransitionEnd oTransitionEnd MSTransitionEnd');
						// reset the position
						setPositionProperty(params['resetValue'], 'reset', 0);
						// start the loop again
						tickerLoop();
					});
				}
			// use JS animate
			}else{
				var animateObj = {};
				animateObj[slider.animProp] = value;
				if(type == 'slide'){
					el.animate(animateObj, duration, slider.settings.easing, function(){
						updateAfterSlideTransition();
					});
				}else if(type == 'reset'){
					el.css(slider.animProp, value)
				}else if(type == 'ticker'){
					el.animate(animateObj, speed, 'linear', function(){
						setPositionProperty(params['resetValue'], 'reset', 0);
						// run the recursive loop after animation
						tickerLoop();
					});
				}
			}
		}

		/**
		 * Populates the pager with proper amount of pages
		 */
		var populatePager = function(){
			var pagerHtml = '';
			var pagerQty = getPagerQty();
			// loop through each pager item
			for(var i=0; i < pagerQty; i++){
				var linkContent = '';
				// if a buildPager function is supplied, use it to get pager link value, else use index + 1
				if(slider.settings.buildPager && $.isFunction(slider.settings.buildPager)){
					linkContent = slider.settings.buildPager(i);
					slider.pagerEl.addClass('bx-custom-pager');
				}else{
					linkContent = i + 1;
					slider.pagerEl.addClass('bx-default-pager');
				}
				// var linkContent = slider.settings.buildPager && $.isFunction(slider.settings.buildPager) ? slider.settings.buildPager(i) : i + 1;
				// add the markup to the string
				pagerHtml += '<div class="bx-pager-item"><a href="" data-slide-index="' + i + '" class="bx-pager-link">' + linkContent + '</a></div>';
			};
			// populate the pager element with pager links
			slider.pagerEl.html(pagerHtml);
		}

		/**
		 * Appends the pager to the controls element
		 */
		var appendPager = function(){
			if(!slider.settings.pagerCustom){
				// create the pager DOM element
				slider.pagerEl = $('<div class="bx-pager" />');
				// if a pager selector was supplied, populate it with the pager
				if(slider.settings.pagerSelector){
					$(slider.settings.pagerSelector).html(slider.pagerEl);
				// if no pager selector was supplied, add it after the wrapper
				}else{
					slider.controls.el.addClass('bx-has-pager').append(slider.pagerEl);
				}
				// populate the pager
				populatePager();
			}else{
				slider.pagerEl = $(slider.settings.pagerCustom);
			}
			// assign the pager click binding
			slider.pagerEl.on('click', 'a', clickPagerBind);
		}

		/**
		 * Appends prev / next controls to the controls element
		 */
		var appendControls = function(){
			slider.controls.next = $('<a class="bx-next" href="">' + slider.settings.nextText + '</a>');
			slider.controls.prev = $('<a class="bx-prev" href="">' + slider.settings.prevText + '</a>');
			// bind click actions to the controls
			slider.controls.next.bind('click', clickNextBind);
			slider.controls.prev.bind('click', clickPrevBind);
			// if nextSlector was supplied, populate it
			if(slider.settings.nextSelector){
				$(slider.settings.nextSelector).append(slider.controls.next);
			}
			// if prevSlector was supplied, populate it
			if(slider.settings.prevSelector){
				$(slider.settings.prevSelector).append(slider.controls.prev);
			}
			// if no custom selectors were supplied
			if(!slider.settings.nextSelector && !slider.settings.prevSelector){
				// add the controls to the DOM
				slider.controls.directionEl = $('<div class="bx-controls-direction" />');
				// add the control elements to the directionEl
				slider.controls.directionEl.append(slider.controls.prev).append(slider.controls.next);
				// slider.viewport.append(slider.controls.directionEl);
				slider.controls.el.addClass('bx-has-controls-direction').append(slider.controls.directionEl);
			}
		}

		/**
		 * Appends start / stop auto controls to the controls element
		 */
		var appendControlsAuto = function(){
			slider.controls.start = $('<div class="bx-controls-auto-item"><a class="bx-start" href="">' + slider.settings.startText + '</a></div>');
			slider.controls.stop = $('<div class="bx-controls-auto-item"><a class="bx-stop" href="">' + slider.settings.stopText + '</a></div>');
			// add the controls to the DOM
			slider.controls.autoEl = $('<div class="bx-controls-auto" />');
			// bind click actions to the controls
			slider.controls.autoEl.on('click', '.bx-start', clickStartBind);
			slider.controls.autoEl.on('click', '.bx-stop', clickStopBind);
			// if autoControlsCombine, insert only the "start" control
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.append(slider.controls.start);
			// if autoControlsCombine is false, insert both controls
			}else{
				slider.controls.autoEl.append(slider.controls.start).append(slider.controls.stop);
			}
			// if auto controls selector was supplied, populate it with the controls
			if(slider.settings.autoControlsSelector){
				$(slider.settings.autoControlsSelector).html(slider.controls.autoEl);
			// if auto controls selector was not supplied, add it after the wrapper
			}else{
				slider.controls.el.addClass('bx-has-controls-auto').append(slider.controls.autoEl);
			}
			// update the auto controls
			updateAutoControls(slider.settings.autoStart ? 'stop' : 'start');
		}

		/**
		 * Appends image captions to the DOM
		 */
		var appendCaptions = function(){
			// cycle through each child
			slider.children.each(function(index){
				// get the image title attribute
				var title = $(this).find('img:first').attr('title');
				// append the caption
				if (title != undefined && ('' + title).length) {
                    $(this).append('<div class="bx-caption"><span>' + title + '</span></div>');
                }
			});
		}

		/**
		 * Click next binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickNextBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToNextSlide();
			e.preventDefault();
		}

		/**
		 * Click prev binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPrevBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			el.goToPrevSlide();
			e.preventDefault();
		}

		/**
		 * Click start binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStartBind = function(e){
			el.startAuto();
			e.preventDefault();
		}

		/**
		 * Click stop binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickStopBind = function(e){
			el.stopAuto();
			e.preventDefault();
		}

		/**
		 * Click pager binding
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var clickPagerBind = function(e){
			// if auto show is running, stop it
			if (slider.settings.auto) el.stopAuto();
			var pagerLink = $(e.currentTarget);
			if(pagerLink.attr('data-slide-index') !== undefined){
				var pagerIndex = parseInt(pagerLink.attr('data-slide-index'));
				// if clicked pager link is not active, continue with the goToSlide call
				if(pagerIndex != slider.active.index) el.goToSlide(pagerIndex);
				e.preventDefault();
				if (slider.settings.auto) el.startAuto();
			}
		}

		/**
		 * Updates the pager links with an active class
		 *
		 * @param slideIndex (int)
		 *  - index of slide to make active
		 */
		var updatePagerActive = function(slideIndex){
			// if "short" pager type
			var len = slider.children.length; // nb of children
			if(slider.settings.pagerType == 'short'){
				if(slider.settings.maxSlides > 1) {
					len = Math.ceil(slider.children.length/slider.settings.maxSlides);
				}
				slider.pagerEl.html( (slideIndex + 1) + slider.settings.pagerShortSeparator + len);
				return;
			}
			// remove all pager active classes
			slider.pagerEl.find('a').removeClass('active');
			// apply the active class for all pagers
			slider.pagerEl.each(function(i, el) { $(el).find('a').eq(slideIndex).addClass('active'); });
		}

		/**
		 * Performs needed actions after a slide transition
		 */
		var updateAfterSlideTransition = function(){
			// if infinte loop is true
			if(slider.settings.infiniteLoop){
				var position = '';
				// first slide
				if(slider.active.index == 0){
					// set the new position
					position = slider.children.eq(0).position();
				// carousel, last slide
				}else if(slider.active.index == getPagerQty() - 1 && slider.carousel){
					position = slider.children.eq((getPagerQty() - 1) * getMoveBy()).position();
				// last slide
				}else if(slider.active.index == slider.children.length - 1){
					position = slider.children.eq(slider.children.length - 1).position();
				}
				if(position){
					if (slider.settings.mode == 'horizontal') { setPositionProperty(-position.left, 'reset', 0); }
					else if (slider.settings.mode == 'vertical') { setPositionProperty(-position.top, 'reset', 0); }
				}
			}
			// declare that the transition is complete
			slider.working = false;
			// onSlideAfter callback
			slider.settings.onSlideAfter(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
		}

		/**
		 * Updates the auto controls state (either active, or combined switch)
		 *
		 * @param state (string) "start", "stop"
		 *  - the new state of the auto show
		 */
		var updateAutoControls = function(state){
			// if autoControlsCombine is true, replace the current control with the new state
			if(slider.settings.autoControlsCombine){
				slider.controls.autoEl.html(slider.controls[state]);
			// if autoControlsCombine is false, apply the "active" class to the appropriate control
			}else{
				slider.controls.autoEl.find('a').removeClass('active');
				slider.controls.autoEl.find('a:not(.bx-' + state + ')').addClass('active');
			}
		}

		/**
		 * Updates the direction controls (checks if either should be hidden)
		 */
		var updateDirectionControls = function(){
			if(getPagerQty() == 1){
				slider.controls.prev.addClass('disabled');
				slider.controls.next.addClass('disabled');
			}else if(!slider.settings.infiniteLoop && slider.settings.hideControlOnEnd){
				// if first slide
				if (slider.active.index == 0){
					slider.controls.prev.addClass('disabled');
					slider.controls.next.removeClass('disabled');
				// if last slide
				}else if(slider.active.index == getPagerQty() - 1){
					slider.controls.next.addClass('disabled');
					slider.controls.prev.removeClass('disabled');
				// if any slide in the middle
				}else{
					slider.controls.prev.removeClass('disabled');
					slider.controls.next.removeClass('disabled');
				}
			}
		}

		/**
		 * Initialzes the auto process
		 */
		var initAuto = function(){
			// if autoDelay was supplied, launch the auto show using a setTimeout() call
			if(slider.settings.autoDelay > 0){
				var timeout = setTimeout(el.startAuto, slider.settings.autoDelay);
			// if autoDelay was not supplied, start the auto show normally
			}else{
				el.startAuto();
			}
			// if autoHover is requested
			if(slider.settings.autoHover){
				// on el hover
				el.hover(function(){
					// if the auto show is currently playing (has an active interval)
					if(slider.interval){
						// stop the auto show and pass true agument which will prevent control update
						el.stopAuto(true);
						// create a new autoPaused value which will be used by the relative "mouseout" event
						slider.autoPaused = true;
					}
				}, function(){
					// if the autoPaused value was created be the prior "mouseover" event
					if(slider.autoPaused){
						// start the auto show and pass true agument which will prevent control update
						el.startAuto(true);
						// reset the autoPaused value
						slider.autoPaused = null;
					}
				});
			}
		}

		/**
		 * Initialzes the ticker process
		 */
		var initTicker = function(){
			var startPosition = 0;
			// if autoDirection is "next", append a clone of the entire slider
			if(slider.settings.autoDirection == 'next'){
				el.append(slider.children.clone().addClass('bx-clone'));
			// if autoDirection is "prev", prepend a clone of the entire slider, and set the left position
			}else{
				el.prepend(slider.children.clone().addClass('bx-clone'));
				var position = slider.children.first().position();
				startPosition = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			}
			setPositionProperty(startPosition, 'reset', 0);
			// do not allow controls in ticker mode
			slider.settings.pager = false;
			slider.settings.controls = false;
			slider.settings.autoControls = false;
			// if autoHover is requested
			if(slider.settings.tickerHover && !slider.usingCSS){
				// on el hover
				slider.viewport.hover(function(){
					el.stop();
				}, function(){
					// calculate the total width of children (used to calculate the speed ratio)
					var totalDimens = 0;
					slider.children.each(function(index){
					  totalDimens += slider.settings.mode == 'horizontal' ? $(this).outerWidth(true) : $(this).outerHeight(true);
					});
					// calculate the speed ratio (used to determine the new speed to finish the paused animation)
					var ratio = slider.settings.speed / totalDimens;
					// determine which property to use
					var property = slider.settings.mode == 'horizontal' ? 'left' : 'top';
					// calculate the new speed
					var newSpeed = ratio * (totalDimens - (Math.abs(parseInt(el.css(property)))));
					tickerLoop(newSpeed);
				});
			}
			// start the ticker loop
			tickerLoop();
		}

		/**
		 * Runs a continuous loop, news ticker-style
		 */
		var tickerLoop = function(resumeSpeed){
			speed = resumeSpeed ? resumeSpeed : slider.settings.speed;
			var position = {left: 0, top: 0};
			var reset = {left: 0, top: 0};
			// if "next" animate left position to last child, then reset left to 0
			if(slider.settings.autoDirection == 'next'){
				position = el.find('.bx-clone').first().position();
			// if "prev" animate left position to 0, then reset left to first non-clone child
			}else{
				reset = slider.children.first().position();
			}
			var animateProperty = slider.settings.mode == 'horizontal' ? -position.left : -position.top;
			var resetValue = slider.settings.mode == 'horizontal' ? -reset.left : -reset.top;
			var params = {resetValue: resetValue};
			setPositionProperty(animateProperty, 'ticker', speed, params);
		}

		/**
		 * Initializes touch events
		 */
		var initTouch = function(){
			// initialize object to contain all touch values
			slider.touch = {
				start: {x: 0, y: 0},
				end: {x: 0, y: 0}
			}
			slider.viewport.bind('touchstart', onTouchStart);
		}

		/**
		 * Event handler for "touchstart"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchStart = function(e){
			if(slider.working){
				e.preventDefault();
			}else{
				// record the original position when touch starts
				slider.touch.originalPos = el.position();
				var orig = e.originalEvent;
				// record the starting touch x, y coordinates
				slider.touch.start.x = orig.changedTouches[0].pageX;
				slider.touch.start.y = orig.changedTouches[0].pageY;
				// bind a "touchmove" event to the viewport
				slider.viewport.bind('touchmove', onTouchMove);
				// bind a "touchend" event to the viewport
				slider.viewport.bind('touchend', onTouchEnd);
			}
		}

		/**
		 * Event handler for "touchmove"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchMove = function(e){
			var orig = e.originalEvent;
			// if scrolling on y axis, do not prevent default
			var xMovement = Math.abs(orig.changedTouches[0].pageX - slider.touch.start.x);
			var yMovement = Math.abs(orig.changedTouches[0].pageY - slider.touch.start.y);
			// x axis swipe
			if((xMovement * 3) > yMovement && slider.settings.preventDefaultSwipeX){
				e.preventDefault();
			// y axis swipe
			}else if((yMovement * 3) > xMovement && slider.settings.preventDefaultSwipeY){
				e.preventDefault();
			}
			if(slider.settings.mode != 'fade' && slider.settings.oneToOneTouch){
				var value = 0;
				// if horizontal, drag along x axis
				if(slider.settings.mode == 'horizontal'){
					var change = orig.changedTouches[0].pageX - slider.touch.start.x;
					value = slider.touch.originalPos.left + change;
				// if vertical, drag along y axis
				}else{
					var change = orig.changedTouches[0].pageY - slider.touch.start.y;
					value = slider.touch.originalPos.top + change;
				}
				setPositionProperty(value, 'reset', 0);
			}
		}

		/**
		 * Event handler for "touchend"
		 *
		 * @param e (event)
		 *  - DOM event object
		 */
		var onTouchEnd = function(e){
			slider.viewport.unbind('touchmove', onTouchMove);
			var orig = e.originalEvent;
			var value = 0;
			// record end x, y positions
			slider.touch.end.x = orig.changedTouches[0].pageX;
			slider.touch.end.y = orig.changedTouches[0].pageY;
			// if fade mode, check if absolute x distance clears the threshold
			if(slider.settings.mode == 'fade'){
				var distance = Math.abs(slider.touch.start.x - slider.touch.end.x);
				if(distance >= slider.settings.swipeThreshold){
					slider.touch.start.x > slider.touch.end.x ? el.goToNextSlide() : el.goToPrevSlide();
					el.stopAuto();
				}
			// not fade mode
			}else{
				var distance = 0;
				// calculate distance and el's animate property
				if(slider.settings.mode == 'horizontal'){
					distance = slider.touch.end.x - slider.touch.start.x;
					value = slider.touch.originalPos.left;
				}else{
					distance = slider.touch.end.y - slider.touch.start.y;
					value = slider.touch.originalPos.top;
				}
				// if not infinite loop and first / last slide, do not attempt a slide transition
				if(!slider.settings.infiniteLoop && ((slider.active.index == 0 && distance > 0) || (slider.active.last && distance < 0))){
					setPositionProperty(value, 'reset', 200);
				}else{
					// check if distance clears threshold
					if(Math.abs(distance) >= slider.settings.swipeThreshold){
						distance < 0 ? el.goToNextSlide() : el.goToPrevSlide();
						el.stopAuto();
					}else{
						// el.animate(property, 200);
						setPositionProperty(value, 'reset', 200);
					}
				}
			}
			slider.viewport.unbind('touchend', onTouchEnd);
		}

		/**
		 * Window resize event callback
		 */
		var resizeWindow = function(e){
			// don't do anything if slider isn't initialized.
			if(!slider.initialized) return;
			// get the new window dimens (again, thank you IE)
			var windowWidthNew = $(window).width();
			var windowHeightNew = $(window).height();
			// make sure that it is a true window resize
			// *we must check this because our dinosaur friend IE fires a window resize event when certain DOM elements
			// are resized. Can you just die already?*
			if(windowWidth != windowWidthNew || windowHeight != windowHeightNew){
				// set the new window dimens
				windowWidth = windowWidthNew;
				windowHeight = windowHeightNew;
				// update all dynamic elements
				el.redrawSlider();
				// Call user resize handler
				slider.settings.onSliderResize.call(el, slider.active.index);
			}
		}

		/**
		 * ===================================================================================
		 * = PUBLIC FUNCTIONS
		 * ===================================================================================
		 */

		/**
		 * Performs slide transition to the specified slide
		 *
		 * @param slideIndex (int)
		 *  - the destination slide's index (zero-based)
		 *
		 * @param direction (string)
		 *  - INTERNAL USE ONLY - the direction of travel ("prev" / "next")
		 */
		el.goToSlide = function(slideIndex, direction){
			// if plugin is currently in motion, ignore request
			if(slider.working || slider.active.index == slideIndex) return;
			// declare that plugin is in motion
			slider.working = true;
			// store the old index
			slider.oldIndex = slider.active.index;
			// if slideIndex is less than zero, set active index to last child (this happens during infinite loop)
			if(slideIndex < 0){
				slider.active.index = getPagerQty() - 1;
			// if slideIndex is greater than children length, set active index to 0 (this happens during infinite loop)
			}else if(slideIndex >= getPagerQty()){
				slider.active.index = 0;
			// set active index to requested slide
			}else{
				slider.active.index = slideIndex;
			}
			// onSlideBefore, onSlideNext, onSlidePrev callbacks
			slider.settings.onSlideBefore(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			if(direction == 'next'){
				slider.settings.onSlideNext(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}else if(direction == 'prev'){
				slider.settings.onSlidePrev(slider.children.eq(slider.active.index), slider.oldIndex, slider.active.index);
			}
			// check if last slide
			slider.active.last = slider.active.index >= getPagerQty() - 1;
			// update the pager with active class
			if(slider.settings.pager) updatePagerActive(slider.active.index);
			// // check for direction control update
			if(slider.settings.controls) updateDirectionControls();
			// if slider is set to mode: "fade"
			if(slider.settings.mode == 'fade'){
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				// fade out the visible child and reset its z-index value
				slider.children.filter(':visible').fadeOut(slider.settings.speed).css({zIndex: 0});
				// fade in the newly requested slide
				slider.children.eq(slider.active.index).css('zIndex', slider.settings.slideZIndex+1).fadeIn(slider.settings.speed, function(){
					$(this).css('zIndex', slider.settings.slideZIndex);
					updateAfterSlideTransition();
				});
			// slider mode is not "fade"
			}else{
				// if adaptiveHeight is true and next height is different from current height, animate to the new height
				if(slider.settings.adaptiveHeight && slider.viewport.height() != getViewportHeight()){
					slider.viewport.animate({height: getViewportHeight()}, slider.settings.adaptiveHeightSpeed);
				}
				var moveBy = 0;
				var position = {left: 0, top: 0};
				// if carousel and not infinite loop
				if(!slider.settings.infiniteLoop && slider.carousel && slider.active.last){
					if(slider.settings.mode == 'horizontal'){
						// get the last child position
						var lastChild = slider.children.eq(slider.children.length - 1);
						position = lastChild.position();
						// calculate the position of the last slide
						moveBy = slider.viewport.width() - lastChild.outerWidth();
					}else{
						// get last showing index position
						var lastShowingIndex = slider.children.length - slider.settings.minSlides;
						position = slider.children.eq(lastShowingIndex).position();
					}
					// horizontal carousel, going previous while on first slide (infiniteLoop mode)
				}else if(slider.carousel && slider.active.last && direction == 'prev'){
					// get the last child position
					var eq = slider.settings.moveSlides == 1 ? slider.settings.maxSlides - getMoveBy() : ((getPagerQty() - 1) * getMoveBy()) - (slider.children.length - slider.settings.maxSlides);
					var lastChild = el.children('.bx-clone').eq(eq);
					position = lastChild.position();
				// if infinite loop and "Next" is clicked on the last slide
				}else if(direction == 'next' && slider.active.index == 0){
					// get the last clone position
					position = el.find('> .bx-clone').eq(slider.settings.maxSlides).position();
					slider.active.last = false;
				// normal non-zero requests
				}else if(slideIndex >= 0){
					var requestEl = slideIndex * getMoveBy();
					position = slider.children.eq(requestEl).position();
				}

				/* If the position doesn't exist
				 * (e.g. if you destroy the slider on a next click),
				 * it doesn't throw an error.
				 */
				if ("undefined" !== typeof(position)) {
					var value = slider.settings.mode == 'horizontal' ? -(position.left - moveBy) : -position.top;
					// plugin values to be animated
					setPositionProperty(value, 'slide', slider.settings.speed);
				}
			}
		}

		/**
		 * Transitions to the next slide in the show
		 */
		el.goToNextSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.last) return;
			var pagerIndex = parseInt(slider.active.index) + 1;
			el.goToSlide(pagerIndex, 'next');
		}

		/**
		 * Transitions to the prev slide in the show
		 */
		el.goToPrevSlide = function(){
			// if infiniteLoop is false and last page is showing, disregard call
			if (!slider.settings.infiniteLoop && slider.active.index == 0) return;
			var pagerIndex = parseInt(slider.active.index) - 1;
			el.goToSlide(pagerIndex, 'prev');
		}

		/**
		 * Starts the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.startAuto = function(preventControlUpdate){
			// if an interval already exists, disregard call
			if(slider.interval) return;
			// create an interval
			slider.interval = setInterval(function(){
				slider.settings.autoDirection == 'next' ? el.goToNextSlide() : el.goToPrevSlide();
			}, slider.settings.pause);
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('stop');
		}

		/**
		 * Stops the auto show
		 *
		 * @param preventControlUpdate (boolean)
		 *  - if true, auto controls state will not be updated
		 */
		el.stopAuto = function(preventControlUpdate){
			// if no interval exists, disregard call
			if(!slider.interval) return;
			// clear the interval
			clearInterval(slider.interval);
			slider.interval = null;
			// if auto controls are displayed and preventControlUpdate is not true
			if (slider.settings.autoControls && preventControlUpdate != true) updateAutoControls('start');
		}

		/**
		 * Returns current slide index (zero-based)
		 */
		el.getCurrentSlide = function(){
			return slider.active.index;
		}

		/**
		 * Returns current slide element
		 */
		el.getCurrentSlideElement = function(){
			return slider.children.eq(slider.active.index);
		}

		/**
		 * Returns number of slides in show
		 */
		el.getSlideCount = function(){
			return slider.children.length;
		}

		/**
		 * Update all dynamic slider elements
		 */
		el.redrawSlider = function(){
			// resize all children in ratio to new screen size
			slider.children.add(el.find('.bx-clone')).width(getSlideWidth());
			// adjust the height
			slider.viewport.css('height', getViewportHeight());
			// update the slide position
			if(!slider.settings.ticker) setSlidePosition();
			// if active.last was true before the screen resize, we want
			// to keep it last no matter what screen size we end on
			if (slider.active.last) slider.active.index = getPagerQty() - 1;
			// if the active index (page) no longer exists due to the resize, simply set the index as last
			if (slider.active.index >= getPagerQty()) slider.active.last = true;
			// if a pager is being displayed and a custom pager is not being used, update it
			if(slider.settings.pager && !slider.settings.pagerCustom){
				populatePager();
				updatePagerActive(slider.active.index);
			}
		}

		/**
		 * Destroy the current instance of the slider (revert everything back to original state)
		 */
		el.destroySlider = function(){
			// don't do anything if slider has already been destroyed
			if(!slider.initialized) return;
			slider.initialized = false;
			$('.bx-clone', this).remove();
			slider.children.each(function() {
				$(this).data("origStyle") != undefined ? $(this).attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			});
			$(this).data("origStyle") != undefined ? this.attr("style", $(this).data("origStyle")) : $(this).removeAttr('style');
			$(this).unwrap().unwrap();
			if(slider.controls.el) slider.controls.el.remove();
			if(slider.controls.next) slider.controls.next.remove();
			if(slider.controls.prev) slider.controls.prev.remove();
			if(slider.pagerEl && slider.settings.controls) slider.pagerEl.remove();
			$('.bx-caption', this).remove();
			if(slider.controls.autoEl) slider.controls.autoEl.remove();
			clearInterval(slider.interval);
			if(slider.settings.responsive) $(window).unbind('resize', resizeWindow);
		}

		/**
		 * Reload the slider (revert all DOM changes, and re-initialize)
		 */
		el.reloadSlider = function(settings){
			if (settings != undefined) options = settings;
			el.destroySlider();
			init();
		}

		init();

		// returns the current jQuery object
		return this;
	}

})(jQuery);
;

var treeMenu = {

    init:function() {

        //add span
        var withThirdLevel =  '<span class="touch-area"><i class="fas fa-arrow-down"></i></span>';
        var treeMenuLi = $('.mk-tree-menu > li');

        treeMenuLi.has('ul').each(function(){
              $(this).append(withThirdLevel).addClass('hasChild');
        });

        //open/close submenu
        var target = treeMenuLi.has('ul').find('.touch-area');
        target.on('click', function(e){

            e.preventDefault();

            var status = $(this).parent().find('ul').is(':hidden');
            if (status) {

                $(this).parent().find('ul').slideDown('fast');
                $(this).parent().addClass('opened');

            } else {
                $(this).parent().find('ul').slideUp('fast');
                $(this).parent().removeClass('opened');
            }

            var siblings = $(this).parent().siblings();
            $('ul', siblings).slideUp('fast');
            siblings.removeClass('opened');

        });

        //open current link
        $('ul.mk-tree-menu li.current ul li.current').parent().show().parent().addClass('opened');
        $('ul.mk-tree-menu li.current ul').show().parent().addClass('opened');

    },


    initMobileMenu:function() {

        //add span
        var withThirdLevel =  '<span class="touch-area"><i class="fas fa-arrow-down"></i></span>';
        var treeMenuLi = $('.mobile-menu-elements > li');

        treeMenuLi.has('ul').each(function(){
            $(this).prepend(withThirdLevel).addClass('hasChild');
        });

        //open/close submenu
        var target = treeMenuLi.has('ul').find('.touch-area');
        target.on('click', function(e){

            e.preventDefault();

            var status = $(this).parent().find('> div').is(':hidden');
            if (status) {

                $(this).parent().find('> div').slideDown('fast');
                $(this).parent().addClass('opened');

            } else {
                $(this).parent().find('> div').slideUp('fast');
                $(this).parent().removeClass('opened');
            }

            var siblings = $(this).parent().siblings();
            $('> div', siblings).slideUp('fast');
            siblings.removeClass('opened');

        });

        //open current link
        $('ul.mobile-menu-elements li.current > div').show().parent().addClass('opened');

    }


};







;
(function ($) {
    //#region Photos Functions
    var CurrentImage = 0;
    var CurrentCarouselImage = 0;
    var PhotoList;
    var AnimationSemafor = true;
    var FlickrTransitionTime = 500;
    var speed = 1000;
    var CarouselImageTemplate = "<div class='CarouselImageContainer noSelect' onclick='$.MediaServiceHelper.GoToCarouselItem({MEDIA_ITEM_TO_GO_TO})'>" +
                               "<div class='CarouselItemHoverContainer'></div>" +
                               "<img class='CarouselImage' data-image='{MEDIA_IMAGE}' />" +
                           "</div>";

    var SoundCloudTrackTemplate = "https://w.soundcloud.com/player/?url=http://api.soundcloud.com/tracks/{TrackId}&auto_play=true&buying=false&liking=true&download=true&sharing=false&show_artwork=true&show_comments=false&show_playcount=false&show_user=true&hide_related=false&visual=true&start_track=0&callback=true";
    var SoundCloudPlaylistTemplate = "https://w.soundcloud.com/player/?url=http://api.soundcloud.com/playlists/{PlayListId}&auto_play=true&buying=false&liking=true&download=true&sharing=false&show_artwork=true&show_comments=false&show_playcount=false&show_user=true&hide_related=false&visual=true&start_track=0&callback=true";


    function getCarouselItemsCount() {
        return Math.floor(($(".MediaPhotosPop .PhotosPage").width() - 100) / 170) % 2 == 0 ? Math.floor(($(".MediaPhotosPop .PhotosPage").width() - 100) / 170) - 1 : Math.floor(($(".MediaPhotosPop .PhotosPage").width() - 100) / 170);
    }
    function getCarouselItemsDiff() {
        return Math.floor(($(".MediaPhotosPop .PhotosPage").width() - 100) / 170) % 2 == 0 ? Math.floor(((($(".MediaPhotosPop .PhotosPage").width() - 100) % 170) + 170) / 2) : Math.floor((($(".MediaPhotosPop .PhotosPage").width() - 100) % 170) / 2);
    }

    function GetRealImageCount(count) {
        while (count < 0)
            count += PhotoList.length;
        while (count > PhotoList.length - 1)
            count -= PhotoList.length;
        return count;
    }
    function GetRealImageDiff(x, y) {
        var tmp = 0;
        x = GetRealImageCount(x);
        y = GetRealImageCount(y);
        if (x > y) {
            tmp = x;
            x = y;
            y = tmp;
        }

        return y - x < Math.abs(y - x - PhotoList.length) ? y - x : Math.abs(y - x - PhotoList.length);
    }
    function GetRealImageSign(x, y) {
        var tmp = 0;
        x = GetRealImageCount(x);
        y = GetRealImageCount(y);
        var sw = -1;
        if (x > y) {
            tmp = x;
            x = y;
            y = tmp;
            sw = 1;
        }
        return (y - x < Math.abs(y - x - PhotoList.length) ? y - x : -1 * (Math.abs(y - x - PhotoList.length))) * sw;
    }
    function SpecialMediaFitImage(ImageToFit) {
        var TheRatio = 0;
        var CurentStyle = "";
        ImageToFit.obj.style.position = "absolute";
        if ($(ImageToFit.obj).parent().innerHeight() / ImageToFit.height > $(ImageToFit.obj).parent().innerWidth() / ImageToFit.width) {
            TheRatio = $(ImageToFit.obj).parent().innerWidth() / ImageToFit.width;
            ImageToFit.obj.style.top = (Math.abs(($(ImageToFit.obj).parent().innerHeight() - (TheRatio * ImageToFit.height)) / 2)) + "px";
            ImageToFit.obj.style.left = "0px";
        }
        else {
            TheRatio = $(ImageToFit.obj).parent().innerHeight() / ImageToFit.height;
            ImageToFit.obj.style.left = (Math.abs(($(ImageToFit.obj).parent().innerWidth() - (TheRatio * ImageToFit.width)) / 2)) + "px";
            ImageToFit.obj.style.top = "0px";
        }
        var NewW = (TheRatio * ImageToFit.width) + "px";
        var NewH = (TheRatio * ImageToFit.height) + "px";

        ImageToFit.obj.style.width = NewW;
        ImageToFit.obj.style.height = NewH;
    }
    function GetFullscreenImageSize(Sizes) {
        var winSize = $(".MediaPhotosPop .PhotosPage").width();
        if (winSize < $(".MediaPhotosPop .PhotosPage").height())
            winSize = $(".MediaPhotosPop .PhotosPage").height();

        var PixelRatio = 1;
        if (typeof window.devicePixelRatio != 'undefined')
            PixelRatio = window.devicePixelRatio;

        winSize = winSize * PixelRatio;
        var rs = Sizes.length - 1;
        for (var i = 0; i < Sizes.length; i++) {
            if (Sizes[i].ImageSize > winSize && Sizes[i].ImageUrl != "") {
                rs = i;
                break;
            }
        }
        return Sizes[rs];
    }
    function InitSwipe() {
        if ($("html").hasClass("touch")) {
            $('.CenterMainImage, .NextMainImage, .PrevMainImage').swipe({
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) { },
                swipeStatus: function (event, phase, direction, distance) {
                    if (phase == "move" && (direction == "left" || direction == "right")) {
                        var duration = 0;

                        if (direction == "left") {
                            scrollImages(distance, duration);
                        } else if (direction == "right") {
                            scrollImages(0 - distance, duration);
                        }

                    } else if (phase == "cancel") {
                        scrollImages(0, 500);
                    } else if (phase == "end") {
                        if (direction == "right") {
                            $(".PhotosPage .MainPrev").trigger('click');
                        } else if (direction == "left") {
                            $(".PhotosPage .MainNext").trigger('click');
                        }
                    }
                },
                threshold: 25
            });
            $('.ImagesCarousel').swipe({
                swipe: function (event, direction, distance, duration, fingerCount, fingerData) { },
                swipeStatus: function (event, phase, direction, distance) {
                    if (phase == "end") {
                        if (direction == "right") {
                            $(".PhotosPage .CarouselPrev").trigger('click');
                        } else if (direction == "left") {
                            $(".PhotosPage .CarouselNext").trigger('click');
                        }
                    }
                },
                threshold: 25
            });
        }
    }
    function scrollImages(distance, duration) {
        $('.MainImageContainer').css("transition-duration", (duration / 1000).toFixed(1) + "s");
        $('.MainImageContainer').css("transition-property", "margin-left");
        var value = parseInt((distance < 0 ? "" : "-") + Math.abs(distance).toString());
        var leftValue = (-1 * $(".MediaPhotosPop .PhotosPage").width() + value);
        var rightValue = $(".MediaPhotosPop .PhotosPage").width() + value;
        $('.MainImageContainer.CenterMainImage').css("margin-left", "" + value + "px");
        $('.MainImageContainer.PrevMainImage').css("margin-left", "" + leftValue + "px");
        $('.MainImageContainer.NextMainImage').css("margin-left", "" + rightValue + "px");
    }
    function PositionCarouselItems(alimation) {
        var CurrntTimer = 0;
        if (alimation)
            CurrntTimer = FlickrTransitionTime;
        CarouselItemsDiff = getCarouselItemsDiff();
        CarouselItemsCount = getCarouselItemsCount();
        var lr = CarouselItemsCount != 1 ? (CarouselItemsCount - 1) / 2 : 0;
        $(".PhotosPage .ImagesCarousel .CarouselImageContainer").each(function (count) {
            if (GetRealImageDiff(count, CurrentCarouselImage) <= lr) {
                if (CurrentImage == count)
                    $(this).addClass("CurrentItem");
                else
                    $(this).removeClass("CurrentItem");

                if (!$(this).hasClass("VisibleItem")) {
                    if (GetRealImageSign(count, CurrentCarouselImage) > 0)
                        $(this).css({ "left": (100 + CarouselItemsDiff + (170 * (CarouselItemsCount + 1))) + "px" });
                    else
                        $(this).css({ "left": "-170px" });

                    $(this).addClass("VisibleItem");
                    $(this).transition({ "left": (50 + CarouselItemsDiff + (170 * (GetRealImageSign(count, CurrentCarouselImage) + lr))) + "px" }, CurrntTimer);
                }
                else {
                    $(this).transition({ "left": (50 + CarouselItemsDiff + (170 * (GetRealImageSign(count, CurrentCarouselImage) + lr))) + "px" }, CurrntTimer);
                }

                if (typeof $(this).find(".CarouselImage").attr("src") == 'undefined')
                    $(this).find(".CarouselImage").attr("src", $(this).find(".CarouselImage").attr("data-image"));
            }
            else {
                if ($(this).hasClass("VisibleItem")) {
                    if (GetRealImageSign(count, CurrentCarouselImage) < 0) {
                        $(this).transition({ "left": "-170px" }, CurrntTimer, function () {
                            $(this).removeClass("VisibleItem");
                        });
                    }
                    else {
                        $(this).transition({ "left": (100 + CarouselItemsDiff + (170 * (CarouselItemsCount + 1))) + "px" }, CurrntTimer, function () {
                            $(this).removeClass("VisibleItem");
                        });
                    }
                }
                else
                    $(this).removeClass("VisibleItem").css({ "left": "-170px" });
            }
        });


        if (typeof PhotoList != 'undefined') {
            if (PhotoList.length <= getCarouselItemsCount()) {
                $(".PhotosPage .CarouselPrev").hide();
                $(".PhotosPage .CarouselNext").hide();
            }
            else {
                $(".PhotosPage .CarouselPrev").show();
                $(".PhotosPage .CarouselNext").show();
            }
        }
    }
    //#endregion
    //#region News Functions
    function FixImages(selector) {
        $(selector).each(function () {
            $(this).error(function () {
                var newImg = $(this).attr("src").replace($(this).attr("src").substring(0, $(this).attr("src").indexOf('?')), "/Images/News/defaultNewsIcon.png");
                $(this).attr("src", newImg);
            });
            if (this.complete) {
                $(this).parent().parent().find(".loadingFrame").hide();
                $(this).parent().find(".hoverFrame").show();
                $(this).css({ "visibility": "visible" });
                $(this).parent().css({ "visibility": "visible" });
            }
            else {
                $(this).bind("load", function () {
                    $(this).parent().parent().find(".loadingFrame").hide();
                    $(this).parent().find(".hoverFrame").show();
                    $(this).css({ "visibility": "visible" });
                    $(this).parent().css({ "visibility": "visible" });
                });
            }
        });
    }
    //#endregion

    $.MediaServiceHelper = function (Settings) {

        $.MediaServiceHelper.Settings = Settings;

        var that = this;
        that.FeedGroups = new Array();
        var MediaTypes;
        var MediaItems;
        that.youtubeKey = "";

        that.GetFeedProperty = function (FeedName, Name) {
            for (var i = 0; i < Settings["FeedGroups"].length; i++)
                for (var k = 0; k < Settings["FeedGroups"][i].Feeds.length; k++)
                    if (FeedName == Settings["FeedGroups"][i].Feeds[k])
                        return Settings["FeedGroups"][i][Name];
            return "none";
        }


        that.GetAplicationToken = function (FeedType, CallbackFunction) {
            $.getJSON(Settings["ServiceUrl"] + "GetAplicationToken?FeedType=" + FeedType + "&callback=?", function (data) {
                CallbackFunction(data);
            });
        }

        //#region Init

        //#region Calendar Init
        if (typeof Settings["HasCalendarSupport"] != "undefined" && Settings["HasCalendarSupport"] == true) {
            $(".MediaCalendarPop .BaseTemplate .mainContent .right .MapControlls .GoButton").click(function () {
                window.open('http://maps.google.co.uk/maps?f=d&source=s_d&saddr=' + $(".MapControlls .FindLocation").val() + '&daddr=' + $(".MapControlls").attr("data-adress") + '&hl=en', 'map');
                $(".MapControlls .FindLocation").val("");
            });
        }
        //#endregion

        //#region News Init
        if (typeof Settings["HasNewsSupport"] != "undefined" && Settings["HasNewsSupport"] == true) {

            $(window).resize(function () {
                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").each(function () {
                    if (this.complete) {
                        $.MediaServiceHelper.SetZoomImagePos($(this)[0].naturalHeight, $(this)[0].naturalWidth);
                    }
                });
            });


            $(".article-image.NewsArticleThumb .big-frame").on("click touchstart", function () {
                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").each(function () {
                    if (this.complete) {
                        $.MediaServiceHelper.SetZoomImagePos($(this)[0].naturalHeight, $(this)[0].naturalWidth);
                    }
                });
                $(".ZoomContainer").show();
                setTimeout(function () {
                    $(".ZoomContainer").addClass("open");
                }, 100);
                return false;
            });

            $(".ZoomContainer .ZoomImageContainerClose").on("click touchstart", function () {
                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").each(function () {
                    if (this.complete) {
                        $.MediaServiceHelper.SetZoomImagePos($(this)[0].naturalHeight, $(this)[0].naturalWidth);
                    }
                });


                $(".ZoomContainer").removeClass("open");
                setTimeout(function () {
                    $(".ZoomContainer").hide();
                }, 500);
                return false;
            });


            if ($(".ZoomContainer .ZoomImageContainer .ZoomImage img")[0].complete) {
                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").each(function () {
                    if (this.complete) {
                        $.MediaServiceHelper.SetZoomImagePos($(this)[0].naturalHeight, $(this)[0].naturalWidth);
                    }
                });
            }
            else {
                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").load(function () {
                    $.MediaServiceHelper.SetZoomImagePos($(this)[0].naturalHeight, $(this)[0].naturalWidth);
                });
            }


        }
        //#endregion

        //#region PhotosInit
        if (typeof Settings["HasPhotoSupport"] != "undefined" && Settings["HasPhotoSupport"] == true) {

            var PhotosCarouselHideCheckTime = 0;
            var PhotosCarouselHideMouseIn = true;

            $(".PhotosPage .PhotosPlayPauseBtn").on("click touchstart", function () {
                if ($(this).hasClass("Play"))
                    $(this).removeClass("Play").addClass("Pause");
                else
                    $(this).removeClass("Pause").addClass("Play");
                return false;
            });


            setInterval(function () {
                if ($(".PhotosPage .PhotosPlayPauseBtn").hasClass("Pause")) {
                    $(".PhotosPage .MainNext").trigger('click');
                }
            }, 3000);



            setInterval(function () {
                if (!$(".PhotosPage .CarouselHideShowArrow").hasClass("MediaArrowShown") && PhotosCarouselHideMouseIn && PhotosCarouselHideCheckTime > 5000) {
                    $(".PhotosPage .CarouselHideShowArrow").addClass("MediaArrowShown");
                    $(".PhotosPage .ImagesCarousel").addClass("MediaImagesCarouselHidden");
                    $(".PhotosPage .CarouselPrev").addClass("MediaCarouselPrevHidden");
                    $(".PhotosPage .CarouselNext").addClass("MediaCarouselNextHidden");
                    PhotosCarouselHideCheckTime = 0;
                }
                else {
                    if (!$(".PhotosPage .CarouselHideShowArrow").hasClass("MediaArrowShown") && PhotosCarouselHideMouseIn)
                        PhotosCarouselHideCheckTime += 100;
                }
            }, 100);

            $(".PhotosPage .CarouselHideShowArrow").on("click touchstart", function () {
                $(".PhotosPage .CarouselHideShowArrow").removeClass("MediaArrowShown");
                $(".PhotosPage .ImagesCarousel").removeClass("MediaImagesCarouselHidden");
                $(".PhotosPage .CarouselPrev").removeClass("MediaCarouselPrevHidden");
                $(".PhotosPage .CarouselNext").removeClass("MediaCarouselNextHidden");
                PhotosCarouselHideCheckTime = 0;
                PhotosCarouselHideMouseIn = true;
                return false;
            });

            $(".PhotosPage .ImagesCarousel, .PhotosPage .CarouselPrev, .PhotosPage .CarouselNext").mousemove(function () {
                PhotosCarouselHideCheckTime = 0;
                PhotosCarouselHideMouseIn = false;
            });


            $(".PhotosPage .ImagesCarousel").mouseleave(function () {
                PhotosCarouselHideCheckTime = 0;
                PhotosCarouselHideMouseIn = true;
            });

            $(".PhotosPage .MainImageContainer").css({ "width": $(".MediaPhotosPop .PhotosPage").width(), "height": $(".MediaPhotosPop .PhotosPage").height() });
            $(".PhotosPage .MainImageContainer .MainImage").load(function () {
                $(this).removeAttr("style");
                SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                $(this).parent().find(".imageLoading").hide();
            });
            $(".PhotosPage .MainImageContainer .MainImageReal").load(function () {
                $(this).removeAttr("style");
                SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                $(this).parent().find(".imageLoading").hide();
                $(this).parent().find(".MainImage").hide();
                $(this).css({ "visibility": "visible" });
            });
            $(".PhotosPage .MainPrev").on("click touchstart", function (e) {
                e.stopPropagation();
                if (AnimationSemafor) {
                    AnimationSemafor = false;
                    CurrentImage = GetRealImageCount(CurrentImage - 1);

                    if (PhotoList.length > getCarouselItemsCount())
                        CurrentCarouselImage = CurrentImage;

                    $(".PhotosPage .MainImageContainer.CenterMainImage").transition({ "margin-left": "100%" }, FlickrTransitionTime);

                    $(".PhotosPage .MainImageContainer.PrevMainImage").transition({ "margin-left": "0" }, FlickrTransitionTime, function () {
                        var CenterImage = $(".PhotosPage .MainImageContainer.CenterMainImage");
                        var NextImage = $(".PhotosPage .MainImageContainer.NextMainImage");
                        var PreviousImage = $(".PhotosPage .MainImageContainer.PrevMainImage");

                        CenterImage.removeClass("CenterMainImage");
                        CenterImage.addClass("PrevMainImage");
                        PreviousImage.removeClass("PrevMainImage");
                        PreviousImage.addClass("CenterMainImage");
                        CenterImage.removeAttr("style");
                        PreviousImage.removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes[3].ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes[3].ImageUrl);

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes).ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes).ImageUrl);

                        AnimationSemafor = true;
                    });

                    PositionCarouselItems(true);

                }
                return false;
            });
            $(".PhotosPage .MainNext").on("click touchstart", function (e) {
                e.stopPropagation();
                if (AnimationSemafor) {
                    AnimationSemafor = false;
                    CurrentImage = GetRealImageCount(CurrentImage + 1);

                    if (PhotoList.length > getCarouselItemsCount())
                        CurrentCarouselImage = CurrentImage;

                    $(".PhotosPage .MainImageContainer.CenterMainImage").transition({ "margin-left": "-100%" }, FlickrTransitionTime);
                    $(".PhotosPage .MainImageContainer.NextMainImage").transition({ "margin-left": "0" }, FlickrTransitionTime, function () {

                        var CenterImage = $(".PhotosPage .MainImageContainer.CenterMainImage");
                        var NextImage = $(".PhotosPage .MainImageContainer.NextMainImage");
                        var PreviousImage = $(".PhotosPage .MainImageContainer.PrevMainImage");

                        CenterImage.removeClass("CenterMainImage");
                        CenterImage.addClass("NextMainImage");
                        NextImage.removeClass("NextMainImage");
                        NextImage.addClass("CenterMainImage");
                        CenterImage.removeAttr("style");
                        NextImage.removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes[3].ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes[3].ImageUrl);

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes).ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes).ImageUrl);

                        AnimationSemafor = true;
                    });

                    PositionCarouselItems(true);

                }
                return false;
            });
            $(".PhotosPage .CarouselNext").on("click touchstart", function (e) {
                e.stopPropagation();
                if (AnimationSemafor) {
                    AnimationSemafor = false;
                    CurrentCarouselImage = GetRealImageCount(CurrentCarouselImage + 1);
                    PositionCarouselItems(true);
                    setTimeout(function () {
                        AnimationSemafor = true;
                    }, FlickrTransitionTime);
                }
                return false;
            });
            $(".PhotosPage .CarouselPrev").on("click touchstart", function (e) {
                e.stopPropagation();
                if (AnimationSemafor) {
                    AnimationSemafor = false;
                    CurrentCarouselImage = GetRealImageCount(CurrentCarouselImage - 1);
                    PositionCarouselItems(true);
                    setTimeout(function () {
                        AnimationSemafor = true;
                    }, FlickrTransitionTime);
                }
                return false;
            });
            $(window).resize(function () {
                $(".PhotosPage .MainImageContainer").css({ "width": $(".MediaPhotosPop .PhotosPage").width(), "height": $(".MediaPhotosPop .PhotosPage").height() });
                $(".PhotosPage .MainImageContainer .MainImage").each(function () {
                    if (this.complete) {
                        $(this).removeAttr("style");
                        SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                    }
                });
                $(".PhotosPage .MainImageContainer .MainImageReal").each(function () {
                    if (this.complete) {
                        $(this).removeAttr("style");
                        SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                        $(this).css({ "visibility": "visible" });
                    }
                });
                PositionCarouselItems(false);
            });
        }
        //#endregion

        //#region SoundCloud Init
        if (typeof Settings["HasSoundCloudSupport"] != "undefined" && Settings["HasSoundCloudSupport"] == true) {
        }
        //#endregion

        //#region FeedsInit
        if (Settings["FeedsArray"].length) {
            $.getJSON(Settings["ServiceUrl"] + "GetMediaFeedDetails?FeedIds=" + Settings["FeedsArray"].join("%2C") + "&callback=?", function (data) {
                MediaTypes = data;
                for (var i = 0; i < Settings["FeedGroups"].length; i++) {
                    Settings["FeedGroups"][i].FeedIds = new Array();
                    for (var j = 0; j < MediaTypes.length; j++)
                        for (var k = 0; k < Settings["FeedGroups"][i].Feeds.length; k++)
                            if (MediaTypes[j].FeedType == Settings["FeedGroups"][i].Feeds[k])
                                if (Settings["FeedGroups"][i].FeedIds.filter(function (e) { return e == MediaTypes[j].FeedId }).length == 0)
                                    Settings["FeedGroups"][i].FeedIds.push(MediaTypes[j].FeedId);
                }
                that.FeedGroups = Settings["FeedGroups"];
                Settings["InitCallBack"](that);

            });
        }
        else {
            Settings["InitCallBack"](that);
        }

        //that.GetAplicationToken("Youtube", function (data) {
        //    $.MediaServiceHelper.youtubeKey = data;
        //});

        //#endregion
        //#endregion

    }

    //#region Extension Helpers
    $.MediaServiceHelper.GetMediaItemsSearchSuggestions = function (SearchText, FeedIds, SearchTags, CallbackFunction) {
        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItemsSearchSuggestions?FeedIds=" + FeedIds.join("%2C") + "&SearchText=" + encodeURIComponent(SearchText) + "&SearchTags=" + encodeURIComponent(SearchTags.join(",")) + "&Count=10&callback=?", function (data) {
            CallbackFunction(data, SearchText);
        });
    }

    $.MediaServiceHelper.GetMediaItems = function (FeedIds, TakeCount, SkipCount, CallbackFunction, qFlickrDescription, HasCategorys, IsTimeline, IsExtended, FirstOfType, SearchTags) {

        if (typeof qFlickrDescription == "undefined")
            qFlickrDescription = "";

        if (typeof HasCategorys != "undefined" && HasCategorys != "")
            HasCategorys = HasCategorys.join("%2C");
        else
            HasCategorys = "";


        if (typeof IsTimeline == "undefined")
            IsTimeline = "";
        if (typeof IsExtended == "undefined")
            IsExtended = "";

        if (typeof SearchTags == "undefined")
            SearchTags = [];

        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItems?FeedIds=" + FeedIds.join("%2C") + "&skip=" + SkipCount + "&take=" + TakeCount + "&qFlickrDescription=" + qFlickrDescription + "&HasCategorys=" + HasCategorys + "&IsTimeline=" + IsTimeline + "&IsExtended=" + IsExtended + "&FirstNoOfItems=" + FirstOfType + "&SearchTags=" + encodeURIComponent(SearchTags.join(",")) + "&callback=?", function (data) {
            CallbackFunction(data);
        });
    }

    $.MediaServiceHelper.GetMediaItemsAdvanced = function (FeedIds, TakeCount, SkipCount, CallbackFunction, qFlickrDescription, HasCategorys, IsTimeline, IsExtended, FirstOfType, SearchTags, Fields, AndFilter, FullTextFilter) {

        if (typeof qFlickrDescription == "undefined")
            qFlickrDescription = "";

        if (typeof HasCategorys != "undefined" && HasCategorys != "")
            HasCategorys = HasCategorys.join("%2C");
        else
            HasCategorys = "";


        if (typeof IsTimeline == "undefined")
            IsTimeline = "";

        if (typeof AndFilter == "undefined" || AndFilter == "")
            AndFilter = "and";
        else {
            if (AndFilter == "AND")
                AndFilter = "and";
            else
                AndFilter = "or";
        }

        if (typeof FullTextFilter == "undefined" || FullTextFilter == "")
            FullTextFilter = "true";
        else {
            if (FullTextFilter == "True")
                FullTextFilter = "true";
            else
                FullTextFilter = "false";
        }


        if (typeof IsExtended == "undefined")
            IsExtended = "";

        if (typeof SearchTags == "undefined")
            SearchTags = [];

        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItemsAdvanced?FeedIds=" + FeedIds.join("%2C") + "&skip=" + SkipCount + "&take=" + TakeCount + "&qFlickrDescription=" + qFlickrDescription + "&HasCategorys=" + HasCategorys + "&IsTimeline=" + IsTimeline + "&IsExtended=" + IsExtended + "&FirstNoOfItems=" + FirstOfType + "&SearchTags=" + encodeURIComponent(SearchTags.join(",")) + "&Fields=" + encodeURIComponent(Fields.join(",")) + "&AndOr=" + AndFilter + "&FullText=" + FullTextFilter + "&callback=?", function (data) {
            CallbackFunction(JSON.parse(data));
        });
    }


    $.MediaServiceHelper.GetMediaItemDescription = function (ItemId, FeedId, CallbackFunction) {
        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItemDescription?ItemId=" + ItemId + "&FeedId=" + FeedId + "&callback=?", function (data) {
            CallbackFunction(data, ItemId);
        });
    }

    $.MediaServiceHelper.GetExistingFeedsForSearch = function (FeedIds, qFlickrDescription, HasCategorys, IsTimeline, IsExtended, SearchTags, CallbackFunction) {

        if (typeof qFlickrDescription == "undefined")
            qFlickrDescription = "";

        if (typeof HasCategorys != "undefined" && HasCategorys != "")
            HasCategorys = HasCategorys.join("%2C");
        else
            HasCategorys = "";


        if (typeof IsTimeline == "undefined")
            IsTimeline = "";
        if (typeof IsExtended == "undefined")
            IsExtended = "";

        if (typeof SearchTags == "undefined")
            SearchTags = [];


        var ExistingingFeeds = [];
        for (var i = 0; i < $.MediaServiceHelper.Settings.FeedGroups.length; i++) {
            if ($.MediaServiceHelper.Settings.FeedGroups[i].FeedIds.length) {
                ExistingingFeeds.push({
                    "GroupName": $.MediaServiceHelper.Settings.FeedGroups[i].GroupName,
                    "FeedGroups": $.MediaServiceHelper.Settings.FeedGroups[i].Feeds
                })
            }
        }

        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItems?FeedIds=" + FeedIds.join("%2C") + "&skip=" + 0 + "&take=" + ExistingingFeeds.length + "&qFlickrDescription=" + qFlickrDescription + "&HasCategorys=" + HasCategorys + "&IsTimeline=" + IsTimeline + "&IsExtended=" + IsExtended + "&FirstNoOfItems=" + 1 + "&SearchTags=" + encodeURIComponent(SearchTags.join(",")) + "&callback=?", function (data) {

            var FeedItemsTypes = [];
            for (var i = 0; i < data.length; i++) {
                FeedItemsTypes.push(data[i].ItemType);
            }

            var ExistingFeedsForSearch = [];

            for (var i = 0; i < ExistingingFeeds.length; i++) {
                for (var j = 0; j < ExistingingFeeds[i].FeedGroups.length; j++) {
                    if (FeedItemsTypes.filter(function (value) { return value == ExistingingFeeds[i].FeedGroups[j]; }).length) {
                        ExistingFeedsForSearch.push(ExistingingFeeds[i].GroupName);
                        break;
                    }
                }
            }

            CallbackFunction(ExistingFeedsForSearch);
        });
    }


    $.MediaServiceHelper.GetPhotosSet = function (SetId, CallbackFunction) {
        $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetPhotosSet?SetId=" + SetId + "&callback=?", function (data) {
            CallbackFunction(data);
        });
    }
    $.MediaServiceHelper.GoToCarouselItem = function (item) {
        if (AnimationSemafor) {
            if (CurrentImage != item) {
                AnimationSemafor = false;
                if (GetRealImageSign(item, CurrentImage) > 0) {
                    CurrentImage = item;

                    if ($(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src") != PhotoList[CurrentImage].Sizes[3].ImageUrl) {
                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage].Sizes[3].ImageUrl)
                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage].Sizes).ImageUrl);
                    }

                    $(".PhotosPage .MainImageContainer.CenterMainImage").transition({ "margin-left": "-100%" }, FlickrTransitionTime);
                    $(".PhotosPage .MainImageContainer.NextMainImage").transition({ "margin-left": "0" }, FlickrTransitionTime, function () {
                        var CenterImage = $(".PhotosPage .MainImageContainer.CenterMainImage");
                        var NextImage = $(".PhotosPage .MainImageContainer.NextMainImage");
                        var PreviousImage = $(".PhotosPage .MainImageContainer.PrevMainImage");

                        CenterImage.removeClass("CenterMainImage");
                        CenterImage.addClass("NextMainImage");
                        NextImage.removeClass("NextMainImage");
                        NextImage.addClass("CenterMainImage");
                        CenterImage.removeAttr("style");
                        NextImage.removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes[3].ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes[3].ImageUrl);

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes).ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes).ImageUrl);

                        AnimationSemafor = true;
                    });
                }
                else {
                    CurrentImage = item;
                    if ($(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src") != PhotoList[CurrentImage].Sizes[3].ImageUrl) {
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage].Sizes[3].ImageUrl)
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage].Sizes).ImageUrl);
                    }

                    $(".PhotosPage .MainImageContainer.CenterMainImage").transition({ "margin-left": "100%" }, FlickrTransitionTime);
                    $(".PhotosPage .MainImageContainer.PrevMainImage").transition({ "margin-left": "0" }, FlickrTransitionTime, function () {
                        var CenterImage = $(".PhotosPage .MainImageContainer.CenterMainImage");
                        var NextImage = $(".PhotosPage .MainImageContainer.NextMainImage");
                        var PreviousImage = $(".PhotosPage .MainImageContainer.PrevMainImage");

                        CenterImage.removeClass("CenterMainImage");
                        CenterImage.addClass("PrevMainImage");
                        PreviousImage.removeClass("PrevMainImage");
                        PreviousImage.addClass("CenterMainImage");
                        CenterImage.removeAttr("style");
                        PreviousImage.removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes[3].ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").attr("src", PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes[3].ImageUrl);

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style");
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style");

                        $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes).ImageUrl);
                        $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes).ImageUrl);

                        AnimationSemafor = true;
                    });
                }
                PositionCarouselItems(true);
            }
        }
    }
    $.MediaServiceHelper.SetVideo = function (VideoFrameObject, VideoId) {
        VideoFrameObject.attr("src", ("http://www.youtube.com/embed/{MEDIA_CODE}?autoplay=1&rel=0&controls=1&wmode=opaque&showinfo=1&enablejsapi=1").replace("{MEDIA_CODE}", VideoId));
    }
    $.MediaServiceHelper.SetBlog = function (BlogFrameObject, Url) {
        BlogFrameObject.attr("src", Url);
    }


    $.MediaServiceHelper.SetPublication = function (PublicationFrameObject, Url) {
        PublicationFrameObject.html("<div  data-url=\"" + Url + "\" class=\"issuuembed\"></div>");
        setTimeout(function () {
            window.IssuuReaders.add();
        }, 1100);
    }

    $.MediaServiceHelper.SetTwitter = function (TwitterFrameObject, Id, User) {
        TwitterFrameObject.html("<blockquote class=\"twitter-tweet\" lang=\"en\"><a href=\"https://twitter.com/" + User + "/status/" + Id + "\"></a></blockquote>");
        setTimeout(function () {
            window.twttr.widgets.load()
        }, 1100);
    }

    $.MediaServiceHelper.SetFacebook = function (FacebookFrameObject, Id) {
        FacebookFrameObject.html("<div class=\"fb-post\" data-href=\"http://www.facebook.com/" + Id.split("_")[0] + "/posts/" + Id.split("_")[Id.split("_").length - 1] + "\" data-width=\"500\"></div>");
        setTimeout(function () {
            window.fbAsyncInit.apply();
        }, 1100);
    }


    $.MediaServiceHelper.SetInstagram = function (InstagramFrameObject, Url) {
        InstagramFrameObject.html("<blockquote class=\"instagram-media\" data-instgrm-captioned data-instgrm-version=\"4\"><a href=\"" + Url + "\"></a></blockquote>");
        setTimeout(function () {
            window.instgrm.Embeds.process()
        }, 1100);
    }

    $.MediaServiceHelper.SetPinterest = function (PinterestFrameObject, Id) {
        PinterestFrameObject.html("<a data-pin-do=\"embedPin\"  href=\"http://www.pinterest.com/pin/" + Id + "\"></a>");
        setTimeout(function () {
            doBuild(PinterestFrameObject.find("a[data-pin-do=\"embedPin\"]"));
        }, 1100);
    }

    $.MediaServiceHelper.SetPhotos = function (PhotosetID, fitTimer, Callback) {
        $(".PhotosPage .PhotosPlayPauseBtn").removeClass("Pause").addClass("Play");


        $(".PhotosPage .CarouselHideShowArrow").removeClass("MediaArrowShown");
        $(".PhotosPage .ImagesCarousel").removeClass("MediaImagesCarouselHidden");
        $(".PhotosPage .CarouselPrev").removeClass("MediaCarouselPrevHidden");
        $(".PhotosPage .CarouselNext").removeClass("MediaCarouselNextHidden");
        PhotosCarouselHideCheckTime = 0;
        PhotosCarouselHideMouseIn = true;


        $.MediaServiceHelper.GetPhotosSet(PhotosetID, function (Pl) {
            PhotoList = Pl.Photos;
            CurrentImage = 0;
            CurrentCarouselImage = 0;

            $(".PhotosPage .MainImageContainer").css({ "width": $(".MediaPhotosPop .PhotosPage").width(), "height": $(".MediaPhotosPop .PhotosPage").height() });

            $(".PhotosPage .ImagesCarousel").html("");
            $(".PhotosPage .MainImageContainer.CenterMainImage").find(".imageLoading").show();
            $(".PhotosPage .MainImageContainer.NextMainImage").find(".imageLoading").show();
            $(".PhotosPage .MainImageContainer.PrevMainImage").find(".imageLoading").show();

            $(".PhotosPage .MainImageContainer.CenterMainImage").find(".MainImageReal").removeAttr("style").removeAttr("src");
            $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImageReal").removeAttr("style").removeAttr("src");
            $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImageReal").removeAttr("style").removeAttr("src");

            $(".PhotosPage .MainImageContainer.CenterMainImage").find(".MainImage").removeAttr("style").removeAttr("src");
            $(".PhotosPage .MainImageContainer.NextMainImage").find(".MainImage").removeAttr("style").removeAttr("src");
            $(".PhotosPage .MainImageContainer.PrevMainImage").find(".MainImage").removeAttr("style").removeAttr("src");

            setTimeout(function () {
                $(".PhotosPage .MainImageContainer.CenterMainImage .MainImage").attr("src", PhotoList[CurrentImage].Sizes[3].ImageUrl);
                $(".PhotosPage .MainImageContainer.NextMainImage .MainImage").attr("src", PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes[3].ImageUrl);
                $(".PhotosPage .MainImageContainer.PrevMainImage .MainImage").attr("src", PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes[3].ImageUrl);

                $(".PhotosPage .MainImageContainer.CenterMainImage .MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage].Sizes).ImageUrl);
                $(".PhotosPage .MainImageContainer.NextMainImage .MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage + 1 >= PhotoList.length ? 0 : CurrentImage + 1].Sizes).ImageUrl);
                $(".PhotosPage .MainImageContainer.PrevMainImage .MainImageReal").attr("src", GetFullscreenImageSize(PhotoList[CurrentImage - 1 < 0 ? PhotoList.length - 1 : CurrentImage - 1].Sizes).ImageUrl);


                for (var i = 0; i < PhotoList.length; i++)
                    $(".PhotosPage .ImagesCarousel").append(CarouselImageTemplate.replace("{MEDIA_IMAGE}", PhotoList[i].Sizes[3].ImageUrl).replace("{MEDIA_ITEM_TO_GO_TO}", i));


                $(".PhotosPage .ImagesCarousel .CarouselImageContainer .CarouselImage").each(function () {
                    if (this.complete) {
                        SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                        $(this).prev().attr("style", $(this).attr("style"));
                    }
                    else
                        $(this).load(function () {
                            SpecialMediaFitImage(new StretchImg(this, this.width, this.height));
                            $(this).prev().attr("style", $(this).attr("style"));
                        });
                });

                PositionCarouselItems(false);
            }, fitTimer);

            $(".PhotosPage .FlickrTopBar .FlickrText").html(Pl.Title);
            $(".PhotosPage .PhotosCount").html(PhotoList.length + " photos");
            $(".PhotosPage .PhotosDate").html(moment(Pl.Date).format("Do MMM YYYY"));
            $(".PhotosPage .FlickrTopBar .PhotosShareBtn").attr("data-share-title", Pl.Title);
            InitSwipe();
            Callback();
        });
    }
    $.MediaServiceHelper.SetZoomImagePos = function (height, width) {


        var TheRatio = 0;
        var ParentH = $(window).height() - 20;
        var ParentW = $(window).width() - 20;

        if (width > ParentW || height > ParentH) {
            if (ParentH / height > ParentW / width)
                TheRatio = ParentW / width;
            else
                TheRatio = ParentH / height;

            width = TheRatio * width;
            height = TheRatio * height;

            $(".ZoomContainer .ZoomImageContainer .ZoomImage img").css({ "width": width, "height": height });
        }
        else {
            $(".ZoomContainer .ZoomImageContainer .ZoomImage img").removeAttr("style");
        }

        var top = -1 * Math.floor((height + 10) / 2);
        var left = -1 * Math.floor((width + 10) / 2);

        $(".ZoomContainer .ZoomImageContainer").css({ "margin-top": top, "margin-left": left });
    }
    $.MediaServiceHelper.SetNews = function (NewsId, FeedId, Animation) {
        var NewsTimeout = 0;
        if (typeof $.MediaServiceHelper.Settings["NewsBeforeCallback"] != "undefined")
            NewsTimeout = $.MediaServiceHelper.Settings["NewsBeforeCallback"](NewsId, FeedId, Animation);

        var FirstTime = Date.now();

        $.MediaServiceHelper.GetMediaItemDescription(NewsId, FeedId, function (data) {
            var ItemDetails = JSON.parse(data);
            var CategoryArray = [];
            CategoryArray.push(ItemDetails.Category1Id)
            if (ItemDetails.Category2Id)
                CategoryArray.push(ItemDetails.Category2Id)


            setTimeout(function () {

                if (ItemDetails.IsAlert)
                    $(".MediaNewsPop .MediaPopContentContainer .BaseTemplate").addClass("alert");
                else
                    $(".MediaNewsPop .MediaPopContentContainer  .BaseTemplate").removeClass("alert");

                $(".MediaNewsPop .PopShare").attr("data-share-title", ItemDetails.Title);
                $(".MediaNewsPop .PopShare").attr("data-share-url", location.href.split('/')[0] + "//" + location.href.split('/')[2] + "/media/newsfeed/" + FeedId + "/" + NewsId);

                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent #wrapContent .secondLvlCss").html($('<div/>').html(ItemDetails.Description).text());
                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-title").html(ItemDetails.Title);
                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-date").html(moment(ItemDetails.Date).format("DD/MM/YY"));

                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .article-image.news-item img").attr("src", ItemDetails.Image + "?command_1=resize&width_1=220");


                $(".ZoomContainer .ZoomImageContainer .ZoomImage img").attr("src", ItemDetails.Image);



                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-image img").attr("src", ItemDetails.Image);

                $(".MediaNewsPop .MediaPopContentContainer  > div.NewsContentWrapper > div > div > div.page-wrapper > div.article-image > div > div > div.image-wrapper > img").attr("src", ItemDetails.Image + "?command_1=resize&width_1=220");

                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-categories").html("");
                $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-categories").append("<a  class='cat first-category'>" + ItemDetails.Category1 + "</a>");
                if (ItemDetails.Category2Id)
                    $(".MediaNewsPop .MediaPopContentContainer  .NewsContent .articleContentWrapper .article-categories").append("<a  class='cat second-category'>" + ItemDetails.Category2 + "</a>");

            }, NewsTimeout - (Date.now() - FirstTime));


            $.MediaServiceHelper.GetMediaItems([FeedId], 0, 0, function (RelatedNews) {

                if ($("#NwCarousel .caroufredsel_wrapper").length) {
                    $("#NwCarousel").trigger("destroy");
                }
                $("#NwCarousel").html("");

                if (RelatedNews.length == 0) {
                    $(".MediaNewsPop .MediaPopContentContainer  .Interested").hide();
                    $(".MediaNewsPop .MediaPopContentContainer  #NwCarousel").hide();
                }
                else {
                    $(".MediaNewsPop .MediaPopContentContainer  .Interested").removeAttr("style");
                    $(".MediaNewsPop .MediaPopContentContainer  #NwCarousel").removeAttr("style");
                }

                for (var i = 0; i < RelatedNews.length; i++) {
                    if (RelatedNews[i].Url != ItemDetails.Url)
                        $("#NwCarousel").append(" <div class='NwCarouselItem'>" +
                                            "<a onclick=\"$.MediaServiceHelper.SetNews('" + RelatedNews[i].Id + "', '" + FeedId + "', 4);\" class='news-item clearfix noSelect" + (/*RelatedNews[i].IsAlert*/ 1 == 0 ? "alert" : "") + "'>" +
                                                "<div class='bigFrame'>" +
                                                    "<div class='smallFrame'>" +
                                                        "<div class='img-alert' data-sprite='alert'></div>" +
                                                        "<img src='" + RelatedNews[i].Image + "?command_1=resize&height_1=85' class='news-thumb' alt='' />" +
                                                        "<div class='normlFrame'></div>" +
                                                        "<div class='alertFrame'></div>" +
                                                        "<div class='hoverFrame'>" +
                                                            "<div class='hoverImage' data-sprite='img-hover'>" +
                                                            "</div>" +
                                                        "</div>" +
                                                    "</div>" +
                                                    "<div class='loadingFrame'></div>" +
                                                "</div>" +
                                                "<div class='textContainer'>" +
                                                    "<span class='dotify'>" + RelatedNews[i].Title + "</span>" +
                                                "</div>" +
                                            "</a>" +
                                        "</div>");
                }

                //#region Fix stuff
                setTimeout(function () {
                    FixImages(".news-thumb");
                    $(".dotify").each(function () {
                        $(this).attr("data-text", $(this).html());
                    });
                    $(".dotify").dotdotdot();
                    $(".dotify").css({ "visibility": "visible" });
                    $(".article-thumb").error(function () {
                        var newImg = $(this).attr("src").replace($(this).attr("src").substring(0, $(this).attr("src").indexOf('?')), "/Images/News/defaultNewsIcon.png");
                        $(this).attr("src", newImg);
                    });
                    $('.news-item .textContainer').each(function () {
                        var photoWidth = $(this).parent().find('.smallFrame').width();
                        $(this).css("width", photoWidth);
                    });

                    $("#NwCarousel").carouFredSel({
                        auto: false,
                        width: "100%",
                        onWindowResize: "debounce",
                        prev: {
                            button: "#prev",
                            key: "left"
                        },
                        next: {
                            button: "#next",
                            key: "right"
                        },
                        scroll: {
                            duration: 500,
                            items: 1,
                            easing: "swing",
                            pauseOnHover: true,
                            fx: "directscroll"
                        },
                        swipe: true
                    });
                }, 500);
                if (typeof $.MediaServiceHelper.Settings["NewsAfterCallback"] != "undefined") {
                    if (Date.now() - FirstTime >= NewsTimeout)
                        $.MediaServiceHelper.Settings["NewsAfterCallback"](NewsId, FeedId, Animation)
                    else
                        setTimeout(function () {
                            $.MediaServiceHelper.Settings["NewsAfterCallback"](NewsId, FeedId, Animation)
                        }, NewsTimeout - (Date.now() - FirstTime));
                }

                //#endregion
            }, "", CategoryArray, "true", "true", 0, []);
        });
    }
    $.MediaServiceHelper.SetEvent = function (EventId, FeedId, Animation) {
        var EventsTimeout = 0;
        if (typeof $.MediaServiceHelper.Settings["EventsBeforeCallback"] != "undefined")
            EventsTimeout = $.MediaServiceHelper.Settings["EventsBeforeCallback"](EventId, FeedId, Animation);

        var FirstTime = Date.now();

        $.MediaServiceHelper.GetMediaItemDescription(EventId, FeedId, function (data) {
            var ItemDetails = JSON.parse(data);
            var CategoryArray = [];
            CategoryArray.push(ItemDetails.Category1Id)
            if (ItemDetails.Category2Id)
                CategoryArray.push(ItemDetails.Category2Id)

            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .article-categories").html("");

            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .article-categories").append("<a  class='cat first-category'>" + ItemDetails.Category1 + "</a>");
            if (ItemDetails.Category2Id)
                $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .article-categories").append("<a  class='cat second-category'>" + ItemDetails.Category2 + "</a>");

            $(".MediaCalendarPop .eventContent #wrapContent .secondLvlCss").html($('<div/>').html(ItemDetails.Description).text());
            $(".MediaCalendarPop .BaseTemplate .mainContent .Title").html(ItemDetails.Title);


            if (moment(ItemDetails.Date).format("HH:mm") != "00:00")
                $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .eventTime").html(moment(ItemDetails.Date).format("h:mm a") + (ItemDetails.EndDate != "" ? " to " + moment(ItemDetails.EndDate).format("MMMM Do YYYY [at] h:mm a") : ""));
            else
                $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .eventTime").html("all day");

            $(".MediaCalendarPop .BaseTemplate .mainContent .alertRow").remove();
            if (ItemDetails.IsAlert) {
                $("<div class='alertRow'>" +
                    "<div data-sprite='alert-small'></div>" +
                    "<span class='updtxt'>Event updated:</span>" +
                    "<span> " + moment(ItemDetails.LastUpdateDate).format("[on] MMMM Do YYYY [at] h:mm A") + "</span>" +
                "</div>").insertAfter(".MediaCalendarPop .BaseTemplate .mainContent .Title");
            }

            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .monthName").html(moment(ItemDetails.Date).format("MMMM"));
            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .monthName").html(moment(ItemDetails.Date).format("MMMM"));
            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .d-block .d-day-week").html(moment(ItemDetails.Date).format("ddd"));
            $(".MediaCalendarPop .BaseTemplate .mainContent .left .TopContent .d-block .d-day-month").html(moment(ItemDetails.Date).format("DD"));
            $(".MediaCalendarPop .BaseTemplate .mainContent .right .thumbnail img").attr("src", ItemDetails.Image + "?command_1=resize&width_1=1000");
            $(".MediaCalendarPop .BaseTemplate .pageContent .feature img").attr("src", ItemDetails.BannerImage + "?command_1=resize&width_1=1000");
            $(".MediaCalendarPop .BaseTemplate .mainContent .right #GoogleMap").attr("data-latitude", ItemDetails.Latitude);
            $(".MediaCalendarPop .BaseTemplate .mainContent .right #GoogleMap").attr("data-longitude", ItemDetails.Longitude);
            $(".MediaCalendarPop .BaseTemplate .mainContent .right #GoogleMap").attr("data-title", ItemDetails.Title);
            $(".MediaCalendarPop .BaseTemplate .mainContent .right .location").html((ItemDetails.Location == '' ? "" : ItemDetails.Location + ", ") + ItemDetails.LocationAdress);
            $(".MediaCalendarPop .BaseTemplate .mainContent .right .MapControlls").attr("data-adress", ItemDetails.LocationAdress);
            $(".MediaCalendarPop .BaseTemplate .mainContent .right .btn").attr("href", ItemDetails.Link);
            $(".MediaCalendarPop .PopShare").attr("data-share-title", ItemDetails.Title);
            $(".MediaCalendarPop .PopShare").attr("data-share-url", location.href.split('/')[0] + "//" + location.href.split('/')[2] + "/media/eventsfeed/" + FeedId + "/" + EventId);


            $.getJSON($.MediaServiceHelper.Settings["ServiceUrl"] + "GetMediaItemsClone?FeedIds=" + FeedId + "&skip=0&take=1000&HasCategorys=" + CategoryArray.join("%2C") + "&callback=?", function (data) {
                var EvJsonFilteredTmp = [];
                CategoryDictionaryJson = [];
                EvJsonFiltered = [];
                for (var i = 0; i < data.length; i++) {
                    if (data[i].Id != EventId) {
                        EvJsonFilteredTmp.push({
                            AwayResult: "",
                            EndDate: parseInt(moment(data[i].EndDate).format("YYYYMMDD")),
                            EventType: data[i].IsBooking ? "Booking" : "SimpleEvent",
                            EventURL: data[i].Link,
                            FirstCateg: data[i].Category1Id,
                            HomeResult: "",
                            IsUpdated: data[i].IsAlert,
                            Location: data[i].Location,
                            SecondCateg: data[i].Category2Id,
                            StartDate: parseInt(moment(data[i].Date).format("YYYYMMDD")),
                            StartEndTime: data[i].IsAllDay === false ? moment(data[i].StartDateString, "DD-MM-YYYY HH:mm:ss").format("h:mm a") + " - " + moment(data[i].EndDateString, "DD-MM-YYYY HH:mm:ss").format("h:mm a") : "All day",
                            Title: data[i].Title
                        });
                    }

                    if (CategoryDictionaryJson.filter(function (a) { return a.id == data[i].Category1Id; }).length == 0)
                        CategoryDictionaryJson.push({
                            id: data[i].Category1Id,
                            name: data[i].Category1
                        });

                    if (CategoryDictionaryJson.filter(function (a) { return a.id == data[i].Category2Id; }).length == 0)
                        CategoryDictionaryJson.push({
                            id: data[i].Category2Id,
                            name: data[i].Category2
                        });
                }

                EvJsonFiltered = EvJsonFilteredTmp.slice(0);
                showElements(EvJsonFiltered, false, 0, parseInt(moment().format("YYYYMMDD")), 0, 6);
            });


            //#region Google Map
            var EventLocation = new google.maps.LatLng(parseFloat($("#GoogleMap").attr("data-latitude")), parseFloat($("#GoogleMap").attr("data-longitude")));
            var mapOptions = {
                zoom: parseInt($("#GoogleMap").attr("data-zoom")),
                center: EventLocation,
                disableDefaultUI: true
            };
            map = new google.maps.Map(document.getElementById("GoogleMap"), mapOptions);

            var marker = new google.maps.Marker({
                position: EventLocation,
                map: map,
                title: $("#GoogleMap").attr("data-title")
            });
            //#endregion

            //#region Boobking
            $(".MediaCalendarPop .BaseTemplate .mainContent .bookingdetalisRow").remove();
            $(".MediaCalendarPop .BaseTemplate .mainContent .woofoodetalisRow").remove();
            if (ItemDetails.WoofooCode != "") {
                if (ItemDetails.TotalTickets - ItemDetails.TicketsReserved > 0) {
                    $("<div class='EventDetailRow bookingdetalisRow'>" +
                                    "<h2>" +
                                      "<span class='DarkenTicket'>" + (ItemDetails.TotalTickets - ItemDetails.TicketsReserved) + " Tickets left |</span>Book Tickets Now" +
                                    "</h2>" +
                      "</div>").insertBefore(".MediaCalendarPop .BaseTemplate .mainContent .EventDetailRow");


                    $("<div class='pad clearfix woofoodetalisRow'>" +
                        "<div class='WooFooContainer'>" +
                            "<div id='wufoo-" + ItemDetails.WoofooCode + "'></div>" +
                            "</div>" +
                        "</div>").insertAfter(".MediaCalendarPop .BaseTemplate .mainContent .EventDetailRow.bookingdetalisRow");

                    var BookingForm = new WufooForm();
                    BookingForm.initialize({ 'userName': 'tiarc', 'formHash': ItemDetails.WoofooCode, 'autoResize': true, 'async': true, 'header': 'show', 'ssl': true });
                    BookingForm.display();
                }
                else {
                    $("<div class='SoldOut bookingdetalisRow'><h2>All sold out</h2></div>" +
                      "</div>").insertBefore(".MediaCalendarPop .BaseTemplate .mainContent .EventDetailRow");
                }
            }
            //#endregion

            setTimeout(function () {
                $.MediaServiceHelper.Settings["EventsAfterCallback"](EventId, FeedId, Animation)
            }, EventsTimeout - (Date.now() - FirstTime));

        });
    }
    $.MediaServiceHelper.SetSoundCloud = function (SoundObject, SoundId, FeedId, SoundItemType) {
        if (SoundItemType == "SoundCloudTrack")
            SoundObject.attr("src", SoundCloudTrackTemplate.replace("{TrackId}", SoundId));
        if (SoundItemType == "SoundCloudPlaylist")
            SoundObject.attr("src", SoundCloudPlaylistTemplate.replace("{PlayListId}", SoundId));
    }
    //#endregion

}(jQuery));

var EvJsonFiltered;
var CategoryDictionaryJson;;
function isIE() {
    if (window.navigator.userAgent.indexOf('MSIE') !== -1 || window.navigator.appVersion.indexOf('Trident/') > 0) {
        return true;
    }
    return false;
}

if (!isIE()) {
    $('html').addClass('no-IE');
} else {
    $('html').addClass('IE');
}

$(document).ready(function () {
    footerPosition();

    $(".date-range [data-sprite]").on("click", function (event) {
        $(this).prev().trigger("click");
        event.stopPropagation();
    })

    //$.post("/secure", {
    //    Command: "IsUserLoggedIn"
    //}, function (rsp) {
    //    $(".TiarcLogin").attr("data-authentficated", rsp);
    //    $(".TiarcLogin").html(rsp == "yes" ? "Logout" : "Login");

    //    if (rsp == "yes") {
    //        $.post("/secure", {
    //            Command: "IsUserInDeafaultGroup"
    //        }, function (rsp) {
    //            if (rsp == "yes") {
    //                $(".TiarcLoginBack").remove();
    //                $(".TiarcLoginSecure").show();
    //            }
    //            else {
    //                $(".TiarcLoginBack").show();
    //                $(".TiarcLoginSecure").remove();
    //            }
    //        });
    //    }
    //    else {
    //        $(".TiarcLoginSecure").remove();
    //        $(".TiarcLoginBack").remove();
    //    }
    //});



    if ($(".TiarcLogin").length) {
        $(".TiarcLogin").on("click", function () {
            if ($(this).attr("data-authentficated") == "yes") {
                $.post("/secure", {
                    Command: "Logout"
                }, function (rsp) {
                    if (rsp == "ok") {
                        setCookie(".ASPXAUTH", "", -1);
                        window.location = "/";
                    }
                });
            }
            else {
                window.location = "/secure";
            }
        });
    }

    if ($(".TiarcLoginBack").length) {
        $(".TiarcLoginBack").on("click", function () {
            $.post("/secure", {
                Command: "Back"
            }, function (rsp) {
                if (rsp == "ok") {
                    window.location = "/";
                }
            });
        });
    }
    if ($(".TiarcLoginSecure").length) {
        $(".TiarcLoginSecure").on("click", function () {
            $.post("/secure", {
                Command: "Secure"
            }, function (rsp) {
                window.location = rsp;
            });
        });
    }
});

function footerPosition() {
    if ($('.inner_footer').length == 0)
        return false;

    if (ScrollBarExists())
        $('.inner_footer').removeClass("footerFixed");
    else
        $('.inner_footer').addClass("footerFixed");
}

function getDocHeight() {
    var D = document;
    return Math.max(
        D.body.scrollHeight, D.documentElement.scrollHeight,
        D.body.offsetHeight, D.documentElement.offsetHeight,
        D.body.clientHeight, D.documentElement.clientHeight
    );
}

function getDocWidth() {
    var D = document;
    return Math.max(
        D.body.scrollWidth, D.documentElement.scrollWidth,
        D.body.offsetWidth, D.documentElement.offsetWidth,
        D.body.clientWidth, D.documentElement.clientWidth
    );
}


function getWindowWidth() { return window.innerWidth ? window.innerWidth : $(window).width(); }

function getWindowHeight() { return window.innerHeight ? window.innerHeight : $(window).height(); }

var isMobile = {
    Android: function () { return navigator.userAgent.match(/Android/i); },
    BlackBerry: function () { return navigator.userAgent.match(/BlackBerry/i); },
    iOS: function () { return navigator.userAgent.match(/iPhone|iPad|iPod/i); },
    Opera: function () { return navigator.userAgent.match(/Opera Mini/i); },
    Windows: function () { return navigator.userAgent.match(/IEMobile/i); },
    any: function () { return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows()); }
};

function get_browser() {
    var N = navigator.appName, ua = navigator.userAgent, tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
    return M[0];
}

function get_browser_version() {
    var N = navigator.appName, ua = navigator.userAgent, tem;
    var M = ua.match(/(opera|chrome|safari|firefox|msie)\/?\s*(\.?\d+(\.\d+)*)/i);
    if (M && (tem = ua.match(/version\/([\.\d]+)/i)) != null) M[2] = tem[1];
    M = M ? [M[1], M[2]] : [N, navigator.appVersion, '-?'];
    return M[1];
}

function IsIEBrowser(versionOfIE) { if (getInternetExplorerVersion() <= versionOfIE && versionOfIE != -1) return true; else return false; }

function getInternetExplorerVersion() {
    var rv = -1;
    if (navigator.appName == 'Microsoft Internet Explorer') {
        var ua = navigator.userAgent;
        var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
        if (re.exec(ua) != null)
            rv = parseFloat(RegExp.$1);
    }
    return rv;
}

function ScrollBarExists() {
    if (IsIEBrowser(8)) {
        if ($(document).height() > $(window).height() + 10) { return true; }
        if ($(document).width() > $(window).width()) { return false; }

        return false;
    }

    if ($(document).height() > $(window).height()) { return true; }
    if ($(document).width() > $(window).width()) { return false; }

    return false;
}

function FitImage(ImageToFit) {
    var TheRatio = 0;
    var CurentStyle = "";

    try {
        ImageToFit.obj.style.position = "absolute";
        if ($(ImageToFit.obj).parent().innerHeight() / ImageToFit.height > $(ImageToFit.obj).parent().innerWidth() / ImageToFit.width) {
            TheRatio = $(ImageToFit.obj).parent().innerHeight() / ImageToFit.height;
            ImageToFit.obj.style.left = (-1 * Math.abs(($(ImageToFit.obj).parent().innerWidth() - (TheRatio * ImageToFit.width)) / 2)) + "px";
            ImageToFit.obj.style.top = "0px";
        }
        else {
            TheRatio = $(ImageToFit.obj).parent().innerWidth() / ImageToFit.width;
            ImageToFit.obj.style.top = (-1 * Math.abs(($(ImageToFit.obj).parent().innerHeight() - (TheRatio * ImageToFit.height)) / 2)) + "px";
            ImageToFit.obj.style.left = "0px";
        }
        var NewW = (TheRatio * ImageToFit.width) + "px";
        var NewH = (TheRatio * ImageToFit.height) + "px";

        ImageToFit.obj.style.width = NewW;
        ImageToFit.obj.style.height = NewH;
    }
    catch (err) { }
}

function StretchImg(obj, width, height) {
    this.obj = obj;
    this.width = width;
    this.height = height;
}

function ApplyIEClassesForIE11() {
    var IEversion = getInternetExplorerVersion();
    switch (IEversion) {
        case 7:
            if ($("html").hasClass("lt-ie8") == false) $("html").addClass("lt-ie8");
            if ($("html").hasClass("lt-ie9") == false) $("html").addClass("lt-ie9");
            if ($("html").hasClass("lt-ie10") == false) $("html").addClass("lt-ie10");
            if ($("html").hasClass("lt-ie11") == false) $("html").addClass("lt-ie11");
            if ($("html").hasClass("IE") == false) $("html").addClass("IE");
            break;
        case 8:
            if ($("html").hasClass("lt-ie9") == false) $("html").addClass("lt-ie9");
            if ($("html").hasClass("lt-ie10") == false) $("html").addClass("lt-ie10");
            if ($("html").hasClass("lt-ie11") == false) $("html").addClass("lt-ie11");
            if ($("html").hasClass("IE") == false) $("html").addClass("IE");
            break;
        case 9:
            if ($("html").hasClass("lt-ie10") == false) $("html").addClass("lt-ie10");
            if ($("html").hasClass("lt-ie11") == false) $("html").addClass("lt-ie11");
            if ($("html").hasClass("IE") == false) $("html").addClass("IE");
            break;
        case 10:
            if ($("html").hasClass("lt-ie11") == false) $("html").addClass("lt-ie11");
            if ($("html").hasClass("IE") == false) $("html").addClass("IE");
            break;
        case 11:
            if ($("html").hasClass("IE") == false) $("html").addClass("IE");

    }
}

function setCookie(c_name, value, exdays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + exdays);
    var c_value = escape(value) + ((exdays == null) ? "" : "; expires=" + exdate.toUTCString());
    document.cookie = c_name + "=" + c_value + "; path=/";
}
function setTempCookie(c_name, value) {
    var c_value = escape(value);
    document.cookie = c_name + "=" + c_value + "; path=/";
}

function getCookie(c_name) {
    var i, x, y, ARRcookies = document.cookie.split(";");
    for (i = 0; i < ARRcookies.length; i++) {
        x = ARRcookies[i].substr(0, ARRcookies[i].indexOf("="));
        y = ARRcookies[i].substr(ARRcookies[i].indexOf("=") + 1);
        x = x.replace(/^\s+|\s+$/g, "");
        if (x == c_name) {
            return unescape(y);
        }
    }
}

function GetBaseUrl(url) {
    var pathArray = url.split('/');
    url = pathArray[0] + '//' + pathArray[2];
    return url;
}


function deleteCookie(name) {
    setCookie(name, "", -1);
}

(function ($) {
    function getNthIndex(cur, dir) {
        var t = cur, idx = 0;
        while (cur = cur[dir]) {
            if (t.tagName == cur.tagName) {
                idx++;
            }
        }
        return idx;
    }

    function isNthOf(elm, pattern, dir) {
        var position = getNthIndex(elm, dir), loop;
        if (pattern == "odd" || pattern == "even") {
            loop = 2;
            position -= !(pattern == "odd");
        } else {
            var nth = pattern.indexOf("n");
            if (nth > -1) {
                loop = parseInt(pattern, 10) || parseInt(pattern.substring(0, nth) + "1", 10);
                position -= (parseInt(pattern.substring(nth + 1), 10) || 0) - 1;
            } else {
                loop = position + 1;
                position -= parseInt(pattern, 10) - 1;
            }
        }
        return (loop < 0 ? position <= 0 : position >= 0) && position % loop == 0
    }

    var pseudos = {
        "first-of-type": function (elm) {
            return getNthIndex(elm, "previousSibling") == 0;
        },
        "last-of-type": function (elm) {
            return getNthIndex(elm, "nextSibling") == 0;
        },
        "only-of-type": function (elm) {
            return pseudos["first-of-type"](elm) && pseudos["last-of-type"](elm);
        },
        "nth-of-type": function (elm, i, match) {
            return isNthOf(elm, match[3], "previousSibling");
        },
        "nth-last-of-type": function (elm, i, match) {
            return isNthOf(elm, match[3], "nextSibling");
        }
    }
    $.extend($.expr[':'], pseudos);
}(jQuery));

(function () {

    function getTreshold(size) {
        var threshold = [240, 320, 480, 600, 720, 768, 800, 854, 960, 1024, 1280, 1136, 1366, 1440, 1600, 2000, 2048, 2160, 2560, 3840, 4096];
        var PixelRatio = 1;
        if (typeof window.devicePixelRatio != 'undefined')
            PixelRatio = window.devicePixelRatio;

        var RealSize = size * PixelRatio;
        var ThresholdWidth = 0;

        for (var i = 0; i < threshold.length; i++) {
            if (RealSize <= threshold[i]) {
                ThresholdWidth = threshold[i]
                break;
            }
        }
        return ThresholdWidth;
    }
    function GetSizedImageUrl(url) {
        return url.replace("{width}", getTreshold($("body > #BackgroundImageContainer").width())).replace("{height}", getTreshold($("body > #BackgroundImageContainer").height()));
    }

    var OriginalWidth1 = 0;
    var OriginalWidth2 = 0;
    var OriginalHeight1 = 0;
    var OriginalHeight2 = 0;

    function FitBgImage() {
        var NewBg = GetSizedImageUrl(backgroundImage);
        var primaryImage = "";
        var notprimaryImage = "";
        $("body > #BackgroundImageContainer > img").each(function () {
            if ($(this).attr("data-primary") == "true")
                primaryImage = $(this).attr("id");
            else
                notprimaryImage = $(this).attr("id");
        });

        if ($("body > #BackgroundImageContainer > #" + primaryImage).attr("src") == NewBg) {
            if (primaryImage == "BackgroundImage1") {
                $("body > #BackgroundImageContainer > #BackgroundImage1").removeAttr("style")
                FitImage(new StretchImg(document.getElementById("BackgroundImage1"), OriginalWidth1, OriginalHeight1));
            }
            if (primaryImage == "BackgroundImage2") {
                $("body > #BackgroundImageContainer > #BackgroundImage2").removeAttr("style")
                FitImage(new StretchImg(document.getElementById("BackgroundImage2"), OriginalWidth2, OriginalHeight2));
            }
        }
        else {
            if ($("body > #BackgroundImageContainer > #" + notprimaryImage).attr("src") == NewBg) {
                $("body > #BackgroundImageContainer > #" + notprimaryImage).attr("data-primary", "true");
                $("body > #BackgroundImageContainer > #" + notprimaryImage).removeAttr("style").css({ "visibility": "visible" });
                $("body > #BackgroundImageContainer > #" + primaryImage).attr("data-primary", "false");
                $("body > #BackgroundImageContainer > #" + primaryImage).css({ "visibility": "hidden" });
                if (primaryImage == "BackgroundImage2") {
                    $("body > #BackgroundImageContainer > #BackgroundImage1").removeAttr("style")
                    FitImage(new StretchImg(document.getElementById("BackgroundImage1"), OriginalWidth1, OriginalHeight1));
                }
                if (primaryImage == "BackgroundImage1") {
                    $("body > #BackgroundImageContainer > #BackgroundImage2").removeAttr("style")
                    FitImage(new StretchImg(document.getElementById("BackgroundImage2"), OriginalWidth2, OriginalHeight2));
                }
            }
            else {
                $("body > #BackgroundImageContainer > #" + notprimaryImage).removeAttr("style").css({ "visibility": "hidden" });
                $("body > #BackgroundImageContainer > #" + notprimaryImage).attr("src", NewBg);
            }
        }
    }

    if (typeof backgroundImage != 'undefined') {
        $(document).ready(function () {
            backgroundImage += "?command_1=resize&width_1={width}&height_1={height}";
            $("body").append("<div id='BackgroundImageContainer'><img style='visibility: hidden;' data-primary='false'  id='BackgroundImage1' src='" + GetSizedImageUrl(backgroundImage) + "'> <img id='BackgroundImage2'  data-primary='true' src='data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7'><div/><div/>");
            $("body > #BackgroundImageContainer > img").css({ "position": "absolute", "top": "0", "left": "0" });
            document.getElementById("BackgroundImage1").onload = function () {
                $("body > #BackgroundImageContainer > #BackgroundImage1").attr("data-primary", "true");
                $("body > #BackgroundImageContainer > #BackgroundImage1").removeAttr("style").css({ "visibility": "visible" });
                OriginalWidth1 = this.width;
                OriginalHeight1 = this.height;
                $("body > #BackgroundImageContainer > #BackgroundImage2").attr("data-primary", "false");
                $("body > #BackgroundImageContainer > #BackgroundImage2").css({ "visibility": "hidden" });
                FitImage(new StretchImg(this, this.width, this.height));
            };
            document.getElementById("BackgroundImage2").onload = function () {
                $("body > #BackgroundImageContainer > #BackgroundImage2").attr("data-primary", "true");
                $("body > #BackgroundImageContainer > #BackgroundImage2").removeAttr("style").css({ "visibility": "visible" });
                OriginalWidth2 = this.width;
                OriginalHeight2 = this.height;
                $("body > #BackgroundImageContainer > #BackgroundImage1").attr("data-primary", "false");
                $("body > #BackgroundImageContainer > #BackgroundImage1").css({ "visibility": "hidden" });
                FitImage(new StretchImg(this, this.width, this.height));
            };
            $("body > #BackgroundImageContainer").css({
                "width": "100%",
                "height": "100%",
                "position": "fixed",
                "top": "0",
                "left": "0",
                "z-index": "-99999",
                "overflow": "hidden"
            });
            if (isMobile.iOS()) {
                $("body > #BackgroundImageContainer").css({ "height": "-webkit-calc(100% + 110px)" });
            }
            FitBgImage();
            //CMSEditableImage

            /*if ($(".CMSEditableImage").length == 1) {
                if (parent != window) {
                    $(".CMSEditableImage").wrap("<div class='cmsEditImagewrap'></div>");
                    $(".cmsEditImagewrap").css({ "position": "relative" });
                    $(".CMSEditableImage").css({ "border": "4px dashed #00abee" });
                    $(".CMSEditableImage").before("<div class='cmseditimgebtn' data-sprite='CmsEdit'></div>");
                    $(".cmseditimgebtn").css({ "position": "absolute", "bottom": "0", "left": "0" });
                    $(".cmseditimgebtn").on("click", function () {
                        parent.postMessage('image^' + $(".CMSEditableImage").attr("src") + '^' + CMSAdminUrl, CMSAdminUrl);
                    });
                }
            }*/

            //CMSEditableImage
        });
        $(window).resize(function () {
            if (!isMobile.iOS()) {
                FitBgImage();
                footerPosition();
            }
        });

        $(window).on("orientationchange", function (event) {
            if (isMobile.iOS()) {
                FitBgImage();
                footerPosition();
            }
        });
    }
})();
function getqueryStringParameterByName(name) {
    name = name.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
    var regex = new RegExp("[\\?&]" + name + "=([^&#]*)"),
        results = regex.exec(location.search);
    return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
}

function changeURL(path) {
    if ($("html").hasClass("history")) {
        History.pushState(path, document.title, path + location.search);
    }
}

function changeTag(selector, tagname) {
    var old_elm = selector;
    var original_elements = old_elm.get();
    for (var i = 0; i < original_elements.length; i += 1) {
        var original_element = original_elements[i];
        var new_elm = $(document.createElement(tagname));
        new_elm.html($(original_element).html());
        var original_attributes = original_element.attributes;
        var attributes = new Object();
        for (var j = 0; j < original_attributes.length; j += 1) {
            var attribute = original_attributes[j];
            var name = attribute.nodeName;
            var value = attribute.value;
            attributes[name] = value;
        }
        new_elm.attr(attributes);
        $(original_element).replaceWith(new_elm);
    }
}

function checkAlert(selector) {
    if ($(selector).length > 0) {
        if ($("#alertExpiryDateUTC").val().length > 0) {
            var expiryDate = moment.utc($("#alertExpiryDateUTC").val()).toDate();
            var currentDate = new Date();

            if (moment(currentDate).isBefore(moment(expiryDate))) {
                $(selector).css({ "display": "block" });
            }
        } else {
            $(selector).css({ "display": "block" });
        }
    }
}


//#region Base64EncodeDecode
var base64 = {
    StringMaker: function () { },
    keyStr: "",
    init: function () {
        var ua = navigator.userAgent.toLowerCase();
        if (ua.indexOf(" chrome/") >= 0 || ua.indexOf(" firefox/") >= 0 || ua.indexOf(' gecko/') >= 0) {
            StringMaker = function () {
                this.str = "";
                this.length = 0;
                this.append = function (s) {
                    this.str += s;
                    this.length += s.length;
                }
                this.prepend = function (s) {
                    this.str = s + this.str;
                    this.length += s.length;
                }
                this.toString = function () {
                    return this.str;
                }
            }
        } else {
            StringMaker = function () {
                this.parts = [];
                this.length = 0;
                this.append = function (s) {
                    this.parts.push(s);
                    this.length += s.length;
                }
                this.prepend = function (s) {
                    this.parts.unshift(s);
                    this.length += s.length;
                }
                this.toString = function () {
                    return this.parts.join('');
                }
            }
        }
        keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=";
    },
    encode: function (input) {
        var output = new StringMaker();
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        while (i < input.length) {
            chr1 = input.charCodeAt(i++);
            chr2 = input.charCodeAt(i++);
            chr3 = input.charCodeAt(i++);

            enc1 = chr1 >> 2;
            enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
            enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
            enc4 = chr3 & 63;

            if (isNaN(chr2)) {
                enc3 = enc4 = 64;
            } else if (isNaN(chr3)) {
                enc4 = 64;
            }

            output.append(keyStr.charAt(enc1) + keyStr.charAt(enc2) + keyStr.charAt(enc3) + keyStr.charAt(enc4));
        }

        return output.toString();
    },
    decode: function (input) {
        var output = new StringMaker();
        var chr1, chr2, chr3;
        var enc1, enc2, enc3, enc4;
        var i = 0;

        // remove all characters that are not A-Z, a-z, 0-9, +, /, or =
        input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");

        while (i < input.length) {
            enc1 = keyStr.indexOf(input.charAt(i++));
            enc2 = keyStr.indexOf(input.charAt(i++));
            enc3 = keyStr.indexOf(input.charAt(i++));
            enc4 = keyStr.indexOf(input.charAt(i++));

            chr1 = (enc1 << 2) | (enc2 >> 4);
            chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
            chr3 = ((enc3 & 3) << 6) | enc4;

            output.append(String.fromCharCode(chr1));

            if (enc3 != 64) {
                output.append(String.fromCharCode(chr2));
            }
            if (enc4 != 64) {
                output.append(String.fromCharCode(chr3));
            }
        }

        return output.toString();
    }

}
base64.init();
//#endregion

String.prototype.ClearQuotes = function () {
    return this.replace(/["]/g, "&quot;").replace(/[']/g, "&apos;");
}

String.prototype.clearQuestionMarks = function () {
    return this.replace(/[\\?]{2,}/g, "");
}

//#region CMS Block
if (window.addEventListener != undefined) {
    window.addEventListener('message', function (event) {

        var cmssiteurl = base64.decode(CMSWebsiteURL.replace(/plus/g, "+").replace(/slash/g, "/").replace(/equal/g, "="));
        cmssiteurl = (cmssiteurl.indexOf('?') != -1) ? cmssiteurl.substr(0, cmssiteurl.indexOf('?')) : cmssiteurl;
        var eventOrigin = event.origin;
        eventOrigin = (eventOrigin.indexOf('?') != -1) ? eventOrigin.substr(0, eventOrigin.indexOf('?')) : eventOrigin;

        if (eventOrigin === cmssiteurl) {
            eventData = $.parseJSON(event.data);
            switch (eventData.type) {
                case "page":
                    if (eventData.IsEditable) {
                        //temporary disabled 
                        try {
                            InitContentEdit();
                        } catch (e) { }
                    }
                    break;
            }
        }
    }, false);
}


function getQueryVariable(variable) {
    var query = window.location.search.substring(1);
    var vars = query.split("&");
    for (var i = 0; i < vars.length; i++) {
        var pair = vars[i].split("=");
        if (pair[0] == variable) { return pair[1]; }
    } return "";
};

function sendMessageToCMS(message) {
    try {
        if (parent !== window) {
            parent.postMessage(message, CMSAdminUrl);
        }
    } catch (e) { }
}

$(document).ready(function () {
    if (getQueryVariable('guid') != "") {
        setTempCookie("editcode", getQueryVariable('guid'));
    } try {
        if (parent !== window) {
            parent.postMessage(CMSPostMsg, CMSAdminUrl);
        }
    } catch (e) { }
});

function ordinal_suffix_of(i) {
    var j = i % 10,
        k = i % 100;
    if (j == 1 && k != 11) {
        return i + "st";
    }
    if (j == 2 && k != 12) {
        return i + "nd";
    }
    if (j == 3 && k != 13) {
        return i + "rd";
    }
    return i + "th";
}

function getGetOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
    v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function copyToClipboard(text) {
    if (window.clipboardData && window.clipboardData.setData) {
        // IE specific code path to prevent textarea being shown while dialog is visible.
        return clipboardData.setData("Text", text);

    } else if (document.queryCommandSupported && document.queryCommandSupported("copy")) {
        var textarea = document.createElement("textarea");
        textarea.textContent = text;
        textarea.style.position = "fixed";  // Prevent scrolling to bottom of page in MS Edge.
        document.body.appendChild(textarea);
        textarea.select();
        try {
            return document.execCommand("copy");  // Security exception may be thrown by some browsers.
        } catch (ex) {
            console.warn("Copy to clipboard failed.", ex);
            return false;
        } finally {
            document.body.removeChild(textarea);
        }
    }
}

function isiOS() {
    return /(iPad|iPhone|iPod|iPad Simulator|iPhone Simulator|iPod Simulator)/g.test(navigator.userAgent);
}

function isAndroid() {
    return navigator.userAgent.toLowerCase().indexOf("android") > -1;
}
//#endregion ;
(function () {

    var ShareTwitterURL;
    var ShareFacebookURL;
    var ShareEmailURL;

    var ShareURL = "";
    var ShareTitle = "";
    var ShareJsonClone;
    var emailSubject = "";
    var emailBody = "";

    $TiarcShare = function () {

    };
    $TiarcShare.OpenTwitterURL = function () {
        ShareJsonClone = jQuery.extend({}, ShareJson);
        for (var prop in ShareJsonClone) {
            ShareJsonClone[prop] = ReplaceShareUrl(ShareJsonClone[prop]);
        }
        ShareTwitterURL = "https://twitter.com/intent/tweet?&text=" + ShareJsonClone.TweetText + "&url=" + ShareJsonClone.TweetURL + (ShareJsonClone.TweetVia != "" ? "&via=" + ShareJsonClone.TweetVia : "");
        ga('send', 'event', 'ShareIcons', 'Click', 'Twitter');
        window.open(ShareTwitterURL, "twitter-share-dialog", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + NewWindowWidth + ", height=" + NewWindowHeight + ", top=" + (Math.floor((getWindowHeight() - NewWindowHeight) / 2)) + ", left=" + (Math.floor((getWindowWidth() - NewWindowWidth) / 2)));
        $TiarcShare.CloseShare();
        return false;
    };
    $TiarcShare.OpenFacebookURL = function () {
        ShareJsonClone = jQuery.extend({}, ShareJson);
        for (var prop in ShareJsonClone) {
            ShareJsonClone[prop] = ReplaceShareUrl(ShareJsonClone[prop]);
        }
        ShareFacebookURL = "https://www.facebook.com/sharer/sharer.php?u=" + ShareJsonClone.FacebookURL;
        ga('send', 'event', 'ShareIcons', 'Click', 'Facebook');
        window.open(ShareFacebookURL, "facebook-share-dialog", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + NewWindowWidth + ", height=" + NewWindowHeight + ", top=" + (Math.floor((getWindowHeight() - NewWindowHeight) / 2)) + ", left=" + (Math.floor((getWindowWidth() - NewWindowWidth) / 2)));
        $TiarcShare.CloseShare();
        return false;
    };

    $TiarcShare.OpenMessengerURL = function () {
        var appId = "564725426944905";
        var ShareMessengerURL = ('ontouchstart' in window || 'onmsgesturechange' in window ? "fb-messenger://share?" : "https://www.facebook.com/dialog/send?display=popup&") + "link=" + encodeURIComponent(window.location.href) + "&app_id=" + appId + ('ontouchstart' in window || 'onmsgesturechange' in window ? "" : "&redirect_uri=" + encodeURIComponent(window.location.href));
        ga('send', 'event', 'ShareIcons', 'Click', 'FacebookMessenger');
        if ('ontouchstart' in window || 'onmsgesturechange' in window)
            window.location = ShareMessengerURL;
        else
            window.open(ShareMessengerURL, "facebook-messenger-share-dialog", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + NewWindowWidth + ", height=" + NewWindowHeight + ", top=" + (Math.floor((getWindowHeight() - NewWindowHeight) / 2)) + ", left=" + (Math.floor((getWindowWidth() - NewWindowWidth) / 2)));
        $TiarcShare.CloseShare();
        return false;
    };
    $TiarcShare.OpenInstagramURL = function () {
        //not in use
        return false;
    };

    $TiarcShare.OpenPinterestURL = function () {
        var SharePinterestURL = "http://pinterest.com/pin/create/button/?url=" + encodeURIComponent(window.location.href) + "&description=" + encodeURIComponent($("h1").html()) + ($('meta[property="og:image"]').length == 1 ? "&media=" + encodeURIComponent($('meta[property="og:image"]').attr('content')) : window.location.origin + "/bookmark-icon.jpg")
        ga('send', 'event', 'ShareIcons', 'Click', 'Pinterest');
        window.open(SharePinterestURL, "pinterest-share-dialog", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + NewWindowWidth + ", height=" + NewWindowHeight + ", top=" + (Math.floor((getWindowHeight() - NewWindowHeight) / 2)) + ", left=" + (Math.floor((getWindowWidth() - NewWindowWidth) / 2)));
        $TiarcShare.CloseShare();
        return false;
    };

    $TiarcShare.OpenLinkedInURL = function () {
        var ShareLinkedInURL = "https://www.linkedin.com/cws/share?url=" + encodeURIComponent(window.location.href);
        ga('send', 'event', 'ShareIcons', 'Click', 'LinkedIn');
        window.open(ShareLinkedInURL, "linkedin-share-dialog", "toolbar=no, location=no, directories=no, status=no, menubar=no, scrollbars=no, resizable=no, copyhistory=no, width=" + NewWindowWidth + ", height=" + NewWindowHeight + ", top=" + (Math.floor((getWindowHeight() - NewWindowHeight) / 2)) + ", left=" + (Math.floor((getWindowWidth() - NewWindowWidth) / 2)));
        $TiarcShare.CloseShare();
        return false;
    };


    $TiarcShare.CopyUrl = function () {
        var currentFocus = document.activeElement;
        $(".TiarcShareWidget > .TiarcSharehiddenCopyTextWrapper > .TiarcSharehiddenCopyText").val(ShareURL).focus()[0].setSelectionRange(0, ShareURL.length);
        try {
            document.execCommand("copy");
            if (currentFocus && typeof currentFocus.focus === "function") {
                currentFocus.focus();
            }
        }
        catch (e) { }
        $(".TiarcShareWidget .ShareItem.copyurl").addClass("green");
        setTimeout(function () {
            $(".TiarcShareWidget .ShareItem.copyurl").html("Copied");
        }, 500);

        setTimeout(function () {
            $TiarcShare.CloseShare();
        }, 1500);
        setTimeout(function () {
            $(".TiarcShareWidget .ShareItem.copyurl").html("Copy Link");
            $(".TiarcShareWidget .ShareItem.copyurl").removeClass("green");
        }, 2000);

        return false;
    };

    $TiarcShare.OpenEmailURL = function () {
        ShareJsonClone = jQuery.extend({}, ShareJson);
        for (var prop in ShareJsonClone) {
            ShareJsonClone[prop] = ReplaceShareUrl(ShareJsonClone[prop]);
        }
        if (emailSubject == '') {
            emailSubject = ShareJsonClone.EmailSubject;
        }

        if (emailBody == '') {
            emailBody = ShareJsonClone.EmailBody;
        }

        ShareEmailURL = "mailto:?subject=" + emailSubject + "&body=" + emailBody;
        ga('send', 'event', 'ShareIcons', 'Click', 'Email');

        if ($("html.touch").length) {
            window.location = ShareEmailURL;
        }
        else {
            window.open(ShareEmailURL);
        }

        $TiarcShare.CloseShare();
        return false;
    };

    $TiarcShare.CloseShare = function () {
        $("[data-share]").each(function () {
            if ($(this).hasClass("WidgetShown"))
                $(this).removeClass("WidgetShown");
        });

        $(".TiarcShareWidget").stop().transition({ scale: 0 }, 300, function () {
            $(this).hide();
        });

        return false;
    };

    var ShareJson = JSON.parse($("meta[name=shareOpts]").attr("content"));
    var ControllColor = "#8E8E8E";
    var TextColor = "#ffffff";
    var TwxtHoverColor = "#E6370A";
    var NewWindowHeight = 568;
    var NewWindowWidth = 568;
    if (getWindowWidth() < 568)
        NewWindowWidth = 320;

    var ShareHtml = "<div class=\"TiarcShareWidget\" >" +
                        "<div class = 'TiarcSharehiddenCopyTextWrapper'>" +
                            "<input type='text' class='TiarcSharehiddenCopyText' />" +
                        "</div>" +
                        "<div class=\"ShareArrow\"></div>" +
                        "<div class='ShareControlsContainer'>" +
                            "<a onclick=\"$TiarcShare.OpenTwitterURL();return false;\"   class=\"ShareItem tweet noSelect dsb-TP_GB dsb-TP_GB_interactive-share-twitter\">" +
                                "Twitter" +
                            "</a>" +
                             "<a onclick=\"$TiarcShare.OpenFacebookURL();return false;\" class='ShareItem facebook noSelect dsb-TP_GB dsb-TP_GB_interactive-share-facebook' >" +
                                "Facebook" +
                            "</a>" +

                            "<a onclick=\"$TiarcShare.OpenMessengerURL();return false;\" class='ShareItem fb-mes noSelect dsb-TP_GB dsb-TP_GB_interactive-share-fb-mes'  target='_blank'>" +
                                "Messenger" +
                            "</a>" +

                            //"<a onclick=\"$TiarcShare.OpenInstagramURL();return false;\" class='ShareItem instagram noSelect dsb-TP_GB dsb-TP_GB_interactive-share-instagram'  target='_blank'>" +
                            //    "Instagram" +
                            //"</a>" +

                            "<a onclick=\"$TiarcShare.OpenPinterestURL();return false;\" class='ShareItem pinterest noSelect dsb-TP_GB dsb-TP_GB_interactive-share-pinterest'  target='_blank'>" +
                                "Pinterest" +
                            "</a>" +

                            "<a onclick=\"$TiarcShare.OpenLinkedInURL();return false;\" class='ShareItem linkedin noSelect dsb-TP_GB dsb-TP_GB_interactive-share-linkedin'  target='_blank'>" +
                                "Linked In" +
                            "</a>" +

                            "<a onclick=\"$TiarcShare.OpenEmailURL();return false;\" class='ShareItem email noSelect dsb-TP_GB dsb-TP_GB_interactive-share-email'  target='_blank'>" +
                                "Email Link" +
                            "</a>" +

                            "<a onclick=\"$TiarcShare.CopyUrl();return false;\" class='ShareItem copyurl noSelect dsb-TP_GB dsb-TP_GB_interactive-share-copyurl'  target='_blank'>" +
                                "Copy Link" +
                            "</a>" +

                            "<a class='closeShare noSelect dsb-TP_GB dsb-TP_GB_share-close' onclick=\"$TiarcShare.CloseShare()\";return false;\">" +
                            "</a>" +
                        "</div>" +
                    "</div>";

    var ShareStyle = "<style>" +

                        "body > .TiarcShareWidget {" +
                            "width: 134px;" +
                            "background: #ffffff;" +
                            "box-shadow: 0 5px 30px 10px rgba(0,0,0,0.25);" +
                            "padding: 8px 20px;" +
                            "position: absolute;" +
                            "z-index: 99999999;" +
							"box-sizing: content-box !important;" +
                            "display: none;" +
                        "}" +

                        "body > .TiarcShareWidget > .TiarcSharehiddenCopyTextWrapper {" +
                            "position: absolute;" +
                            "z-index: -99999;" +
                            "top: 0;" +
                            "left: 0;" +
                            "overflow: hidden;" +
                            "opacity: 0;" +
                        "}" +

                        "body > .TiarcShareWidget > .TiarcSharehiddenCopyTextWrapper > .TiarcSharehiddenCopyText {" +
                            "position: relative;" +
                            "top: 0;" +
                            "left: -200px;" +
                            "width: 100px;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareArrow {" +
                            "width: 30px;" +
                            "height: 30px;" +
                            "background: #fff;" +
                            "position: absolute;" +
                            "transform: rotate(45deg);" +
                        "}" +


                        "body > .TiarcShareWidget .ShareControlsContainer {" +
                            "width: 100%;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem {" +
                            "display: block;" +
                            "position: relative;" +
                            "line-height: 30px;" +
                            "font-size: 16px;" +
                            "color: #181819;" +
                            "padding: 10px 0 10px 40px;" +
                            "border-top: 1px solid #f1f1f1;" +
                            "font-family: Arial;" +
                            "font-weight: bold;" +
                            "-moz-transition: all 0.2s ease-in; " +
                            "-webkit-transition: all 0.2s ease-in; " +
                            "-o-transition: all 0.2s ease-in; " +
                            "transition: all 0.2s ease-in; " +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem:first-child {" +
                            "border-top: none;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem:after {" +
                            "content: '';" +
                            "display: block;" +
                            "position: absolute;" +
                            "top: 10px;" +
                            "left: 0;" +
                            "width: 30px;" +
                            "height: 30px;" +
                            "border-radius: 50%;" +
                            "z-index: 1; " +
                            "-moz-transition: all 0.2s ease-in; " +
                            "-webkit-transition: all 0.2s ease-in; " +
                            "-o-transition: all 0.2s ease-in; " +
                            "transition: all 0.2s ease-in; " +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.tweet:after {" +
                            "background: #2caee4;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.tweet:hover {" +
                            "color: #2caee4;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.facebook:after {" +
                            "background: #395094;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.facebook:hover {" +
                            "color: #395094;" +
                        "}" +

                         "body > .TiarcShareWidget .ShareItem.fb-mes:after {" +
                            "background: #0084FF;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.fb-mes:hover {" +
                            "color: #0084FF;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.instagram:after {" +
                            "background: #c13584;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.instagram:hover {" +
                            "color: #c13584;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.pinterest:after {" +
                            "background: #cf1c20;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.pinterest:hover {" +
                            "color: #cf1c20;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.linkedin:after {" +
                            "background: #0077b5;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.linkedin:hover {" +
                            "color: #0077b5;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.email:after {" +
                            "background: #ababab;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.email:hover {" +
                            "color: #ababab;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.copyurl:after {" +
                            "background: #ababab;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.copyurl:hover {" +
                            "color: #ababab;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem:before {" +
                            "z-index: 2;" +
                            "position: absolute;" +
                            "top: 10px;" +
                            "left: 0;" +
                        "}" +


                        "body > .TiarcShareWidget .ShareItem:hover:after{" +
                            "width:40px;" +
                            "height:40px;" +
                            "top: 5px;" +
                            "left: -5px;" +
                        "}" +

                       "body > .TiarcShareWidget .closeShare {" +
                            "display: none;" +
                            "position: absolute;" +
                            "top: 0;" +
                            "right: 0;" +
                            "padding: 10px 7px 10px 13px;" +
                        "}" +

                        ".noSelect {" +
                            "-webkit-user-select: none;" +
                            "-moz-user-select: none;" +
                            "-ms-user-select: none;" +
                            "user-select: none;" +
                            "cursor: pointer;" +
                        "}" +

                        "body > .TiarcShareWidget .ShareItem.copyurl.green:after {background:#4BCA3A; animation:heartbeat 1.5s ease-in-out infinite both;}" +
                        "body > .TiarcShareWidget .ShareItem.copyurl.green{color:#4BCA3A;}" +
                        "@keyframes heartbeat { 0% { transform: scale( .75 ); } 20% { transform: scale( 1 ); } 40% { transform: scale( .75 ); } 60% { transform: scale( 1 ); } 80% { transform: scale( .75 ); } 100% { transform: scale( .75 ); } }" +
"</style>";

    $(document).ready(function () {
        BuildShare();
        $("[data-share]").on("click touchstart", function () {
            if ($(this).hasClass("WidgetShown")) {
                $.TiarcShare.HideShare(true);
            }
            else {
                var that = $(this);
                $.TiarcShare.HideShare(false, function () {
                    ShareURL = "";
                    ShareTitle = "";
                    if (typeof that.attr('data-share-url') !== typeof undefined)
                        ShareURL = that.attr('data-share-url');
                    else
                        ShareURL = window.location.href;
                    if (typeof that.attr('data-share-title') !== typeof undefined)
                        ShareTitle = that.attr('data-share-title');
                    if (typeof that.attr('data-share-email-subject') !== typeof undefined)
                        emailSubject = ReplaceShareUrl(that.attr('data-share-email-subject'));
                    if (typeof that.attr('data-share-email-body') !== typeof undefined)
                        emailBody = ReplaceShareUrl(that.attr('data-share-email-body'));
                    ShowShare(that);
                });
            }
            return false;
        });
    });
    $(window).scroll(function () {
        if ($(".WidgetShown[data-share]").length == 1)
            positionControll($(".WidgetShown[data-share]"));
    });
    $(window).resize(function () {
        $.TiarcShare.HideShare(false);
    });
    //#region HleperFunctions
    function positionControll(control) {
        var ControlHeight = $("body > .TiarcShareWidget").outerHeight();
        var ControllWidth = $("body > .TiarcShareWidget").outerWidth();

        var left = control.offset().left;
        var top = control.offset().top + control.height();

        var PositionTop = "bottom";
        var PositionLeft = "right";

        if (typeof control.attr('data-prefered-share-position') !== typeof undefined) {
            PositionTop = control.attr("data-prefered-share-position").split("-")[0];
            if (PositionTop == "top")
                top = top - ControlHeight - control.height();

            PositionLeft = control.attr("data-prefered-share-position").split("-")[1];
            if (PositionLeft == "left")
                left = left - ControllWidth + control.width();
        }


        if (PositionLeft == "right" && (left - $(window).scrollLeft() + ControllWidth > getWindowWidth())) {
            left = left - ControllWidth + control.width();
            PositionLeft = "left"
        }

        if (PositionTop == "bottom" && (Math.abs((top - ControlHeight - control.height()) - $(window).scrollTop()) - (navigator.userAgent.match(/iPad/i) != null ? 50 : 0) < (getWindowHeight() + (top - ControlHeight - control.height()) - $(window).scrollTop() - ControlHeight))) {
            top = top - ControlHeight - control.height();
            PositionTop = "top";
        }

        var Position = PositionTop + "-" + PositionLeft;
        switch (Position) {
            case "bottom-right":
                $(".TiarcShareWidget").css({ "top": (top + 21) + "px", "left": left + "px" });
                $(".TiarcShareWidget .ShareArrow").css({ "top": "-15px", "left": "15px" });
                break;
            case "bottom-left":
                $(".TiarcShareWidget").css({ "top": (top + 21) + "px", "left": left + "px" });
                $(".TiarcShareWidget .ShareArrow").css({ "top": "-15px", "left": (ControllWidth - (15 + 21 + 15)) + "px" });
                break;
            case "top-right":
                $(".TiarcShareWidget").css({ "top": (top - 21) + "px", "left": left + "px" });
                $(".TiarcShareWidget .ShareArrow").css({ "top": (ControlHeight - 15) + "px", "left": "15px" });
                break;
            case "top-left":
                $(".TiarcShareWidget").css({ "top": (top - 21) + "px", "left": left + "px" });
                $(".TiarcShareWidget .ShareArrow").css({ "top": (ControlHeight - 15) + "px", "left": (ControllWidth - (15 + 21 + 15)) + "px" });
                break;
        }
    }
    function ShowShare(control) {
        control.addClass("WidgetShown");
        positionControll(control);
        $(".TiarcShareWidget").css({ "-moz-transform": "scale(0)", "-ms-transform": "scale(0)", "-webkit-transform": "scale(0)", "transform": "scale(0)" });
        $(".TiarcShareWidget").show().stop().transition({ scale: 1 }, 300, function () { });
    }
    $.TiarcShare = function () {
    }
    $.TiarcShare.HideShare = function (animation, fnc) {
        $("[data-share]").each(function () {
            if ($(this).hasClass("WidgetShown"))
                $(this).removeClass("WidgetShown");
        });

        if (animation)
            $(".TiarcShareWidget").stop().transition({ scale: 0 }, 300, function () {
                $(this).hide();
            });
        else
            $(".TiarcShareWidget").hide().css({ "-moz-transform": "scale(0)", "-ms-transform": "scale(0)", "-webkit-transform": "scale(0)", "transform": "scale(0)" });
        if (typeof fnc != 'undefined')
            fnc();

    }

    function BuildShare() {
        $("body").append(ShareHtml);
        $("body").append(ShareStyle);
        $("html").on("click", function () {
            $.TiarcShare.HideShare(true);
        });
        $(".TiarcShareWidget").on("click", function (event) {
            event.stopPropagation();
        });
    }
    function ReplaceShareUrl(Prop) {
        var title = document.title.split("|")[0];
        var url = window.location.href;
        var baseUrl = window.location.origin;

        if (ShareTitle != "")
            title = ShareTitle;
        if (ShareURL != "") {
            url = ShareURL;
            baseUrl = GetBaseUrl(url);
        }

        Prop = Prop.replace("{WEBPAGE_TITLE}", title)
                   .replace("{WEBPAGE_ORIG_TITLE}", document.title.split("|")[0])
                   .replace("{WEBSITE_FULL_URL}", url)
                   .replace("{WEBSITE_URL}", baseUrl);
        return encodeURIComponent(Prop);
    }

    //#endregion
})();;
var admissionsFunctionality = {

    day:   '',
    month: '',
    year:  '',
    scrolled:0,
    allResults: $('#AdmissionsEntryPointsJson').length ? JSON.parse($('#AdmissionsEntryPointsJson').val()) : [],
    sendEmailInputDefaultValue: 'Enter your email',
    sendEmailInputErrorMsg: (getWindowWidth() >= 768) ? 'Please check your email' : 'Check email',
    sendEmailSuccessMsg: (getWindowWidth() >= 768) ? 'Success, your email has been sent' : 'Success!',

    init:function() {

        //xxx = JSON.parse($('#AdmissionsEntryPointsJson').val());
        var today = new Date();
        var currentYear = today.getFullYear();

        for(var i = 1; i <= 31; i++) {
            if(i < 10) {
                $('.adm-input.adm-input-days .input-options').append("<div class='adm-select' data-val ='"+i+"'>"+ "0" + i+"</div>");
            } else {
                $('.adm-input.adm-input-days .input-options').append("<div class='adm-select' data-val ='"+i+"'>"+i+"</div>");
            }
        }

        for(var i = 1; i <= 12; i++) {
            if(i < 10) {
                $('.adm-input.adm-input-months .input-options').append("<div class='adm-select' data-val ='"+i+"'>"+ "0" + i+"</div>");
            } else {
                $('.adm-input.adm-input-months .input-options').append("<div class='adm-select' data-val ='"+i+"'>"+i+"</div>");
            }
        }

        for (var i = currentYear; i >= (currentYear-17) ; i--) {
             $('.adm-input.adm-input-yy .input-options').append("<div class='adm-select' data-val ='"+i+"'>"+i+"</div>");
        }


        $('.mobile-select.select-days select').on('change', function() {
            admissionsFunctionality.day = this.value;
        });

        $('.mobile-select.select-months select').on('change', function() {
            admissionsFunctionality.month = this.value;
        });

        $('.mobile-select.select-year select').on('change', function() {
            admissionsFunctionality.year = this.value;
        });


        var numberToAddAsDayValue = '';
        var numberToAddAsMonthValue = '';
        var numberToAddAsYearValue = '';

        $('.admissions-functionality-wrapper .admissions-input-area .adm-input.adm-input-days').keypress(function(e) {
            var value = parseInt(e.key);
            var that = $(this);

            if(!isNaN(value)) {
                if(value >= 1 &&  value <= 9) {

                    numberToAddAsDayValue+= value;
                    admissionsFunctionality.day = parseInt(numberToAddAsDayValue);

                    if(admissionsFunctionality.validateDay().error) {
                        numberToAddAsDayValue = '';
                        admissionsFunctionality.day = '';
                    } else {
                        $('.adm-input.adm-input-days span').html(numberToAddAsDayValue);
                        that.removeClass('opened');
                        that.find('.input-options').slideUp('fast');
                    }

                }
            }
        });

        $('.admissions-functionality-wrapper .admissions-input-area .adm-input.adm-input-months').keypress(function(e) {
            var value = parseInt(e.key);
            var that = $(this);

            if(!isNaN(value)) {
                if(value >= 1 &&  value <= 12) {

                    numberToAddAsMonthValue+= value;
                    admissionsFunctionality.month = parseInt(numberToAddAsMonthValue);

                    if(admissionsFunctionality.validateMonth().error) {
                        numberToAddAsMonthValue = '';
                        admissionsFunctionality.month = '';
                    } else {
                        $('.adm-input.adm-input-months span').html(numberToAddAsMonthValue);
                        that.removeClass('opened');
                        that.find('.input-options').slideUp('fast');
                    }

                }
            }
        });

        $('.admissions-functionality-wrapper .admissions-input-area .adm-input.adm-input-yy').keypress(function(e) {

            var value = parseInt(e.key);
            var that = $(this);

            if(!isNaN(value)) {
                if(value >= 0 &&  value <= 9) {

                    numberToAddAsYearValue+= value;

                    if(numberToAddAsYearValue.length <= 4) {
                        $('.adm-input.adm-input-yy span').html(numberToAddAsYearValue);
                        that.removeClass('opened');
                        that.find('.input-options').slideUp('fast');

                    }
                    if(numberToAddAsYearValue.length === 4) {
                        admissionsFunctionality.year = parseInt(numberToAddAsYearValue);
                        if(admissionsFunctionality.validateYear().error) {
                            numberToAddAsYearValue = '';
                            admissionsFunctionality.year = '';
                        }
                    }

                }
            }
        });



        $('.admissions-functionality-wrapper .admissions-input-area .adm-input').keypress(function(e){
            if(e.keyCode === 13) {
                if($(this).hasClass('opened')) {
                    $(this).removeClass('opened');
                    $(this).find('.input-options').slideUp('fast');
                } else {
                    $(this).addClass('opened');
                    $(this).find('.input-options').slideDown('fast');
                }
            }
        });


        $('.admissions-functionality-wrapper .admissions-input-area .adm-input').on('click', function(e){
            if($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $(this).find('.input-options').slideUp('fast');
            } else {
                $(this).addClass('opened');
                $(this).find('.input-options').slideDown('fast');
            }
        });


        $('.admissions-functionality-wrapper .adm-input-days .adm-select').on('click', function(){
            admissionsFunctionality.day = $(this).attr('data-val');
            $('.adm-input.adm-input-days span').html($(this).html());
            admissionsFunctionality.validateDay();
        });
        $('.admissions-functionality-wrapper .adm-input-months .adm-select').on('click', function(){
            admissionsFunctionality.month = $(this).attr('data-val');
            $('.adm-input.adm-input-months span').html($(this).html());
            admissionsFunctionality.validateMonth();
        });
        $('.admissions-functionality-wrapper .adm-input-yy .adm-select').on('click', function(){
            admissionsFunctionality.year = $(this).attr('data-val');
            $('.adm-input.adm-input-yy span').html($(this).html());
            admissionsFunctionality.validateYear();
        });


        $('.admissions-functionality-wrapper .adm-submit').on('click', function(){
            admissionsFunctionality.validateInputs();
        });

        $('.adm-async-form-two .close-adm-results').on('click', function(){
            admissionsFunctionality.hideResultsFromBase();
        });

        $('.adm-async-form-two .adm-form-two-bg').on('click', function(){
            admissionsFunctionality.hideResultsFromBase();
        });

        $('.adm-async-form-two').on('focus', '.admEmailTo:visible', function() {
            $(this).parent().removeClass('error').removeClass('success');
            $(this).next().html('GO');
            if($(this).val() == admissionsFunctionality.sendEmailInputDefaultValue || $(this).val()  == admissionsFunctionality.sendEmailInputErrorMsg || $(this).val()  == admissionsFunctionality.sendEmailSuccessMsg ) {
                $(this).val('');
            }
        }).on('blur', '.admEmailTo:visible', function() {
            if($(this).val() == admissionsFunctionality.sendEmailInputDefaultValue || $(this).val()  == admissionsFunctionality.sendEmailInputErrorMsg || $(this).val() == '' || $(this).val()  == admissionsFunctionality.sendEmailSuccessMsg) {
                $(this).val(admissionsFunctionality.sendEmailInputDefaultValue);
            }
        }).on('click', '.aef-sendButton', function () {
            if (admissionsFunctionality.validateEmail($(this).prev().val())) {
                admissionsFunctionality.sendEmailForm($(this).prev().val());
            } else {
                admissionsFunctionality.showEmailErrorMsg($(this));
            }
        });


    },

    hideResultsFromBase:function() {
        var body = $('html, body');
        body.removeClass('blockScrollOnMobile');
        body.scrollTop(admissionsFunctionality.scrolled);
        $('.adm-async-form-two .adm-results-slide-out').transit({ 'right' : '' }, 500, function(){
            $('.adm-async-form-two').fadeOut('fast');
        });
    },

    showResultsFromBase:function() {
        this.scrolled = $(document).scrollTop();
        $('.adm-async-form-two').fadeIn('fast', function(){
            admissionsFunctionality.prepareDataInAccordion();
            $('.adm-async-form-two .adm-results-slide-out').transit({ 'right' : 0 }, 500, function(){
                $('html, body').addClass('blockScrollOnMobile');
            });
        });
    },


    showStudentOptions:function(results) {

        $('.adm-async-form-two .adm-results-slide-out .adm-results-container').css('visibility', 'visible');
        $('.adm-async-form-two .adm-results-slide-out .adm-results-title').empty().html('Good News!');
        $('.adm-async-form-two .adm-results-slide-out .adm-results-details').empty().html('Your child is eligible for entry at any of the below points...');
        $('.adm-results-headers').empty();
        $('.adm-mobile-dd-area').empty();
        $('.adm-result-panel').remove();
        $('.adm-mobile-dropddown-native select').empty();

        var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        var emailMessage = 'Visit this page in order to see the admissions steps for your child:' + " " + window.location.href;


        function addData(object) {

            var stepsToBeAdded = "";

            for (var jj = 0; jj < object.steps.length; jj++) {
                stepsToBeAdded +=

                    "<li class='adm-step'>" +
                    "<div class='adm-step-title'>" + object.steps[jj].Title + "</div>" +
                    "<div class='adm-step-text'><div class='secondLvlCss'>" + object.steps[jj].Description + "</div></div>" +
                    "</li>";

            }

            return   "<div class='adm-result-panel'>" +
                "<div class='adm-result-entry'>"+  object.Title +"</div>" +
                "<div class='adm-result-entry-date'>Your child would join us in <span>"+  months[object.startDate.getMonth()]  +"  " +  object.startDate.getFullYear() + "</span></div>" +

                "<ol class='adm-steps-list'>" + stepsToBeAdded + "</ol>" +

                "<div class='adm-results-btns clearfix'>" +
                "<a href='/' class='adm-print-btn'><span>Print Steps</span></a>" +
                //"<a href='mailto:?subject=Admissions Steps&body="+emailMessage+ "' class='adm-email-btn'><span>Email Steps</span></a>" +
                "<a href='javascript:admissionsFunctionality.showEmailWindow(" + object.ID + ",\"" + object.Title + "\",\"" + months[object.startDate.getMonth()] + "  " + object.startDate.getFullYear() + "\")' class='adm-email-btn'><span>Email Steps</span></a>" +
                "</div>" +

                "<div class='sendAdmEmailToDivider'></div>" +
                "<div class='sendAdmEmailTo'>" +
                    "<input tabindex='2' class='admEmailTo' value='Enter your email' />" +
                    "<div onclick='admissionsFunctionality.showEmailWindow(" + object.ID + ",\"" + object.Title + "\",\"" + months[object.startDate.getMonth()] + "  " + object.startDate.getFullYear() + "\")' class='aef-sendButton'>GO</div>"+
                "</div>" +

                "</div>";

        }

        for(var ii = 0; ii < results.length; ii++) {
            $('.adm-results-container').append(addData(results[ii]));
        }


        for(var i = 0; i <  $('.adm-async-form-two .adm-result-panel').length; i++) {
            $('.adm-async-form-two .adm-result-panel').eq(i).find('.adm-result-entry').clone().appendTo($('.adm-results-headers'));
            $('.adm-async-form-two .adm-result-panel').eq(i).find('.adm-result-entry').clone().appendTo($('.adm-mobile-dd-area'));

            var optionsTitle =  $('.adm-async-form-two .adm-result-panel').eq(i).find('.adm-result-entry').html();
            $('.adm-mobile-dropddown-native select').append("<option value=" + i + ">" + optionsTitle + "</option>");
        }

        $('.adm-results-headers').find('> div:first').addClass('active');
        $('.adm-async-form-two .adm-result-panel').eq(0).addClass('showFirst');

        if($('.adm-results-headers .adm-result-entry').length == 1) {
            $('.adm-async-form-two .adm-results-slide-out .adm-results-container').addClass('only-one-element');
        } else {
            $('.adm-async-form-two .adm-results-slide-out .adm-results-container').removeClass('only-one-element');
        }

        $('.adm-mobile-dropddown').off().on('click', function(){
            if($(this).hasClass('opened')) {
                $(this).removeClass('opened');
                $('.adm-mobile-dd-area').slideUp('fast');
            } else {
                $(this).addClass('opened');
                $('.adm-mobile-dd-area').slideDown('fast');
            }
        });

        $('html.touch .adm-results-headers').addClass('changeBgLeft');
        $('.adm-results-headers').find('> div').off().on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');

            if($(this).index() === 0) {
                 $(this).parent().addClass('changeBgLeft').removeClass('changeBgRight');
            } else if ($(this).index() === $('.adm-results-headers > div').length - 1) {
                 $(this).parent().addClass('changeBgRight').removeClass('changeBgLeft');
            } else {
                $(this).parent().removeClass('changeBgLeft').removeClass('changeBgRight');
            }


            $('.adm-mobile-dd-area').find('> div').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('.adm-async-form-two .adm-result-panel').hide();
            $('.adm-async-form-two .adm-result-panel').eq($(this).index()).fadeIn('fast');

            $(".adm-email-window").hide();
        });

        $('.adm-mobile-dd-area').find('> div').off().on('click', function(){
            $(this).addClass('active').siblings().removeClass('active');
            $('.adm-results-headers').find('> div').eq($(this).index()).addClass('active').siblings().removeClass('active');
            $('.adm-async-form-two .adm-result-panel').hide();
            $('.adm-async-form-two .adm-result-panel').eq($(this).index()).fadeIn('fast');
        });

        $('.adm-mobile-dropddown-native select').off().on('change', function(){
            $('.adm-results-headers').find('> div').eq(this.value).addClass('active').siblings().removeClass('active');
            $('.adm-async-form-two .adm-result-panel').hide();
            $('.adm-async-form-two .adm-result-panel').eq(this.value).fadeIn('fast');
        });


        $('.adm-print-btn').on('click', function(e){
                e.preventDefault();
                window.print();
        });


    },

    prepareDataInAccordion:function() {

        var studentDate = new Date(this.year, this.month - 1, this.day, 0, 0, 0, 0);
        var filterResultsByYear = [];
        var today = new Date();
        var currentYear = today.getFullYear();
        var ageInYearsRelativeToLimit = currentYear - admissionsFunctionality.year;

        function returnAgeRelativeToSchoolYear(item) {
            //return (admissionsFunctionality.month >= item.StudentAgeByMonth) && (admissionsFunctionality.day >= item.StudentAgeByDay) ? (currentYear - admissionsFunctionality.year) : (currentYear - admissionsFunctionality.year + 1);
            var retAge;
            if (admissionsFunctionality.month < item.StudentAgeByMonth) {
                retAge = currentYear - admissionsFunctionality.year;
            } else {
                if (admissionsFunctionality.month = item.StudentAgeByMonth) {
                    if(admissionsFunctionality.day <= item.StudentAgeByDay){
                        retAge = currentYear - admissionsFunctionality.year;
                    } else {
                        retAge = currentYear - admissionsFunctionality.year - 1;
                    }
                
                } else {
                    retAge = currentYear - admissionsFunctionality.year - 1;
                }
            };
            return retAge;
        }

        function isTheChildSmallerThanLimit(item) {
            return (admissionsFunctionality.month >= item.StudentAgeByMonth) && (admissionsFunctionality.day > item.StudentAgeByDay);
        }

        function showError() {
            var titleError = admissionsFunctionality.allResults.NoResult.Title;
            var messageError = admissionsFunctionality.allResults.NoResult.Description;
            $('.adm-async-form-two .adm-results-slide-out .adm-results-title').empty().html(titleError);
            $('.adm-async-form-two .adm-results-slide-out .adm-results-details').empty().html(messageError);
            $('.adm-async-form-two .adm-results-slide-out .adm-results-container').css('visibility', 'hidden');
        }

        if(admissionsFunctionality.year > currentYear) {
            showError();
        } else {

            filterResultsByYear = this.allResults.EntryPoints.filter(function (item) {

                var itemStartDate = isTheChildSmallerThanLimit(item) ? 
                    new Date((currentYear + (item.StudentAge - ageInYearsRelativeToLimit + 1)), item.StudentAgeByMonth - 1, item.StudentAgeByDay) : 
                    new Date((currentYear + (item.StudentAge - ageInYearsRelativeToLimit)), item.StudentAgeByMonth - 1, item.StudentAgeByDay);
                var today = new Date();


                if (item.StudentAge >= returnAgeRelativeToSchoolYear(item) && itemStartDate > today) {
                    item.startDate = itemStartDate;
                    return item;
                }
            });

        }

        if(!filterResultsByYear.length) {
            showError();
        } else {
           admissionsFunctionality.showStudentOptions(filterResultsByYear);
        }

    },


    validateDay:function() {
        var date = parseInt(admissionsFunctionality.day);
        var month = parseInt(admissionsFunctionality.month);
        var year = parseInt(admissionsFunctionality.year);
        var dateError = false;
        var errorMsg = 'DD';

        if (isNaN(date)) {
            dateError = true;
        }

        if (date > 31 || date < 1) {
            dateError = true;
        } else if ((month==4 || month==6 || month==9 || month==11) && date ==31) {
            dateError = true;
        } else if (month==2) {
            var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
            if (date> 29 || (date ==29 && !isleap))
                dateError = true;
        }
        if(dateError) {
            $('.adm-input.adm-input-days').addClass('error').find('> span').html(errorMsg);
            $('.mobile-select.select-days').addClass('error');
        }  else {
            $('.adm-input.adm-input-days').removeClass('error');
            $('.mobile-select.select-days').removeClass('error');
        }
        if(dateError) {   return { 'error' : 1, 'msg' : 'check date'}; } else { return { 'error' : 0, 'msg' : 'ok'}; }
    },


    validateMonth:function() {
        var month = parseInt(admissionsFunctionality.month);
        var monthError = false;
        var errorMsg = 'MM';

        if (isNaN(month)) {
            monthError = true;
        }
        if (month > 12 || month < 1) {
            monthError = true;
        }
        if(monthError) {
            $('.adm-input.adm-input-months').addClass('error').find('> span').html(errorMsg);
            $('.mobile-select.select-months').addClass('error');
        } else {
            $('.adm-input.adm-input-months').removeClass('error');
            $('.mobile-select.select-months').removeClass('error');
        }
        if(monthError) {  return { 'error' : 1, 'msg' : 'check month'}; } else {     return { 'error' : 0, 'msg' : 'ok'};   }
    },


    validateYear:function() {
        var year = parseInt(admissionsFunctionality.year);
        var yearError = false;
        var errorMsg = 'YYYY';
        var titleError = 'Oh, dear, please check your date of birth';
        var successMsg = "What is your child's date of birth";
        var today = new Date();
        var currentYear = today.getFullYear();


        if (isNaN(year)) {
            yearError = true;
        }
        if (year < (currentYear-17) || year > currentYear) {
            yearError = true;
        }
        if(yearError) {
            $('.adm-input.adm-input-yy').addClass('error').find('> span').html(errorMsg);
            $('.mobile-select.select-year').addClass('error');
            $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').addClass('error').html(titleError);
        } else {
            $('.adm-input.adm-input-yy').removeClass('error');
            $('.mobile-select.select-year').removeClass('error');
            $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').removeClass('error').html(successMsg);
        }
        if(yearError) { return { 'error' : 1, 'msg' : 'check year'}; } else  {   return { 'error' : 0, 'msg' : 'ok'};  }
    },

    validateInputs:function(){

        var today = new Date();
        var currentYear = today.getFullYear();

            var date = parseInt(admissionsFunctionality.day);
            var month = parseInt(admissionsFunctionality.month);
            var year = parseInt(admissionsFunctionality.year);

            var dateError = false;
            var monthError = false;
            var yearError = false;

            var dayErrorMsg = 'DD';
            var monthErrorMsg = 'MM';
            var yearErrorMsg = 'YYYY';
            var titleError = 'Oh, dear, please check your date of birth';
            var successMsg = "What is your child's date of birth";

            if (isNaN(date)) {
                dateError = true;
            }

            if (date > 31 || date < 1) {
                dateError = true;
            } else if ((month==4 || month==6 || month==9 || month==11) && date ==31) {
                dateError = true;
            } else if (month==2) {
                var isleap = (year % 4 == 0 && (year % 100 != 0 || year % 400 == 0));
                if (date> 29 || (date ==29 && !isleap))
                    dateError = true;
            }

            if (isNaN(month)) {
                monthError = true;
            }
            if (month > 12 || month < 1) {
                monthError = true;
            }

            if (isNaN(year)) {
                yearError = true;
            }
            if (year < (currentYear-17) || year > currentYear) {
                yearError = true;
            }

            //return
            if(dateError) {
                $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').addClass('error').html(titleError);
                $('.adm-input.adm-input-days').addClass('error').find('> span').html(dayErrorMsg);
                $('.mobile-select.select-days').addClass('error');
            }  else {
                $('.adm-input.adm-input-days').removeClass('error');
                $('.mobile-select.select-days').removeClass('error');
            }
            if(monthError) {
                $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').addClass('error').html(titleError);
                $('.adm-input.adm-input-months').addClass('error').find('> span').html(monthErrorMsg);
                $('.mobile-select.select-months').addClass('error');
            } else {
                $('.adm-input.adm-input-months').removeClass('error');
                $('.mobile-select.select-months').removeClass('error');
            }
            if(yearError) {
                $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').addClass('error').html(titleError);
                $('.adm-input.adm-input-yy').addClass('error').find('> span').html(yearErrorMsg);
                $('.mobile-select.select-year').addClass('error');

            } else {
                $('.adm-input.adm-input-yy').removeClass('error');
                $('.mobile-select.select-year').removeClass('error');
            }

            if(dateError) {   return { 'error' : 1, 'msg' : 'check date'}; }
            if(monthError) {  return { 'error' : 1, 'msg' : 'check month'}; }
            if(yearError) { return { 'error' : 1, 'msg' : 'check year'}; }
            if(!dateError && !monthError && !yearError) {
                $('.adm-input').removeClass('error');
                admissionsFunctionality.showResultsFromBase();
                $('.admissions-functionality-wrapper .adm-form-one .admissions-func-intro').removeClass('error').html(successMsg);
            }

    },


    showEmailWindow: function (entryID, entryTitle, entryDate) {
        $("#admEmailEntryID").val(entryID);
        $("#admEmailEntryTitle").val(entryTitle);
        $("#admEmailEntryDate").val(entryDate);
    },

   validateEmail: function(email) {
    var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
   },

   showEmailErrorMsg:function(target) {
     target.parent().removeClass('success').addClass('error');
     target.prev().val(admissionsFunctionality.sendEmailInputErrorMsg);
     target.html('!');
   },

    showEmailSuccessMsg:function(target) {

        target.parent().removeClass('error').addClass('success');
        target.prev().val(admissionsFunctionality.sendEmailSuccessMsg);
        target.html('GO');
    },

    sendEmailForm: function (emailToSend) {

        var entryid = $("#admEmailEntryID").val();
        var entryTitle = $("#admEmailEntryTitle").val();
        var entryDate = $("#admEmailEntryDate").val();
        var stepTitleColor = $('.adm-step-title').css("color");

        $.post("/sendadmissionsstepsemail", {
            //CaptchaDeText: captchaVersion == 1 ? $("#CaptchaDeText").val() : "",
            //CaptchaInputText: captchaVersion == 1 ? $("#CaptchaInputText").val() : grecaptcha.getResponse(),
            entryid:entryid,
            title: entryTitle,
            titleColor: stepTitleColor,
            entrydate: entryDate,
            txtEmailAddress: emailToSend
            
        }, function (rsp) {
            switch (rsp) {
                case "ok":
                    admissionsFunctionality.showEmailSuccessMsg($('.aef-sendButton:visible'));
                    break;
                case "error":
                    admissionsFunctionality.showEmailErrorMsg($('.aef-sendButton:visible'));
                    break;
                case "invalid":
                    admissionsFunctionality.showEmailErrorMsg($('.aef-sendButton:visible'));
                    break;
                default:

                    break;
            }
        });
    }

};;
/* GENERIC */

var moveRight, moveLeft;


var detectVisit = {

    init: function () {
        var x = getCookie("visited");
        if (x == null) {this.onFirstVisit();}
        else {this.onSecondVisit();}
    },

    onFirstVisit: function () {setCookie("visited", "yes");},
    onSecondVisit: function () {}

};

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }
    return array;
}

// detects if element has scrollbar
(function ($) {
  $.fn.hasScrollBar = function () {
    var e = this.get(0);
    return {
      vertical: e.scrollHeight > e.clientHeight,
      horizontal: e.scrollWidth > e.clientWidth
    };
  }
})(jQuery);
































//custom menu
var customMenu = {

  scrolled:0,

  openMenu:function() {
      this.scrolled = $(document).scrollTop();
      $('html, body').addClass('blockScrollOnMobile');
      $('.template-main-menu').stop('true,true').fadeIn('fast', function(){
          customMenu.showCurrentPage();
      });
  },


  closeMenu:function() {
      var body = $('html, body');
      body.removeClass('blockScrollOnMobile');

      $('.template-header-sticky').removeClass('isFullScreen');
      $('ul.main-menu-items li a').attr('touched', '0');
      $('ul.main-menu-items li').removeClass('opened').removeClass('lastEleOnRow');
      $('ul.main-menu-items > li > div').css('opacity', 0).hide();
      $('ul.main-menu-items > li > div div > ul > li > div').css('opacity', 0).hide();
      clearInterval(moveRight);
      clearInterval(moveLeft);
      $('.template-main-menu').stop('true,true').fadeOut('fast');
      body.scrollTop(customMenu.scrolled);
  },

  showCurrentPage:function() {

        if($('ul.main-menu-items>li>div>div.menu-display-table-cell>ul>li.current > a.current').length) {
            customMenu.showHideDesktopLevelLinks($('ul.main-menu-items>li>a.current'));
            customMenu.showHideMobileMenuLinks($('ul.main-menu-items>li.current > .touch-area'));
        }

        if($('ul.main-menu-items>li>div>div.menu-display-table-cell>ul>li>div div ul li a.current').length) {
            customMenu.showHideDesktopLevelLinks($('ul.main-menu-items>li>div>div.menu-display-table-cell>ul>li a.current'));
            customMenu.showHideMobileMenuLinks($('ul.main-menu-items>li.current  ul > li.current .touch-area'));
        }

  },

  init:function(){

      // detect if you are on homepage
      if($('.why-this-school').length) {
          $('ul.main-menu-items>li>a.home-icon-link').addClass('active');
      }

      $('ul.main-menu-items li').has('div').addClass('has-child');
      $('ul.main-menu-items li.has-child').append('<span class = "touch-area"></span>');

      var menuLinks =  $('ul.main-menu-items li a');
      menuLinks.attr('touched', '0');

      $('.open-menu').on('click', function(){
          customMenu.openMenu();
      });

      $('.close-menu').on('click', function(){
          customMenu.closeMenu();
      });

      $('.t-menu-bg').on('click', function(e){
          if(getWindowWidth() >= 1024) {
              e.stopPropagation();
              customMenu.closeMenu();
          }
      });

      menuLinks.hoverIntent({
          over: function () {  customMenu.showHideDesktopLevelLinks($(this))  },
          out: function () {     },
          timeout: 200
      });

      menuLinks.on('click', function(e){
          customMenu.showHideDesktopLevelLinks($(this), e);
      });

      $('ul.main-menu-items li .touch-area').on('click', function(e){
          customMenu.showHideMobileMenuLinks($(this), e);
      });

      $(window).resize(function(){
          setTimeout(function(){
              customMenu.prepareSecondLevelLinks("all");
          },200);
      });


      /* scroll menu if needed  right */
      $('.main-menu-items').on('click', '.scrollMenuRightArrow', function(){
            clearInterval(moveRight);
            clearInterval(moveLeft);
            customMenu.scrollForwardTheMenu($(this));
      });

      $('html.no-touch .main-menu-items').on('mouseenter', '.scrollMenuRightArrow', function(){
          var that = $(this);
          clearInterval(moveLeft);
          moveRight = setInterval(function(){
              customMenu.scrollForwardTheMenu(that);
          },300);
      });

      $('html.no-touch .main-menu-items').on('mouseleave', '.scrollMenuRightArrow', function(){
          clearInterval(moveRight);
          clearInterval(moveLeft);
      });

      /* scroll left */
      $('.main-menu-items').on('click', '.scrollMenuLeftArrow', function(){
          clearInterval(moveRight);
          clearInterval(moveLeft);
          customMenu.scrollBackwerdsTheMenu($(this));
      });

      $('html.no-touch .main-menu-items').on('mouseenter', '.scrollMenuLeftArrow', function(){
          var that = $(this);
          clearInterval(moveRight);
          moveLeft = setInterval(function () {
              customMenu.scrollBackwerdsTheMenu(that);
          }, 300);
      });

      $('html.no-touch .main-menu-items').on('mouseleave', '.scrollMenuLeftArrow', function(){
          clearInterval(moveRight);
          clearInterval(moveLeft);
      });


      if(getWindowWidth() >= 1024) {
          $("ul.main-menu-items>li>div>div.menu-display-table-cell").swipe( {
              swipe:function(event, direction, distance, duration, fingerCount, fingerData) {

                  clearInterval(moveRight);
                  clearInterval(moveLeft);
                  if(direction == 'left') {
                      customMenu.scrollForwardTheMenu($(this).next());
                  } else {
                      customMenu.scrollBackwerdsTheMenu($(this).prev());
                  }

              }
          });
      }


  },


  scrollForwardTheMenu:function(target) {
      var currentWidth =  target.prev().width();
      var that = target;

      if(Math.abs(parseInt(that.prev().css('left'))) <=  (currentWidth - getWindowWidth())) {
          target.prev().transit({ 'left' : parseInt(that.prev().css('left')) - 150 }, 200,function(){
              if(Math.abs(parseInt(that.prev().css('left'))) > (currentWidth - getWindowWidth())) {
                  that.fadeOut('fast');
              }
          });
          target.parent().find('> .scrollMenuLeftArrow').fadeIn('fast');
      }
  },

    scrollBackwerdsTheMenu:function(target) {
        var that = target;
        if(parseInt(target.next().css('left')) < -250) {
            target.next().transit({'left' : parseInt(target.next().css('left')) + 150},200, function(){
                if(parseInt(that.next().css('left')) >= 0) {
                    that.fadeOut('fast');
                }
            });
            target.parent().find('> .scrollMenuRightArrow').fadeIn('fast');
        }
    },


  showHideMobileMenuLinks:function(target, e) {

      if(e) {
          e.stopPropagation();
      }

      var status = target.parent().find('> div').is(':hidden');
      if (status) {
          target.parent().find('> div').slideDown('fast');
          target.parent().addClass('opened');
      } else {
          target.parent().find('> div').slideUp('fast');
          target.parent().removeClass('opened');
      }

      var siblings = target.parent().siblings();
      $('> div', siblings).slideUp('fast');
      siblings.removeClass('opened');
  },


  showHideDesktopLevelLinks:function(target, e) {
      clearInterval(moveRight);
      clearInterval(moveLeft);

      if(target.parent().parent().hasClass('main-menu-items')) {
          target.parent().find('.menu-display-table-cell').css('left', '-220px');
          target.parent().find('.scrollMenuLeftArrow').hide();
      }

      if(e) {
          e.stopPropagation();
      }

      if(target.parent().find('div').length) {

          if(getWindowWidth() >= 1024) {

              if(target.parents('.template-header-sticky-inner').length) {
                  $('.template-header-sticky').addClass('isFullScreen');
                  customMenu.scrolled = $(document).scrollTop();
              }

              target.parent().siblings().find('> a').attr('touched', '0');

              if(target.attr('touched') === '0') {

                  if(e) {
                      e.preventDefault();
                  }

                  /* close others */
                  target.parent().siblings().find('> div').css('opacity', 0).hide();
                  target.parent().siblings().removeClass('opened');
                  /* close others */

                  target.attr('touched', '1');
                  target.parent().find('> div').show();

                  customMenu.prepareSecondLevelLinks(target);

                  target.parent().find('> div').css('opacity', 1);
                  target.parent().addClass('opened');
              }

          }
      }
  },

  prepareSecondLevelLinks:function(target) {

      if(getWindowWidth() >= 1024) {

          $('ul.main-menu-items > li > div div > ul > li > div').each(function(){
              var parentHeight = parseInt($(this).parent().find('> a').outerHeight(true));
              $(this).css('top', parentHeight);
          });

          $('ul.main-menu-items > li > div').each(function(){

              if($(this).is(":visible")) {

                  var parentPosition = parseInt($(this).parent().offset().left);
                  var currentWidth = getWindowWidth();
                  //$(this).css('width', getWindowWidth());

                  var leftOffset = parseInt((getWindowWidth() - currentWidth) / 2);
                  $(this).css('left', '-120px');

                  var numberOfLinks = $('>div > ul > li', this).length;

                  if(typeof target == 'string') {

                      if((numberOfLinks *  parseInt($('>div > ul > li', this).outerWidth(true)) > getWindowWidth())) {
                          $('.scrollMenuLeftArrow').remove();
                          $('.scrollMenuRightArrow').remove();
                          $(this).prepend('<div class="scrollMenuLeftArrow"><div></div></div>');
                          $(this).append('<div class="scrollMenuRightArrow"><div></div></div>');
                          $(this).find('> .menu-display-table-cell').css({
                              'width': numberOfLinks *  parseInt($('>div > ul > li', this).outerWidth(true)) + 800,
                              'left': 0,
                              'padding' : '0 20px'
                          });
                      } else {
                          $('.scrollMenuLeftArrow').remove();
                          $('.scrollMenuRightArrow').remove();
                          $(this).find('> .menu-display-table-cell').css({'width': '', 'left': 'auto', 'padding' : 0});
                      }

                  } else {
                      if(!target.parent().parent().parent().hasClass('menu-display-table-cell')) {


                          if((numberOfLinks *  parseInt($('>div > ul > li', this).outerWidth(true)) > getWindowWidth())) {
                              $('.scrollMenuLeftArrow').remove();
                              $('.scrollMenuRightArrow').remove();
                              $(this).prepend('<div class="scrollMenuLeftArrow"><div></div></div>');
                              $(this).append('<div class="scrollMenuRightArrow"><div></div></div>');
                              $(this).find('> .menu-display-table-cell').css({
                                  'width': numberOfLinks *  parseInt($('>div > ul > li', this).outerWidth(true)) + 800,
                                  'left': '-220px'
                              });
                          } else {
                              $('.scrollMenuLeftArrow').remove();
                              $('.scrollMenuRightArrow').remove();
                              $(this).find('> .menu-display-table-cell').css({'width': '', 'left': '-220px'});
                          }

                      }
                  }

              }

          });



      } else {
          $('.scrollMenuLeftArrow').remove();
          $('.scrollMenuRightArrow').remove();
      }


  }

};






















/* HOMEPAGE */

var HomepageBookEventsCarousel = {

    slider: null,
    options: {
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        variableWidth: false,
        centerPadding: 0,
        touchThreshold: 10,
        arrows: false,
        fade: true
    },

    init: function () {

        if ($('.book-your-place-slide').length > 1) {
            $('.hero-image-area .book-your-place').addClass('carouselOn');
            this.slider = $('.hero-image-area .book-your-place').slick(HomepageBookEventsCarousel.options);
            $('.book-your-place-slide').css('opacity', 1);
        } else {
            $('.book-your-place-slide').css('opacity', 1);
        }

    }

};

var HomepageRotatorCarousel = {

    init:function() {

        $('html.no-touch .rotator-slide').on('mouseenter', function(){
                $(this).next().addClass('isActive');
        }).on('mouseleave', function(){
                $(this).next().removeClass('isActive');
        });

        $('html.no-touch .rotator-slide-title').on('mouseenter', function(){
            $(this).prev().addClass('isActive');
        }).on('mouseleave', function(){
            $(this).prev().removeClass('isActive');
        });

        HomepageRotatorCarousel.style();
        HomepageRotatorCarousel.positionSlides();
        HomepageRotatorCarousel.positionText();

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                HomepageRotatorCarousel.positionSlides();
                HomepageRotatorCarousel.positionText();
                HomepageRotatorCarousel.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    HomepageRotatorCarousel.positionSlides();
                    HomepageRotatorCarousel.positionText();
                    HomepageRotatorCarousel.style();
                });
            } else {
                $(window).resize(function () {
                    HomepageRotatorCarousel.positionSlides();
                    HomepageRotatorCarousel.positionText();
                    HomepageRotatorCarousel.style();
                });
            }
        }


        $('.rotator-navigation .rotate-left').on('click', function(){
                $('.rotator-carousel-wrapper .rotator-slide-title:last').prependTo('.rotator-carousel-wrapper-inner');
                $('.rotator-carousel-wrapper .rotator-slide:last').prependTo('.rotator-carousel-wrapper-inner');
                HomepageRotatorCarousel.positionSlides();
                HomepageRotatorCarousel.positionText();
        });

        $('.rotator-navigation .rotate-right').on('click', function(){

            $('.rotator-carousel-wrapper .rotator-slide:first').appendTo('.rotator-carousel-wrapper-inner');
            $('.rotator-carousel-wrapper .rotator-slide-title:first').appendTo('.rotator-carousel-wrapper-inner');
            HomepageRotatorCarousel.positionSlides();
            HomepageRotatorCarousel.positionText();
        });


    },


    positionSlides:function() {

        var radius = (getWindowWidth() >= 768) ? (getWindowWidth() >= 1600) ? 400 : (getWindowWidth() >= 1024) ? 350 : 280 : 230;
        var fields = $('.rotator-slide'), container = $('.rotator-carousel-wrapper-inner'), width = container.width(), height = container.height();
        var angle = 0, step = (2*Math.PI) / fields.length;
        fields.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
            var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });

    },

    positionText:function() {

        var radius = (getWindowWidth() >= 768) ? (getWindowWidth() >= 1600) ? 220 : (getWindowWidth() >= 1024) ? 180 : 160 : 230;
        var fields = $('.rotator-slide-title'), container = $('.rotator-carousel-wrapper-inner'), width = container.width(), height = container.height();
        var angle = 0, step = (2*Math.PI) / fields.length;
        fields.each(function() {
            var x = Math.round(width/2 + radius * Math.cos(angle) - $(this).width()/2);
            var y = Math.round(height/2 + radius * Math.sin(angle) - $(this).height()/2);
            $(this).css({
                left: x + 'px',
                top: y + 'px'
            });
            angle += step;
        });

    },


    style:function() {
        setTimeout(function(){
            $('.rotator-carousel-wrapper .rotator-slide .rotator-slide-image img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        },200);
    }


};

var HomepageSubscribeArea = {

    init: function () {

        function validateEmail(email) {
            var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(email);
        }
        var inputArea = $('.input-area-right input');
        var inputAreaCurrentVal = inputArea.val();

        var errorMessage = 'Please check email !';
        var successMessage = 'Thank you for subscribing !';
        var noAPIKey = 'API key is not valid. Must be a valid v2.0 Mailchimp API key.';


        inputArea.focus(function () {
            if ($(this).val() == inputAreaCurrentVal || $(this).val() == successMessage || $(this).val() == errorMessage) {
                $(this).val('');
            }
        });

        inputArea.blur(function () {
            if ($(this).val() == inputAreaCurrentVal || $(this).val() == errorMessage || $(this).val() == '' || $(this).val() == successMessage) {
                $(this).val(inputAreaCurrentVal);
            }
        });

        $(inputArea).on('keydown', function (e) {
            if (e.which == 13) {
                e.preventDefault();
                $('.input-area-right .sign-up').trigger('click');
            }
        });

        $('.input-area-right .sign-up').on('click', function (e) {
            e.preventDefault();

            var email = inputArea.val();
            var that = $(this);

            if (validateEmail(email)) {
                $.post("/SubscribeNewsletter", {
                    EmailAddress: email,
                    FirstName: "N/A",
                    LastName: "N/A"
                }, function (rsp) {

                    if (rsp == "ok") {
                        inputArea.val(successMessage);
                        $(that).addClass('success').removeClass('error');
                        $(inputArea).addClass('success').removeClass('error');
                    }
                    else if (rsp.indexOf("API key is not valid") != -1) {
                        inputArea.val(noAPIKey);
                        $(that).addClass('error').removeClass('success');
                        $(inputArea).addClass('error').removeClass('success');
                    } else {
                        inputArea.val(errorMessage);
                        $(that).addClass('error').removeClass('success');
                        $(inputArea).addClass('error').removeClass('success');
                    }
                });
            } else {
                inputArea.val(errorMessage);
                $(this).addClass('error').removeClass('success');
                $(inputArea).addClass('error').removeClass('success');
            }

        });

    }

};

var footerArea = {

      init:function() {

          footerArea.style();
          if ($('html').hasClass('no-touch')) {
              $(window).resize(function () {
                  footerArea.style();
              });
          } else {
              if (isMobile.iOS()) {
                  $(window).on("orientationchange", function () {
                      footerArea.style();
                  });
              } else {
                  $(window).resize(function () {
                      footerArea.style();
                  });
              }
          }


      },

    style:function() {
        $('.template-footer .footer-map > img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }


};

var HomepageAlert = {

    init:function() {

        this.style();

        $('.alert-wrapper').addClass('isOpen');
        $('.alert-body').transition({'left' : 0}, 300);


        $('.alert-wrapper .alert-body .alert-bg .alert-main-text-area .alert-text').dotdotdot();
        $('.alert-wrapper .alert-body .alert-bg .alert-main-text-area .alert-title').dotdotdot();


        $('.alert-wrapper .alert-body .alert-bg .close-alert-btn').on('click', function(){
            $('.alert-body').transition({'left' : '-1000px'}, 300, function(){
               $('.alert-wrapper').removeClass('isOpen');
            });
        });

        $('.alert-wrapper .open-alert').on('click', function(){
            $('.alert-wrapper').addClass('isOpen');
            $('.alert-body').transition({'left' : 0}, 300);
        });



        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                HomepageAlert.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    HomepageAlert.style();
                });
            } else {
                $(window).resize(function () {
                    HomepageAlert.style();
                });
            }
        }

    },

    style:function() {
        setTimeout(function(){
            $('.alert-wrapper .alert-body .alert-image img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $('.alert-wrapper .alert-body .alert-image').css('opacity', 1);
            });
        },200);
    }

};

var HomepageLandingScreenExperience = {

    videoElement : $('.hero-video-area video'),
    fitVideo:function() {

        var vid = document.getElementById("videoBg");
        var naturalHeight =  ( getWindowWidth() * vid.videoHeight ) / vid.videoWidth;

        if (naturalHeight  >= getWindowHeight()  )  {
            this.videoElement.css({'height' : 'auto',  'width' : getWindowWidth(), 'top' :  (-(this.videoElement.height() -  getWindowHeight())/2), 'left': 0});
            this.videoElement.css('top' , -(this.videoElement.height() -  getWindowHeight())/2);
        } else  {
            this.videoElement.css({'height' : getWindowHeight(),  'width' : 'auto', 'top' : 0});
            this.videoElement.css( 'left', -(this.videoElement.width() -  getWindowWidth())/2);
        }
    },


    slider: null,
    options: {
        infiniteLoop: true,
        autoHover: false,
        speed: 600,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 0,
        slideMargin: 0,
        moveSlides: 1,
        controls: false,
        auto: true,
        pause: 5000,
        pager: false,
        video: false,
        preloadImages: 'all',
        useCSS: true,
        adaptiveHeight: false,
        oneToOneTouch: false,
        mode: 'fade',
        onSliderLoad: function () {
            if ($('.hero-image-area .hero-images-area .hero-images-area-inner div').length > 1) {
                $('.hero-images-area .bx-viewport').css('height', getWindowHeight());
            }
        }
    },

    init: function () {

        // add video in
        var homepageVideos = [{ video: "video.mp4" }];
        var mobileVideos =  [{ video: "video.mp4" }];

      //  var randomizedVideoArray = shuffle(homepageVideos);
        var videoToInsert = (getWindowWidth() < 768) ? mobileVideos[0] : homepageVideos[0];
        var Video = '<source src="' + videoToInsert.video + '" type="video/mp4">';

        $('.bgVideo').append(Video);

        var video = document.getElementById('videoBg');

        video.addEventListener('loadeddata', function() {
            video.muted = true;
            video.play();
            HomepageLandingScreenExperience.fitVideo();
            $('.hero-video-area').addClass('isVisible');
        }, false);

        $('.hero-video-area-button').on('click', function(){
             if($(this).hasClass('soundOff')) {
                 $(this).removeClass('soundOff');
                 video.muted = false;
             }  else {
                 $(this).addClass('soundOff');
                 video.muted = true;
             }
        });

        //end add video in

        $('.hero-image-area').css('height', getWindowHeight());

        /*

        var myImagesArray = [];

        for (var m = 0; m < HomepageRotatorImagesArrayGrouped.length; m++) {
            shuffle(HomepageRotatorImagesArrayGrouped[m]);
            myImagesArray.push({
                desktopImage: HomepageRotatorImagesArrayGrouped[m][0].desktopImage,
                mobileImage: HomepageRotatorImagesArrayGrouped[m][0].mobileImage
            })
        }

        if(getWindowWidth() >= 768) {
            for(var i = 0; i < myImagesArray.length; i++) {
                var toAppend =  '<div><img src=' + myImagesArray[i].desktopImage  + ' ' + 'title = "Headington School - Oxford"></div>';
                $('.hero-image-area .hero-images-area .hero-images-area-inner').append(toAppend);
            }
        } else {
            for(var j = 0; j < myImagesArray.length; j++) {
                var toAppendMobile =  '<div><img src=' + myImagesArray[j].mobileImage  + ' ' + 'title = "Headington School - Oxford"></div>';
                $('.hero-image-area .hero-images-area .hero-images-area-inner').append(toAppendMobile);
            }
        }


        $('.hero-image-area .hero-images-area img').one("load", function () {
            $('.hero-image-area .hero-images-area img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
            $('.hero-image-area').addClass('opacityOn');
            $('.hero-image-area .customLoader').remove();
            $('.hero-image-area .loader').remove();

        }).each(function () {
            if (this.complete) $(this).load();
        });


        if ($('.hero-image-area .hero-images-area .hero-images-area-inner div').length > 1) {

            this.slider = $('.hero-image-area .hero-images-area .hero-images-area-inner').bxSlider(HomepageLandingScreenExperience.options);
            $('.hp-nav-right').on('click', function(){
                HomepageLandingScreenExperience.slider.goToNextSlide();
            });
            $('.hp-nav-left').on('click', function(){
                HomepageLandingScreenExperience.slider.goToPrevSlide();
            });

        } else {
            $('.hp-nav-left').remove();
            $('.hp-nav-right').remove();
        }
         */

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                HomepageLandingScreenExperience.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    HomepageLandingScreenExperience.style();
                });
            } else {
                $(window).resize(function () {
                    HomepageLandingScreenExperience.style();
                });
            }
        }

    },

    style: function () {

        setTimeout(function(){
            $('.hero-image-area').css('height', getWindowHeight());
        },200);

        setTimeout(function(){
            HomepageLandingScreenExperience.fitVideo();
        },400);


        /*
        if ($('.hero-image-area .hero-images-area .hero-images-area-inner div').length > 1) {
            $('.hero-images-area .bx-viewport').css('height', getWindowHeight());
        }

        setTimeout(function(){
            $('.hero-image-area .hero-images-area img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        },200);
        */
    }

};

var HomepageMediaItems = {

    init: function () {

        $('.related-stories-area .loader').remove();

        $('.related-stories-area .related-story .image-area img').each(function () {
            $(this).on('load', function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        });

        $('.related-story .rollover-layer .slide-up-layer .media-title').dotdotdot();


        $('.related-stories-area .related-story a').on('click', function (e) {
            e.stopPropagation();
        });

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                HomepageMediaItems.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    HomepageMediaItems.style();
                });
            } else {
                $(window).resize(function () {
                    HomepageMediaItems.style();
                });
            }
        }

    },

    style: function () {
        $('.related-stories-area .related-story .image-area img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }

};

var HomepageEventsItems = {

    slider: null,
    options: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 5,
        variableWidth: true,
        centerPadding: 0,
        touchThreshold: 10,
        prevArrow: '<div class = "events-next-nav"></div>',
        nextArrow: '<div class = "events-prev-nav"></div>',
        arrows: true,
        responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 4
                }
            }
       ]
    },

    init: function () {

        $('.upcoming-events-area .upcoming-events-carousel .loader').remove();

        $('.upcoming-event-template .event-image img').each(function () {
            $(this).on('load', function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        });

        $('.upcoming-event-template .event-title').dotdotdot();

        $('.upcoming-event-template a').on('click', function (e) {
            e.stopPropagation();
        });

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                HomepageEventsItems.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    HomepageEventsItems.style();
                });
            } else {
                $(window).resize(function () {
                    HomepageEventsItems.style();
                });
            }
        }


        if ($('.upcoming-events-carousel .upcoming-event-template').length > 4) {
            $('.upcoming-events-carousel').addClass('carouselOn');

            $('.events-prev-nav-mobile').on('click', function(){
                $('.upcoming-events-carousel').slick('slickNext');
            });

            this.slider = $('.upcoming-events-carousel').slick(HomepageEventsItems.options);
        } else {
            $('.events-prev-nav-mobile').remove();
        }

    },

    style: function () {
        $('.upcoming-event-template .event-image img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }

};



/* SECOND LEVEL */

var secondLevelPromosCarousel = {

    slider: null,
    options: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        centerPadding: 0,
        touchThreshold: 10,
        centerMode:false,
        nextArrow: '<div class = "widget-right-nav"></div>',
        prevArrow: '<div class = "widget-left-nav"></div>',
        arrows: true,
         responsive: [
         {
         breakpoint: 768,
         settings: {
             centerMode:true
         }
         }
         ]
    },

    init: function () {

        this.style();

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                secondLevelPromosCarousel.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    secondLevelPromosCarousel.style();
                });
            } else {
                $(window).resize(function () {
                    secondLevelPromosCarousel.style();
                });
            }
        }


        if ($('.related-stories-widget.promo-carousel .related-link-item').length > 2) {
            $('.related-stories-widget.promo-carousel').addClass('carouselOn');
            this.slider = $('.related-stories-widget.promo-carousel .related-stories-inner').slick(secondLevelPromosCarousel.options);
        }

    },

    style: function () {
        $('.related-stories-widget.promo-carousel .related-link-item .related-link-image img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
            $(this).css('opacity', 1);
        });
    }

};








var secondLevelEventsCarouselWidget = {

    slider: null,
    options: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 3,
        variableWidth: true,
        centerPadding: 0,
        touchThreshold: 10,
        arrows: false
        /* responsive: [
         {
         breakpoint: 1599,
         settings: {
         slidesToShow: 4
         }
         }
         ] */
    },

    init: function () {

        $('.related-stories-widget.events-stories .upcoming-event-template .event-image img').each(function () {
            $(this).on('load', function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        });

        $('.related-stories-widget.events-stories .upcoming-event-template .event-title').dotdotdot();

        $('.related-stories-widget.events-stories .upcoming-event-template a').on('click', function (e) {
            e.stopPropagation();
        });


        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                secondLevelEventsCarouselWidget.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    secondLevelEventsCarouselWidget.style();
                });
            } else {
                $(window).resize(function () {
                    secondLevelEventsCarouselWidget.style();
                });
            }
        }


        if ($('.related-stories-widget.events-stories .upcoming-event-template').length > 2) {

            $('.related-stories-widget.events-stories').addClass('carouselOn');

            $('.related-stories-widget.events-stories .widget-right-nav').show().on('click', function(){
                $('.related-stories-widget.events-stories .related-stories-inner').slick('slickNext');
            });

            $('.related-stories-widget.events-stories .widget-left-nav').show().on('click', function(){
                $('.related-stories-widget.events-stories .related-stories-inner').slick('slickPrev');
            });

            this.slider = $('.related-stories-widget.events-stories .related-stories-inner').slick(secondLevelEventsCarouselWidget.options);
        }

    },

    style: function () {
        $('.related-stories-widget.events-stories .upcoming-event-template .event-image img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }

};








var secondLevelRelatedStoriesWidget = {

    slider: null,
    options: {
        dots: false,
        infinite: true,
        speed: 300,
        slidesToShow: 2,
        variableWidth: true,
        centerPadding: 0,
        touchThreshold: 10,
        arrows: false
       /* responsive: [
            {
                breakpoint: 1599,
                settings: {
                    slidesToShow: 4
                }
            }
        ] */
    },

    init: function () {

        $('.related-story .image-area img').each(function () {
            $(this).on('load', function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        });

        $('.related-story .rollover-layer .slide-up-layer .media-title').dotdotdot();

        $('.related-story a').on('click', function (e) {
            e.stopPropagation();
        });

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                secondLevelRelatedStoriesWidget.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    secondLevelRelatedStoriesWidget.style();
                });
            } else {
                $(window).resize(function () {
                    secondLevelRelatedStoriesWidget.style();
                });
            }
        }


        if ($('.related-stories-widget.one-of-each-story .related-story').length > 2) {

            $('.related-stories-widget.one-of-each-story').addClass('carouselOn');

            $('.related-stories-widget.one-of-each-story .widget-right-nav').show().on('click', function(){
                $('.related-stories-widget.one-of-each-story .related-stories-inner').slick('slickNext');
            });

            $('.related-stories-widget.one-of-each-story .widget-left-nav').show().on('click', function(){
                $('.related-stories-widget.one-of-each-story .related-stories-inner').slick('slickPrev');
            });

            this.slider = $('.related-stories-widget.one-of-each-story .related-stories-inner').slick(secondLevelRelatedStoriesWidget.options);
        }

    },

    style: function () {
        $('.related-story .image-area img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }

};







var secondLevelPromos = {

    init:function() {

        this.style();

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                secondLevelPromos.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    secondLevelPromos.style();
                });
            } else {
                $(window).resize(function () {
                    secondLevelPromos.style();
                });
            }
        }

    },

    style: function () {
        $('.related-links-left-widget .related-link-item .related-link-image img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
            $(this).css('opacity', 1);
        });
    }

};




var SecondLevelEventsItems = {


    init: function () {

        $('.related-events-left-widget .upcoming-event-template .event-image img').each(function () {
            $(this).on('load', function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        });

        $('.related-events-left-widget .upcoming-event-template .event-title').dotdotdot();

        $('.related-events-left-widget .upcoming-event-template a').on('click', function (e) {
            e.stopPropagation();
        });

        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                SecondLevelEventsItems.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    SecondLevelEventsItems.style();
                });
            } else {
                $(window).resize(function () {
                    SecondLevelEventsItems.style();
                });
            }
        }

    },

    style: function () {
        $('.related-events-left-widget .upcoming-event-template .event-image img').each(function () {
            FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
        });
    }

};





var SecondLevelLandingScreenExperience = {

    slider: null,
    options: {
        infiniteLoop: true,
        autoHover: false,
        speed: 600,
        minSlides: 1,
        maxSlides: 1,
        slideWidth: 0,
        slideMargin: 0,
        moveSlides: 1,
        controls: false,
        auto: true,
        pause: 5000,
        pager: false,
        video: false,
        preloadImages: 'all',
        useCSS: true,
        adaptiveHeight: false,
        oneToOneTouch: false,
        mode: 'fade',
        onSliderLoad: function () {
            $('.hero-images-area .bx-viewport').css('height', $('.hero-image-area').height());
            $('.hero-image-area .loader').remove();
            $('.hero-image-area').addClass('opacityOn').addClass('faderIsOn');
        }
    },

    init: function () {

        if ($('.hero-image-area .hero-images-area .hero-images-area-inner div').length > 1) {

            this.slider = $('.hero-image-area .hero-images-area .hero-images-area-inner').bxSlider(SecondLevelLandingScreenExperience.options);
            $('.hp-nav-right').show().on('click', function(){
                SecondLevelLandingScreenExperience.slider.goToNextSlide();
            });
            $('.hp-nav-left').show().on('click', function(){
                SecondLevelLandingScreenExperience.slider.goToPrevSlide();
            });

        } else {
            $('.hp-nav-left').remove();
            $('.hp-nav-right').remove();
        }

        $('.hero-image-area .hero-images-area img').one("load", function () {
            $('.hero-image-area .hero-images-area img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
            $('.hero-image-area').addClass('opacityOn');
            $('.hero-image-area .customLoader').remove();

        }).each(function () {
            if (this.complete) $(this).load();
        });


        if ($('html').hasClass('no-touch')) {
            $(window).resize(function () {
                SecondLevelLandingScreenExperience.style();
            });
        } else {
            if (isMobile.iOS()) {
                $(window).on("orientationchange", function () {
                    SecondLevelLandingScreenExperience.style();
                });
            } else {
                $(window).resize(function () {
                    SecondLevelLandingScreenExperience.style();
                });
            }
        }

    },

    style: function () {

        if ($('.hero-image-area .hero-images-area .hero-images-area-inner div').length > 1) {
            $('.hero-images-area .bx-viewport').css('height', $('.hero-image-area').height());
        }

        setTimeout(function(){
            $('.hero-image-area .hero-images-area img').each(function () {
                FitImage(new StretchImg($(this)[0], $(this)[0].width, $(this)[0].height));
                $(this).css('opacity', 1);
            });
        },200);


    }

};







var secondLevelScrollEvents = {

  isAnimating: false,
  isNotAnimation: false,
  stickyBarVisible: false,
  doNotAnimateBar: false,

  init: function () {

      $('.back-to-top-btn').on('click', function () {
          $('html,body').animate({scrollTop: 0}, 600, function () {
          });
          return false;
      });

       $('.in-this-section-submenu').on('click', function () {
          $('html,body').animate({scrollTop: $('.left-column-area').offset().top - 85 }, 2000, function () {
          });
          return false;
        });

      $('.scroll-to-bottom-btn').on('click', function () {
          $('html,body').animate({scrollTop: getWindowHeight() - 50}, 600, function () {
          });
          return false;
      });


    $(window).scroll(function () {
      secondLevelScrollEvents.onScroll();
    });

  },

  showStickyMenu: function () {
    if (!this.isAnimating) {
      this.isAnimating = true;


        $('.template-header-sticky').css('display', 'block');
        $('.template-header-sticky-inner').stop(true,true).transition({ 'top' : 0},400, function(){
            secondLevelScrollEvents.isAnimating = false;
        });
    }
  },


  hideStickyMenu: function () {
    if (!this.isNotAnimation) {
      this.isNotAnimation = true;

        $('.template-header-sticky-inner').stop(true,true).transition({ 'top' : '-100%'},400, function(){
            $('.template-header-sticky').css('display', 'none');

            secondLevelScrollEvents.isNotAnimation = false;
        });

    }
  },


  onScroll: function () {
    var scrolled = $(window).scrollTop();

    if (!secondLevelScrollEvents.doNotAnimateBar) {
      if (scrolled > 150 ) {
        if (!this.stickyBarVisible) {
           this.stickyBarVisible = true;
           this.showStickyMenu();
        }
      } else {

        if (this.stickyBarVisible) {
           this.stickyBarVisible = false;
           this.hideStickyMenu();
        }

      }
    }
  }
};

var triggerAccordion = {

  init: function () {
    this.style();
    this.click();
  },

  style: function () {
    var accordion = $(".faqs");
    $('.content_ac', accordion).hide();
  },

  click: function () {
    var accordionButtons = $('.faqs .open-accordion');
    accordionButtons.on('click', function (e) {
      if ($(this).parent().hasClass('active')) {
        $(this).parent().removeClass('active');
        $(this).next().slideUp();

      } else {
        $(this).parent().addClass('active');
        $(this).next().slideDown();
      }
    });
  }
};




function styleSecondLevel() {

  //style ul
  $('.secondLvlCss ul').each(function () {
    $('li:even', this).addClass('odd');
  });

  $('.secondLvlCss ol').each(function () {
    $('li:even', this).addClass('odd');
  });

  //blockquote
    $('.secondLvlCss blockquote').each(function () {
        $(this).prepend('<div class="topCircle"></div>').append('<div class="bottomCircle"></div>');
    });

    //a.downloadBtn
    $('.secondLvlCss a.downloadBtn').each(function () {
        $(this).prepend('<div class="halfButtonRotating"><div class="top-half"></div> <div class="bottom-half"></div> <div class="center-btn"></div></div>');
    });


  //table
  $('.secondLvlCss table').each(function () {
    $('tr:first', this).addClass('first');
    $('tr:last-child td', this).css('border-bottom', 0);
    $('tr:odd', this).addClass('odd');
    $(this).wrap('<div class="table-wrapper"></div>');
  });

  $('.secondLvlCss table tr').each(function () {
    $('td:last', this).css('border-right', 0);
    $('th:last', this).css('border-right', 0);
  });

  //a href with images
  $('.secondLvlCss a').each(function () {
    if ($(this).find('img').length) {
      $(this).addClass('hasImage');
    }
  });

  $('.secondLvlCss:first p:first').addClass('featuredParagraph');

}

;
(function ($) {

    var MediaItemTemplate =

    "<div class='related-story {MEDIA_IS_FEATURED} {MEDIA_CLASS} {MEDIA_HAS_IMAGE}' {OPTIONAL_EXTERNAL_LINK_URL}>" +
            "<div class='image-area'><img src='{MEDIA_IMAGE}'></div>" +
            "<div class='rollover-layer'>" +

                "<div class='slide-up-layer'>" +
                        "<div class='media-icon'></div>" +
                        "<div class='media-category'>{MEDIA_CATEGORY}</div>" +
                        "<div class='media-category-featured'>{MEDIA_IS_FEATURED_LABEL}</div>" +
                        "<div class='media-title'>{MEDIA_TITLE}</div>" +
                        "<div class='media-date'>{MEDIA_DATE}</div>"+

                        "<div class='media-buttons clearfix'>" +

                        "<a href='{SPECIFIC_LINK_URL}' target='{SPECIFIC_LINK_URL_DESTINATION}' class='templateRotatingBtn read-post'>" +
                        "<div class='halfButtonRotating'>" +
                        "<div class='top-half'></div>" +
                        "<div class='bottom-half'></div>" +
                        "<div class='center-btn'></div>" +
                        "</div>" +
                        "<span>{MEDIA_BUTTON_LABEL}</span>" +
                        "</a>" +

                        "<a href='{ALL_MEDIA_CATEGORY_URL}' target='{ALL_MEDIA_CATEGORY_URL_DESTINATION}' class='templateRotatingBtn all-posts'>" +
                        "<div class='halfButtonRotating'>" +
                        "<div class='top-half'></div>" +
                        "<div class='bottom-half'></div>" +
                        "<div class='center-btn'></div>" +
                        "</div>" +
                        "<span>{MEDIA_BUTTON_LABEL_ALL}</span>" +
                        "</a>" +

                        "</div>" +

                "</div>" +
            "</div>" +
    "</div>";


    var EventsItemTemplate =

        "<div class='upcoming-event-template {EVENT_HAS_IMAGE} {EVENT_IS_EXTENDED} {EVENT_HAS_URL}' {EVENT_OPTIONAL_EXTERNAL_LINK_URL}>" +
            "<div class='event-date'>{EVENT_DAY}<span>{EVENT_MONTH}</span></div>" +
            "<div class='event-image'><img src='{EVENT_IMAGE}'></div>" +
            "<div class='event-title'>{EVENT_TITLE}</div>" +
            "<div class='event-rollover'>" +
            "<div class='d-table'>" +
            "<div class='d-table-cell'>" +

            "<a {EVENT_HIDDEN_URL} href='{EVENT_URL}' class='event-url'>" +
            "<div class='halfButtonRotating'>" +
            "<div class='top-half'></div>" +
            "<div class='bottom-half'></div>" +
            "<div class='center-btn'></div>" +
            "</div>" +
            "<span>View Event</span>" +
            "</a>" +

            "<a {EVENT_HIDDEN_URL2} href='/calendar'>" +
            "<div class='halfButtonRotating'>" +
            "<div class='top-half'></div>" +
            "<div class='bottom-half'></div>" +
            "<div class='center-btn'></div>" +
            "</div>" +
            "<span>All Events</span>" +
            "</a>" +

            "</div>" +
            "</div>" +
            "</div>" +
        "</div>";


    var MediaServiceHelper;

    $.HomepageLevel = function () { };
    $.HomepageLevel.AddMediaItems = function (MediaContainer, MediaCallback, EventsContainer, EventsCallback) {

        MediaServiceHelper = new $.MediaServiceHelper({
            ServiceUrl: $("#MediaPlusUrl").val(),
            FeedsArray: JSON.parse($("#MediaPlusFeedsArray").val()),
            FeedGroups: [
                {   "GroupName": "News",
                    "Feeds": ["TiarcNews"],
                    "Class": "news",
                    "CategoryName":"Latest News",
                    "SpecificLinkTitle" : 'read more',
                    "MediaChannelUrl" : '/media/news',
                    "MediaChannelTitle" : 'all news',
                    "SpecificUrlDestination" : "_self",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "news article",
                    "typeOfExternalURL" : "onclick='window.location = \"{MEDIA_URL}\"'"
                },
                {   "GroupName": "Events",
                    "Feeds": ["TiarcCalendar"],
                    "Class": "events",
                    "CategoryName":"Latest Events",
                    "SpecificLinkTitle" : 'read more',
                    "MediaChannelUrl" : '/calendar',
                    "MediaChannelTitle" : 'all events',
                    "SpecificUrlDestination" : "_self",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "event",
                    "typeOfExternalURL" : "onclick='window.location = \"{MEDIA_URL}\"'"
                },
                {   "GroupName": "Twitter",
                    "Feeds": ["Twitter"],
                    "Class": "twitter",
                    "CategoryName":"Latest Twitter",
                    "SpecificLinkTitle" : 'read post',
                    "MediaChannelUrl" : '/media/filter/twitter',
                    "MediaChannelTitle" : 'all posts',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Photos",
                    "Feeds": ["Flickr"],
                    "Class":"gallery",
                    "CategoryName":"Latest Gallery",
                    "SpecificLinkTitle" : 'see more',
                    "MediaChannelTitle" : 'view all',
                    "MediaChannelUrl" : '/media/filter/photos',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "entry",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Blog",
                    "Feeds": ["Tumblr", "WordPress"],
                    "Class":"blog",
                    "CategoryName":"Latest Entry",
                    "SpecificLinkTitle" : 'read post',
                    "MediaChannelTitle" : 'all posts',
                    "MediaChannelUrl" : '/media/filter/blog',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "blog",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Videos",
                    "Feeds": ["Youtube", "TiarcVideo", "Vimeo"],
                    "Class":"video",
                    "CategoryName":"Video",
                    "SpecificLinkTitle" : 'see more',
                    "MediaChannelTitle" : 'view all',
                    "MediaChannelUrl" : '/media/filter/videos',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "video",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Facebook",
                    "Feeds": ["Facebook"],
                    "Class":"facebook",
                    "CategoryName":"Facebook Post",
                    "SpecificLinkTitle" : 'read post',
                    "MediaChannelUrl" : '/media/filter/facebook',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelTitle" : 'all posts',
                    "MediaChannelNameLabel" : "facebook",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "SoundCloud",
                    "Feeds": ["SoundCloudPlaylist", "SoundCloudTrack"],
                    "Class":"audio",
                    "CategoryName":"Audio",
                    "SpecificLinkTitle" : 'listen now',
                    "MediaChannelUrl" : '/media/filter/soundcloud',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelTitle" : 'view all',
                    "MediaChannelNameLabel" : "sound",
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Magazines",
                    "Feeds": ["Issuu"],
                    "Class":"publication",
                    "CategoryName":"Publication",
                    "SpecificLinkTitle" : 'read post',
                    "MediaChannelUrl" : '/media/filter/publications',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "publication",
                    "MediaChannelTitle" : 'all posts',
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Instagram",
                    "Feeds": ["Instagram"],
                    "Class":"instagram",
                    "CategoryName":"Instagram",
                    "SpecificLinkTitle" : 'see more',
                    "MediaChannelUrl" : '/media/filter/instagram',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "Instagram",
                    "MediaChannelTitle" : 'all posts',
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                },
                {
                    "GroupName": "Pinterest",
                    "Feeds": ["Pinterest"],
                    "Class":"pinterest",
                    "CategoryName":"Pinterest",
                    "SpecificLinkTitle" : 'see more',
                    "MediaChannelUrl" : '/media/filter/pinterest',
                    "SpecificUrlDestination" : "_blank",
                    "AllUrlDestination": "_self",
                    "MediaChannelNameLabel" : "Pinterest",
                    "MediaChannelTitle" : 'view all',
                    "typeOfExternalURL" : "onclick='window.open(\"{MEDIA_URL}\")'"
                }
            ],
            InitCallBack: function (MediaServiceHelperObject) {
                if (MediaContainer.length) {
                    var FeedsToGetForMedia = [];
                    var FeedsForEvents = [];

                    for (var i = 0; i < MediaServiceHelperObject.FeedGroups.length; i++) {
                        for (var j = 0; j < MediaServiceHelperObject.FeedGroups[i].FeedIds.length; j++) {
                            if (MediaServiceHelperObject.FeedGroups[i].GroupName === 'Events') {
                                FeedsForEvents.push(MediaServiceHelperObject.FeedGroups[i].FeedIds[j]);
                            } else {
                                FeedsToGetForMedia.push(MediaServiceHelperObject.FeedGroups[i].FeedIds[j]);
                            }                            
                        }
                    }

                    MediaServiceRdyCallback(FeedsToGetForMedia, MediaContainer, MediaCallback);
                    
                    if(FeedsForEvents.length) {
                        EventsServiceRdyCallback(FeedsForEvents, EventsContainer, EventsCallback);
                    }

                }
                else
                    MediaCallback();
                    EventsCallback();
            }
        });
    };

    /* GET ALL MEDIA ITEMS  */
    function MediaServiceRdyCallback(ids, container, callback) {

        $.MediaServiceHelper.GetMediaItemsAdvanced(ids, 6, 0, function (MediaItems) {
            //var allElementsExceptForEvents = MediaItems.filter(function (item) { return item.ItemType !== 'TiarcCalendar' });
            //console.log(allElementsExceptForEvents);
            //var finalElements = allElementsExceptForEvents.filter(function(item) {   return item.User !== "HSO_PrepSch";  });
            //var finalElements = allElementsExceptForEvents.filter(function (item) { return item.User === "HeadingtonSch"; });
            //console.log(allElementsExceptForEvents);

            var finalElements = MediaItems;


            finalElements.filter(function(item){  item.realDate = new Date(parseInt(item.Date.replace(/(^.*\()|([+-].*$)/g, '')));   });
            finalElements.sort(function(a,b){
                return b.realDate - a.realDate;
            });

           // console.log(finalElements);

            var neededElements = (finalElements.length > 6) ? finalElements.slice(0,6) : finalElements;
          //  console.log(neededElements);

            for (var i = 0; i < neededElements.length; i++) {
                    container.append(GenerateMediaItemHtml(neededElements[i]));
            }

            callback();

        }, "", [], "false", "true", 1, $("#MediaFeedTags").length ? JSON.parse($("#MediaFeedTags").val()) : [], ["Id", "FeedId", "ItemType", "Title", "URL", "Image", "Date", "Latitude", "Longitude", "Category1", "Category1Id", "Category2", "Category2Id", "User", "IsFeatured", "ItemsCount", "BannerImage", "Description", "EndDate", "Location"]);
    }


    /* GET ALL EVENTS ITEMS  */
    function EventsServiceRdyCallback(ids, container, callback) {
        if (!ids.length) {
            $(".upcoming-events-area").hide();
            return;
        }
        $.MediaServiceHelper.GetMediaItemsAdvanced(ids, 10, 0, function (MediaItems) {
            if (!MediaItems.length) {
                $(".upcoming-events-area").hide();
                return;
            }
            //console.log(MediaItems);

            for (var i = 0; i < MediaItems.length; i++) {
                //console.log([i]);
                container.append(GenerateEventItemHtml(MediaItems[i]));
            }
            
            callback();

        }, "", [], "false", "true", 1, $("#MediaFeedTags").length ? JSON.parse($("#MediaFeedTags").val()) : [], ["Id", "FeedId", "ItemType", "Title", "URL", "Image", "Date", "Latitude", "Longitude", "Category1", "Category1Id", "Category2", "Category2Id", "User", "IsFeatured", "ItemsCount", "BannerImage", "Description", "EndDate", "Location"]);
    }



    function GenerateEventItemHtml(MediaItem) {
        var image = MediaItem.Image;
        if (MediaItem.Image == null || MediaItem.Image == "") {
            image = "/Images/img/DefaultCalendarThumb.jpg";
        } else {
            if ((image.match(/http/g) || []).length > 1) {
                image = image.replace(window.location.origin, "");
                image = image.replace("http://headingtonmvc.tiarc-live.co.uk", "");
                image = image.replace("http://www.headington.org", "");
                //image = CDN_URL + "/Images/1px.png?command_1=url&url_1=" + encodeURIComponent(image.replace(window.location.origin, "")) + "&command_2=resize&width_2=196";
                //image = CDN_URL + "/Images/1px.png?command_1=url&url_1=" + decodeURIComponent(image.replace(window.location.origin, "")) + "&command_2=resize&width_2=196";
            } else {
                image = CDN_URL + "/Images/1px.png?command_1=url&url_1=" + encodeURIComponent(MediaItem.Image) + "&command_2=resize&width_2=520";
            }
        }

        //console.log(MediaItem);

        return EventsItemTemplate

            .replace("{EVENT_HAS_URL}", MediaItem.URL == null ? "no-url" : 'has-url')
            .replace("{EVENT_URL}", MediaItem.URL == null ? "javascript:void(0)" : MediaItem.URL)
            .replace("{EVENT_HIDDEN_URL}", MediaItem.URL == null ? "style= 'display:none;'" : "")
            .replace("{EVENT_HIDDEN_URL2}", MediaItem.URL != null ? "style= 'display:none;'" : "")
            .replace("{EVENT_HAS_IMAGE}", (MediaItem.Image == null || MediaItem.Image == "")  ? 'no-image' : 'has-image')
            //.replace("{EVENT_IMAGE}", (MediaItem.Image == null || MediaItem.Image == "") ? (MediaItem.ItemType == 'TiarcCalendar' ? "Images/img/DefaultCalendarThumb.jpg" : "Images/img/DefaultCalendarThumb.jpg") : (MediaItem.Image.indexOf("https://") != -1) ? MediaItem.Image : (CDN_URL + "/Images/1px.png?command_1=url&url_1=" + encodeURIComponent(MediaItem.Image) + "&command_2=resize&width_2=520"))
            .replace("{EVENT_IMAGE}", image)
            .replace("{EVENT_TITLE}", MediaItem.Title.replace(/# /g, "#").replace(/@ /g, "@").replace(/[\\?]{2,}/g, ""))
        //.replace("{EVENT_DAY}",   (moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD') == "1" ) ? moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD') + "st" : (moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD') == "2") ? moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD') + "nd" : moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD') + "th"   )
           // .replace("{EVENT_DAY}", getGetOrdinal(moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD')))

            .replace("{EVENT_DAY}", moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('Do'))

            .replace("{EVENT_MONTH}", moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('MMM'))
            .replace("{EVENT_IS_EXTENDED}", MediaItem.URL == null ? "no-extended" : "")
            .replace("{EVENT_OPTIONAL_EXTERNAL_LINK_URL}", MediaItem.URL == null ? "" : MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "typeOfExternalURL").replace("{MEDIA_URL}", MediaItem.URL));
    }


    function GenerateMediaItemHtml(MediaItem) {

        return MediaItemTemplate

            .replace("{MEDIA_CLASS}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "Class"))
            .replace("{MEDIA_URL}",   MediaItem.ItemType == 'Twitter' ? "https://twitter.com/" + MediaItem.User + "/status/" + MediaItem.Id : MediaItem.URL )
            .replace("{MEDIA_HAS_IMAGE}", (MediaItem.Image == null || MediaItem.Image == "")  ? 'no-image' : 'has-image')
            .replace("{MEDIA_IMAGE}", (MediaItem.Image == null || MediaItem.Image == "") ? (MediaItem.ItemType == 'TiarcNews' ? "/Images/img/defaultNewsThumb.jpg" : "/Images/img/defaultStoryImg.jpg") : (CDN_URL + "/Images/1px.png?command_1=url&url_1=" + encodeURIComponent(MediaItem.Image) + "&command_2=resize&width_2=520"))
            .replace("{MEDIA_TITLE}", MediaItem.Title.replace(/# /g, "#").replace(/@ /g, "@").replace(/[\\?]{2,}/g, ""))

            .replace("{MEDIA_DATE}",    moment(new Date(parseInt(MediaItem.Date.replace(/(^.*\()|([+-].*$)/g, '')))).format('DD/MM/YYYY') )

            .replace("{MEDIA_IS_FEATURED_LABEL}", (MediaItem.ItemType == 'TiarcNews')  ? 'Featured News' : 'Featured Event')

            .replace("{MEDIA_BUTTON_LABEL}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "SpecificLinkTitle"))
            .replace("{MEDIA_BUTTON_LABEL_ALL}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "MediaChannelTitle"))

            .replace("{MEDIA_CATEGORY}", (MediaItem.ItemType == 'Flickr') ? MediaItem.ItemsCount + ' photos' : (MediaItem.ItemType == 'Twitter') ? "@" + MediaItem.User : MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "CategoryName"))

            .replace("{SPECIFIC_LINK_URL_DESTINATION}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "SpecificUrlDestination"))
            .replace("{ALL_MEDIA_CATEGORY_URL_DESTINATION}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "AllUrlDestination"))

           // .replace("{ALL_MEDIA_CATEGORY_URL}", (MediaItem.ItemType == 'Issuu') ? 'https://issuu.com/' : (MediaItem.ItemType == 'Facebook') ? 'https://www.facebook.com/' + MediaItem.User   : (MediaItem.ItemType == 'Tumblr') ? MediaItem.User : (MediaItem.ItemType == 'Youtube') ? 'https://www.youtube.com/channel/' + MediaItem.User : (MediaItem.ItemType == 'SoundCloudTrack') ? MediaItem.URL.substr(0, MediaItem.URL.lastIndexOf("/")) : (MediaItem.ItemType == 'Flickr') ? MediaItem.URL.substr(0, MediaItem.URL.lastIndexOf("/"))  : MediaItem.ItemType == 'Twitter' ? "https://twitter.com/" + MediaItem.User : MediaItem.ItemType == 'Instagram' ? "https://instagram.com/" + MediaItem.User : MediaItem.ItemType == 'WordPress' ? MediaItem.User.split('/feed')[0] : MediaItem.ItemType == 'Pinterest' ? 'https://www.pinterest.com/' + MediaItem.User : MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "MediaChannelUrl")      )
            .replace("{ALL_MEDIA_CATEGORY_URL}",    MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "MediaChannelUrl"))

            .replace("{SPECIFIC_LINK_URL}",   MediaItem.ItemType == 'Twitter' ? "https://twitter.com/" + MediaItem.User + "/status/" + MediaItem.Id : MediaItem.URL )

            .replace("{MEDIA_IS_FEATURED}", (MediaItem.IsFeatured) ? "is-featured" : "no-featured")

            .replace("{OPTIONAL_EXTERNAL_LINK_URL}", MediaServiceHelper.GetFeedProperty(MediaItem.ItemType, "typeOfExternalURL").replace("{MEDIA_URL}",   MediaItem.ItemType == 'Twitter' ? "https://twitter.com/" + MediaItem.User + "/status/" + MediaItem.Id : MediaItem.URL ) );

    }


    function decodeEntities(encodedString) {
        var textArea = document.createElement('textarea');
        textArea.innerHTML = encodedString;
        return textArea.value;
    }


}(jQuery));;

(function($){

    $(document).ready(function(){

        function changeValue() {
            if(getWindowWidth() >= 768) {
                $('.all-stories-area .input-area-right input').val('Enter email to sign up to our newsletter...');
            } else {
                $('.all-stories-area .input-area-right input').val('Sign up to our newsletter...');
            }
        }

        changeValue();
        $(window).resize(function(){
            changeValue();
        });

        HomepageLandingScreenExperience.init();
        secondLevelScrollEvents.init();
        customMenu.init();

        HomepageSubscribeArea.init();
        HomepageAlert.init();

        HomepageRotatorCarousel.init();

        HomepageBookEventsCarousel.init();

     //   $('.scroll-to-bottom-btn').addClass('isAnimating');

      /*  function animateScrollBar() {
            $('.scroll-to-bottom-btn').addClass('isAnimating');
            setTimeout(function(){
                $('.scroll-to-bottom-btn').removeClass('isAnimating');
            },1500)
        }

        animateScrollBar();
        setInterval(function(){
            animateScrollBar();
        },3000);*/


    });

    $(window).load(function() {
        footerArea.init();

        if($('#MediaPlusFeedsArray').length) {
            if($('#MediaPlusFeedsArray').val() != '[]') {

                $.HomepageLevel.AddMediaItems($('.related-stories-area'),
                    function(){   HomepageMediaItems.init(); },
                    $('.upcoming-events-carousel'), function() {
                        HomepageEventsItems.init();
                    }
                );

            }
        }

    });

})(jQuery);


;
