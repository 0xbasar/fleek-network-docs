"use strict";(self.webpackChunkdocta=self.webpackChunkdocta||[]).push([[8930],{3905:(e,t,n)=>{n.d(t,{Zo:()=>h,kt:()=>g});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},h=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),u=c(n),d=o,g=u["".concat(s,".").concat(d)]||u[d]||p[d]||i;return n?a.createElement(g,r(r({ref:t},h),{},{components:n})):a.createElement(g,r({ref:t},h))}));function g(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,r=new Array(i);r[0]=d;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[u]="string"==typeof e?e:o,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},389:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>p,contentTitle:()=>h,default:()=>k,frontMatter:()=>c,metadata:()=>u,toc:()=>d});var a=n(7462),o=(n(7294),n(3905)),i=n(3872);const r={toc:[]},l="wrapper";function s(e){let{components:t,...n}=e;return(0,o.kt)(l,(0,a.Z)({},r,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("admonition",{type:"warning"},(0,o.kt)("p",{parentName:"admonition"},"During testnet phase, you have to checkout to the testnet branch. For example, the first testnet branch name was ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/tree/testnet-alpha-0"},"testnet-alpha-0")," that you would have to be checked in order to run a node successfully. A list of the active branches can be found at anytime in the GitHub repository ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/branches"},"active branches"),". While we try our best to update documentation, guides, instructions or any other written content during development, there might be breaking changes that might take some time to reflect in our documents. To avoid disappointment, check into the correct branch or contribute by getting in touch with us, or sending a PR in the relevant context, thank you!")))}s.isMDXComponent=!0;const c={title:"Updating Lightning",hide_title:!0,slug:"updating-lightning",date:new Date("2023-09-19T12:00:00.000Z"),image:"./assets/updating-lightning.png?202309191740",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",category:"Tutorial",tags:["update","rebuild","guide","setup","configuration"]},h=void 0,u={unversionedId:"Node Operators/update-lightning",id:"Node Operators/update-lightning",title:"Updating Lightning",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",source:"@site/guides/Node Operators/update-lightning.md",sourceDirName:"Node Operators",slug:"/Node Operators/updating-lightning",permalink:"/guides/Node Operators/updating-lightning",draft:!1,editUrl:"https://github.com/fleek-network/fleek-network-docs/edit/main/guides/Node Operators/update-lightning.md",tags:[{label:"update",permalink:"/guides/tags/update"},{label:"rebuild",permalink:"/guides/tags/rebuild"},{label:"guide",permalink:"/guides/tags/guide"},{label:"setup",permalink:"/guides/tags/setup"},{label:"configuration",permalink:"/guides/tags/configuration"}],version:"current",lastUpdatedAt:1696352787,formattedLastUpdatedAt:"Oct 3, 2023",frontMatter:{title:"Updating Lightning",hide_title:!0,slug:"updating-lightning",date:"2023-09-19T12:00:00.000Z",image:"./assets/updating-lightning.png?202309191740",description:"A step-by-step guide to update the Lightning CLI from source code and Service setup",category:"Tutorial",tags:["update","rebuild","guide","setup","configuration"]},sidebar:"defaultSidebar",previous:{title:"Transfering setup ownership",permalink:"/guides/Node Operators/transfering-setup-ownership"}},p={image:n(2913).Z},d=[{value:"Introduction",id:"introduction",level:2},{value:"Pre-requisites",id:"pre-requisites",level:2},{value:"Pulling the latest changes",id:"pulling-the-latest-changes",level:2},{value:"Switch to installer username",id:"switch-to-installer-username",level:3},{value:"Change directory to the source code",id:"change-directory-to-the-source-code",level:3},{value:"Checkout to branch",id:"checkout-to-branch",level:3},{value:"Pull the latest changes",id:"pull-the-latest-changes",level:3},{value:"Build the binary from the source code",id:"build-the-binary-from-the-source-code",level:2},{value:"Checkup the symlink setup",id:"checkup-the-symlink-setup",level:2},{value:"Systemd service",id:"systemd-service",level:2},{value:"Verify the setup",id:"verify-the-setup",level:3},{value:"Launching the node as a systemd service",id:"launching-the-node-as-a-systemd-service",level:3},{value:"Health check",id:"health-check",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:d},m="wrapper";function k(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,a.Z)({},g,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Update Lightning",src:n(2913).Z,width:"1450",height:"816"})),(0,o.kt)("h2",{id:"introduction"},"Introduction"),(0,o.kt)("p",null,"Fleek Network's Lightning source code is updated frequently and thus keeping up with changes can be a bit of a chore and especially difficult for users who are trying to have it compiled for the first time, or updating the Lightning CLI binary for their operating systems. While we should have stable releases in the future, at the current phase of development, there's a requirement to follow the contributions directly in the repository: checking in and out, the commits you're interested in running."),(0,o.kt)("p",null,"In the following guide, we\u2019ll have a simple look into how to pull changes and update Lightning CLI on Linux, which we stick with Ubuntu for simplicity but should be easily transferrable to your ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/requirements#server"},"supported OS"),". "),(0,o.kt)("h2",{id:"pre-requisites"},"Pre-requisites"),(0,o.kt)("p",null,"To follow the guide, you will need the following:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"Familiarity with the command-line interface"),(0,o.kt)("li",{parentName:"ul"},"Some experience with Git"),(0,o.kt)("li",{parentName:"ul"},"Have installed and set up the Lightning CLI and service")),(0,o.kt)("h2",{id:"pulling-the-latest-changes"},"Pulling the latest changes"),(0,o.kt)("p",null,"Check the latest contributions pushed to the Lightning CLI ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/commits/main"},"main branch"),", it'll give you clarity on what's been committed into the source code. Therefore, find out about new features, fixes, improvements, etc by looking directly into the repository history."),(0,o.kt)("h3",{id:"switch-to-installer-username"},"Switch to installer username"),(0,o.kt)("p",null,"First, switch to the username you've used to install and setup Fleek Network Lightning."),(0,o.kt)("p",null,"To switch to the username you've used throughout the installation process do:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"su <USERNAME>\n")),(0,o.kt)("p",null,"For example, if you used the username ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," it'll look like the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"su lgtn\n")),(0,o.kt)("h3",{id:"change-directory-to-the-source-code"},"Change directory to the source code"),(0,o.kt)("p",null,"Next, ",(0,o.kt)("inlineCode",{parentName:"p"},"change directory")," to the Lightning directory in your file system. "),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The tild ",(0,o.kt)("inlineCode",{parentName:"p"},"~")," means user $HOME, thus you have to be logged in with the correct user as requested in the ",(0,o.kt)("a",{parentName:"p",href:"#switch-to-installer-username"},"installer username")," step.")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd <PATH-TO-LIGHTNING-SOURCE-CODE>\n")),(0,o.kt)("p",null,"If you have installed it via the recommended instructions, then the default location where the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"source code")," is stored should be ",(0,o.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning"),". Otherwise, if you opted-in for a custom location then look into your notes before proceeding."),(0,o.kt)("p",null,"For example, it'd look like the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cd ~/fleek-network/lightning\n")),(0,o.kt)("h3",{id:"checkout-to-branch"},"Checkout to branch"),(0,o.kt)("p",null,"Make sure that you are checked in to the correct branch. For example, if that'd be the first testnet phase it'd be called ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet-alpha-0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout <BRANCH-NAME>\n")),(0,o.kt)("p",null,"Here's an example of how the comman would look like for the main default branch with corresponding name ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout main\n")),(0,o.kt)(s,{mdxType:"CheckoutCommitWarning"}),(0,o.kt)("p",null,"Here's an example of how the comman would look like for the branch name ",(0,o.kt)("inlineCode",{parentName:"p"},"testnet-alpha-0"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git checkout testnet-alpha-0\n")),(0,o.kt)("h3",{id:"pull-the-latest-changes"},"Pull the latest changes"),(0,o.kt)("p",null,"The syntax to pull the latest commits is the following:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git pull <REPOSITORY-NAME> <BRANCH-NAME>\n")),(0,o.kt)("p",null,"The git pull command is used to fetch and merge changes from the remote repository to the local repository. Here we're pulling from remote named ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," and branch ",(0,o.kt)("inlineCode",{parentName:"p"},"main"),". "),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git pull origin main\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"If you've made any changes in the local repository directory, clear them to prevent being blocked. As ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," is a ",(0,o.kt)("inlineCode",{parentName:"p"},"version control")," program that looks for changes and will ask you to do something about it to prevent losing data. Most readers can disregard changes if not contributing to the development by simply ",(0,o.kt)("a",{parentName:"p",href:"https://git-scm.com/docs/git-stash"},"stashing")," or resetting the changes."),(0,o.kt)("p",{parentName:"admonition"},"A quick way to clean is to ",(0,o.kt)("inlineCode",{parentName:"p"},"stash")," the changes, for example:"),(0,o.kt)("pre",{parentName:"admonition"},(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git stash \n"))),(0,o.kt)("p",null,"You can check yourself, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git remote -v\n")),(0,o.kt)("p",null,"Our output clearly describes what ",(0,o.kt)("inlineCode",{parentName:"p"},"origin")," is tracking."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"origin  git@github.com:fleek-network/lightning.git (fetch)\norigin  git@github.com:fleek-network/lightning.git (push)\n")),(0,o.kt)("p",null,"Alternatively, you can stash and pull, to reset the repository to the origin."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"git fetch origin <BRANCH-NAME>\ngit reset --hard origin/<BRANCH-NAME>\ngit clean -f\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"With ",(0,o.kt)("inlineCode",{parentName:"p"},"git")," you can point to any point in the repository history, there might be lots of reasons you'd want to check into a certain commit or branch, e.g. if you encounter bugs and need to revert to a previous commit or version. That being said, we welcome all kinds of contributions, such as simply reporting bugs. To report issues in our repository visit the ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning/issues"},"issues")," page to help us improve.")),(0,o.kt)("p",null,"Here's the output we got after the git pull:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"remote: Enumerating objects: 437, done.\nremote: Counting objects: 100% (437/437), done.\nremote: Compressing objects: 100% (205/205), done.\nremote: Total 397 (delta 242), reused 334 (delta 181), pack-reused 0\nReceiving objects: 100% (397/397), 214.68 KiB | 4.77 MiB/s, done.\nResolving deltas: 100% (242/242), completed with 29 local objects.\nFrom https://github.com/fleek-network/lightning\n * branch            main       -> FETCH_HEAD\n   12b2647..998108d  main       -> origin/main\nUpdating 12b2647..998108d\nFast-forward\n .dockerignore                                     |    6 -\n .gitignore                                        |    2 +\n Cargo.lock                                        |  782 +++++++----------------\n Cargo.toml                                        |    2 +-\n core/application/src/state.rs                     |   12 +-\n core/cli/Cargo.toml                               |   47 ++\n core/cli/readme.md                                |   59 ++\n core/cli/src/args.rs                              |   63 ++\n core/cli/src/cli.rs                               |  136 ++++\n core/cli/src/commands/dev.rs                      |  112 ++++\n core/cli/src/commands/key.rs                      |   92 +++\n\n ...\n")),(0,o.kt)("p",null,"When your local version of the repository, is up-to-date with the remote repository, you'd get:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"From https://github.com/fleek-network/lightning\n * branch            main       -> FETCH_HEAD\nAlready up to date.\n")),(0,o.kt)("p",null,'A "already up to date" message means that you have the latest version of the source code and can proceed with compiling the binary process from the source code to override the ',(0,o.kt)("inlineCode",{parentName:"p"},"Lightning CLI")," version you're on. You can also make any other setup changes that might find necessary. Some of the changes might be related to the recommended setup of Systemd Service that helps control the Fleek Network Lightning Node binary process, etc."),(0,o.kt)("h2",{id:"build-the-binary-from-the-source-code"},"Build the binary from the source code"),(0,o.kt)("p",null,"We're assuming that your system setup hasn't changed, such as Rust toolchain still being installed and setup correctly in the system and any other required dependencies. If you have made changes to your system and need to revisit the setup instructions, check our install document ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install"},"here"),"."),(0,o.kt)("p",null,"First, switch the user and change directory to the Lightning directory in your file system as described in ",(0,o.kt)("a",{parentName:"p",href:"#switch-to-installer-username"},"switch to installer username")," ",(0,o.kt)("a",{parentName:"p",href:"#change-directory-to-the-source-code"},"change directory to the source code")," sections."),(0,o.kt)("p",null,"Recall the command from our install document or getting started guide? As you probably guessed, you need to execute the rust cargo build command. But firstly, we are going to cleand and update the Rust package manager, as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo clean\ncargo update\n")),(0,o.kt)("p",null,"Next, execute the build command to compile the Fleek Network Lightning CLI binary."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"cargo +stable build --release\n")),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"The build command uses the Rust compiler, which might take a while depending on how speedy the host machine is capable.")),(0,o.kt)("p",null,"Once the Rust compiler completes, the generated binary will be available in the source code project directory. "),(0,o.kt)("p",null,"If you have stick with the default recommendation, that'll be at ",(0,o.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning/target/release/lightning-node"),"."),(0,o.kt)("h2",{id:"checkup-the-symlink-setup"},"Checkup the symlink setup"),(0,o.kt)("p",null,"During the original install and setup process, a symbolic link (symlink) was created linking the generated binary file located in ",(0,o.kt)("inlineCode",{parentName:"p"},"~/fleek-network/lightning/target/release/lightning-node")," to ",(0,o.kt)("inlineCode",{parentName:"p"},"/usr/local/bin/lgtn"),". By placing the symlink in the the default installation location of the user, the executable application is available globally as ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn"),"."),(0,o.kt)("p",null,"You can see the full absolute path of the symlink and verify if setup correctly by running:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"readlink -f <SYMLINK-NAME>\n")),(0,o.kt)("p",null,"If you have followed the recommended name, the symbolink link should be called ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn"),", short version for ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning"),"."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"readlink -f lgtn\n")),(0,o.kt)("p",null,"Here's an example where we find the symlink ",(0,o.kt)("inlineCode",{parentName:"p"},"lgtn")," pointing to the absolutely path where our source code and originated built binary is located, as described in the ",(0,o.kt)("a",{parentName:"p",href:"#build-the-binary-from-the-source-code"},"build the binary from the source code")," section."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"/home/<USERNAME>/fleek-network/lightning/target/release/lightning-node\n")),(0,o.kt)("p",null,"Alternatively, you can use the ",(0,o.kt)("inlineCode",{parentName:"p"},"ls")," command to identify the symlink."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"ls -la $(which lgtn)\n")),(0,o.kt)("p",null,"If you find an error, it's very likely that a symlink is not setup. You can revisit the ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install"},"installation")," to learn, or execute the command to link the build binary to the user default install location:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'sudo ln -s "~/fleek-network/lightning/target/release/lightning-node" /usr/local/bin/lgtn\n')),(0,o.kt)("admonition",{type:"tip"},(0,o.kt)("p",{parentName:"admonition"},"Make sure that the paths provided to the command ",(0,o.kt)("inlineCode",{parentName:"p"},"ln")," are correct. If you are using customised pathnames or switched to a different username other then the one used for installation it has to change accordingly.")),(0,o.kt)("h2",{id:"systemd-service"},"Systemd service"),(0,o.kt)("p",null,"It's highly recommend to use systemd to manage the Fleek Network service for node operators. Systemd is a system and service manager for Linux operating systems that provides a consistent way to manage system services across various distributions."),(0,o.kt)("h3",{id:"verify-the-setup"},"Verify the setup"),(0,o.kt)("p",null,"The recommended setup is to wrap the Lightning binary process as a Systemd service, as instructed in the ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install"},"install")," section."),(0,o.kt)("p",null,"If you have followed the recommendations, you should have the service file called ",(0,o.kt)("inlineCode",{parentName:"p"},"ligthning.service")," in the path ",(0,o.kt)("inlineCode",{parentName:"p"},"/etc/systemd/system/lightning.service"),"."),(0,o.kt)("p",null,"The content of ",(0,o.kt)("inlineCode",{parentName:"p"},"lightning.service")," should have some or more of the following properties and values:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"[Unit]\nDescription=Fleek Network Node lightning service\n\n[Service]\nType=simple\nMemoryHigh=32G\nRestartSec=15s\nRestart=always\nExecStart=lgtn -c /home/lgtn/.lightning/config.toml run\nStandardOutput=append:/var/log/lightning/output.log\nStandardError=append:/var/log/lightning/diagnostic.log\nEnvironment=TMPDIR=/var/tmp\n\n[Install]\nWantedBy=multi-user.target\n")),(0,o.kt)("p",null,"Everytime the file is modified, the Systemd process should be reloaded. You can do this by executing:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl daemon-reload\n")),(0,o.kt)("p",null,"To learn more about how to create a Systemd service read the ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install#manual-installation"},"manual installation")," document that illustrates the steps required in greater detail."),(0,o.kt)("h3",{id:"launching-the-node-as-a-systemd-service"},"Launching the node as a systemd service"),(0,o.kt)("p",null,"After completing all the steps and checkups mentioned throughout the guide,  you should have the Fleek Network Lightning Service ready to go."),(0,o.kt)("p",null,"To launch the service, execute the following command:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"sudo systemctl start lightning.service\n")),(0,o.kt)("p",null,"To learn more about how to use Systemctl to manage the Lightning service, read the document ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/install#use-systemctl-to-manage-systemd-service"},"here"),"."),(0,o.kt)("h2",{id:"health-check"},"Health check"),(0,o.kt)("p",null,"First, complete all the steps and checkups mentioned throught the guide and once the Node process is running perform a health check."),(0,o.kt)("p",null,"To run a quick health checkup, send a GET request to ",(0,o.kt)("inlineCode",{parentName:"p"},"/health")," endpoing of the RPC on ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/requirements#ports"},"port")," 4069."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},'curl -w "\\p" localhost:4069/health\n')),(0,o.kt)("p",null,"If successful, you should get the response ",(0,o.kt)("inlineCode",{parentName:"p"},"OK"),", as follows:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-sh"},"OK\n")),(0,o.kt)("p",null,"If you'd like to learn more about health check, visit the section ",(0,o.kt)("a",{parentName:"p",href:"/docs/node/health-check"},"health check")," of our documentation."),(0,o.kt)("h2",{id:"conclusion"},"Conclusion"),(0,o.kt)("p",null,"The Fleek Network's Ursa CLI is in constant development, there are frequent changes that can introduce features, fixes, and performance improvements, but also breaking changes that in some cases require you to add, including new libraries or packages in your operating system."),(0,o.kt)("p",null,"In the current phase of development, a proper software release cycle for the updates is still in development, thus we pick changes from the source repository to build the Lightning application."),(0,o.kt)("p",null,"We have looked into how to pull the changes via Git, and discussed that contributions can introduce new requirements to the host operating system that leads to updates or changes in the documentation\u2013mentioning how hard it is to keep in sync. Explained how to look into the contributions to understand the nature of the change and get hints about new features."),(0,o.kt)("p",null,"To complete, provided a step-by-step walkthrough the install and setup process for the Fleek Network Lightning CLI and Systemd service."),(0,o.kt)("p",null,"Discover more about the project by ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fleek-network/lightning"},"watching/contributing on GitHub"),", following us on ",(0,o.kt)("a",{parentName:"p",href:"https://twitter.com/fleek_net"},"Twitter"),", and joining ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/fleekxyz"},"our community Discord")," for any updates."),(0,o.kt)(i.Z,{name:"Helder Oliveira",image:"https://github.com/heldrida.png",title:"Software Developer + DX",url:"https://github.com/heldrida",mdxType:"Author"}))}k.isMDXComponent=!0},3872:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(7294);const o=e=>{let{image:t,name:n,title:o,url:i,communityMember:r=!1}=e;return a.createElement("section",{className:"author_card"},a.createElement("div",null,a.createElement("span",{className:"avatar"},a.createElement("a",{href:i,target:"_blank",alt:n},a.createElement("img",{src:t,alt:n}))),a.createElement("div",null,a.createElement("span",{className:"name"},a.createElement("a",{href:i,target:"_blank",alt:n},n)),a.createElement("span",{className:"title"},o),a.createElement("span",{className:"discord"},r?"Join our community on":"Got questions? Find us on"," ",a.createElement("a",{href:"https://discord.gg/fleekxyz",target:"_blank"},"discord!")))))}},2913:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/updating-lightning-e5c2633345bdcc0db715dd87b269b25b.png"}}]);