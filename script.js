let p = document.querySelector("#content");
let input = document.querySelector("input");
let btn = document.querySelector("button");

btn.addEventListener("click",()=>{
  let data = input.value;
  
  p.innerHTML = data;

  input.value = "";

})





