// Mengambil input pada variabel tersebut
var age = document.getElementById("age");
var height = document.getElementById("height");
var weight = document.getElementById("weight");
var male = document.getElementById("m");
var female = document.getElementById("f");
var form = document.getElementById("form");
let resultArea = document.querySelector(".comment");

modalContent = document.querySelector(".modal-content");
modalText = document.querySelector("#modalText");
var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];

// melakukan kalkulasi BMI
function calculate(){
  if(age.value=='' || height.value=='' || weight.value=='' || (male.checked==false && female.checked==false)){
    modal.style.display = "block";
    modalText.innerHTML = `All fields are required!`;
  } else {
    countBmi();
  }
}

// untuk melakukan pengecekan pada kolom
function countBmi(){
  var p = [age.value, height.value, weight.value];
  if(male.checked){
    p.push("male");
  }else if(female.checked){
    p.push("female");
  }

// Rumus menghitung BMI
  var bmi = Number(p[2])/(Number(p[1])/100*Number(p[1])/100);

// Interprestasi BMI
  var result = '';
  if(bmi<18.5){
    result = 'Kurang berat badan';
     } else if(18.5<=bmi&&bmi<=24.9){
    result = 'Normal (Ideal)';
     } else if(25<=bmi&&bmi<=29.9){
    result = 'Kelebihan berat badan';
     } else if(30<=bmi){
    result = 'Kegemukan (Obesitas)';
     }

// Hasil akhirnya
resultArea.style.display = "block";
document.querySelector(".comment").innerHTML = `Kamu <span id="comment">${result}</span>`;
document.querySelector("#result").innerHTML = bmi.toFixed(2);
}

// Jika ada input yang tidak terisi
span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
