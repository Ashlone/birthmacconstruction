//Adding function that can toggle the nav bar
function classToggle() {
  const navs = document.querySelectorAll(".navitems");

  navs.forEach((nav) => nav.classList.toggle("hamburger_show"));
}

document.querySelector(".hamburger").addEventListener("click", classToggle);
