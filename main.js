(()=>{"use strict";!function(){function e(e){e.preventDefault();var t=e.currentTarget.getAttribute("href");document.querySelector(t).scrollIntoView({block:"start",behavior:"smooth"})}document.querySelectorAll('[data-scroll="suave"] a[href^="#"]').forEach((function(t){t.addEventListener("click",e)}))}()})();