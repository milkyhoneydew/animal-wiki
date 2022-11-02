window.addEventListener("load", function() {
  let form = document.querySelector("form");

  form.addEventListener("submit", function(event) {
    
    let turtles = document.getElementById("turtles");
    turtles.setAttribute("class", "hidden");
    let snakes = document.getElementById("snakes");
    snakes.setAttribute("class", "hidden");
    let insects = document.getElementById("insects");
    insects.setAttribute("class", "hidden");

    const animal = document.querySelector("input#animal").value;

    if (animal === "turtles") {
      turtles.removeAttribute("class");
    } else if (animal === "snakes") {
      snakes.removeAttribute("class");
    } else if (animal === "insects") {
      insects.removeAttribute("class");
    } else {
      window.alert("No animal found!");
    }

    event.preventDefault();

  });
});