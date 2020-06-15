(window.webpackJsonp=window.webpackJsonp||[]).push([[236],{328:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return b}));var n=r(1),i=r(6),o=(r(0),r(368)),a={title:"hive"},c={id:"batchpipeline/workflow/workspace/job-processing/hive",title:"hive",description:"### Definition",source:"@site/docs/batchpipeline/workflow/workspace/job-processing/hive.md",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hive",sidebar:"batchpipeline",previous:{title:"hiveToHdfs",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/hive-to-hdfs"},next:{title:"java",permalink:"/docs/batchpipeline/workflow/workspace/job-processing/java"}},p=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example 1. query \uc785\ub825",id:"example-1-query-\uc785\ub825",children:[]},{value:"Example 2. script \ud65c\uc6a9",id:"example-2-script-\ud65c\uc6a9",children:[]}],l={rightToc:p};function b(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},l,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"definition"},"Definition"),Object(o.b)("p",null,"hive \ucffc\ub9ac\ub97c \uc218\ud589\ud558\ub294 \ub178\ub4dc\ub85c, \uc9c1\uc811 \uc785\ub825 \ubc29\uc2dd\uacfc \uc2a4\ud06c\ub9bd\ud2b8 \ud30c\uc77c \ubd88\ub7ec\uc624\uae30 \ubc29\uc2dd\uc744 \uc9c0\uc6d0\ud55c\ub2e4. \uc88c\uce21 ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[hive]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(o.b)("h3",{id:"set"},"Set"),Object(o.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(o.b)("h4",{id:"property"},"property"),Object(o.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow010_hive_property.png",alt:"flow010"}))),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"prepare : \ub178\ub4dc \uc2e4\ud589 \uacb0\uacfc\ub97c HDFS\uc5d0 \uc800\uc7a5\ud558\uae30 \uc704\ud574 \ud30c\uc77c\uc0ad\uc81c/\ud3f4\ub354\uc0dd\uc131 \uc791\uc5c5 \uc120 \uc218\ud589(\uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc18\ubcf5\uc2e4\ud589 \uc2dc \ud65c\uc6a9\uac00\ub2a5)",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"delete : \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0ad\uc81c\ud560 \ud3f4\ub354/\ud30c\uc77c \uacbd\ub85c"),Object(o.b)("li",{parentName:"ul"},"mkdir\t: \ub178\ub4dc \uc2e4\ud589 \uc804 \uc0dd\uc131\ud560 \ud3f4\ub354 \uacbd\ub85c\t"))),Object(o.b)("li",{parentName:"ol"},"file : \ub178\ub4dc\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub77c\uc774\ube0c\ub7ec\ub9ac \uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"archivce : archive\uacbd\ub85c\ub97c \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"retry : \uc7ac\uc218\ud589 \ud69f\uc218 \ubc0f \uac04\uaca9",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"max : \uc7ac\uc218\ud589 \ud69f \uc218"),Object(o.b)("li",{parentName:"ul"},"period : \uc7ac\uc218\ud589 \uac04\uaca9"))),Object(o.b)("li",{parentName:"ol"},"jobXml : jobxml\uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"configuration : \uc2e4\ud589\uc5d0 \uc0ac\uc6a9\ud560 \uc18d\uc131 (key, value) \uc785\ub825"),Object(o.b)("li",{parentName:"ol"},"hiveExecute (inputType : query, script \uc911 \ud0dd1) ",Object(o.b)("ul",{parentName:"li"},Object(o.b)("li",{parentName:"ul"},"query: query \uc785\ub825 (query editor \uc0ac\uc6a9\uac00\ub2a5) "),Object(o.b)("li",{parentName:"ul"},"script: scriptFile \uacbd\ub85c \uc120\ud0dd"))),Object(o.b)("li",{parentName:"ol"},"param : \ud30c\ub77c\ubbf8\ud130 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"argument : \uc778\uc218 \uc124\uc815"),Object(o.b)("li",{parentName:"ol"},"forceOK : \uc2e4\ud328 \uc2dc \uac15\uc81c OK \ucc98\ub9ac \uc5ec\ubd80")),Object(o.b)("p",null,"Oozie\uc5d0\uc11c \uc81c\uacf5\ud558\ub294 \uae30\ub2a5\uc73c\ub85c JDBC\ub97c \ud65c\uc6a9\ud558\uc5ec \uc6d0\uaca9\uc5d0 \uc788\ub294 Hive \ud14c\uc774\ube14\uc5d0 \ub300\ud55c \uba85\ub839\uc744 \uc218\ud589\ud558\uae30 \uc704\ud574\uc11c\ub294 ","[executeHive]","\ub178\ub4dc\ub97c, Hive \ud14c\uc774\ube14\uc744 HDFS\ub85c \uac00\uc838\uc624\ub294 \uae30\ub2a5\uc740 ","[hivetohdfs]","\ub178\ub4dc\ub97c \uc0ac\uc6a9\ud55c\ub2e4. "),Object(o.b)("h3",{id:"example-1-query-\uc785\ub825"},"Example 1. query \uc785\ub825"),Object(o.b)("p",null,"inputType\uc744 query\ub85c \uc120\ud0dd\ud560 \uacbd\uc6b0 \ud558\ub2e8 queryContent \ubc15\uc2a4\uc5d0 \uc9c1\uc811 sql\uc744 \uc785\ub825\ud55c\ub2e4. \ucffc\ub9ac\ub0b4\uc6a9\uc774 \uae38 \uacbd\uc6b0 \uc6b0\uce21 ","[Query Editor]","\ucc3d \ud074\ub9ad\uc2dc \ud31d\uc5c5\ub41c \uc5d0\ub514\ud130\uc5d0\uc11c \uc791\uc5c5\ud560 \uc218 \uc788\ub2e4. "),Object(o.b)("p",null,"[fork]",'\ub178\ub4dc example \uc791\uc131\uc2dc \uc0ac\uc6a9\ud55c "\uc11c\uc6b8\ud2b9\ubcc4\uc2dc \ub300\uae30\uc624\uc5fc \uce21\uc815\uc815\ubcf4" \ub370\uc774\ud130(air_pollution)\uc911 \uc885\ub85c\uad6c \uc18c\uc7ac\uc9c0 \uad00\uce21\uc18c\uc5d0\uc11c \uce21\uc815\ud55c \ub370\uc774\ud130\ub9cc \ucd94\ucd9c\ud574\uc11c \uc0c8\ub85c\uc6b4 \ud14c\uc774\ube14 "air_pollution_jongno"\ud14c\uc774\ube14\uc744 \ub9cc\ub4e0\ub2e4. \ud14c\uc774\ube14 \uc0dd\uc131\uc2dc \uc0ac\uc6a9\ud560 query\ub294 \uc544\ub798\uc640 \uac19\ub2e4. '),Object(o.b)("pre",null,Object(o.b)("code",Object(n.a)({parentName:"pre"},{}),"create table air_pollution_jongno \n           as select * from air_pollution \n           where station_cd = '101'  -- \uc885\ub85c\uad6c(\uc885\ub85c\uad6c \uc885\ub85c35\uac00\uae38 19) \uc18c\uc7ac \uad00\uce21\uc18c \ucf54\ub4dc\n")),Object(o.b)("p",null,Object(o.b)("img",Object(n.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow052_hive_query%EC%9E%85%EB%A0%A5%EB%B0%A9%EC%8B%9D.png",alt:"flow052"}))),Object(o.b)("h3",{id:"example-2-script-\ud65c\uc6a9"},"Example 2. script \ud65c\uc6a9"),Object(o.b)("p",null,"\uc791\uc5c5\ud574\uc57c \ud560 \ucffc\ub9ac\uac00 \ub9ce\uc744 \uacbd\uc6b0 hql \ub4f1\uc744 \ubbf8\ub9ac \ub9cc\ub4e4\uc5b4 \uc0ac\uc6a9\ud560 \uc218 \uc788\ub2e4. inputType\uc744 script\ub85c \uc120\ud0dd\ud55c \ub2e4\uc74c \uc0ac\uc804\uc5d0 \uc900\ube44\ub41c \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc120\ud0dd\ud55c\ub2e4.  "),Object(o.b)("blockquote",null,Object(o.b)("p",{parentName:"blockquote"},Object(o.b)("strong",{parentName:"p"},"[Note]"," \uc720\uc758\uc0ac\ud56d"),Object(o.b)("br",{parentName:"p"}),"\n","\uc2e4\ud589\ud560 \uc2a4\ud06c\ub9bd\ud2b8\ub97c hdfs\uc5d0 \uba3c\uc800 \uc800\uc7a5\ud574\uc57c \ud55c\ub2e4. HDFS \ube0c\ub77c\uc6b0\uc800 \ub610\ub294 \ud130\ubbf8\ub110\uc5d0\uc11c hadoop fs -put \ub4f1\uc758 \uba85\ub839\uc5b4\ub97c \ud65c\uc6a9\ud558\uc5ec \uc0ac\uc804\uc5d0 \ub4f1\ub85d\ud55c\ub2e4. ")))}b.isMDXComponent=!0},368:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return O}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var l=i.a.createContext({}),b=function(e){var t=i.a.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},u=function(e){var t=b(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=b(r),m=n,O=u["".concat(a,".").concat(m)]||u[m]||s[m]||o;return r?i.a.createElement(O,c({ref:t},l,{components:r})):i.a.createElement(O,c({ref:t},l))}));function O(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=m;var c={};for(var p in t)hasOwnProperty.call(t,p)&&(c[p]=t[p]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var l=2;l<o;l++)a[l]=r[l];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);