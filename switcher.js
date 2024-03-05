//remove active class 
var mySwitcherLis = document.querySelectorAll('.lang-choi li');
let courses = document.querySelectorAll('.course-box .courses ');


mySwitcherLis.forEach((li) => {
    li.addEventListener("click", removeActive);
    li.addEventListener("click", manageCourses);
})

function removeActive() {
    mySwitcherLis.forEach((li) => {
        li.classList.remove("active");
    });
    this.classList.add("active");
}



//remove all images just a test
function manageCourses(){

    courses.forEach((courses) => {
        courses.style.display="none";
    
      });
      document.querySelectorAll(this.dataset.cat).forEach((el) => {
       el.style.display="block";
      });
}
  
