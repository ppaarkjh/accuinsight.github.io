(window.webpackJsonp=window.webpackJsonp||[]).push([[252],{344:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return p})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return s}));var n=r(1),o=r(6),c=(r(0),r(368)),i={title:"distcp"},p={id:"pipeline/workflow/workspace/job-processing/distcp",title:"distcp",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/distcp.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp",sidebar:"pipeline",previous:{title:"dhp",permalink:"/docs/pipeline/workflow/workspace/job-processing/dhp"},next:{title:"executeHive",permalink:"/docs/pipeline/workflow/workspace/job-processing/execute-hive"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],l={rightToc:a};function s(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h3",{id:"definition"},"Definition"),Object(c.b)("p",null,"HDFS\uc5d0 \uc800\uc7a5\ub41c \ud30c\uc77c\uc744 \ub2e4\ub978 HDFS\ub85c \ubcf5\uc0ac\ud558\ub294 \ub178\ub4dc\uc774\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(c.b)("h3",{id:"set"},"Set"),Object(c.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(c.b)("h4",{id:"property"},"property"),Object(c.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow003_distcp_property.png",alt:"flow003"}))),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"retry : max: \uc7ac\uc218\ud589 \ud69f \uc218 : period: \uc7ac\uc218\ud589 \uac04\uaca9"),Object(c.b)("li",{parentName:"ol"},"argument : \uccab\ubc88\uc7ac arg \uacbd\ub85c\ub97c 2,3,4,\u2026,n \uacbd\ub85c\ub85c \ubcf5\uc0ac\ud55c\ub2e4."),Object(c.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(c.b)("h3",{id:"example"},"Example"),Object(c.b)("p",null,"kbtest \ud074\ub7ec\uc2a4\ud130\uc758 HR_Retention.csv\ud30c\uc77c\uc744 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ","[distcp]"," \ub178\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubcf5\uc0ac\ud55c\ub2e4. "),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},"\uccab \ubc88\uc9f8 arg\uc5d0 HR_Retention.csv\ud30c\uc77c\uc774 \uc800\uc7a5\ub41c path\ub97c, \ub450 \ubc88\uc9f8 arg\uc5d0 target path\ub97c \uc785\ub825\ud55c\ub2e4. ")),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"source : hdfs://kbtest-accu-hdfs-nn.suka:9000/tmp/test"),Object(c.b)("li",{parentName:"ul"},"target : hdfs://test1234-accu-hdfs-nn.suka:9000/tmp")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow050_distcp_property%EC%84%A4%EC%A0%95.png",alt:"flow050"}))),Object(c.b)("ol",{start:2},Object(c.b)("li",{parentName:"ol"},"distcp \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589 \ud6c4 test1234 \ud074\ub7ec\uc2a4\ud130\uc5d0 ./test/HR_retention.csv\ud30c\uc77c\uc774 \uc0dd\uc131\ub418\uc5c8\ub2e4. ")),Object(c.b)("p",null,Object(c.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow051_distcp_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow051"}))))}s.isMDXComponent=!0},368:function(e,t,r){"use strict";r.d(t,"a",(function(){return b})),r.d(t,"b",(function(){return d}));var n=r(0),o=r.n(n);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},c=Object.keys(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)r=c[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),s=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):p({},t,{},e)),r},b=function(e){var t=s(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},f=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,c=e.originalType,i=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),b=s(r),f=n,d=b["".concat(i,".").concat(f)]||b[f]||u[f]||c;return r?o.a.createElement(d,p({ref:t},l,{components:r})):o.a.createElement(d,p({ref:t},l))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=r.length,i=new Array(c);i[0]=f;var p={};for(var a in t)hasOwnProperty.call(t,a)&&(p[a]=t[a]);p.originalType=e,p.mdxType="string"==typeof e?e:n,i[1]=p;for(var l=2;l<c;l++)i[l]=r[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);