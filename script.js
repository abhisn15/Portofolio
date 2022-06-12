//Hamburger
const menuToggle = document.querySelector('.menu-toggle input');
const navMenu = document.querySelector('.navbar');

menuToggle.addEventListener('click', () => {
  menuToggle.classList.toggle("active");
  navMenu.classList.toggle("slide");
})

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () =>{
    menuToggle.classList.remove("active");
    navMenu.classList.remove("slide");
  }))

//Scroll To Top
const btnScrollToTop = document.querySelector(".btnScrollToTop");

  btnScrollToTop.addEventListener("click", function(){
    window.scrollTo(0, 0);
  });
  window.addEventListener("scroll", () => {
    if (window.pageYOffset > 100) {
      btnScrollToTop.classList.add("active");
    } else {
      btnScrollToTop.classList.remove("active");
    }
})