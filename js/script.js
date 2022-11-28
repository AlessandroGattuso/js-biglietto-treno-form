const generate = document.getElementById("generate");
let fullName;
let km;
let age;

generate.addEventListener("click", function(){
  fullName = document.getElementById("fullName").value;
  km = document.getElementById("km").value;
  age = document.getElementById("age").value;
})