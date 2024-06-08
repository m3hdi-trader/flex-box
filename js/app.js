const navBtn = document.getElementById("nav-toggle");
const links = document.getElementById("nav-links");

navBtn.addEventListener("click", () => {
  links.classList.toggle("show-links");
});

const scrollLink = document.querySelectorAll(".scroll-link");
scrollLink.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    links.classList.remove("show-links");
    const id = e.target.getAttribute("href").slice(1);
    const elment = document.getElementById(id);
    let position = elment.offsetTop - 62;
    window.scrollTo({
      left: 0,
      top: position,
      behavior: "smooth",
    });
  });
});
