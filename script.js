//set current year
const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
yearEl.textContent = currentYear

//Make mobile navigation work
const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener('click',  function() {
  headerEl.classList.toggle("nav-open");
});
  
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(function (entries) { 
   const ent = entries[0];
   console.log(ent);

   if(ent.isIntersecting === false) {
     document.body.classList.add('sticky');
   }

      if(ent.isIntersecting === true) {
     document.body.classList.remove('sticky');
   }
  
}, 
{
  root: null,
  threshold: 0,
  rootMargin: "-80px",

});
obs.observe(sectionHeroEl);