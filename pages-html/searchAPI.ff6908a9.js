function e(e,t){return fetch(`https://pixabay.com/api/?key=33184193-09093e83ff1c2949d43a02918&q=${e}&image_type=photo&page=${t}&per_page=20&orientation=vertical`).then((e=>{if(!e.ok)throw new Error(e.status);return e.json()}))}function t(e){return e.map(((e,t)=>`\n      <li class='list__item'>\n        <a href="#">\n          <img loading="lazy" height="400" src="${e.webformatURL}" alt="${t}">\n        </a>  \n      </li>`)).join("")}const n=document.querySelector(".js-form"),i=document.querySelector(".js-list"),r=document.querySelector(".js-load-more"),s=document.querySelector(".js-loader");let a="",o=1;n.addEventListener("submit",(function(n){if(n.preventDefault(),o=1,r.classList.add("is-hidden"),a=n.target.elements.search.value,n.target.reset(),""===a)return;s.classList.remove("is-hidden"),e(a,o).then((e=>{i.innerHTML=t(e.hits),e.totalHits>20&&r.classList.remove("is-hidden")})).catch((e=>{i.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((()=>{s.classList.add("is-hidden")}))})),r.addEventListener("click",(function(n){s.classList.remove("is-hidden"),o+=1,e(a,o).then((e=>{i.insertAdjacentHTML("beforeend",t(e.hits)),e.hits.length<20&&r.classList.add("is-hidden")})).catch((e=>{i.innerHTML="<h1>Error 404</h1>",console.error(e)})).finally((()=>{s.classList.add("is-hidden")}))}));
//# sourceMappingURL=searchAPI.ff6908a9.js.map
