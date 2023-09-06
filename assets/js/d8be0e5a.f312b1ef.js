"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[1706],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>f});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),s=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(o.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,o=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(r),g=a,f=u["".concat(o,".").concat(g)]||u[g]||d[g]||i;return r?n.createElement(f,l(l({ref:t},p),{},{components:r})):n.createElement(f,l({ref:t},p))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=g;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c[u]="string"==typeof e?e:a,l[1]=c;for(var s=2;s<i;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},4458:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>p});var n=r(7462),a=(r(7294),r(3905)),i=r(3872);const l={title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},c=void 0,o={unversionedId:"Lightning CLI/error-linking-with-cc-failed",id:"Lightning CLI/error-linking-with-cc-failed",title:"Error linking with cc",description:"\x3c!--",source:"@site/references/Lightning CLI/error-linking-with-cc-failed.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/error-linking-with-cc-failed-exist-status-1",permalink:"/references/Lightning CLI/error-linking-with-cc-failed-exist-status-1",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/error-linking-with-cc-failed.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"update",permalink:"/references/tags/update"},{label:"upgrade",permalink:"/references/tags/upgrade"},{label:"fix",permalink:"/references/tags/fix"}],version:"current",lastUpdatedAt:1694025130,formattedLastUpdatedAt:"Sep 6, 2023",frontMatter:{title:"Error linking with cc",slug:"error-linking-with-cc-failed-exist-status-1",hide_title:!0,tags:["references","help","update","upgrade","fix"]},sidebar:"defaultSidebar",previous:{title:"About references",permalink:"/references/"},next:{title:"Uninstall Lightning CLI",permalink:"/references/Lightning CLI/uninstall-lightning-cli"}},s={},p=[{value:"Linking with cc error",id:"linking-with-cc-error",level:2},{value:"Update",id:"update",level:2},{value:"Run the installation script",id:"run-the-installation-script",level:2}],u={toc:p};function d(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},u,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h2",{id:"linking-with-cc-error"},"Linking with cc error"),(0,a.kt)("p",null,"A user who finds the error ",(0,a.kt)("inlineCode",{parentName:"p"},"linking with cc failed"),", will have to install the required dependencies."),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"error: linking with `cc` failed: exit status: 1\nerror: could not compile `fleek-service-ping-example` (lib) due to previous error\n")),(0,a.kt)("p",null,"##\xa0Install ",(0,a.kt)("inlineCode",{parentName:"p"},"gcc"),":"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get install gcc\n")),(0,a.kt)("h2",{id:"update"},"Update"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"sudo apt-get update\n")),(0,a.kt)("p",null,"##\xa0Remove previous installation files"),(0,a.kt)("p",null,"You can re-run the installation process. If you are using the assisted installer, it'll complain that the source code directory already exists. Since you've probably cloned the source code repository locally, you'll have to remove it manually. If you need help, find the instructions in the ",(0,a.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/uninstall-lightning-cli"},"reference"),"."),(0,a.kt)("h2",{id:"run-the-installation-script"},"Run the installation script"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"curl https://get.fleek.network | bash\n")),(0,a.kt)("p",null,"Alternatively, read the ",(0,a.kt)("a",{parentName:"p",href:"/docs/node/install#manual-installation"},"manual installation instructions")," for more information."),(0,a.kt)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}d.isMDXComponent=!0},3872:(e,t,r)=>{r.d(t,{Z:()=>a});var n=r(7294);const a=e=>{let{image:t,name:r,title:a,url:i}=e;return n.createElement("section",{className:"author_card"},n.createElement("div",null,n.createElement("span",{className:"avatar"},n.createElement("a",{href:i,target:"_blank",alt:r},n.createElement("img",{src:t,alt:r}))),n.createElement("div",null,n.createElement("span",{className:"name"},n.createElement("a",{href:i,target:"_blank",alt:r},r)),n.createElement("span",{className:"title"},a),n.createElement("span",{className:"discord"},"Got questions? Find us on ",n.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"Discord!")))))}}}]);