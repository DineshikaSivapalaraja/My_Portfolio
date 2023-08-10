document.addEventListener("DOMContentLoaded", function () {
    const academicSection = document.getElementById("academic");
    const academicLink = document.querySelector('a[href="#academic"]');
  
    academicLink.addEventListener("click", function (event) {
      event.preventDefault();
      academicSection.classList.toggle("show");
    });
});
  