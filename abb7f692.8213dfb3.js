(window.webpackJsonp=window.webpackJsonp||[]).push([[177],{268:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return a})),t.d(r,"default",(function(){return b}));var n=t(1),o=t(6),p=(t(0),t(365)),c={title:"rScript"},i={id:"pipeline/workflow/workspace/job-processing/r-script",title:"rScript",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/r-script.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/r-script",sidebar:"pipeline",previous:{title:"query",permalink:"/docs/pipeline/workflow/workspace/job-processing/query"},next:{title:"python",permalink:"/docs/pipeline/workflow/workspace/job-processing/python"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:a};function b(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(p.b)("wrapper",Object(n.a)({},l,t,{components:r,mdxType:"MDXLayout"}),Object(p.b)("h3",{id:"definition"},"Definition"),Object(p.b)("p",null,"R\uc2e4\ud589\ud658\uacbd\uc774 \uad6c\uc131\ub41c \uc6d0\uaca9 \uc11c\ubc84 \ub0b4\uc758 R \ud30c\uc77c\uc744 \uc2e4\ud589\ud569\ub2c8\ub2e4.",Object(p.b)("br",{parentName:"p"}),"\n","\uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[rScript]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud569\ub2c8\ub2e4.\nProperty \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."),Object(p.b)("h3",{id:"set"},"Set"),Object(p.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(p.b)("h4",{id:"property"},"property"),Object(p.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(p.b)("p",null,Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/rscript01_property.png",alt:"rscript01"}))),Object(p.b)("p",null,"property \uc911 2~6 \ud56d\ubaa9\uc740 ","[\uc5f0\uacb0\uad00\ub9ac]","\uc5d0 \ub4f1\ub85d\ub41c \uc6d0\uaca9\uc11c\ubc84 \uc815\ubcf4 \uc120\ud0dd \uc2dc \uc790\ub3d9\uc73c\ub85c \uc785\ub825\ub418\uba70, \uc6d0\ud558\ub294 \uc11c\ubc84\ubaa9\ub85d\uc774 \uc5c6\uc744 \uacbd\uc6b0 ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0\uc11c \ud544\uc694\uc11c\ubc84\ub97c \uba3c\uc800 \ub4f1\ub85d\ud569\ub2c8\ub2e4."),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},"appName : \uc571 \uc774\ub984 \uc124\uc815"),Object(p.b)("li",{parentName:"ol"},"R \uc2e4\ud589 IP : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c R\uc11c\ubc84 IP, PORT"),Object(p.b)("li",{parentName:"ol"},"user : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c R\uc11c\ubc84 \uc0ac\uc6a9\uc790 ID"),Object(p.b)("li",{parentName:"ol"},"password : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c R\uc11c\ubc84 \uc0ac\uc6a9\uc790 \ud328\uc2a4\uc6cc\ub4dc"),Object(p.b)("li",{parentName:"ol"},"\uc6d0\uaca9\uc11c\ubc84ID : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c R\uc11c\ubc84 ID"),Object(p.b)("li",{parentName:"ol"},"\uc6d0\uaca9\uc11c\ubc84\uba85 : ","[\uc124\uc815]"," > ","[\uc6d0\uaca9 \uc11c\ubc84]","\uc5d0 \uc800\uc7a5\ub41c R\uc11c\ubc84\uba85"),Object(p.b)("li",{parentName:"ol"},"sourcepath : \uc2e4\ud589\ud560 R \ucf54\ub4dc\uac00 \uc800\uc7a5\ub41c R \ud30c\uc77c \uacbd\ub85c",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"\uc6d0\uaca9\uc11c\ubc84\uc758 Filesystem \uc870\ud68c \ubc0f \uc120\ud0dd\uc744 \ud1b5\ud574 \uc2e4\ud589\ud558\uace0\uc790 \ud558\ub294 R \ud30c\uc77c \uacbd\ub85c\ub97c \uc9c0\uc815"))),Object(p.b)("li",{parentName:"ol"},"source : \uc2e4\ud589\ub420 R \ucf54\ub4dc \uc870\ud68c",Object(p.b)("ul",{parentName:"li"},Object(p.b)("li",{parentName:"ul"},"6\ubc88 sourcepath \uacbd\ub85c\uc758 R \ucf54\ub4dc \uc870\ud68c \uac00\ub2a5 (\uc790\ub3d9\uc785\ub825, \ud3b8\uc9d1\uae30\ub2a5\uc740 \ubbf8\uc9c0\uc6d0)"))),Object(p.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815 (R \uc2e4\ud589 command)"),Object(p.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(p.b)("h3",{id:"example"},"Example"),Object(p.b)("p",null,"\uc22b\uc790\uc5f4\uc744 \ucd9c\ub825\ud558\ub294 rscript\ub97c \uc6d0\uaca9\uc9c0 R \uc11c\ubc84\uc5d0\uc11c \uc2e4\ud589\ud558\ub294 \uc608\uc81c\uc785\ub2c8\ub2e4. test.R \uc774\ub780 \uc2a4\ud06c\ub9bd\ud2b8\ub97c R\uc11c\ubc84\uc5d0 \ub4f1\ub85d \ud6c4 ","[7.sourcepath]","\uc5d0 \uc9c0\uc815\ud558\uac70\ub098, ","[8.source]","\uc5d0 \uc9c1\uc811 \ucf54\ub529\ud558\uc5ec \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. Source Editor \ubc84\ud2bc(","[8.source]"," \uc6b0\uce21 \uccab \ubc88\uc9f8 \ubc84\ud2bc) \ud074\ub9ad \uc2dc Editor\uac00 \ud31d\uc5c5\ub418\uba70 \ubcf4\ub2e4 \ud070 \ud654\uba74\uc5d0\uc11c \ucf54\ub4dc\ub97c \uc791\uc131\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(p.b)("ol",null,Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"\uc5f0\uacb0\uad00\ub9ac\uc5d0\uc11c \uc6d0\uaca9\uc11c\ubc84\ub97c \uc120\ud0dd, \uc120\ud0dd \uc2dc ","[2.R \uc2e4\ud589 IP]"," ~ ","[5.\uc6d0\uaca9\uc11c\ubc84ID]","\uae4c\uc9c0 \uc790\ub3d9\uc785\ub825",Object(p.b)("br",{parentName:"p"}),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/rscript02_property.png",alt:"rscript02"})))),Object(p.b)("li",{parentName:"ol"},Object(p.b)("p",{parentName:"li"},"rscript\ub97c \uc791\uc131 \ud558\uac70\ub098 ","[7.sourcepath]","\uc5d0\uc11c \uc6d0\uaca9\uc11c\ubc84\uc5d0 \ubbf8\ub9ac \uc0dd\uc131\ud55c rscript\ub97c \uc2e4\ud589",Object(p.b)("br",{parentName:"p"}),"\n",Object(p.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/job-processing/rscript03_property.png",alt:"rscript03"}))))))}b.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return s})),t.d(r,"b",(function(){return O}));var n=t(0),o=t.n(n);function p(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){p(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function a(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},p=Object.keys(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(n=0;n<p.length;n++)t=p[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=o.a.createContext({}),b=function(e){var r=o.a.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i({},r,{},e)),t},s=function(e){var r=b(e.components);return o.a.createElement(l.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},m=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,c=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),s=b(t),m=n,O=s["".concat(c,".").concat(m)]||s[m]||u[m]||p;return t?o.a.createElement(O,i({ref:r},l,{components:t})):o.a.createElement(O,i({ref:r},l))}));function O(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,c=new Array(p);c[0]=m;var i={};for(var a in r)hasOwnProperty.call(r,a)&&(i[a]=r[a]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var l=2;l<p;l++)c[l]=t[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"}}]);