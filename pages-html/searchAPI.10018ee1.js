function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e,t){return fetch(`https://pixabay.com/api/?key=33184193-09093e83ff1c2949d43a02918&q=${e}&image_type=photo&page=${t}&per_page=20&orientation=vertical`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function i(e){return e.map(((e,t)=>`\n      <li class='list__item'>\n        <a href="#">\n          <img loading="lazy" height="400" src="${e.webformatURL}" alt="${t}">\n        </a>  \n      </li>`)).join("")}var r,o=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,c=/^0o[0-7]+$/i,l=parseInt,u="object"==typeof t&&t&&t.Object===Object&&t,f="object"==typeof self&&self&&self.Object===Object&&self,d=u||f||Function("return this")(),v=Object.prototype.toString,h=Math.max,m=Math.min,p=function(){return d.Date.now()};function y(e,t,n){var i,r,o,s,a,c,l=0,u=!1,f=!1,d=!0;if("function"!=typeof e)throw new TypeError("Expected a function");function v(t){var n=i,o=r;return i=r=void 0,l=t,s=e.apply(o,n)}function y(e){return l=e,a=setTimeout(j,t),u?v(e):s}function L(e){var n=e-c;return void 0===c||n>=t||n<0||f&&e-l>=o}function j(){var e=p();if(L(e))return E(e);a=setTimeout(j,function(e){var n=t-(e-c);return f?m(n,o-(e-l)):n}(e))}function E(e){return a=void 0,d&&i?v(e):(i=r=void 0,s)}function T(){var e=p(),n=L(e);if(i=arguments,r=this,c=e,n){if(void 0===a)return y(c);if(f)return a=setTimeout(j,t),v(c)}return void 0===a&&(a=setTimeout(j,t)),s}return t=b(t)||0,g(n)&&(u=!!n.leading,o=(f="maxWait"in n)?h(b(n.maxWait)||0,t):o,d="trailing"in n?!!n.trailing:d),T.cancel=function(){void 0!==a&&clearTimeout(a),l=0,i=c=r=a=void 0},T.flush=function(){return void 0===a?s:E(p())},T}function g(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function b(e){if("number"==typeof e)return e;if(function(e){return"symbol"==typeof e||function(e){return!!e&&"object"==typeof e}(e)&&"[object Symbol]"==v.call(e)}(e))return NaN;if(g(e)){var t="function"==typeof e.valueOf?e.valueOf():e;e=g(t)?t+"":t}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var n=a.test(e);return n||c.test(e)?l(e.slice(2),n?2:8):s.test(e)?NaN:+e}r=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError("Expected a function");return g(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),y(e,t,{leading:i,maxWait:t,trailing:r})};const L=document.querySelector(".js-form"),j=document.querySelector(".js-list"),E=document.querySelector(".js-load-more"),T=document.querySelector(".js-loader"),w=document.querySelector(".js-search-up");let x="",$=1;L.addEventListener("submit",(function(e){if(e.preventDefault(),$=1,E.classList.add("is-hidden"),x=e.target.elements.search.value,e.target.reset(),""===x)return;T.classList.remove("is-hidden"),n(x,$).then((e=>{j.innerHTML=i(e.hits),e.totalHits>20&&E.classList.remove("is-hidden")})).catch((e=>{j.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((()=>{T.classList.add("is-hidden")}))})),E.addEventListener("click",(function(e){T.classList.remove("is-hidden"),$+=1,n(x,$).then((e=>{j.insertAdjacentHTML("beforeend",i(e.hits)),e.hits.length<20&&E.classList.add("is-hidden")})).catch((e=>{j.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((()=>{T.classList.add("is-hidden")}))}));const M=e(r)((function(e){console.log(scrollY),scrollY>500&&(w.classList.add("is-visible"),document.removeEventListener("scroll",M))}),400);document.addEventListener("scroll",M),w.addEventListener("click",(function(e){w.classList.remove("is-visible"),document.addEventListener("scroll",M)}));
//# sourceMappingURL=searchAPI.10018ee1.js.map
