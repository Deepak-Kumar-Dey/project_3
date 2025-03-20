let para = document.querySelector("#content");
let btn = document.querySelector("button");
let input = document.querySelector("input");
let data = input.value;

function addData(){
  para.innerHTML = data;

  input.value = "";
}


