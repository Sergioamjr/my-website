(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"6qSS":function(e,t,n){"use strict";n.r(t),n.d(t,"pageQuery",(function(){return s}));var a=n("qKvR"),r=(n("sHHE"),n("fZ4i"));t.default=function(e){var t=e.data.wordpressPost,n=t.id,s=t.title,i=t.excerpt,o=t.date,l=t.content,c=e.location.href,u=t.featured_media.localFile.childImageSharp.resolutions.src,g=t.acf.translation;return Object(a.c)(r.a,{url:c,title:s,tranlation:g,id:n,img:u,excerpt:i,date:o,content:l})};var s="2165035061"},fZ4i:function(e,t,n){"use strict";var a=n("qKvR"),r=n("Wbzz"),s=n("q1tI"),i=n.n(s),o=n("IRcw"),l=n("XGZk"),c=function(e){var t=e.url,n=e.id;return Object(s.useEffect)((function(){!function(e){var t,n;e.url,e.id;t=document,(n=t.createElement("script")).src="https://sergiojunior-netlify.disqus.com/embed.js",n.setAttribute("data-timestamp",+new Date),(t.head||t.body).appendChild(n)}({url:t,id:n})}),[t,n]),i.a.createElement("div",{id:"disqus_thread"})},u=n("wZee"),g=n.n(u);n("s4fy");function d(){var e=p(["\n                  ","\n                "]);return d=function(){return e},e}function p(e,t){return t||(t=e.slice(0)),e.raw=t,e}var f=function(e){var t=e.id,n=e.title,i=e.url,u=e.img,p=e.tranlation,f=e.excerpt,h=(e.date,e.content),m=e.translationLabel;e.publishedAt;return Object(s.useEffect)((function(){g.a.highlightAll()}),[]),Object(a.c)(o.a,{thumbnail:u,title:n,description:f},Object(a.c)(l.a,{small:!0},Object(a.c)("article",{css:l.h,className:"post-content"},"skip"!==p&&Object(a.c)("div",{css:l.k},Object(a.c)(r.Link,{className:"secondary-font",css:Object(a.b)(d(),(l.o,l.j)),to:p},m)),Object(a.c)("h1",{css:l.n,dangerouslySetInnerHTML:{__html:n}}),!1,u&&Object(a.c)("img",{src:u,alt:n}),Object(a.c)("div",{css:l.r,dangerouslySetInnerHTML:{__html:h}})),Object(a.c)(c,{url:i,id:t})))};f.defaultProps={publishedAt:"Publicado em",translationLabel:"Read this article in English"};t.a=f},s4fy:function(e,t,n){n("bWfx"),function(e){var t=e.util.clone(e.languages.javascript);e.languages.jsx=e.languages.extend("markup",t),e.languages.jsx.tag.pattern=/<\/?(?:[\w.:-]+\s*(?:\s+(?:[\w.:$-]+(?:=(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s{'">=]+|\{(?:\{(?:\{[^}]*\}|[^{}])*\}|[^{}])+\}))?|\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}))*\s*\/?)?>/i,e.languages.jsx.tag.inside.tag.pattern=/^<\/?[^\s>\/]*/i,e.languages.jsx.tag.inside["attr-value"].pattern=/=(?!\{)(?:("|')(?:\\[\s\S]|(?!\1)[^\\])*\1|[^\s'">]+)/i,e.languages.jsx.tag.inside.tag.inside["class-name"]=/^[A-Z]\w*(?:\.[A-Z]\w*)*$/,e.languages.insertBefore("inside","attr-name",{spread:{pattern:/\{\s*\.{3}\s*[a-z_$][\w$]*(?:\.[a-z_$][\w$]*)*\s*\}/,inside:{punctuation:/\.{3}|[{}.]/,"attr-value":/\w+/}}},e.languages.jsx.tag),e.languages.insertBefore("inside","attr-value",{script:{pattern:/=(?:\{(?:\{(?:\{[^}]*\}|[^}])*\}|[^}])+\})/i,inside:{"script-punctuation":{pattern:/^=(?={)/,alias:"punctuation"},rest:e.languages.jsx},alias:"language-javascript"}},e.languages.jsx.tag);var n=function e(t){return t?"string"==typeof t?t:"string"==typeof t.content?t.content:t.content.map(e).join(""):""};e.hooks.add("after-tokenize",(function(t){"jsx"!==t.language&&"tsx"!==t.language||function t(a){for(var r=[],s=0;s<a.length;s++){var i=a[s],o=!1;if("string"!=typeof i&&("tag"===i.type&&i.content[0]&&"tag"===i.content[0].type?"</"===i.content[0].content[0].content?0<r.length&&r[r.length-1].tagName===n(i.content[0].content[1])&&r.pop():"/>"===i.content[i.content.length-1].content||r.push({tagName:n(i.content[0].content[1]),openedBraces:0}):0<r.length&&"punctuation"===i.type&&"{"===i.content?r[r.length-1].openedBraces++:0<r.length&&0<r[r.length-1].openedBraces&&"punctuation"===i.type&&"}"===i.content?r[r.length-1].openedBraces--:o=!0),(o||"string"==typeof i)&&0<r.length&&0===r[r.length-1].openedBraces){var l=n(i);s<a.length-1&&("string"==typeof a[s+1]||"plain-text"===a[s+1].type)&&(l+=n(a[s+1]),a.splice(s+1,1)),0<s&&("string"==typeof a[s-1]||"plain-text"===a[s-1].type)&&(l=n(a[s-1])+l,a.splice(s-1,1),s--),a[s]=new e.Token("plain-text",l,null,l)}i.content&&"string"!=typeof i.content&&t(i.content)}}(t.tokens)}))}(Prism)},sHHE:function(e,t,n){"use strict";var a=n("17x9"),r=n.n(a);r.a.shape({href:r.a.string}),r.a.shape({wordpressPost:r.a.shape({id:r.a.string,title:r.a.string,content:r.a.string,excerpt:r.a.string,date:r.a.string})}).isRequired},wZee:function(e,t,n){(function(t){n("rGqo"),n("yt8O"),n("RW0V"),n("Oyvg"),n("SRfc"),n("8+KV"),n("HAE/"),n("a1Th"),n("h7Nl"),n("Btvt"),n("pIFo"),n("bWfx"),n("LK8F");var a=function(e){var t=/\blang(?:uage)?-([\w-]+)\b/i,n=0,a={manual:e.Prism&&e.Prism.manual,disableWorkerMessageHandler:e.Prism&&e.Prism.disableWorkerMessageHandler,util:{encode:function(e){return e instanceof r?new r(e.type,a.util.encode(e.content),e.alias):Array.isArray(e)?e.map(a.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).slice(8,-1)},objId:function(e){return e.__id||Object.defineProperty(e,"__id",{value:++n}),e.__id},clone:function e(t,n){var r,s,i=a.util.type(t);switch(n=n||{},i){case"Object":if(s=a.util.objId(t),n[s])return n[s];for(var o in r={},n[s]=r,t)t.hasOwnProperty(o)&&(r[o]=e(t[o],n));return r;case"Array":return s=a.util.objId(t),n[s]?n[s]:(r=[],n[s]=r,t.forEach((function(t,a){r[a]=e(t,n)})),r);default:return t}},getLanguage:function(e){for(;e&&!t.test(e.className);)e=e.parentElement;return e?(e.className.match(t)||[,"none"])[1].toLowerCase():"none"},currentScript:function(){if("undefined"==typeof document)return null;if("currentScript"in document)return document.currentScript;try{throw new Error}catch(a){var e=(/at [^(\r\n]*\((.*):.+:.+\)$/i.exec(a.stack)||[])[1];if(e){var t=document.getElementsByTagName("script");for(var n in t)if(t[n].src==e)return t[n]}return null}}},languages:{extend:function(e,t){var n=a.util.clone(a.languages[e]);for(var r in t)n[r]=t[r];return n},insertBefore:function(e,t,n,r){var s=(r=r||a.languages)[e],i={};for(var o in s)if(s.hasOwnProperty(o)){if(o==t)for(var l in n)n.hasOwnProperty(l)&&(i[l]=n[l]);n.hasOwnProperty(o)||(i[o]=s[o])}var c=r[e];return r[e]=i,a.languages.DFS(a.languages,(function(t,n){n===c&&t!=e&&(this[t]=i)})),i},DFS:function e(t,n,r,s){s=s||{};var i=a.util.objId;for(var o in t)if(t.hasOwnProperty(o)){n.call(t,o,t[o],r||o);var l=t[o],c=a.util.type(l);"Object"!==c||s[i(l)]?"Array"!==c||s[i(l)]||(s[i(l)]=!0,e(l,n,o,s)):(s[i(l)]=!0,e(l,n,null,s))}}},plugins:{},highlightAll:function(e,t){a.highlightAllUnder(document,e,t)},highlightAllUnder:function(e,t,n){var r={callback:n,container:e,selector:'code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'};a.hooks.run("before-highlightall",r),r.elements=Array.prototype.slice.apply(r.container.querySelectorAll(r.selector)),a.hooks.run("before-all-elements-highlight",r);for(var s,i=0;s=r.elements[i++];)a.highlightElement(s,!0===t,r.callback)},highlightElement:function(n,r,s){var i=a.util.getLanguage(n),o=a.languages[i];n.className=n.className.replace(t,"").replace(/\s+/g," ")+" language-"+i;var l=n.parentNode;l&&"pre"===l.nodeName.toLowerCase()&&(l.className=l.className.replace(t,"").replace(/\s+/g," ")+" language-"+i);var c={element:n,language:i,grammar:o,code:n.textContent};function u(e){c.highlightedCode=e,a.hooks.run("before-insert",c),c.element.innerHTML=c.highlightedCode,a.hooks.run("after-highlight",c),a.hooks.run("complete",c),s&&s.call(c.element)}if(a.hooks.run("before-sanity-check",c),!c.code)return a.hooks.run("complete",c),void(s&&s.call(c.element));if(a.hooks.run("before-highlight",c),c.grammar)if(r&&e.Worker){var g=new Worker(a.filename);g.onmessage=function(e){u(e.data)},g.postMessage(JSON.stringify({language:c.language,code:c.code,immediateClose:!0}))}else u(a.highlight(c.code,c.grammar,c.language));else u(a.util.encode(c.code))},highlight:function(e,t,n){var s={code:e,grammar:t,language:n};return a.hooks.run("before-tokenize",s),s.tokens=a.tokenize(s.code,s.grammar),a.hooks.run("after-tokenize",s),r.stringify(a.util.encode(s.tokens),s.language)},matchGrammar:function(e,t,n,s,i,o,l){for(var c in n)if(n.hasOwnProperty(c)&&n[c]){var u=n[c];u=Array.isArray(u)?u:[u];for(var g=0;g<u.length;++g){if(l&&l==c+","+g)return;var d=u[g],p=d.inside,f=!!d.lookbehind,h=!!d.greedy,m=0,y=d.alias;if(h&&!d.pattern.global){var b=d.pattern.toString().match(/[imsuy]*$/)[0];d.pattern=RegExp(d.pattern.source,b+"g")}d=d.pattern||d;for(var v=s,w=i;v<t.length;w+=t[v].length,++v){var F=t[v];if(t.length>e.length)return;if(!(F instanceof r)){if(h&&v!=t.length-1){if(d.lastIndex=w,!(S=d.exec(e)))break;for(var k=S.index+(f&&S[1]?S[1].length:0),x=S.index+S[0].length,A=v,j=w,$=t.length;A<$&&(j<x||!t[A].type&&!t[A-1].greedy);++A)k>=(j+=t[A].length)&&(++v,w=j);if(t[v]instanceof r)continue;_=A-v,F=e.slice(w,j),S.index-=w}else{d.lastIndex=0;var S=d.exec(F),_=1}if(S){f&&(m=S[1]?S[1].length:0);x=(k=S.index+m)+(S=S[0].slice(m)).length;var O=F.slice(0,k),E=F.slice(x),P=[v,_];O&&(++v,w+=O.length,P.push(O));var C=new r(c,p?a.tokenize(S,p):S,y,S,h);if(P.push(C),E&&P.push(E),Array.prototype.splice.apply(t,P),1!=_&&a.matchGrammar(e,t,n,v,w,!0,c+","+g),o)break}else if(o)break}}}}},tokenize:function(e,t){var n=[e],r=t.rest;if(r){for(var s in r)t[s]=r[s];delete t.rest}return a.matchGrammar(e,n,t,0,0,!1),n},hooks:{all:{},add:function(e,t){var n=a.hooks.all;n[e]=n[e]||[],n[e].push(t)},run:function(e,t){var n=a.hooks.all[e];if(n&&n.length)for(var r,s=0;r=n[s++];)r(t)}},Token:r};function r(e,t,n,a,r){this.type=e,this.content=t,this.alias=n,this.length=0|(a||"").length,this.greedy=!!r}if(e.Prism=a,r.stringify=function(e,t){if("string"==typeof e)return e;if(Array.isArray(e))return e.map((function(e){return r.stringify(e,t)})).join("");var n={type:e.type,content:r.stringify(e.content,t),tag:"span",classes:["token",e.type],attributes:{},language:t};if(e.alias){var s=Array.isArray(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(n.classes,s)}a.hooks.run("wrap",n);var i=Object.keys(n.attributes).map((function(e){return e+'="'+(n.attributes[e]||"").replace(/"/g,"&quot;")+'"'})).join(" ");return"<"+n.tag+' class="'+n.classes.join(" ")+'"'+(i?" "+i:"")+">"+n.content+"</"+n.tag+">"},!e.document)return e.addEventListener?(a.disableWorkerMessageHandler||e.addEventListener("message",(function(t){var n=JSON.parse(t.data),r=n.language,s=n.code,i=n.immediateClose;e.postMessage(a.highlight(s,a.languages[r],r)),i&&e.close()}),!1),a):a;var s=a.util.currentScript();if(s&&(a.filename=s.src,s.hasAttribute("data-manual")&&(a.manual=!0)),!a.manual){var i=function(){a.manual||a.highlightAll()},o=document.readyState;"loading"===o||"interactive"===o&&s&&s.defer?document.addEventListener("DOMContentLoaded",i):window.requestAnimationFrame?window.requestAnimationFrame(i):window.setTimeout(i,16)}return a}("undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{});e.exports&&(e.exports=a),void 0!==t&&(t.Prism=a),a.languages.markup={comment:/<!--[\s\S]*?-->/,prolog:/<\?[\s\S]+?\?>/,doctype:{pattern:/<!DOCTYPE(?:[^>"'[\]]|"[^"]*"|'[^']*')+(?:\[(?:(?!<!--)[^"'\]]|"[^"]*"|'[^']*'|<!--[\s\S]*?-->)*\]\s*)?>/i,greedy:!0},cdata:/<!\[CDATA\[[\s\S]*?]]>/i,tag:{pattern:/<\/?(?!\d)[^\s>\/=$<%]+(?:\s(?:\s*[^\s>\/=]+(?:\s*=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+(?=[\s>]))|(?=[\s/>])))+)?\s*\/?>/i,greedy:!0,inside:{tag:{pattern:/^<\/?[^\s>\/]+/i,inside:{punctuation:/^<\/?/,namespace:/^[^\s>\/:]+:/}},"attr-value":{pattern:/=\s*(?:"[^"]*"|'[^']*'|[^\s'">=]+)/i,inside:{punctuation:[/^=/,{pattern:/^(\s*)["']|["']$/,lookbehind:!0}]}},punctuation:/\/?>/,"attr-name":{pattern:/[^\s>\/]+/,inside:{namespace:/^[^\s>\/:]+:/}}}},entity:/&#?[\da-z]{1,8};/i},a.languages.markup.tag.inside["attr-value"].inside.entity=a.languages.markup.entity,a.hooks.add("wrap",(function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))})),Object.defineProperty(a.languages.markup.tag,"addInlined",{value:function(e,t){var n={};n["language-"+t]={pattern:/(^<!\[CDATA\[)[\s\S]+?(?=\]\]>$)/i,lookbehind:!0,inside:a.languages[t]},n.cdata=/^<!\[CDATA\[|\]\]>$/i;var r={"included-cdata":{pattern:/<!\[CDATA\[[\s\S]*?\]\]>/i,inside:n}};r["language-"+t]={pattern:/[\s\S]+/,inside:a.languages[t]};var s={};s[e]={pattern:RegExp(/(<__[\s\S]*?>)(?:<!\[CDATA\[[\s\S]*?\]\]>\s*|[\s\S])*?(?=<\/__>)/.source.replace(/__/g,e),"i"),lookbehind:!0,greedy:!0,inside:r},a.languages.insertBefore("markup","cdata",s)}}),a.languages.xml=a.languages.extend("markup",{}),a.languages.html=a.languages.markup,a.languages.mathml=a.languages.markup,a.languages.svg=a.languages.markup,function(e){var t=/("|')(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/;e.languages.css={comment:/\/\*[\s\S]*?\*\//,atrule:{pattern:/@[\w-]+[\s\S]*?(?:;|(?=\s*\{))/,inside:{rule:/@[\w-]+/}},url:{pattern:RegExp("url\\((?:"+t.source+"|[^\n\r()]*)\\)","i"),inside:{function:/^url/i,punctuation:/^\(|\)$/}},selector:RegExp("[^{}\\s](?:[^{};\"']|"+t.source+")*?(?=\\s*\\{)"),string:{pattern:t,greedy:!0},property:/[-_a-z\xA0-\uFFFF][-\w\xA0-\uFFFF]*(?=\s*:)/i,important:/!important\b/i,function:/[-a-z0-9]+(?=\()/i,punctuation:/[(){};:,]/},e.languages.css.atrule.inside.rest=e.languages.css;var n=e.languages.markup;n&&(n.tag.addInlined("style","css"),e.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|')(?:\\[\s\S]|(?!\1)[^\\])*\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$/,"attr-value":{pattern:/.+/i,inside:e.languages.css}},alias:"language-css"}},n.tag))}(a),a.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\s\S]*?(?:\*\/|$)/,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.*/,lookbehind:!0,greedy:!0}],string:{pattern:/(["'])(?:\\(?:\r\n|[\s\S])|(?!\1)[^\\\r\n])*\1/,greedy:!0},"class-name":{pattern:/(\b(?:class|interface|extends|implements|trait|instanceof|new)\s+|\bcatch\s+\()[\w.\\]+/i,lookbehind:!0,inside:{punctuation:/[.\\]/}},keyword:/\b(?:if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,boolean:/\b(?:true|false)\b/,function:/\w+(?=\()/,number:/\b0x[\da-f]+\b|(?:\b\d+\.?\d*|\B\.\d+)(?:e[+-]?\d+)?/i,operator:/[<>]=?|[!=]=?=?|--?|\+\+?|&&?|\|\|?|[?*/~^%]/,punctuation:/[{}[\];(),.:]/},a.languages.javascript=a.languages.extend("clike",{"class-name":[a.languages.clike["class-name"],{pattern:/(^|[^$\w\xA0-\uFFFF])[_$A-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\.(?:prototype|constructor))/,lookbehind:!0}],keyword:[{pattern:/((?:^|})\s*)(?:catch|finally)\b/,lookbehind:!0},{pattern:/(^|[^.]|\.\.\.\s*)\b(?:as|async(?=\s*(?:function\b|\(|[$\w\xA0-\uFFFF]|$))|await|break|case|class|const|continue|debugger|default|delete|do|else|enum|export|extends|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)\b/,lookbehind:!0}],number:/\b(?:(?:0[xX](?:[\dA-Fa-f](?:_[\dA-Fa-f])?)+|0[bB](?:[01](?:_[01])?)+|0[oO](?:[0-7](?:_[0-7])?)+)n?|(?:\d(?:_\d)?)+n|NaN|Infinity)\b|(?:\b(?:\d(?:_\d)?)+\.?(?:\d(?:_\d)?)*|\B\.(?:\d(?:_\d)?)+)(?:[Ee][+-]?(?:\d(?:_\d)?)+)?/,function:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*(?:\.\s*(?:apply|bind|call)\s*)?\()/,operator:/--|\+\+|\*\*=?|=>|&&|\|\||[!=]==|<<=?|>>>?=?|[-+*/%&|^!=<>]=?|\.{3}|\?[.?]?|[~:]/}),a.languages.javascript["class-name"][0].pattern=/(\b(?:class|interface|extends|implements|instanceof|new)\s+)[\w.\\]+/,a.languages.insertBefore("javascript","keyword",{regex:{pattern:/((?:^|[^$\w\xA0-\uFFFF."'\])\s])\s*)\/(?:\[(?:[^\]\\\r\n]|\\.)*]|\\.|[^/\\\[\r\n])+\/[gimyus]{0,6}(?=(?:\s|\/\*[\s\S]*?\*\/)*(?:$|[\r\n,.;:})\]]|\/\/))/,lookbehind:!0,greedy:!0},"function-variable":{pattern:/#?[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*[=:]\s*(?:async\s*)?(?:\bfunction\b|(?:\((?:[^()]|\([^()]*\))*\)|[_$a-zA-Z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)\s*=>))/,alias:"function"},parameter:[{pattern:/(function(?:\s+[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*)?\s*\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\))/,lookbehind:!0,inside:a.languages.javascript},{pattern:/[_$a-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*(?=\s*=>)/i,inside:a.languages.javascript},{pattern:/(\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*=>)/,lookbehind:!0,inside:a.languages.javascript},{pattern:/((?:\b|\s|^)(?!(?:as|async|await|break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|finally|for|from|function|get|if|implements|import|in|instanceof|interface|let|new|null|of|package|private|protected|public|return|set|static|super|switch|this|throw|try|typeof|undefined|var|void|while|with|yield)(?![$\w\xA0-\uFFFF]))(?:[_$A-Za-z\xA0-\uFFFF][$\w\xA0-\uFFFF]*\s*)\(\s*)(?!\s)(?:[^()]|\([^()]*\))+?(?=\s*\)\s*\{)/,lookbehind:!0,inside:a.languages.javascript}],constant:/\b[A-Z](?:[A-Z_]|\dx?)*\b/}),a.languages.insertBefore("javascript","string",{"template-string":{pattern:/`(?:\\[\s\S]|\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}|(?!\${)[^\\`])*`/,greedy:!0,inside:{"template-punctuation":{pattern:/^`|`$/,alias:"string"},interpolation:{pattern:/((?:^|[^\\])(?:\\{2})*)\${(?:[^{}]|{(?:[^{}]|{[^}]*})*})+}/,lookbehind:!0,inside:{"interpolation-punctuation":{pattern:/^\${|}$/,alias:"punctuation"},rest:a.languages.javascript}},string:/[\s\S]+/}}}),a.languages.markup&&a.languages.markup.tag.addInlined("script","javascript"),a.languages.js=a.languages.javascript,"undefined"!=typeof self&&self.Prism&&self.document&&document.querySelector&&(self.Prism.fileHighlight=function(e){e=e||document;var t={js:"javascript",py:"python",rb:"ruby",ps1:"powershell",psm1:"powershell",sh:"bash",bat:"batch",h:"c",tex:"latex"};Array.prototype.slice.call(e.querySelectorAll("pre[data-src]")).forEach((function(e){if(!e.hasAttribute("data-src-loaded")){for(var n,r=e.getAttribute("data-src"),s=e,i=/\blang(?:uage)?-([\w-]+)\b/i;s&&!i.test(s.className);)s=s.parentNode;if(s&&(n=(e.className.match(i)||[,""])[1]),!n){var o=(r.match(/\.(\w+)$/)||[,""])[1];n=t[o]||o}var l=document.createElement("code");l.className="language-"+n,e.textContent="",l.textContent="Loading…",e.appendChild(l);var c=new XMLHttpRequest;c.open("GET",r,!0),c.onreadystatechange=function(){4==c.readyState&&(c.status<400&&c.responseText?(l.textContent=c.responseText,a.highlightElement(l),e.setAttribute("data-src-loaded","")):c.status>=400?l.textContent="✖ Error "+c.status+" while fetching file: "+c.statusText:l.textContent="✖ Error: File does not exist or is empty")},c.send(null)}}))},document.addEventListener("DOMContentLoaded",(function(){self.Prism.fileHighlight()})))}).call(this,n("yLpj"))}}]);
//# sourceMappingURL=component---src-templates-post-js-80749d04bb3b3b9935a6.js.map