(window.webpackJsonp=window.webpackJsonp||[]).push([[174],{265:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return c})),t.d(r,"metadata",(function(){return a})),t.d(r,"rightToc",(function(){return l})),t.d(r,"default",(function(){return u}));var n=t(1),o=t(6),i=(t(0),t(365)),c={title:"chiSqSelector"},a={id:"pipeline/workflow/workspace/feature-engineering/chiSqSelector",title:"chiSqSelector",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/feature-engineering/chiSqSelector.md",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/chiSqSelector",sidebar:"pipeline",previous:{title:"treeSelector",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/treeSelector"},next:{title:"corrSelector",permalink:"/docs/pipeline/workflow/workspace/feature-engineering/corrSelector"}},l=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:l};function u(e){var r=e.components,t=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,t,{components:r,mdxType:"MDXLayout"}),Object(i.b)("h3",{id:"definition"},"Definition"),Object(i.b)("p",null,"\ubc94\uc8fc\ud615 \ud53c\ucc98\ub97c \uac16\ub294 labeled \ub370\uc774\ud130\ub97c \uce74\uc774\uc81c\uacf1 \uac80\uc815\uc5d0 \uae30\ubc18\ud558\uc5ec label\uc5d0 \uc88c\uc6b0\ub418\ub294 \uc21c\uc73c\ub85c \uc0c1\uc704 n\uac1c\uc758 feature\ub97c select\ud558\ub294 \ub178\ub4dc\uc785\ub2c8\ub2e4. \uc88c\uce21 ","[\ud53c\ucc98\uc5d4\uc9c0\ub2c8\uc5b4\ub9c1]","\uc5d0\uc11c ","[chiSqSelector]","\ub178\ub4dc\ub97c Designer\ud654\uba74\uc5d0 drag & drop \ud55c \ud6c4 \uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c \ud56d\ubaa9\ubcc4 \ud544\uc694\uc815\ubcf4\ub97c \uc785\ub825\ud569\ub2c8\ub2e4.\nComponents \ud328\ub110\uc758 \ud0ed\ubcc4 \ud56d\ubaa9\uc5d0\uc11c ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4 \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. "),Object(i.b)("h3",{id:"set"},"Set"),Object(i.b)("p",null,"[setting]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0]"," > ","[\uc0dd\uc131]"," > ","[\uae30\ubcf8\uad6c\uc131]","\uc744 \ucc38\uace0\ud569\ub2c8\ub2e4."),Object(i.b)("h4",{id:"property"},"Property"),Object(i.b)("p",null,"\uc6b0\uce21 Components \ud328\ub110\uc5d0\uc11c Property\ud0ed\uc744 \uc120\ud0dd\ud569\ub2c8\ub2e4.  "),Object(i.b)("p",null,Object(i.b)("img",Object(n.a)({parentName:"p"},{src:"/img/pipeline/workflow/workspace/feature-engineering/chiSqSelector001.png",alt:"chiSqSelector001"}))),Object(i.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"col : \ub300\uc0c1 \uceec\ub7fc \uc120\ud0dd"),Object(i.b)("li",{parentName:"ol"},"labelColumn : label \uceec\ub7fc \uba85 (\uc22b\uc790\ud615)"),Object(i.b)("li",{parentName:"ol"},"numTopFeatures : chi-squared\uc5d0 \ub530\ub978 \uc0c1\uc704 feature\uc758 \uc218"),Object(i.b)("li",{parentName:"ol"},"overwriteSchema : \uc2e4\ud589 \uacb0\uacfc\uc5d0 \ub300\ud55c \uc2a4\ud0a4\ub9c8\ub97c \uc7ac\uc815\uc758(\uccb4\ud06c \uc548 \ud560 \uacbd\uc6b0 \uc774\uc804 \uc2a4\ud0a4\ub9c8\ub97c \uadf8\ub300\ub85c \uc0ac\uc6a9\ud568)"),Object(i.b)("li",{parentName:"ol"},"newSchema : newSchema \uc815\uc758")),Object(i.b)("h3",{id:"example"},"Example"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"[ICOS\ubd88\ub7ec\uc624\uae30]",", ","[chiSqSelector]"," \ub178\ub4dc\ub97c Designer\uc5d0 Drag & Drop\ud558\uc5ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131")),Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/chiSqSelector002.png"}),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},"chiSqSelector\ub97c \uc801\uc6a9\ud560 \ub300\uc0c1 \uceec\ub7fc(col)\uc744 'goods_id', 'image_type', 'group'\ub85c \uc120\ud0dd, numTopFeatures\uc5d0 2(\uc801\uc6a9\ub300\uc0c1\uceec\ub7fc\ubcf4\ub2e4 \uc791\uc740 \uc218)\ub85c \uc124\uc815 \ud6c4 \uc2e4\ud589 \uacb0\uacfc\ub294 \ub2e4\uc74c\uacfc \uac19\uc74c -> price\uceec\ub7fc\uc744 \uc88c\uc6b0\ud558\ub294 \uc0c1\uc704 2\uac1c\uc758 feature\ub97c \uce74\uc774\uc81c\uacf1\uac80\uc815\uc5d0 \uae30\ubc18\ud558\uc5ec \ucd94\ucd9c",Object(i.b)("img",{src:"/img/pipeline/workflow/workspace/feature-engineering/chiSqSelector003.png"}))))}u.isMDXComponent=!0},365:function(e,r,t){"use strict";t.d(r,"a",(function(){return b})),t.d(r,"b",(function(){return m}));var n=t(0),o=t.n(n);function i(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function c(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?c(Object(t),!0).forEach((function(r){i(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)t=i[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=o.a.createContext({}),u=function(e){var r=o.a.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):a({},r,{},e)),t},b=function(e){var r=u(e.components);return o.a.createElement(p.Provider,{value:r},e.children)},f={inlineCode:"code",wrapper:function(e){var r=e.children;return o.a.createElement(o.a.Fragment,{},r)}},s=Object(n.forwardRef)((function(e,r){var t=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),b=u(t),s=n,m=b["".concat(c,".").concat(s)]||b[s]||f[s]||i;return t?o.a.createElement(m,a({ref:r},p,{components:t})):o.a.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var i=t.length,c=new Array(i);c[0]=s;var a={};for(var l in r)hasOwnProperty.call(r,l)&&(a[l]=r[l]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var p=2;p<i;p++)c[p]=t[p];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);