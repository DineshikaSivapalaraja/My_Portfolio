document.addEventListener("DOMContentLoaded", function () { /*Academic section Toggling */
    const academicSec = document.getElementById("academic");
    const academicLink = document.querySelector('a[href="#academic"]');
  
    academicLink.addEventListener("click", function (event) {
      event.preventDefault();
      academicSec.classList.toggle("show");
      if(academicSec.classList.contains("show")) {  //adding smooth scrolling after toggling
        academicSec.scrollIntoView({behavior: "smooth"});
      }
    });
});

document.addEventListener("DOMContentLoaded", function () { /*Extra curricular section Toggling */
  const activitiesSec = document.getElementById("activities");
  const activitiesLink = document.querySelector('a[href="#activities"]');

  activitiesLink.addEventListener("click", function (event) {
    event.preventDefault();
    activitiesSec.classList.toggle("show");
    if(activitiesSec.classList.contains("show")) {  //Adding smooth scrolling after toggling
      activitiesSec.scrollIntoView({behavior: "smooth"});
    }
  });
});

const navToggle = document.getElementById("navToggle");  /*Navigation bar */
const navLinks = document.getElementById("navLinks");

navToggle.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});




