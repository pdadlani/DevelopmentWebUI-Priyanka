// Change color to @cep-color-purple
const changeColorPurple = function (event) {
  event.target.style.color = '#632A50';
}

// // Scale content/images
// const scale = function (event, n) {
//   event.target.style.transform = `scale(${n})`;
// };

// changes opacity of images when dragging
document.addEventListener("dragstart", function (event) {
  // store a ref. on the dragged elem (if wanting to access element outside of this block of code)
  dragged = event.target;
  // make it half transparent
  event.target.style.opacity = .5;
  // false is default argument, so do not need to include it.
}, false);

// returns opacity of images back to normal when finished dragging
document.addEventListener('dragend', function (event) {
  event.target.style.opacity = '1';
}, false)

// changes items in the form - background color to aqua when wheeling over it
// - text color to pink when typing
document.querySelectorAll('.firstName').forEach(function (data) {
  // data.addEventListener('wheel', changeBackAqua);
  data.addEventListener('keydown', changeColorPurple);
  //data.addEventListener('click', alert);
})

// document.querySelectorAll('.about-us-img').forEach(function (link) {
//   link.addEventListener('mouseover', function(event) {
//     event.target.style.transform = "scale(1.3)";
//     event.target.style.transition = "1s";
//   });
//   link.addEventListener('mouseout', function(event) {
//     event.target.style.transform = 'scale(1)';
//   });
// })