window.onload = function() {
  const form = document.querySelector("form");
  form.onsubmit = function(event) {
    event.preventDefault();

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
  };
};