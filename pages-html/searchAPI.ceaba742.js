!function(){function t(t,e){var n="".concat("https://pixabay.com/api/","?key=").concat("33184193-09093e83ff1c2949d43a02918","&q=").concat(t,"&image_type=photo&page=").concat(e,"&per_page=20&orientation=vertical");return fetch(n).then((function(t){if(!t.ok)throw new Error(t.status);return t.json()})).catch((function(t){console.error(t)}))}function e(t){return t.map((function(t,e){return'\n      <li class=\'list__item\'>\n        <a href="#">\n          <img loading="lazy" height="400" src="'.concat(t.webformatURL,'" alt="').concat(e,'">\n        </a>  \n      </li>')})).join("")}var n=document.querySelector(".js-form"),i=document.querySelector(".js-list"),c=document.querySelector(".js-load-more"),o=document.querySelector(".js-loader"),r="",a=1;n.addEventListener("submit",(function(n){if(n.preventDefault(),a=1,c.classList.add("is-hidden"),r=n.target.elements.search.value,n.target.reset(),""===r)return;o.classList.remove("is-hidden"),t(r,a).then((function(t){i.innerHTML=e(t.hits),t.totalHits>20&&c.classList.remove("is-hidden")})).finally((function(){o.classList.add("is-hidden")}))})),c.addEventListener("click",(function(n){t(r,a+=1).then((function(t){i.insertAdjacentHTML("beforeend",e(t.hits)),t.hits.length<20&&c.classList.add("is-hidden")}))}))}();
//# sourceMappingURL=searchAPI.ceaba742.js.map