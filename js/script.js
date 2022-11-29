const generate = document.getElementById("generate");
const cancel = document.getElementById("cancel");

let km;
let age;
let typeofTicket = "Biglietto ordinario";
let price;

generate.addEventListener("click", function(){
  km = document.getElementById("km").value;
  age = document.getElementById("age").value;

  (document.getElementById("block-on-generate")).style.display = "block";
  document.getElementById("user-name").innerHTML = document.getElementById("fullName").value;

  price = km * 0.21;

  if(age === "Under-18"){
    price -= price * 0.2;
    typeofTicket = "Biglietto Under 18";
  }
  if(age === "Over-65"){
    price -= price * 0.4;
    typeofTicket = "Biglietto Over 65";
  }

  document.getElementById("typeofTicket").innerHTML = typeofTicket;
  document.getElementById("price").innerHTML = price.toFixed(2) + "€";
})

cancel.addEventListener("click", function(){
  document.getElementById("fullName").value = null;
  document.getElementById("km").value = null;
  document.getElementById("age").value = 'Adult';
})