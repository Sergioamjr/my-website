(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{BZiS:function(t,e,n){"use strict";n.d(e,"a",(function(){return r}));var c=n("qKvR"),a=n("XGZk"),r=function(t){var e=t.name;return Object(c.c)("span",{css:a.o},e)}},J8C8:function(t,e,n){"use strict";var c=n("MUpH"),a=n("qKvR"),r=n("Wbzz"),s=n("IRcw"),i=n("XGZk");function l(){var t=Object(c.a)(["\n                ","\n              "]);return l=function(){return t},t}var o=function(t){var e=t.title,n=t.subtitle,c=t.translateLabel,o=t.translateTo,u=t.children;return Object(a.c)(s.a,null,Object(a.c)(i.a,{small:!0},Object(a.c)("div",{className:"post-content"},c&&o&&Object(a.c)("div",{css:Object(a.b)(l(),i.i)},Object(a.c)(r.Link,{className:"secondary-font",to:""+o},c)),e&&Object(a.c)("h2",{css:i.j},e),n&&Object(a.c)("p",{css:i.l},n),Object(a.c)("div",{css:i.p},u))))};e.a=o,o.defaultProps={title:"",subtitle:"",translateLabel:"",translateTo:""}},h4xB:function(t,e,n){"use strict";n.d(e,"a",(function(){return b}));var c=n("MUpH"),a=n("qKvR"),r=n("Wbzz"),s=n("BZiS"),i=n("XGZk");function l(){var t=Object(c.a)(["\n  position: relative;\n  z-index: 1;\n  ",";\n"]);return l=function(){return t},t}var o=Object(a.b)(l(),i.q),u=function(t){var e=t.title,n=t.excerpt,c=t.path,l=t.categories,u=t.externalLink,b=t.label;return Object(a.c)("div",{css:o},Object(a.c)("p",{css:i.l},e),Object(a.c)("p",{css:i.p,dangerouslySetInnerHTML:{__html:n}}),l.length>0&&Object(a.c)("div",{css:i.i},l.map((function(t,e){var n=t.category;return Object(a.c)(s.a,{key:e,name:n})}))),u&&c&&Object(a.c)("a",{className:"secondary-font",rel:"noopener noreferrer",target:"_blank",css:i.h,href:c},b),!u&&c&&Object(a.c)(r.Link,{className:"secondary-font",css:i.h,to:c},b))};u.defaultProps={label:"Read more",categories:[]};var b=u},vx99:function(t,e,n){"use strict";n.r(e),n.d(e,"pageQuery",(function(){return s}));var c=n("qKvR"),a=n("h4xB"),r=n("J8C8");e.default=function(t){var e=t.data.allMdx.edges;return Object(c.c)(r.a,{translateLabel:"See in English",translateTo:"/en/blog",title:"Artigos"},Object(c.c)("div",null,e.map((function(t,e){var n=t.node,r=n.slug,s=n.frontmatter,i=s.title,l=s.excerpt,o=s.path;return r.includes("__")||o.includes("/posts_en/")?null:Object(c.c)(a.a,{categories:[],path:o,excerpt:l,title:i,key:e,label:"Ler mais"})}))))};var s="502758123"}}]);
//# sourceMappingURL=component---src-pages-blog-js-ab24d05fa490b7e39969.js.map