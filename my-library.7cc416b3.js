!function(){function t(t,e,n,a){Object.defineProperty(t,e,{get:n,set:a,enumerable:!0,configurable:!0})}function e(t){return t&&t.__esModule?t.default:t}var a="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},i={},c=a.parcelRequire1db2;null==c&&((c=function(t){if(t in r)return r[t].exports;if(t in i){var e=i[t];delete i[t];var n={id:t,exports:{}};return r[t]=n,e.call(n.exports,n,n.exports),n.exports}var a=new Error("Cannot find module '"+t+"'");throw a.code="MODULE_NOT_FOUND",a}).register=function(t,e){i[t]=e},a.parcelRequire1db2=c),c.register("iE7OH",(function(e,n){var a,r;t(e.exports,"register",(function(){return a}),(function(t){return a=t})),t(e.exports,"resolve",(function(){return r}),(function(t){return r=t}));var i={};a=function(t){for(var e=Object.keys(t),n=0;n<e.length;n++)i[e[n]]=t[e[n]]},r=function(t){var e=i[t];if(null==e)throw new Error("Could not resolve bundle with id "+t);return e}})),c.register("2ft06",(function(t,e){var n=document.querySelector(".switch__input"),a=localStorage.getItem("whitemode"),r=document.body;n.addEventListener("click",(function(){n.checked?(localStorage.setItem("whitemode","true"),r.classList.add("white-mode")):(localStorage.setItem("whitemode","false"),r.classList.remove("white-mode"))})),document.addEventListener("DOMContentLoaded",(function(){"true"===a?(n.checked=!0,r.classList.add("white-mode")):(n.checked=!1,r.classList.remove("white-mode"))}))})),c.register("5xtVg",(function(t,e){var a;"function"!=typeof(a=window.Element.prototype).matches&&(a.matches=a.msMatchesSelector||a.mozMatchesSelector||a.webkitMatchesSelector||function(t){for(var e=this,a=(e.document||e.ownerDocument).querySelectorAll(t),r=0;a[r]&&a[r]!==e;)++r;return Boolean(o[n])}),"function"!=typeof a.closest&&(a.closest=function(t){for(var e=this;e&&1===e.nodeType;){if(e.matches(t))return e;e=e.parentNode}return null}),document.addEventListener("DOMContentLoaded",(function(){var t=document.querySelectorAll(".js-open-modal"),e=document.querySelector(".js-overlay-modal"),n=document.querySelectorAll(".js-modal-close");t.forEach((function(t){t.addEventListener("click",(function(t){t.preventDefault();var n=this.getAttribute("data-modal");document.querySelector('.modal[data-modal="'+n+'"]').classList.add("active"),e.classList.add("active")}))})),n.forEach((function(t){t.addEventListener("click",(function(t){this.closest(".modal").classList.remove("active"),e.classList.remove("active")}))})),document.body.addEventListener("keyup",(function(t){if(27==t.keyCode){var e=document.querySelector(".modal.active");e&&e.classList.remove("active");var n=document.querySelector(".overlay.active");n&&n.classList.remove("active")}}),!1),e.addEventListener("click",(function(){document.querySelector(".modal.active").classList.remove("active"),this.classList.remove("active")}))}))})),c.register("cs7FV",(function(t,e){!function(){var t={openMenuBtn:document.querySelector(".menu-open-btn"),menu:document.querySelector(".mob-menu"),body:document.querySelector("body")};function e(){t.menu.classList.toggle("is-hidden"),t.body.classList.toggle("no-scroll"),t.body.classList.toggle("has-backdrop")}t.openMenuBtn.addEventListener("click",e),t.body.addEventListener("click",(function(e){e.target.closest(".mob-menu")||e.target.closest(".menu-open-btn")||(t.menu.classList.add("is-hidden"),t.body.classList.remove("no-scroll"),t.body.classList.remove("has-backdrop"))})),document.addEventListener("keydown",(function(t){"Escape"===t.code&&e()}))}()})),c.register("cHsZg",(function(n,a){t(n.exports,"onRenderLibraryCards",(function(){return d}));var r=c("bpxeT"),i=c("2TvXO"),o=c("j1Fxp"),s=c("k6s8D"),l=c("46Xxb");function d(){return u.apply(this,arguments)}function u(){return(u=e(r)(e(i).mark((function t(){var n,a,r;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(n=document.querySelector(".library-list"),!((a=JSON.parse(localStorage.getItem("libraryFilm"))||[]).length>0)){t.next=11;break}return t.next=5,(0,l.getCatalogCards)(a);case 5:r=t.sent,n.innerHTML=r,document.querySelectorAll(".catalog-list__list-link").forEach((function(t){t.addEventListener("click",(function(e){e.preventDefault(),(0,s.openModalMovie)(t.dataset.id)}))})),t.next=12;break;case 11:return t.abrupt("return",n.innerHTML='<div class="container library-container-mistake">\n      <p class="library-empty__mistake">OOPS... <br> We are very sorry! <br> You don\'t have any movies at your library.</p>\n      <button class="btn btn-library" onclick="window.location.href=\'catalog.html\'"><a class="btn-library__link">Search movie</a></button>\n    </div>');case 12:case"end":return t.stop()}}),t)})))).apply(this,arguments)}(0,o.onScroll)(),(0,o.onToTopBtn)(),d()})),c.register("j1Fxp",(function(e,n){t(e.exports,"onScroll",(function(){return r})),t(e.exports,"onToTopBtn",(function(){return i}));var a=document.querySelector(".go-to-top");function r(){var t=window.pageYOffset;t>400&&a.classList.add("go-to-top--visible"),t<400&&a.classList.remove("go-to-top--visible")}function i(){window.pageYOffset>0&&window.scrollTo({top:0,left:0,behavior:"smooth"})}a.addEventListener("click",i),window.addEventListener("scroll",r)})),c.register("k6s8D",(function(n,a){t(n.exports,"openModalMovie",(function(){return p}));var r=c("bpxeT"),i=c("2TvXO"),o=c("ay25s"),s=c("dLu6O"),l=c("g2eo5"),d=c("1yMHa"),u=c("cHsZg"),m=c("aoF6d"),v=document.querySelector(".modal-card"),f=document.createElement("div");function p(t){return g.apply(this,arguments)}function g(){return(g=e(r)(e(i).mark((function t(n){var a,r,c;return e(i).wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return c=function(){var t=document.querySelector(".btn-add-remove"),e=r.data;(JSON.parse(localStorage.getItem("libraryFilm"))||[]).flat().some((function(t){return t.id===e.id}))?(t.textContent="Remove from library",t.classList.add("remove"),t.addEventListener("click",(function(){(0,d.removeFromLibrary)(e.id),window.location.pathname.includes("my-library")&&(0,u.onRenderLibraryCards)(),c()}))):(t.textContent="Add to library",t.classList.remove("remove"),t.addEventListener("click",(function(){(0,l.addToLibrary)(e),window.location.pathname.includes("my-library")&&(0,u.onRenderLibraryCards)(),c()}))),document.querySelector(".watch-btn-modal").addEventListener("click",(function(){(0,m.getFilmOfDayId)(n),(0,m.onOpenHeroModal)()}))},a=new(0,s.MoviesAPI),t.prev=2,t.next=5,a.getMovieDetails(n);case 5:r=t.sent,v.classList.add("modal-movie--show"),f.classList.add("backdrop--show"),document.body.classList.add("modal-open"),v.innerHTML='\n     <svg class="close-btn js-modal-close" type="button">\n    <use href="'.concat(e(o),'#close-outline"></use>\n     </svg>\n      <div class="modal__card">\n      <div class="modal-card__wrapper">\n        <img class="modal-poster" src="https://image.tmdb.org/t/p/w500').concat(r.data.poster_path,'" alt="').concat(r.data.title,'" width="248" height="315">\n        <div class="modal-container__info">\n          <h2 class="modal-title">').concat(r.data.original_title,'</h2>\n          <div class="modal-container__details">\n  <ul class="modal-details__list list">\n    <li class="modal-details__item">Vote / Votes</li>\n    <li class="modal-details__item">Popularity</li>\n    <li class="modal-details__item">Genre</li>\n  </ul>\n  <ul class="modal-details__value-list list">\n    <li class="modal-details__value">\n      <span class="vote">').concat(r.data.vote_average,'</span>\n      <span class="slash">/</span>\n      <span class="vote">').concat(r.data.vote_count,'</span>\n    </li>\n    <li class="modal-details__value">').concat(r.data.popularity,'</li>\n    <li class="modal-details__value">').concat(r.data.genres[0].name,'</li>\n  </ul>\n</div>\n\n            <p class="modal-details__about">ABOUT</p>\n            <p class="modal-details__story">').concat(r.data.overview,'</p>\n          <div class="block-watch-btn">\n          <button class="btn-add-remove">Add to my library</button>\n          <button class="watch-btn-modal">Watch trailer</button>\n          </div>\n        </div>\n      </div>\n      </div>\n    '),c(),v.querySelector(".js-modal-close").addEventListener("click",h),f.addEventListener("click",h),document.addEventListener("keydown",(function(t){27===t.keyCode&&h()})),t.next=21;break;case 18:t.prev=18,t.t0=t.catch(2),console.log(t.t0);case 21:case"end":return t.stop()}}),t,null,[[2,18]])})))).apply(this,arguments)}function h(){v.classList.remove("modal-movie--show"),v.innerHTML="",f.classList.remove("backdrop--show"),document.body.classList.remove("modal-open")}f.classList.add("modal-backdrop"),document.body.appendChild(f)})),c.register("ay25s",(function(t,e){t.exports=c("aNJCr").getBundleURL("lxh5P")+c("iE7OH").resolve("kxKJ3")})),c.register("aNJCr",(function(e,n){var a;t(e.exports,"getBundleURL",(function(){return a}),(function(t){return a=t}));var r={};function i(t){return(""+t).replace(/^((?:https?|file|ftp|(chrome|moz)-extension):\/\/.+)\/[^/]+$/,"$1")+"/"}a=function(t){var e=r[t];return e||(e=function(){try{throw new Error}catch(e){var t=(""+e.stack).match(/(https?|file|ftp|(chrome|moz)-extension):\/\/[^)\n]+/g);if(t)return i(t[2])}return"/"}(),r[t]=e),e}})),c.register("g2eo5",(function(e,n){function a(t){var e=JSON.parse(localStorage.getItem("libraryFilm"))||[];e.flat().some((function(e){return e.id===t.id}))||(e.push(t),localStorage.setItem("libraryFilm",JSON.stringify(e)))}t(e.exports,"addToLibrary",(function(){return a}))})),c.register("1yMHa",(function(e,n){function a(t){var e=JSON.parse(localStorage.getItem("libraryFilm"))||[];e=e.flat().filter((function(e){return e.id!==t})),localStorage.setItem("libraryFilm",JSON.stringify(e))}t(e.exports,"removeFromLibrary",(function(){return a}))})),c.register("46Xxb",(function(n,a){t(n.exports,"getCatalogCards",(function(){return s}));var r=c("lPhMu"),i=c("lrjFe"),o=c("6HK1b");function s(t){return t.map((function(t){var n=t.title,a=t.genre_ids,c=t.genres,s=t.release_date,l=t.vote_average,d=t.poster_path,u=t.id;d=d?"https://image.tmdb.org/t/p/w500".concat(d):e(o);var m=Array.isArray(c)?c.slice(0,2).map((function(t){return t.name})).join(", "):(0,r.getGenres)(a);return"\n    <li class='catalog-list__item'>\n        <a href='#' class='catalog-list__list-link' data-id=\"".concat(u,"\" data-modal=\"movie-card\">\n            <div class='catalog-list__list-wrapper'>\n                <div class='catalog-list__info'>\n                    <h2 class='catalog-list__title'>").concat(n,"</h2>\n                    <div class='catalog-list__additional-info'>\n                        <p class='catalog-list__movie-type'>").concat(m," | ").concat(s.slice(0,4),"</p>\n                        <div class='catalog-list-rating'>").concat((0,i.getStarsRating)(l),"\n                        </div>\n                    </div>\n                </div>\n                <img\n                    src='").concat(d,"'\n                    alt='").concat(n,"'\n                    width='280'\n                    height='406'\n                    class='catalog-list__image'\n                />\n            </div>\n        </a>\n    </li> ")})).join("")}})),c.register("lPhMu",(function(n,a){t(n.exports,"getGenres",(function(){return i}));var r=c("aZ3a6");function i(t){return e(r).genres.filter((function(e){return t.includes(e.id)})).slice(0,2).map((function(t){return t.name})).join(", ")}})),c.register("aZ3a6",(function(t,e){t.exports=JSON.parse('{"genres":[{"id":28,"name":"Action"},{"id":12,"name":"Adventure"},{"id":16,"name":"Animation"},{"id":35,"name":"Comedy"},{"id":80,"name":"Crime"},{"id":99,"name":"Documentary"},{"id":18,"name":"Drama"},{"id":10751,"name":"Family"},{"id":14,"name":"Fantasy"},{"id":36,"name":"History"},{"id":27,"name":"Horror"},{"id":10402,"name":"Music"},{"id":9648,"name":"Mystery"},{"id":10749,"name":"Romance"},{"id":878,"name":"Science Fiction"},{"id":10770,"name":"TV Movie"},{"id":53,"name":"Thriller"},{"id":10752,"name":"War"},{"id":37,"name":"Western"}]}')})),c.register("lrjFe",(function(e,n){function a(t){return t>=9.5?r([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"active"}]):t>=8.5?r([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"activehalf"}]):t>=7.5?r([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"active",fifthStar:"noactive"}]):t>=6.5?r([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"activehalf",fifthStar:"noactive"}]):t>=5.5?r([{firstStar:"active",secondStar:"active",thirdStar:"active",fourthStar:"noactive",fifthStar:"noactive"}]):t>=4.5?r([{firstStar:"active",secondStar:"active",thirdStar:"activehalf",fourthStar:"noactive",fifthStar:"noactive"}]):t>=3.5?r([{firstStar:"active",secondStar:"active",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t>=2.5?r([{firstStar:"active",secondStar:"activehalf",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):t<1.5?r([{firstStar:"activehalf",secondStar:"noactive",thirdStar:"noactive",fourthStar:"noactive",fifthStar:"noactive"}]):"Помилка: проблема у файлі catalog-rating-get.js"}function r(t){return t.map((function(t){var e=t.firstStar,n=t.secondStar,a=t.thirdStar,r=t.fourthStar,i=t.fifthStar;return'\n      <ul class="catalog-list-rating__list">\n        <li class="catalog-list-rating__list-item--'.concat(e,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(n,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(a,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(r,'"></li>\n        <li class="catalog-list-rating__list-item--').concat(i,'"></li>\n      </ul>\n          ')})).join("")}t(e.exports,"getStarsRating",(function(){return a}))})),c.register("6HK1b",(function(t,e){t.exports=c("aNJCr").getBundleURL("lxh5P")+c("iE7OH").resolve("ahxed")})),c.register("94krt",(function(t,e){})),c.register("diaKp",(function(t,e){var n,a;n=document.querySelector(".films"),(a=document.createElement("div")).classList.add("loader"),a.textContent="Loading...",n.prepend(a),setTimeout((function(){return a.remove()}),400)})),c("iE7OH").register(JSON.parse('{"lxh5P":"my-library.7cc416b3.js","kxKJ3":"symbol-defs.2be55a3b.svg","ahxed":"nophoto.d3be914e.jpg"}'))}();
//# sourceMappingURL=my-library.7cc416b3.js.map
