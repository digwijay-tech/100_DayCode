function calculate() {
  let date = document.getElementById("dob").value;
  let yob = new Date(date).getFullYear();
  console.log(yob);
  let today = new Date();
  today=today.getFullYear();

   let age=today-yob
   document.getElementById('age').textContent=`Your Age Is ${age} Years Old`
}
