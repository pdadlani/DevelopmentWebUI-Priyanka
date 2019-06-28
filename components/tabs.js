// // // JavaScript file for nav Links

const navLinks = document.querySelectorAll('.nav-link');
// console.log(navLinks);
// navLinks.forEach(link => new NavLink(link));
// navLinks.forEach(link => {
//   link.addEventListener('click', changeBackground);
// })

let currentPage = window.location.href;

navLinks.forEach(link => {
  console.log(link.attributes.href)
  if (!link.attributes.href) {
    return
  }
  if (currentPage.includes(link.attributes.href.value)) {
    link.classList.add("nav-link-selected");
  } else {
    link.classList.remove("nav-link-selected");
  }
})

