const sections = document.querySelectorAll("section");
const navli = document.querySelectorAll("#nav-bar li");

window.addEventListener("scroll", () => {
  let current = " ";

  console.log(window.pageYOffset);
  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.clientHeight;
    if (window.pageYOffset > sectionTop - sectionHeight / 3) {
      current = section.getAttribute("id");
    }
  });
  navli.forEach((li) => {
    li.classList.remove("active");
    if (li.classList.contains(current)) {
      li.classList.add("active");
    }
  });
});
