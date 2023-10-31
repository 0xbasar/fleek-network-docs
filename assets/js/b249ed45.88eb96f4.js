"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[5767],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>h});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),s=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=s(e.components);return r.createElement(c.Provider,{value:t},e.children)},d="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),d=s(n),p=o,h=d["".concat(c,".").concat(p)]||d[p]||u[p]||a;return n?r.createElement(h,i(i({ref:t},m),{},{components:n})):r.createElement(h,i({ref:t},m))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=p;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[d]="string"==typeof e?e:o,i[1]=l;for(var s=2;s<a;s++)i[s]=n[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},2915:(e,t,n)=>{n.d(t,{ZP:()=>l});var r=n(7462),o=(n(7294),n(3905));const a={toc:[]},i="wrapper";function l(e){let{components:t,...n}=e;return(0,o.kt)(i,(0,r.Z)({},a,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"You have several ways of doing this:"),(0,o.kt)("ul",{parentName:"admonition"},(0,o.kt)("li",{parentName:"ul"},"Clone via HTTPS"),(0,o.kt)("li",{parentName:"ul"},"Clone via SSH"),(0,o.kt)("li",{parentName:"ul"},"Download via Github CLI"),(0,o.kt)("li",{parentName:"ul"},"Download the ",(0,o.kt)("a",{parentName:"li",href:"https://github.com/fleek-network/lightning/archive/refs/heads/main.zip"},"zip package")," from the repository")),(0,o.kt)("p",{parentName:"admonition"},"We recommend HTTPS because it is the easiest to set up in the wild, and by users who are new to all this.\nAlthough, we strongly recommend using an SSH connection when interacting with GitHub. If you are to this and are interested read more about it ",(0,o.kt)("a",{parentName:"p",href:"https://docs.github.com/en/authentication/connecting-to-github-with-ssh"},"here"),"."),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git <DIRECTORY-NAME>\n")),(0,o.kt)("p",{parentName:"admonition"},"At time of writing, we are checking the branch name ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet-alpha-1")," that corresponds to the testnet phase.\nHere's an example of what it'd look like when sticking to the recommended path location:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git clone -b testnet-alpha-1 https://github.com/fleek-network/lightning.git ~/fleek-network/lightning\n"))))}l.isMDXComponent=!0},6655:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>m});var r=n(7462),o=(n(7294),n(3905)),a=n(3872);n(2915);const i={title:"Uninstall Docker Setup",slug:"uninstall-docker-setup",hide_title:!0,tags:["references","help","docker","image","container"]},l=void 0,c={unversionedId:"Docker/uninstall-docker-setup",id:"Docker/uninstall-docker-setup",title:"Uninstall Docker Setup",description:"Remove the source code locally",source:"@site/references/Docker/uninstall-docker-setup.md",sourceDirName:"Docker",slug:"/Docker/uninstall-docker-setup",permalink:"/references/Docker/uninstall-docker-setup",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/references/Docker/uninstall-docker-setup.md",tags:[{label:"references",permalink:"/references/tags/references"},{label:"help",permalink:"/references/tags/help"},{label:"docker",permalink:"/references/tags/docker"},{label:"image",permalink:"/references/tags/image"},{label:"container",permalink:"/references/tags/container"}],version:"current",lastUpdatedAt:1698772256,formattedLastUpdatedAt:"Oct 31, 2023",frontMatter:{title:"Uninstall Docker Setup",slug:"uninstall-docker-setup",hide_title:!0,tags:["references","help","docker","image","container"]},sidebar:"defaultSidebar",previous:{title:"Build and run in Docker",permalink:"/references/Docker/build-and-run-in-docker"},next:{title:"Error building on ARM64",permalink:"/references/Lightning CLI/error-building-on-arm64"}},s={},m=[{value:"Remove the source code locally",id:"remove-the-source-code-locally",level:2},{value:"Stop the Docker service",id:"stop-the-docker-service",level:2},{value:"Confirm the Docker service status",id:"confirm-the-docker-service-status",level:2},{value:"Reload the daemon",id:"reload-the-daemon",level:2},{value:"Remove the Systemd Service Unit file",id:"remove-the-systemd-service-unit-file",level:2},{value:"Delete the Docker image",id:"delete-the-docker-image",level:2},{value:"Uninstall Docker",id:"uninstall-docker",level:2},{value:"Manage keys",id:"manage-keys",level:2},{value:"Remove the logs",id:"remove-the-logs",level:2}],d={toc:m},u="wrapper";function p(e){let{components:t,...n}=e;return(0,o.kt)(u,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"remove-the-source-code-locally"},"Remove the source code locally"),(0,o.kt)("p",null,"For users who build the Docker image from source-code."),(0,o.kt)("p",null,"Assuming the default installation source-code path ",(0,o.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning"),", run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf ~/fleek-network/lightning\n")),(0,o.kt)("p",null,"If you have a custom path, you need to change the pathname to the correct path you have selected during your custom install."),(0,o.kt)("h2",{id:"stop-the-docker-service"},"Stop the Docker service"),(0,o.kt)("p",null,"The Fleek Network recommends systemctl to manage the services, either natively or docker. It's an interface that is easily to translate across the setups, and to communicate to the users in a common manner."),(0,o.kt)("p",null,"If you have followed the recommendations, you should have the Systemd Unit Service setup."),(0,o.kt)("p",null,"To stop the service run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl stop docker-lightning\n")),(0,o.kt)("h2",{id:"confirm-the-docker-service-status"},"Confirm the Docker service status"),(0,o.kt)("p",null,"Check the status by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl status docker-lightning\n")),(0,o.kt)("p",null,"Disable the service by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl disable docker-lightning\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Once stop, you can run the following command to confirm it is not running. If you have used the recommended container name ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning-node")," the command you'd have to execute is:"),(0,o.kt)("p",{parentName:"admonition"},"You can check the Docker container isn't running by running the following command. Notice that we are assuming that your docker container name is the default ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning-node"),". If you have customized the name use the correct selected name:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre"},"sudo docker container inspect -f '{{.State.Running}}' lightning-node\n"))),(0,o.kt)("h2",{id:"reload-the-daemon"},"Reload the daemon"),(0,o.kt)("p",null,"Reload the daemon by:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo systemctl daemon-reload\n")),(0,o.kt)("h2",{id:"remove-the-systemd-service-unit-file"},"Remove the Systemd Service Unit file"),(0,o.kt)("p",null,"If you have followed the recommendations, you should find the Systemd Service Unit file at:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/etc/systemd/system/docker-lightning\n")),(0,o.kt)("p",null,"To remove the file, run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo rm -f /etc/systemd/system/docker-lightning\n")),(0,o.kt)("h2",{id:"delete-the-docker-image"},"Delete the Docker image"),(0,o.kt)("p",null,"For our example, we'll assume that the Docker image for Fleek Network is the default ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning-node"),". If you have created the image under a different name, change in accordance to your preference."),(0,o.kt)("p",null,"Delete the image by running the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo docker rmi $(docker images | grep 'lightning-node')\n")),(0,o.kt)("p",null,"To learn more about the docker image remove command, visit the official documentation ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/engine/reference/commandline/image_rm/"},"here")),(0,o.kt)("h2",{id:"uninstall-docker"},"Uninstall Docker"),(0,o.kt)("p",null,"Uninstalling Docker should only be performed if you don't need in your system. If you already had Docker for some purpose, you should not have to uninstall it."),(0,o.kt)("p",null,"Visit the Docker official documentation site for uninstall instructions ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/desktop/uninstall/"},"here"),"."),(0,o.kt)("h2",{id:"manage-keys"},"Manage keys"),(0,o.kt)("p",null,"The configuration directory of Fleek Network is in the host machine file system. This is the directory where you can find the ",(0,o.kt)("inlineCode",{parentName:"p"},"config.toml"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"keystore")," for the public keys, amongst others. "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/home/<USERNAME>/.lightning\n")),(0,o.kt)("p",null,"For example, for the user ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," the location of these files is:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/home/lgtn/.lightning\n")),(0,o.kt)("admonition",{title:"warning",type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"The directory can be deleted but have in mind that the keystore is located here. If you need to backup the keystore, be careful as this is not possible to recover by anyone. The keys are your responsibility.")),(0,o.kt)("p",null,"To learn more about the keystore read the guide ",(0,o.kt)("a",{parentName:"p",href:"/guides/Node%20Operators/managing-the-keystore"},"managing the keystore"),"."),(0,o.kt)("p",null,"If you are happy to delete the directory, run the following command by replacing the ",(0,o.kt)("inlineCode",{parentName:"p"},"<USERNAME>")," by yours:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"rm -rf /home/<USERNAME>/.lightning\n")),(0,o.kt)("h2",{id:"remove-the-logs"},"Remove the logs"),(0,o.kt)("p",null,"The Docker container generates output to stdout and stderr. All the content is stored in the location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"/var/log/lightning\n")),(0,o.kt)("p",null,"To completely remove the directory run the command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo rm -rf /var/log/lightning\n")),(0,o.kt)(a.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}p.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var r=n(7294);const o=e=>{let{image:t,name:n,title:o,url:a,communityMember:i=!1}=e;return r.createElement("section",{className:"author_card"},r.createElement("div",null,r.createElement("span",{className:"avatar"},r.createElement("a",{href:a,target:"_blank",alt:n},r.createElement("img",{src:t,alt:n}))),r.createElement("div",null,r.createElement("span",{className:"name"},r.createElement("a",{href:a,target:"_blank",alt:n},n)),r.createElement("span",{className:"title"},o),r.createElement("span",{className:"discord"},i?"Join our community on":"Got questions? Find us on"," ",r.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}}}]);