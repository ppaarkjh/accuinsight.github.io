(window.webpackJsonp=window.webpackJsonp||[]).push([[120],{211:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return a})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return c})),r.d(t,"default",(function(){return b}));var o=r(1),n=r(6),l=(r(0),r(369)),a={title:"subWorkflow"},i={id:"pipeline/workflow/workspace/job-processing/sub-workflow",title:"subWorkflow",description:"### Definition",source:"@site/docs/pipeline/workflow/workspace/job-processing/sub-workflow.md",permalink:"/docs/pipeline/workflow/workspace/job-processing/sub-workflow",sidebar:"pipeline",previous:{title:"ssh",permalink:"/docs/pipeline/workflow/workspace/job-processing/ssh"},next:{title:"detail",permalink:"/docs/pipeline/workflow/management/detail"}},c=[{value:"Definition",id:"definition",children:[]},{value:"Set",id:"set",children:[]},{value:"Example",id:"example",children:[]}],p={rightToc:c};function b(e){var t=e.components,r=Object(n.a)(e,["components"]);return Object(l.b)("wrapper",Object(o.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(l.b)("h3",{id:"definition"},"Definition"),Object(l.b)("p",null,"\ub2e4\ub978 \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ud558\ub098\uc758 Node\ub85c \uc2e4\ud589 \ud560 \uc218 \uc788\ub2e4. ","[Flow\uad6c\uc131]","\ub178\ub4dc \uc911 ","[subWorkflow]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. Property \ud328\ub110\uc758 ","[\ub354\ubcf4\uae30+]"," \ubc84\ud2bc\uc744 \ub204\ub974\uba74 \uc785\ub825\uac00\ub2a5\ud55c \uc804\uccb4  Property \ud56d\ubaa9\uc744 \ubcfc \uc218 \uc788\ub2e4."),Object(l.b)("p",null,"\ubaa9\ub85d \uc5f4\uae30\ub97c \ub204\ub974\uba74 \ubaa9\ub85d\uc774 \ud31d\uc5c5 \ub418\uace0 \uc774\uc911 \ud558\ub098\ub97c \uc120\ud0dd\ud558\uba74 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \ubc88\ud638\uac00 \uc785\ub825 \ub41c\ub2e4."),Object(l.b)("h3",{id:"set"},"Set"),Object(l.b)("p",null,"[setting]",", ","[scheduler]",", ","[parameter]"," \uc124\uc815\uc740 ","[\uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc0dd\uc131]"," > ","[\uc124\uc815]","\uc744 \ucc38\uace0\ud55c\ub2e4."),Object(l.b)("h4",{id:"property"},"property"),Object(l.b)("p",null,"[Node Description]"," \uc791\uc131 \uc911\uc778 \ub178\ub4dc\uba85 \uc785\ub825"),Object(l.b)("p",null,Object(l.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow024_subworkflow_property.png",alt:"flow024"}))),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"propagateConfiguration : subWorkflow \uc124\uc815 \uc804\ub2ec \uc5ec\ubd80 \uc120\ud0dd"),Object(l.b)("li",{parentName:"ol"},"appPath : subworkflow \ubaa9\ub85d\ucc3d\uc5d0\uc11c \ub300\uc0c1 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc120\ud0dd. \uc120\ud0dd\ud558\uba74 workflowId, workflowName\uc740 \uc790\ub3d9 \uc124\uc815\ub428"),Object(l.b)("li",{parentName:"ol"},"workflowId : \uc6cc\ud06c\ud50c\ub85c\uc6b0 ID"),Object(l.b)("li",{parentName:"ol"},"workflowName\t: \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uc774\ub984"),Object(l.b)("li",{parentName:"ol"},"configuration : key-value\ub85c \uc124\uc815"),Object(l.b)("li",{parentName:"ol"},"forceOK : \ub370\uc774\ud130 \ucc98\ub9ac\uac00 \uc2e4\ud328\ud574\ub3c4 \uc815\uc0c1\uc73c\ub85c \ud45c\uc2dc\ud558\uace0 \uc885\ub8cc")),Object(l.b)("h3",{id:"example"},"Example"),Object(l.b)("p",null,"executeHive(create table as select \ucffc\ub9ac \uc2e4\ud589)\ub178\ub4dc\uac00 \uc2e4\ud589\ub418\ub294 \uc6cc\ud06c\ud50c\ub85c\uc6b0(G1378)\ub97c subWorkflow\ub85c \uc124\uc815 \ud6c4 \uc2e4\ud589 \ubc0f \uacb0\uacfc\uae4c\uc9c0 \ud655\uc778\ud55c\ub2e4. "),Object(l.b)("ol",null,Object(l.b)("li",{parentName:"ol"},"executeHive workflow \uc0dd\uc131")),Object(l.b)("pre",null,Object(l.b)("code",Object(o.a)({parentName:"pre"},{}),"create table air_pollution_subworkflow_test \n             as select * from air_pollution limit 10\n")),Object(l.b)("p",null,Object(l.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow041_subworkflow_executehive%EB%85%B8%EB%93%9C%EA%B5%AC%EC%84%B1.png",alt:"flow041"}))),Object(l.b)("ol",{start:2},Object(l.b)("li",{parentName:"ol"},"[subWorkflow]","\ub178\ub4dc\ub97c drag & drop \ud55c \ud6c4 Property \ud56d\ubaa9\uc744 \uc785\ub825\ud55c\ub2e4. 1\ubc88\uc5d0\uc11c \uc791\uc131\ud55c \uc6cc\ud06c\ud50c\ub85c\uc6b0\ub97c \ucc3e\uc544 \ub4f1\ub85d\ud55c\ub2e4. ")),Object(l.b)("p",null,Object(l.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow042_subworkflow_subworkflow%EC%84%A0%ED%83%9D.png",alt:"flow042"}))),Object(l.b)("ol",{start:3},Object(l.b)("li",{parentName:"ol"},"subworkflow \uc2e4\ud589\uacb0\uacfc executeHive\ub178\ub4dc\uc5d0 \uc124\uc815\ud55c \ucffc\ub9ac\uac00 \uc815\uc0c1 \uc2e4\ud589\ub418\uc5c8\ub2e4. ")),Object(l.b)("p",null,Object(l.b)("img",Object(o.a)({parentName:"p"},{src:"/img/batchpipeline/workflow/workspace/job-processing/flow043_subworkflow_%EC%8B%A4%ED%96%89%EA%B2%B0%EA%B3%BC.png",alt:"flow043"}))))}b.isMDXComponent=!0},369:function(e,t,r){"use strict";r.d(t,"a",(function(){return u})),r.d(t,"b",(function(){return w}));var o=r(0),n=r.n(o);function l(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){l(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},l=Object.keys(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(o=0;o<l.length;o++)r=l[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=n.a.createContext({}),b=function(e){var t=n.a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},u=function(e){var t=b(e.components);return n.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},f=Object(o.forwardRef)((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,a=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=b(r),f=o,w=u["".concat(a,".").concat(f)]||u[f]||s[f]||l;return r?n.a.createElement(w,i({ref:t},p,{components:r})):n.a.createElement(w,i({ref:t},p))}));function w(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,a=new Array(l);a[0]=f;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,a[1]=i;for(var p=2;p<l;p++)a[p]=r[p];return n.a.createElement.apply(null,a)}return n.a.createElement.apply(null,r)}f.displayName="MDXCreateElement"}}]);