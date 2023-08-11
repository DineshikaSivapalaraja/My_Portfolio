document.addEventListener("DOMContentLoaded", function () {
    const academicSec = document.getElementById("academic");
    const academicLink = document.querySelector('a[href="#academic"]');
  
    academicLink.addEventListener("click", function (event) {
      event.preventDefault();
      academicSec.classList.toggle("show");
    });
});

document.addEventListener("DOMContentLoaded", function () {
  const activitiesSec = document.getElementById("activities");
  const activitiesLink = document.querySelector('a[href="#activities"]');

  activitiesLink.addEventListener("click", function (event) {
    event.preventDefault();
    activitiesSec.classList.toggle("show");
  });
});
  