
// // active navbar
// let nav = document.querySelector(".navigation-wrap");
// window.onscroll = function () {
//     if(document.documentElement.scrollTop  > 20){
//         nav.classList.add("scroll-on");
//     }else{
//         nav.classList.remove("scroll-on");
//     }
// }


// nav hide 
// let navBar = document.querySelectorAll('.nav-link');
// let navCollapse = document.querySelector('.navbar-collapse.collapse');
// navBar.forEach(function(a){
//     a.addEventListener("click", function(){
//         navCollapse.classList.remove("show");
//     })
// })


// //typing text animation
// var typeText = document.querySelector(".typeText");
// var textToBeTyped = "Software Developer";
// var index = 0, isAdding = true;

// function typingText() {
//   setTimeout(function () {

//     // set the text of typeText to a substring of the text to be typed using index.
//     typeText.innerText = textToBeTyped.slice(0, index);
//     if (isAdding) {

//       // adding text
//       if (index > textToBeTyped.length) {
        
//         // no more text to add
//         isAdding = false

//         //break: wait 2s before playing again
//         setTimeout(function () {
//           typingText()
//         }, 2000)
//         return
//       } else {
//         index++
//       }
//     } else {
//       // removing text
//       if (index === 0) {

//         // no more text to remove
//         isAdding = true
//       } else {
//         index--
//       }
//     }
//     // call itself
//     typingText()
//   },120)
// }
// // start typing text animation
// typingText()