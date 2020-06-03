// // // JavaScript file for nav Links

const navLinks = document.querySelectorAll('.nav-link');
// // console.log(navLinks);
// // navLinks.forEach(link => new NavLink(link));
// // navLinks.forEach(link => {
// //   link.addEventListener('click', changeBackground);
// // })

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

// class TabLink {
//   constructor(tabElement) {
//     // assign this.tabElement to the tabElement DOM reference
//     this.tabElement = tabElement;

//     // Add a click event that invokes this.selectTab
//     this.tabElement.addEventListener('click', () => {
//       // event.preventDefault();
//       this.selectTab()
//     });
//   }

//   selectTab() {

//     // Select all elements with the .tab class on them
//     const tabs = document.querySelectorAll('.nav-link');

//     // Iterate through the NodeList removing the .active-tab class from each element
//     tabs.forEach(tab => tab.classList.remove('nav-link-selected'));

//     // Add a class of ".active-tab" to this.tabElement
//     this.tabElement.classList.add('nav-link-selected');

//   }
// }


// let tabs = document.querySelectorAll('.nav-link');
// tabs.forEach(tab => new TabLink(tab));

