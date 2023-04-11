let p = document.querySelector("p");
p.addEventListener('click', function(e) {
  e.stopPropagation();
  alert("Este evento no se va a propagar a los padres");
});