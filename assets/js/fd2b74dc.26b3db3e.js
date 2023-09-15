"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[4846],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},p="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=o,f=p["".concat(l,".").concat(m)]||p[m]||u[m]||a;return n?r.createElement(f,s(s({ref:t},d),{},{components:n})):r.createElement(f,s({ref:t},d))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[p]="string"==typeof e?e:o,s[1]=i;for(var c=2;c<a;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},6578:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>m,frontMatter:()=>s,metadata:()=>l,toc:()=>d});var r=n(7462),o=(n(7294),n(3905)),a=n(3872);const s={title:"Keys not found",slug:"keys-not-found",hide_title:!0,tags:["keystore","lost keys","ownership","file permissions"]},i=void 0,l={unversionedId:"Lightning CLI/keys-not-found",id:"Lightning CLI/keys-not-found",title:"Keys not found",description:"Node key does not exist",source:"@site/references/Lightning CLI/keys-not-found.md",sourceDirName:"Lightning CLI",slug:"/Lightning CLI/keys-not-found",permalink:"/references/Lightning CLI/keys-not-found",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Lightning CLI/keys-not-found.md",tags:[{label:"keystore",permalink:"/references/tags/keystore"},{label:"lost keys",permalink:"/references/tags/lost-keys"},{label:"ownership",permalink:"/references/tags/ownership"},{label:"file permissions",permalink:"/references/tags/file-permissions"}],version:"current",lastUpdatedAt:1694781217,formattedLastUpdatedAt:"Sep 15, 2023",frontMatter:{title:"Keys not found",slug:"keys-not-found",hide_title:!0,tags:["keystore","lost keys","ownership","file permissions"]},sidebar:"defaultSidebar",previous:{title:"File permissions and Ownership",permalink:"/references/Lightning CLI/file-permissions-and-ownership"},next:{title:"Backing up the keystore",permalink:"/references/Lightning CLI/backing-up-the-keystore"}},c={},d=[{value:"Node key does not exist",id:"node-key-does-not-exist",level:2}],p={toc:d},u="wrapper";function m(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},p,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"node-key-does-not-exist"},"Node key does not exist"),(0,o.kt)("p",null,'When watching the Fleek Network Lightning service log output, you find the "Node key does not exist" message placed recursively. As follows:'),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"thread 'main' panicked at 'Node key does not exist. Use CLI to generate keys.', core/node/src/testnet_sync.rs:126:9\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\nthread 'main' panicked at 'Node key does not exist. Use CLI to generate keys.', core/node/src/testnet_sync.rs:126:9\nnote: run with `RUST_BACKTRACE=1` environment variable to display a backtrace\n")),(0,o.kt)("p",null,"If you haven't deleted the keystore and can locate it, it's due to how the service is being run. As a user can delegate (sudo) the execution of the process to ",(0,o.kt)("strong",{parentName:"p"},"root"),", the location of the keystore differs on runtime."),(0,o.kt)("p",null,"To learn more about how file permissions and ownership work, you're advised to read the reference document ",(0,o.kt)("a",{parentName:"p",href:"/references/Lightning%20CLI/file-permissions-and-ownership"},"here"),"."),(0,o.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}m.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=e=>{let{image:t,name:n,title:o,url:a,communityMember:s=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:a,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:a,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},o),r.createElement("span",{className:"discord"},s?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);