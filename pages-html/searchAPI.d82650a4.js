!function(){function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{};function n(e,t){var n="".concat("https://pixabay.com/api/","?key=").concat("33184193-09093e83ff1c2949d43a02918","&q=").concat(e,"&image_type=photo&page=").concat(t,"&per_page=20&orientation=vertical");return fetch(n).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))}function i(e){return e.map((function(e,t){return"\n      <li class='list__item' data-large-image=\"".concat(e.largeImageURL,'">\n        <a href="#">\n          <img loading="lazy" height="400" src="').concat(e.webformatURL,'" alt="').concat(t,'">\n        </a>  \n      </li>')})).join("")}var r,o={};Object.defineProperty(o,"__esModule",{value:!0}),o.default=function(e){return e&&e.constructor===Symbol?"symbol":typeof e};var c="Expected a function",a=/^\s+|\s+$/g,s=/^[-+]0x[0-9a-f]+$/i,u=/^0b[01]+$/i,l=/^0o[0-7]+$/i,d=parseInt,f="object"==typeof t&&t&&t.Object===Object&&t,v="object"==typeof self&&self&&self.Object===Object&&self,m=f||v||Function("return this")(),h=Object.prototype.toString,p=Math.max,g=Math.min,y=function(){return m.Date.now()};function b(e,t,n){var i,r,o,a,s,u,l=0,d=!1,f=!1,v=!0;if("function"!=typeof e)throw new TypeError(c);function m(t){var n=i,o=r;return i=r=void 0,l=t,a=e.apply(o,n)}function h(e){return l=e,s=setTimeout(E,t),d?m(e):a}function b(e){var n=e-u;return void 0===u||n>=t||n<0||f&&e-l>=o}function E(){var e=y();if(b(e))return T(e);s=setTimeout(E,function(e){var n=t-(e-u);return f?g(n,o-(e-l)):n}(e))}function T(e){return s=void 0,v&&i?m(e):(i=r=void 0,a)}function _(){var e=y(),n=b(e);if(i=arguments,r=this,u=e,n){if(void 0===s)return h(u);if(f)return s=setTimeout(E,t),m(u)}return void 0===s&&(s=setTimeout(E,t)),a}return t=j(t)||0,L(n)&&(d=!!n.leading,o=(f="maxWait"in n)?p(j(n.maxWait)||0,t):o,v="trailing"in n?!!n.trailing:v),_.cancel=function(){void 0!==s&&clearTimeout(s),l=0,i=u=r=s=void 0},_.flush=function(){return void 0===s?a:T(y())},_}function L(t){var n=void 0===t?"undefined":e(o)(t);return!!t&&("object"==n||"function"==n)}function j(t){if("number"==typeof t)return t;if(function(t){return"symbol"==(void 0===t?"undefined":e(o)(t))||function(e){return!!e&&"object"==typeof e}(t)&&"[object Symbol]"==h.call(t)}(t))return NaN;if(L(t)){var n="function"==typeof t.valueOf?t.valueOf():t;t=L(n)?n+"":n}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(a,"");var i=u.test(t);return i||l.test(t)?d(t.slice(2),i?2:8):s.test(t)?NaN:+t}r=function(e,t,n){var i=!0,r=!0;if("function"!=typeof e)throw new TypeError(c);return L(n)&&(i="leading"in n?!!n.leading:i,r="trailing"in n?!!n.trailing:r),b(e,t,{leading:i,maxWait:t,trailing:r})};var E=document.querySelector(".js-form"),T=document.querySelector(".js-list"),_=document.querySelector(".js-load-more"),w=document.querySelector(".js-loader"),k=document.querySelector(".js-search-up"),S=document.querySelector(".js-backdrop"),q="",M=1;E.addEventListener("submit",(function(e){if(e.preventDefault(),M=1,_.classList.add("is-hidden"),q=e.target.elements.search.value,e.target.reset(),""===q)return;w.classList.remove("is-hidden"),n(q,M).then((function(e){T.innerHTML=i(e.hits),e.totalHits>20&&_.classList.remove("is-hidden")})).catch((function(e){T.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((function(){w.classList.add("is-hidden")}))})),_.addEventListener("click",(function(e){w.classList.remove("is-hidden"),n(q,M+=1).then((function(e){T.insertAdjacentHTML("beforeend",i(e.hits)),e.hits.length<20&&_.classList.add("is-hidden")})).catch((function(e){T.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((function(){w.classList.add("is-hidden")}))}));var O=e(r)((function(e){console.log(scrollY),0===scrollY&&k.classList.remove("is-visible");scrollY>700&&(k.classList.add("is-visible"),document.removeEventListener("scroll",O))}),300);document.addEventListener("scroll",O),k.addEventListener("click",(function(e){k.classList.remove("is-visible"),document.addEventListener("scroll",O)})),T.addEventListener("click",(function(e){var t=e.target;if(t.classList.contains("list"))return;var n=S.querySelector(".modal__img"),i=t.closest(".list__item").dataset.largeImage;S.classList.remove("backdrop_hidden"),n.src=i})),S.addEventListener("click",(function(e){var t=e.target,n=e.currentTarget;if(!t.classList.contains("backdrop"))return;t===n&&n.classList.add("backdrop_hidden")}))}();
//# sourceMappingURL=searchAPI.d82650a4.js.map
