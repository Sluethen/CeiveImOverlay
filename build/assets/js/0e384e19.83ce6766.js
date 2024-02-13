"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[671],{3905:(e,n,r)=>{r.d(n,{Zo:()=>s,kt:()=>y});var t=r(67294);function o(e,n,r){return n in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function a(e,n){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),r.push.apply(r,t)}return r}function l(e){for(var n=1;n<arguments.length;n++){var r=null!=arguments[n]?arguments[n]:{};n%2?a(Object(r),!0).forEach((function(n){o(e,n,r[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(r,n))}))}return e}function i(e,n){if(null==e)return{};var r,t,o=function(e,n){if(null==e)return{};var r,t,o={},a=Object.keys(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||(o[r]=e[r]);return o}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(t=0;t<a.length;t++)r=a[t],n.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=t.createContext({}),u=function(e){var n=t.useContext(c),r=n;return e&&(r="function"==typeof e?e(n):l(l({},n),e)),r},s=function(e){var n=u(e.components);return t.createElement(c.Provider,{value:n},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},d=t.forwardRef((function(e,n){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=u(r),d=o,y=p["".concat(c,".").concat(d)]||p[d]||m[d]||a;return r?t.createElement(y,l(l({ref:n},s),{},{components:r})):t.createElement(y,l({ref:n},s))}));function y(e,n){var r=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var c in n)hasOwnProperty.call(n,c)&&(i[c]=n[c]);i.originalType=e,i[p]="string"==typeof e?e:o,l[1]=i;for(var u=2;u<a;u++)l[u]=r[u];return t.createElement.apply(null,l)}return t.createElement.apply(null,r)}d.displayName="MDXCreateElement"},59881:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>u});var t=r(87462),o=(r(67294),r(3905));const a={},l="Intro",i={unversionedId:"intro",id:"intro",title:"Intro",description:"CeiveImOverlay is a quick and easy way of creating a debug overlay for miscellaneous information. No need to create your own ui or keep track of connections, simply call 3 functions and you have all the information you could ever need.",source:"@site/docs/intro.md",sourceDirName:".",slug:"/intro",permalink:"/CeiveImOverlay/docs/intro",draft:!1,editUrl:"https://github.com/JakeyWasTaken/CeiveImOverlay/edit/master/docs/intro.md",tags:[],version:"current",frontMatter:{},sidebar:"defaultSidebar"},c={},u=[],s={toc:u},p="wrapper";function m(e){let{components:n,...r}=e;return(0,o.kt)(p,(0,t.Z)({},s,r,{components:n,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"intro"},"Intro"),(0,o.kt)("p",null,"CeiveImOverlay is a quick and easy way of creating a debug overlay for miscellaneous information. No need to create your own ui or keep track of connections, simply call 3 functions and you have all the information you could ever need."),(0,o.kt)("p",null,"The BackFrame has to be re-parented to a screen gui for CeiveImOverlay to work."),(0,o.kt)("p",null,"A basic integration of CeiveImOverlay would be as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local RunService = game:GetService("RunService")\nlocal CeiveImOverlay = require(...)\nlocal ImOverlay = CeiveImOverlay.new()\n\nImOverlay.BackFrame.Parent = AScreenGui\n\n-- Could be heartbeat or render stepped, doesnt really matter.\nRunService.RenderStepped:Connect(function()\n    ImOverlay:Text("Hello World!")\n\n    ImOverlay:Render()\nend)\n')),(0,o.kt)("p",null,"Which would result in this:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://github.com/JakeyWasTaken/CeiveImOverlay/blob/main/docs/assets/basic_example.png?raw=true"})),(0,o.kt)("p",null,"A more complex integration could look something like this:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'local RunService = game:GetService("RunService")\nlocal CeiveImOverlay = require(...)\nlocal ImOverlay = CeiveImOverlay.new()\n\nImOverlay.BackFrame.Parent = AScreenGui\n\n-- Could be heartbeat or render stepped, doesnt really matter.\nRunService.RenderStepped:Connect(function()\n    for i = 1, 10 do\n        ImOverlay:Begin(`Recursive {i}`)\n    end\n\n    ImOverlay:Text("Im ontop of the world!")\n\n    for _ = 1, 10 do\n        ImOverlay:End()\n    end\n\n    ImOverlay:Render()\nend)\n')),(0,o.kt)("p",null,"Which would result in this:"),(0,o.kt)("div",{align:"center"},(0,o.kt)("img",{src:"https://github.com/JakeyWasTaken/CeiveImOverlay/blob/main/docs/assets/complex_example.png?raw=true"})))}m.isMDXComponent=!0}}]);