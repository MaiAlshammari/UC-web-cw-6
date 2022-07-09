let grades = [90, 94, 65, 80, 39, 55, 83, 92, 39, 93, 43, 70, 57, 0];

let all_grades_div = document.getElementById("all-grades");
let search_grades_div = document.getElementById("search-grades");
let A_grades_div = document.getElementById("A-grades");
let bonus_grades_div = document.getElementById("bonus-grades");
let random_grade_div = document.getElementById("random-grade");

grades.pop();
grades.push("99")
grades.forEach((grades) => (all_grades_div).innerHTML +=`<span> ${grades} </span>`);


for (let i =0; i< grades.length; i++)
{
    all_grades_div.innerHTML +=`<span> ${grades[i]} </span>`;
}

function search() {
  let inputValue = document.getElementById("input").value;
  let filter =grades.filter(grades) = inputValue;
  grades.forEach((grades) => (search_grades_div).innerHTML +=`<span> ${grades} </span>`);


//   بونص
  if(inputValue =! grades)  
  {
    console.log("not found the grade");
  }

}
  let filterOver90 =grades.filter(element =>element > 90);
  grades.forEach((grades) => (all_grades_div).innerHTML +=`<span> ${grades} </span>`);
  let map1 =grades.map((element) => element +3);
  grades.forEach((grades) => (bonus_grades_div).innerHTML +=`<span> ${grades} </span>`);

  let randomIndex =Math.floor(Math.random()* grades.length)
  grades.forEach((grades) => (random_grade_div).innerHTML +=`<span> ${randomIndex}:${grades[randomIndex]} </span>`);
