// var acc = document.getElementsByClassName("accordion");
// var i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     /* Toggle between adding and removing the "active" class,
//     to highlight the button that controls the panel */
//     this.classList.toggle("active");

//     /* Toggle between hiding and showing the active panel */
//     var panel = this.nextElementSibling;
//     if (panel.style.display === "block") {
//       panel.style.display = "none";
//     } else {
//       panel.style.display = "block";
//     }
//   });
// }

// JavaScript for dropdown project summary
const summaries = document.querySelectorAll('.project-summary');
const headers = document.querySelectorAll('.project-header');

function toggleSummary() {
  const summary = this.nextElementSibling;
  if (summary.style.maxHeight) {
    this.querySelector('.symbol').textContent = '+';
    summary.style.maxHeight = null;
  } else {
    this.querySelector('.symbol').textContent = '-';
    summary.style.maxHeight = summary.scrollHeight + 'px';
  }
}

headers.forEach((header) => {
  header.addEventListener('click', toggleSummary);
});