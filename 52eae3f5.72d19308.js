(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{169:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return a})),r.d(t,"default",(function(){return l}));var n=r(1),o=(r(0),r(342));const i={title:"executeHive"},c={id:"pipeline/workflow/workspace/job-processing/execute-hive",title:"executeHive",description:"### Definition\r",source:"@site/docs\\pipeline\\workflow\\workspace\\job-processing\\execute-hive.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/execute-hive",sidebar:"pipeline",previous:{title:"distcp",permalink:"/docs/pipeline/workflow/workspace/job-processing/distcp"},next:{title:"fork",permalink:"/docs/pipeline/workflow/workspace/job-processing/fork"}},a=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:a};function l({components:e,...t}){return Object(o.b)("wrapper",Object(n.a)({},p,t,{components:e,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"JDBC\ub97c \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uba85\ub839\uc744 \uc2e4\ud589\ud55c\ub2e4. ","[hive]"," \ub178\ub4dc\ubcf4\ub2e4 \ub354 \ud655\uc7a5\ub41c \uae30\ub2a5\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[distcp]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[Note]"),Object(o.b)("br",{parentName:"p"}),"\n","Hadoop \uae30\ubc18\uc73c\ub85c Data Lake\ub97c \uad6c\ucd95\ud55c site\uc758 \uacbd\uc6b0 Data Lake \ub0b4 hive\uc5d0 \uc811\uc18d\ud558\uc5ec ETL \uc791\uc5c5\uc744 \uc9c1\uc811 \uc218\ud589\ud560 \uc218 \uc788\ub2e4.",Object(o.b)("br",{parentName:"p"}),"\n","\uae30\uc874 ETL \uac1c\ubc1c\uc790\ub4e4\uc774 \uc0ac\uc6a9\ud558\uae30 \uc6a9\uc774\ud558\ub098, Query \uc219\ub828\ub3c4\uc5d0 \uc131\ub2a5\ucc28\uc774\uac00 \ub9ce\uc774 \ub0a0 \uc218 \uc788\uc74c\uc5d0 \uc720\uc758\ud55c\ub2e4. ")),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow004_executehive_property.png",alt:"flow004"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(o.b)("li",{parentName:"ol"},"cluster : Hive\ub97c \uc218\ud589\ud560 \ud074\ub7ec\uc2a4\ud130(\uc9c1\uc811 \uc785\ub825 \uc120\ud0dd\uc2dc 3,4,5 \uc815\ubcf4 \uc9c1\uc811 \uc785\ub825)"),Object(o.b)("li",{parentName:"ol"},"url : HIVE \uc811\uc18d \uc8fc\uc18c(JDBC URL). jdbc:hive2://hdp-master01:10000"),Object(o.b)("li",{parentName:"ol"},"user\t: Hive \uc0ac\uc6a9\uc790 \uc774\ub984\t"),Object(o.b)("li",{parentName:"ol"},"password\t: Hive \uc0ac\uc6a9\uc790 \uc554\ud638"),Object(o.b)("li",{parentName:"ol"},"sql : \ub370\uc774\ud130\ub97c \uac00\uc838\uc624\uae30 \uc704\ud55c SQL \uc785\ub825(select \ucffc\ub9ac\ub294 \uc2e4\ud589\ud560 \uc218 \uc5c6\uc74c)  "),Object(o.b)("li",{parentName:"ol"},"version : Hive \ubc84\uc804(1.2.1, 3.1.1 \uc911 \ud0dd1)"),Object(o.b)("li",{parentName:"ol"},"retry",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc2e4\ud589 \uc2e4\ud328 \uc2dc \uc7ac\uc2dc\ub3c4 \ud69f\uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc2dc\ub3c4 \uc8fc\uae30(\ubd84 \ub2e8\uc704)"))),Object(o.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(o.b)("h3",{id:"example"},"Example"),Object(o.b)("p",null,"Hive\uc5d0 \uc800\uc7a5\ub41c iris \ud14c\uc774\ube14\uc744 \uae30\ubc18\uc73c\ub85c iris_testqf\ub77c\ub294 \uc2e0\uaddc\ud14c\uc774\ube14\uc744 \uc0dd\uc131\ud55c\ub2e4. "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow034_executehive_%EC%88%98%ED%96%89%EB%8C%80%EC%83%81%ED%85%8C%EC%9D%B4%EB%B8%94%EC%A0%95%EB%B3%B4.png",alt:"flow034"}))),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"[\ube0c\ub77c\uc6b0\uc800]"," > ","[HIVE]"," \uc5d0\uc11c test1234 \ud074\ub7ec\uc2a4\ud130 Hive \uacc4\uc815\uc758 iris \ud14c\uc774\ube14 \ub0b4\uc5ed\uc744 \ud655\uc778\ud55c\ub2e4. ")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow035_executehive_property%EC%9E%85%EB%A0%A5%EC%83%81%EC%84%B8.png",alt:"flow035"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"[2.cluster]","\uc5d0\uc11c hive\uac00 \uc704\uce58\ud55c \ud074\ub7ec\uc2a4\ud130\ub97c \uc120\ud0dd. \ud074\ub7ec\uc2a4\ud130 \uc120\ud0dd\uc2dc ","[3.url]",", ","[4.user]",", ","[5.password]"," \ud56d\ubaa9\uc740 \uc790\ub3d9 \uc120\ud0dd\ub41c\ub2e4. "),Object(o.b)("li",{parentName:"ol"},"[6.sql]","\uc5d0 \ucffc\ub9ac\ub97c \uc785\ub825\ud55c\ub2e4. \uc624\ub978\ucabd ","[query editor]","\ubc84\ud2bc \ud074\ub9ad\ud558\uc5ec \ud31d\uc5c5\ub41c editor\uc5d0\uc11c \uc9c1\uc811 \ucffc\ub9ac\ub97c \uc791\uc131\ud560 \uc218 \uc788\ub2e4. ")),Object(o.b)("p",null,"\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc2e4\ud589\uacb0\uacfc\ub85c \uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14\uc774 \uc0dd\uc131\ub410\ub2e4.  "),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow036_executehive_%EC%B5%9C%EC%A2%85%EA%B2%B0%EA%B3%BC%ED%99%95%EC%9D%B8.png",alt:"flow036"}))))}l.isMDXComponent=!0},342:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):a({},t,{},e)),r},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,c=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),O=n,f=u["".concat(c,".").concat(O)]||u[O]||s[O]||i;return r?o.a.createElement(f,a({ref:t},l,{components:r})):o.a.createElement(f,a({ref:t},l))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,c=new Array(i);c[0]=O;var a={};for(var p in t)hasOwnProperty.call(t,p)&&(a[p]=t[p]);a.originalType=e,a.mdxType="string"==typeof e?e:n,c[1]=a;for(var l=2;l<i;l++)c[l]=r[l];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}O.displayName="MDXCreateElement"}}]);