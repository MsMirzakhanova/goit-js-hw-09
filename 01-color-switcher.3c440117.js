const t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),o=document.querySelector("body");console.log(o);let l=null;t.addEventListener("click",(()=>{t.disabled=!0,l=setInterval((()=>{o.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),e.addEventListener("click",(()=>{t.disabled=!1,clearInterval(l)}));
//# sourceMappingURL=01-color-switcher.3c440117.js.map
